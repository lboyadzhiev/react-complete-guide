import Heading from './components/functional/Heading';
import BookList from './components/classComponents/BookList';
import Counter from './components/classComponents/Counter';

const booksData = [
    { title: 'Harry Potter', description: 'Wizards and stuff' },
    { title: 'Programming with JS', description: 'Guide to programming' },
    { title: 'The bible', description: 'Most important book', author: 'God' },
    { title: null, description: 'Most important book.' },
];

function App() {
    return (
        <div className='site-wrapper'>
            <Heading>Children Property</Heading>
            <Counter />
            <BookList books={booksData} />
        </div>
    );
}

export default App;
