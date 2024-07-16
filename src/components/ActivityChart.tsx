import { useEffect, useState } from 'react';

// Importation des composants de Recharts
import {
	Bar,
	BarChart,
	CartesianGrid,
	Rectangle,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

// Recuperation des données
import { fetchUserActivity } from '../data/fetch';

// Importation de l'interface de type pour les données
import { UserActivity } from '../interface/fetch_interface';

// Importation de l'interface de type pour les props
import {
	ActivityChartProps,
	TooltipProps,
} from '../interface/ActivityChart_interface';

// Composant pour le tooltip du graphique
const CustomTooltip = ({ active, payload }: TooltipProps) => {
	// Affiche le tooltip seulement si des données sont présentes
	if (active && payload && payload.length) {
		return (
			<div className="bg-red-500 text-white p-2 text-xs">
				<p>{`${payload[0].value}kg`}</p>
				<p>{`${payload[1].value}Kcal`}</p>
			</div>
		);
	}
	//sinon retourne null
	return null;
};

/**
 * Composant ActivityChart qui affiche un graphique d'activité de l'utilisateur.
 * @param {ActivityChartProps} props - Les propriétés du composant.
 * @param {number | undefined} props.userId - L'ID de l'utilisateur.
 * @returns {JSX.Element} Le composant ActivityChart.
 */
const ActivityChart = ({ userId }: ActivityChartProps) => {
	// UseState pour stocker les données d'activité s'il y en a
	const [activityData, setActivityData] = useState<UserActivity | null>(null);

	// useEffect pour charger les données
	useEffect(() => {
		// Fonction pour récupérer les données d'activité
		const fetchData = async () => {
			// Vérifie que userId est défini
			if (userId !== undefined) {
				// Essaie de récupérer les données d'activité
				try {
					const data = await fetchUserActivity(userId);
					setActivityData(data);
				} catch (error) {
					// Si une erreur est rencontrée, affiche un message d'erreur dans la console
					console.error(
						"Erreur lors de la récupération des données d'activité:",
						error
					);
				}
			}
		};
		fetchData();
	}, [userId]);

	// Affichage d'un message de chargement si les données ne sont pas encore disponibles
	if (!activityData) {
		return <div>Chargement des données d'activité...</div>;
	}

	// Rendu du graphique d'activité
	return (
		<div className="min-h-80 w-full rounded-lg bg-white p-4">
			<h2 className="text-lg font-semibold mb-4">Activité quotidienne</h2>

			{/* Conteneur responsive pour le graphique */}
			<ResponsiveContainer width="100%" height={300}>
				{/* Graphique à barres de 6px d'espace entre les barres */}
				<BarChart data={activityData.sessions} barGap={6}>
					{/* Grille du graphique */}
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					{/* Axe X (jours) */}
					<XAxis
						dataKey="day"
						tickFormatter={(value: string) =>
							new Date(value).getDate().toString()
						}
						axisLine={{ stroke: '#DEDEDE' }}
						tickLine={false}
						tick={{ fill: '#9B9EAC', fontSize: 14 }}
						dy={15}
					/>
					{/* Axe Y pour le poids (kilogrammes) */}
					<YAxis
						yAxisId="kilogram"
						orientation="right"
						axisLine={false}
						tickLine={false}
						tick={{ fill: '#9B9EAC', fontSize: 14 }}
						dx={15}
						domain={['dataMin - 1', 'dataMax + 2']}
					/>
					{/* Axe Y pour les calories */}
					<YAxis
						yAxisId="calories"
						orientation="left"
						hide
						domain={[0, 'dataMax + 50']}
					/>
					{/* Tooltip personnalisé */}
					<Tooltip content={<CustomTooltip />} />
					{/* Barre pour le poids */}
					<Bar
						yAxisId="kilogram"
						dataKey="kilogram"
						fill="#282D30"
						barSize={10}
						radius={[10, 10, 0, 0]}
						activeBar={<Rectangle fill="#282D30" stroke="#282D30" />}
					/>
					{/* Barre pour les calories */}
					<Bar
						yAxisId="calories"
						dataKey="calories"
						fill="#E60000"
						barSize={10}
						radius={[10, 10, 0, 0]}
						activeBar={<Rectangle fill="#E60000" stroke="#E60000" />}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

// Exportation du composant ActivityChart
export default ActivityChart;
