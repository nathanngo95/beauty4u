import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { BrandList } from "./dashboard/BrandList";
import Dashboard from "./dashboard/Dashboard";
import { MyBooking } from "./dashboard/MyBooking";
import Title from "./dashboard/Title";
import SignIn from "./sign-in/SignIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<Dashboard children={<MyBooking/>} />} />
          {/* <Route path="/" element={MyBooking} /> */}
          <Route path="/shops" element={<Dashboard children={<BrandList/>} />} />
          <Route path='*' element={<Title>Page Not Found</Title>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
