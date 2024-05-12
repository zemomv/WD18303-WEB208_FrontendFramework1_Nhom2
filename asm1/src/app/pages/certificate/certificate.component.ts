import {Component,OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


import { certificateData } from 'app/@core/data/certificate-table';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./certificate.component.scss'],
  templateUrl: './certificate.component.html',
})
export class certificateComponent implements OnInit {
  ngOnInit(): void { }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      nameCertificate: {
        title: 'Tên chứng chỉ',
        type: 'string',
      },
      issued: {
        title: 'Tổ chức cấp',
        type: 'string',
      },
      nameReceiver: {
        title: 'Tên người nhận',
        type: 'string',
      },
      dateRange: {
        title: 'Ngày cấp',
        type: 'date',
      },
      expiry: {
        title: 'Hạn sử dụng',
        type: 'text',
      },
      image: {
        title: 'Hình ảnh',
        type: 'file',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: certificateData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}