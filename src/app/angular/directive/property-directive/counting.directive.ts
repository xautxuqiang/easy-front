import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCounting]'
})
export class CountingDirective {
  numberOfClicks = 0;

  constructor() { }

  @HostListener('click', ['$event.target']) // 第二个参数是当事件发生的时候传给处理器的一组集合参数
  onClick(btn) {
    console.log('button', btn, 'number of clicks', this.numberOfClicks++);
  }
}
