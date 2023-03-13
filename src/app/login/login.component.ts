import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router,private popup: MatSnackBar) { }


  formGroup: Observable<any> = of([{}]);
  formdata: any
  data: any
  ngOnInit(): void {
    this.formdata = new FormGroup({
      email: new FormControl(this.data?.email ?? ''),
      password: new FormControl(this.data?.password ?? '')
    })
  }

  submit(data: any) {

    // this.serv.logIn(data).subscribe((login=>{
    //   console.log(login,'---login---');
    console.log('----', data);

    //   localStorage.setItem('login','true')
    //   localStorage.setItem('email',data.email)

    this.route.navigate(['/menu'])
    // }))
    // this.route.navigate(['/home']) 
  }
  snackbar(){
    this.popup.open('login sucessfully', 'ThankYou')
  }

}
