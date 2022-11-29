import "./App.css";
import img from "./img.jpeg";

function App() {
  return (
    <div className="app">
      <h1>Adil Naseem Sheikh</h1>
        <h3>A Software Engineer</h3>
        <div className="img">
        <img src={img} className="image" alt="A profile" />
        </div>
        <h4>Comming soon...</h4>
    </div>
  );
}

export default App;
// "homepage": "https://AdilNaseemSheikh.github.io/profile",
// display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;