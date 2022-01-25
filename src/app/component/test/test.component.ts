import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  employees = [
    {
      name: "Patric",
      age: "22",
      job: "Dev",
      address: "Cluj",
      phone: "1234567890",
      company: "Globant",
      department: "Communications Department"
    },
    {
      name: "Tudor",
      age: "23",
      job: "Electrical Engineer",
      address: "Bistrita",
      phone: "1234567890",
      company: "Emerson",
      department: "QoS"
    },
    {
      name: "Andrei",
      age: "24",
      job: "Tester",
      address: "Cluj",
      phone: "1234567890",
      company: "Micro Focus",
      department: "IT"
    },
    {
      name: "Teodora",
      age: "24",
      job: "Digital marketing manager",
      address: "Brasov",
      phone: "1234567890",
      company: "Microsoft",
      department: "Marketing"
    },
    {
      name: "Marius",
      age: "26",
      job: "Product Manager",
      address: "Bucuresti",
      phone: "1234567890",
      company: "SDA",
      department: "Research and Development (often abbreviated to R&D)"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
