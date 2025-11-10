import { Component, OnInit } from '@angular/core';
import { NewTask } from '../task/task.model';
import { Task } from "../task/task";
import { AddTodo } from "../add-todo/add-todo";

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTodo],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {

  //Initialisation de la liste des tâches sans tâche au départ
  tasks : NewTask[]=[] ;
  
  ngOnInit() {
    const tasksFromStorage = localStorage.getItem('tasks');

    if (tasksFromStorage) {
      this.tasks = JSON.parse(tasksFromStorage);
    }
  }
  //Méthode pour ajouter une nouvelle tâche à la liste
  onAddTask(taskData: NewTask) {
    console.log('Nouvelle tâche ajoutée :', taskData);
    // unshift pour ajouter au début du tableau
    this.tasks.unshift({title : taskData.title, description : taskData.description});
    this.saveTasksToStorage();
  }

  private saveTasksToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
