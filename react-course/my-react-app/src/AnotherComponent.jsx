import { useState, useEffect, useRef } from "react";

function AnotherComponent() {
  //const [number, setNumber] = useState(0);

  const inputRef = useRef(null);
  
  
  useEffect(()=>{
    // console.log(`Component ${number === 0 ?'Rendered' : 'Re-rendered:'} ${number}`);

    console.log('Component Rendered');
  });

  const handleClick = () => {
    // setNumber((n) => n + 1);
    // ref.current = ref.current + 1;
    inputRef.current.focus();
    console.log(inputRef.current);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me 😊</button>
        {/* <h1>{number}</h1> */}
      <input type="text" ref={inputRef} />  
    </div>
  );
}

export default AnotherComponent;
