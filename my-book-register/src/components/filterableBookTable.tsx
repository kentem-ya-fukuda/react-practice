import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";
import { BookItemModel } from "../models";
import LabelInput from "./labelInput";
import BookTable from "./bookTable";

interface Props {
    books: BookItemModel[];
    setBooks: Dispatch<SetStateAction<BookItemModel[]>>;
}

const FilterableBookTable = ({ books, setBooks }: Props) => {
    const [filterText, setFilterText] = useState("");

    const handleChangeFilterText: ChangeEventHandler<HTMLInputElement> = (e) => {
        setFilterText(e.target.value);
    }

    return (
        <div className="filterable-book-table">
            <LabelInput
                text="filter"
                value={filterText}
                onChange={handleChangeFilterText}
            />
            <BookTable
                bookItems={books.filter(x =>
                    !filterText || x.name.includes(filterText)
                )}
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
            />
        </div>
    );
}
export default FilterableBookTable;