import { UserMainData } from '../interface/fetch_interface';

/**
 * @property {number} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {number} age
 * @property {(number|undefined)} todayScore
 * @property {(number|undefined)} score
 * les données clés de l'utilisateur
 * @property {{
 * calorieCount: number;
 * proteinCount: number;
 * carbohydrateCount: number;
 * lipidCount: number;
 * }} keyData
 * @param {UserMainData} data
 */

//création de la classe UserModel pour modéliser les données de l'utilisateur
class UserModel implements UserMainData {
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

	constructor(data: UserMainData) {
		this.id = data.id;
		this.userInfos = data.userInfos;
		this.todayScore = data.todayScore;
		this.score = data.score;
		this.keyData = data.keyData;
	}

	// affichage des données de l'utilisateur
	displayInfo() {
		return `User: ${this.userInfos.firstName} ${this.userInfos.lastName}, Age: ${this.userInfos.age}, Score: ${this.score}`;
	}
}
// export de la classe UserModel
export default UserModel;
