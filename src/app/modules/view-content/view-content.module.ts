import { CommonModule } from '@angular/common';
import { NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { LocalModule } from '../common/local.module';
import { ViewContentComponent } from './view-content/view-content.component';

const routes = [
    {
        path: '',
        component : ViewContentComponent
    }
];

@NgModule({
    declarations: [
        ViewContentComponent,
    ],
    imports: [RouterModule.forChild(routes),
        CommonModule,
        MatButtonModule,
        MatIconModule,
        FuseCardModule,
        MatDividerModule,
        MatMenuModule,
        LocalModule],
    exports: [ViewContentComponent],
})
export class ViewContentModule {}
