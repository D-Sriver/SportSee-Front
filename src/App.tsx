import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ActivityChart from './components/ActivityChart/ActivityChart';
import GraphicDetail from './components/GraphicDetail/GraphicDetail';
import Hero from './components/Hero';
import NutritionalValue from './components/NutritionalValue/NutritionalValue';
import { fetchUserMainData } from './data/fetch';
import { UserMainData } from './interface/fetch_interface';

export default function App() {
	const [userData, setUserData] = useState<UserMainData | null>(null);
	const location = useLocation();

	useEffect(() => {
		const getUserData = async () => {
			const searchParams = new URLSearchParams(location.search);
			const userId = searchParams.get('userId');
			if (userId) {
				const data = await fetchUserMainData(parseInt(userId, 10));
				setUserData(data);
			}
		};

		getUserData();
	}, [location]);

	if (!userData) {
		return <div>Chargement des données...</div>;
	}

	return (
		<div className="flex flex-col h-[70vh]">
			<Hero userData={userData} />
			<div className="flex flex-1 gap-8">
				<div className="flex flex-col w-3/4 gap-8">
					<ActivityChart userId={userData.id} />
					<GraphicDetail userId={userData.id} />
				</div>
				<NutritionalValue userData={userData} />
			</div>
		</div>
	);
}
