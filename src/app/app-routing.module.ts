import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtletaListComponent } from './features/atleta/atleta-list/atleta-list.component';
import { AtletaCreateComponent } from './features/atleta/atleta-create/atleta-create.component';
import { AtletaEditComponent } from './features/atleta/atleta-edit/atleta-edit.component';
import { AtletaDeleteComponent } from './features/atleta/atleta-delete/atleta-delete.component';
import { AtletaDetailComponent } from './features/atleta/atleta-detail/atleta-detail.component';

const routes: Routes = [
  { path: 'atleta/list', component: AtletaListComponent },
  { path: 'atleta/create', component: AtletaCreateComponent },
  { path: 'atleta/edit/:id', component: AtletaEditComponent },
  { path: 'atleta/detail/:id', component: AtletaDetailComponent },
  { path: 'atleta/delete/:id', component: AtletaDeleteComponent },
  { path: '', redirectTo: 'atleta/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
