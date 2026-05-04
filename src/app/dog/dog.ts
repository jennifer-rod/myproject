import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dog',
  imports: [NgFor],
  templateUrl: './dog.html',
  styleUrl: './dog.css'
})
export class Dog {
  dogs = [
    { emoji: '🐕', name: 'Golden Retriever', origin: 'Escocia', description: 'Amigable, confiable y digno de confianza. El perro familiar por excelencia.' },
    { emoji: '🐩', name: 'Poodle', origin: 'Alemania', description: 'Extremadamente inteligente y entrenabe. Existe en 4 tamaños distintos.' },
    { emoji: '🦮', name: 'Pastor Alemán', origin: 'Alemania', description: 'Versátil, leal y trabajador. Usado en policía, rescate y como guía.' },
    { emoji: '🐕‍🦺', name: 'Bulldog Francés', origin: 'Francia', description: 'Juguetón y alerta. Perfecto para apartamentos por su tamaño y carácter tranquilo.' },
    { emoji: '🐶', name: 'Beagle', origin: 'Inglaterra', description: 'Curioso y enérgico. Tiene un olfato extraordinario y un carácter alegre.' },
    { emoji: '🦴', name: 'Husky Siberiano', origin: 'Siberia', description: 'Atlético y amistoso. Sus ojos azules y pelaje denso lo hacen inconfundible.' },
  ];
}