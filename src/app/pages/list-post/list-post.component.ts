import { Component } from '@angular/core';
import { PostService, Post } from '../../services/post/post.service';
import { FormBuilder, FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.css'
})
export class ListPostComponent {
  posts: Post[] = [];
  form: FormGroup;
constructor(public postService: PostService, private formBuilder: FormBuilder){
this.form=this.formBuilder.group({
 userId:["",Validators.required],
 title:["",Validators.required],
 body:["",Validators.required],
})
}
ngOnInit(): void {
  this.postService.getPosts().subscribe((posts)=>{this.posts = posts;});
}
createPost():void{
  const post = this.form.value;
  if(this.form.valid){
    this.postService.createPost(post).subscribe((post)=>{
      //this.posts.push(post);
      this.posts.unshift(post);
      this.form.reset();
    })
    }
  }
  updatePost(post: Post): void {
    const  newPost ={...post, title: "Titulo Actualizado"}; 
    this.postService.updatePost(newPost).subscribe((post)=>{ 
      const index = this.posts.findIndex((p)=> p.id === post.id); 
    this.posts[index] = post; 
  }); 
 }
 deletePost(post: Post): void{ 
  this.postService.deletePost(post).subscribe(()=>{ 
    const index = this.posts.findIndex((p)=> p.id === post.id); 
    this.posts.splice(index,1); 
    }) 
   } 
}
