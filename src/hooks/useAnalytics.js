import { useEffect } from "react";
import { useLocation } from "react-router";


export default function useAnalytics () {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    
    // ? Simulasi kirim ke server atau fetch
    sendAnalytics(location.pathname);

  }, [location]);
}

function sendAnalytics (path) {
  // ? Kirim ke analytics (dummy)
  console.log(`uer navigate to : ${path} Sending analytics for: ${path}`);
}