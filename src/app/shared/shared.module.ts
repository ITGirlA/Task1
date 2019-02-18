import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FakeLogoComponent } from './header/fake-logo/fake-logo.component';
import { UserLoginComponent } from './header/user-login/user-login.component';
import { LogOffComponent } from './header/log-off/log-off.component';
import { BreadcrumbsComponent } from './header/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, FakeLogoComponent, UserLoginComponent, LogOffComponent,
    BreadcrumbsComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [ FooterComponent, HeaderComponent, FakeLogoComponent, UserLoginComponent, LogOffComponent,
    BreadcrumbsComponent]
})
export class SharedModule { }
