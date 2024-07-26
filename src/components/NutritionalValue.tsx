import { NutritionalValueProps } from '../interface/fetch_interface';
import { NutritionalItem } from './NutritionalValue/NutritionalItem';
import calories from '/img/calories.png';
import glucides from '/img/glucides.png';
import lipides from '/img/lipides.png';
import proteines from '/img/proteines.png';

// Affiche les valeurs nutritionnelles depuis le props userData
export default function NutritionalValue({ userData }: NutritionalValueProps) {
	return (
		<div className="flex flex-col w-1/3 justify-between rounded-lg gap-8">
			<NutritionalItem
				icon={calories}
				value={userData?.keyData.calorieCount ?? 0}
				unit="kCal"
				label="Calories"
			/>
			<NutritionalItem
				icon={proteines}
				value={userData?.keyData.proteinCount ?? 0}
				unit="g"
				label="Protéines"
			/>
			<NutritionalItem
				icon={glucides}
				value={userData?.keyData.carbohydrateCount ?? 0}
				unit="g"
				label="Glucides"
			/>
			<NutritionalItem
				icon={lipides}
				value={userData?.keyData.lipidCount ?? 0}
				unit="g"
				label="Lipides"
			/>
		</div>
	);
}
