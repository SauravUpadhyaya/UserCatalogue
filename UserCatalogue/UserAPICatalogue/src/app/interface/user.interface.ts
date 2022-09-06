//Mappping responses into interfaces

import { Coordinate } from "./coordinate.interface";

export interface User {

    uid: string;
    firstName: string;
    lastName:string;
    email:string;
    userName:string;
    gender:string;
    address:string;
    dateofBirth:string;
    phone:string;
    imageURL:string;
    coordinate:Coordinate;

}