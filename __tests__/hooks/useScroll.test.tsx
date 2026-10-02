import { act, renderHook } from '@testing-library/react';
import { useScroll } from '@/app/hooks/useScroll';

function scrollTo(y: number) {
  act(() => {
    window.scrollY = y;
    window.dispatchEvent(new Event('scroll'));
  });
}

describe('useScroll', () => {
  afterEach(() => {
    window.scrollY = 0;
    jest.restoreAllMocks();
  });

  it('starts as not scrolled when the page is at the top', () => {
    const { result } = renderHook(() => useScroll());

    expect(result.current).toBe(false);
  });

  it('starts as scrolled when the page is already scrolled on mount', () => {
    window.scrollY = 300;

    const { result } = renderHook(() => useScroll());

    expect(result.current).toBe(true);
  });

  it('switches to scrolled and back as the page scrolls', () => {
    const { result } = renderHook(() => useScroll());

    scrollTo(100);
    expect(result.current).toBe(true);

    scrollTo(0);
    expect(result.current).toBe(false);
  });

  it('only reports scrolled after passing the threshold', () => {
    const { result } = renderHook(() => useScroll(50));

    scrollTo(50);
    expect(result.current).toBe(false);

    scrollTo(51);
    expect(result.current).toBe(true);
  });

  it('removes the scroll listener on unmount', () => {
    const addSpy = jest.spyOn(window, 'addEventListener');
    const removeSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useScroll());
    const [, handler] = addSpy.mock.calls.find(([type]) => type === 'scroll')!;

    unmount();

    expect(removeSpy).toHaveBeenCalledWith('scroll', handler);
  });

  it('re-subscribes when the threshold changes', () => {
    const { result, rerender } = renderHook(
      ({ threshold }) => useScroll(threshold),
      { initialProps: { threshold: 0 } }
    );

    scrollTo(30);
    expect(result.current).toBe(true);

    rerender({ threshold: 100 });
    expect(result.current).toBe(false);
  });
});
