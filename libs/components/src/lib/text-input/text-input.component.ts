import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef
} from '@angular/core';

import { Color, TextAlignment } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit, AfterViewInit {
  @Input() id: string;
  @Input() placeholder = '';
  @Input() type: 'text' | 'password' | 'email' = 'text';

  @Input() bgColor: Color = 'space-shuttle';
  @Input() textColor: Color = 'kournikova';
  @Input() textAlignment: TextAlignment = 'left';

  @Input() icon: string;
  @Input() iconColor: Color = 'white-linen';
  @Input() iconLocation: 'left' | 'right';

  @Input() label: string;
  @Input() labelColor: Color = 'kournikova';

  @Input() error: string;
  @Input() hasError = false;

  @ViewChild('inputIcon', { static: false })
  inputIcon: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    console.log(this.inputIcon);
  }

  constructor() {}

  ngOnInit() {}
}