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
import { AlertsComponent } from './components/alerts/alerts.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserService } from './services/user.service';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { UserSigninComponent } from './components/user-signin/user-signin.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { UserUpdateFormComponent } from './components/user-update-form/user-update-form.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CreatePostFormComponent } from './components/create-post-form/create-post-form.component';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './views/user/user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

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
    AlertsComponent,
    FormInputDirective,
    HomeComponent,
    LoginComponent,
    FeedComponent,
    LoadingComponent,
    NotificationsComponent,
    FavoritesComponent,
    UserSigninComponent,
    DropdownComponent,
    UserUpdateFormComponent,
    CreatePostComponent,
    CreatePostFormComponent,
    PostComponent,
    UserComponent,
    SidebarComponent
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
