import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { CourseComponent } from "./course/course.component";
import { CoursesComponent } from "./courses.component";
import { CoursesService } from "./courses.service";
import { FavoriteComponent } from "./favorite/favorite.component";
import { FavComponent } from "./fav/fav.component";
import { ZippyComponent } from "./zippy/zippy.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { NewCourseFormComponent } from "./new-course-form/new-course-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { PostsComponent } from "./posts/posts.component";
import { PostService } from "./post.service";
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    FavComponent,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    PostsComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [CoursesService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
