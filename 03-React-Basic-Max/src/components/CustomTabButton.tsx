
import { ReactNode } from "react";

type TabButtonProps =  {
    children: ReactNode;
    isSelected: boolean;
    onClick?: () => void; 

  }

const CustomTabButton = ({children,isSelected, ...props}:TabButtonProps) => {
  return (
    <li>
        <button className={isSelected? "active":undefined}  {...props}>
            {children}
        </button>
    </li>
  )
}

export default CustomTabButton