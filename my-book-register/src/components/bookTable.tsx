import { Dispatch, SetStateAction } from "react";
import { BookItemModel } from "../models";
import BookRow from "./bookRow";

interface Props {
    //書籍情報一覧のstate
    bookItems: BookItemModel[];
    //書籍情報一覧のstateを更新する関数
    setBooks: Dispatch<SetStateAction<BookItemModel[]>>;
}

const BookTable = ({ bookItems, setBooks }: Props) => {
    return (
        <table border={1}>
            <thead>
                <tr>
                    <td>書籍名</td>
                    <td>貸出状況</td>
                    <td>操作</td>
                </tr>
            </thead>
            {bookItems.map(book => (
                <BookRow 
                    bookItem={book}
                    onClickDelete={id => {
                        setBooks(prev => [...prev.filter(b => b.id !== id)]);
                    }}
                    onClickLendingSwitch={id => {
                        setBooks(prev => (
                            prev.map(x => {
                                const isOnLoan = x.id === id ? !x.isOnLoan: x.isOnLoan;
                                return {...x, isOnLoan: isOnLoan};
                            })
                        ));
                    }} 
                    key={book.id} />
            ))}
        </table>
    );
}
export default BookTable;