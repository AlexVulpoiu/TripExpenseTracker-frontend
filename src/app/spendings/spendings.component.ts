import { Component } from '@angular/core';
import {ExportService} from "../_services/exportService/export.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  styleUrls: ['./spendings.component.css']
})
export class SpendingsComponent {

  constructor(private exportService: ExportService, private toaster: ToastrService) {
    const message = sessionStorage.getItem("spendingAdded");
    if (message !== null && message !== undefined) {
      toaster.success(message);
      sessionStorage.removeItem("spendingAdded");
    }
  }

  generateIndividualSpendingReport(): void {
    this.exportService.generateIndividualSpendingReport();
  }
}
