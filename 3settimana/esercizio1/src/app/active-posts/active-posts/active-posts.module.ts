import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostsComponent } from '../active-posts.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: 'active', component: ActivePostsComponent }];

@NgModule({
  imports: [CommonModule, SharedModule],
})
export class ActivePostsModule {}
