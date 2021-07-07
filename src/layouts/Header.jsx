import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Menu } from './index';
import logo from '../assets/logo.png';
import styles from './index.less';

const { Header } = Layout;

export default function Headers() {
  return (
    <Header>
      <Row>
        <Col span={12}><img className={styles.logo} src={logo} alt="logo" /></Col>
        <Col span={12}>
          <div className="ct-social-box" data-icon-size="custom" data-color="custom" data-icons-type="simple">
            <a href="#" rel="noopener noreferrer nofollow" data-network="instagram" aria-label="Instagram">
              <span className="ct-icon-container">
                <svg className="ct-icon" width="20" height="20" viewBox="0 0 20 20" aria-label="Instagram Icon">
                  <circle cx="10" cy="10" r="3.3" />
                  <path d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z" />
                </svg>
              </span><span className="ct-label hidden">Instagram</span>				</a>
            <a href="#" rel="noopener noreferrer nofollow" data-network="pinterest" aria-label="Pinterest">
              <span className="ct-icon-container">
                <svg className="ct-icon" width="20px" height="20px" viewBox="0 0 20 20" aria-label="Pinterest Icon">
                  <path d="M10,0C4.5,0,0,4.5,0,10c0,4.1,2.5,7.6,6,9.2c0-0.7,0-1.5,0.2-2.3c0.2-0.8,1.3-5.4,1.3-5.4s-0.3-0.6-0.3-1.6c0-1.5,0.9-2.6,1.9-2.6c0.9,0,1.3,0.7,1.3,1.5c0,0.9-0.6,2.3-0.9,3.5c-0.3,1.1,0.5,1.9,1.6,1.9c1.9,0,3.2-2.4,3.2-5.3c0-2.2-1.5-3.8-4.2-3.8c-3,0-4.9,2.3-4.9,4.8c0,0.9,0.3,1.5,0.7,2C6,12,6.1,12.1,6,12.4c0,0.2-0.2,0.6-0.2,0.8c-0.1,0.3-0.3,0.3-0.5,0.3c-1.4-0.6-2-2.1-2-3.8c0-2.8,2.4-6.2,7.1-6.2c3.8,0,6.3,2.8,6.3,5.7c0,3.9-2.2,6.9-5.4,6.9c-1.1,0-2.1-0.6-2.4-1.2c0,0-0.6,2.3-0.7,2.7c-0.2,0.8-0.6,1.5-1,2.1C8.1,19.9,9,20,10,20c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0z" />
                </svg>
              </span><span className="ct-label hidden">Pinterest</span>				</a>
            <a href="#" rel="noopener noreferrer nofollow" data-network="facebook" aria-label="Facebook">
              <span className="ct-icon-container">
                <svg className="ct-icon" width="20px" height="20px" viewBox="0 0 20 20" aria-label="Facebook Icon">
                  <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z" />
                </svg>
              </span><span className="ct-label hidden">Facebook</span>				</a>
            <a href="#" rel="noopener noreferrer nofollow" data-network="twitter" aria-label="Twitter">
              <span className="ct-icon-container">
                <svg className="ct-icon" width="20px" height="20px" viewBox="0 0 20 20" aria-label="Twitter Icon">
                  <path d="M20,3.8c-0.7,0.3-1.5,0.5-2.4,0.6c0.8-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.8-4.1,4.1c0,0.3,0,0.6,0.1,0.9C6.4,6.7,3.4,5.1,1.4,2.6C1,3.2,0.8,3.9,0.8,4.7c0,1.4,0.7,2.7,1.8,3.4C2,8.1,1.4,7.9,0.8,7.6c0,0,0,0,0,0.1c0,2,1.4,3.6,3.3,4c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.8,6.3,1.8c7.5,0,11.7-6.3,11.7-11.7c0-0.2,0-0.4,0-0.5C18.8,5.3,19.4,4.6,20,3.8z" />
                </svg>
              </span><span className="ct-label hidden">Twitter</span>				</a>
            <a href="#" rel="noopener noreferrer nofollow" data-network="tumblr" aria-label="Tumblr">
              <span className="ct-icon-container">
                <svg className="ct-icon" width="20" height="20" viewBox="0 0 20 20" aria-label="Tumblr Icon">
                  <path d="M18,0H2C0.9,0,0,0.9,0,2v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V2C20,0.9,19.1,0,18,0z M15,15.9c0,0,0,0.1-0.1,0.1c0,0-1.4,1-3.9,1c-3,0-3-3.6-3-4V9H6.2C6.1,9,6,8.9,6,8.8V7.2C6,7.1,6,7,6.1,7C6.1,7,9,5.7,9,3.2C9,3.1,9.1,3,9.2,3h1.7C10.9,3,11,3.1,11,3.2V7h2.8C13.9,7,14,7.1,14,7.2v1.7C14,8.9,13.9,9,13.8,9H11v4c0,0.1-0.1,1.3,1.2,1.3c1.1,0,2.5-0.3,2.5-0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0.1,0.1,0.2V15.9z" />
                </svg>
              </span><span className="ct-label hidden">Tumblr</span>				</a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>	<Menu /></Col>
        <Col span={12}>	<div>我的</div></Col>
      </Row>

    </Header>
  );
}
