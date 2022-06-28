import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas sobre <GifItem />', () => {
  const title = 'DragonBall';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=LBVMB99LWGBQeagYo9tSKUyPYKTSiBg1&q=${title}&limit=10`;

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem url={url} title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar la imagen con el URL y el alt indicado', () => {
    render(<GifItem url={url} title={title} />);

    // expect(screen.getByRole('img').src).toBe(url);

    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Debe de mostrar el titulo con el componente', () => {
    render(<GifItem url={url} title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
