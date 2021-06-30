import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private http:HttpClient) { }
  stories:any[]=[]
  ngOnInit(): void {
    this.http.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abhisheknabhi").subscribe(data=>{
      this.stories=data['items'];
    })
  }

}
