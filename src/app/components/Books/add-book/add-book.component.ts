import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {
location = inject(Location)
  book = {
    title: '',
    author: '',
    genre: '',
    year: new Date().getFullYear()
  };

  constructor(private router: Router) {}

  saveBook() {
    console.log('Libro guardado', this.book);
    // Aquí puedes agregar la lógica para guardar el libro
    // Después de guardar, redirigir al listado de libros
    this.router.navigate(['/books/book-list']);
  }

  cancel() {
    // Redirigir al listado de libros sin guardar
    this.location.back();
  }

}
