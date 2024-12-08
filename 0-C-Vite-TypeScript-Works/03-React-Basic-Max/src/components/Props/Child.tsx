import { ReactNode } from "react";

interface ChildProps {
  title: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Child = ({ title, onClick, children }: ChildProps) => {
  return (
    <div>
      <h3>props </h3>
      <p style={{ color: "red" }}>{title}</p>
      <button onClick={onClick}>Click me</button>
      <b>{children}</b>
    </div>
  );
};

interface ChildPropsFC {
  title: string;
  onClick: () => void;
  children:ReactNode
}

//another way
export const ChildFC: React.FC<ChildPropsFC> = ({
  title,
  onClick,
children
}) => {
  return (
    <header>
      <h3>Props Functional Component</h3>
      <p style={{ color: "red" }}>{title}</p>
      <button onClick={onClick}>Click me</button>
      <b>{children}</b>
      <hr />
    </header>
  );
};

//   ChildFC.displayName="bappa"
