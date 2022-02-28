import React,{useContext} from "react";
import { ColorContext }  from './isChange'

function ShowWord(){
    const { state } = useContext(ColorContext)
    return( 
        <h2 style={{color:state}}>
            当前字体颜色为{state}
        </h2>
    )
}
export default ShowWord