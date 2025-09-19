import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { ArrowComponent } from "./components/arrow.component";

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [BrowserModule, ArrowComponent],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent { 
  @Input() placeholder?: string
  @Input() options: any[] = []
  @Input() optionSelected?: any
  @Output() onSelected: EventEmitter<any> = new EventEmitter<any>();

  public open: boolean = false;
  public toggleDropdown() {
    this.open = ! this.open
  }
  public selectOption(option: any){
    this.onSelected.emit(option);
    this.open = false
  }
}
