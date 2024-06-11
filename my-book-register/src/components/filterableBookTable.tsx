import { Dispatch, SetStateAction, useState } from "react";
import { BookItemModel } from "../models";
import BookTable from "./bookTable";

interface Props {
    books: BookItemModel[];
    setBooks: Dispatch<SetStateAction<BookItemModel[]>>;
}

const FilterableBookTable = (props: Props) => {
    const [filterText, setFilterText] = useState("");

    const handleChangeFilterText = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFilterText(e.target.value);
    }

    return (
        <div className="filterable-book-table">
          <div className="label-input">
            <label className="label">
                filter
            </label>
            <input className="input" placeholder="入力してください" value={filterText} onChange={handleChangeFilterText}></input>
          </div>
          <BookTable
              bookItems={props.books.filter(x =>
                  !filterText || x.name.includes(filterText)
              )}
              setBooks={props.setBooks}
          />
        </div>
    );
}
export default FilterableBookTable;