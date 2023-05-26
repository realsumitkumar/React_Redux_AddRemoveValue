import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators } from './state/index'
import { bindActionCreators } from 'redux'

const Shop = () => {
  const dispatch = useDispatch()
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  const balance = useSelector(state => state.amount)
  return (
    <>
    <div className="container">
    <h2>Deposit or Withdrw Money</h2>
    <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
    Add / remove
    <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    <p>Update Balance: {balance}</p>
    
    </div>
    </>
  )
}

export default Shop