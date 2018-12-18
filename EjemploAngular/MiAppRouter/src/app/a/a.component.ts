import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  usuarios:User[]=null;
  _userService: any;

  constructor() { }

  ngOnInit() {
    return this._userService.getUsuarios();
  }

}
