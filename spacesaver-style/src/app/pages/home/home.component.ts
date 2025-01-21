import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import {NgFor} from '@angular/common';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  events: Event[] = [];
  constructor(private eventService: EventService){}
  ngOnInit(): void {
    console.log(this.eventService.getEvents());

  }

  filterEvents(category: string): Event[] {
    return this.events.filter(event => event.type === category);
  }
}
