import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {User} from '../shared/entities/user';
import {TranslationsKeys} from '../translation-i18/translations-keys';
import {SubscriptionLike as ISubscription} from 'rxjs';
import {TranslationService} from '../translation-i18/translation.service';
import {BaseService} from './base.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {HttpClient} from '@angular/common/http';
import {HttpErrorHandler} from './http-error-handler.service';
import {ConfigService} from './config.service';
import {LoginService} from './login.service';
import {UiLogin} from '../shared/entities/ui-login';
import {MenuService} from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User = new User();

  constructor(
  ) {
  }


}

