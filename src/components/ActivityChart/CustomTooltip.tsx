import { TooltipProps } from '../../interface/ActivityChart_interface';

export const CustomTooltip = ({ active, payload }: TooltipProps) => {
	if (active && payload && payload.length) {
		return (
			<div className="bg-red-500 text-white p-2 text-xs">
				<p>{`${payload[0].value}kg`}</p>
				<br />
				<p>{`${payload[1].value}Kcal`}</p>
			</div>
		);
	}
	return null;
};
