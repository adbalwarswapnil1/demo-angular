import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation!: string;
  UserName!: string;
  NoOfTeamMembers!:number;
  TotalCostOfAllProjects!:number;
  PendingTask!:number;
  UpComingProject!:number;
  ProjectCost!:number;
  CurrentExpenditure!:number;
  AvailableFunds!:number;

  Clients!:string[];
  Projects!:string[];
  Years!:number[];
  TeamMemberSummary:any[]=[];
  TeamMembers:any=[];
  


  constructor() { }

  ngOnInit(): void {
    this.Designation="Team Manager";
    this.UserName="Swapnil A";
    this.NoOfTeamMembers= 10;
    this.TotalCostOfAllProjects=150;
    this.PendingTask=5;
    this.UpComingProject=2;
    this.ProjectCost=27828;
    this.CurrentExpenditure=8378;
    this.AvailableFunds=76746;
    
    this.Clients=[
      "Persystent Ltd","Wipro Ltd","Infosys Ltd"
    ]

    this.Projects=[
      "PROJECT A", "PROJECT B","PROJECT C"
    ]

    this.Years=[
      2018,2019,2020
    ]

    this.TeamMemberSummary=[
      {Region:"East", TeamMembersCount:"4",TemporarilyUnavailableMembers:"2"},
      {Region:"West", TeamMembersCount:"4",TemporarilyUnavailableMembers:"2"},
      {Region:"North", TeamMembersCount:"4",TemporarilyUnavailableMembers:"2"},
      {Region:"South", TeamMembersCount:"4",TemporarilyUnavailableMembers:"2"}
    ]

    this.TeamMembers=[
      {Region:"East", Members:[
        {ID:1,Name:"Swapnil",Status:"Available"},
        {ID:1,Name:"Swapnil",Status:"Available"},
        {ID:1,Name:"Swapnil",Status:"Available"},
        {ID:1,Name:"Swapnil",Status:"Available"}
      ]},
      {Region:"West", Members:[
        {ID:1,Name:"Swapnil",Status:"Available"},
        {ID:1,Name:"Swapnil",Status:"Available"},
        {ID:1,Name:"Swapnil",Status:"Available"},
        {ID:1,Name:"Swapnil",Status:"Available"}
      ]},
      {Region:"North", Members:[
        {ID:1,Name:"Swapnil",Status:"Available"},
        {ID:1,Name:"Swapnil",Status:"Available"},
        {ID:1,Name:"Swapnil",Status:"Available"},
        {ID:1,Name:"Swapnil",Status:"Available"}
      ]},
      {Region:"South", Members:[
        {ID:1,Name:"Swapnil",Status:"Available"},
        {ID:1,Name:"Swastik",Status:"Busy"},
        {ID:1,Name:"Kunal",Status:"Available"},
        {ID:1,Name:"Tanmay",Status:"Busy"}
      ]}
    ]
  }

  onprojectchange(val:any){
    if(val=='PROJECT A'){
      this.CurrentExpenditure=111;
      this.AvailableFunds=222;
      this.ProjectCost=333;
    }
    else if(val=='PROJECT B'){
      this.CurrentExpenditure=444;
      this.AvailableFunds=555;
      this.ProjectCost=666;
    }
    else {
      this.CurrentExpenditure=777;
      this.AvailableFunds=888;
      this.ProjectCost=999;
    }
    
    console.log(val);
  }
  onyearchange(year:any){
    console.log(year);
  }
}
