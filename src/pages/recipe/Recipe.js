import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { projectFirestore } from '../../firebase/config';

// styles
import './Recipe.css';

const Recipe = () => {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    projectFirestore.collection('recipes').doc(id).get()
      .then(doc => {
        if (doc.exists) {
          setRecipe({id: doc.id, ...doc.data()});
          setIsPending(false);
        } else {
          setError('Could not find the recipe');
          setIsPending(false);
        }
      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
      });

  }, [id])

  return (
    <div className={`recipe ${mode}`}>
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