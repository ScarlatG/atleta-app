import { Component, OnInit, OnDestroy } from '@angular/core';
import { AtletaService } from '../atleta.service';
import { Atleta } from 'src/app/model/atleta';
import { Subscription } from 'rxjs';

@Component({
  selector: 'atl-atleta-list',
  templateUrl: './atleta-list.component.html',
  styleUrls: ['./atleta-list.component.css'],
})
export class AtletaListComponent implements OnInit, OnDestroy {
  constructor(private atletaService: AtletaService) {}

  subscription?: Subscription;

  listaAtleti: Atleta[] = [];

  ngOnInit(): void {
    this.subscription = this.atletaService
      .listAll()
      .subscribe((listaAtleti) => {
        this.listaAtleti = listaAtleti;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
