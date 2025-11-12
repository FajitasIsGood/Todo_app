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

  NullEntry = false;

  //Propriétés pour stocker les valeurs des champs du formulaire avec two-way binding [(ngModel)]
  Title = '';
  Description = '';

  onCheckClick(){
    if(this.Title === null  || this.Description === null ){
      this.NullEntry = true;
    }else{
      this.NullEntry = false;
    }
  }

  //Méthode appelée lors de la soumission du formulaire
  //La methode prendra en paramètre l'événement de soumission du formulaire cad les donnees saisies par l'utilisateur 
  onSubmit(event: Event) {
  // Vérifie si les champs sont vides ou contiennent seulement des espaces
  if (!this.Title?.trim() || !this.Description?.trim()) {
    this.NullEntry = true; // affiche le message
    return;
  }

  this.NullEntry = false;

  // Émettre les données au parent
  this.add.emit({ title: this.Title, description: this.Description });

  // Réinitialiser le formulaire
  this.Title = '';
  this.Description = '';


  }
    
  
}
