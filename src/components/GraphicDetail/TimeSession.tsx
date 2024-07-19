import {
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	TooltipProps,
	XAxis,
	YAxis,
} from 'recharts';
import { fetchUserAverageSessions } from '../../data/fetch';
import useFetchData from '../hook/useFetchData';

interface TimeSessionProps {
	userId: number | undefined;
}

export default function TimeSession({ userId }: TimeSessionProps) {
	const sessionsData = useFetchData(fetchUserAverageSessions, userId);

	if (!sessionsData) {
		return <div>Chargement des données de sessions...</div>;
	}

	const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

	const formattedData = sessionsData.sessions.map((session, index) => ({
		day: daysOfWeek[index],
		sessionLength: session.sessionLength,
	}));

	const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
		if (active && payload && payload.length) {
			return (
				<div className="bg-white p-2 text-black text-xs">
					<p>{`${payload[0].value} min`}</p>
				</div>
			);
		}
		return null;
	};

	return (
		<div className="w-full max-w-80 max-h-80 aspect-square bg-red-600 rounded-lg flex flex-col p-4">
			<h2 className="text-lg font-semibold text-white p-4">
				Durée moyenne des sessions
			</h2>
			<div className="flex-grow">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={formattedData}>
						<XAxis
							dataKey="day"
							axisLine={false}
							tickLine={false}
							tick={{ fill: '#FFFFFF', opacity: 0.5 }}
							padding={{ left: 10, right: 10 }}
							dy={10}
						/>
						<YAxis hide={true} domain={['dataMin - 5', 'dataMax + 5']} />
						<Tooltip content={<CustomTooltip />} />
						<Line
							type="monotone"
							dataKey="sessionLength"
							stroke="#FFFFFF"
							strokeWidth={2}
							dot={false}
							activeDot={{ r: 8 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
