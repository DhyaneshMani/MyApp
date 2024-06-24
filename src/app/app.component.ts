import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPortApp';
 
  var1:string="HELLO"
  s:stud[]=[
    {Standard:"10th",MARK:470,PERCENTAGE:80},
    {Standard:"11th",MARK:570,PERCENTAGE:90},
    {Standard:"12th",MARK:590,PERCENTAGE:95}
  ]

}
class stud{
  Standard!:string|undefined;
  MARK!:number|undefined;
  PERCENTAGE!:number|undefined
}
