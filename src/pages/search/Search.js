import { useLocation } from 'react-router-dom';
import { hostUrl } from '../../env-config';
import useFetch from '../../hooks/useFetch';

// styles
import './Search.css';

// components
import RecipeList from '../../components/RecipeList';

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = hostUrl() + `/recipes?q=${query}`

  const { data, error, isPending } = useFetch(url);

  console.log(data)

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p> }
      {data && <RecipeList recipes={data}/>}
    </div>
  );
}
 
export default Search;