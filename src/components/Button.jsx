const Button = ({children,variant="primary"}) => {
    const getVariantClasses = () => {
        if (variant === "primary") {
            return "bg-[#00ADB5] text-white";
        }
        if (variant === "ghost") {
            return "bg-transparent text-[#818181]";
        }
        return "";
    };
    return <button className={`rounded-md px-3 py-1 text-xs flex items-center gap-1 font-semibold hover:opacity-80 transition ${getVariantClasses()}`}>
        {children}
    </button>;
};
export default Button;
