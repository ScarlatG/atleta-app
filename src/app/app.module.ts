import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { AtletaListComponent } from './features/atleta/atleta-list/atleta-list.component';
import { AtletaCreateComponent } from './features/atleta/atleta-create/atleta-create.component';
import { AtletaEditComponent } from './features/atleta/atleta-edit/atleta-edit.component';
import { AtletaDetailComponent } from './features/atleta/atleta-detail/atleta-detail.component';
import { AtletaDeleteComponent } from './features/atleta/atleta-delete/atleta-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AtletaListComponent,
    AtletaCreateComponent,
    AtletaEditComponent,
    AtletaDetailComponent,
    AtletaDeleteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
