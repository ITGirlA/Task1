import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {

  private show: boolean = false;
  public loadingStatus: Subject<boolean> = new Subject();

  startLoading() {
    this.show = true;
    this.loadingStatus.next(this.show);
  }

  stopLoading() {
    this.show = false;
    this.loadingStatus.next(this.show);
  }
}
