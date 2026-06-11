import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { useEffect, useState } from "react";
import Loader from "./pages/Home/Loader";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading, ReloadData } from "./redux/rootSlice";
import AdminLogin from "./pages/Admin/login";


function App() {
  const API = "process.env.REACT_APP_BACKEND_URL";

  const { loading, portfolioData, reloadData } = useSelector((state) => state.root);

  const dispatch = useDispatch();

  const getportfolioData = async () => {
    try {
      dispatch(ShowLoading());
  
      const response = await axios.get(`${API}/api/portfolio/get-portfolio-data`);
  
      dispatch(SetPortfolioData(response.data));
  
      dispatch(HideLoading());
  
      dispatch(ReloadData(false));
    } catch (error) {
      dispatch(HideLoading());
    }
  };


  
  useEffect(() => {
    if (!portfolioData || reloadData) {
      getportfolioData();
    }
  }, [reloadData, portfolioData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<AdminLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
