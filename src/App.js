import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Switch, Route } from "react-router";

// Components
import TopHeader from "./components/navbar/navbar";
import AllBuildings from "./components/AllBuildings/allBuildings";
import Complexes from "./components/Complexes/complexes";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <TopHeader />
      </nav>
      <main className="main_part">
        <div className="container main_container">
          <h1 className="text-light text-center pt-5">
            All houses consist of three rooms
          </h1>
          <h2 className="text-light text-center mb-5">
            Choose a house by filtering🏡
          </h2>
          <div className="row mt-5 pb-5 d-flex align-items-center">
            <div className="col-3">
              <h4 className="text-center text-light pb-2">
                Building Companies:
              </h4>

              <AllBuildings />
            </div>
            <div className="col-3">
              <h4 className="text-center text-light pb-2">Complexes:</h4>
              {/* < Complexes /> */}
            </div>
            <div className="col-3"></div>
            <div className="col-3"></div>
          </div>
        </div>
      </main>
      <footer className="navbar navbar-expand-lg navbar-dark bg-dark p-3 ">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
