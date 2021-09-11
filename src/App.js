import Table from "./components/Table";
import data from './constants/data.js'
const App = () => {
  return (
    <div className="App">
      <Table data = {data}/>
    </div>
  );
}

export default App;
