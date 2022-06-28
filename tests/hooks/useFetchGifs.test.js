import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  test('should debe de regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const { images, isloading } = result.current;

    expect(images).toEqual([]);
    expect(isloading).toBe(true);
  });

  test('should debe retornar un arreglo de imágenes y el isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isloading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isloading).toBeFalsy();
  });
});
