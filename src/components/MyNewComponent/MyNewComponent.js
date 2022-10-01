import useCalc from "./useCalc";
import {useState} from 'react'
const MyNewComponent = () => {

  const [count, setCount] = useState(0)
  const arr = ["one", "two", "three"];
  const sum = useCalc(1,2)
  
 
  
  if (arr.includes("four")) return null;
  
  const handleOnClick = (event) => { 
    console.log("🚀 ~ file: MyNewComponent.js ~ line 14 ~ handleOnClick ~ event", event)
    event.preventDefault()
setCount((prevCount) => prevCount + 1 )
   }


   
  return (
    <>
      <div>MyNewComponent</div>
      {count}
      <h1>hello this is my new component</h1>
      <button onClick={() => console.log(sum)}>Sum</button>
    </>
  );
};

export default MyNewComponent

