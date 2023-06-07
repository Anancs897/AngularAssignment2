import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SaveFormDataService } from 'src/app/services/save-form-data.service';

@Component({
  selector: 'app-preview-component',
  templateUrl: './preview-component.component.html',
  styleUrls: ['./preview-component.component.css']
})
export class PreviewComponentComponent {
  @Input() name: any;
  // image:any=[];
  data: any;
  image: any;
  constructor(private myservice: SaveFormDataService,public myModal: NgbActiveModal,) { }

  closeFunction() {
    this.myModal.close('Cross-click');
  }

  //Save form data to service using function saveData
  saveData() {
    this.myservice.userurl = this.image;
    this.myservice.saveUserData(this.data);
    this.myModal.close('cross-click');
  }

}
