import { Component } from '@angular/core';
import { Calendar } from './components/calendar/calendar';
import { CommonModule } from '@angular/common';
import { Task } from './models/task.model';
import { TaskList } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [Calendar, CommonModule, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  selectedDate: Date = new Date();

  tasks: Task[] = [
    {
      id: 1,
      title: 'Workout Routine Upper A',
      date: '2025-06-24',
      done: false,
    },

    {
      id: 2,
      title: 'Workout Routine Lower B',
      date: '2025-06-25',
      done: false,
    },
    { id: 3, title: 'Create new project', date: '2025-06-25', done: false },
  ];

  getTasksForSelectedDate(): Task[] {
    const today = this.selectedDate.toISOString().split('T')[0];
    return this.tasks.filter((task) => task.date === today);
  }

  handleDateChange(date: Date): void {
    this.selectedDate = date;
  }

  protected title = 'task-calendar';
}
