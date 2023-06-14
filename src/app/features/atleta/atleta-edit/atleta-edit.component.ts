import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtletaService } from '../atleta.service';
import { Atleta } from 'src/app/model/atleta';

@Component({
  selector: 'atl-atleta-edit',
  templateUrl: './atleta-edit.component.html',
  styleUrls: ['./atleta-edit.component.css'],
})
export class AtletaEditComponent implements OnInit {
  atletaDetail?: Atleta;
  nomeUpdateInput?: string;
  cognomeUpdateInput?: string;
  inAttivitaInput?: boolean;
  dataUltimaGara?: Date;
  numeroMedaglieVinte?: number;

  constructor(
    private route: ActivatedRoute,
    private atletaService: AtletaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    this.atletaService.findById(id).subscribe(
      (atleta: Atleta | undefined): void => {
        this.atletaDetail = atleta;
        this.nomeUpdateInput = this.atletaDetail?.nome;
        this.cognomeUpdateInput = this.atletaDetail?.cognome;
        this.inAttivitaInput = this.atletaDetail?.inAttivita;
        this.dataUltimaGara = this.atletaDetail?.dataUltimaGara;
        this.numeroMedaglieVinte = this.atletaDetail?.numeroMedaglieVinte;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onBack() {
    this.router.navigate(['/atleta/list']);
  }

  onSave() {
    if (this.atletaDetail) {
      let atletaAggiornamento: Atleta = {
        id: this.atletaDetail.id,
        nome: this.nomeUpdateInput || this.atletaDetail.nome,
        cognome: this.cognomeUpdateInput || this.atletaDetail.cognome,
        inAttivita: this.inAttivitaInput || this.atletaDetail.inAttivita,
        dataUltimaGara: this.dataUltimaGara || this.atletaDetail.dataUltimaGara,
        numeroMedaglieVinte:
          this.numeroMedaglieVinte || this.atletaDetail.numeroMedaglieVinte,
      };

      this.atletaService.update(atletaAggiornamento).subscribe(
        (atleta: Atleta) => {
          console.log('Atleta updated successfully');
          this.onBack();
        },
        (error) => {
          console.error(error);
          // Gestisci l'errore
        }
      );
    }
  }
}
