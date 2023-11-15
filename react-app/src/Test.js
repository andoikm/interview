import {useContext} from "react";
import {Context} from "./MyContext";

const Test = () => {
  const {values, setValues} = useContext(Context);

  const handleAdd = () => setValues(prev => [...prev, prev[prev.length-1] + 1]);

  return (
    <div>
      <ul>
        {values.map(i => <li key={i.toString()}>{i}</li>)}
      </ul>
      <button onClick={handleAdd}>Add value</button>
    </div>
  )
};

export default Test;
