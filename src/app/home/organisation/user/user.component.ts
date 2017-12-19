import { Component, OnInit } from '@angular/core';

import {ProjectService} from '../../../service/ProjectService';
declare var $: any;
import 'datatables.net';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  responces: any;
  flag = false;

  constructor(private projectService: ProjectService) {
    this.projectService.emitResponse.subscribe(res=>{
      //console.log(res);
      this.responces = res;
      this.flag = true;
      this.display();
    });
  }

  ngOnInit() {
    this.projectService.getResponce();
  }

  display() {
    if(this.flag) {
      $(document).ready(function() {
        $('#example').DataTable();
      });
    }
  }

  reload() {
    this.responces = [];
    this.flag = false;
    console.log('res1');
    this.projectService.getResponce2();
  }
  
}
