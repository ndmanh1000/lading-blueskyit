import Banner from "../Banner/Banner";
import Partner from "../Partner/Partner";
import WeAre from "../We-are/We-are";
import Benefit from "../Benefit/Benefit";
import Servic from "../Servic/Servic";
import Project from "../Project/Project";
import Technology from "../Technology/Technology";
import FeedBack from "../Feed-Back/FeedBack";
import Staff from "../Staff/Staff";
import ProjectProcess from "../Procedure/Procedure";
import Footer from "../Footer/News/Footer/Footer";
import News from "../Footer/News/News";
import Header from "../Header/Header";
import TopHead from "../Top-head/TopHead";
export default function HomeDefault() {
  return (
    <div>
      <div className=" w-full p-3">
        <Banner />
      </div>
      <Partner />
      <WeAre />
      <div className="mt-6 lg:mt-12">
        <div className="border border-b-[#E2E2E2]  container mx-auto"></div>
        <Benefit />
        <div className="border border-b-[#E2E2E2] container mx-auto"></div>
      </div>
      <Servic />

      <Project />
      <ProjectProcess />
      <Technology />
      <FeedBack />
      <Staff />
    </div>
  );
}
