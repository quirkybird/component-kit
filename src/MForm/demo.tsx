import { type FormItemProps } from 'antd-mobile';
import { MForm, MInput } from 'yamorz-component-kit';

const formItems: FormItemProps[] = [
  {
    label: '昵称',
    name: 'nickName',
    rules: [{ required: true, max: 50, message: '请输入昵称' }],
    children: <MInput />,
  },
  {
    label: '昵称',
    name: 'nickName',
    rules: [{ required: true, max: 50, message: '请输入昵称' }],
    children: <MInput />,
  },
];

export default () => <MForm formItems={formItems} />;
