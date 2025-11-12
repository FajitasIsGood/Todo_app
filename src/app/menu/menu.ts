import { Component, inject, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AddTodo } from "../add-todo/add-todo";
import { NavigationEnd, Router, RouterModule} from '@angular/router';
import { Header } from "../header/header";
import { Tasks } from "../tasks/tasks";
import { filter } from 'rxjs';


@Component({
  selector: 'app-menu',
  imports: [MatSidenavModule, MatToolbarModule, MatButtonModule, RouterModule, Header, Tasks],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit{
 opened = true;

 private router = inject(Router); 
 currentRoute: string = '';

  ngOnInit() {
    // Souscrire a un observable pour recevoir les changements de navigation et mettre a jour la route courante
      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        //event.urlAfterRedirects contient la route courante
        this.currentRoute = event.urlAfterRedirects;
        
      });
  }
  viewHistory() {
    // Navigation vers la de l'histoique 
    this.router.navigate(['/history']);
  }



  get headerTitle(): string {
  switch (this.currentRoute) {
    case '/history': return 'Historique des tâches';
    default: return 'Todo List';
  }
}
}
