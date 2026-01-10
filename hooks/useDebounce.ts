import { useEffect, useState } from "react";

/**
 * Custom hook that debounces a value by the specified delay.
 * Returns the debounced value after the delay has passed without changes.
 *
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds (default: 300ms)
 * @returns The debounced value
 * 
 * TODO: Add JSDoc examples
 * TODO: Consider adding a cancel function to manually cancel debounce
 * TODO: Add unit tests
 */
function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
