import { useState } from "react";
import PropTypes from 'prop-types';

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
        <form onSubmit={onSubmit} aria-label="form">
            <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChange}
            />
        </form>
       
    )
}

AddCAtegories.propTypes = {
    OnNewCategory: PropTypes.func.isRequired,
}