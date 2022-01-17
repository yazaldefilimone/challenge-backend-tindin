export class AlreadyExists extends Error {
  constructor(name:string){
    super(`${name} already exists!!`);
    this.name = 'AlreadyExists';
  }
}
