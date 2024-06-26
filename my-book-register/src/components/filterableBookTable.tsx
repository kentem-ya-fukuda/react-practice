import { ChangeEventHandler, useState } from 'react';
import { BookItemModel } from '../models';
import BookTable from './bookTable';
import LabelInput from './labelInput';

interface Props {
  books: BookItemModel[];
  onClickDelete: (id: string) => void;
  onClickLendingSwitch: (id: string) => void;
}

const FilterableBookTable = ({
  books,
  onClickDelete,
  onClickLendingSwitch,
}: Props) => {
  const [filterText, setFilterText] = useState('');

  const handleChangeFilterText: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFilterText(e.target.value);

  return (
    <div className="filterable-book-table">
      <LabelInput
        text="filter"
        value={filterText}
        onChange={handleChangeFilterText}
      />
      <BookTable
        bookItems={books.filter(
          (x) => !filterText || x.name.includes(filterText),
        )}
        onClickDelete={onClickDelete}
        onClickLendingSwitch={onClickLendingSwitch}
      />
    </div>
  );
};
export default FilterableBookTable;
