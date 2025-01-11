import { Routes } from '@angular/router';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent } from './pages/child/child.component';

export const routes: Routes = [
    
   
    {
        path:'child', component:ChildComponent

    },
    {
        path:'**',component:ParentComponent
    }
];
