import { Component, OnInit, Input } from '@angular/core';
import { Operation } from 'src/app/model/operation';

@Component({
  selector: 'form-operation',
  templateUrl: './form-operation.component.html',
  styleUrls: ['./form-operation.component.scss']
})
export class FormOperationComponent implements OnInit {

  @Input() operation: Operation;

  constructor() { }

  ngOnInit() {
  }

}
