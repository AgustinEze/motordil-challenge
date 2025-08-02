'use client'
import { useEffect, useState } from "react";

export const useFakeFetch = <T>(res: T[], delay = 1000) => {
  const [data, setData] = useState<T[] | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // alias opcional
  const [isError, setIsError] = useState(false);

  useEffect(() => {
     setTimeout(() => {
      try {
        setData(res);
        setIsPending(false);
        setIsLoading(false);
      } catch (e) {
        setIsError(true);
        setIsPending(false);
        setIsLoading(false);
      }
    }, delay);

  }, [res, delay]);

  return {
    data,
    isPending,
    isLoading,
    isError,
  };
};
