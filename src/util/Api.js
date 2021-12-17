import { BASE_URL } from "./Config";
import axios from "axios";

export const BASE_API_URL = `${BASE_URL}:3001/api/`;

export const Api = () => {
	console.log(BASE_API_URL);
	const apiAxios = axios.create({
		baseURL: BASE_API_URL,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	});
	return apiAxios;
};