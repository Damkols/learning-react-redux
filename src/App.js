import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import PepsiContainer from "./components/PepsiContainer";
import User from "./components/User";
import store from "./redux/store";

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
