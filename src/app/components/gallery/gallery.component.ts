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
    { url: '../../../assets/imgs/mosaic/1-placeholder.png', alt: 'Evento educativo 1' },
    { url: '../../../assets/imgs/mosaic/2-placeholder.png', alt: 'Evento educativo 2' },
    { url: '../../../assets/imgs/mosaic/3-placeholder.png', alt: 'Evento educativo 3' },
    { url: '../../../assets/imgs/mosaic/4-placeholder.png', alt: 'Evento educativo 4' },
    { url: '../../../assets/imgs/mosaic/5-placeholder.png', alt: 'Evento educativo 5' },
    { url: '../../../assets/imgs/mosaic/6-placeholder.png', alt: 'Evento educativo 6' }
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
