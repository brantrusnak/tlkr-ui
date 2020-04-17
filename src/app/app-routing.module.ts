import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FeedComponent } from './views/feed/feed.component';
import { LoginComponent } from './views/login/login.component';
import { LoadingComponent } from './views/loading/loading.component';
import { AuthGuard } from './guards/auth.guard';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { UserComponent } from './views/user/user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'feed',
    component: FeedComponent,
    canActivate: [AuthGuard],
    data: {
      showSidebar: true
    }
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    canActivate: [AuthGuard],
    data: {
      showSidebar: true
    }
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [AuthGuard],
    data: {
      showSidebar: true
    }
  },
  {
    path: 'user/:username',
    component: UserComponent,
    data: {
      showSidebar: true
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'loading',
    component: LoadingComponent,
    data: {
      showNav: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
