import HexaGraphic from './HexaGraphic';
import TimeSession from './TimeSession';

interface GraphicDetailProps {
	userId: number | undefined;
}

export default function GraphicDetail({ userId }: GraphicDetailProps) {
	return (
		<div className="flex w-full gap-8 items-center justify-between">
			<TimeSession userId={userId} />
			<HexaGraphic userId={userId} />{' '}
			<div className="w-full min-h-64 bg-red-600">Score</div>
		</div>
	);
}
