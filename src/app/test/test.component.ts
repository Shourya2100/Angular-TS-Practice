import { Component, OnInit, Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2> {{"Hello " + name}}</h2>
  <button (click) = "fireEvent()"> Send Event</button>
  
  `,
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {
 
 

  @Input('parentData') public name: string = "";

  @Output() public childEvent = new EventEmitter();

  constructor()
  {
    
  } 

  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  fireEvent()
  {
    this.childEvent.emit("Hey AppComponent, this is a message from test component")
  }

}
