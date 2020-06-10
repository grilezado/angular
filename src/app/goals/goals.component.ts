import { Component, OnInit, Input } from '@angular/core';
import { DramaInfo } from '../model/drama-info';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  @Input() public drama : DramaInfo;

  inputItem : string = '';
  goals : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() : void {
  }

  addGoals() : void{
    this.goals.push(this.inputItem);
  }

  removeItem(i){
    this.goals.splice(i,1);
  }

}
