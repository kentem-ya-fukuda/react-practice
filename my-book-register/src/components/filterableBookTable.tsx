import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { BookItemModel } from "../models";
import LabelInput from "./labelInput";
import BookTable from "./bookTable";

interface Props {
    books: BookItemModel[];
    setBooks: Dispatch<SetStateAction<BookItemModel[]>>;
}

const FilterableBookTable = ({ books, setBooks }: Props) => {
    const [filterText, setFilterText] = useState("");

    const handleChangeFilterText = (e: ChangeEvent<HTMLInputElement>): void => {
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
                setBooks={setBooks}
            />
        </div>
    );
}
export default FilterableBookTable;