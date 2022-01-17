export class InvalideParamsError extends Error {
  constructor(params: string){
    super(`invalid params "${params}" error`);
    this.name = 'InvalideParamsError';
  }
}
