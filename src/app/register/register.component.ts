import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../config/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public register = [];
  constructor(private _registerService: RegisterService) { }

  ngOnInit() {
     this._registerService.getConfig()
     .subscribe(
       (data) => console.log(data)
    //   data => this.register = data
       );
  }

}
