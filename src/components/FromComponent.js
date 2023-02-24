import { number } from 'prop-types'
import {useState,useEffect} from 'react'
import "./FromComponent.css"
import { v4 as uuidv4 } from 'uuid';
const FromComponent =(props)=>{
    console.log("Render 1")
    const [titel,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false)
    const inputTitel=(event)=>{
        setTitle(event.target.value)
    }
    const inputAmont=(event)=>{
        setAmount(event.target.value)
    }
    const saveItem=(event)=>{
        event.preventDefault()
        const itemData ={
            id:uuidv4(),
           titel:titel,
           amount:Number(amount)
        }

      props.onAddItem(itemData)
        setAmount(0)
        setTitle('')
    }

    useEffect(()=>{
        if(amount !==0){
            setFormValid(true)
        }

    },[amount])

    return(
        <div>

            <form onSubmit={saveItem}>
                <div className ="form-control">
                    <label>ชื่อรายการ : </label>
                    <input type="text" placeholder="ระบุชื่อรายการ" className="reg-input" onChange={inputTitel} value={titel}></input>
                </div>
                <div className ="form-control">
                    <label>จำนวนเงิน : </label>
                    <input type="number" placeholder="ระบุจำนวนเงิน" className="reg-input" onChange={inputAmont} value={amount}></input>
                </div>
                <div className ="form-control">
                   <button type="submit" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>

        </div>    
    )
}
export default FromComponent