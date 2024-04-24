import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { Button, Menu, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';







const BasicDropdown = (props) => {
  // console.log('BasicDropdown props:',props);
  let {labelName,dropDownList} = props
  // console.log('BasicDropdown props:', props);
  // console.log('BasicDropdown labelNames:', props.props.labelName);
  // console.log('BasicDropdown dropDownList:', props.props.dropDownList);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');

  
  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setSelectedItem(event.currentTarget.innerText); // 更新選擇的內容
  
    console.log('basic:',event.currentTarget.innerText);
    
    
    if (props.labelName === '品牌'){
      
      props.dropDownClick(event.currentTarget.innerText);
      
      if (event.currentTarget.innerText === ''){
        console.log('innerText:');
      }

    }
    setAnchorEl(null);
  };


  return (
    <>
      <Button
        id={ labelName}
        variant="outlined"
        color="secondary"
        endIcon={<KeyboardArrowDownTwoToneIcon />}
        aria-controls={open ? 'settings-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disabled={dropDownList.length === 0}
        onClick={handleClick}
        sx={{
          width: '100%', // 设置按钮宽度为父元素的100%
        }}
      >
        {selectedItem.length ? selectedItem: '請選擇'} {/* 如果没有选择内容，则显示默认文字 */}
        {/* {selectedItem || '請選擇'} 如果沒有選擇內容，則顯示預設文字 */}
      </Button>

      
      <Menu
        id = { labelName}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'settings-button',
        }}
      >
        { dropDownList.map((item) => (
          <MenuItem
            // selected={item === '2023'}
            key={item}
            onClick={handleClose} 
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>


  );
};
export default BasicDropdown;
