import { Component, OnInit } from '@angular/core';

import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-productvideo1learnmore',
  templateUrl: './productvideo1learnmore.component.html',
  styleUrls: ['./productvideo1learnmore.component.css']
})
export class Productvideo1learnmoreComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

}
