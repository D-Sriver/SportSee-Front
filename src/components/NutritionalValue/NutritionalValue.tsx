import { NutritionalValueProps } from '../../interface/fetch_interface';
import { NutritionalItem } from './NutritionalItem';

export default function NutritionalValue({ userData }: NutritionalValueProps) {
	return (
		<div className="flex flex-col h-full justify-between">
			<NutritionalItem
				icon="/img/calories.png"
				value={userData?.keyData.calorieCount ?? 0}
				unit="kCal"
				label="Calories"
			/>
			<NutritionalItem
				icon="/img/proteines.png"
				value={userData?.keyData.proteinCount ?? 0}
				unit="g"
				label="Protéines"
			/>
			<NutritionalItem
				icon="/img/glucides.png"
				value={userData?.keyData.carbohydrateCount ?? 0}
				unit="g"
				label="Glucides"
			/>
			<NutritionalItem
				icon="/img/lipides.png"
				value={userData?.keyData.lipidCount ?? 0}
				unit="g"
				label="Lipides"
			/>
		</div>
	);
}
