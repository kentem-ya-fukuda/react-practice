import { InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return <input className="input" placeholder="入力してください" {...props}></input>
}
export default Input;