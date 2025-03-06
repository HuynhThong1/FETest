import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { HeaderSectionComponent } from '../../components/header-section/header-section.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-layout-calendar',
  imports: [
    CommonModule,
    CalendarComponent,
    HeaderSectionComponent,
    ContactFormComponent
  ],
  templateUrl: './layout-calendar.component.html',
  styleUrl: './layout-calendar.component.scss',
})
export class LayoutCalendarComponent {

  bloc_2_2 = input<any>({});


}
