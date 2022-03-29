import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import PepsiContainer from "./components/PepsiContainer";
import User from "./components/User";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <PepsiContainer />
        <User />
      </div>
    </Provider>
  );
}

export default App;
