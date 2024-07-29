import {
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
	ResponsiveContainer,
} from 'recharts';
import { fetchUserPerformance } from '../../data/fetch';
import { UserPerformance } from '../../interface/fetch_interface';
import useFetchData from '../hook/useFetchData';

interface Performance {
	userId: number | undefined;
}

const Traduction = {
	cardio: 'Cardio',
	energy: 'Énergie',
	endurance: 'Endurance',
	strength: 'Force',
	speed: 'Vitesse',
	intensity: 'Intensité',
};

const formatLabel = (value: string): string => {
	return Traduction[value.toLowerCase() as keyof typeof Traduction] || value;
};

export default function HexaGraphic({ userId }: Performance) {
	const performanceData = useFetchData<UserPerformance>(
		fetchUserPerformance,
		userId
	);

	if (!performanceData) {
		return <div>Chargement des données de performance...</div>;
	}

	const formattedData = [...performanceData.data].reverse().map((item) => ({
		subject: performanceData.kind[item.kind],
		A: item.value,
		fullMark: 150,
	}));

	return (
		<div className="w-full max-w-80 max-h-80 aspect-square bg-gray-800 rounded-lg flex flex-col">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="70%" data={formattedData}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis
						dataKey="subject"
						tick={{ fill: '#FFFFFF', fontSize: 10, dy: 3 }}
						tickFormatter={formatLabel}
					/>
					<Radar
						name="Performance"
						dataKey="A"
						stroke="#FF0101"
						fill="#FF0101"
						fillOpacity={0.7}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
}
