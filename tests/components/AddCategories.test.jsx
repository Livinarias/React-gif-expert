import { fireEvent, render, screen } from "@testing-library/react";
import { AddCAtegories } from "../../src/components/AddCategories";

describe('Pruebas en categories', () => {
  
    test('debe de cambiar el valor del texto ', () => {
      
        render(<AddCAtegories OnNewCategory={() =>{}}/>);
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, {target:{ value: 'Saitama'}});
        expect(input.value).toBe('Saitama');
    });

    test('debe llamar OnNewCategory si el input tiene un valor ', () => {
      
        const inputValue = 'Saitama';
        const OnNewCategory = jest.fn();

        render(<AddCAtegories OnNewCategory={OnNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input(input, {target:{ value: inputValue}});
        fireEvent.submit( form );

        expect(input.value).toBe('');
        expect(OnNewCategory).toHaveBeenCalled();
        expect(OnNewCategory).toHaveBeenCalledTimes(1);
        expect(OnNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('No debe llamar el OnNewCategory si el input no tiene un valor', () => {

        const OnNewCategory = jest.fn();

        render(<AddCAtegories OnNewCategory={OnNewCategory}/>);

        const form  = screen.getByRole('form');
        fireEvent.submit( form );

        expect(OnNewCategory).toHaveBeenCalledTimes(0);
        expect(OnNewCategory).not.toHaveBeenCalled();
    })
    
    
    
})
