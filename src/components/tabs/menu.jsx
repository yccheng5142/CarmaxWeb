import { Chip, Stack } from '@mui/material';
import { useState } from 'react';
import BaseButtonTab from 'src/components/base/styles/button-tab';

const Menu = (props) => {
  let [selectedTab,setTabSelected] = useState(0);
  const handleTabClick = (index) => {
    setTabSelected(index);

    props.onTabChange(index);
    console.log(props)
  };
  
  return (
    <Stack
      direction={{
        xs: 'row',
        sm: 'row',
      }}
      alignItems="center"
    
      justifyContent={{
        xs: 'center',
        sm: 'flex-start', // 在 sm 尺寸下将内容左对齐
      }}
    >
      <BaseButtonTab
        componentType="button"
        onClick={() => handleTabClick(0)}
        
        className = {selectedTab === 0  ? "Mui-selected" : ""}
      >
        車找商品
      </BaseButtonTab>

      <BaseButtonTab 
       componentType="button"
       onClick={() => handleTabClick(1)}
       className = {selectedTab === 1 ? "Mui-selected" : ""}
       >商品找車
       </BaseButtonTab>
    </Stack>
  );
};
export default Menu;
