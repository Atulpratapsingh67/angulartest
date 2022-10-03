import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { records } from '../records.service';

@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.css']
})
export class AddRecordsComponent implements OnInit {

  constructor(private routes:Router, private recordService:records,private http:HttpClient) { }

  ngOnInit(): void {
  }

  rollnumber = '';
  name = '';
  dateofbirth = '';
  score = '';

  err = false;

  show(){
    if(this.rollnumber.length==0 || this.name.length==0||this.dateofbirth.length==0||this.score.length==0){
      this.err=true;
    }
    else{
      const record = {
        rollnumber :this.rollnumber,
        name: this.name,
        date:this.dateofbirth,
        score:this.score,
        edit:false
      }
      this.recordService.records.push(record);
      this.http.post('http://127.0.0.1:5000/teacher/addrecord',record)
                .subscribe(res => this.routes.navigate(['teacher']), error => this.err=true);
    }
     
      
  }

  clear(){
    this.rollnumber = '';
    this.name = '';
    this.dateofbirth = '';
    this.score = '';
  }

  errorhandle(){
    this.err = false;
  }
}
