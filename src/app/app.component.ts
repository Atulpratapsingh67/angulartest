import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { records } from './records.service';
import { map } from 'rxjs/operators';
import { Result } from './result.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[records,Result]
})
export class AppComponent {
  title = 'Angular';

  constructor(private resultService:Result ,private recordService:records) { }

  ngOnInit(): void {}
  
}
