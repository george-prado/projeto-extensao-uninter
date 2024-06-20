import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent {
  @ViewChild('dialog', { static: true }) dialogTemplate!: TemplateRef<unknown>;
  private dialogRef!: MatDialogRef<unknown>;

  constructor (public dialog: MatDialog) {}

  openDialog (): void {
    this.dialogRef = this.dialog.open(this.dialogTemplate, {
      panelClass: 'custom-dialog-container',
      backdropClass: 'custom-dialog-backdrop'
    });
  }

  closeDialog (): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
