import {Component, OnDestroy, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MenuService} from '../../services/menu.service';
import {SubscriptionLike as ISubscription} from 'rxjs/internal/types';

@Component({
  selector: 'material-nav-menu',
  templateUrl: './material-nav-menu.component.html',
  styleUrls: ['./material-nav-menu.component.css']
})
export class MaterialNavMenuComponent implements OnInit, OnDestroy {
  translationSubscription: ISubscription;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public menuService: MenuService) {}
  ngOnInit() {
    this.translationSubscription = this.menuService.i18Translation.onUserChangeLanguage.subscribe(() => {this.menuService.createTranslatedMenu();this.menuService.createTranslatedCrumb()});
  }

  ngOnDestroy(): void {
    if (undefined !== this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }
}
