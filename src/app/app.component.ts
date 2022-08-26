import {
  Component,
  OnInit,
  TemplateRef,
  VERSION,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('dialogRef') dialogRef: TemplateRef<any>;
  loading: boolean = false;
  data: any;
  constructor(public dialog: MatDialog, private http: HttpClient) {}

  ngOnInit() {}

  async start() {
    this.data = await this.getToken();
    console.log('first get token!', this.data);
    this.tokenCheck();
  }

  getToken() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          token: '51d39jfsf7',
          result: '0',
        });
      }, 2000);
    });
  }

  tokenCheck() {
    if (this.data && this.data.result === '0') {
      this.dialog.open(this.dialogRef);
    }
  }

  callNextApi() {
    this.loading = true;
    // this.http.post(URL, { token: this.data.token }).subscribe((res) => console.log(res))
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((res) => {
        console.log('second call api!!', res);
        this.loading = false;
        this.dialog.closeAll();
      });
  }
}
