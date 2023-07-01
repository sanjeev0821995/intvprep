import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { FuseAlertPopupComponent } from './alert-popup.component';
@NgModule({
    declarations: [
        FuseAlertPopupComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        ClipboardModule
    ],
    exports     : [
        FuseAlertPopupComponent
    ]
})
export class FuseAlertPopupModule
{
}
