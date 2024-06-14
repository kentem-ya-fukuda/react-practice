import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BookItemModel } from './models';
import BookRegister from './components/bookRegister';
import FilterableBookTable from './components/filterableBookTable';

function App() {
  const [books, setBooks] = useState<BookItemModel[]>([]);

  return (
    <div className='App'>
      <BookRegister setBooks={setBooks} />
      <hr />
      <FilterableBookTable books={books} setBooks={setBooks} />
    </div>
  );
}

export default App
