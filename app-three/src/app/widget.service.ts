import {Injectable} from '@angular/core';
import {Widget} from './widget.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor(private http: HttpClient) {
  }

  loadWidgets(): Observable<Widget[]> {
    return this.http.get<Widget[]>(`${environment.serviceUrl}/data/widgets`);
  }
}
