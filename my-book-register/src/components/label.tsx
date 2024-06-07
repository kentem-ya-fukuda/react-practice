const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => {
    const { children, ...labelProps } = props;
    return (
        <label className="label" {...labelProps}>
            {children}
        </label>
    );
}
export default Label;