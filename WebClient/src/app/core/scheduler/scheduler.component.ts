import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserRestService} from '../../services/rest/user-rest.service';
import {Schedule} from '../../models/schedule';


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  isAdmin: boolean;

  officeUser: User;
  officeUsers: User[];

  schedules: Schedule[];

  constructor(private userRest: UserRestService) {
  }

  ngOnInit() {
    this.userRest.getAuthenticatedUser().subscribe(userResult => {
      this.officeUser = userResult;
      this.initSchedules();
    });
  }

  initSchedules() {
    this.userRest.getAllSchedulesByUserId(this.officeUser.id).subscribe(schedulesResult => this.schedules = schedulesResult);
  }

  onCreateSchedule(schedule: Schedule) {
    this.schedules.push(schedule);
  }

}
