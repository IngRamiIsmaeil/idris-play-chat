import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/components/common/menuitem';
import {SubscriptionLike as ISubscription} from 'rxjs';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'idrisgames-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit, OnDestroy  {
  translationSubscription: ISubscription;

  constructor(
    public menuService: MenuService
    ) {}

  ngOnInit() {
    this.translationSubscription = this.menuService.i18Translation.onUserChangeLanguage.subscribe(() => {this.menuService.createTranslatedMenu();this.menuService.createTranslatedCrumb()});
  }

  ngOnDestroy(): void {
    if (undefined !== this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }

}
