import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface CarouselItem {
  imageUrl: string;
  alt: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnDestroy {
  items: CarouselItem[] = [
    {
      imageUrl: '../../../assets/imgs/1-placeholder.png',
      alt: 'Logo Placeholder 1'
    },
    {
      imageUrl: '../../../assets/imgs/2-placeholder.png',
      alt: 'Banner da Creche'
    },
    {
      imageUrl: '../../../assets/imgs/3-placeholder.png',
      alt: 'Logo Placeholder 3'
    }
  ];

  currentIndex = 0;
  intervalId: ReturnType<typeof setInterval> | undefined;

  ngOnInit () {
    this.startCarousel();
  }

  ngOnDestroy () {
    this.stopCarousel();
  }

  startCarousel () {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000); // Troca de imagem a cada 5 segundos
  }

  stopCarousel () {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next () {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prev () {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.items.length - 1;
  }

  goTo (index: number) {
    this.currentIndex = index;
  }
}
