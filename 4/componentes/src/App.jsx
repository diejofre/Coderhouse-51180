import "./App.css";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h1>My App</h1>
      <Button texto="Home" />
      <Button texto="About" />
      <Button texto="Contact" />
    </div>
  );
}

export default App;
