import type { FormItemProps, FormProps } from 'antd-mobile';
import { Form } from 'antd-mobile';
import { type FC } from 'react';

import './index.less';

const MForm: FC<FormProps & { formItems: FormItemProps[] }> = ({
  formItems,
}) => {
  return (
    <Form
      layout="horizontal"
      mode="card"
      validateMessages={{ required: '请输入${label}' }}
    >
      {formItems.map((props) => (
        <Form.Item key={props.name as 'string'} {...props}>
          {props.children}
        </Form.Item>
      ))}
    </Form>
  );
};

export default MForm;
