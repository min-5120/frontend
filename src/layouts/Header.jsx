import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Menu } from './index';
import './index.less';

const { Header } = Layout;

export default function Headers() {
	return (
		<Header>
			<Row>
				<Col span={12}>	<div>logo</div></Col>
				<Col span={12}>	<div>分享</div></Col>
			</Row>
			<Row>
				<Col span={12}>		<Menu /></Col>
				<Col span={12}>	<div>我的</div></Col>
			</Row>

		</Header>
	);
}