import { Routes } from '@angular/router';
import { Tasks } from './tasks/tasks';
import { History } from './history/history';

export const routes: Routes = [{
    path:'',
    component : Tasks  
    },
    {
    path: 'history',
    component: History
    },
];
