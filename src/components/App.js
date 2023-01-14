import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [mode, setMode] = useState("App light")
  const [text, setText] = useState("Dark Mode")

  function toggleMode(){
    if(mode === "App light"){
      setMode("App dark")
      setText("Light Mode")
    }else{
      setMode("App light")
      setText("Dark Mode")
    }
  }
  

  return (
    <div className={mode}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>{text}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
