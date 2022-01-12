import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';
// import App from './App';

// setup vars
const books = [
    {
        img: 'https://m.media-amazon.com/images/I/51uE7czRB1L._AC_UL320_.jpg',
        title: 'The list',
        author: 'Siobhna Vivian',
    },

    {
        img: 'https://m.media-amazon.com/images/P/B09G8YLYVK.01._SCLZZZZZZZ_SX500_.jpg',
        title: 'The Runion',
        author: 'Kiersten Modglin',
    },
    {
        img: 'https://m.media-amazon.com/images/I/61JefgJRqAL._AC_UL320_.jpg',
        title: 'The New Book of Lists: The Original Compendium of Curious Information',
        author: 'by David Wallechinsky and Amy Wallace',
    },
];

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => {
                return <Book book={book} />;
            })}
        </section>
    );
}
const Book = (props) => {
    const { img, title, author } = props.book;
    return (
        <article className='book'>
            <img src={img} alt='' />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
