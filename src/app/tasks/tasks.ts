import { Component, OnInit } from '@angular/core';
import { NewTask } from '../task/task.model';
import { Task } from "../task/task";
import { AddTodo } from "../add-todo/add-todo";
import { TasksServices } from './tasks.services';

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTodo],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks  {
  // private tasksServices = new TasksServices();
  //Initialisation de la liste des tâches sans tâche au départ
  
  constructor(private tasksServices: TasksServices) {}
  
  

  get tasks() {
    return this.tasksServices.getTasks();
  }

  //Méthode pour ajouter une nouvelle tâche à la liste
  onAddTask(taskData: NewTask) {
    console.log('Nouvelle tâche ajoutée :', taskData);
    // unshift pour ajouter au début du tableau
    this.tasksServices.addTask(taskData)


  }

  onDeleteTask() {
    this.tasksServices.deleteTask();

  }


}
