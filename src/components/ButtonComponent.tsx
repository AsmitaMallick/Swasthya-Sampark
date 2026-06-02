import type { ReactNode } from "react";
import "../CSS/ButtonComponent.css";

type ButtonComponentProps = {
  children: ReactNode;
  transparent?: boolean;
};

const ButtonComponent = ({
  children,
  transparent = false,
}: ButtonComponentProps) => {
  const buttonClass = transparent
    ? "buttonComponentTransparent"
    : "buttonComponent";
  return <button className={buttonClass}>{children}</button>;
};

export default ButtonComponent;
