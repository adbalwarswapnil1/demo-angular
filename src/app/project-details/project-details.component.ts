import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../model classes/project';
import { ProjectsService } from '../service/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project!:Project;
  constructor(private activatedroute:ActivatedRoute,private projectservice:ProjectsService) {
    this.project=new Project()
   }

 

  ngOnInit(): void {
    this.activatedroute.params.subscribe((para)=>{
      let id=para["projectid"];

      this.projectservice.getAllProjects().subscribe((data:Project[])=>{
        for(let i=0;i<data.length;i++){
          if(data[i].projectID==id){
            this.project=data[i];
          }
          
        }
        console.log(this.project)
      })
    })
  }

}
