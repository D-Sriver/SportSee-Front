import { UserMainData } from '../interface/fetch_interface';

interface HeroProps {
	userData: UserMainData | null;
}

export default function Hero({ userData }: HeroProps) {
	return (
		<div className=" flex flex-col p-10">
			{/* //récupère le prénom de l'utilisateur */}
			<h1 className=" text-4xl font-bold">
				Bonjour{' '}
				<span className=" text-red-500">
					{userData ? userData.userInfos.firstName : 'Utilisateur'}
				</span>
			</h1>
			<h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
		</div>
	);
}
