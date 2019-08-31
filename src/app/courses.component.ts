import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <button class="btn btn-primary" [class.active]="isActive">button</button>
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">
      submit
    </button>
    <button (click)="onSave()">click</button>
    <button (click)="onSave2($event)">click</button>
    <div (click)="onDivClicked()">
      <button (click)="onSave2($event)">click</button>
    </div>

    <input (keyup)="onKeyUp($event)" />
    <input (keyup.enter)="onKeyUp2()" />

    <input #email (keyup.enter)="onKeyUp3(email.value)" />
    <hr />

    <h2>{{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `
})
//<input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
export class CoursesComponent {
  email = "example.com";
  isActive = false;
  title = "list of courses";
  courses;

  constructor(service: CoursesService) {
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }
  onDivClicked() {
    console.log("div clicked");
  }
  onSave() {
    console.log('clicked (click)="onSave()"');
  }
  onSave2($event) {
    console.log("button", $event);
  }
  getTitle() {
    return this.title;
  }
  onKeyUp($event) {
    if ($event.keyCode === 13) console.log("enter was pressed");
    console.log($event.target.value);
  }
  onKeyUp2() {
    console.log("enter was pressed22");
  }
  onKeyUp3(email) {
    console.log(email);
  }
  onKeyUp4() {
    console.log(this.email);
  }
}
