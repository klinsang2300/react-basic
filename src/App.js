import Transaction from "./components/Transaction"
import FromComponent from "./components/FromComponent";
import "./App.css"
import { useEffect, useState } from "react";
import DataContext from "./data/DataContext";


function App() {

const inist =[
  {id:1,titel:"เงืนเดือน",amount:27000},
  {id:2,titel:"ถ่ายรูป",amount:5000},
  {id:3,titel:"ค่าบ้าน",amount:-12000},
  {id:4,titel:"ค่ารถไฟฟ้า",amount:-3000},
  {id:5,titel:"ค่ากิน",amount:-2000}
]

const [items,setItem] = useState(inist)
const [reporticome,setReportIncome] = useState(0)
const [reportexpense,setReportExpense] = useState(0)

const onAddNewItem = (newItem)=>{
    setItem((prevItem)=>{
      return [newItem,...prevItem]
    })
}

 useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
    setReportIncome(income)
    setReportExpense(expense)
 },[items,reportexpense,reporticome])
  return (
    <DataContext.Provider value={
      {
        income: reporticome,
        expense: reportexpense
      }
    }>
    <div className ="container">
     <h2>โปรแกรม บัญชีรายรับ-รายจ่าย</h2>
     <div className="form-Data">  <FromComponent onAddItem={onAddNewItem}/>
      <Transaction item = {items}/></div>
   
      </div>
    </DataContext.Provider>
  );
}

export default App;
