import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Banner from "./Component/Banner/Banner";
import Brand from "./Component/Brand/Brand";
import CarsInfo from "./Component/CarsInfo/CarsInfo";
import Features from "./Component/Features/Features";
import Dashboard from "./Component/Dashboard/Dashborad";
import SignUp from "./Component/LoginPage/Login";

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Banner></Banner>
     <Brand></Brand>
     <CarsInfo></CarsInfo>
     <Features></Features>
     <Dashboard></Dashboard>
    <SignUp></SignUp>
    </div>
  );
}

export default App;
