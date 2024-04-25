import { alpha, Box, Button, Card, Unstable_Grid2 as Grid, TextField, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import ApplicationUiDropdownsBasic from 'src/application-ui/dropdowns/basic/basic';
import TdData from 'src/components/function/tdData';
import exampleData from 'src/components/exampledata/merchandiseData';
import ApplicationUiStackedListsOpenTickets from 'src/components/mobileCarTickets/open-tickets.jsx'

function Component(props) {

  const { t } = useTranslation();
  const theme = useTheme();


  const [carModelState, setCarModelState] = useState(props.dropdownProductItems[4].itemLists);

  const [inputProductValue, setInputProductValue] = useState('');
  // ==================================Function==================================
  const handleInputProductChange = (event) => {
    setInputProductValue(event.target.value); // 更新狀態，保存輸入的值
    // console.log(event.target.value);
  };

  const gridFunction = () => {
    <Grid
      xs={12}
      sm={6}
      lg={3}
    >
      <Card
        sx={{
          p: 2,
          boxShadow: `
                0 0.47rem 2.2rem ${alpha(theme.palette.warning.main, 0.04)}, 
                0 0.94rem 1.4rem ${alpha(theme.palette.warning.main, 0.04)}, 
                0 0.25rem 0.54rem ${alpha(theme.palette.warning.main, 0.06)}, 
                0 0.13rem 0.19rem ${alpha(theme.palette.warning.main, 0.04)}`,
        }}
      >
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          {t('Spendings')}
        </Typography>
        <Box
          pt={1.5}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.warning.main,
            }}
          >
            <CountUp
              start={0}
              end={18.564}
              duration={6}
              separator=""
              delay={2}
              decimals={3}
              decimal=","
              prefix="$"
              suffix=""
            />
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.warning.main,
            }}
          >
            +3.25%
          </Typography>
        </Box>
      </Card>
    </Grid>
  }
  const carBrandChange = (carBrand) => {
    if (carBrand === 'TOYOTA') {
      setCarModelState(props.dropdownProductItems[4].itemListsToyota);
      console.log('carBrand:', props.dropdownProductItems[4].itemListsToyota);
    } else if (carBrand === 'LEXUS') {
      setCarModelState(props.dropdownProductItems[4].itemListsLEXUS);
      console.log('carBrand:', props.dropdownProductItems[4].itemListsLEXUS);
    } else {
      setCarModelState(props.dropdownProductItems[4].itemLists);
    }

  }

  return (

    <Grid
      container
      spacing={{
        xs: 1,
        sm: 3,
      }}

    >
      <Box
        p={1}
        display="flex"

        flexDirection="column"
        justifyContent="flex-start"
        sx={{ width: '-webkit-fill-available', }}
      >

        <Typography
          sx={{
            color: 'black',
            fontSize: '2em',
            paddingRight: '10px',
            width: '100%', // 让 Typography 宽度与父元素相同
            whiteSpace: 'nowrap', // 防止文本换行
            
          }}
        >
          品項查詢:
        </Typography>
        <TextField 
          id="ProductSearch" 
          
          label={
            <span style={{ fontSize: '20px'}}>請填寫(輸入關鍵字)</span> // 设置 label 的样式
           } 
          variant="outlined"
          onChange={handleInputProductChange} // 設置輸入變化時的回調函數
          value={inputProductValue} // 將輸入的值設置為組件的狀態
          py={1}
          InputProps={{
            style: { fontSize: '20px', } // 調整文字大小為 20 像
          }}
          sx={{  paddingBottom: '20px'}}
        />

        {/* ============================================= */}
        <table >
          <TdData itemName={props.dropdownProductItems[0].itemName}
            itemLists={props.dropdownProductItems[0].itemLists}></TdData>

          <TdData itemName={props.dropdownProductItems[1].itemName}
            itemLists={props.dropdownProductItems[1].itemLists}
          ></TdData>


          <TdData itemName={props.dropdownProductItems[2].itemName}
            itemLists={props.dropdownProductItems[2].itemLists} ></TdData>

          <TdData itemName={props.dropdownProductItems[3].itemName}
            itemLists={props.dropdownProductItems[3].itemLists}
            onClickFunction={carBrandChange}></TdData>

          <TdData itemName={props.dropdownProductItems[4].itemName}
            itemLists={carModelState} ></TdData>
          {/* {props.dropdownProductItems.map((carItem) => (
            // <Box
            //   p={1}
            //   display="flex"
            //   flexDirection="row">
            <tr style={{ width: '100%' }}>
              <td style={{ width: '30%' }}>
                <Typography
                  sx={{ 
                    color: 'red', 
                    fontSize: '2em', 
                    paddingRight: '1px', 
                    paddingBottom: '20px',
                    width: '100%', // 让 Typography 宽度与父元素相同
                    whiteSpace: 'nowrap', // 防止文本换行
                  }}
                >
                  {carItem.itemName}:
                </Typography>
              </td>

              <td style={{ width: '70%' }}>
                <ApplicationUiDropdownsBasic
                  labelName={carItem.itemName}
                  dropDownList={carItem.itemLists}
                />
              </td>
            </tr>

            // </Box>

          ))
          } */}
        </table>
        <Box
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              fontSize: '1.5em',
              padding: '10px 40px', // 调整按钮内边距
              borderRadius: '10px', // 设置按钮的边框半径以呈现圆角矩形形状
              mr: 1, // 添加右侧间距
            }}
          >清除
          </Button>
          <Box marginLeft={1} /> {/* 这里添加了间隔 */}
          <Button
            variant="contained"
            size="small"
            sx={{
              fontSize: '1.5em',
              padding: '2px 40px', // 调整按钮内边距
              borderRadius: '10px', // 设置按钮的边框半径以呈现圆角矩形形状
              mr: 1, // 添加右侧间距
            }}
          >
            搜尋
          </Button>
        </Box>



      </Box>


      <Grid
          xs={12}
          sm={6}
          lg={3}
      >

        <ApplicationUiStackedListsOpenTickets Data= {exampleData}>

        </ApplicationUiStackedListsOpenTickets>
      </Grid>
      {/* {exampleData.map((item) => (
        <Grid
          xs={12}
          sm={6}
          lg={3}
        >

          <Card
            sx={{
              p: 1,
              boxShadow: `
                      0 0.47rem 2.2rem ${alpha(theme.palette.success.main, 0.04)}, 
                      0 0.94rem 1.4rem ${alpha(theme.palette.success.main, 0.04)}, 
                      0 0.25rem 0.54rem ${alpha(theme.palette.success.main, 0.06)}, 
                      0 0.13rem 0.19rem ${alpha(theme.palette.success.main, 0.04)}`,
            }}
          >

            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t(item.Year)}    {t(item.CarModelName)}
            </Typography>

            <Box
              pt={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >

              <Box
                display="flex"
                flexDirection="column" // 设置为 column 方向
                alignItems="flex-start"
                justifyContent="space-between"
                width="50%" // 设置宽度为50%
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: '#14191e', //black
                    textAlign: 'left', // 文本左对齐
                  }}
                >
                  {t(item.ProductName)}
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#14191e', //black
                  }}
                >
                  {t(item.ProductNo)}
                </Typography>
              </Box>

              <Box
                pt={1}
                display="flex"

                alignItems="center"
                justifyContent="flex-end"
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'success.main',
                  }}
                >
                  {t(item.SellType)} {t(item.SaleLoction)}
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))} */}
    </Grid>
  );
}
export default Component;
