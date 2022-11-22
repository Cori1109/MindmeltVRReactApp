import { Provider } from 'react-redux';
import configureStore from "./store";
import history from "./utils/history";
import './App.css';
import 'antd/dist/antd.min.css';
import MyApp from 'MyApp';

const initialState = {};
const store = configureStore(initialState, history);

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <MyApp />
      </Provider>
    </div>
  );
}



export default App;
