import { useLocation } from 'react-router-dom';
import { hostUrl } from '../../env-config';
import useFetch from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';

// styles
import './Search.css';

// components
import { useTheme } from '../../hooks/useTheme';

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const { mode } = useTheme()

  const url = hostUrl() + `/recipes?q=${query}`

  const { data, error, isPending } = useFetch(url);

  return (
    <div className={`search ${mode}`}>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p> }
      {data && <RecipeList recipes={data}/>}
    </div>
  );
}
 
export default Search;