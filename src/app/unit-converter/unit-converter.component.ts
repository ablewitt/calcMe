import {Component, Input, OnInit} from '@angular/core';
import configureMeasurements, {AllMeasures, allMeasures, AllMeasuresUnits} from 'convert-units';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-unit-converter',
  templateUrl: './unit-converter.component.html',
  styleUrls: ['./unit-converter.component.scss']
})
export class UnitConverterComponent implements OnInit {

  @Input() type?: AllMeasures;
  convert = configureMeasurements(allMeasures);
  reverseCalc: boolean = false;
  toValue?: number;
  fromValue?: number;
  toUnit?: AllMeasuresUnits;
  fromUnit?: AllMeasuresUnits;
  summary: string = "";

  constructor(private clipboard: Clipboard) {
  }

  ngOnInit() {
  }

  update(reverse: boolean) {
    this.reverseCalc = reverse;
    this.calculate();
  }

  calculate() {
    if (this.fromUnit && this.toUnit){
      if (this.reverseCalc) {
        this.fromValue = this.convert(this.toValue).from(this.toUnit).to(this.fromUnit)
      } else {
        this.toValue = this.convert(this.fromValue).from(this.fromUnit).to(this.toUnit)
      }
      this.summary ="Result: "+  this.fromValue + this.fromUnit + " ≡ " + this.toValue + this.toUnit
    }
  }

  getUnits(): string[] {
    return this.convert().possibilities(this.type)
  }

  copyValue(direction: string) {
    if (direction == "fromValue") {
      this.clipboard.copy(String(this.fromValue));
      return;
    }
    //ToValue
    this.clipboard.copy(String(this.toValue));
  }
}
