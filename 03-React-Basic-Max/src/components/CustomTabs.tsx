/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from "react"

type TabProps={
  children:ReactNode;
  buttons:ReactNode;
  buttonContainer?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

const CustomTabs = ({buttons,children,buttonContainer='menu'}:TabProps) => {

  const ButtonContainer =buttonContainer;
  return (
    <>
    <ButtonContainer>{buttons}</ButtonContainer>
    {/* This part is for content */}
    {children}
  </>
  )
}

export default CustomTabs