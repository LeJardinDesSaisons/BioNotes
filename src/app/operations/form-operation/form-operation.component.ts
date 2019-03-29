import { Component, OnInit, Input } from '@angular/core';
import { Operation } from 'src/app/model/operation';
import { OperationDbService } from '../operations-db.service';
import { Category } from '../../model/vegetable';

@Component({
  selector: 'form-operation',
  templateUrl: './form-operation.component.html',
  styleUrls: ['./form-operation.component.scss']
})
export class FormOperationComponent implements OnInit {

  @Input() operation: Operation;
  categories: Category[];

  constructor(private operationsDbService: OperationDbService) { }

  ngOnInit() {
    this.operationsDbService.getCategories().then((categoryList) => this.categories = categoryList);
  }

}
