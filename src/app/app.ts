import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate, VersionDetectedEvent } from '@angular/service-worker';
import { TranslocoService } from '@jsverse/transloco';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet],
})
export class App {
  constructor() {
    const swUpdate = inject(SwUpdate);
    const snackbar = inject(MatSnackBar);
    const translocoService = inject(TranslocoService);

    swUpdate.unrecoverable.subscribe((event) => {
      const snackError = snackbar.open(
        'An error occurred that we cannot recover from:\n' +
          event.reason +
          '\n\nPlease reload the page.',
        'Reload'
      );

      snackError.onAction().subscribe(() => {
        window.location.reload();
      });

      console.debug(
        'An error occurred that we cannot recover from:\n' +
          event.reason +
          '\n\nPlease reload the page.'
      );
    });

    swUpdate.versionUpdates
      .pipe(
        filter(
          (evt): evt is VersionDetectedEvent => evt.type === 'VERSION_DETECTED'
        )
      )
      .subscribe(() => {
        const snack = snackbar.open(
          translocoService.translate('messages.update-available'),
          'Reload'
        );

        snack.onAction().subscribe(() => {
          window.location.reload();
        });
      });
  }
}
