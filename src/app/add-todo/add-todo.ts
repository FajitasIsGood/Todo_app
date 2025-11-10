import { Component, EventEmitter, Input, input, InputSignal, Output, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo {
  //Emet l'output(donnee) que l'utilisateur a ajouté => il faut utiliser (add)="" dans le parent component (tasks)
  @Output() add = new EventEmitter<NewTask>();

  //Propriétés pour stocker les valeurs des champs du formulaire avec two-way binding [(ngModel)]
  Title = '';
  Description = '';

  //Méthode appelée lors de la soumission du formulaire
  //La methode prendra en paramètre l'événement de soumission du formulaire cad les donnees saisies par l'utilisateur 
  onSubmit(event: Event) {
    // add va emettre du coup les données de la nouvelle tâche au parent component (tasks)
    this.add.emit({title: this.Title, description: this.Description});
  }
  
}
