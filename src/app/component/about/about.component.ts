import { DramaService } from './../../service/drama.service';
import { Component, OnInit } from '@angular/core';
import { DramaInfo } from 'src/app/model/drama-info';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  items : string[] = ['1','2','3'];

  onGoing : string[] = ['1','2','3'];

  fragment : number = 1;

  dramas : Array<DramaInfo> = new Array();

  selectedDrama : DramaInfo;

  constructor(private dramaService : DramaService) { }

  ngOnInit(): void {
    this.getDramas();
  }

  getDramas(){
    this.dramaService.getDramas().subscribe( data => {
      this.dramas = data;
      }, error => {
        console.log("Something wrong with requesting drama ");
      }
    )
  }

  list(value){
    switch (value) {
      case 1:
        this.fragment = 1;
        break;
      case 2:
        this.fragment = 2;
        break;
      case 3:
        this.fragment = 3;
        break;
      case 4:
        this.fragment = 4;
        break;
      case 5:
        this.fragment = 5;
        break;


      default:
        this.fragment = 1;
        break;
    }
  }

  popUp(drama){
    this.selectedDrama = drama;
  }

}
