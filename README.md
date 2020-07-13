# PWA Support for Angular 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## PWA Update
PWA Supported app can be automatically updated depends on requirement, Here you can find simple logic on how to do it.

```typescript
export class AppComponent {
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
```
