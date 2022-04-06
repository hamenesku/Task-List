import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit{
  ngOnInit(): void {
    this.todo.push("Insert something here")
  }

  constructor () {
    this.newTask = "";
    this.environments = {}
    this.newEnvironment = "";
    this.env = new Map();
  }
  newTask : string;
  newEnvironment : string;
  environments : object

  todo : string[] = []; 
  done : string[] = []; 
  env : any;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addTask() :void {
    if(this.newTask) {
      this.todo.push(this.newTask)
      this.newTask = "";
    }
  }

  addEnvironment() :void {
    
    if (this.env[this.newEnvironment] == undefined) {
      this.env.set(this.newEnvironment, [])
      // this.env[this.newEnvironment] = ["2"];
      console.log("no exis")
    } else {
      console.log("existe")
    }
    
    /* this.env.forEach((element: any) => {
      console.log("test");
    }) */
    // console.log(this.env)
    // console.log(this.env)
  }


}

