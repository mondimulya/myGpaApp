import { Component, NgModule, OnInit } from '@angular/core';
import { MatCardModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { ActivatedRoute, Router} from '@angular/router';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    FormsModule
  ]
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  hide: boolean = true;
  form: FormGroup;

  constructor(
    private router: Router,
  ) {
    this.form = this.getForm();
  }

  ngOnInit() {
  }

  getForm(): FormGroup {
    return new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  login() {
    if(this.username == 'mondi' && this.password == '12345') {
      this.router.navigate(['user']);
    } else {
      alert('Invalid username/password');
    }
  }

  submitForm() {

  }
}
