// Constants
import { APP_STATUS, LOGIN_STATUS } from 'utils/constants';

export const isAppLoading = status => status === APP_STATUS.LOADING;

export const isLoggedIn = status => status === LOGIN_STATUS.LOGGED_IN;

// TODO update this call
export const isUserLoggedIn = token => token === null;
