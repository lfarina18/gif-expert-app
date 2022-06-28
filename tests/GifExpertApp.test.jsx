import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas sobre el <GifExpertApp />', () => {
  test('Debe de hacer match con el snapshot <GifExpertApp />', () => {
    const { container } = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrarse el Heading h1', () => {

    render(<GifExpertApp />);

    expect(screen.getByRole('heading', { name: 'GifExpertApp' })).toBeTruthy();
  });



});
