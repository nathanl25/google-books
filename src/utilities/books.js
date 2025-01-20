export const searchBooks = async (searchTerm, index = '0') => {
  const api = import.meta.env.VITE_API_KEY ?? '';
  const req = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${api}&startIndex=${index}&maxResults=12`
  );
  if (!req.ok) {
    throw new Error(`Error Code ${req.status}`);
  }
  const data = await req.json();
  const cleanedData = cleanData(data);
  return cleanedData;
};

const cleanData = (jsonData) => {
  const results = {};
  results.totalPages =
    jsonData.totalItems < 600
      ? Math.floor(Number(jsonData.totalItems) / 12)
      : 50;
  const booksArr = jsonData.items;
  results.data = booksArr.map((book) => {
    return {
      authors: book.volumeInfo.authors,
      key: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      publisher: book.volumeInfo.publisher,
      date: book.volumeInfo.publishedDate,
      description: book.volumeInfo.description,
      identifiers:
        book.volumeInfo.industryIdentifiers !== undefined
          ? book.volumeInfo.industryIdentifiers.map((isbn) => {
              return isbn.identifier;
            })
          : ['No ISBN Available'],
      categories: book.volumeInfo.categories ?? ['Not categorised'],
      url:
        book.volumeInfo.imageLinks !== undefined
          ? book.volumeInfo.imageLinks.thumbnail
          : 'no image available',
    };
  });
  return results;
};
