import { Component } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
  postsInactive: PostInterface[] = [];
  inactive: any;
  constructor(private postService: PostServiceService) {}

  ngOnInIt() {
    this.postsInactive = this.postService.inactivePosts;
  }
}
