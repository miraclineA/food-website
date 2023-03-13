import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
 
  
  email: any
  number: any
  name: any
  data: any
  constructor(private dialog: MatDialog,private popup: MatSnackBar) { }
  ngOnInit(): void {
    this.data = this.name
    this.data = this.number
    this.data = this.email
  }
  snackbar(){
    this.popup.open('Account created sucessfully', 'ThankYou')
  }

}
