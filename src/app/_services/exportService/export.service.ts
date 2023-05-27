import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "../storageService/storage.service";
import {saveAs} from 'file-saver';
import {ToastrService} from "ngx-toastr";

const EXPORT_API = "http://localhost:8080/export/";

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  private individualReportFileName: string = "individual_spendings.xlsx";

  constructor(private http: HttpClient, private storageService: StorageService, private toasterService: ToastrService) { }

  generateIndividualSpendingReport(): void {
    this.http.get(EXPORT_API + "individualSpending",
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.storageService.getUser().token),
        responseType: 'blob'
      }
    )
      .subscribe(
        blob => {
          saveAs(blob, this.individualReportFileName);
        },
        error => {
          this.toasterService.error("Error when generating individual spending report: " + error);
        }
      )
  }
}
