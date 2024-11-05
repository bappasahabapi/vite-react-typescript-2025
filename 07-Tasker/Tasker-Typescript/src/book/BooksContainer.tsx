import { TBook } from "./BookHeader";
import Book from "./Book";

interface BooksContainerProps {
    books:TBook[];
    onFav:(id:string)=>void
}

export default function BooksContainer({books, onFav}:BooksContainerProps) {
  return (
    <div className="container mx-auto my-16 grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books?.map((book) => (
        <Book key={book.id} book={book} onFav={onFav}/>
      ))}
    </div>
  );
}
