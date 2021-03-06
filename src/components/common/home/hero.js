import React from 'react';
import { Carousel , Button } from 'antd'; 

const items = [
    {
        key:'1',
        title:<strong>Welcome to be Routine Management</strong>,
        content:<strong>1st page of the routine management</strong>,
    },
    {
        key:'2',
        title:<strong>reate the Interactive Routine here</strong>,
        content:<strong>1st page of the routine management</strong>,
    },
    {
        key:'3',
        title:<strong>Say Bye-Bye to the Manual Tedious Working Sessions</strong>,
        content:<strong>1st page of the routine management</strong>,
    },
]

function AppHero() {
    return(
        <div id = "hero" className = "heroBlock">
  <Carousel>
      {items.map(item => {
         return(
           <div className = "container-fluid">
               <div className = "content">
                   <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    <div className = "btnHolder">
                    <Button type="primary" size = "large">login for admin</Button>
                    <Button type="primary" size = 'large'>login for teaching staffs</Button>
                    </div>
               </div>
            </div>
         );
      })}
  </Carousel>
        </div>
    );
}

export default AppHero;