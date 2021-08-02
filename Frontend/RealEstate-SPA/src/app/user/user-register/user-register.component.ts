import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user: User;
  userSubmitted: boolean = false;

  registrationForm = new FormGroup(
    {
       /* userName: new FormControl(null, Validators.required),
       email: new FormControl(null, [Validators.required, Validators.email]),
       password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
       confirmPassword: new FormControl(null, [Validators.required]),
       mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]), */
       
    }
  )

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private alertifyService: AlertifyService) { }

    ngOnInit() {
      this.createRegistrationForm(); 
    }

    createRegistrationForm(){
      this.registrationForm = this.fb.group({
        userName: new FormControl(null, Validators.required),
         email: new FormControl(null, [Validators.required, Validators.email]),
         password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
         confirmPassword: new FormControl(null, [Validators.required]),
         mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      },  /* {
        validator: this.MustMatch('password', 'confirmPassword')
    } */)
    }
  
  

  onSubmit(){
    console.log(this.registrationForm.value);
    this.userSubmitted = true;
    if (this.registrationForm.valid){
     // this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertifyService.success('Congrats, you are successfully resgistered');
    } else {
      this.alertifyService.error('Kindly provide the required fields');
    }
  }

  userData(): User {
    return this.user = {
        userName: this.userName.value,
        email: this.email.value,
        password: this.password.value,
        mobile: this.mobile.value
    };
}

 

 /*  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
} */
    
    // -----------------------------------
    // Geter methods for all form controls
    // -----------------------------------
    get userName(){
      return this.registrationForm.get('userName') as FormControl;
    }
    get email(){
      return this.registrationForm.get('email') as FormControl;
    }
    get password(){
      return this.registrationForm.get('password') as FormControl;
    }
    get confirmPassword(){
      return this.registrationForm.get('confirmPassword') as FormControl;
    }
    get mobile(){
      return this.registrationForm.get('mobile') as FormControl;
    }
  //--------------------------------------------------------------

  

}
