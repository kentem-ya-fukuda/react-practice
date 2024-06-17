import { BookItemModel } from '../models';
import Button from './button';

interface Props {
  bookItem: BookItemModel;
  onClickDelete: (id: string) => void;
  onClickLendingSwitch: (id: string) => void;
}

const BookRow = ({ bookItem, onClickDelete, onClickLendingSwitch }: Props) => {
  return (
    <tr>
      <td>{bookItem.name}</td>
      <td>{bookItem.isOnLoan ? '貸出中' : '利用可能'}</td>
      <td>
        <Button onClick={() => onClickDelete(bookItem.id)}>削除</Button>
        <Button
          disabled={bookItem.isOnLoan}
          onClick={() => onClickLendingSwitch(bookItem.id)}
        >
          貸出
        </Button>
        <Button
          disabled={!bookItem.isOnLoan}
          onClick={() => onClickLendingSwitch(bookItem.id)}
        >
          返却
        </Button>
      </td>
    </tr>
  );
};
export default BookRow;
