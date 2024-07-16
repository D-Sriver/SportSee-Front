/**
 * Interface représentant les données principales d'un utilisateur.
 */
interface UserMainData {
	/** L'ID de l'utilisateur */
	id: number;
	/** Les informations de l'utilisateur */
	userInfos: {
		firstName: string;
		lastName: string;
		age: number;
	};
	/** Le score du jour  */
	todayScore?: number;
	/** Le score global */
	score?: number;
	/** Les données clés de l'utilisateur */
	keyData: {
		calorieCount: number;
		proteinCount: number;
		carbohydrateCount: number;
		lipidCount: number;
	};
}

interface UserActivity {
	userId: number;
	sessions: {
		day: string;
		kilogram: number;
		calories: number;
	}[];
}

interface UserAverageSessions {
	userId: number;
	sessions: {
		day: number;
		sessionLength: number;
	}[];
}

interface UserPerformance {
	userId: number;
	kind: {
		[key: number]: string;
	};
	data: {
		value: number;
		kind: number;
	}[];
}

interface NutritionalValueProps {
	userData: UserMainData | null;
}

export type {
	NutritionalValueProps,
	UserActivity,
	UserAverageSessions,
	UserMainData,
	UserPerformance,
};
