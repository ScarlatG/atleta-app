import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtletaListComponent } from './features/atleta/atleta-list/atleta-list.component';
import { AtletaCreateComponent } from './features/atleta/atleta-create/atleta-create.component';

const routes: Routes = [
  // { path: 'welcome', component: WelcomeComponent },
  { path: 'atleta/list', component: AtletaListComponent },
  { path: 'atleta/create', component: AtletaCreateComponent },
  // { path: 'libro/:id', component: LibroDetailComponent },
  // { path: 'libro/edit/:id', component: LibroEditComponent },
  { path: '', redirectTo: 'atleta/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
