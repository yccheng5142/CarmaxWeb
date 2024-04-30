import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useEffect } from 'react';
import WebTdData from '../function/webTdData';
import exampleData from '../exampledata/merchandiseData';
import PaginationRange from 'src/components/Pagination/ranges/ranges.jsx'
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  paginationClasses,
  styled,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  useTheme,
  Grid,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TableRowDivider, TableWrapper } from 'src/components/base/styles/table';
// import ApplicationUiDropdownsAlternate from 'src/application-ui/dropdowns/alternate/alternate';
import ApplicationUiDropdownsBasic from 'src/application-ui/dropdowns/basic/basic';
import ApplicationUiButtonsPrimary from 'src/application-ui/buttons/primary/primary';


const IconButtonWrapper = styled(IconButton)(() => ({
  transform: 'scale(1)',
  transformOrigin: 'center',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));
const TableHeadWrapper = styled(TableHead)(({ theme }) => ({
  '.MuiTableCell-root': {
    textTransform: 'none',
    fontWeight: 'normal',
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[400] : theme.palette.neutral[800],
    fontSize: theme.typography.pxToRem(16),
    padding: theme.spacing(2),
    background: 'transparent',
  },
  '.MuiTableRow-root': {
    background: 'transparent',
  },
}));
const SearchInputWrapper = styled(TextField)(({ theme }) => ({
  background: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  '.MuiInputBase-input': {
    fontSize: theme.typography.pxToRem(16),
    padding: theme.spacing(2, 2, 2, 1),
  },
  '.MuiInputAdornment-positionStart': {
    marginTop: '3px !important',
  },
}));



function Component(props) {
  const initPage = 0;
  let SliceOrders = [];
  const { t } = useTranslation();
  const theme = useTheme();
  const [currentPage, setCurrentPagePage] = useState(0);
  const [totalPage, setTotalPage] = useState(exampleData.length);

  const [rowsPerPageOrder, setRowsPerPageOrder] = useState([]);
  const [inputProductValue, setInputProductValue] = useState('');
  const [carModelState, setCarModelState] = useState(props.dropdownProductItems[4].itemLists);
  // console.log('1223')
  // ==================================useEffect==================================
  useEffect(() => {
    handleChangePageOrder();
  }, [currentPage]); // 空数组作为依赖项，表示仅在组件挂载时运行一次


  // ==================================Function==================================
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
  const handleInputProductChange = (event) => {
    setInputProductValue(event.target.value); // 更新狀態，保存輸入的值
    console.log(event.target.value);
  };

  const handleChangePage = (_event, newPage) => {
    // console.log('handleChangePage');
    setCurrentPagePage(newPage);

  };


  const handleChangePageOrder = () => {
    if (exampleData.length > 10) {
      const startIndex = page * 10;
      const endIndex = startIndex + 10;
      SliceOrders = exampleData.slice(startIndex, endIndex);
      setRowsPerPageOrder(SliceOrders);
      // console.log({SliceOrders});
    } else {
      SliceOrders = exampleData.slice(0, 10);
      setRowsPerPageOrder(SliceOrders);
    }

  }



  // ==================================Main==================================

  return (
    <Card>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Box
            flex={1}
            display="flex"
            flexDirection="row"
            alignItems="center"
            paddingLeft={1}
            paddingTop={2}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
            }}
          >

            <Typography
              sx={{
                color: 'black',
                fontSize: '1.5em',
                paddingRight: '10px'
              }}
            >
              品項查詢:
            </Typography>

            <TextField
              id="ProductSearch"
              label={
                <span style={{ fontSize: '20px' }}>請填寫(輸入關鍵字)</span> // 设置 label 的样式
              }
              variant="outlined"
              onChange={handleInputProductChange} // 設置輸入變化時的回調函數
              value={inputProductValue} // 將輸入的值設置為組件的狀態
              InputProps={{
                style: { fontSize: '8px', width: '460px' }
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            flex={1}
            display="flex"
            flexDirection="row"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
            }}
          >
            <Box display="flex"
              flexDirection="row"
              justifyContent="flex-start"
            >

              {/* ============================================= */}
              <WebTdData itemName={props.dropdownProductItems[0].itemName}
                itemLists={props.dropdownProductItems[0].itemLists}
                currentData={props.currentData}
                onClickCurrentData={props.changeCurrentData}

              ></WebTdData>

              <WebTdData itemName={props.dropdownProductItems[1].itemName}
                itemLists={props.dropdownProductItems[1].itemLists}
                currentData={props.currentData}
                onClickCurrentData={props.changeCurrentData}
              ></WebTdData>


              <WebTdData itemName={props.dropdownProductItems[2].itemName}
                itemLists={props.dropdownProductItems[2].itemLists}
                currentData={props.currentData}
                onClickCurrentData={props.changeCurrentData}
              ></WebTdData>

              <WebTdData itemName={props.dropdownProductItems[3].itemName}
                itemLists={props.dropdownProductItems[3].itemLists}
                onClickFunction={carBrandChange}
                currentData={props.currentData}
                onClickCurrentData={props.changeCurrentData}
              ></WebTdData>

              <WebTdData itemName={props.dropdownProductItems[4].itemName}
                itemLists={carModelState}
                currentData={props.currentData}
                onClickCurrentData={props.changeCurrentData}
              ></WebTdData>
              {/* {dropdownCarItems.map((carItem) => (
              <Box 
                p={1}
                display="flex"
                flexDirection="row"
                alignItems="center">
                <Typography
                  sx= {{ color: 'red', fontSize: '1.5em', paddingRight: '10px',paddingTop: '8px'}}
                >
                {carItem.itemName}:
                </Typography>
                <ApplicationUiDropdownsBasic  
                 labelName = {carItem.itemName} 
                 dropDownList = {carItem.itemLists} 
                />
              </Box>
              ))
          } */}
            </Box>

            <Box
              display="flex"
              p={2}
              flex={1}
              flexDirection="row"
              justifyContent="flex-end"
            >
              <Button
                variant="contained"
                size="medium"
                p={3}
                sx={{
                  fontSize: '2em',
                  mt: {
                    xs: 2,
                    md: 0,
                  },
                  padding: '0px 20px',
                  minWidth: '10px' // 设置按钮的最小宽度
                }}

              >
                <Typography variant="h4">清除</Typography>

              </Button>

              <Box marginLeft={1} /> {/* 这里添加了间隔 */}

              <Button
                variant="contained"
                size="medium"
                p={3}
                sx={{
                  fontSize: '2em',
                  mt: {
                    xs: 2,
                    md: 0,
                  },
                  padding: '0px 20px'
                }}
              >
                <Typography variant="h4">搜尋</Typography>

              </Button>
            </Box>


            {/* ============================================= */}

          </Box>
        </Grid>
      </Grid>


      <Divider />

      <Box
        px={2}
        pb={2}
      >
        <TableContainer>
          <TableWrapper>
            <TableHeadWrapper>
              <TableRow>
                <TableCell>{t('流水號')}</TableCell>
                <TableCell>{t('品項')}</TableCell>
                <TableCell>{t('販賣類型')}</TableCell>
                <TableCell>{t('仕向地')}</TableCell>
                <TableCell>{t('年度')}</TableCell>
                <TableCell>{t('品牌')}</TableCell>
                <TableCell>{t('車型')}</TableCell>
                <TableCell>{t('料號')}</TableCell>

              </TableRow>
            </TableHeadWrapper>
            <TableBody>
              {rowsPerPageOrder.map((order, index) => (
                <React.Fragment key={index}>
                  <TableRow hover>
                    <TableCell>
                      <Box>
                        <Typography variant="h5">{order.CarModelId}</Typography>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Box>
                        <Typography variant="h5">{order.Year}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="h5">{order.CarBrand}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="h5">{order.CarModelName}</Typography>
                      </Box>
                    </TableCell>



                    <TableCell>
                      <Box>
                        <Typography variant="h5">{order.ProductNo}</Typography>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Box>
                        <Typography variant="h5">{order.ProductName}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="h5">{order.SellType}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="h5">{order.SaleLoction}</Typography>
                      </Box>
                    </TableCell>





                  </TableRow>
                  <TableRowDivider />
                </React.Fragment>
              ))}
              <TableRowDivider />
            </TableBody>
          </TableWrapper>
        </TableContainer>
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{
            '.MuiTablePagination-select': {
              py: 0.55,
            },
          }}
        >
          <PaginationRange
            count={totalPage}
            page={currentPage}
            onPageChange={handleChangePage}
          //  onRowsPerPageChange={handleChangeRowsPerPage}
          ></PaginationRange>
          {/* <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={10}
            onRowsPerPageChange={handleChangeRowsPerPage}

            // slotProps={{
            //   select: {
            //     variant: 'outlined',
            //     size: 'small',
            //     sx: {
            //       p: 0,
            //     },
            //   },
            // }}
          /> */}
        </Box>
      </Box>
    </Card>
  );
}
export default Component;
