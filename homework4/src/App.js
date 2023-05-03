import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Universities from "./pages/universities/Universities";
import routes from "./config/constants/routes";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Search from "./pages/search/Search";
import Details from "./pages/details/Details";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path={routes.HOME_ROUTE} element={<Home />} />
        <Route path={routes.UNIVERSITIES_ROUTE} element={<Universities />} />
        <Route path={routes.SEARCH_ROUTE} element={<Search />} />
        <Route path={routes.DETAILS_ROUTE} element={<Details />} />
        <Route path={routes.ABOUT_ROUTE} element={<About />} />
        <Route path={routes.CONTACT_ROUTE} element={<Contact />} />
        <Route path={routes.ERROR_ROUTE} element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
