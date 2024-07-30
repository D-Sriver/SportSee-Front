import axios from 'axios';
import {
	UserActivity,
	UserAverageSessions,
	UserMainData,
	UserPerformance,
} from '../interface/fetch_interface';
import UserModel from '../model/UserModel';

const BASE_URL = 'http://localhost:3000';

export const fetchUserMainData = async (
	userId: number
): Promise<UserMainData> => {
	try {
		const response = await axios.get(`${BASE_URL}/user/${userId}`);
		return new UserModel(response.data.data);
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des données principales de l'utilisateur:",
			error
		);
		throw new Error('Utilisateur non trouvé');
	}
};

export const fetchUserActivity = async (
	userId: number
): Promise<UserActivity> => {
	try {
		const response = await axios.get(`${BASE_URL}/user/${userId}/activity`);
		return response.data.data;
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des données d'activité:",
			error
		);
		throw new Error("Données d'activité non trouvées");
	}
};

export const fetchUserAverageSessions = async (
	userId: number
): Promise<UserAverageSessions> => {
	try {
		const response = await axios.get(
			`${BASE_URL}/user/${userId}/average-sessions`
		);
		return response.data.data;
	} catch (error) {
		console.error(
			'Erreur lors de la récupération des données de sessions moyennes:',
			error
		);
		throw new Error('Données de sessions moyennes non trouvées');
	}
};

export const fetchUserPerformance = async (
	userId: number
): Promise<UserPerformance> => {
	try {
		const response = await axios.get(`${BASE_URL}/user/${userId}/performance`);
		return response.data.data;
	} catch (error) {
		console.error(
			'Erreur lors de la récupération des données de performance:',
			error
		);
		throw new Error('Données de performance non trouvées');
	}
};
