import { useState } from "react";
import Todo from "./components/Todo";
const App = () => {
  const [x,setx] = useState(0)
const btnClick = () =>{
  console.log("Clicked");
  setx(x+1)
  console.log(x)
}
  return (
    <div>
      <Todo/>
    </div>
  )
}

export default App;