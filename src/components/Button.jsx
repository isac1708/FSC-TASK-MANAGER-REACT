import { tv } from "tailwind-variants";

const Button = ({ children, color = "primary", size = "small", className, ...rest }) => {


    const button = tv({
        base: "rounded-md justify-center px-3 flex items-center gap-1 font-semibold hover:opacity-80 transition",

        variants: {
            color: {
                primary: "bg-brand-primary text-white",
                ghost: "bg-transparent text-brand-dark-gray",
                secondary: "bg-brand-light-gray text-brand-dark-blue",
            },
            size: {
                small: "text-xs py-1",
                large: "text-lg py-2",
            }
        },
        defaultVariants: {
            color: "primary",
            size: "small",
        },

    })

    return <button className={button({ color, size,className })}  {...rest}> {children} </button>;
};

export default Button;
