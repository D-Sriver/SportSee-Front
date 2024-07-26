import { useEffect, useState } from 'react';

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
import { fetchUserActivity } from '../data/fetch';
import { ActivityChartProps } from '../interface/ActivityChart_interface';
import { UserActivity } from '../interface/fetch_interface';
import { CustomTooltip } from './ActivityChart/CustomTooltip';

const ActivityChart = ({ userId }: ActivityChartProps) => {
	const [activityData, setActivityData] = useState<UserActivity | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			if (userId !== undefined) {
				try {
					const data = await fetchUserActivity(userId);
					setActivityData(data);
				} catch (error) {
					console.error(
						"Erreur lors de la récupération des données d'activité:",
						error
					);
				}
			}
		};
		fetchData();
	}, [userId]);

	if (!activityData) {
		return <div>Chargement des données d'activité...</div>;
	}

	return (
		<div className="min-h-80 w-full rounded-lg bg-white p-4">
			<h2 className="text-lg font-semibold mb-4">Activité quotidienne</h2>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart data={activityData.sessions}>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
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
					<YAxis
						yAxisId="kilogram"
						orientation="right"
						axisLine={false}
						tickLine={false}
						tick={{ fill: '#9B9EAC', fontSize: 14 }}
						dx={15}
						domain={['dataMin - 1', 'dataMax + 2']}
					/>
					<YAxis
						yAxisId="calories"
						orientation="left"
						hide
						domain={[0, 'dataMax + 50']}
					/>
					<Tooltip
						content={<CustomTooltip />}
						cursor={{ fill: '#C4C4C4', fillOpacity: 0.5 }}
					/>
					<Bar
						yAxisId="kilogram"
						dataKey="kilogram"
						fill="#282D30"
						barSize={10}
						radius={[10, 10, 0, 0]}
						activeBar={<Rectangle fill="#282D30" stroke="#282D30" />}
					/>
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

export default ActivityChart;
