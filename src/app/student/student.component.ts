import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { map } from 'rxjs/operators';
import { Result } from '../result.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private routes : Router, private http:HttpClient, private resultService:Result) { }

  ngOnInit(): void {
  }

  rollnumber = '';
  name = '';
  error = false;
  submit(){
    const resultOf = {
      "rollnumber":parseInt(this.rollnumber),
      "name":this.name
    }

    this.http.post('http://127.0.0.1:5000/student/result',resultOf)
             .pipe( map(res=> Object.assign(res)))
              .subscribe(res => {
                if(res[0]){
                  this.resultService.record = res[0];
                  this.routes.navigate(['student/result']);
                }
                else this.error=true;
                },
                error => {
                  this.error=true;
                });
  }
  clear(){
    this.rollnumber='';
    this.name='';
  }

  errorhandle(){
    this.error=false;
  }

}
