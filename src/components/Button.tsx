import React from "react";
type ButtonProps = {
  handleClick: () => void;
  handleClickTwo: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};
const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={props.handleClick}></button>;
      <button onClick={(event) => props.handleClickTwo(event, 1)}></button>;
    </div>
  );
};

export default Button;
