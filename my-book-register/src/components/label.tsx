import { LabelHTMLAttributes } from 'react';

const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  const { children, ...labelProps } = props;
  return (
    <label className="label" {...labelProps}>
      {children}
    </label>
  );
};
export default Label;
