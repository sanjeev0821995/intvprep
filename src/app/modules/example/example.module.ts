import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Route, RouterModule } from '@angular/router';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseAlertPopupModule } from '@fuse/components/alert-popup/alert-popup.module';
import { ExampleComponent } from 'app/modules/example/example.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports     : [
        CommonModule,
        MatIconModule,
        FuseAlertModule,
        FuseAlertPopupModule,
        MatTooltipModule,
        MatButtonModule,
        RouterModule.forChild(exampleRoutes)
    ]
})
export class ExampleModule
{
}
