import Header from "./component/Header/Header";
import Banner from "./component/Banner/Banner";
import TopHead from "./component/Top-head/TopHead";

function App() {
  return (
    <div className="w-full">
      <div>
        <TopHead />
        <Header />
      </div>

      <div className=" w-full p-3">
        <Banner />
      </div>
    </div>
  );
}

export default App;
