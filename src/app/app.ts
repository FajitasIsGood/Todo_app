import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { AddTodo } from "./add-todo/add-todo";
import { Task } from "./task/task";
import { CommonModule } from '@angular/common';
import { NewTask } from './task/task.model';
import { Tasks } from "./tasks/tasks";
import { Menu } from "./menu/menu";

@Component({
  selector: 'app-root',
  imports: [Header, CommonModule, Tasks, Menu, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // tasks = [{title: 'Titre exemple', description: 'Description exemple'}];
 


  // onAddTask(taskData: NewTask) {
  //   console.log('Nouvelle tâche ajoutée :', taskData);
  //   this.tasks.unshift({title : taskData.title, description : taskData.description});
  // }
}
