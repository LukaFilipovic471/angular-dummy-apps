import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HttpEventType, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { tap } from 'rxjs';

function loggingInterception(request: HttpRequest<unknown>, next: HttpHandlerFn){
    return next(request).pipe(
        tap({
            next: event => {
                if(event.type === HttpEventType.Response){
                    console.log(event.status);
                    console.log(event.body);
                }
            }
        })
    );
}

bootstrapApplication(AppComponent, {
    providers: [provideHttpClient(withInterceptors([loggingInterception]))]
}).catch((err) => console.error(err));
