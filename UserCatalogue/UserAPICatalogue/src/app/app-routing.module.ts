import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { UsersComponent } from './component/users/users.component';
import { UserResolver } from './service/user.resolver';
import { UserService } from './service/user.service';

const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'user/:uid', component:UserdetailComponent, resolve:{resolvedResponse:UserResolver}},
  // {path:'**', component:UsersComponent}
  {path:'**', redirectTo: 'users'}
];

@NgModule({  //decorator
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
