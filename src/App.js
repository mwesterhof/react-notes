import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'
import NotesPage from './pages/NotesPage'
import GobanPage from './pages/GobanPage'


function App() {
  return (
      <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/notes"><NotesPage /></Route>
          <Route exact path="/goban"><GobanPage /></Route>
      </Switch>
  );
}

export default App;
