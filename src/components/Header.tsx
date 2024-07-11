import { Link } from 'react-router-dom';
import logo from '/img/logo.png';

export default function Header() {
	return (
		<div className="flex p-5 bg-black justify-between text-2xl text-white">
			<img src={logo} alt="logo" className="w-48 h-15" />
			<nav className="flex w-full justify-evenly p-4">
				<Link to="/">Accueil</Link>
				<Link to="/profile">Profil</Link>
				<Link to="/settings">Réglage</Link>
				<Link to="/community">Communauté</Link>
			</nav>
		</div>
	);
}
