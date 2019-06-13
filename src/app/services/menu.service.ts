import { Injectable } from '@angular/core';
import {MenuItem} from 'primeng/components/common/menuitem';
import {TranslationService} from '../translation-i18/translation.service';
import {TranslationsKeys} from '../translation-i18/translations-keys';
import {Constants} from '../shared/diverses/constants';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  items: MenuItem[];
  currentCrumbMenuItem: MenuItem[];
  currentShownMenuItemId: string;
  constructor(
    public i18Translation: TranslationService,
    private router: Router) {
    this.createTranslatedMenu();
  }

  public createTranslatedMenu(logged?:boolean){
    console.log('createTranslatedMenu is user logen ', logged);
    this.items = [];
    this.items = [
      {
        label: this.i18Translation.instant(TranslationsKeys.I18_KEY.HOME),
        icon: 'fa fa-fw fa-home',
        command: (event) => this.navigateAndCreateCrumb(event),
        id: Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.HOME],
        items: [
          {
            label: this.i18Translation.instant(TranslationsKeys.I18_KEY.PLAY),
            icon: 'fa fa-fw fa-opencart',
            command: (event) => this.navigateAndCreateCrumb(event),
            id: Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.PLAY],
            disabled: !logged,
            items: [
              {
                label: this.i18Translation.instant(TranslationsKeys.I18_KEY.CARD),
                icon: 'fa fa-fw fa-heart',
                command: (event) => this.navigateAndCreateCrumb(event),
                id: Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.CARD],
                items: [
                  {
                    label: this.i18Translation.instant(TranslationsKeys.I18_KEY.CANSTA),
                    icon: 'fa fa-fw fa-creative-commons',
                    command: (event) => this.navigateAndCreateCrumb(event),
                    id: Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.CANSTA],
                  },
                  {
                    label: this.i18Translation.instant(TranslationsKeys.I18_KEY.HEART),
                    icon: 'fa fa-fw fa-gratipay',
                    command: (event) => this.navigateAndCreateCrumb(event),
                    id: Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.HEART],
                  }
                ]
              },
              {
                label: this.i18Translation.instant(TranslationsKeys.I18_KEY.OTHER),
                icon: 'fa fa-fw fa-dribbble',
                command: (event) => this.navigateAndCreateCrumb(event),
                id: Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.OTHER],
              },
            ]
          },
          {
            label: this.i18Translation.instant(TranslationsKeys.I18_KEY.STATISTIC),
            icon: 'fa fa-fw fa-line-chart',
            command: (event) => this.navigateAndCreateCrumb(event),
            id: Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.STATISTIC],
            disabled: !logged,
            items: [
              {
                label: this.i18Translation.instant(TranslationsKeys.I18_KEY.STATISTIC_C),
                icon: 'fa fa-fw fa-cc',
                command: (event) => this.navigateAndCreateCrumb(event),
                id: Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.STATISTIC_C],
              },
              {
                label: this.i18Translation.instant(TranslationsKeys.I18_KEY.STATISTIC_H),
                icon: 'fa fa-fw fa-heartbeat',
                command: (event) => this.navigateAndCreateCrumb(event),
                id: Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.STATISTIC_H],
              },
            ]
          },
          {
            label: this.i18Translation.instant(TranslationsKeys.I18_KEY.CALENDAR),
            icon: 'fa fa-fw fa-calendar-plus-o',
            command: (event) => this.navigateAndCreateCrumb(event),
            id: Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.CALENDAR],
            disabled: !logged,
          }
        ]
      },
      {
        label: this.i18Translation.instant(TranslationsKeys.I18_KEY.CONFIG),
        icon: 'fa fa-fw fa-cogs',
        command: (event) => this.navigateAndCreateCrumb(event),
        id: Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.CONFIG],
        disabled: !logged,
        items: [
          {
            label: this.i18Translation.instant(TranslationsKeys.I18_KEY.GAME_CONFIG),
            icon: 'fa fa-fw fa-gamepad',
            command: (event) => this.navigateAndCreateCrumb(event),
            id: Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.GAME_CONFIG],
          },
          {
            label: this.i18Translation.instant(TranslationsKeys.I18_KEY.CHAT_CONFIG),
            icon: 'fa fa-fw fa-comments-o',
            command: (event) => this.navigateAndCreateCrumb(event),
            id: Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.CHAT_CONFIG],
          }
        ]
      }
    ];
  }

  public createTranslatedCrumb(){
    this.currentCrumbMenuItem = [];
    switch (this.currentShownMenuItemId) {
      case Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.CHAT_CONFIG]:
        this.currentCrumbMenuItem = [
          {label: this.items[1].label, command: (event) => this.navigateAndCreateCrumb(event), id: this.items[1].id},
          {label: (<MenuItem>this.items[1].items[1]).label, command: (event) => this.navigateAndCreateCrumb(event), disabled: true},
        ];
        break;
      case Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.GAME_CONFIG]:
        this.currentCrumbMenuItem = [
          {label: this.items[1].label, command: (event) => this.navigateAndCreateCrumb(event), id: this.items[1].id},
          {label: (<MenuItem>this.items[1].items[0]).label, command: (event) => this.navigateAndCreateCrumb(event), disabled: true},
        ];
        break;
      case Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.CONFIG]:
        this.currentCrumbMenuItem = [
          {label: this.items[1].label, command: (event) => this.navigateAndCreateCrumb(event), disabled: true},
        ];
        break;
      case Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.HOME]:
        this.currentCrumbMenuItem = [
          {label: this.items[0].label, command: (event) => this.navigateAndCreateCrumb(event), disabled: true},
        ];
        break;
      case Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.PLAY]:
        this.currentCrumbMenuItem = [
          {label: this.items[0].label, command: (event) => this.navigateAndCreateCrumb(event), id: this.items[0].id},
          {label: (<MenuItem>this.items[0].items[0]).label, command: (event) => this.navigateAndCreateCrumb(event), disabled: true},
        ];
        break;
      case Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.CARD]:
        this.currentCrumbMenuItem = [
          {label: this.items[0].label, command: (event) => this.navigateAndCreateCrumb(event), id: this.items[0].id},
          {label: (<MenuItem>this.items[0].items[0]).label, command: (event) => this.navigateAndCreateCrumb(event), id: (<MenuItem>this.items[0].items[0]).id},
          {label: (<MenuItem>(<MenuItem>this.items[0].items[0]).items[0]).label, command: (event) => this.navigateAndCreateCrumb(event), disabled: true},
        ];
        break;
      case Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.CANSTA]:
        this.currentCrumbMenuItem = [
          {label: this.items[0].label, command: (event) => this.navigateAndCreateCrumb(event), id: this.items[0].id},
          {label: (<MenuItem>this.items[0].items[0]).label, command: (event) => this.navigateAndCreateCrumb(event), id: (<MenuItem>this.items[0].items[0]).id},
          {label: (<MenuItem>(<MenuItem>this.items[0].items[0]).items[0]).label, command: (event) => this.navigateAndCreateCrumb(event), id: (<MenuItem>(<MenuItem>this.items[0].items[0]).items[0]).id},
          {label: (<MenuItem>(<MenuItem>(<MenuItem>this.items[0].items[0]).items[0]).items[0]).label, command: (event) => this.navigateAndCreateCrumb(event), disabled: true},
        ];
        break;
      case Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.HEART]:
        this.currentCrumbMenuItem = [
          {label: this.items[0].label, command: (event) => this.navigateAndCreateCrumb(event), id: this.items[0].id},
          {label: (<MenuItem>this.items[0].items[0]).label, command: (event) => this.navigateAndCreateCrumb(event), id: (<MenuItem>this.items[0].items[0]).id},
          {label: (<MenuItem>(<MenuItem>this.items[0].items[0]).items[0]).label, command: (event) => this.navigateAndCreateCrumb(event), id: (<MenuItem>(<MenuItem>this.items[0].items[0]).items[0]).id},
          {label: (<MenuItem>(<MenuItem>(<MenuItem>this.items[0].items[0]).items[0]).items[1]).label, command: (event) => this.navigateAndCreateCrumb(event), disabled: true},
        ];
        break;
      case Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.OTHER]:
        this.currentCrumbMenuItem = [
          {label: this.items[0].label, command: (event) => this.navigateAndCreateCrumb(event), id: this.items[0].id},
          {label: (<MenuItem>this.items[0].items[0]).label, command: (event) => this.navigateAndCreateCrumb(event), id: (<MenuItem>this.items[0].items[0]).id},
          {label: (<MenuItem>(<MenuItem>this.items[0].items[0]).items[1]).label, command: (event) => this.navigateAndCreateCrumb(event), disabled: true},
        ];
        break;
      case Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.STATISTIC]:
        this.currentCrumbMenuItem = [
          {label: this.items[0].label, command: (event) => this.navigateAndCreateCrumb(event),  id: this.items[0].id},
          {label: (<MenuItem>this.items[0].items[1]).label, command: (event) => this.navigateAndCreateCrumb(event), disabled: true},
        ];
        break;
      case Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.STATISTIC_C]:
        this.currentCrumbMenuItem = [
          {label: this.items[0].label, command: (event) => this.navigateAndCreateCrumb(event), id: this.items[0].id},
          {label: (<MenuItem>this.items[0].items[1]).label, command: (event) => this.navigateAndCreateCrumb(event), id: (<MenuItem>this.items[0].items[1]).id},
          {label: (<MenuItem>(<MenuItem>this.items[0].items[1]).items[0]).label, command: (event) => this.navigateAndCreateCrumb(event), disabled: true},
        ];
        break;
      case Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.STATISTIC_H]:
        this.currentCrumbMenuItem = [
          {label: this.items[0].label, command: (event) => this.navigateAndCreateCrumb(event), id: this.items[0].id},
          {label: (<MenuItem>this.items[0].items[1]).label, command: (event) => this.navigateAndCreateCrumb(event), id: (<MenuItem>this.items[0].items[1]).id},
          {label: (<MenuItem>(<MenuItem>this.items[0].items[1]).items[1]).label, command: (event) => this.navigateAndCreateCrumb(event), disabled: true},
        ];
        break;
      case Constants.MENUITEMS_ID[TranslationsKeys.I18_KEY.CALENDAR]:
        this.currentCrumbMenuItem = [
          {label: this.items[0].label, command: (event) => this.navigateAndCreateCrumb(event),  id: this.items[0].id},
          {label: (<MenuItem>this.items[0].items[2]).label, command: (event) => this.navigateAndCreateCrumb(event), disabled: true},
        ];
        break;
      default:
        this.currentCrumbMenuItem = null;
        break;
    }
  }

  public navigateAndCreateCrumb(event: any){
    if (undefined === event || null === event || undefined === event.item || null === event.item) {
      console.error('trying to navigate on wrong event -> ', event);
      return;
    }
    const sourceMenuItem = event.item;
    console.log(this.currentShownMenuItemId);
    if (undefined != this.currentShownMenuItemId && this.currentShownMenuItemId === sourceMenuItem.id){
      console.log('user is currently on "', sourceMenuItem.label, '". Click on Navigation will be ignored' );
      return;
    }

    console.log('User navigate to ', sourceMenuItem.label);
    this.currentShownMenuItemId = sourceMenuItem.id;
    this.createTranslatedCrumb();
    this.router.navigate([sourceMenuItem.id]);
  }
}
