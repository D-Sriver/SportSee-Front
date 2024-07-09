export default function App() {
	const userData = {
		firstName: 'Thomas',
	};
	return (
		<>
			<div className="flex flex-col gap-6 h-40 p-32">
				<h1 className="gap-4 font-medium text-black text-4xl">
					Bonjour <span className="text-red-500">{userData?.firstName}</span>
				</h1>

				<h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
			</div>
		</>
	);
}
