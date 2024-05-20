import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $cases, fetchCasesFx } from '../models/casesStore';
import { List, Card } from 'antd';
import '../styles/CasesList.scss';

const CasesList = () => {
   const cases = useStore($cases);

   useEffect(() => {
      fetchCasesFx();
   }, []);

   return (
      <div className="cases-list">
         {Array.isArray(cases) && (
         <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={cases}
            renderItem={(item) => (
               <List.Item key={item.Id}>
                  <Card
                     hoverable
                     title={item.Title}
                     cover={<img alt={item.Title} src={item.Image} />}
                     style={{ backgroundColor: `#${item.CaseColor}` || 'white', borderColor: `#${item.CaseColor}` || 'white'}}
                  >
                     <p className='cases-list__item-features-title'>{item.FeaturesTitle || ''}</p>
                  </Card>
               </List.Item>
            )}
         />
         )}
      </div>
   );
};

export default CasesList;
