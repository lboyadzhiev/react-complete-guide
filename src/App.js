import Heading from './components/functional/Functional';
import BookList from './components/classComponents/BookList';

const booksData = [
    { title: 'Harry Potter', description: 'Wizards and stuff' },
    { title: 'Programming with JS', description: 'Guide to programming' },
    { title: 'The bible', description: 'Most important book.' },
];

function App() {
    return (
        <div className='site-wrapper'>
            <Heading />
            <BookList books={booksData} />
        </div>
    );
}

export default App;
