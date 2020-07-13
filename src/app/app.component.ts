import { Component, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pwa-Test';

  /**
   *
   */
  constructor(appRef: ApplicationRef, update: SwUpdate) {
    let interval = setInterval(() => {
      if (update.isEnabled) {
        this.updateApp(update);
        clearInterval(interval);
      }
    }, 1000);
  }

  updateApp(update: SwUpdate) {
    update.available.subscribe(e => {
      update.activateUpdate().then(e => location.reload())
    });
    return update.checkForUpdate();
  }

}
