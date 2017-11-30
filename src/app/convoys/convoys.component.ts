import { Component, OnInit } from '@angular/core';
import { Convoy } from '../models/Convoy';
import { ApiService } from '../services/api.service';
import { groupBy as higherOrder, GroupedObservable, groupBy } from 'rxjs/operators/groupBy';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-convoys',
  templateUrl: './convoys.component.html',
  styleUrls: ['./convoys.component.css']
})
export class ConvoysComponent implements OnInit {

  private convoys: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.convoys.subscribe(item => {
      var map = new Map();
      item.forEach(e => {
        if (!map.get(e.destinationCity)){
          map.set(e.destinationCity,new Array());
        }
        map.get(e.destinationCity).push(e);
      });

      this.convoys = Array.from(map,   ([key, val]) => {
        return {type: key, name: val};
      });

      console.log(this.convoys);
    });
  }
}
