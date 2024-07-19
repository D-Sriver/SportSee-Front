import { Link } from 'react-router-dom';

export default function SelectUser() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 animate-fade-in">
			<h1 className="text-3xl font-bold mb-8">Choisissez un utilisateur</h1>
			<div className="flex space-x-4">
				<Link
					to="/dashboard?userId=12"
					className="flex justify-center items-center bg-red-600 hover:bg-red-500 w-32 h-14 transition-all duration-300 text-white font-bold py-10 px-12 rounded text-xl transform hover:scale-105"
				>
					Karl
				</Link>
				<Link
					to="/dashboard?userId=18"
					className="flex justify-center items-center bg-red-600 hover:bg-red-500 w-32 h-14 transition-all duration-300 text-white font-bold py-10 px-12 rounded text-xl transform hover:scale-105"
				>
					Cecilia
				</Link>
			</div>
		</div>
	);
}
