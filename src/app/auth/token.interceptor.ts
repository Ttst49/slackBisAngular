import { HttpInterceptorFn } from '@angular/common/http';
import {GlobalConstants} from "../common/global-constants";

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
    console.log('spinner interceptor...');

    return next(req.clone({
        setHeaders: {
            Authorization: `Bearer ${GlobalConstants.token}`
        }
    }));
};
