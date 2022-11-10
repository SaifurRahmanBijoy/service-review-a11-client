import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Photo Ink`;
  }, [title]);
};

export default useTitle;
