import HomeSelect from "./Component/Home/Home-select";
import HomePage from "./Component/Home/HomePage";
import "./style/style.scss";
import "./style/style-mobile.scss";

const banner = {
  src: "./img/home.jpg",
  text: "OIL, GAS & INDUSTRIAL",
};

function App() {
  return (
    <div className="App">
      <HomePage banner={banner} />
      <HomeSelect />
    </div>
  );
}

export default App;
