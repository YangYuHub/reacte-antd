import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin, Button, Row, Col } from 'antd';
import styles from './index.less';
const style = { background: '#0092ff', padding: '8px 0' };

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className={styles.comonent}>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <Button type="primary" ghost>
            Primary
          </Button>
        </Col>
        <Col className="gutter-row" span={6}>
          <Button ghost>Default</Button>
        </Col>
        <Col className="gutter-row" span={6}>
          <Button type="dashed" ghost>
            Dashed
          </Button>
        </Col>
        <Col className="gutter-row" span={6}></Col>
      </Row>
      <Button type="primary" disabled>
        Primary Button
      </Button>
      <Button type="primary">Primary Button</Button>
    </div>
  );
};
