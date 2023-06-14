import { Injectable } from '@angular/core';
import { Atleta } from 'src/app/model/atleta';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AtletaService {
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

  private atletiUrl = 'http://localhost:8080/api/atleta'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  listAll(): Observable<Atleta[]> {
    return this.http
      .get<Atleta[]>(this.atletiUrl)
      .pipe(catchError(this.handleError<Atleta[]>('getAtleti', [])));
  }

  findById(id: number): Observable<Atleta | undefined> {
    const url = `${this.atletiUrl}/${id}`;
    return this.http.get<Atleta>(url).pipe(
      tap((_) => console.log(`Fetched atleta id=${id}`)),
      catchError(this.handleError<Atleta>(`getAtleta id=${id}`))
    );
  }

  update(atleta: Atleta): Observable<Atleta> {
    const url = `${this.atletiUrl}/${atleta.id}`;
    return this.http.put<Atleta>(url, atleta, this.httpOptions).pipe(
      tap((_) => console.log(`Updated atleta id=${atleta.id}`)),
      catchError(this.handleError<any>('updateAtleta'))
    );
  }

  delete(id: number): Observable<boolean> {
    const url = `${this.atletiUrl}/${id}`;
    return this.http.delete<boolean>(url, this.httpOptions).pipe(
      tap((_) => console.log(`Deleted atleta id=${id}`)),
      catchError(this.handleError<any>('deleteAtleta'))
    );
  }

  create(atleta: Atleta): Observable<Atleta> {
    return this.http
      .post<Atleta>(this.atletiUrl, atleta, this.httpOptions)
      .pipe(
        tap((newAtleta: Atleta) =>
          console.log(`Added atleta id=${newAtleta.id}`)
        ),
        catchError(this.handleError<Atleta>('createAtleta'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
