import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../services/cities.service';
import { ConvoysService } from '../services/convoys.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cityService: CitiesService, private convoyService: ConvoysService) { }

  ngOnInit() {
    this.cityService.cities.subscribe( item =>
      console.log(item)
    );

    this.convoyService.convoys.subscribe( item =>
      console.log(item)
    );
  }
}
