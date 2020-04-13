import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDirective } from './directives/modal.directive';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { FormInputDirective } from './directives/form-input.directive';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { FeedComponent } from './views/feed/feed.component';
import { LoadingComponent } from './views/loading/loading.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserService } from './services/user.service';

export function initUserFactory(user: UserService) {
  return () => user.initalize();
}

@NgModule({
  declarations: [
    RootComponent,
    NavbarComponent,
    ModalComponent,
    ModalDirective,
    SignupFormComponent,
    SigninFormComponent,
    FormInputDirective,
    HomeComponent,
    LoginComponent,
    FeedComponent,
    LoadingComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initUserFactory,
      deps: [UserService],
      multi: true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    }
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
