import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarModule} from 'primeng/toolbar';
import {BottomFooterComponent} from './bottom-footer/bottom-footer.component';
import {ButtonModule} from 'primeng/button';
import {PipesCommonModule} from '../pipes/pipes-common/pipes-common.module';
import {ShardModule} from '../shared/shard.module';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    PipesCommonModule,
    ShardModule
  ],
  declarations: [BottomFooterComponent],
  exports:[
    ToolbarModule,BottomFooterComponent
  ]
})
export class FooterModule { }
