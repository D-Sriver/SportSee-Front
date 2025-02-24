import {
	PolarAngleAxis,
	RadialBar,
	RadialBarChart,
	ResponsiveContainer,
} from 'recharts';
import useFetchData from '../../components/hook/useFetchData';
import { fetchUserMainData } from '../../data/fetch';

/**
 * Interface définissant les propriétés du composant Score.
 */
interface ScoreProps {
	/** L'ID de l'utilisateur, peut être undefined */
	userId: number | undefined;
}

/**
 * Composant Score qui affiche le score de l'utilisateur sous forme de graphique radial.
 * @param {ScoreProps} props - Les propriétés du composant.
 * @returns {JSX.Element} Le composant Score.
 */
export default function Score({ userId }: ScoreProps) {
	const userData = useFetchData(fetchUserMainData, userId);

	if (!userData) {
		return <div>Chargement des données...</div>;
	}

	/**
	 * Calcule le pourcentage du score de l'utilisateur.
	 * @type {number}
	 */
	const scorePercentage = Math.round(
		(userData.score ?? userData.todayScore ?? 0) * 100
	);

	/**
	 * Données formatées pour le graphique radial.
	 * @type {Array<{scorePercentage: number, fill: string}>}
	 */
	const data = [{ scorePercentage, fill: '#FF0000' }];

	return (
		<div className="w-[258px] h-[263px] bg-zinc-50 rounded-lg flex flex-col relative">
			<h2 className="z-10 absolute left-4 top-4">Score</h2>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					cx="50%"
					cy="50%"
					innerRadius="80%"
					outerRadius="100%"
					barSize={10}
					data={data}
					startAngle={90}
					endAngle={450}
				>
					<PolarAngleAxis
						type="number"
						domain={[0, 100]}
						angleAxisId={0}
						tick={false}
					/>
					<RadialBar
						background
						dataKey="scorePercentage"
						cornerRadius={'90%'}
					/>
					<text
						x="50%"
						y="45%"
						textAnchor="middle"
						dominantBaseline="middle"
						className="font-bold text-2xl fill-current text-gray-700"
					>
						{scorePercentage}%
					</text>
					<text
						x="50%"
						y="55%"
						textAnchor="middle"
						dominantBaseline="middle"
						className="text-sm fill-current text-gray-500"
					>
						de votre
					</text>
					<text
						x="50%"
						y="62%"
						textAnchor="middle"
						dominantBaseline="middle"
						className="text-sm fill-current text-gray-500"
					>
						objectif
					</text>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	);
}
