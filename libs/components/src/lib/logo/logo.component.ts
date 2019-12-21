import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cemiyet-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() sideLength: number;
  @Input() borderRadius: number;

  constructor() {}

  ngOnInit() {}
}