// import React from 'react';
import React, { useState } from 'react';

import { Anchor , Drawer, Button } from 'antd';

const { Link } = Anchor;

function AppHeader() {

    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

    return(
        <div className = "container-fluid">
            <div className = "header">
            <div className="logo" />
            <a href = "https://www.assignmentpoint.com/business/management/routine-management-system-for-department-of-computer-science-and-engineering.html">BE ROUTINE MANAGEMENT</a>

        <div className = 'mobileHidden'>
        <Anchor targetOffset = '65'>
    <Link href="#hero" title="HOME"/>
    <Link href="#about" title="ABOUT"/> 
    <Link href="#feature" title="FEATURES"/>
    <Link href="#faq" title="FAQ"/>
    <Link href="#contact" title="CONTACT"/>
  </Anchor>

        </div> 

        <div className = 'mobileVisible'>
        <Button type="primary" onClick={showDrawer}>
        <i class="fas fa-bars"></i>
      </Button>
      <Drawer
        
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
         <Anchor targetOffset = '65'>
    <Link href="#hero" title="HOME"/>
    <Link href="#about" title="ABOUT"/> 
    <Link href="#feature" title="FEATURES"/>
    <Link href="#faq" title="FAQ"/>
    <Link href="#contact" title="CONTACT"/>
  </Anchor>
      </Drawer>
        </div>
      </div>
    </div>
    );
}

export default AppHeader;
