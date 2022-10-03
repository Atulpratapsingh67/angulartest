import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { records } from '../records.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private http: HttpClient,private routes : Router, private recordsService:records) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:5000/teacher')
    .pipe(map(res => Object.assign(res)))
    .subscribe(res=>{
      for(const key in res){
        res[key].date = res[key].date.slice(0,10);
      }
      this.recordsService.records = res;
      this.recordsService.totalrecords= res.length;
      this.trigger();
  });
  }

  studentcount = this.recordsService.totalrecords;
  records = this.recordsService.records;
  err = false;

  trigger(){
    this.studentcount = this.recordsService.totalrecords;
    this.records = this.recordsService.records;
  }

  findindex(rollnumber:any){
    let index = -1;
    for(let i=0;i<this.studentcount;i++){
      if(this.recordsService.records[i].rollnumber == rollnumber){
        index=i;
        break;
      }
    }
    return index;
  }

  delete(rollnumber:any){
    const index = this.findindex(rollnumber);
    if(index!=-1){
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: this.recordsService.records[index],
      };
      this.recordsService.totalrecords-=1;
      this.recordsService.records.splice(index,1);
      this.http.delete('http://127.0.0.1:5000/teacher',options).subscribe(res=>console.log(res));
      this.trigger();
    }
  }


  edit(rollnumber:any){
    const index = this.findindex(rollnumber);
    this.recordsService.records[index].edit=true;
  }

  submit(rollnumber:any){
    const index = this.findindex(rollnumber);
    if(this.records[index].name.length==0 || !this.records[index].score || this.records[index].date.length==0){
      this.err =true;
      this.recordsService.records[index].edit=false;
      this.ngOnInit();
    }
    else{
      this.recordsService.records[index].edit=false;
      const record = this.recordsService.records[index];
      this.http.put('http://127.0.0.1:5000/teacher',record).subscribe(res=>console.log(1111),error => console.log(error));
    }
  }

  errorhandle(){
    this.err = false;
  }
}
