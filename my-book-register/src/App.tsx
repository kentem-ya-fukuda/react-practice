import { useState } from 'react'
import './App.css'
import { BookItemModel } from './models';
import FilterableBookTable from './components/filterableBookTable';

function App() {
  const [isbn, setIsbn] = useState('');
  const [books, setBooks] = useState<BookItemModel[]>([]);

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
    <div className='App'>
        {/* 第1問：コンポーネントに分割 ↓ ↓ ↓ ↓ ↓ */}
        <div className="book-register">
          <div className="label-input">
            <label className="label">
              ISBNコード
            </label>
            <input className="input" placeholder="入力してください" value={isbn} onChange={e => setIsbn(e.target.value)}></input>
          </div>
          <button className="button" onClick={handleClickButton}>
            書籍登録
          </button>
        </div>
        {/* 第1問：コンポーネントに分割 ↑ ↑ ↑ ↑ ↑ ↑ */}
      <hr />
      <FilterableBookTable books={books} setBooks={setBooks} />
    </div>
  );
}

export default App
