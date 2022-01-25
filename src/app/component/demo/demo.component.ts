import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  isUnchanged = false;
  students = [
    {
      name: "Maria",
      job: "Developer",
      age: "23",
      hobby: "Hiking"
    },
    {
      name: "Patric",
      job: "Developer",
      age: "22",
      hobby: "Movies"
    },
    {
      name: "Adrian",
      job: "Developer",
      age: "26",
      hobby: "Gaming"
    },
    {
      name: "Darie",
      job: "Developer",
      age: "43",
      hobby: "Sport"
    },
    {
      name: "Marius",
      job: "Developer",
      age: "29",
      hobby: "Cars"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
