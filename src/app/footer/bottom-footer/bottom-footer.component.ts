import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {SubscriptionLike as ISubscription} from 'rxjs/internal/types';
import {TranslationService} from '../../translation-i18/translation.service';

@Component({
  selector: 'app-bottom-footer',
  templateUrl: './bottom-footer.component.html',
  styleUrls: ['./bottom-footer.component.scss']
})

export class BottomFooterComponent implements OnInit, OnDestroy {
  translationSubscription: ISubscription;
  public loginLabel: string = this.i18Translation.instant(this.loginService.buttonLabel);
  public refreshLabel: string = this.i18Translation.instant(this.loginService.refreshBtn);

  constructor( public loginService: LoginService, public i18Translation: TranslationService,) {
  }

  ngOnInit() {
    this.translationSubscription = this.i18Translation.onUserChangeLanguage.subscribe(() => {
      this.loginLabel = this.i18Translation.instant(this.loginService.buttonLabel);
      this.refreshLabel = this.i18Translation.instant(this.loginService.refreshBtn);
    });
  }

  ngOnDestroy(): void {
    if (undefined !== this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }
}
