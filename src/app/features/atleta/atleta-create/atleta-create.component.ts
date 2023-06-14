import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Atleta } from 'src/app/model/atleta';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'atl-atleta-create',
  templateUrl: './atleta-create.component.html',
  styleUrls: ['./atleta-create.component.css'],
})
export class AtletaCreateComponent implements OnInit {
  atleta: Atleta = {
    id: undefined,
    nome: '',
    cognome: '',
    inAttivita: false,
    dataUltimaGara: new Date(),
    numeroMedaglieVinte: 0,
  };
  errorMessage: string = '';

  constructor(private atletaService: AtletaService, private router: Router) {}

  ngOnInit(): void {}

  save(atletaForm: NgForm): void {
    if (atletaForm.valid) {
      this.atletaService.create(this.atleta).subscribe({
        next: (atletaItem) => {
          this.atleta = atletaItem;
          this.router.navigate(['atleta/list'], {
            queryParams: {
              confirmMessage: 'Operazione effettuta correttamente.',
            },
          });
        },
        error: (error) => {
          this.errorMessage =
            'Attenzione! Operazione fallita! Il form non è stato validato.';
          console.error(error);
        },
      });
    } else {
      this.errorMessage =
        'Attenzione! Operazione fallita! Il form non è stato validato.';
    }
  }

  getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
  }
}
