import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from '../post-detail.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: 'post/:id', component: PostDetailComponent }];

@NgModule({
  imports: [CommonModule, SharedModule],
})
export class PostDetailModule {}
