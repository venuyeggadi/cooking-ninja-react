import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecipeList from '../../components/RecipeList';
import { projectFirestore } from '../../firebase/config';

// styles
import './Search.css';

// components
import { useTheme } from '../../hooks/useTheme';

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const { mode } = useTheme()

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    projectFirestore.collection('recipes').where('title', '>=', query).where('title', '<=', query + "\uf8ff").get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError('No recipes found!')
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          })
          setData(results);
          setIsPending(false);
          setError(null);
        }
      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
      });

  }, [query])

  return (
    <div className={`search ${mode}`}>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p> }
      {!error && !isPending && data && <RecipeList recipes={data}/>}
    </div>
  );
}
 
export default Search;