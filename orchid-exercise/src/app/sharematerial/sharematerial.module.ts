import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SnapshothoverDirective } from '../snapshot/snapshothover.directive';
import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
  OwlDateTimeIntl,
  OWL_DATE_TIME_LOCALE,
  OWL_DATE_TIME_FORMATS,
  DateTimeAdapter,
  MomentDateTimeAdapter
} from "@danielmoncada/angular-datetime-picker";
import { SortDirective } from '../directive/sort.directive';
import { NgxPaginationModule } from "ngx-pagination";
import { OrderModule } from "ngx-order-pipe";

export const CUSTOM_FORMATS = {
  fullPickerInput: 'YYYY-MM-DD HH:mm:ss',
  parseInput: 'YYYY-MM-DD HH:mm:ss',
  datePickerInput: 'YYYY-MM-DD HH:mm:ss',
  timePickerInput: 'LTS',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY'
};


// TimePicker 顯示提示文字
export class DefaultIntl extends OwlDateTimeIntl {
  /** A label for the up second button (used by screen readers).  */
  upSecondLabel = 'Add a second';

  /** A label for the down second button (used by screen readers).  */
  downSecondLabel = 'Minus a second';

  /** A label for the up minute button (used by screen readers).  */
  upMinuteLabel = 'Add a minute';

  /** A label for the down minute button (used by screen readers).  */
  downMinuteLabel = 'Minus a minute';

  /** A label for the up hour button (used by screen readers).  */
  upHourLabel = 'Add a hour';

  /** A label for the down hour button (used by screen readers).  */
  downHourLabel = 'Minus a hour';

  /** A label for the previous month button (used by screen readers). */
  prevMonthLabel = 'Previous month';

  /** A label for the next month button (used by screen readers). */
  nextMonthLabel = 'Next month';

  /** A label for the previous year button (used by screen readers). */
  prevYearLabel = 'Previous year';

  /** A label for the next year button (used by screen readers). */
  nextYearLabel = 'Next year';

  /** A label for the previous multi-year button (used by screen readers). */
  prevMultiYearLabel = 'Previous 21 years';

  /** A label for the next multi-year button (used by screen readers). */
  nextMultiYearLabel = 'Next 21 years';

  /** A label for the 'switch to month view' button (used by screen readers). */
  switchToMonthViewLabel = 'Change to month view';

  /** A label for the 'switch to year view' button (used by screen readers). */
  switchToMultiYearViewLabel = 'Choose month and year';

  /** A label for the cancel button */
  cancelBtnLabel = '取消';

  /** A label for the set button */
  setBtnLabel = '設定';

  /** A label for the range 'from' in picker info */
  rangeFromLabel = 'From';

  /** A label for the range 'to' in picker info */
  rangeToLabel = 'To';

  /** A label for the hour12 button (AM) */
  hour12AMLabel = '上午';

  /** A label for the hour12 button (PM) */
  hour12PMLabel = '下午';
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
    { provide: OwlDateTimeIntl, useClass: DefaultIntl },
    { provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },
    { provide: OWL_DATE_TIME_FORMATS, useValue: CUSTOM_FORMATS }
  ]
})
export class SharematerialModule { }
