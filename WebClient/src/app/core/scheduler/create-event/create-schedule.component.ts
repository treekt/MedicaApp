import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../models/user';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {Schedule} from '../../../models/schedule';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {

  @Input()
  schedulerOwner: User;

  @Output()
  scheduleCreated = new EventEmitter<Schedule>();

  schedule: Schedule;

  constructor(private userRest: UserRestService) {
  }

  ngOnInit() {
    this.schedule = new Schedule();
    this.schedule.userId = this.schedulerOwner.id;
  }

  saveSchedule() {
    this.userRest.saveSchedule(this.schedule).subscribe(
      scheduleResult => {
        this.schedule.id = scheduleResult.id;
        this.scheduleCreated.emit(this.schedule);
        this.schedule = new Schedule();
        console.log('schedule saved!');
      }
    );
  }


}
