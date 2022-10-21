import { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';

// styles
import './Home.css'

// components
import RecipeList from '../../components/RecipeList';

const Home = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    const unsubscribe = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setError('No recipes found!')
        setIsPending(false);
      } else {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({id: doc.id, ...doc.data()});
        })
        setData(results);
        setIsPending(false);
      }
    }, (err) => {
      setError(err.message);
      setIsPending(false);
    });

    // clean up function to unsubscribe from updates - executed when component unmounts
    return () => unsubscribe();

  }, [])

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
 
export default Home;