import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import { BreadcrumbModule} from 'primeng/breadcrumb';
import { ButtonModule} from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SelfModule } from '../components/self/self.module';
import { MenubarComponent } from './menubar/menubar.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { MaterialNavMenuComponent } from './material-nav-menu/material-nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MenubarModule,
    MenuModule,
    SlideMenuModule,
    ButtonModule,
    BreadcrumbModule,
    DropdownModule,
    SelfModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [MenubarComponent, BreadcrumbComponent, MaterialNavMenuComponent],
  exports: [
    MenubarModule,
    ButtonModule,
    MenuModule,
    BreadcrumbModule,
    DropdownModule,
    SelfModule,
    SlideMenuModule,
    MenubarComponent,
    BreadcrumbComponent,
    MaterialNavMenuComponent
  ]
})
export class IdrisMenuModule { }
