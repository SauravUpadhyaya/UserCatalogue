import { Component, OnInit, ViewChild } from '@angular/core';
import { Response } from 'src/app/interface/response.interface';
import { UserService } from 'src/app/service/user.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  response:Response;

  constructor(private userService:UserService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
  this.userService.getUsers(15).subscribe(

    (result:Response)=>{
      console.log(result);
      this.response=result;
      this.paginator =this.paginator;
    }
  );

  // this.userService.getUser("1").subscribe(

  //   (result:any)=>{
  //     console.log(result);
  //     this.response=result;
  //   }
  // );

  }

}
