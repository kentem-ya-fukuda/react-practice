import { Dispatch, SetStateAction } from "react";
import { BookItemModel } from "../models";

interface Props {
    bookItem: BookItemModel;
    setBooks: Dispatch<SetStateAction<BookItemModel[]>>;
}

//第2問：貸出 or 返却 or 削除の処理を追加
const BookRow = (props: Props) => {
    const handleClickLendingSwitch = (): void => {
    }

    const handleClickDelete = (): void => {
    }

    return (
        <tr>
            <td>{props.bookItem.name}</td>
            <td>貸出中 or 利用可能</td>
            <td>
                <button onClick={() => handleClickDelete()}>
                    削除
                </button>
                <button
                    disabled={true}
                    onClick={() => handleClickLendingSwitch()}
                >
                    貸出
                </button>
                <button
                    disabled={false}
                    onClick={() => handleClickLendingSwitch()}
                >
                    返却
                </button>
            </td>
        </tr>
    );
}
export default BookRow;