export const BASE_SERVER_URL = 'http://localhost:4000';

// Cars

export const BASE_URL_CARS = `${BASE_SERVER_URL}/cars`;
export const GET_CARS_LIST = `${BASE_URL_CARS}/list`;
export const GET_CAR_DETAIL = (id: string) => `${GET_CARS_LIST}/${id}`;
export const ADD_CAR = `${BASE_URL_CARS}/add`

// Users
export const BASE_URL_USERS = `${BASE_SERVER_URL}/users`;
