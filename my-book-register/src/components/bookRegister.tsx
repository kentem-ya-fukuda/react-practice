import { Dispatch, SetStateAction, useState } from "react";
import Button from "./button";
import LabelInput from "./labelInput";
import { BookItemModel } from "../models";

interface Props {
    onClickAfterRegist: () => void;
    setBooks: Dispatch<SetStateAction<BookItemModel[]>>;
}

const BookRegister = ({ setBooks }: Props) => {
    const [isbn, setIsbn] = useState('');

    const handleClickButton = (): void => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
        .then(response => response.json())
        .then(data => {
            if (data.totalItems === 0) {
                alert('登録されていない ISBN コードです。');
                return;
            }
            setBooks(prev => [...prev, {
                id: prev.length.toString(),
                name: data.items[0].volumeInfo.title,
                isOnLoan: false,
            }]);
        });
    }

    return (
        <div className="book-register">
            <LabelInput text="ISBNコード" value={isbn} onChange={e => setIsbn(e.target.value)} />
            <Button onClick={handleClickButton}>書籍登録</Button>
        </div>
    );
}
export default BookRegister;