import { Link } from 'react-router-dom';
import gym from '/img/gym.png';
import swim from '/img/swim.png';
import cycling from '/img/velo.png';
import yoga from '/img/yoga.png';

export default function SideMenu() {
	return (
		<div className="h-[calc(100vh-80px)] bg-black w-28 flex flex-col items-center justify-evenly">
			<section className="gap-4 flex flex-col items-center justify-evenly">
				<Link to="/">
					<img src={yoga} alt="Icon de yoga" className="h-20" />
				</Link>
				<Link to="/">
					<img src={swim} alt="Icon de natation" className="h-20" />
				</Link>
				<Link to="/">
					<img src={cycling} alt="Icon de cyclisme" className="h-20" />
				</Link>
				<Link to="/">
					<img src={gym} alt="Icon de gym" className="h-20" />
				</Link>
			</section>
			<section>
				<p className="text-white text-xs -rotate-90 w-80 flex justify-start">
					Copyright, SportSee 2020
				</p>
			</section>
		</div>
	);
}
