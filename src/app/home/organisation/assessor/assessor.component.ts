import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ProjectService} from '../../../service/ProjectService';
declare var $: any;
import 'datatables.net';

@Component({
  selector: 'app-assessor',
  templateUrl: './assessor.component.html',
  styleUrls: ['./assessor.component.css']
})
export class AssessorComponent implements OnInit {

  users: any = [];
  flag = false;
  formArray: any = [];
  assessorName: any;
  assessorPhone: any;
  formAssociate: any;
  userProjectName : any;
  assessorFormArray : any =[];
  projectAs: any;
  userCid: any;
  tempArray1 : any = [];
  tempArray2 : any = [];
  sub: any;
  sub1: any;
  sub2: any;
  sub3: any;
  sub4: any;

  constructor(private projectService: ProjectService, private router: Router) {
    this.sub = this.projectService.emitAssessors.subscribe(res=>{
      this.users = res;
      this.flag = true;
      this.display();
    });

    this.sub1 = this.projectService.emitFormArray.subscribe(res=>{
      this.formArray = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.projectService.getAssessors();
    this.projectService.getFormArray();
  }

  display() {
    if(this.flag) {
       $(document).ready(function() {
        var t = $('#example01').DataTable({
          "columnDefs": [ {
            "orderable": false,
            "targets": 0,
            "bSort": false
        } ],
        "bSort": false
        });
        t.on( 'order.dt search.dt', function () {
            t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                cell.innerHTML = i+1;
            });
        }).draw();
      });
    }
  }

  assesor() {
    this.projectService.getFormArray();
    console.log(this.formArray);
    $("#newAssessorModal").modal('show');
  }

  getVal() {
    console.log(this.formAssociate);
  }

  saveAssessor() {
    console.log(this.assessorName+" "+ this.assessorPhone+" "+ this.formAssociate);
    this.projectService.addAssessorArray(this.assessorName, this.assessorPhone, this.formAssociate);
    this.assessorName = '';
    this.assessorPhone = '';
    $("#newAssessorModal").modal('hide');
    this.router.navigate(['/org'], { queryParams: { id: ""+ Math.floor(1000 + Math.random() * 9000) } });
    // this.formAssociate = "";
    this.formArray=[];
  }

  calForms(project) {
    let j = 0;
    for(let i of project) {
      j++;
    }
    return ""+j;
  }

  showProjectModal( assessorName, assessorCid, formArray) {
    this.tempArray1 = [];
    this.tempArray2 = [];
    this.projectService.getFormArray();
    let n = 0;
    let temp = [];
    this.userProjectName = assessorName;
    this.userCid = assessorCid;
    this.assessorFormArray = formArray;

    for(let i=0;i<this.assessorFormArray.length; i++) {
      this.tempArray1.push(this.assessorFormArray[i].name);
    }

    for(let i=0;i<this.formArray.length; i++) {
      this.tempArray2.push(this.formArray[i].Details.name);
    }

    this.tempArray2 = this.tempArray2.filter(val => !this.tempArray1.includes(val));

    // console.log(this.tempArray1);
    // console.log(this.tempArray2);

    $("#assessorFormModal").modal('show');
  }

  assignNewProject() {

    let temp;

    for(let i = 0 ;i<this.formArray.length; i++) {
      if(this.formArray[i].Details.name === this.projectAs) {
        temp = this.formArray[i];
        break;
      }
    }

    this.projectService.assignNewFormToAssessor(this.userCid,temp);
    $("#assessorFormModal").modal('hide');
    this.formArray = [];
    this.assessorFormArray= [];
    this.projectAs = "";
    this.formArray = [];
    this.projectService.getFormArray();
  }

  deleteFormAssessorArray(formCid, projCid) {
    this.projectService.deleteFormAssessorArray(this.userCid, formCid, projCid);

    $("#assessorFormModal").modal('hide');
    this.formArray = [];
    this.assessorFormArray= [];

  }

  projectForm(project) {
    //{ name: 'Form2', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121',  status:'Online', cid:'a2121' }
    let name = "";
    for(let n of project) {
      name += n.name + " " + n.project + ",  ";
    }
    // console.log(name);
    return name;

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
  }



}
