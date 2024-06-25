import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

interface ImportantDate {
  date: string;
  description: string;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  importantDates: ImportantDate[] = [
    { date: '2024-06-22', description: 'Lançamento do nosso site' }
  ];
}
