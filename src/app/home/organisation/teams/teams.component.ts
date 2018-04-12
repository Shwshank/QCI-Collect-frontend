import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ProjectService} from '../../../service/ProjectService';
declare var $: any;
import 'datatables.net';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any = [];
  flag = false;
  formArray: any = [];
  asrArray: any = [];
  teamName: any;
  assessorPhone: any;
  formAssociate: any;
  teamProjectName : any;
  teamFormArray : any =[];
  extAsrArray : any = [];
  extAsrNameArray : any = [];
  extMgrNameArray : any = [];
  tempArray1: any = [];
  tempArray2: any = [];
  tempFormArray1: any = [];
  tempFormArray2: any = [];
  newForm: any;
  teamCid: any;
  tl: any;
  asr: any;
  sub: any;
  sub1: any;
  sub2: any;
  sub3: any;
  sub4: any;

  constructor(private projectService: ProjectService, private router: Router) {
    this.sub = this.projectService.emitTeams.subscribe(res=>{
      // console.log(res);
      this.teams = res;
      this.flag = true;
      this.display();
    });

    this.sub1 = this.projectService.emitFormArray.subscribe(res=>{
      this.formArray = res;
      // console.log(this.formArray);
    });

    this.sub2 = this.projectService.emitAssessors.subscribe(res=>{
      this.asrArray = res;
    });
  }

  ngOnInit() {
    this.projectService.getTeams();
    this.projectService.getFormArray();
  }

  display() {
    if(this.flag) {
       $(document).ready(function() {
        var t = $('#example2').DataTable({
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

  team() {
    this.projectService.getFormArray();
    $("#newTeamModal").modal('show');
  }

  saveTeam() {
    // console.log(this.formAssociate);
    this.projectService.addTeamArray(this.teamName, this.tl, this.formAssociate);
    this.teamName = '';
    $("#newTeamModal").modal('hide');
    this.router.navigate(['/org'], { queryParams: { id: ""+ Math.floor(1000 + Math.random() * 9000) } });
    this.formAssociate = "";
    this.formArray=[];
  }

  calForms(project) {
    let j = 0;
    for(let i of project) {
      j++;
    }
    return ""+j;
  }

  showFormModal( teamName, teamCid, formArray) {
    this.tempFormArray1 = [];
    this.tempFormArray2 = [];
    this.projectService.getFormArray();
    let n = 0;
    let temp = [];
    this.teamName = teamName;
    this.teamCid = teamCid;
    this.teamFormArray = formArray;

    // console.log(this.teamFormArray);
    // console.log(this.formArray);

    for(let i = 0; i<this.teamFormArray.length; i++){
      this.tempFormArray1.push(this.teamFormArray[i].name);
    }

    for(let i = 0; i<this.formArray.length; i++){
      this.tempFormArray2.push(this.formArray[i].Details.name);
    }

    this.tempFormArray2 = this.tempFormArray2.filter(val => !this.tempFormArray1.includes(val));

    // console.log(this.tempFormArray1);
    // console.log(this.tempFormArray2);

    $("#showFormModal").modal('show');
  }

  assignNewFrom() {

    let temp;

    for(let i = 0 ;i<this.formArray.length; i++) {
      if(this.formArray[i].Details.name === this.newForm) {
        temp = this.formArray[i];
        break;
      }
    }

    this.projectService.assignNewFormToTeam(this.teamCid,temp);
    $("#showFormModal").modal('hide');
    this.formArray = [];
    this.teamFormArray= [];
    this.newForm = "";
    this.formArray = [];
    this.projectService.getFormArray();
  }

  deleteFormTeamArray(formCid) {
    this.projectService.deleteFormTeamArray(this.teamCid, formCid);

    $("#teamFormModal").modal('hide');
    this.formArray = [];
    this.teamFormArray= [];
    this.teamCid = "";
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

  showAssesorModal( teamName, teamCid, asrArray ) {
    // this.projectService.getAssessors();
    this.tempArray1 = [];
    this.tempArray2 = [];
    this.extAsrNameArray = [];
    let n = 0;
    let temp = [];
    this.teamName = teamName;
    this.teamCid = teamCid;
    this.extAsrArray = asrArray;

    for(let m of this.extAsrArray) {
      for(let n of this.asrArray) {
        if(m == n.cid) {
          this.extAsrNameArray.push({ cid:n.cid, name: n.name});
        }
      }
    }

    // console.log(this.extAsrNameArray);
    // console.log(this.asrArray);

    for(let i=0; i<this.asrArray.length; i++) {
      this.tempArray1.push(this.asrArray[i].name);
    }

    for(let i=0; i<this.extAsrNameArray.length; i++) {
      this.tempArray2.push(this.extAsrNameArray[i].name);
    }

    this.tempArray1 = this.tempArray1.filter(val => !this.tempArray2.includes(val));

    $("#showAssesorModal").modal('show');
  }

  deleteAsrTeamArray(aCid) {
    this.projectService.deleteAsrTeamArray(this.teamCid, aCid);

    $("#showAssesorModal").modal('hide');
    this.extAsrNameArray = [];
    this.teamCid = "";
  }

  addNewAssesor() {

    let temp;

    for(let i = 0; i<this.asrArray.length; i++) {
      if(this.tl === this.asrArray[i].name) {
        temp = this.asrArray[i];
        break;
      }
    }

    this.projectService.addNewAssesorInTeam(temp, this.teamCid);
    $("#showAssesorModal").modal('hide');

  }

  showManagerModal( teamName, teamCid, asrArray ) {
    // this.projectService.getAssessors();
    this.extMgrNameArray = [];
    let n = 0;
    let temp = [];
    this.teamName = teamName;
    this.teamCid = teamCid;
    this.extAsrArray = asrArray;

    for(let m of this.extAsrArray) {
      for(let n of this.asrArray) {
        if(m == n.cid) {
          this.extMgrNameArray.push({cid : n.cid, name:n.name});
        }
      }
    }
    $("#showManagerModal").modal('show');
  }

  deleteMgrTeamArray(mCid) {
    this.projectService.deleteMgrTeamArray(this.teamCid, mCid);

    $("#showManagerModal").modal('hide');
    this.extMgrNameArray = [];
    this.teamCid = "";
  }

  addNewManager() {
    this.projectService.addNewManagerInTeam(this.tl, this.teamCid);
    $("#showManagerModal").modal('hide');

  }

  teamDetails(id, cid) {
    // console.log(id);
    // console.log(cid);
    $("#teamDetails").modal('show');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
  }


}
