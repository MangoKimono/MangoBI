import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = '杨民青的智能BI平台';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '芒果智能 BI',
          title: '芒果智能 BI',
          href: 'https://github.com/MangoKimono/MangoBI',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/MangoKimono',
          blankTarget: true,
        },
        {
          key: '芒果智能 BI',
          title: '芒果智能 BI',
          href: 'https://github.com/MangoKimono/MangoBI',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
