import React from "react"



const CustomButton=({name,onClick}:any)=>{


    return(
        <div>
            
               <button onClick={onClick}>{name}</button>
        
        </div>
    )

}
export default CustomButton