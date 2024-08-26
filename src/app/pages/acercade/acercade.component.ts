import { Component } from '@angular/core';
import { PostService } from '../../services/post/post.service';
@Component({
  selector: 'app-acercade',
  standalone: true,
  imports: [],
  templateUrl: './acercade.component.html',
  styleUrl: './acercade.component.css'
})
export class AcercadeComponent {
contador : number = 0;
  constructor(private postService: PostService) {}
  onClick():void {
 this.postService.changePost(`Clicks: ${++this.contador}`);
  }
}
