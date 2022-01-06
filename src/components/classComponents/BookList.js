import { Component } from 'react';
import Book from '../functional/Book';

class BookList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='book-list'>
                <h2>Our Book Collection</h2>

                {this.props.books.map((x) => {
                    return <Book title={x.title} description={x.description} />;
                })}
            </div>
        );
    }
}

export default BookList;