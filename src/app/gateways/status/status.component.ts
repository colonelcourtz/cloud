import { Component, OnInit } from '@angular/core';
import { Status } from '../status/status';
import { StatusService } from '../status/status.service';
import { interval } from 'rxjs/internal/observable/interval';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  title = 'Gateway Status';
  statuses: Status[];

  constructor(private statusService: StatusService) { }

  ngOnInit(): void {
    this.getStatus();
  }

  getStatus(): void {
    interval(5000)
    .pipe(
      startWith(0),
      switchMap(() => this.statusService.getStatus()))
      .subscribe((statuses: Status[]) => {
        this.statuses = statuses;
      });
  }

}
