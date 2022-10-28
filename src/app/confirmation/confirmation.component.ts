import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  @Input() total!: number;
  @Input() fullname!: string;
  constructor() {}

  ngOnInit(): void {}
}
