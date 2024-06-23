import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PhotoDialogComponent } from './dialog/dialog.component';

interface Photo {
  url: string;
  alt: string;
}

export interface DialogData {
  photoUrl: string;
  photoAlt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatDialogModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  photos: Photo[] = [
    { url: '../../../assets/imgs/mosaic/1.png', alt: 'Evento educativo 1' },
    { url: '../../../assets/imgs/mosaic/2.png', alt: 'Evento educativo 2' },
    { url: '../../../assets/imgs/mosaic/3.png', alt: 'Evento educativo 3' },
    { url: '../../../assets/imgs/mosaic/4.png', alt: 'Evento educativo 4' },
    { url: '../../../assets/imgs/mosaic/5.png', alt: 'Evento educativo 5' },
    { url: '../../../assets/imgs/mosaic/6.png', alt: 'Evento educativo 6' },
    { url: '../../../assets/imgs/mosaic/7.png', alt: 'Evento educativo 7' },
    { url: '../../../assets/imgs/mosaic/8.png', alt: 'Evento educativo 8' },
    { url: '../../../assets/imgs/mosaic/9.png', alt: 'Evento educativo 9' },
    { url: '../../../assets/imgs/mosaic/10.png', alt: 'Evento educativo 10' },
    { url: '../../../assets/imgs/mosaic/11.png', alt: 'Evento educativo 11' },
    { url: '../../../assets/imgs/mosaic/12.png', alt: 'Evento educativo 12' }
  ];

  photoRows: Photo[][] = [];

  constructor (private dialog: MatDialog) {
    this.generatePhotoRows();
  }

  generatePhotoRows (): void {
    for (let i = 0; i < this.photos.length; i += 3) {
      this.photoRows.push(this.photos.slice(i, i + 3));
    }
  }

  openDialog (photo: Photo): void {
    this.dialog.open(PhotoDialogComponent, {
      width: '80%',
      data: { photoUrl: photo.url, photoAlt: photo.alt } as DialogData
    });
  }
}
