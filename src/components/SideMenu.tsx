import { Link } from 'react-router-dom';
import gym from '/img/gym.png';
import swim from '/img/swim.png';
import cycling from '/img/velo.png';
import yoga from '/img/yoga.png';

export default function SideMenu() {
	return (
		<div className="flex flex-col w-28 bg-black ">
			<section className="flex-1 gap-4 flex flex-col items-center justify-center">
				<Link to="/">
					<img src={yoga} alt="Icon de yoga" className="h-16" />
				</Link>
				<Link to="/swim">
					<img src={swim} alt="Icon de natation" className="h-16" />
				</Link>
				<Link to="/velo">
					<img src={cycling} alt="Icon de cyclisme" className="h-16" />
				</Link>
				<Link to="/gym">
					<img src={gym} alt="Icon de gym" className="h-16" />
				</Link>
			</section>
			<section>
				<p className=" text-white text-sm whitespace-nowrap relative bottom-20 -rotate-90">
					Copyright, SportSee 2020
				</p>
			</section>
		</div>
	);
}
