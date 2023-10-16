import { Injectable } from '@angular/core';
import { Observable, EMPTY } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ToastController } from '@ionic/angular';
import { Conta } from '../conta';

@Injectable({
  providedIn: 'root'
})

export class ContaService { baseUrl = "/api/contaBancaria";

constructor(private snackBar: MatSnackBar,
  private http:HttpClient,
  private toastCtrl: ToastController) { }

read(): Observable<Conta[]> {
  return this.http.get<Conta[]>(this.baseUrl).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}

readById(id: number): Observable<Conta> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<Conta>(url).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}

update(conta: Conta): Observable<Conta> {
  const url = `${this.baseUrl}/${conta.id}`;
  return this.http.put<Conta>(url, conta).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}

delete(id: number): Observable<Conta> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete<Conta>(url).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
  );
}


create(conta: Conta): Observable<Conta> {
  return this.http.post<Conta>(this.baseUrl, conta).pipe(
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
