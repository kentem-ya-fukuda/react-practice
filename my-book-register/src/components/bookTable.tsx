import { Dispatch, SetStateAction } from "react";
import { BookItemModel } from "../models";
import BookRow from "./bookRow";

interface Props {
    //書籍情報一覧のstate
    bookItems: BookItemModel[];
    //書籍情報一覧のstateを更新する関数
    setBooks: Dispatch<SetStateAction<BookItemModel[]>>;
}

const BookTable = (props: Props) => {
    return (
        <table border={1}>
            <thead>
                <tr>
                    <td>書籍名</td>
                    <td>貸出状況</td>
                    <td>操作</td>
                </tr>
            </thead>
            {props.bookItems.map(book => (
                <BookRow bookItem={book} setBooks={props.setBooks} key={book.id} />
            ))}
        </table>
    );
}
export default BookTable;