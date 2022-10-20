import { BrowserRouter, Switch, Route } from 'react-router-dom';

// page components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

// styles
import './App.css';

function App() {
  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/create" >
            <Create />
          </Route>
          <Route path="/search" >
            <Search />
          </Route>
          <Route exact path="/recipes/:id" >
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;