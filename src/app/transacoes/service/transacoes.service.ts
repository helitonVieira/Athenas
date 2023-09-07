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

  async filter(text: string) {
    const sql = 'select * from transacoes where name like ?';
    const data = [`%${text}%`];
    const result = await this.db.executeSQL(sql, data);
    const contacts = this.fillContacts(result.rows);
    return contacts;
  }

  private fillContacts(rows: any) {
    const contacts: Contact[] = [];

    for (let i = 0; i < rows.length; i++) {
      const item = rows.item(i);
      const contact = new Contact();
      contact.id = item.id;
      contact.name = item.name;
      contacts.push(contact);
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
