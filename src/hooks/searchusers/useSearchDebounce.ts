import React, { useEffect, useState } from "react";


const useSearchDebounce = (searchQuery: string) => {
  const [debounceValue, setdebounceValue] = useState<string>(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => setdebounceValue(searchQuery), 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return { debounceValue };
};

export { useSearchDebounce };
