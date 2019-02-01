import { Component, OnInit } from '@angular/core';
import { PlaygroundService } from './playground.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  activities = [];
  networks = [];
  posts = [];

  constructor(private service: PlaygroundService ) { }

  ngOnInit() {
      this.activities.push("Ready to start...");
      this.activities.push("Started...");

      this.makeServiceCall();
      this.callPosts();
  }

  makeServiceCall(){
    this.service.makeServiceCall().subscribe( body => {
      this.activities.push("Just subscribed to the response of the service call...");
      this.networks = body.networkCarriers;
    }, err => {
      this.activities.push("Oops an error occured...");
    }).add( ()=> { this.activities.push("Done making service call..."); });
  }


  callPosts(){
      this.service.callPosts().subscribe( body => {
        this.activities.push("Just returned from posts...");
        this.posts = body;
      }, err => {
        this.activities.push("Oops an error occured while getting posts...");
      }).add( ()=> { this.activities.push("Done getting posts..."); });
  }
  
}
