import { ButtonHTMLAttributes } from 'react';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, ...buttonProps } = props;
  return (
    <button className="button" {...buttonProps}>
      {children}
    </button>
  );
};
export default Button;
