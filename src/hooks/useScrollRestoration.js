import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router";


const scrollPosition = {};

export default function useScrollRestoration () {
  const location = useLocation();

  useEffect(() => {
    const key = location.key;
    scrollPosition[key] = window.scrollY;

    console.log("Restore scroll for:", key, scrollPosition, scrollPosition[key]);
    
    if (scrollPosition[key] != null) {
      console.log(`Restoring scrollY to ${scrollPosition[key]}`);

      window.scrollTo(0, scrollPosition[key]);
    } else {
      console.log('No saved scroll, scroll to top');
      window.scrollTo(0, 0); 
    }

    return () => {};
  }, [location]);

  console.log(scrollPosition);
}