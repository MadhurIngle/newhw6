  
import { Injectable } from '@angular/core'
import { Product } from './product.model'
import { Observable, from } from 'rxjs'
import { Order } from './order.model'

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(3, 'FootBall', 'Football', 'Football Ball (Football)', 100),
    new Product(5, 'Swimming Cap', 'Swimming', 'Swimming Cap (Swimming)', 100),
    new Product(6, 'Swimming Costume', 'Swimming', 'Swimming Costume (Swimming)', 100),
    new Product(7, 'Chess Board', 'Chess', 'Chess Board (Category 2)', 100),
    new Product(8, 'Chess Warriors', 'Chess', 'Chess Warriors (Indoor Games)', 100),
  ]

  getProducts(): Observable<Product[]> {
    return from([this.products])

}

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order))
    return from([order])
}
}
