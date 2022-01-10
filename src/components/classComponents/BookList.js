import { Component } from 'react';
import Book from '../functional/Book';

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    bookClicked(title) {
        console.log(`The book ${title} has added to baset!`);
    }
    render() {
        return (
            <div className='book-list'>
                <h2>Our Book Collection</h2>

                {this.props.books.map((x) => (
                    <Book
                        title={x.title}
                        description={x.description}
                        clickHandler={() => this.bookClicked(x.title)}
                        author={x.author}
                    />
                ))}
            </div>
        );
    }
}

export default BookList;
