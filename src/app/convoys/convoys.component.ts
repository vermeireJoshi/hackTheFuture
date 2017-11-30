import { Component, OnInit } from '@angular/core';
import { Convoy } from '../models/Convoy';
import { ApiService } from '../services/api.service';
import { groupBy as higherOrder, GroupedObservable } from 'rxjs/operators/groupBy';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-convoys',
  templateUrl: './convoys.component.html',
  styleUrls: ['./convoys.component.css']
})
export class ConvoysComponent implements OnInit {

  private convoys: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.convoys.subscribe(item => {
      //console.log(item);
      this.convoys = this.groupBy(item, "destinationCity");
      console.log(this.convoys);
    });
  }

  groupBy(array: any[], property: string) {
    var groupedList = {
      cities: []
    };
    array.forEach(element => {
      console.log(element[property]);
      if(groupedList.cities.includes(element[property])) {
        //groupedList[element[property]].push(element);
      } else {
        var group = []
        //groupedList.cities.push({});
        //groupedList.push(element[property]);
        //groupedList[element[property]].push(element);
      }
    });
    return groupedList;
  }
}
