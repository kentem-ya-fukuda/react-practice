import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { BookItemModel } from './models';
import BookRegister from './components/bookRegister';
import FilterableBookTable from './components/filterableBookTable';

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
        onClickDelete={(id) => {
          setBooks((prev) => [...prev.filter((b) => b.id !== id)]);
        }}
        onClickLendingSwitch={(id) => {
          setBooks((prev) =>
            prev.map((x) => {
              const isOnLoan = x.id === id ? !x.isOnLoan : x.isOnLoan;
              return { ...x, isOnLoan: isOnLoan };
            }),
          );
        }}
      />
    </div>
  );
}

export default App;
