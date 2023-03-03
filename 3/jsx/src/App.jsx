import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* // <> is a fragment */}
      <Navbar />
      <div className="container">
        <h1 style={{ backgroundColor: "blue", color: "gold" }}>My App</h1>
      </div>
    </>
  );
}

export default App;
