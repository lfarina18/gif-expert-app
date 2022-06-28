import { render, screen, fireEvent } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'Dragon Ball';

  test('Debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isloading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.queryByText('Cargando...')).toBeFalsy();
    expect(screen.getByText(category));
  });

  test('Debe de mostrar items cuando se cargan las imágenes en useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Dragon Ball',
        url: 'https://localhost/dragonball.gif',
      },
      {
        id: 'dsd4',
        title: 'goku',
        url: 'https://localhost/dragonballgoku.gif',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isloading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
