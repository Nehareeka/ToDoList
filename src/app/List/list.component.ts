import { Component, OnInit } from '@angular/core';
import { IList } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: IList;
  showListForm: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  createList() {
    this.showListForm = true;
  }

}
