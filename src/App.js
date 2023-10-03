import "./App.css";
import { lazy } from "react";
import Loadable from "./views/Loadable";
const Header = Loadable(lazy(() => import("./views/header.jsx")));
const Footer = Loadable(lazy(() => import("./views/footer.jsx")));
const MainPage = Loadable(lazy(() => import("./views/mainpage.jsx")));

function App() {
  
    window.addEventListener("scroll", function () {
      var content_conts = document.querySelectorAll("section");
      var windowHeight = window.innerHeight;
      content_conts.forEach(function (content_cont) {
        var rect = content_cont.getBoundingClientRect();
        if (rect.top - windowHeight / 1.5 <= 0) {
          content_cont.classList.add("active");
        } else {
          content_cont.classList.remove("active");
        }
      });
    });
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", function () {
        var windowHeight = window.innerHeight;
        var bgMove = document.getElementById("bg-move");
        var bgTop = bgMove.getBoundingClientRect();
        const value = window.scrollY;
        const row = document.getElementsByClassName("row");
        if (bgTop.top - windowHeight / 1.5 <= 0 && row != null) {
          row[0].style.left = -2000 + 0.2 * value + "px";
          row[1].style.left = 1200 - 0.2 * value + "px";
          row[2].style.left = -1500 + 0.2 * value + "px";
        }
      });
    }
  
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
