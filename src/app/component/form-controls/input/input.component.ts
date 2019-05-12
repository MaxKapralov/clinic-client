import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() controlName: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}
