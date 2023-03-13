import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FoodserviceService } from '../foodservice.service';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-byenow',
  templateUrl: './byenow.component.html',
  styleUrls: ['./byenow.component.css']
})
export class ByenowComponent implements OnInit,OnDestroy {

  cards: any
  foodDetails: any
  destroyvalue$ = new Subject <boolean>

  constructor(private serv: FoodserviceService, private route: ActivatedRoute, private dialog: MatDialog) { }
 
  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroyvalue$)).subscribe((details: any) => {
      this.foodDetails = details.get('id')
      this.serv.getFoodDetails(this.foodDetails).subscribe((food: any) => {
        this.cards = food
      })

    })




  }



  placeOrder() {
    // alert("Thank You For Placing the Order🥳!!")

    const dialogRef = this.dialog.open(OrderComponent)

      dialogRef.afterClosed().pipe(takeUntil(this.destroyvalue$)).subscribe(result =>{
        `Dialog result:${result}`;
        console.log('---order---',result);
        

    })

  }
  ngOnDestroy(): void {
    this.destroyvalue$.next (true)
    this.destroyvalue$.complete()
  }



}
