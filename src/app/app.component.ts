import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from './products-data-service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsDataService]
})
export class AppComponent implements OnInit {

  todos: Product[] = [];

  constructor(
    private todoDataService: ProductsDataService
  ) {
  }

  public ngOnInit() {
    this.todoDataService
      .getAllProducts()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }

  onAddTodo(todo) {
    this.todoDataService
      .addProducts(todo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
        }
      );
  }

  

  onUpdateTodo(todo) {
    this.todoDataService
      .updateProduct(todo.id)
      .subscribe(
        (_) => {
          this.todos = this.todos.filter((t) => t.id !== todo.id);
        }
      );
  }
}
