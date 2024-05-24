const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
const books = getBook(3);

// const titleName = books.title;
// titleName

// const authorName = books.author;
// authorName

const {title, author, genres, pages, publicationDate, hasMovieAdaptation, reviews} = books

console.log(title, author);

const[primary , secondary, ...otherGenres] = genres  //rest parameter concept
console.log(primary, secondary, otherGenres); 

const newGenres = ['Coco', 'pepsi', ...genres]  //spread Operator concept
console.log(newGenres); 

const updatedBook= {
  ...books, 
  //Adding new property
  moviePublicationDate: "2001-12-19",
  //updating new property
  pages:10000};
updatedBook

const summary = `${title} is a book is ${pages}`
console.log(summary);

const pagesRange = pages > 1200 ? "over a thousand" : "less than thousand";
console.log(pagesRange);

// function getYear(str){
//    return str.split('-')[0];
// }
// console.log(getYear(publicationDate));

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

console.log(hasMovieAdaptation && "This book has a movie");

console.log(books.translations.spanish);

const ST = books.translations.spanish || "Not transalted"
ST

function getTotalReviewCount(books){
   const goodreads = books.reviews.goodreads.reviewsCount;

   const librarything = books.reviews.librarything?.reviewsCount ?? 0;
librarything
   return goodreads + librarything
}

console.log(getTotalReviewCount(books));

*/

const books = getBooks( );
books;
const x = [1, 2, 4, 5, 10].map((el)=> el*2);
console.log(x);

const titles = books.map((e)=> e.title)
titles


function getTotalReviewCount(books){
  const goodreads = books.reviews.goodreads.reviewsCount;

  const librarything = books.reviews.librarything?.reviewsCount ?? 0;
librarything
  return goodreads + librarything
}


const essentialData = books.map((b) => ({
  title : b.title,
  author : b.author,
  reviewsCount : getTotalReviewCount(b)
}));
console.log(essentialData);

const longBooks = books.filter(b=> b.pages > 500).filter(b=> b.hasMovieAdaptation)
longBooks

const adventureBooks = books.filter((b)=> b.genres.includes("adventure")).map(b=>b.title)
adventureBooks

const pagesAllBooks = books.reduce((acc, b)=> b.pages+acc , 0);
pagesAllBooks

const arr = [5, 4, 6, 8, 10, 2];

const sortedArr = arr.slice().sort((a, b)=> a - b);
sortedArr
arr

const sortedByPages = books.slice().sort((a , b)=> b.id - a.id)
sortedByPages

const newBook = {
  id : 6,
  title : 'The Dark',
  Author : 'King'
};

// Add book object into the array
const addNewBook = [...books, newBook];
addNewBook

//Delete object from array

const deleteBook = addNewBook.filter((b)=> b.id !== 3);
deleteBook


//update object from array

const updateBook = deleteBook.map((b)=> b.id === 1 ? {...b, pages:123} :b);
updateBook
console.log(updateBook);



