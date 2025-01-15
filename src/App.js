import { useSelector } from "react-redux";
import HeroSection from "./Components/HeroSection";
import {Routes,Route} from "react-router-dom"
import LoginPage from "./Components/LoginPage";
import PrivateRoute from "./Components/PrivateRoute";


function App() {
  const mode = useSelector((state)=>state.toggleSlice.isLightMode);


  return (
    <div className={`${mode && "bg-[#242424] text-white"}`}>

        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/todos" element={<PrivateRoute><HeroSection/></PrivateRoute> }/>
        </Routes>
        

    </div>
  );
}

export default App;
