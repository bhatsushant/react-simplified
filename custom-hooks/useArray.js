import { useCallback, useState } from "react";

export const useArray = (initial_array) => {
  const [array, set] = useState(initial_array);

  const push = useCallback((element) => set((a) => [...a, element]), []);

  const replace = useCallback(
    (index, newElement) =>
      set((a) => [...a.slice(0, index), newElement, ...a.slice(index + 1)]),
    []
  );

  const filter = useCallback((callback) => set((a) => a.filter(callback)), []);

  const remove = useCallback(
    (index) => set((a) => [...a.slice(0, index), ...a.slice(index + 1)]),
    []
  );

  const clear = useCallback(() => set([]), []);

  const reset = useCallback(() => set(initial_array), [initial_array]);

  return { array, set, push, replace, filter, remove, clear, reset };
};
