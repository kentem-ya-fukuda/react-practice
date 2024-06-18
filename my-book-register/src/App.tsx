import { useState } from 'react';
import './App.css';
import BookRegister from './components/bookRegister';
import FilterableBookTable from './components/filterableBookTable';
import { BookItemModel } from './models';

function App() {
  const [books, setBooks] = useState<BookItemModel[]>([]);

  return (
    <div className="App">
      <BookRegister
        onPostCompleted={(postedItem) => {
          setBooks((prev) => [
            ...prev,
            {
              id: prev.length.toString(),
              ...postedItem,
            },
          ]);
        }}
      />
      <hr />
      <FilterableBookTable
        books={books}
        onClickDelete={(id) =>
          setBooks((prev) => [...prev.filter((b) => b.id !== id)])
        }
        onClickLendingSwitch={(id) =>
          setBooks((prev) =>
            prev.map((x) => {
              const isOnLoan = x.id === id ? !x.isOnLoan : x.isOnLoan;
              return { ...x, isOnLoan: isOnLoan };
            }),
          )
        }
      />
    </div>
  );
}

export default App;
