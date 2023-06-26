import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./pages/sign-up/Signup";
import Signin from "./pages/sign-in/Signin";
import ConnectWallet from "./pages/connect-wallet/ConnectWallet";


function App() {
  return (
    <BrowserRouter>
    <Routes>
     
      <Route  path="/sign-up" element={<Signup />} />
      <Route  path="/sign-in" element={<Signin />} />
      <Route  path="/connect-wallet" element={<ConnectWallet />} />
      
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;