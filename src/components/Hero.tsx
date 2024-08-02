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
		<div className="flex flex-col h-40 xl:h-52">
			<h1 className="text-5xl font-regular">
				Bonjour{' '}
				<span className="text-[#FF0000]">
					{userData ? userData.userInfos.firstName : 'Utilisateur'}
				</span>
			</h1>
			<h2 className="pt-4 text-lg">
				Félicitations ! Vous avez explosé vos objectifs hier 👏
			</h2>
		</div>
	);
}
