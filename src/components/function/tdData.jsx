import react from "@heroicons/react";
import { Typography } from "@mui/material";
import ApplicationUiDropdownsBasic from 'src/application-ui/dropdowns/basic/basic';

const TdData = ({ itemName, itemLists,onClickFunction}) => {
    const dropDownProps = onClickFunction ? { dropDownClick: onClickFunction } : {};

    return (
      <>
        <tr style={{ width: '100%' }}>
          <td style={{ width: '30%' }}>
            <Typography
              sx={{
                color: 'red',
                fontSize: '2em',
                paddingRight: '1px',
                paddingBottom: '20px',
                width: '100%', // 让 Typography 宽度与父元素相同
                whiteSpace: 'nowrap', // 防止文本换行 '20px' 
              }}
            >
              {itemName}:
            </Typography>
          </td>

          <td style={{ width: '70%' }}>
            <ApplicationUiDropdownsBasic
              labelName={itemName}
              dropDownList={itemLists}
              {...dropDownProps} // 使用展开运算符将条件逻辑应用到组件属性

            />
          </td>

        </tr>
      </>

    )
  }
export default TdData;