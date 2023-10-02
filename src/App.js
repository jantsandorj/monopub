import "./App.css";
import { lazy } from "react";
import Loadable from "./views/Loadable";
const Header = Loadable(lazy(() => import("./views/header.jsx")));
const Footer = Loadable(lazy(() => import("./views/footer.jsx")));
const MainPage = Loadable(lazy(() => import("./views/mainpage.jsx")));

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
