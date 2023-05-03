const HOME_ROUTE = "/";
const UNIVERSITIES_ROUTE = "/universities";
const SEARCH_ROUTE = `${UNIVERSITIES_ROUTE}/:countryName`;
const DETAILS_ROUTE = `${SEARCH_ROUTE}/:uniName`;
const ABOUT_ROUTE = "/aboutUs";
const CONTACT_ROUTE = "/contact";
const ERROR_ROUTE = "*";

export default {
  HOME_ROUTE,
  UNIVERSITIES_ROUTE,
  ERROR_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  SEARCH_ROUTE,
  DETAILS_ROUTE,
};
