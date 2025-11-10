import { Component, Input } from '@angular/core';
import { NewTask } from './task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [FormsModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  
  // Ici c'est le composant task qui reçoit la tâche à afficher depuis le composant parent tasks via une propriété Input
  @Input({required : true}) task!: NewTask;



}

