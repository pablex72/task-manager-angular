import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { filterOptions } from 'src/app/config/options';
import { FilterStatus } from 'src/app/interfaces/todos.interfaces';
import { TodosService } from '../services/todos.service';
import { traductions } from 'src/app/utils/traductions';
import { DropdownComponent } from "../dropdown/dropdown.component";

@Component({
  selector: 'app-todo-filters',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFiltersComponent {
  public selectedStatus: {name: string; value: FilterStatus} = filterOptions[0]

  private todoService = inject(TodosService);

  public filterOptions = filterOptions;

  constructor() {
    this.todoService.filterSubject.pipe().subscribe((filter)=>{
      this.selectedStatus = {name:traductions[filter], value: filter}
    })
  }

  public filterByStatus(selectedStatus: {name: string ; value: FilterStatus}){
    // filtrar por stauts
    this.todoService.filterByStatus(selectedStatus.value)
  }


 }
