import { Injectable, OnInit } from "@angular/core";
import { NewTask } from "../task/task.model";

//Mise en place d'un service injectable pour gérer les tâches
// C'est une bonne pratique d'utiliser des services pour gérer les données et la logique métier dans Angular
@Injectable({providedIn: 'root'})
export class TasksServices {
  private tasks : NewTask[]=[] ;
    
  constructor() {
    // Verifier que le localStorage est present pour executer le code, il y avait un probleme lors du server side rendering 
    // qui verifiait l'existence de localStorage cote serveur (qui n'existe pas) avant le rendu de l'application sur le browser
    if (typeof localStorage !== 'undefined') {
      const tasksFromStorage = localStorage.getItem('tasks');
      if (tasksFromStorage) {
        this.tasks = JSON.parse(tasksFromStorage);
      }
    }
  }
  getTasks(): NewTask[] {
    return this.tasks;
  }


  addTask(taskData: NewTask) {
        console.log('Nouvelle tâche ajoutée :', taskData);
        // unshift pour ajouter au début du tableau
        this.tasks.unshift({title : taskData.title, description : taskData.description});
        this.saveTasksToStorage();
  }

   private saveTasksToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTask() {
    this.tasks = this.tasks.filter(task => !task.done);
    this.saveTasksToStorage();
  }
}