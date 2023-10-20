import {  useEffect,useState } from "react";

export function useOutsideAlerter(ref,callback) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            callback();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  export  function useWindowDimensions() {
  
    const hasWindow = typeof window !== 'undefined';
  
    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : null;
      const height = hasWindow ? window.innerHeight : null;
      return {
        width,
        height,
      };
    }
  
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      if (hasWindow) {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
  
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
    }, [hasWindow]);
  
    return windowDimensions;
  }