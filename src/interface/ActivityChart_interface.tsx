import { UserActivity } from './fetch_interface';

export interface ActivityChartProps {
	userId?: number;
}

export interface ActivityChartState {
	activityData: UserActivity | null;
}

export interface TooltipProps {
	active?: boolean;
	payload?: Array<{
		value: number;
		dataKey: string;
		name: string;
	}>;
}
