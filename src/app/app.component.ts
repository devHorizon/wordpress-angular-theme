import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,) { }
  title = 'app';
  wp_content: any;

  ngOnInit() {
    this.http.get('https://cors-anywhere.herokuapp.com/http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/custom/v1/front-page').subscribe((data) => {
      if (data == "0") {
        this.router.navigate(['posts/']);
      } else {
        this.http.get('http://dev-hias-wordpress-testing.pantheonsite.io/wp-json/wp/v2/pages'+data).subscribe((data) => {
          this.wp_content = data;
         });
      }
     });
  }
}
