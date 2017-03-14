import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  myList = [
{
  id:1,
  txt: '1'
},
{
  id:2,
  txt: '2' 
},
{
  id:3 ,
  txt: '3'
},
{
  id:4,
  txt: '4' 
}
];



  constructor() { }

  ngOnInit() {

  }


}
