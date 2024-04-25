import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useEffect } from 'react';
import WebTdData from '../function/webTdData';
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
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TableRowDivider, TableWrapper } from 'src/components/base/styles/table';
import exampleData from '../exampledata/merchandiseData';
import PaginationRange from 'src/components/Pagination/ranges/ranges.jsx'
// import ApplicationUiDropdownsAlternate from 'src/application-ui/dropdowns/alternate/alternate';
// import ApplicationUiDropdownsBasic from 'src/application-ui/dropdowns/basic/basic';
// import ApplicationUiButtonsPrimary from 'src/application-ui/buttons/primary/primary';



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


  const [dropdownCarItems, setDropdownCarItems] = useState(props.dropdownCarItems);
  const [carModelState, setCarModelState] = useState(props.dropdownCarItems[2].itemLists);
  const [currentBrand, setCurrentBrand] = useState("");
  useEffect(() => {
    handleChangePageOrder();
  }, [currentPage]); // 空数组作为依赖项，表示仅在组件挂载时运行一次

  // 點選車型 給予不同車型的LIST

  const carBrandChange = (carBrand) => {
    if (carBrand !== currentBrand) {
      console.log('carBrandChange');
      setCarModelState([]);
    }

    if (carBrand === 'TOYOTA') {
      setCurrentBrand(carBrand);
      setCarModelState(props.dropdownCarItems[2].itemListsToyota);
      console.log('carBrand:', props.dropdownCarItems[2].itemListsToyota);
    } else if (carBrand === 'LEXUS') {
      setCurrentBrand(carBrand);
      setCarModelState(props.dropdownCarItems[2].itemListsLEXUS);
      console.log('carBrand:', props.dropdownCarItems[2].itemListsLEXUS);
    } else {
      setCurrentBrand("");
      setCarModelState(props.dropdownCarItems[2].itemLists);
    }
  }

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    // console.log(window.innerWidth)
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

  return (
    <Card
    >
      <Box
        p={1}
        flex={1}
        display="flex"
        flexDirection="row"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[50], 0.02) : 'neutral.25',
            
        }}
      >
        <Box display="flex"
          flexDirection="row"
          justifyContent="flex-start"
        >

          <WebTdData itemName={props.dropdownCarItems[0].itemName}
            itemLists={props.dropdownCarItems[0].itemLists}></WebTdData>

          <WebTdData itemName={props.dropdownCarItems[1].itemName}
            itemLists={props.dropdownCarItems[1].itemLists}
            onClickFunction={carBrandChange}></WebTdData>

          <WebTdData itemName={props.dropdownCarItems[2].itemName}
            itemLists={carModelState} ></WebTdData>

          <WebTdData itemName={props.dropdownCarItems[3].itemName}
            itemLists={props.dropdownCarItems[3].itemLists}></WebTdData>


          {/* ============================================= */}

          {/* {props.dropdownCarItems.map((carItem) => (
              <Box 
                p={1}
                display="flex"
                flexDirection="row">
                <Typography
                  sx= {{ color: 'red', fontSize: '2em', paddingRight: '10px',paddingTop: '8px'}}
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
          p={1}
          flex={1}
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Button
            variant="contained"
            size="medium"

            p={3}
            sx={{
              
              mt: {
                xs: 2,
                md: 0,
              },
              padding: '1px 20px'
            }}
          >
            <Typography variant="h5">清除</Typography>
            
          </Button>
          <Box marginLeft={1} /> {/* 这里添加了间隔 */}
          <Button
            variant="contained"
            size="medium"
            p={4}
            sx={{
              mt: {
                xs: 2,
                md: 0,
              },
              padding: '1px 20px'
            }}
          >
            <Typography variant="h5">搜尋</Typography>
          </Button>
        </Box>


        {/* ============================================= */}

      </Box>
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
                <TableCell>{t('年度')}</TableCell>
                <TableCell>{t('品牌')}</TableCell>
                <TableCell>{t('車型')}</TableCell>
                <TableCell>{t('料號')}</TableCell>
                <TableCell>{t('品項')}</TableCell>
                <TableCell>{t('販賣類型')}</TableCell>
                <TableCell>{t('仕向地')}</TableCell>

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

                    {/* <TableCell>
                      <Box
                        display="flex"
                        alignItems="center"
                      >
                        <Avatar
                          sx={{
                            background:
                              theme.palette.mode === 'dark'
                                ? alpha(theme.palette.neutral[300], 0.2)
                                : alpha(theme.palette.neutral[300], 0.2),
                            color:
                              theme.palette.mode === 'dark'
                                ? theme.palette.neutral[700]
                                : theme.palette.neutral[700],
                            width: 50,
                            height: 50,
                          }}
                          src={order.clientAvatar}
                        />
                        <Box pl={1}>
                          <Link
                            href=""
                            onClick={(e) => e.preventDefault()}
                            color="text.primary"
                            underline="none"
                            noWrap
                            variant="h5"
                            sx={{
                              '&:hover': {
                                color: theme.palette.primary.main,
                              },
                            }}
                          >
                            {order.clientName}
                          </Link>
                          <Typography
                            variant="subtitle2"
                            noWrap
                            color="text.secondary"
                          >
                            {`Customer since ${order.customerSince}`}
                          </Typography>
                        </Box>
                      </Box>

                    </TableCell>
                    <TableCell>
                      <Box
                        display="flex"
                        alignItems="center"
                      >
                        <Avatar
                          variant="rounded"
                          sx={{
                            height: 'auto',
                            width: 80,
                            background: 'transparent',
                          }}
                          src={order.productImage}
                        />
                        <Box pl={1}>
                          <Link
                            href=""
                            onClick={(e) => e.preventDefault()}
                            color="text.primary"
                            underline="none"
                            noWrap
                            variant="h"
                            sx={{
                              '&:hover': {
                                color: theme.palette.primary.main,
                              },
                            }}
                          >
                            {order.product}
                          </Link>
                          <Typography
                            variant="subtitle2"
                            noWrap
                            color="text.secondary"
                          >
                            {t('In stock')}: <b>3</b>
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        label={order.status}
                        color={order.statusColor}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <div>
                        <Typography
                          sx={{
                            pr: 0.5,
                          }}
                          component="span"
                          variant="h4"
                          color="text.primary"
                        >
                          {order.total}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      <Box flex={1}>
                        <Tooltip
                          title={t('View')}
                          arrow
                        >
                          <IconButtonWrapper
                            sx={{
                              backgroundColor: alpha(theme.palette.primary.main, 0.1),
                              color: theme.palette.primary.main,
                              '&:hover': {
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                              },
                            }}
                          >
                            <LaunchTwoToneIcon fontSize="small" />
                          </IconButtonWrapper>
                        </Tooltip>
                        <Tooltip
                          title={t('Delete')}
                          arrow
                        >
                          <IconButtonWrapper
                            sx={{
                              ml: 1,
                              backgroundColor: alpha(theme.palette.error.main, 0.1),
                              color: theme.palette.error.main,
                              '&:hover': {
                                backgroundColor: theme.palette.error.main,
                                color: theme.palette.error.contrastText,
                              },
                            }}
                          >
                            <DeleteTwoToneIcon fontSize="small" />
                          </IconButtonWrapper>
                        </Tooltip>
                      </Box>
                    </TableCell>
                     */}
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

          ></PaginationRange>
        </Box>
      </Box>
    </Card>
  );
}
export default Component;
