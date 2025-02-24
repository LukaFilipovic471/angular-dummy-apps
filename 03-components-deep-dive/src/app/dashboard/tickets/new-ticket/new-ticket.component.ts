import { AfterViewChecked, Component, ElementRef, EventEmitter, OnInit, Output, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewChecked{
  //@ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  enteredTitle = '';
  enteredText = '';
  @Output() add = new EventEmitter<{title: string, text: string}>();

  ngOnInit(): void {
    console.log('ON');
    console.log(this.form().nativeElement);
  }

  ngAfterViewChecked(): void {
    console.log('AFTER');
    console.log(this.form().nativeElement);
  }

  onSubmit() {
    this.add.emit({title: this.enteredTitle, text: this.enteredText});
    // this.form().nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }

}
