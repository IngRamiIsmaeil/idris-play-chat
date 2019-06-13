import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';


import { FooterModule } from './footer/footer.module';
import { ServicesModule } from './services/services.module';
import { SelfModule } from './components/self/self.module';
import { TranslationService } from './translation-i18/translation.service';
import { I18_PROVIDERS } from './translation-i18/translation-config';
import { ShardModule } from './shared/shard.module';
import {ViewModule} from './view/view.module';
import {PipesCommonModule} from './pipes/pipes-common/pipes-common.module';
import {ConfigService} from './services/config.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {MainModule} from './main/main.module';
import {HttpErrorHandler} from './services/http-error-handler.service';
import {MaterialModule} from './shared/material/material.module';
import {MenuModule} from 'primeng/menu';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    PipesCommonModule,
    ViewModule,
    FooterModule,
    ServicesModule,
    SelfModule,
    MaterialModule,
    MainModule,
    ShardModule,
    MenuModule
  ],
  bootstrap: [AppComponent],
  providers: [
    MessageService,
    HttpErrorHandler
  ],
})
export class AppModule { }
