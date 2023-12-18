import './App.css'
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter>
  );
}

export default App;
