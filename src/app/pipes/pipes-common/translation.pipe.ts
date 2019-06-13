import { Pipe, PipeTransform } from '@angular/core';
import {TranslationService} from '../../translation-i18/translation.service';


@Pipe({
  name: 'i18Translate',
  pure: false
})
export class TranslationPipe implements PipeTransform {
  constructor(private _i18: TranslationService) {
  }

  transform(value: string, args?: any): any {
    if (!value) {
      return undefined;
    }
    return this._i18.instant(value, args);
  }

}
