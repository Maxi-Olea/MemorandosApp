export class User {
  name: string = ''
  lastName: string = ''
  email: string = ''
  username: string = ''
  password: string = ''
  idPais: string = ''
  idCiudad: string = ''

  constructor(name: string, lastName: string, email: string, username: string,
              password: string, idPais: string, idCiudad: string) {
    this.name = name
    this.lastName = lastName
    this.username = username
    this.email = email
    this.password = password
    this.idPais = idPais
    this.idCiudad = idCiudad
  }

  //Forma simplificada
  //constructor(public idPais: string, public pais: string )
}
