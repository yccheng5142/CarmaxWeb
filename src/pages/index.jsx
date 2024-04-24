import { useState } from 'react';
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Container, Divider, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'src/components/base/helmet';
import PageHeading from 'src/components/base/page-heading';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
// import ApplicationUiTablesEmployeeStatus from 'src/application-ui/tables/employee-status/employee-status';
import CarOrderTablesListPage from 'src/components/ordertable/carOrdersTable.jsx';
import ProductOrdersTable from 'src/components/ordertable/productOrdersTable.jsx'
import ApplicationUiHorizontalMenusTabs from 'src/components/tabs/tabs.jsx';
import CarOrderCard from 'src/components/gridcard/counter-card/carOrderCard.jsx';
import ProductOrdersOrderCard from 'src/components/gridcard/counter-card/productOrdersOrderCard.jsx';

// import ApplicationUiTablesOrdersList from 'src/application-ui/tables/orders-list/orders-list';

const employeesTest = [
  {
    name: '環景影像顯示系統(ECU+線束+配件包)',
    jobFunction: 'UI Engineer, Apple Inc.',
    avatar: '/avatars/1.png',
    status: 'Pending',
    statusColor: 'warning',
  },
  {
    name: '環景影像顯示系統(四鏡頭組)',
    jobFunction: 'Frontend Developer',
    avatar: '/avatars/2.png',
    status: '噗噗中',
    statusColor: 'success',
  },
  {
    name: 'PVM錄影盒 (適用尊爵旗艦GR版)',
    jobFunction: 'Senior Project Manager',
    avatar: '/avatars/3.png',
    status: 'Declined',
    statusColor: 'error',
  },
  {
    name: 'Regan Norris123',
    jobFunction: 'Senior Project Manager',
    avatar: '/avatars/3.png',
    status: 'Declined',
    statusColor: 'error',
  },
  {
    name: 'Regan Norris123',
    jobFunction: 'Senior Project Manager',
    avatar: '/avatars/3.png',
    status: 'Declined',
    statusColor: 'error',
  },
  {
    name: 'Regan Norris123',
    jobFunction: 'Senior Project Manager',
    avatar: '/avatars/3.png',
    status: 'Declined',
    statusColor: 'error',
  },
  {
    name: 'Regan Norris123',
    jobFunction: 'Senior Project Manager',
    avatar: '/avatars/3.png',
    status: 'Declined',
    statusColor: 'error',
  },
  {
    name: 'Regan Norris123',
    jobFunction: 'Senior Project Manager',
    avatar: '/avatars/3.png',
    status: 'Declined',
    statusColor: 'error',
  },
  {
    name: 'Regan Norris123',
    jobFunction: 'Senior Project Manager',
    avatar: '/avatars/3.png',
    status: 'Declined',
    statusColor: 'error',
  },
  {
    name: 'Regan Norris123',
    jobFunction: 'Senior Project Manager',
    avatar: '/avatars/3.png',
    status: 'Declined',
    statusColor: 'error',
  },
  {
    name: 'Regan Norris123',
    jobFunction: 'Senior Project Manager',
    avatar: '/avatars/3.png',
    status: 'Declined',
    statusColor: 'error',
  },
  {
    name: 'Regan Norris123',
    jobFunction: 'Senior Project Manager',
    avatar: '/avatars/3.png',
    status: 'Declined',
    statusColor: 'error',
  },
  {
    name: 'Regan Norris123',
    jobFunction: 'Senior Project Manager',
    avatar: '/avatars/3.png',
    status: 'Declined',
    statusColor: 'error',
  },
  {
    name: 'Regan Norris123',
    jobFunction: 'Senior Project Manager',
    avatar: '/avatars/3.png',
    status: 'Declined',
    statusColor: 'error',
  },
];


const dropdownCarItems = [
  {
    itemName: '年度',
    itemNameEng: 'year',
    itemLists: ['2023', '2024', '2025']
  },
  {
    itemName: '品牌',
    itemNameEng: 'Brand',
    itemLists: ['TOYOTA', 'LEXUS',]
  },
  {
    itemName: '車型',
    itemLists:[],
    itemListsToyota: ['Rav4','COROLLA CROSS'],
    itemListsLEXUS: ['RX200','UX200'],
  },
  {
    itemName: '仕向地',
    itemNameEng: 'Location',
    itemLists: ['Taiwan', 'JP', 'test']
  },

]

const dropdownProductItems = [

  {
    itemName: '販賣類型',
    itemLists: ['PIO', 'DIO', 'ILA']
  },
  {
    itemName: '仕向地',
    itemNameEng: 'Location',
    itemLists: ['Taiwan', 'JP', 'test']
  },
  {
    itemName: '年度',
    itemNameEng: 'year',
    itemLists: ['2023', '2024', '2025']
  },
  {
    itemName: '品牌',
    itemLists: ['TOYOTA', 'LEXUS',]
  },

  {
    itemName: '車型',
    itemLists: [],
    itemListsToyota: ['Rav4', 'COROLLA CROSS'],
    itemListsLEXUS: ['RX200', 'UX200'],
  },
]


const Page = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  // const [employees,setEmployees] = useState({});
  const [isCarOrderTablesListPageOpen, setIsCarOrderTablesListPageOpen] = useState(0);
  const isMobile = useMediaQuery('(max-width:780px)');
  const [carSearchState,setCarSearchState] = useState(dropdownCarItems);

  const handleTabChange = (tabIndex) => {
    setIsCarOrderTablesListPageOpen(tabIndex);
    console.log('tabIndex:',tabIndex)
  };



  return (
    <>
      <Helmet heading="Homepage" />
      <Box
        component="main"
        flex={1}
        display="flex"
        flexDirection="column"
        py={{xs: 2,sm:3 }}
        sx={{
          backgroundImage: (theme) =>
            `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/placeholders/covers/login.jpg')`,
          backgroundSize: 'cover',
          '@media (max-width:600px)': {

            backgroundImage: 'none',
          },
        }}
      >
        
        
        <Container disableGutters maxWidth="xl">
          <PageHeading
            sx={{
              px: {
                xs: 2,
                sm: 3,
              },
              pb: {
                xs: 2,
                sm: 3,
              },
            }}
            // title="Homepage"
            // description="This is the Home page for the starter template"
            actions={
              <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* <Button
                  sx={{
                    mt: {
                      xs: 2,
                      md: 0,
                    },
                    padding: '10px 20px'
                  }}
                  variant="contained"
                  startIcon={<FileDownloadOutlinedIcon fontSize="small" />}
                  // onClick={TestClearEmepolyFunction}
                >
                  {t('Export')}
                </Button> */}
                {/* <ButtonSoft 
                 variant="contained"
                >
                  clear
                </ButtonSoft> */}
              </Box>
                
              </>
            }
            // iconBox={
            //   <AvatarState
            //     isSoft
            //     variant="rounded"
            //     state="primary"
            //     sx={{
            //       height: theme.spacing(7),
            //       width: theme.spacing(7),
            //       svg: {
            //         height: theme.spacing(4),
            //         width: theme.spacing(4),
            //         minWidth: theme.spacing(4),
            //       },
            //     }}
            //   >
            //     <ChartBarIcon />
            //   </AvatarState>
            // }
          />
          
          {/* <Divider /> */}



          {/*======================= Function ======================= */}
          {/* <Box
            px={{
              xs: 2,
              sm: 3,
            }}
            pt={{
              xs: 2,
              sm: 3,
            }}
            
          >
            <Typography
              gutterBottom
              variant="h4"
            >
              This is the Home page for the Carmax Merchandise
            </Typography>
            <Typography variant="subtitle1">

            </Typography>
          
          </Box> */}


          {/*========================Main=======================*/}
          <Box
            px={{
              xs: 1,
              sm: 0,
            }}
            pt={{
              xs: 1,
              sm: 1,
            }}

           
          >
          <ApplicationUiHorizontalMenusTabs onTabChange  = {handleTabChange} />
           
          
          {isCarOrderTablesListPageOpen ===0  &&<CarOrderCard dropdownCarItems={dropdownCarItems}/>}
          
          {isCarOrderTablesListPageOpen ===1  &&<ProductOrdersOrderCard dropdownProductItems={dropdownProductItems}/>}
          {/* {isCarOrderTablesListPageOpen ===0  && <CarOrderTablesListPage dropdownCarItems={dropdownCarItems}/>} */}
          {/* {isCarOrderTablesListPageOpen ===1  && <ProductOrdersTable dropdownProductItems={dropdownProductItems}/>} */}

          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Page;
