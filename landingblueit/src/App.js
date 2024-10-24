import Header from "./component/Header/Header";
import Banner from "./component/Banner/Banner";
import TopHead from "./component/Top-head/TopHead";
import Partner from "./component/Partner/Partner";
import WeAre from "./component/We-are/We-are";
import Benefit from "./component/Benefit/Benefit";
import Servic from "./component/Servic/Servic";
import Project from "./component/Project/Project";
import Procedure from "./component/Procedure/Procedure";
import Technology from "./component/Technology/Technology";
import FeedBack from "./component/Feed-Back/FeedBack";
import Staff from "./component/Staff/Staff";
import Contact from "./component/Contact/Contact";
import News from "./component/Footer/News/News";
import Footer from "./component/Footer/News/Footer/Footer";
import footer_pc from "../src/assets/images/footer_pc.png";
import { Outlet } from "react-router-dom";
import Home from "./component/Home/Home";

function App() {
  return (
    <div className="w-full">
      <div className="fixed z-[200] w-full">
        <TopHead />
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <News />
    </div>
  );
}

export default App;
