import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const { postName } = useParams();
  useEffect(() => {
    console.log(postName);
  }, [postName]);

  return <div>Search</div>;
};

export default Search;