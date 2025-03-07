import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule, FormsModule, FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  currentDate = new Date();
  daysInMonth: any[] = [];
  statuses: { [key: number]: string } = {
    1: 'Occupé',
    2: 'Occupé',
    3: 'Libre',
    4: 'Occupé',
    5: 'Libre',
    6: 'Libre',
    7: 'Libre',
    8: 'Libre',
    9: 'Libre',
    10: 'Libre',
    11: 'Occupé',
    12: 'Libre',
    13: 'Libre',
    14: 'Libre',
    15: 'Occupé',
    16: 'Libre',
    17: 'Occupé',
    18: 'Libre',
    19: 'Libre',
    20: 'Occupé',
    21: 'Libre',
    22: 'Libre',
    23: 'Libre',
    24: 'Libre',
    25: 'Libre',
    26: 'Libre',
    27: 'Libre',
    28: 'Libre',
    29: 'Libre',
    30: 'Libre',
    31: 'Libre',
  };

  constructor() {
    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    let firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Adjust firstDay so that Monday is the first day of the week
    firstDay = firstDay === 0 ? 6 : firstDay - 1;

    const today = new Date();
    const todayDate = today.getDate();
    const isCurrentMonth =
      today.getMonth() === month && today.getFullYear() === year;
    this.daysInMonth = [];
    for (let i = 0; i < firstDay; i++) {
      this.daysInMonth.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      this.daysInMonth.push({
        day,
        status: this.statuses[day] || '',
        isToday: isCurrentMonth && day === todayDate,
      });
    }
  }

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }
}
