import { useEffect, useState } from 'react';

function useFetchData<T>(
	fetchFunction: (userId: number) => Promise<T>,
	userId: number | undefined
) {
	const [data, setData] = useState<T | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			if (userId !== undefined) {
				try {
					const result = await fetchFunction(userId);
					setData(result);
				} catch (error) {
					console.error('Erreur lors de la récupération des données:', error);
				}
			}
		};
		fetchData();
	}, [userId, fetchFunction]);

	return data;
}

export default useFetchData;
