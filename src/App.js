import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { ChangeColor } from "./components/ChangeColor";
import { Navbar } from "./components/NavBar";
import { CartContainer } from "./components/CartContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
