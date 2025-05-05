const Button = ({children,variant="primary",size= "small",className, ...rest}) => {
    const getVariantClasses = () => {
        if (variant === "primary") {
            return "bg-[#00ADB5] text-white";
        }
        if (variant === "ghost") {
            return "bg-transparent text-[#818181]";
        }
        if (variant === "secondary") {
            return "bg-[#EEEEEE] text-[#35383E]";
        }
        return "";
    };

    const getSizeClasses = () => {
        if(size==="small"){
            return "text-xs  py-1";
        }
        
        if(size==="large"){
            return "text-lg  py-2";
        }
    }
    return <button className={`rounded-md justify-center px-3 flex items-center gap-1 font-semibold hover:opacity-80 transition ${getVariantClasses()} ${getSizeClasses()} ${className}`}
    {...rest}>
        {children}
    </button>;
};
export default Button;
