import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PlaygroundService {
  
  public postsURL = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  makeServiceCall(): Observable<any> {
    return this.http.get<any>("https://stagingservice.autotopup.ng/vtu-service/pwa/pub/network-carriers");
  }

  callPosts():Observable<any>{
    return this.http.get<any>(this.postsURL);
  }

  add(a,b){
    return a+b;
  }

}
