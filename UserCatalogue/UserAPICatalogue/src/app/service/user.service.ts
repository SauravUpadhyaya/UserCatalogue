import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';

import { Response } from '../interface/response.interface';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'  // put it in the root module.
})
export class UserService {

  //we define apiURL and we use it to make HTTP Request and fetch the data from API
private readonly apiUrl:string='https://randomuser.me/api';
  
constructor(private http: HttpClient) //injecting the HttpClient
{ }

  //Fetch users
  getUsers(size:number=10):Observable<Response>{
    return this.http.get<Response>(`${this.apiUrl}/?results=${size}`).pipe(
      // Once we get the response (above) from Http Call, it's gonna be piped and then mapped. 
      //Here, we get response from API and from that response we call processResponse function
      // and returns user with the shape as it is declared on processResponse function (below)
      // map(response=>this.processResponse(response))); 
      map(this.processResponse));

  

  }
  //Fetch one user using uid
  getUser(uid:string):Observable<Response>{
    return this.http.get<Response>(`${this.apiUrl}/?uid=${uid}`).pipe(
      // map(response=>this.processResponse(response)));
      map(this.processResponse));

  }

  private processResponse(response:Response):Response {

    return {
  
      info: {...response.info},
      results: response.results.map((user:any)=>(<User>{

        uid: user.login.uuid,
        firstName: user.name.first,
        lastName:user.name.last,
        email:user.email,
        userName:user.login.username,
        gender:user.gender,
        
        address:`${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.state},${user.location.postcode}, ${user.location.country}`,
        dateofBirth:user.dob.date,
        phone:user.phone,
        imageURL:user.picture.medium,
        coordinate:{latitude:+user.location.coordinates.latitude, longitude:+user.location.coordinates.longitude}
       }))
    }
  }
}
