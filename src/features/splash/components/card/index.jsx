import FlexContainer from "../flex-container";
import "./index.scss";

function Card({ children, className = "", ...restProps }) {
  return (
    <div {...restProps} className={`card shadow ${className}`}>
      <FlexContainer direction="col" gap="4" className="p-4 items-stretch">
        {children}
      </FlexContainer>
    </div>
  );
}

export function CardTitle({ className = "", children }) {
  return (
    <strong className={`place-self-center ${className}`}>{children}</strong>
  );
}

export default Card;
