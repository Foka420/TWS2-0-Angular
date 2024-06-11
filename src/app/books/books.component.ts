import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import {BOOKS } from '../mock-books';

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

  books = BOOKS;

  constructor() {}

  ngOnInit() {}

  selectedBook: Book = {
    id: 0,
    title: '',
    author: '',
    year: 0
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  clearSelectedBook(): void {
    this.selectedBook= {
      id: 0,
      title: '',
      author: '',
      year: 0
    }
  }

  removeBook(book: Book) {
    const index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
    }
    this.clearSelectedBook();
  }
}
