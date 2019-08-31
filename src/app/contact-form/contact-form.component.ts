import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: "email" },
    { id: 2, name: "phone" },
    { id: 3, name: "addrss" }
  ];
  log(x) {
    console.log(x);
  }
  submit(f) {
    console.log(f);
    console.log(f.valid);
    console.log(f.value);
  }
}
