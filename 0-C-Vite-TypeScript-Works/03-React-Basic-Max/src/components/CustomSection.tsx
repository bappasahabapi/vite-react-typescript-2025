import { ReactNode } from "react";


type CustomSectionProps = {
    children: ReactNode;
    title: string;
    id?:'examples';
};

const CustomSection = ({children,title, ...props}:CustomSectionProps) => {
  return (
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
  )
}

export default CustomSection