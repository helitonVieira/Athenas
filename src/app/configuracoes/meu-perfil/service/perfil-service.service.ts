import { Perfil } from './perfil';
import { MeuPerfilPage } from './../meu-perfil.page';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class PerfilServiceService {

  baseUrl = "/api/perfil";

  constructor(private snackBar: MatSnackBar,
    private http:HttpClient,
    private toastCtrl: ToastController) { }

  read(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Perfil> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Perfil>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(perfil: Perfil): Observable<Perfil> {
    const url = `${this.baseUrl}/${perfil.id}`;
    return this.http.put<Perfil>(url, perfil).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Perfil> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Perfil>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  create(perfil: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>(this.baseUrl, perfil).pipe(
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
