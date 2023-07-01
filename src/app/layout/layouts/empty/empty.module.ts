import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { EmptyLayoutComponent } from 'app/layout/layouts/empty/empty.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [
        EmptyLayoutComponent
    ],
    imports     : [
        SharedModule,
        RouterModule,
        FuseLoadingBarModule,
    ],
    exports     : [
        EmptyLayoutComponent
    ]
})
export class EmptyLayoutModule
{
}
