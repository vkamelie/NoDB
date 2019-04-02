#Books

## Frontend Checklist:

- package.json
    - main => server/
    - proxy => http://localhost:6660
- rest.css 

### Folder Structure

- src/
    - App.js
    - index.js
    - components/
        - Header/
            - Header.js
            - Header.css
        - Libaray/
            - Libaray.js
            - Libaray .css
        - UserCurrentlyReading/
            - UserCurrentlyReading.js
            - UserFavorites.css
        - AddBook/
            - AddBook.css
            - AddBook.js
      

### dependencies:
- `axios`

##Backend checklist:

### Folder Structure:

- Server/
    - index.js
    - controller/
        - bookController.js
    - data/
        - data.json

### Endpoints:

- Get: (get all books) `/api/books`


- Post:(add a books) `/api/books`

- Put: (edit books in the list) `/api/book/:id`

- Delete: (delete books) `/api/book/:id`

```js
{
    id,
    title,
    author,
    movie,
    genre,
    summary,
    url
}

```
### dependencies 

- express
- body-parser