import { useState } from "react";
import BooksContainer from "./BooksContainer";
import book from "/src/assets/book.png";
import SearchBooks from "./SearchBooks";
import FilterBooks from "./FilterBooks";

export type TBook = {
  id: string;
  title: string;
  author: string;
  price: number;
  rating: number;
  image: string;
  isFavorite: boolean;
  year: number;
};

const booksData: TBook[] = [
  {
    id: "1",
    title: "JavaScript and JQuery",
    author: "Jon Duckett",
    price: 620,
    rating: 4,
    image: book,
    isFavorite: false,
    year: 1996,
  },
  {
    id: "2",
    title: "Python",
    author: "Jon Duckett",
    price: 120,
    rating: 5,
    image: book,
    isFavorite: false,
    year: 2000,
  },
  {
    id: "3",
    title: "React",
    author: "subin",
    price: 220,
    rating: 2,
    image: book,
    isFavorite: false,
    year: 2019,
  },
  {
    id: " 4",
    title: "Html",
    author: "Jon Duckett",
    price: 620,
    rating: 4,
    image: book,
    isFavorite: true,
    year: 2017,
  },
  {
    id: " 5",
    title: "JavaScript and JQuery",
    author: "Jon Duckett",
    price: 520,
    rating: 4,
    image: book,
    isFavorite: true,
    year: 2016,
  },
  {
    id: " 6",
    title: "Java",
    author: "Jon Duckett",
    price: 420,
    rating: 4,
    image: book,
    isFavorite: false,
    year: 2022,
  },
  {
    id: " 7",
    title: "JavaScript and JQuery",
    author: "Jon Duckett",
    price: 62,
    rating: 4,
    image: book,
    isFavorite: true,
    year: 2014,
  },
  {
    id: " 8",
    title: "Python",
    author: "bappa saha",
    price: 262,
    rating: 4,
    image: book,
    isFavorite: false,
    year: 2024,
  },
];

const BookHeader = () => {
  const [books, setBooks] = useState<TBook[]>(booksData);

  const handleFavourite = (favId: string) => {
    console.log(favId);
    const favourites = books.map((book) => {
      if (book.id === favId) {
        return {
          ...book,
          isFavorite: !book.isFavorite,
        };
      }
      return book;
    });

    setBooks(favourites);
  };

  const handleSearch = (searchText: string) => {
    // console.log(searchText)
    const filteredSearch = booksData.filter(
      (book) =>
        book.title.toLocaleLowerCase().includes(searchText)
    );

    setBooks(filteredSearch)
  };

  const handleFilter =(selectedOption:string)=>{
    console.log(selectedOption);

    let sortedBooks =[];

    switch (selectedOption) {
      case "name_asc":
        sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name_desc":
        sortedBooks = [...books].sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "price_asc":
        sortedBooks = [...books].sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        sortedBooks = [...books].sort((a, b) => b.price - a.price);
        break;
      case "year_asc":
        sortedBooks = [...books].sort((a, b) => a.year - b.year);
        break;
      case "year_desc":
        sortedBooks = [...books].sort((a, b) => b.year - a.year);
        break;
      default:
        sortedBooks = books;
        break;
    }

    setBooks(sortedBooks)
  };

  return (
    <main className="my-10 lg:my-14 border-2 border-lime-200 w-full " >
      <h1 className="text-center ">Book Header Component</h1>
      <p className="text-center text-sm">Book Container</p>
      <p className="text-center text-xs">BookList</p>

      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <SearchBooks onSearch={handleSearch} />
          <FilterBooks onFilter={handleFilter} />
        </div>
      </header>
      <BooksContainer books={books} onFav={handleFavourite} />
    </main>
  );
};

export default BookHeader;
