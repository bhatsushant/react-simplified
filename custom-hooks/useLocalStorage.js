import { useCallback, useEffect, useMemo, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const localVaue = localStorage.getItem(key);
    if (localVaue === null) {
      if (typeof initialValue === "function") {
        return initialValue();
      }
      return initialValue;
    }
    return JSON.parse(localVaue);
  });

  useEffect(() => {
    if (value === undefined) localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
