import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormArray,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-new-course-form",
  templateUrl: "./new-course-form.component.html",
  styleUrls: ["./new-course-form.component.css"]
})
export class NewCourseFormComponent implements OnInit {
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ["", Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }
  form;
  // form = new FormGroup({
  //   name: new FormControl("", Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });

  addTopic(topic: HTMLInputElement) {
    console.log(topic);
    // (this.form.get("topics") as FormArray).push(new FormControl(topic.value));
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
  }
  removeTopic(topic: FormControl) {
    console.log(topic);
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics() {
    return this.form.get("topics") as FormArray;
  }

  categories = [
    { id: 1, name: "dev" },
    { id: 2, name: "dev2" },
    { id: 3, name: "dev3" }
  ];

  ngOnInit() {}
  submit(course) {
    console.log(course);
  }
}
