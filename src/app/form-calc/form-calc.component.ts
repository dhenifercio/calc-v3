import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  total : number = 0;

  onClickSum(){
    this.total = this.num1 + this.num2;
     }
     onClicksub(){
      this.total = this.num1 - this.num2;
    }
    onClickmult(){
      this.total = this.num1 * this.num2;
    }
    onClickdiv(){
      this.total = this.num1 / this.num2;
    }
    onClickexpo(){
      this.total = this.num1 ** this.num2;
    }
    onClickraiz(){
      this.total = this.num1 ** (1/this.num2);
    }
   

}

