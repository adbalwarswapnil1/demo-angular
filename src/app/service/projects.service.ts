import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Project } from '../model classes/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  
  constructor(private httpclient:HttpClient) { 

  }
  getAllProjects():Observable<Project[]>{

   
   return this.httpclient.get<Project[]>('http://localhost:9090/api/projects').pipe(map((data:Project[])=>{
    for(let i=0;i<data.length;i++){
      data[i].teamSize=data[i].teamSize*10;
    }
    return data;
   }));
  }
  insetproject(newProject:Project):Observable<Project>{
    return this.httpclient.post<Project>("http://localhost:9090/api/projects",newProject);
  }

  updateProject(existingProject:Project):Observable<Project>{
    return this.httpclient.put<Project>('http://localhost:9090/api/projects',existingProject);
  }

  deleteProject(projectID:number):Observable<string>{
    return this.httpclient.delete<string>('http://localhost:9090/api/projects?ProjectId='+projectID);
  }

  searchProject(searchBy:string,searchText:string):Observable<Project[]>{
    return this.httpclient.get<Project[]>("http://localhost:9090/api/projects/search/"+searchBy+"/"+searchText)
  }

  getProjectByProjectID(ProjectID: number): Observable<Project>
  {
    return this.httpclient.get<Project>("http://localhost:9090/api/projects/searchbyprojectid/" + ProjectID, { responseType: "json" });
  }
}
