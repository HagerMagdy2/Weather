import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConvertion',
  standalone: true
})
export class TemperatureConvertionPipe implements PipeTransform {

  transform(value: number, unit:string) :number|null{
    if(value && !isNaN(value)){
      if(unit === 'C'){
        return (value -32)* 5/9 ;
      } else if(unit === 'F'){
        return value;
      }
    }
    return null;
  }

}
