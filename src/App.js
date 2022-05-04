import logo from './logo.svg';
import './App.css';
import Test from './Comps/test';
import GetMMR from './Comps/getMMR'
function App() {

  class App extends Component {
    state = {}

    render() {

      return (
        <div className="App">
          <Test />
          <GetMMR />
          <Search />
          <img id='image' src='./Background.jpg'></img>
        </div>
      );
    }
  }
}
export default App;
