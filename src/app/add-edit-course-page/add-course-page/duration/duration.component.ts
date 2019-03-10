import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, AbstractControl, ValidationErrors, Validator
} from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationComponent),
    multi: true,
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DurationComponent),
    multi: true,
  }],
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements ControlValueAccessor, Validator {
  @Input() courseDuration: number;
  private data: any;
  message: string;

  public validate(control: AbstractControl): ValidationErrors {
    if (isNaN(control.value) || control.value === '' ) {
      this. message = (control.value === '') ? 'Duration is required' : 'Use numbers only';
      return  {'checkifnumber': {value: true}};
    }
    return null;
  }

  public writeValue(obj: any) {
      if (obj) {
          this.data = obj;
          this.courseDuration = this.data;
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
