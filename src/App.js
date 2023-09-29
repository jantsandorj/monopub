import "./App.css";
import { lazy } from "react";
import Loadable from "./views/Loadable";
const Header = Loadable(lazy(() => import("./views/header.jsx")));
const Footer = Loadable(lazy(() => import("./views/footer.jsx")));
const Main = Loadable(lazy(() => import("./views/main.jsx")));

function App() {
  return (
    <main>
      <Header />
      <Main />
      <Footer />
    </main>
  );
}

export default App;
