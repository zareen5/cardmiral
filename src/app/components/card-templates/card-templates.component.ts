import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-templates',
  templateUrl: './card-templates.component.html',
  styleUrls: ['./card-templates.component.scss']
})
export class CardTemplatesComponent implements OnInit {
  @Input() 
  type = '';

  constructor() { }

  ngOnInit(): void {
  }

  getUrl() {
    return 'assets/' + this.type + '.png';
  }

}
