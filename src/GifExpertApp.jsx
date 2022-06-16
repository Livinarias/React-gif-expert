import { useState } from "react";
import { AddCAtegories, GifGrid } from "./components";


export const GifExpertApp = () => {

    if( true) {}
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCAtegories 
                OnNewCategory={onAddCategory}
            />
            {
                categories.map( category =>(
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    );
}