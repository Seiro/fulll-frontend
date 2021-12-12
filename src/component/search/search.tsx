import { useEffect, useState } from "react";
import { useInputText } from "../../utils/hooks/use-input-text";
import { Result } from "./models/result.model";

export default function Search() {
  const { value, bind } = useInputText("");
  const [result, setResult] = useState<Result>();
  const [errors, setErrors] = useState<string>();

  useEffect(() => {
    setResult(undefined);
    setErrors(undefined);
    //Use debounce to avoid too many request
    fetch(`https://api.github.com/search/users?q=${value}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error(response);
          throw new Error("API rate limit exeeded");
        }
      })
      .then((data: Result) => {
        setResult(data);
      })
      .catch((error: Error) => setErrors(error.message));
  }, [value]);

  return (
    <div>
      <h1>Search</h1>
      <form>
        <input type="text" {...bind} />
      </form>
      {value && errors ? (
        <p>{errors}</p>
      ) : (
        result && (
          <div>
            <p>Resultat de la recherche ({result.total_count}):</p>
            {result.total_count > 0 ? (
              <ul>
                {result.items.map((item, index) => (
                  <li key={item.id + index.toString()}>
                    <p>{item.login}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No result</p>
            )}
          </div>
        )
      )}
    </div>
  );
}
