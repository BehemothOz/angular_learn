import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { ViewContentComponent } from '../view-content/view-content.component';

@Component({
  selector: 'app-view-list-content',
  templateUrl: './view-list-content.component.html',
  styleUrls: ['./view-list-content.component.css']
})

export class ViewListContentComponent implements AfterContentInit {
  count: number = 0;

  @ContentChildren(ViewContentComponent) // Для получения доступка к дочерним компонентам через ng-content
  contentChildren: QueryList<ViewContentComponent>;

  ngAfterContentInit() {
    this.count = this.contentChildren.length;
    this.contentChildren.forEach(child => child.changeData());
  }
}
