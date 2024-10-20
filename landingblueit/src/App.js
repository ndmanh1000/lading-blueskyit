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

function App() {
  return (
    <div className="w-full">
      <div className="fixed z-[200] w-full">
        <TopHead />
        <Header />
      </div>

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
      <Procedure />
      <Technology />
    </div>
  );
}

export default App;
