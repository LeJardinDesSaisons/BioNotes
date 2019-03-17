import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'helper-text',
  templateUrl: './helper-text.component.html',
  styleUrls: ['./helper-text.component.scss']
})
export class HelperTextComponent implements OnInit {

  @Input() areaName: String;
  @Input() parentNames: String[];

  constructor() { }

  ngOnInit() {
  }

}
