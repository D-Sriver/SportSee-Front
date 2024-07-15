interface UserMainData {
	id: number;
	userInfos: {
		firstName: string;
		lastName: string;
		age: number;
	};
	todayScore?: number;
	score?: number;
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

export type {
	UserActivity,
	UserAverageSessions,
	UserMainData,
	UserPerformance,
};
