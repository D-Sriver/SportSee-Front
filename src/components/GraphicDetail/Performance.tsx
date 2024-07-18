import { useEffect, useState } from 'react';
import {
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
	ResponsiveContainer,
} from 'recharts';
import { fetchUserPerformance } from '../../data/fetch';
import { UserPerformance } from '../../interface/fetch_interface';

interface PerformanceProps {
	userId: number | undefined;
}

export default function Performance({ userId }: PerformanceProps) {
	const [performanceData, setPerformanceData] =
		useState<UserPerformance | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			if (userId !== undefined) {
				try {
					const data = await fetchUserPerformance(userId);
					setPerformanceData(data);
				} catch (error) {
					console.error(
						'Erreur lors de la récupération des données de performance:',
						error
					);
				}
			}
		};
		fetchData();
	}, [userId]);

	if (!performanceData) {
		return <div>Chargement des données de performance...</div>;
	}

	const formattedData = performanceData.data.map((item) => ({
		subject: performanceData.kind[item.kind],
		A: item.value,
		fullMark: 150,
	}));

	return (
		<div className="w-full max-w-80 max-h-80 aspect-square bg-gray-800 rounded-lg flex flex-col p-4">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="80%" data={formattedData}>
					<PolarGrid />
					<PolarAngleAxis
						dataKey="subject"
						tick={{ fill: '#FFFFFF', fontSize: 12 }}
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
