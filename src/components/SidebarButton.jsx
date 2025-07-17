import { tv } from "tailwind-variants";
const SidebarButton = ({ children, color }) => {

  const sidebar= tv({
    base: "flex items-center gap-2 px-6 py-3 rounded-lg",
    variants: {
      color: {
        unselected: "text-brand-dark-blue",
        selected: "bg-[#E6F7F8] text-brand-primary",
      },
    },
  });
    
  
    return (
      <a href="#" className={sidebar({ color })}>
        {children}
      </a>
    );
  };
  
  export default SidebarButton;
  