import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWishesComponent } from './add-wishes/add-wishes.component';
import { CreateCardComponent } from './create-card/create-card.component';

const routes: Routes = [
 { path: 'new-card', component: CreateCardComponent },
 { path: 'add-wishes', component: AddWishesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
