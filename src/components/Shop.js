import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../state/index'


const Shop = () => {
  const balance = useSelector(state => state.amount) 
  const dispatch = useDispatch()
  const {withdrawMoney,depositeMoney} = bindActionCreators(actionCreator,dispatch)
  return (
    <div>
        <h2>Deposite/WithDraw Money</h2>
    {/* <button className="btn btn-primary mx-2 " onClick={()=>{dispatch(actionCreator.withdrawMoney(100))}}>-</button>
    Update Balance
    <button className="btn btn-primary mx-2" onClick={()=>{ dispatch(actionCreator.depositeMoney(100))}}>+</button> */}

    <button className="btn btn-primary mx-2 " onClick={()=>{withdrawMoney(100)}}>-</button>
    Update Balance {balance}
    <button className="btn btn-primary mx-2" onClick={()=>{ depositeMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
