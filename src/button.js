import React,{useContext} from 'react'
import {ColorContext} from './isChange'


function ShowButton(){
    const { state,dispatch } = useContext(ColorContext)
    return(
        <div>
            <button onClick={()=>{dispatch({type:'red',color:'red'})}}>红色</button>
            <button onClick={()=>{dispatch({type:'yellow',color:'yellow'})}}>黄色</button>
        </div>
    )
}
export default ShowButton