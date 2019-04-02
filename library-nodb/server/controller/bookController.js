const books = [
  {
    id: 0,
    title: "Twilight",
    author: "Stephenie Meyer",
    summary:
      "A love story between a too cool for school girl and sparkly undead man.",
    genre: "Romance YA",
    rec: false,
    url: "https://upload.wikimedia.org/wikipedia/en/1/1d/Twilightbook.jpg"
  },
  {
    id: 1,
    title: "Eclipse",
    author: "Stephenie Meyer",
    summary:
      "The love triangle contiunes and Bella choice between love and death",
    genre: "Romance YA",
    rec: false,
    url: "https://upload.wikimedia.org/wikipedia/en/2/20/Eclipsecover.jpg"
  },
  {
    id: 2,
    title: "New Moon",
    author: "Stephenie Meyer",
    summary: "Young love deals with heartbreak, and a love triangle.",
    genre: "Romance, YA",
    rec: false,
    url: "https://upload.wikimedia.org/wikipedia/en/8/89/Newmooncover.jpg"
  },
  {
    id: 3,
    title: "The Demon in the Freezer",
    author: "Richard Preston",
    summary:
      "An over view of the Smallpox Eradication Program and the percepetion of the smallpox being used in future in bioterrorism attack",
    genre: "Non-fiction",
    rec: false,
    url:
      "https://upload.wikimedia.org/wikipedia/en/7/74/The_Demon_in_the_Freezer.jpg"
  },
  {
    id: 4,
    title: "Breaking Dawn",
    author: "Stephenie Meyer",
    summary: "Love, death and family",
    genre: "Romance, YA",
    rec: false,
    url:
      "https://upload.wikimedia.org/wikipedia/en/3/31/Breaking_Dawn_cover.jpg"
  },
  {
    id: 5,
    title: "Dune",
    author: "Frank Herbert",
    summary: "Plots within plots within plots within plots",
    genre: "Science fiction",
    rec: false,
    url:
      "https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg"
  },
  {
    id: 6,
    title:
      "I'll Be Gone in the Dark: One Woman's Obsessive Search for the Golden State Killer",
    author: "Michelle McNamara",
    summary: "A true crime novel about the golden state killer",
    genre: "True crime",
    rec: true,
    url:
      "https://upload.wikimedia.org/wikipedia/en/e/e0/Ill_be_gone_in_the_dark.jpg"
  },
  {
    id: 7,
    title: "The Stranger Beside Me",
    author: "Ann Rule",
    summary: "Ann Rules friendship with Ted Bundy ",
    genre: "True Crime",
    rec: false,
    url:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/The_Stranger_Beside_Me_%28book%29.jpg"
  },
  {
    id: 8,
    title: "The Haunting of Hill House",
    author: "Shirley Jackson",
    summary: "A house that has ghost.",
    genre: "Horror",
    rec: false,
    url:
      "https://upload.wikimedia.org/wikipedia/en/0/04/HauntingOfHillHouse.JPG"
  },
  {
    id: 9,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    summary: "A youngman coming of age story.",
    genre: "Fiction",
    rec: false,
    url: "https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg"
  },
  {
    id: 10,
    title: "Hyperspace",
    author: "Michio Kaku",
    summary:
      "A Scientific Odyssey Through Parallel Universes, Time Warps, and the 10th Dimension ",
    genre: "Non-Fiction",
    rec: false,
    url:
      "https://upload.wikimedia.org/wikipedia/en/6/6a/Hyperspace_Kaku_1995.jpg"
  }
];

let id = 11;

module.exports = {
  bookList: (req, res) => {
    res.status(200).send(books);
  },

  updateBook: (req, res) => {
    const { title, author, summary, genre, url } = req.body;
    console.log(req.body, title, author, summary, genre, url);
    const newBook = {
      id,
      title,
      author,
      summary,
      genre,
      url
    };
    books.push(newBook);
    id++;
    console.log(books);
    res.status(200).send(books);
  },

  changeBook: (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    let index = books.findIndex(book => book.id === +id);

    if (books[index].rec === true) {
      books[index].rec = false;
    } else books[index].rec = true;
    res.status(200).json(books);
  },

  deleteBook: (req, res) => {
    const{id} = req.params;
    let index = books.findIndex(book  => book.id === +id)
    books.splice(index, 1)
    res.status(200).send(books)
  }
};
