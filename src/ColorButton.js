import { useState } from 'react';


function ColorButton(props) {

  const [ state, setState ] = useState("btn-primary");  // ["btn-primary", ???]

  function changeColor() {

    if(state === "btn-primary") {
      setState("btn-danger");
    } else {
      setState("btn-primary")
    }
  }

  return (
    <button onClick={changeColor} className={"btn-lg px-4 gap-3 btn " + state}>{props.label}</button>
  )
}

export default ColorButton;
/*
function App() {
  return (
    <div>
      <ColorButton />
    </div>
  );
}

export default App;*/
