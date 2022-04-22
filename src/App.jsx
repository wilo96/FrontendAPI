import './App.scss';
import styles from './App.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { PersonajeDetalle } from './pages/PersonajeDetalle';
import { Principal } from './pages/Principal';



export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.titulo}>Rick Y Morty</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/personaje/:personajeId">
            <PersonajeDetalle />
          </Route>
          <Route path="/">
            <Principal />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}