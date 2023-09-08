import { Injectable } from '@angular/core';
import { Transacoes } from '../shared/transacoes';
import { Observable, EMPTY } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  baseUrl = "/api/transacoes";

  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  read(): Observable<Transacoes[]> {
    return this.http.get<Transacoes[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Transacoes> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Transacoes>(url).pipe(
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
