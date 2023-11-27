import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HistoryListener = ({ setActivePage }) => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActivePage("home");
      return;
    }
    setActivePage(path.slice(1));
  }, [location]);

  return null; // This component doesn't render anything in the DOM
};

export default HistoryListener;
