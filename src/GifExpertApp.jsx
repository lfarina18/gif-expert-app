import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon Ball',
  ]);

  const onAddCategory = () => {
    setCategories([...categories, 'HunterXHunter']);
    // setCategories(cat => [...cat, 'HunterXHunter']) Otra forma de hacerlo.
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
