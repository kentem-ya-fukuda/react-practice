import { ChangeEvent } from "react";
import Input from "./input";
import Label from "./label";

interface Props {
    text: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput = ({ text, onChange, value}: Props) => {
    return (
        <div className="label-input">
            <Label>{text}</Label>
            <Input value={value} onChange={onChange}></Input>
        </div>
    );
}
export default LabelInput;
