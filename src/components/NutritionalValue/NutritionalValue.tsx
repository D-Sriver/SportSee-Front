import { NutritionalValueProps } from '../../interface/fetch_interface';
import { NutritionalItem } from './NutritionalItem';

interface NutritionalItem {
	icon: string;
	key: string;
	unit: string;
	label: string;
}
const nutritionalItems: NutritionalItem[] = [
	{
		icon: '/img/calories.png',
		key: 'calorieCount',
		unit: 'kCal',
		label: 'Calories',
	},
	{
		icon: '/img/proteines.png',
		key: 'proteinCount',
		unit: 'g',
		label: 'Protéines',
	},
	{
		icon: '/img/glucides.png',
		key: 'carbohydrateCount',
		unit: 'g',
		label: 'Glucides',
	},
	{ icon: '/img/lipides.png', key: 'lipidCount', unit: 'g', label: 'Lipides' },
];

/**
 * Composant NutritionalValue qui affiche les valeurs nutritionnelles de l'utilisateur.
 * @param {NutritionalValueProps} props - Les propriétés du composant.
 * @param {UserMainData | null} props.userData - Les données de l'utilisateur.
 * @returns {JSX.Element} Le composant NutritionalValue.
 */
export default function NutritionalValue({ userData }: NutritionalValueProps) {
	return (
		<div className="flex flex-row xl:flex-col gap-4 xl:w-[258px] xl:h-[665px] justify-between">
			{nutritionalItems.map((item) => (
				<NutritionalItem
					key={item.key}
					icon={item.icon}
					value={
						userData?.keyData[item.key as keyof typeof userData.keyData] ?? 0
					}
					unit={item.unit}
					label={item.label}
				/>
			))}
		</div>
	);
}
