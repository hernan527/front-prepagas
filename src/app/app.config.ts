import { ApplicationConfig} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
     providers: [
            provideRouter(routes),
            {
                provide: {
                    STEPPER_GLOBAL_OPTIONS
                },
                useValue: {
                    baseUrl: 'https://jsonplaceholder.typicode.com',
                    displayDefaultIndicatorType: false
                },
            },
            provideAnimations(),
            provideHttpClient(withInterceptorsFromDi()), provideClientHydration(withEventReplay())
        ]
}