import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../service/ProjectService';

@Component({
  selector: 'app-graph3',
  templateUrl: './graph3.component.html',
  styleUrls: ['./graph3.component.scss']
})
export class Graph3Component implements OnInit {

  sub1 : any;
  stats : any = {};

  constructor(private projectService: ProjectService) {
    this.sub1 = this.projectService.emitProjectData.subscribe(res=>{

      this.stats = res.stats;
      console.log(this.stats);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}
