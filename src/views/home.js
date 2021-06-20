import React from 'react';

import AppHero from '../components/common/home/hero';
import AppAbout from '../components/common/home/about'; 
import AppFeature from '../components/common/home/feature';
import AppFaq from '../components/common/home/faq';
import AppContact from '../components/common/home/contact';


function AppHome() {
    return(
       <div className = "main">
           <AppHero/>
           <AppAbout/>
           <AppFeature/>
           <AppFaq/>
           <AppContact/>
       </div>
    );
}

export default AppHome;