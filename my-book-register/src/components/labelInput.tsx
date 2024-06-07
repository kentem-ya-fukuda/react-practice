import Input from "./input";
import Label from "./label";

interface Props {
    text: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput = (props: Props) => {
    return (
        <div className="label-input">
            <Label>{props.text}</Label>
            <Input value={props.value} onChange={props.onChange}></Input>
        </div>
    );
}
export default LabelInput;
