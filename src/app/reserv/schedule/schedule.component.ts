import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiClientService } from '../../services/api-client.service';
import { ScheduleDto } from './interfaces/schedule';

@Component({
  selector: 'app-schedule',
  imports: [],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {
  constructor(private apiClient: ApiClientService, private titleService: Title) {
    this.titleService.setTitle('Horarios');
  }
  @Input() scheduleData?: ScheduleDto;
  @Output() onScheduleSelected = new EventEmitter<ScheduleDto>();
  selectSchedule() {
    this.onScheduleSelected.emit(this.scheduleData);
  }
}
