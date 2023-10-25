import { Injectable } from '@angular/core';
import { Observable, EMPTY } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ToastController } from '@ionic/angular';
import { Cartao } from '../cartao';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  baseUrl = "/api/cartao";

constructor(private snackBar: MatSnackBar,
  private http:HttpClient,
  private toastCtrl: ToastController) { }

read(): Observable<Cartao[]> {
  return this.http.get<Cartao[]>(this.baseUrl).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}

readById(id: number): Observable<Cartao> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<Cartao>(url).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}

update(cartao: Cartao): Observable<Cartao> {
  const url = `${this.baseUrl}/${cartao.id}`;
  return this.http.put<Cartao>(url, cartao).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}

delete(id: number): Observable<Cartao> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete<Cartao>(url).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}


create(cartao: Cartao): Observable<Cartao> {
  return this.http.post<Cartao>(this.baseUrl, cartao).pipe(
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
