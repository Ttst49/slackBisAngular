import { HttpInterceptorFn } from '@angular/common/http';
import {GlobalConstants} from "../common/global-constants";

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url == "https://slackbis.thibautstachnick.com/api/register"){
    return next(req)
  }else
    return next(req.clone({
        setHeaders: {
            Authorization: `Bearer ${GlobalConstants.token}`
        }
    }));
};
