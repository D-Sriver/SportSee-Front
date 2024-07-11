import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideMenu from './SideMenu';

export default function Layout() {
	return (
		<>
			<div className="flex flex-col min-h-dvh">
				<Header />
				<div className="flex flex-1">
					<SideMenu />
					<main className="flex-grow">
						<Outlet />
					</main>
				</div>
			</div>
		</>
	);
}
