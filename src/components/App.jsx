import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";

export const App = () => {
  return (
    <div>
      <Header />
      <h1>Hello to the world</h1>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/movies" element={<></>} />
        <Route path="/movies/details" element={<></>} />

          
        <Route path="*" element={<></>} />

      </Routes>
    </div>
      
  );
};
