import Transaction from "./components/Transaction"
import FromComponent from "./components/FromComponent";
import "./App.css"
import { useState } from "react";

function App() {

const [Items,setItem] = useState([])
 

const onAddNewItem = (newItem)=>{
    setItem((prevItem)=>{
      return [newItem,...prevItem]
    })
}
  return (
    <>
    <div className ="container">
     <h2>โปรแกรม บัญชีรายรับ-รายจ่าย</h2>
     <FromComponent onAddItem={onAddNewItem}/>
      <Transaction item = {Items}/>
      </div>
    </>
  );
}

export default App;
