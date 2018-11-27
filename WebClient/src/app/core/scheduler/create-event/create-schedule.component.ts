import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {Schedule} from '../../../models/schedule';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {

  @Input()
  schedulerOwner: User;

  schedule: Schedule;

  constructor(private userRest: UserRestService) {
  }

  ngOnInit() {
    this.schedule = new Schedule();
    this.schedule.userId = this.schedulerOwner.id;
  }

  saveSchedule() {
    this.userRest.saveSchedule(this.schedule).subscribe(() => {
    });
  }


}
