import { Dispatch, SetStateAction } from "react";
import { BookItemModel } from "../models";
import Button from "./button";

interface Props {
    bookItem: BookItemModel;
    setBooks: Dispatch<SetStateAction<BookItemModel[]>>;
}

const BookRow = (props: Props) => {
    const handleClickLendingSwitch = (id: string): void => {
        props.setBooks(prev => (
            prev.map(x => {
                const isOnLoan = x.id === id ? !x.isOnLoan: x.isOnLoan;
                return {...x, isOnLoan: isOnLoan};
            })
        ));
    }

    const handleClickDelete = (id: string): void => {
        props.setBooks(prev => [...prev.filter(b => b.id !== id)]);
    }

    return (
        <tr>
            <td>{props.bookItem.name}</td>
            <td>{props.bookItem.isOnLoan ? "貸出中" : "利用可能"}</td>
            <td>
                <Button onClick={() => handleClickDelete(props.bookItem.id)}>
                    削除
                </Button>
                <Button
                    disabled={props.bookItem.isOnLoan}
                    onClick={() => handleClickLendingSwitch(props.bookItem.id)}
                >
                    貸出
                </Button>
                <Button
                    disabled={!props.bookItem.isOnLoan}
                    onClick={() => handleClickLendingSwitch(props.bookItem.id)}
                >
                    返却
                </Button>
            </td>
        </tr>
    );
}
export default BookRow;