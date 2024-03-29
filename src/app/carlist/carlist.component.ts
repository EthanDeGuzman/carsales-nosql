import { Component, OnInit } from '@angular/core';
import { Car, ICar } from '../interfaces/car';
import { CarApiService } from '../services/car-api.service';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

  carsData:ICar[];

  constructor(private _carAPIService:CarApiService) { }

  ngOnInit(): void {
    this._carAPIService.getCarData().subscribe(carsData => {this.carsData = carsData});
  }

  addTheCar(make:string,model:string,year:string,imageURL:string) :boolean{
    let tempCar:ICar;
    tempCar = new Car(make, model, year, imageURL);
    this._carAPIService.addCarData(tempCar);
    return false;
  }

  show:boolean;
}
