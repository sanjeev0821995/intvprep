import { NgModule, SecurityContext } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { TableFormatComponent } from './table-format/table-format.component';
import { TextFormatComponent } from './text-format/text-format.component';
import { CodeFormatComponent } from './code-format/code-format.component';
import { MarkdownModule } from 'ngx-markdown';
import { ImgFormatComponent } from './img-format/img-format.component';
import { NoteFormatComponent } from './note-format/note-format.component';
import { ListFormatComponent } from './list-format/list-format.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { FuseAlertModule } from '@fuse/components/alert';
import {MatExpansionModule} from '@angular/material/expansion';
import { CodeQuesFormatComponent } from './codeQues-format/code-ques-format.component';
import { FormFormatComponent } from './form-format/form-format.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        TextFormatComponent,
        TableFormatComponent,
        LoaderComponent,
        CodeFormatComponent,
        ImgFormatComponent,
        NoteFormatComponent,
        ListFormatComponent,
        CodeQuesFormatComponent,
        FormFormatComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        FuseHighlightModule,
        FuseAlertModule,
        MatFormFieldModule,
        MatInputModule,
        // turn off sanitization
        MarkdownModule.forRoot({
            sanitize: SecurityContext.NONE,
        }),
    ],
    exports: [
        TextFormatComponent,
        TableFormatComponent,
        LoaderComponent,
        CodeFormatComponent,
        ImgFormatComponent,
        NoteFormatComponent,
        ListFormatComponent,
        CodeQuesFormatComponent,
        FormFormatComponent
    ],
})
export class LocalModule {}
