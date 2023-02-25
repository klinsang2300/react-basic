
import { useContext } from "react"
import DataContext from "../data/DataContext"
import Item from "./Item"
import "./Transaction.css"


const Transaction =(props)=>{
  const {item}=props
  const {income,expense} =useContext(DataContext)
  const remine = income-expense
    return(
        <div className="transection">
        <ul className="item-list">
         {item.map((element)=>{
            return <Item {...element} key={element.id}/>
         }) }
         
        </ul>
        <div className="in-ex">
            <div className="in">รายรับ {Intl.NumberFormat().format(income)}  </div> 
            <div className="ex">รายรจ่าย {Intl.NumberFormat().format(expense)}</div>
        </div>
        <div className="remine">ยอดเงินคงเหลือ <p>{Intl.NumberFormat().format(remine) }</p></div>
        
        </div>

    )
}
export default Transaction