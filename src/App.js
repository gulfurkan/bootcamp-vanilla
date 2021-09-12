import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home.js'
import Notes from './pages/Notes.js'
import NoteContext from './/context/NoteContext.js'
import React from 'react';


const App = () => {
  const [data, setData] = React.useState([]);
  const [note, setNote] = React.useState("");
  const [count, setCount] = React.useState(Date.now);
  const hanleChange = (event) => {
    setNote(event.target.value);
  }
  const handleClick = () => {
    setCount(count + 1);
    setData([...data, { txt: note, id: count, path: "/notes/" + count }]);
  }
  const deletenote = (id) => {
    setData(data.filter(data => data.id !== id));
  }


  return (
    <div className="App">
      <NoteContext.Provider value={{data, setData,note, setNote, count, setCount, handleClick, hanleChange, deletenote}}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/notes/:id'>
              <Notes />
            </Route>
          </Switch>
        </Router>
      </NoteContext.Provider>
    </div>
  );
}

export default App;
