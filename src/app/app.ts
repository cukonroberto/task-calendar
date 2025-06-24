import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calendar } from "./components/calendar/calendar";
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calendar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {


  selectedDate: Date = new Date();

  handleDateChange(date: Date): void {
    this.selectedDate = date;
  }


  protected title = 'task-calendar';
}
