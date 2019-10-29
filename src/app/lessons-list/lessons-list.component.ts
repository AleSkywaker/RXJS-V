import { Lesson } from './../shared/model/lesson';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {
  lessons: Lesson[] = [];
  constructor() {
    this.lessons = [
      {
        id: 1,
        description: 'lesson one',
        duration: '3 minutes'
      },
      {
        id: 2,
        description: 'lesson two',
        duration: '2 minutes'
      },
      {
        id: 3,
        description: 'lesson three',
        duration: '1 minutes'
      }
    ];
  }

  ngOnInit() {}
}
