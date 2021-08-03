import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnapshotRoutingModule } from './snapshot-routing.module';
import { SnapshotComponent } from './snapshot.component';
import { SharematerialModule } from "../sharematerial/sharematerial.module";


@NgModule({
  declarations: [
    SnapshotComponent,
  ],
  imports: [
    CommonModule,
    SnapshotRoutingModule,
    SharematerialModule
  ]
})
export class SnapshotModule { }
