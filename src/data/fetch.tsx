import {
	UserActivity,
	UserAverageSessions,
	UserMainData,
	UserPerformance,
} from '../interface/fetch_interface';
import { mockData } from '../mock/mockData';

/**
 * Récupère les données principales de l'utilisateur.
 * @param userId - L'ID de l'utilisateur.
 * @throws {Error} Si l'utilisateur n'est pas trouvé.
 */
export const fetchUserMainData = async (
	userId: number
	// promise qui retourne les données de l'utilisateur
): Promise<UserMainData> => {
	// Recherche les données de l'utilisateur dans le mockData
	const userData = mockData.USER_MAIN_DATA.find((user) => user.id === userId);
	if (!userData) throw new Error('Utilisateur non trouvé');
	return {
		...userData,
		// si score ou todayScore manquant, on les remplace par 0
		score: userData.score ?? userData.todayScore ?? 0,
	};
};

export const fetchUserActivity = async (
	userId: number
): Promise<UserActivity> => {
	const activityData = mockData.USER_ACTIVITY.find(
		(activity) => activity.userId === userId
	);
	if (!activityData) {
		throw new Error(
			`Données d'activité non trouvées pour l'utilisateur ${userId}`
		);
	}
	return activityData;
};

export const fetchUserAverageSessions = async (
	userId: number
): Promise<UserAverageSessions> => {
	const sessionsData = mockData.USER_AVERAGE_SESSIONS.find(
		(sessions) => sessions.userId === userId
	);
	if (!sessionsData)
		throw new Error('Données de sessions moyennes non trouvées');
	return sessionsData;
};

export const fetchUserPerformance = async (
	userId: number
): Promise<UserPerformance> => {
	const performanceData = mockData.USER_PERFORMANCE.find(
		(performance) => performance.userId === userId
	);
	if (!performanceData) throw new Error('Données de performance non trouvées');
	return performanceData;
};
