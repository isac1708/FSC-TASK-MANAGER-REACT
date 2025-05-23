import InputLabel from "./InputLabel";
const Input = ({label,...rest}) =>{

    return <div className="flex flex-col text-left space-y-1 ">
        
        <InputLabel htmlFor={rest.id} >{label}</InputLabel>
        <input className="px-4 py-3 border-solid border border-[#ECECEC] rounded-lg placeholder:text-sm placeholder:text-[#9A9C9F] outline-[#00ADB5]" {...rest}/>
        
        
        </div>;
}

export default Input;