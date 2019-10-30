import { globalEventBus, Observer } from './../event-bus-experiments/event-bus';
import { Lesson } from './../shared/model/lesson';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {
  lessons: Lesson[] = [];
  constructor() {
    console.log('lesson list component is registeres as observer ...');
    globalEventBus.registerObserver(this);
  }

  notify(data: Lesson[]) {
    console.log('Lesson list component received data ....');
    this.lessons = data;
  }
}
