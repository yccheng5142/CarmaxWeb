import { alpha, Box, Button, Card, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';

import { useState } from 'react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import ApplicationUiDropdownsBasic from 'src/application-ui/dropdowns/basic/basic';
import exampleData from 'src/components/exampledata/merchandiseData';
import TdData from 'src/components/function/tdData';
function Component(props) {

  const { t } = useTranslation();
  const theme = useTheme();
  const [carModelState, setCarModelState] = useState(props.dropdownCarItems[2].itemLists);

  const carBrandChange = (carBrand) => {
    if (carBrand === 'TOYOTA') {
      setCarModelState(props.dropdownCarItems[2].itemListsToyota);
      console.log('carBrand:', props.dropdownCarItems[2].itemListsToyota);
    } else if (carBrand === 'LEXUS') {
      setCarModelState(props.dropdownCarItems[2].itemListsLEXUS);
      console.log('carBrand:', props.dropdownCarItems[2].itemListsLEXUS);
    } else {
      setCarModelState(props.dropdownCarItems[2].itemLists);
    }
  }
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
        sx={{ width: '-webkit-fill-available' }}


      >
        {/* ============================================= */}
        <table >
          <TdData itemName={props.dropdownCarItems[0].itemName}
            itemLists={props.dropdownCarItems[0].itemLists}></TdData>

          <TdData itemName={props.dropdownCarItems[1].itemName}
            itemLists={props.dropdownCarItems[1].itemLists}
            onClickFunction={carBrandChange}></TdData>

          <TdData itemName={props.dropdownCarItems[2].itemName}
            itemLists={carModelState} ></TdData>

          <TdData itemName={props.dropdownCarItems[3].itemName}
            itemLists={props.dropdownCarItems[3].itemLists}></TdData>





          {/* {props.dropdownCarItems.map((carItem) => (
            // <Box
            //   p={1}
            //   display="flex"
            //   flexDirection="row">
            <tr style={{width: '100%' }}>
              <td style={{width: '30%' }}>

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
                  {carItem.itemName}:
                </Typography>
              </td>

              <td style={{width: '70%' }}>
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
      {/* ============================================= */}

      {exampleData.map((item) => (
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
      ))}


    </Grid>
  );
}
export default Component;
