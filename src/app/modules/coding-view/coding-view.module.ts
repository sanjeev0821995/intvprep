import { CommonModule } from '@angular/common';
import { NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseCardModule } from '@fuse/components/card';
import { LocalModule } from '../common/local.module';
import { CodingViewComponent } from './coding-view/coding-view.component';

const routes = [
    {
        path: '',
        component: CodingViewComponent,
    }
];

@NgModule({
    declarations: [CodingViewComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatButtonModule,
        MatIconModule,
        FuseCardModule,
        MatDividerModule,
        MatMenuModule,
        LocalModule,
        FuseAlertModule
    ],
    exports: [CodingViewComponent],
})
export class CodingViewModule {}
