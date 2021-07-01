import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddWishesComponent } from './add-wishes/add-wishes.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { ViewCardComponent } from './view-card/view-card.component';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
 { path: 'add-wishes/:id', component: AddWishesComponent },
 { path: 'new-card/:type', component: CreateCardComponent },
 { path: 'view-card/:id', component: ViewCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
