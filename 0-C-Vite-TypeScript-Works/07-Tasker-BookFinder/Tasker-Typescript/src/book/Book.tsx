import { TBook } from "./BookHeader"
import star from '/src/assets/star.svg'

interface BooksProps {
  book:TBook;
  onFav:(favId:string)=>void;
}


const Book = ({book,onFav}:BooksProps) => {


  const {id,title,image,rating,author,price,year,isFavorite}=book;
  return (
    <div key={id} className="space-y-3 border-4 border-yellow-500">
      <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
        <img className="max-w-[144px] " src={image} alt={title} />
      </div>
      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl text-cyan-300">{title}</h4>
        <small>
          <strong className="text-red-400">{year}</strong>
        </small>
        <p className="text-xs lg:text-sm">
          By: <span>{author}</span>
        </p>
        <div className="flex items-center justify-between ">
          <h4 className="text-lg font-bold lg:text-xl text-lime-300 ">$ {price}</h4>
          <div className="flex items-center space-x-1">
            {Array.from({ length: book.rating }, (_, index) => (
              <img
                key={index}
                src={star}
                alt={`Star ${index + 1}`}
              />
            ))}
            <span className="text-xs lg:text-sm">({rating} Star)</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs lg:text-sm">
          <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#429e17c5] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            ></svg>
            Add to Cart
          </button>
          <button
            onClick={() => onFav(book?.id)}
            className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[14%] lg:py-1.5 ${isFavorite ? 'bg-red-200': 'bg-slate-50'}`}
          >
            {isFavorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            )}
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book