import { useState } from "react"

export const AddCAtegories = ({OnNewCategory}) => {
    
    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target}) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        setinputValue('');
        OnNewCategory( inputValue.trim());
    }

    return(
        <form onSubmit={onSubmit}>
            <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChange}
            />
        </form>
       
    )
}