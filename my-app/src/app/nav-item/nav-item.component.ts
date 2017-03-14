import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

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
