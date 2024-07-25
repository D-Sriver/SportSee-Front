interface NutritionalItemProps {
	icon: string;
	value: number;
	unit: string;
	label: string;
}

export const NutritionalItem = ({
	icon,
	value,
	unit,
	label,
}: NutritionalItemProps) => (
	<div className="flex items-center gap-4 bg-zinc-50 rounded-lg p-7">
		<div className="w-1/3 h-full flex items-center justify-center">
			<img
				src={icon}
				alt={label}
				className="max-w-full max-h-full object-contain"
			/>
		</div>
		<div className="flex flex-col justify-center">
			<p className="font-bold">
				{value} {unit}
			</p>
			<p className="text-sm text-gray-500">{label}</p>
		</div>
	</div>
);
