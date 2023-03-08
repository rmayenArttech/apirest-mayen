import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/modelo/alumno';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://6407cf348ee73db92e322f38.mockapi.io/api/alumnos';

  constructor(private http: HttpClient) { }

  // Método para crear un alumno
  agregarEstudiante(alumno: Alumno): Observable<Alumno> {
    console.log(alumno)
    return this.http.post<Alumno>(`${this.apiUrl}`, alumno);
  }
}
