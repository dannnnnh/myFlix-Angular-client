import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Defines the routes of the application.
 * @type {Routes}
 */
const routes: Routes = [];

/**
 * @module AppRoutingModule
 * Angular module responsible for managing the routing of the application.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
