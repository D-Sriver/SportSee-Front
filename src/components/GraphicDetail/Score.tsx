import { useEffect, useState } from 'react';
import {
	PolarAngleAxis,
	RadialBar,
	RadialBarChart,
	ResponsiveContainer,
} from 'recharts';
import { fetchUserMainData } from '../../data/fetch';
import { UserMainData } from '../../interface/fetch_interface';

interface ScoreProps {
	userId: number | undefined;
}

export default function Score({ userId }: ScoreProps) {
	const [userData, setUserData] = useState<UserMainData | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			if (userId !== undefined) {
				try {
					const data = await fetchUserMainData(userId);
					setUserData(data);
				} catch (error) {
					console.error(
						'Erreur lors de la récupération des données utilisateur:',
						error
					);
				}
			}
		};
		fetchData();
	}, [userId]);

	if (!userData) {
		return <div>Chargement des données...</div>;
	}

	const scorePercentage = Math.round(
		(userData.score ?? userData.todayScore ?? 0) * 100
	);
	const data = [{ scorePercentage, fill: '#FF0000' }];

	return (
		<div className="w-full max-w-80 max-h-80 aspect-square bg-zinc-50 rounded-lg flex flex-col relative">
			<h2 className="relative left-4 top-4">Score</h2>
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
