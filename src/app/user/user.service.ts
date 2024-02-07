import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {id:1, name: "Vaibhav Bhute"},
    {id:2, name: "Sakshi Bhute"},
    {id:3, name: "Vishal Bhute"},
    {id:4, name: "Shubham Nathe"},
    {id:5, name: "Piyush Ghyal"},
    {id:6, name: "Rajesh Yeul"},
    {id:7, name: "Rajesh Yeul"},
    {id:8, name: "Ashutosh Khawle"}
  ]
  constructor() { }


  getUsers() {
    return of (this.users)
  }
}
