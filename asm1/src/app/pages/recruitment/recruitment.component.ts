import {Component,OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


import { recruitmentData } from 'app/@core/data/recruitment-table';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./recruitment.component.scss'],
  templateUrl: './recruitment.component.html',
})
export class recruitmentComponent implements OnInit {
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
      nameRecruitment: {
        title: 'Tên ứng tuyển',
        type: 'string',
      },
      role: {
        title: ' Vị trí',
        type: 'string',
      },
      submissionTime: {
        title: 'Thời gian nộp',
        type: 'text',
      },
      status: {
        title: 'Trạng thái',
        type: 'string',
      },
      rate: {
        title: 'Đánh giá',
        type: 'text',
      },
      nameExaminer: {
        title: 'Phụ trách ứng tuyển',
        type: 'text',
      },
      result: {
        title: 'Kết quả',
        type: 'text',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: recruitmentData) {
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