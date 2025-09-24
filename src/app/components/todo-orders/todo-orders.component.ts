import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Orders } from 'src/app/interfaces/todos.interfaces';
import { orderOptions } from 'src/app/config/options';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-todo-orders',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './todo-orders.component.html',
  styleUrls: ['./todo-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoOrdersComponent { 

  private todoService = inject(TodosService);

  public selectedOrder : {value: Orders; name: string} = orderOptions[0]
  public orderOptions = orderOptions

  orderByDate(selectedOrder: {value: Orders; name: string}){
    this.selectedOrder = selectedOrder
    // ordenar
    this.todoService.orderByDate(selectedOrder.value);
  }
  
}
