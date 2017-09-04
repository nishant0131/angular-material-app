import { API_BASE_URL } from "./api.server";

export const BASE: string = `https://${API_BASE_URL}`;
export const SIGNUP: string = `${BASE}/register`;
export const CONTACT: string = `${BASE}/contact`;
export const ACTIVATE: string = `/business/activate`;

export const API = {
  SIGNUP,
  CONTACT,
  ACTIVATE
};
