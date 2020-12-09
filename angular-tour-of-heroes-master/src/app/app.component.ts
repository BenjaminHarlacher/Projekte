import { Component } from '@angular/core';
import { from } from 'rxjs';
import { JSONPlaceholderService } from './jsonplaceholder.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  data:Array<any>
  constructor(private JSONPlaceholder: JSONPlaceholderService){
    this.data = new Array<any>()
  }

  getDataFromAPI(){
    this.JSONPlaceholder.getData().subscribe((data)=>
    {
      console.log(data)
      this.data = data
    })
  }
}
