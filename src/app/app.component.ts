import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items=["angular","css","html"];
  newitem="";
  it()
  {if(this.newitem != "")
    this.items.push(this.newitem);
    this.newitem="";
  }
  clear(index)
    {
 this.items.splice(index,1);
    }

}
