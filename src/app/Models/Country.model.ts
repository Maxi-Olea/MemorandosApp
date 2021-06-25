export class Country {
  idPais: string = ''
  pais: string = ''

  constructor(idPais: string, pais: string){
    this.idPais = idPais
    this.pais = pais
  }

  //Forma simplificada
  //constructor(public idPais: string, public pais: string )
}
