const SidebarButton = ({ children, variant }) => {
    const getVariantClasses = () => {
      if (variant === "primary") {
        return "text-brand-dark-blue";
      }
      if (variant === "secondary") {
        return "bg-[#E6F7F8] text-brand-primary";
      }
      return "";
    };
  
    return (
      <a href="#" className={` ${getVariantClasses()} flex items-center gap-2 px-6 py-3 rounded-lg`}>
        {children}
      </a>
    );
  };
  
  export default SidebarButton;
  