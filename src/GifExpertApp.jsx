import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([
        'One Punch',
    ]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // setCategories(cat => [newCategory, ...cat ]) // Otra forma de hacerlo.
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={onAddCategory}

            />


            {
                categories.map((category) => (
                    <GifGrid key={category}
                        category={category}
                    />
                ))
            }

        </>
    );
};
