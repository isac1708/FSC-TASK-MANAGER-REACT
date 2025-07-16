import React from "react"; 
import InputLabel from "./InputLabel";
const Input = ({label,errorMessage,...rest},ref) =>{

    return <div className="flex flex-col text-left space-y-1 ">
        
        <InputLabel htmlFor={rest.id} >{label}</InputLabel>
        <input ref={ref} className="px-4 py-3 border-solid border border-[#ECECEC] rounded-lg placeholder:text-sm placeholder:text-brand-text-gray outline-brand-primary" {...rest}/>
         {errorMessage && ( <p className="text-xs  text-red-500">{errorMessage}</p>)}
        
        
        </div>;
}



export default React.forwardRef(Input);