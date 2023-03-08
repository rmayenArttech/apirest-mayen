import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Cursos } from 'src/app/modelo/cursos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://6407cf348ee73db92e322f38.mockapi.io/api/cursos';

  constructor(private http: HttpClient) {}

  getCursos(): Observable<Cursos[]>{
    return this.http.get<Cursos[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Ocurrió un error del lado del cliente
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // El servidor retornó un código de error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
