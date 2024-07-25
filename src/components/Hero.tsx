import { UserMainData } from '../interface/fetch_interface';

interface HeroProps {
	userData: UserMainData | null;
}
/**
 * Composant Hero qui affiche un message de bienvenue à l'utilisateur.
 * @param {HeroProps} props - Les propriétés du composant.
 * @param {UserMainData | null} props.userData - Les données de l'utilisateur.
 * @returns {JSX.Element} Le composant Hero.
 */
export default function Hero({ userData }: HeroProps) {
	return (
		<div className="flex flex-col h-32">
			<h1 className="text-4xl font-bold">
				Bonjour{' '}
				<span className="text-red-500">
					{userData ? userData.userInfos.firstName : 'Utilisateur'}
				</span>
			</h1>
			<h2 className="text-sm">
				Félicitations ! Vous avez explosé vos objectifs hier 👏
			</h2>
		</div>
	);
}
