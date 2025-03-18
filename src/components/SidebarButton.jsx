const SidebarButton = ({ children, variant }) => {
    const getVariantClasses = () => {
      if (variant === "primary") {
        return "text-[#35383E]";
      }
      if (variant === "secondary") {
        return "bg-[#E6F7F8] text-[#00ADB5]";
      }
      return "";
    };
  
    return (
      <a href="#" className={` ${getVariantClasses()} px-6 py-3 rounded-lg`}>
        {children}
      </a>
    );
  };
  
  export default SidebarButton;
  