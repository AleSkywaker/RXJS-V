import { Component, OnInit } from '@angular/core';
import { globalEventBus } from './event-bus';
import { testLessons } from 'app/shared/model/test-lessons';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    globalEventBus.notifyObservers(testLessons);
  }
  addLesson(value: any) {
    console.log(value);
  }
}
