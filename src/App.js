import Table from "./components/Table";
import data from './constants/data.js'
import headers from './constants/headers.js'
const App = () => {
  return (
    <div className="App">
      <Table data = {data} headers={headers}/>
    </div>
  );
}

export default App;
