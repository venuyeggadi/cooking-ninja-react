import useFetch from '../../hooks/useFetch';
import { hostUrl } from '../../env-config';

// styles
import './Home.css'

// components
import RecipeList from '../../components/RecipeList';

const Home = () => {
  const url = hostUrl();

  const {data: recipes, isPending, error} = useFetch(url + "/recipes");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
 
export default Home;