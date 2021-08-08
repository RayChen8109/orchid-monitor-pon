import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SnapshothoverDirective } from '../snapshot/snapshothover.directive';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE, OWL_DATE_TIME_FORMATS, DateTimeAdapter, MomentDateTimeAdapter
} from "@danielmoncada/angular-datetime-picker";
import { SortDirective } from '../directive/sort.directive';
import { NgxPaginationModule } from "ngx-pagination";
import { OrderModule } from "ngx-order-pipe";



export const CUSTOM_FORMATS = {
  fullPickerInput: 'YYYY-MM-DD HH:mm:ss',
  parseInput: 'YYYY-MM-DD HH:mm:ss',
  datePickerInput: 'YYYY-MM-DD HH:mm:ss',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY'
};

@NgModule({
  declarations: [
    SnapshothoverDirective,
    SortDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    SnapshothoverDirective,
    SortDirective,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxPaginationModule,
    OrderModule,
  ],
  providers: [
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'ZH-TW' },
    { provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },
    { provide: OWL_DATE_TIME_FORMATS, useValue: CUSTOM_FORMATS }
  ]
})
export class SharematerialModule { }
