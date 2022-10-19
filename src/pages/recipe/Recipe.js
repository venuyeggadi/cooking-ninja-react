import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { hostUrl } from '../../env-config';

// styles
import './Recipe.css';

const Recipe = () => {
  const { id } = useParams();
  const url = hostUrl();
  const { data: recipe, isPending, error } = useFetch(url + "/recipes/" + id);

  return (
    <div className="recipe">
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{ recipe.title }</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
 
export default Recipe;