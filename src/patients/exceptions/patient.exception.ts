import { HttpException, HttpStatus } from '@nestjs/common';

export class PatientException extends HttpException {
  constructor(message: string, status: HttpStatus) {
    super(message, status);
  }
}
