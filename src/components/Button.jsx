const Button = ({children,variant="primary",size= "small",className, ...rest}) => {
    const getVariantClasses = () => {
        if (variant === "primary") {
            return "bg-brand-primary text-white";
        }
        if (variant === "ghost") {
            return "bg-transparent text-brand-dark-gray";
        }
        if (variant === "secondary") {
            return "bg-brand-light-gray text-brand-dark-blue";
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
