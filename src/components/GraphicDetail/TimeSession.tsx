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
//ajout de fake data au début et à la fin du tableau pour correspondre au figma
const extendData = (data: Array<{ day: number; sessionLength: number }>) => {
	if (!data || data.length === 0) return [];
	const extendedData = [
		{ day: 0, sessionLength: data[0].sessionLength },
		...data,
		{ day: 8, sessionLength: data[data.length - 1].sessionLength },
	];
	return extendedData;
};

export default function TimeSession({ userId }: TimeSessionProps) {
	const sessionsData = useFetchData(fetchUserAverageSessions, userId);
	const formattedData = sessionsData ? extendData(sessionsData.sessions) : [];

	if (!formattedData) {
		return <div>Chargement des données de sessions...</div>;
	}

	const formatLabel = (value: number): string => {
		const labels = [' ', 'L', 'M', 'M', 'J', 'V', 'S', 'D', ' '];
		return labels[value];
	};

	return (
		<div className="bg-red-600 w-full max-w-80 max-h-80 aspect-square rounded-lg flex flex-col relative">
			<div className="text-base font-medium flex justify-between w-3/4 absolute top-3 left-4 text-[#ffffff7f]">
				Durée moyenne des sessions
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart data={formattedData}>
					<Line
						type="natural"
						dataKey="sessionLength"
						stroke="url(#colorUv)"
						strokeWidth={2}
						activeDot={{
							stroke: '#FFF',
							strokeWidth: 4,
							r: 2,
						}}
						dot={false}
					/>
					<XAxis
						dataKey="day"
						padding={{ left: -5, right: -5 }}
						axisLine={false}
						tickLine={false}
						tick={{
							fill: 'rgba(255,255,255,0.6)',
							fontSize: '0.85rem',
						}}
						tickFormatter={formatLabel}
						scale="point"
					/>
					<YAxis hide domain={['dataMin-10', 'dataMax+20']} />
					<Tooltip content={CustomToolTip} cursor={<CustomHover />} />
					<defs>
						<linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
							<stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
							<stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
							<stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
							<stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
							<stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
						</linearGradient>
					</defs>
					<Line
						type="monotone"
						dataKey="sessionLength"
						stroke="url(#lineGradient)"
						dot={false}
						activeDot={{
							fill: '#FFFFFF',
							strokeWidth: 3,
							r: 4,
						}}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

function CustomToolTip({ active, payload }: TooltipProps<number, string>) {
	if (active && payload && payload.length > 0) {
		return (
			<div className="bg-white w-10 text-xs h-6 text-black flex flex-col justify-around items-center ml-5 mb-8">
				<p>{`${payload[0].value}`} min</p>
			</div>
		);
	}
	return null;
}

function CustomHover({ points }: { points?: { x: number; y: number }[] }) {
	if (!points || points.length === 0) return null;

	return (
		<rect
			x={points[0].x}
			y={0}
			height="100%"
			width="100%"
			fill="rgba(0, 0, 0, 0.1)"
		/>
	);
}
