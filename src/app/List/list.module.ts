import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ListComponent } from '../List/list.component';

@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'list', component: ListComponent }
        ]
        )
    ],
    providers: []
})
export class ListModule { }
