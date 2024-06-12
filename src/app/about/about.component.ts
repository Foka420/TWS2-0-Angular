import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  author = {
    name: 'Miłosz',
    surname: 'Sojda',
    fieldOfStudy: 'Informatyka',
    yearOfStudy: 2,
    modeOfStudy: 'niestacjonarne',
  }
  project = {
    link: 'https://github.com/Foka420/TWS2-0-Angular',
    title: 'TWS2-0-Angular',
    descriptionShort: 'Projekt zaliczeniowy z przedmiotu Tworzenie Serwisów Web 2.0.',
    descriptionLong: 'Aplikacja webowa stworzona w Angularze, która pozwala na zarządzanie książkami. Umożliwia przeglądanie, usuwanie oraz edytowanie.'
  }

  constructor() { }

  ngOnInit() {
  }

}
