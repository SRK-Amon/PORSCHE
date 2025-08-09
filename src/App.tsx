import { BrowserRouter, Route, Routes } from "react-router";
import HomeLayout from "./Layout/HomeLayout";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
