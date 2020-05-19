export const TOKEN_COMPANY = "@company-Token";
export const TOKEN_RECRUITER = "@recruiter-Token";


export const getToken = (isCompany) => {
  const tokenKey = isCompany ? TOKEN_COMPANY : TOKEN_RECRUITER;

  return localStorage.getItem(tokenKey) || sessionStorage.getItem(tokenKey);
};

export const getAuthToken = () => getToken() || getToken(true);

export const isAuth = () => getAuthToken() !== null;

export const setAuthToken = (token, stayConnected, isCompany) => {
  const tokenKey = isCompany ? TOKEN_COMPANY : TOKEN_RECRUITER;
  const storage = stayConnected ? localStorage : sessionStorage;

  storage.setItem(tokenKey, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_COMPANY);
  localStorage.removeItem(TOKEN_RECRUITER);
  sessionStorage.removeItem(TOKEN_COMPANY);
  sessionStorage.removeItem(TOKEN_RECRUITER);
};