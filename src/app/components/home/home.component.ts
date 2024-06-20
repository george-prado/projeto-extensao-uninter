import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CalendarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
