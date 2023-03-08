import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cursos } from 'src/app/modelo/cursos';
import { ApiService } from '../cursos/services/api.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  cursos!: Cursos[];

  columnas: string[] = ['id', 'nombreCurso', 'profesorAsignado'];
  dataSource!: MatTableDataSource<Cursos>;

  constructor(private cursoService: ApiService) { }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(): void {
    this.cursoService.getCursos()
      .subscribe(cursos => {
        this.cursos = cursos
        this.dataSource = new MatTableDataSource<Cursos>(this.cursos);
        console.log(this.cursos)
      });

  }

}
