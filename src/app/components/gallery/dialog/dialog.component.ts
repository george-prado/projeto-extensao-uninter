import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

export interface DialogData {
  photoUrl: string;
  photoAlt: string;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class PhotoDialogComponent {
  photoUrl: string;
  photoAlt: string;

  constructor (@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.photoUrl = data.photoUrl;
    this.photoAlt = data.photoAlt;
  }
}
