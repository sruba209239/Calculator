import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  second: string;
  first: string;
  result:string;
  operation:string;

  constructor(){
    this.result="0";
    this.operation="";
  }

  onClick(e){
    var number=e.target.innerText.trim();
    if(parseInt(this.result)==0){
      this.result=number;
    }
    else{
      // debugger;
      this.result+=number;
    }

    if(this.operation==''){
      this.first=this.result;
    }
    else{
      this.second=this.result;
    }
  }

  onSignClick(e){
    this.operation=e.target.innerText.trim();
    this.result='';
  }

  onEqualsClick(e){
    if(this.operation != ''){
      this.result='';
      switch(this.operation){
        case '+':
        this.result=(parseInt(this.first)+parseInt(this.second)).toString();
        break;

        case '-':
        this.result=(parseInt(this.first)-parseInt(this.second)).toString();
        break;

        case 'X':
        this.result=(parseInt(this.first)*parseInt(this.second)).toString();
        break;

        case '/':
        this.result=(parseInt(this.first)/parseInt(this.second)).toString();
        break;
      }
    }
    
  }
}
