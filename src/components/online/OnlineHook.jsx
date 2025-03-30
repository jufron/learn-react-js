import { useEffect } from "react";
import { useState } from "react";

export default function useOnline () {
  const [ isOnline, setIsOnline ] = useState(true);

  function hanleOnline () {
    setIsOnline(true);
  }

  function hanleOffline () {
    setIsOnline(false);
  }

  useEffect(() => {
    window.addEventListener('online', hanleOnline);
    window.addEventListener('offline', hanleOffline);

    return () => {
      window.removeEventListener('online', hanleOnline);
      window.removeEventListener('offline', hanleOffline);
    }
  }, []);

  return isOnline;
}