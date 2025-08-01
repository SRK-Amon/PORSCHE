import { BrowserRouter, Route, Routes } from "react-router";
import HomeLayout from "./Layout/HomeLayout";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Gallery/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
