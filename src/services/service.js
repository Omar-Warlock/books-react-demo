import axios from "axios";
const url = "http://localhost:3000/books";

// Get All Books
export async function getAllBooks() {
  try {
    return await axios.get(url);
  } catch (err) {
    console.log(err.message);
  }
}

// Create New Book
export async function createBook(book) {
  return await axios.post(url, book);
}

// Get single book
export async function getBook(id) {
  return await axios.get(`${url}/${id}`);
}

// Delete Book
export async function deleteBook(id) {
  return await axios.delete(`${url}/${id}`);
}

// Edit Book
export async function editBook(id, book) {
  return await axios.put(`${url}/${id}`, book);
}
