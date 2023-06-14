export interface Atleta {
  //Atleta(id,nome,cognome,inAttivita,dataUltimaGara,numeroMedaglieVinte)
  id?: number;
  nome: string;
  cognome: string;
  inAttivita: boolean;
  dataUltimaGara: Date;
  numeroMedaglieVinte: number;
}
