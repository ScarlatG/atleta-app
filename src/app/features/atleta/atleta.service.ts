import { Injectable } from '@angular/core';
import { Atleta } from 'src/app/model/atleta';
import { Observable, filter, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AtletaService {
  constructor() {}

  listaAtleti: Atleta[] = [
    {
      id: 1,
      nome: 'Mario',
      cognome: 'Rossi',
      inAttivita: true,
      dataUltimaGara: new Date('2023-06-01'),
      numeroMedaglieVinte: 3,
    },
    {
      id: 2,
      nome: 'Luca',
      cognome: 'Bianchi',
      inAttivita: true,
      dataUltimaGara: new Date('2023-05-28'),
      numeroMedaglieVinte: 5,
    },
    {
      id: 3,
      nome: 'Giulia',
      cognome: 'Verdi',
      inAttivita: true,
      dataUltimaGara: new Date('2023-06-02'),
      numeroMedaglieVinte: 2,
    },
    {
      id: 4,
      nome: 'Marco',
      cognome: 'Neri',
      inAttivita: false,
      dataUltimaGara: new Date('2022-11-15'),
      numeroMedaglieVinte: 8,
    },
    {
      id: 5,
      nome: 'Sara',
      cognome: 'Gialli',
      inAttivita: true,
      dataUltimaGara: new Date('2023-06-07'),
      numeroMedaglieVinte: 4,
    },
  ];

  listAll(): Observable<Atleta[]> {
    return of(this.listaAtleti);
  }

  create(atleta: Atleta): Observable<Atleta> {
    this.listaAtleti.push(atleta);
    return of(atleta);
  }
}
