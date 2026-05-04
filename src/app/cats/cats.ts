import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cats',
  imports: [NgFor],
  templateUrl: './cats.html',
  styleUrl: './cats.css'
})
export class Cats {
  cats = [
    { emoji: '🐱', name: 'Siamés', origin: 'Tailandia', description: 'Elegante y vocal, reconocido por sus ojos azules y pelaje claro con puntos oscuros.' },
    { emoji: '🐈', name: 'Maine Coon', origin: 'EE.UU.', description: 'El gigante amistoso. Pelaje largo, orejas con mechones y personalidad de perro.' },
    { emoji: '😺', name: 'Persa', origin: 'Persia', description: 'Tranquilo y afectuoso. Su pelaje largo y cara chata lo hacen inconfundible.' },
    { emoji: '🐾', name: 'Bengalí', origin: 'EE.UU.', description: 'Activo y atlético, con un pelaje manchado que recuerda a los leopardos salvajes.' },
    { emoji: '🐈‍⬛', name: 'Ragdoll', origin: 'California', description: 'Se relaja como una muñeca cuando lo cargas. Muy dócil y cariñoso.' },
    { emoji: '😸', name: 'Sphynx', origin: 'Canadá', description: 'Sin pelo, pero lleno de personalidad. Curioso, juguetón y muy sociable.' },
  ];
}