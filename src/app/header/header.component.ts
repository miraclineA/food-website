import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PlaceholderComponent } from '../placeholder/placeholder.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnDestroy  {
  destroyvalue$ = new Subject <boolean>
  constructor(private dialog: MatDialog,private route: Router) { }

 
  createAccount() {
    const dialogRef = this.dialog.open(PlaceholderComponent)

    dialogRef.afterClosed().pipe(takeUntil(this.destroyvalue$)).subscribe(result => {
      `Dialog result:${result}`;

    })
   this.route.navigate(['/'])   
  }
  ngOnDestroy(): void {
    this.destroyvalue$.next (true)
  this.destroyvalue$.complete()
  }
  
}
