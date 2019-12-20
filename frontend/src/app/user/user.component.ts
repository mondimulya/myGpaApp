import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  username: String = 'Mondi';
  subjects: String[] = [
    'CS',
    'MATH',
    'SCIENCE ELECTIVE',
    'MUSIC'
  ];

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  onClick(event: any) {
    console.log('clickkkkkkk');
    this.router.navigate(['subject']);
  }
}
