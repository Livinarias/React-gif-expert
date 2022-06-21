import {render,screen} from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => {

    const title = "test";
    const url = "https://test.com/test.jpg";

  test('debe hacer match con snapshot ', () => {
    
    const {container} = render(<GifItem title={title} url={url}/>);
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar la imagen con el url indicado y el ALT indicado', () => {
    
    render(<GifItem title={title} url={url}/>);
    // expect(screen.getByRole('img').src).toBe(url);
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test('debe tener un titulo el componente', () => {
    
    render(<GifItem title={title} url={url}/>);
    expect(screen.getByText(title)).toBeTruthy();
  })
  
  
  
})
