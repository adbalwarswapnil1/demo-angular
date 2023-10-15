import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientLocation } from '../model classes/client-location';
import { Project } from '../model classes/project';
import { ClientLocationService } from '../service/client-location.service';
import { ProjectsService } from '../service/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectservice:ProjectsService,private clientlocationservice:ClientLocationService) { }
  clientLocation!:ClientLocation[];
  projects!:Project[];
  newProject:Project= new Project();
  editProject:Project=new Project();
  editIndex:any= null;
  deleteProject:Project=new Project();
  deleteIndex:any=null;
  searchBy:string="Project Name";
  searchText!:string;

  @ViewChild("newform") newform: NgForm | any = null;

  ngOnInit(): void {
    this.projectservice.getAllProjects().subscribe(
      (data:Project[])=>{
        this.projects=data;
      }
    );

    this.clientlocationservice.getClientLocations().subscribe((data:ClientLocation[])=>{
      this.clientLocation=data;
    })
  }
  onSaveClick(){
    this.projectservice.insetproject(this.newProject).subscribe((data)=>{
      var p:Project=new Project();
      p.projectID=data.projectID;
      p.projectName=data.projectName;
      p.dateOfStart=data.dateOfStart;
      p.teamSize=data.teamSize;
      this.projects.push(p);
      console.log(p);

      //Clear New Project Dialog - TextBoxes
      this.newProject.projectID = null;
      this.newProject.projectName = null;
      this.newProject.dateOfStart = null;
      this.newProject.teamSize = null;
    })
  }

  onEditClick(event:any,index:number){
    console.log("edit function in projects called")
    this.editProject.projectID=this.projects[index].projectID;
    this.editProject.projectName=this.projects[index].projectName;
    this.editProject.dateOfStart=this.projects[index].dateOfStart;
    this.editProject.teamSize=this.projects[index].teamSize;
    this.editIndex=index;
  }

  onUpdateClick(){
    this.projectservice.updateProject(this.editProject).subscribe((data)=>{
      console.log(data)
      var p:Project=new Project();
      p.projectID=data.projectID;
      p.projectName=data.projectName;
      p.dateOfStart=data.dateOfStart;
      p.teamSize=data.teamSize;
      this.projects[this.editIndex]=p;

      this.editIndex.projectID=null;
      this.editIndex.projectName=null;
      this.editIndex.dateOfStart=null;
      this.editIndex.teamSize=null;
    })
  }
  
  onDeleteClick(event:any,index:number){
    this.deleteProject.projectID=this.projects[index].projectID;
    this.deleteProject.projectName=this.projects[index].projectName;
    this.deleteProject.dateOfStart=this.projects[index].dateOfStart;
    this.deleteProject.teamSize=this.projects[index].teamSize;
    this.deleteIndex=index;
  }

  onConfirmDelete(){
    this.projectservice.deleteProject(this.deleteProject.projectID).subscribe((data)=>{
    this.projects.splice(this.deleteIndex,1);
    console.log(data);
    this.deleteProject.projectID=null;
    this.deleteProject.projectName=null;
    this.deleteProject.dateOfStart=null;
    this.deleteProject.teamSize=null;
    });
    
  }

  onSearchClick(){
    this.projectservice.searchProject(this.searchBy,this.searchText).subscribe((data)=>{
      console.log(data)
     this.projects=data;
    });
  }
  onNewClick(){
    this.newform.resetForm();
  }
}
