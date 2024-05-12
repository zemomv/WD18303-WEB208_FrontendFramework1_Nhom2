import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  
  {
    title: 'Trang chủ',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
   {
    title: 'Thông tin nhân viên',
    icon: 'person-outline',
    link: '/pages/userinfo',
  },
  {
    title: 'Kỹ năng làm việc',
    icon: 'star-outline',
    link: '/pages/skill',
  },
  {
    title: 'Quản lí ứng tuyển',
    icon: 'clipboard-outline',
    link: '/pages/recruitment',
  },
  {
    title: 'Quản lí chứng chỉ',
    icon: 'book-outline',
    link: '/pages/certificate',
  },
];
