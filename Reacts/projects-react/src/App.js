import "./App.css";
import NavUl from "./navUl";
import Cards from "./Cards";
import ImgButton from "./imgButton";

const App = () => {
  return (
    <div className="app">
      <NavUl />
      <div className="contaner">
        <Cards />
        <ImgButton/>
      </div>
    </div>
  );
}

export default App;
