import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

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

export class CreationDateComponent implements
  ControlValueAccessor, Validator {
    private creationDate: Date;
    private parseError: boolean;
    private data: any;

    // this is the initial value set to the component
    public writeValue(obj: any) {
        if (obj) {
            this.data = obj;
            // this will format it with 4 character spacing
            this.creationDate = this.data;
        }
    }

    // registers 'fn' that will be fired wheb changes are made
    // this is how we emit the changes back to the form
    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    // validates the form, returns null when valid else the validation object
    // in this case we're checking if the json parsing has passed or failed from the onChange method
    public validate(c: FormControl) {
        return (!this.parseError) ? null : {
            jsonParseError: {
                valid: false,
            },
        };
    }

    // not used, used for touch input
    public registerOnTouched() { }

    // change events from the textarea
    private onChange(event) {

        // get value from text area
        let newValue = event.target.value;

        try {
            // parse it to json
            this.data = JSON.parse(newValue);
            this.parseError = false;
        } catch (ex) {
            // set parse error if it fails
            this.parseError = true;
        }

        // update the form
        this.propagateChange(this.data);
    }

    // the method set in registerOnChange to emit changes back to the form
    private propagateChange = (_: any) => { };
}