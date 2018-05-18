import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../service/ProjectService';
declare var $: any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: any = [{assesor:'', cdate:'', desc:'', form:'', name:'', user:''}];
  pname: any;
  pdesc: any;
  stats: any;
  pos: any = 0;

  constructor(private projectService: ProjectService) {

    this.projectService.emitProject.subscribe(res=>{
      this.projects = res;
      this.stats = res.stats;
      // console.log(this.stats);
    });
  }

  ngOnInit() {
    this.projectService.getProject();
  }

  newProject() {
    this.projectService.addNewProject(this.pname,this.pdesc);
    $('#projectModal').modal('hide');
  }

  projectDetail(i) {
    this.pos = i;
    $('#projectDetail').modal('show');
  }

}
