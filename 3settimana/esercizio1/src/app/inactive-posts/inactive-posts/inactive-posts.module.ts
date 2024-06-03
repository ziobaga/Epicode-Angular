import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InactivePostsComponent } from '../inactive-posts.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: 'inactive', component: InactivePostsComponent },
];

@NgModule({
  imports: [CommonModule, SharedModule],
})
export class InactivePostsModule {}
