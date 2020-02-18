import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBindingApp';
  
  clickNumber:number=0;
  hideLabel:boolean=true;
 

  buttonPressed()
  {
    console.log("click");
    this.clickNumber++;
  }

  imageClicked()
  {
    console.log("Look at the Star");
    if(this.hideLabel==true)
    {
      this.hideLabel=false;
    }
    else if(this.hideLabel==false)
    {
      this.hideLabel=true;
    }
  }

}
