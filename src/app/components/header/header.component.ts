import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { data } from '../../../assets/mockdata';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public dataLoaded: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public onFormSubmit(event: Event): void {
    event.preventDefault();
    console.log('subm');
    this.dataLoaded.emit(data);
  }

}
