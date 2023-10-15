import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/model classes/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() currentProject!:Project;
  @Input() currentindex!:number;

  @Output() editclick = new EventEmitter();

  ngOnInit(): void {
  }

  oneditclick(event:any,i:number){
    console.log("edit function in project called")
    this.editclick.emit({event,i});
  }

}
