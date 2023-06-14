import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtletaService } from '../atleta.service';
import { Atleta } from 'src/app/model/atleta';

@Component({
  selector: 'atl-atleta-delete',
  templateUrl: './atleta-delete.component.html',
  styleUrls: ['./atleta-delete.component.css'],
})
export class AtletaDeleteComponent implements OnInit {
  atletaToDelete?: Atleta;

  constructor(
    private route: ActivatedRoute,
    private atletaService: AtletaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    this.atletaService.findById(id).subscribe(
      (atleta: Atleta | undefined) => {
        if (atleta) {
          this.atletaToDelete = atleta;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onBack() {
    this.router.navigate(['/atleta/list']);
  }

  toDelete() {
    if (this.atletaToDelete) {
      this.atletaService.delete(this.atletaToDelete.id as number).subscribe(
        () => {
          console.log('Atleta deleted successfully');
          this.router.navigate(['/atleta/list']);
        },
        (error) => {
          console.error(error);
          // Gestisci l'errore
        }
      );
    }
  }
}
