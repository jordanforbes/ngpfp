import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './art/art.component';
import { AppProjectsComponent } from './app-projects/app-projects.component';
import { ArtDetailsComponent } from './art-details/art-details.component';
import { ArtCardComponent } from './art-card/art-card.component';

const routes: Routes = [
  { path: 'art', component: ArtComponent },
  { path: 'app-projects', component: AppProjectsComponent },
  { path: 'art-details/:id', component: ArtDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
