import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './list-users/users/users.component';
import { UserDetailComponent } from './list-users/user-detail/user-detail.component';
import {AppComponent} from './app.component'
import { NgModule } from '@angular/core';



export const routes: Routes = [
{
    path:'users',
    component:UsersComponent
    
},

{ 
    path: 'user-details',
    component: UserDetailComponent 
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


