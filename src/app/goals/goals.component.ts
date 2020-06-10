import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  inputItem : string = '';
  goals : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addGoals() : void{
    this.goals.push(this.inputItem);
  }

  removeItem(i){
    this.goals.splice(i,1);
  }

}
