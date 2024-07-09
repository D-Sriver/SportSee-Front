import Header from './Header';
import SideMenu from './SideMenu';
import { Outlet } from 'react-router-dom';

export default function Layout() {
	return (
		<>
			<Header />
			<div className="flex">
				<SideMenu />
				<main className="flex-grow">
					<Outlet />
				</main>
			</div>
		</>
	);
}
