export class User {
  name: string = ''
  lastName: string = ''
  email: string = ''
  userName: string = ''
  password: string = ''
  idPais: string = ''
  idCiudad: string = ''

  constructor(name: string, lastName: string, email: string, userName: string,
              password: string, idPais: string, idCiudad: string) {
    this.name = name
    this.lastName = lastName
    this.userName = userName
    this.email = email
    this.password = password
    this.idPais = idPais
    this.idCiudad = idCiudad
  }

  //Forma simplificada
  //constructor(public idPais: string, public pais: string )
}
