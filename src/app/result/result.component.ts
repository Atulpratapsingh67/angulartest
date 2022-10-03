import { Component, OnInit } from '@angular/core';
import { Result } from '../result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private resultService: Result) {}
  
  rollNumber = this.resultService.record.rollnumber;
  name = this.resultService.record.name;
  dateOfBirth = this.resultService.record.date.slice(0,10);
  score = this.resultService.record.score;

  ngOnInit(): void {
  }

  
}
