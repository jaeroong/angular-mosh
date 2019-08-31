import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsernameValidators } from "./username.validators";

@Component({
  selector: "signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"]
})
export class SignupFormComponent {
  //nested formGroup
  // form = new FormGroup({
  //   account: new FormGroup({
  //     username: new FormControl(""),
  //     password: new FormControl("")
  //   })
  // });
  form = new FormGroup({
    username: new FormControl(
      "",
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ],
      [UsernameValidators.shouldBeUnique]
    ),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ])
  });
  get username() {
    return this.form.get("username");
  }
  get password() {
    return this.form.get("password");
  }
  login() {
    this.form.setErrors({
      invalidLogin: true
    });
    // let isValid = authService.login(this.form.value);
    // if (!isValid) {
    //   // this.username.setErrors
    //   // error at the form level
    //   this.form.setErrors({
    //     invalidLogin: true
    //   });
    // }
  }
}
