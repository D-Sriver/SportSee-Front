import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideMenu from './SideMenu';

export default function Layout() {
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<div className="flex flex-1 overflow-hidden">
				<SideMenu />
				<main className="flex-grow overflow-auto p-4">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
