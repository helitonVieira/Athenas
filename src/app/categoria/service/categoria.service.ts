import { Injectable } from '@angular/core';
import { Observable, EMPTY } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ToastController } from '@ionic/angular';
import { Categoria } from '../categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl = "/api/categoria";

constructor(private snackBar: MatSnackBar,
  private http:HttpClient,
  private toastCtrl: ToastController) { }

read(): Observable<Categoria[]> {
  return this.http.get<Categoria[]>(this.baseUrl).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}

readById(id: number): Observable<Categoria> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<Categoria>(url).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}

update(categoria: Categoria): Observable<Categoria> {
  const url = `${this.baseUrl}/${categoria.id}`;
  return this.http.put<Categoria>(url, categoria).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}

delete(id: number): Observable<Categoria> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete<Categoria>(url).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}


create(categoria: Categoria): Observable<Categoria> {
  return this.http.post<Categoria>(this.baseUrl, categoria).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}


showMessage(msg: string, isError: boolean = false): void {
  this.snackBar.open(msg, "X", {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top",
    panelClass: isError ? ["msg-error"] : ["msg-success"],
  });
}

errorHandler(e: any): Observable<any> {
  this.showMessage("Ocorreu um erro!", true);
  return EMPTY;
}
}
