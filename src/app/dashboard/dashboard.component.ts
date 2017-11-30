import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cityService: CitiesService) { }

  ngOnInit() {
    this.cityService.cities.subscribe( item =>
      console.log(item)
    );
  }
}
