import HexaGraphic from './Performance';
import Performance from './Score';
import TimeSession from './TimeSession';

interface GraphicDetailProps {
	userId: number | undefined;
}

export default function GraphicDetail({ userId }: GraphicDetailProps) {
	return (
		<div className="flex w-full gap-8 items-center justify-between">
			<TimeSession userId={userId} />
			<HexaGraphic userId={userId} />
			<Performance userId={userId} />{' '}
		</div>
	);
}
