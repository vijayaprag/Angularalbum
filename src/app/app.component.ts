import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'Angularalbum';
  constructor(private http: Http) { }

httpdata;
   ngOnInit() {
      this.http.get("http://jsonplaceholder.typicode.com/albums")
      .pipe(map((response) => response.json()))
      .subscribe((data) => this.displaydata(data));     
   }
   displaydata(data) {this.httpdata = data;}
}
