import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  name: string;
  age: string;
}

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  user: User;
  data: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http.get<User>('').subscribe((res: User) => {
    //   this.user = res;
    // });
    this.http
      .get<Data>('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((res: Data) => {
        console.log(res);
        this.data = res;
      });
  }
}
