import { Component, OnInit } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any;
  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {}
  // createPost(input: HTMLInputElement) {
  //   console.log(input);
  //   let post: any = { title: input.value, id: null };
  //   input.value = "";
  //   this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
  //     console.log(response, response.id);
  //     console.log(this.posts);
  //     post.id = response.id;
  //     this.posts.splice(0, 0, post);
  //     console.log(post);
  //   });
  // }
  updatePost(post) {
    console.log(post);
    this.http
      .patch(this.url + "/" + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      });

    // this.http.put(this.url, JSON.stringify(post));
  }
  deletePost(post) {
    this.http.delete(this.url + "/" + post.id).subscribe(response => {
      console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
  ngOnInit() {
    this.http.get(this.url).subscribe(response => {
      console.log(response);
      this.posts = response;
    });
  }
}
