import {
	UserActivity,
	UserAverageSessions,
	UserMainData,
	UserPerformance,
} from '../interface/fetch_interface';
import UserModel from '../model/UserModel';

import { mockData } from '../mock/mockData';
//todo:
//todo : passer a l'api avec axios
//todo :crée une page login
//todo : corriger le linecharts (crop text, color red foncé, ligne )
//todo : changer hexa intensité
//todo : Activité quotidienne ,fond , couleur ; bord des graphique et legende

/**
 * Récupère les données principales de l'utilisateur.
 * @param userId - L'ID de l'utilisateur.
 * @throws {Error} Si l'utilisateur n'est pas trouvé.
 */
export const fetchUserMainData = async (
	userId: number
): Promise<UserMainData> => {
	const userData = mockData.USER_MAIN_DATA.find((user) => user.id === userId);
	if (!userData) throw new Error('Utilisateur non trouvé');
	return new UserModel(userData);
};

export const fetchUserActivity = async (
	userId: number
): Promise<UserActivity> => {
	const activityData = mockData.USER_ACTIVITY.find(
		(activity) => activity.userId === userId
	);
	if (!activityData) throw new Error("Données d'activité non trouvées");
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
