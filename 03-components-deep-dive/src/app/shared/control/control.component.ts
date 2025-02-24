import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit{
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick(){
  //   console.log('Kliknuto');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor(){
    afterRender(() => {
      console.log("AR");
    });

    afterNextRender(() => {
      console.log("ANR");
    });
  }

  ngAfterContentInit(): void {
    
  }

  onClick(){
      console.log('Kliknuto');
      console.log(this.el);
      console.log(this.control());
  }
}
