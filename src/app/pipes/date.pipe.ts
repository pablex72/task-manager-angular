import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DatePipe implements PipeTransform {

  transform(value: string | Date): string {
    let inputDate: Date;
  }

  private isSameDay(date1: Date, date2: Date): boolean {
      return(
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
      );
  }

  private isYesterday(date1: Date, date2: Date): boolean{
    const yesterday = new Date(date1);
    yesterday.setDate(yesterday.getDate() - 1);

    return (
      date2.getDate() === yesterday.getDate
    )
  }

}
