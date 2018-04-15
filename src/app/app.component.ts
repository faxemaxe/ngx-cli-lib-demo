import { JsonTestService } from './json-test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private jsonTestService: JsonTestService,
  ) { }

  ngOnInit() {

    this.jsonTestService.get(1)
      .subscribe(
        (post) => {
          console.log('post', post);
        }
      );
  }
}
