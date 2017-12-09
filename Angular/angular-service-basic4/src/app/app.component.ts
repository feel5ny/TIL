import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = [];

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: Http
  ) {
    this.http.get(this.apiUrl)
      .toPromise()
      .then(data => {
        this.users = data.json();
        console.log(this.users);
      })
      .catch(error => {
        this.users = [];
        console.log(error);
      });
  }
}
