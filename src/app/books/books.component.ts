import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
// import {BOOKS } from '../mock-books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{
  book: Book = {
    id: 1,
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    year: 1997
  };

  // books = BOOKS;
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  getBooks(): void {
    // this.books = this.bookService.getBooks();
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  ngOnInit() {
    this.getBooks();
  }

  selectedBook: Book = {
    id: 0,
    title: '',
    author: '',
    year: 0
  }

  isDetailsVisible: boolean = false;

  onSelect(book: Book): void {
    this.selectedBook = book;
    this.isDetailsVisible = true;
  }

  clearSelectedBook(): void {
    this.selectedBook= {
      id: 0,
      title: '',
      author: '',
      year: 0
    }
    this.isDetailsVisible = false;
  }

  removeBook(book: Book) {
    const index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
    }
    this.clearSelectedBook();
  }
}
