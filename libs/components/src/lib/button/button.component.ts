import { Component, OnInit, Input } from '@angular/core';

import { Color, FontSize } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() textColor: Color = 'toledo';
  @Input() bgColor: Color = 'kournikova';
  @Input() fontSize: FontSize = 'l';

  constructor() {}

  ngOnInit() {}
}