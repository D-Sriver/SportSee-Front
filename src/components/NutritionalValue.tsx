import { NutritionalValueProps } from '../interface/fetch_interface';
import calories from '/img/calories.png';
import glucides from '/img/glucides.png';
import lipides from '/img/lipides.png';
import proteines from '/img/proteines.png';

// Affiche les valeurs nutritionnelles depuis le props userData
export default function NutritionalValue({ userData }: NutritionalValueProps) {
	return (
		<div className="flex flex-col w-1/3 justify-between rounded-lg gap-8">
			<div className="flex items-center gap-4 h-1/4 bg-zinc-50 rounded-lg p-7">
				<div className="w-1/3 h-full flex items-center justify-center">
					<img
						src={calories}
						alt="Calories"
						className="max-w-full max-h-full object-contain"
					/>
				</div>
				<div className="flex flex-col justify-center">
					<p className="font-bold">
						{userData?.keyData.calorieCount ?? 0} kCal
					</p>
					<p className="text-sm text-gray-500">Calories</p>
				</div>
			</div>
			<div className="flex items-center gap-4 h-1/4 bg-zinc-50 rounded-lg p-7">
				<div className="w-1/3 h-full flex items-center justify-center">
					<img
						src={proteines}
						alt="Protéines"
						className="max-w-full max-h-full object-contain"
					/>
				</div>
				<div className="flex flex-col justify-center">
					<p className="font-bold">{userData?.keyData.proteinCount ?? 0} g</p>
					<p className="text-sm text-gray-500">Protéines</p>
				</div>
			</div>
			<div className="flex items-center gap-4 h-1/4 bg-zinc-50 rounded-lg p-7">
				<div className="w-1/3 h-full flex items-center justify-center">
					<img
						src={glucides}
						alt="Glucides"
						className="max-w-full max-h-full object-contain"
					/>
				</div>
				<div>
					<p className="font-bold">
						{userData?.keyData.carbohydrateCount ?? 0} g
					</p>
					<p>Glucides</p>
				</div>
			</div>
			<div className="flex items-center gap-4 h-1/4 bg-zinc-50 rounded-lg p-7">
				<div className="w-1/3 h-full flex items-center justify-center">
					<img
						src={lipides}
						alt="Lipides"
						className="max-w-full max-h-full object-contain"
					/>
				</div>
				<div>
					<p className="font-bold">{userData?.keyData.lipidCount ?? 0} g</p>
					<p>Lipides</p>
				</div>
			</div>
		</div>
	);
}
