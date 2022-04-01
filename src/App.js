import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import PepsiContainer from "./components/PepsiContainer";
import User from "./components/User";
import UserContainer from "./UserContainer";
import store from "./redux/store";
import store2 from "./redux2/store2";

function App() {
  return (
    <Provider store={store2}>
      <div className="App">
        {/* <CakeContainer />
        <PepsiContainer />
        <User /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
