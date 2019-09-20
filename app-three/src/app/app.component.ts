import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {WidgetService} from './widget.service';
import {Widget} from './widget.model';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  title = 'app-three';
  widgets: Widget[];

  constructor(private widgetService: WidgetService) {
  }

  ngOnInit(): void {
    this.widgetService.loadWidgets().subscribe(
      widgets => this.widgets = widgets
    );
  }


}
