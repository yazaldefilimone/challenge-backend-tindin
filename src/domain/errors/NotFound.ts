export class NotFound extends Error {
  constructor(params: string){
    super(`"${params}" not found`);
    this.name = 'NotFound';
  }
}
