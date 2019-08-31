import { AbstractControl, ValidationErrors } from "@angular/forms";

// UsernameValidators.cannotContainSpace
export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0)
      return { cannotContainSpace: true };
    // { minlength: {
    //  requiredLength: 10,
    // actualLength: control.value.length
    //}}
    return null;
  }
  // async method
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("ok");
        if (control.value === "mosh") resolve({ shouldBeUnique: true });
        else resolve(null);
      }, 2000);
    });
  }
  // static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
  //   setTimeout(() => {
  //     console.log("ok ok");
  //     if (control.value === "mosh") return { shouldBeUnique: true };
  //     else null;
  //   }, 2000);
  //   return null;
  // }
}
