export const API = {
  DEV: 'http://localhost:3001',
  PROD: 'FOOBAR',
};

export const FULL_URLS = {
  FCF_BLOG: 'http://www.foundationcrossfit.com/blog/',
};

// export const FULL_PATHS = { // TODO
//   ANNOUNCEMENTS: '/app/announcements',
//   APP: '/app',
//   AUTH: '/auth',
//   DASHBOARD: '/app/dashboard',
//   EVENTS: '/app/events',
//   LOGIN: '/login',
//   ROOT: '/',
//   USER: '/app/users/:id',
//   USERS: '/app/users',
//   WODS: '/app/wods',
// };

export const PATHS = {
  ANNOUNCEMENTS: '/announcements',
  APP: '/app',
  AUTH: '/auth',
  CURRENT_WEEK: '/current-week',
  DASHBOARD: '/dashboard',
  EVENTS: '/events',
  EVENT_TYPES: '/eventTypes',
  LOGIN: '/login',
  ROOT: '/',
  USERS: '/users',
  VIEWED_BY: '/viewedBy',
  WODS: '/wods',
};

// export const QUERY_STRING = { // TODO
//   CREATED_BY_USER: {
//     PARAM: {
//       key: 'PARAM',
//       value: 'createdByUser',
//     },
//   },
//   DIRECTION: {
//     ASC: {
//       key: 'ASC',
//       value: 'asc',
//     },
//     DESC: {
//       key: 'DESC',
//       value: 'desc',
//     },
//     PARAM: {
//       key: 'PARAM',
//       value: 'direction',
//     },
//   },
//   LOGIN_FROM: {
//     APP: 'app',
//     PARAM: 'loginFrom',
//     PORTAL: 'portal',
//   },
//   UPDATED_BY_USER: {
//     PARAM: {
//       key: 'PARAM',
//       value: 'updatedByUser',
//     },
//   },
// };

export const SOCKETS = {
  NAMESPACES: {
    ANNOUNCEMENTS: '/announcements',
    EVENTS: '/events',
    WODS: '/wods',
  },
};

// export { API, FULL_PATHS, PATHS, QUERY_STRING }; // TODO
// export { API, PATHS };
