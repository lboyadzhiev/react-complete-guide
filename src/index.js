import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';
// import App from './App';

// setup vars
const firstBook = {
    img: 'https://m.media-amazon.com/images/I/51uE7czRB1L._AC_UL320_.jpg',
    title: 'The list',
    author: 'Siobhna Vivian',
};

const secondBook = {
    img: 'https://m.media-amazon.com/images/P/B09G8YLYVK.01._SCLZZZZZZZ_SX500_.jpg',
    title: 'The Runion',
    author: 'Kiersten Modglin',
};

function BookList() {
    return (
        <section className='booklist'>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
                <p>This is the child, we do it to show how 'Children' propertie is working!!!</p>
            </Book>
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
        </section>
    );
}
const Book = (props) => {
    const { img, title, author, children } = props;
    return (
        <article className='book'>
            <img src={img} alt='' />
            <h1>{title}</h1>
            <h4>{author}</h4>
            {children}
        </article>
    );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
