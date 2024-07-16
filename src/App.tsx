import { useEffect, useState } from 'react';
import ActivityChart from './components/ActivityChart';
import GraphicDetail from './components/GraphicDetail/GraphicDetail';
import Hero from './components/Hero';
import NutritionalValue from './components/NutritionalValue';
import { fetchUserMainData } from './data/fetch';
import { UserMainData } from './interface/fetch_interface';

const UserId: number[] = [12, 18];
/**
 * Composant principal de l'application.
 * @returns {JSX.Element} Le composant App.
 */
export default function App() {
	const [userData, setUserData] = useState<UserMainData | null>(null);

	useEffect(() => {
		const getUserData = async () => {
			// Choisir aléatoirement entre 12 et 18
			const currentUserId = Math.random() < 0.5 ? UserId[0] : UserId[1];
			const data = await fetchUserMainData(currentUserId);
			setUserData(data);
		};

		getUserData();
	}, []);

	return (
		<>
			<Hero userData={userData} />

			<div className="flex flex-row p-7 gap-8 justify-between">
				<div className="flex flex-col w-full gap-8">
					<div className="flex flex-row">
						<ActivityChart userId={userData?.id ?? undefined} />{' '}
					</div>
					<div className="flex flex-row">
						<GraphicDetail userId={userData?.id} />
					</div>
				</div>
				<NutritionalValue userData={userData} />
			</div>
		</>
	);
}
