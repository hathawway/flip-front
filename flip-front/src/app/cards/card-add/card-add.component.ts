import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Card } from 'src/app/shared/interfaces/card.interface';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.less']
})
export class CardAddComponent implements OnInit {

  @Output() add = new EventEmitter<Card>();

  form!: FormGroup;
 

  constructor() { 
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    })
  } 

  ngOnInit(): void {
    
  }

  submit() {
    this.add.emit({
      title: this.form.get('title')?.value,
      description: this.form.get('description')?.value,
    });
    this.form.reset()
  }

}
