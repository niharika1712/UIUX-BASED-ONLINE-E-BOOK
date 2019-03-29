import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BooklistComponent} from './containers/booklist/booklist.component';
import {LoginComponent} from './containers/login/login.component';
import {AddBookComponent} from './containers/add-book/add-book.component';
import {AppRoutingModule} from './app.routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {BookCatContainerComponent} from './components/book-cat-container/book-cat-container.component';
import {SingleBookComponent} from './containers/single-book/single-book.component';
import {UserBooksComponent} from './containers/user-books/user-books.component';
import {ReadListComponent} from './containers/read-list/read-list.component';
import {BooklistCategoryComponent} from './containers/booklist-category/booklist-category.component';
import {BookPosComponent} from './components/book-pos/book-pos.component';
import {CategoryMenuComponent} from './components/category-menu/category-menu.component';

const config = {
  apiKey: "AIzaSyAuHYA4goEl8AmL8PpGcsTmMldA47ET1vQ",
    authDomain: "niharika-91616.firebaseapp.com",
    databaseURL: "https://niharika-91616.firebaseio.com",
    projectId: "niharika-91616",
    storageBucket: "niharika-91616.appspot.com",
    messagingSenderId: "698444806678"
};

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    LoginComponent,
    AddBookComponent,
    HeaderComponent,
    FooterComponent,
    BookCatContainerComponent,
    SingleBookComponent,
    UserBooksComponent,
    ReadListComponent,
    BooklistCategoryComponent,
    BookPosComponent,
    CategoryMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
