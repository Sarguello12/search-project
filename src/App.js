import "./App.css";
import { searchFunctionality } from "../src/Services/SearchResults";

function App() {
  searchFunctionality("jeans", 1);

  return <div className="App"></div>;
}

export default App;
