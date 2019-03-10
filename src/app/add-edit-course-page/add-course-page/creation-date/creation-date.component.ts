import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, AbstractControl, ValidationErrors, Validator
} from '@angular/forms';


@Component({
  selector: 'app-creation-date',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CreationDateComponent),
    multi: true,
  },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CreationDateComponent),
      multi: true,
    }],
  templateUrl: './creation-date.component.html',
  styleUrls: ['./creation-date.component.css']
})

export class CreationDateComponent implements ControlValueAccessor, Validator {
  @Input() creationDate: number;
  private data: any;
  message: string;

  public validate(control: AbstractControl): ValidationErrors {
    let isDateFormat: boolean = false;
    if (control.value === '') {
      this. message = 'Date is required';
    } else {
      isDateFormat = new RegExp(/^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/)
      .test(control.value);
      if (!isDateFormat) {
        this. message = 'Use correct date format: dd/MM/yyyy';
      }
    }

    return isDateFormat ? null : {'checkdateformat': {value: true}} ;

  }

  public writeValue(obj: any) {
      if (obj) {
          this.data = obj;
          this.creationDate = this.data;
      }
  }

  public registerOnChange(fn: any) {
      this.propagateChange = fn;
  }

  public registerOnTouched() { }

  public onChange(event) {
    this.data = event.target.value;
    this.propagateChange(this.data);
  }

  private propagateChange = (_: any) => { };
}
