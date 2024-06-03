import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./homepage/homepage/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  {
    path: 'post/:id',
    loadChildren: () =>
      import('./post-detail/post-detail/post-detail.module').then(
        (m) => m.PostDetailModule
      ),
  },
  {
    path: 'active',
    loadChildren: () =>
      import('./active-posts/active-posts/active-posts.module').then(
        (m) => m.ActivePostsModule
      ),
  },
  {
    path: 'inactive',
    loadChildren: () =>
      import('./inactive-posts/inactive-posts/inactive-posts.module').then(
        (m) => m.InactivePostsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
