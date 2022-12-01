import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ask-dialog',
  templateUrl: './ask-dialog.component.html',
  styleUrls: ['./ask-dialog.component.css']
})
export class AskDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataAsk: string,
    public dialogRef: MatDialogRef<AskDialogComponent>,
  ) {}
  onConfirm(result: boolean): void {
    this.dialogRef.close(result);
  }
}
