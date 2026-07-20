import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate, VersionDetectedEvent } from '@angular/service-worker';
import { TranslocoService } from '@jsverse/transloco';
import { filter, firstValueFrom, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet],
})
export class App {
  private readonly swUpdate = inject(SwUpdate);
  private readonly snackbar = inject(MatSnackBar);
  private readonly translocoService = inject(TranslocoService);
  private readonly unrecoverableEvent = toSignal(this.swUpdate.unrecoverable, {
    initialValue: null,
  });
  private readonly versionDetectedAt = toSignal(
    this.swUpdate.versionUpdates.pipe(
      filter((evt): evt is VersionDetectedEvent => evt.type === 'VERSION_DETECTED'),
      map(() => Date.now())
    ),
    { initialValue: 0 }
  );

  constructor() {
    effect(() => {
      const event = this.unrecoverableEvent();

      if (!event) {
        return;
      }

      const message =
        'An error occurred that we cannot recover from:\n' +
        event.reason +
        '\n\nPlease reload the page.';

      void this.promptReload(message);
      console.debug(message);
    });

    effect(() => {
      if (!this.versionDetectedAt()) {
        return;
      }

      void this.promptReload(this.translocoService.translate('messages.update-available'));
    });
  }

  private async promptReload(message: string): Promise<void> {
    const snack = this.snackbar.open(message, 'Reload');

    await firstValueFrom(snack.onAction());
    window.location.reload();
  }
}
