import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements 
  OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {

@Input() secondsLeft: number;
constructor() { 
  console.log("Constructor");
}

ngOnChanges() {
  console.log("OnChanges");
}

ngDoCheck() {
  console.log("DoCheck");
}

ngOnDestroy() {
  console.log("OnDestroy");
}

ngOnInit() {
  console.log("OnInit");
}

ngAfterContentInit() {
  console.log("AfterContentInit");
}

ngAfterContentChecked() {
  console.log("AfterContentChecked");
}

ngAfterViewChecked() {
  console.log("AfterViewChecked");
}

ngAfterViewInit() {
  console.log("AfterViewInit");
}

}
