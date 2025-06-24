import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { MatCardModule } from '@angular/material/card';




@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {

@Input() tasks: Task[] = [];

}
