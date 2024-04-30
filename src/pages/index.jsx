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
import watchWindowSize from 'src/hooks/watch-windwo';
import exampleData from 'src/components/exampledata/merchandiseData';
import { initDataObject, setDataObject } from 'src/hooks/use-data-object';

// import ApplicationUiTablesOrdersList from 'src/application-ui/tables/orders-list/orders-list';


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
    itemLists: [],
    itemListsToyota: ['Rav4', 'COROLLA CROSS'],
    itemListsLEXUS: ['RX200', 'UX200'],
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


const CarOrderCurrentData = initDataObject();
const ProductOrderCurrentData = initDataObject();
const Page = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const isComputerScreen = watchWindowSize();
  const [isCarOrderTablesListPageOpen, setIsCarOrderTablesListPageOpen] = useState(0);


  // const [ProductrOrderTablesListData, setProductrOrderTablesListData] = useState([{}]);

  const [carSearchState, setCarSearchState] = useState(dropdownCarItems);

  const handleTabChange = (tabIndex) => {
    setIsCarOrderTablesListPageOpen(tabIndex);
    console.log('tabIndex:', tabIndex)
  };


  const onClickCarChangeCurrentData = (itemName, setItemData) => {

    setDataObject(CarOrderCurrentData, itemName, setItemData)
    console.log('CarOrderCurrentData:', CarOrderCurrentData)
  }

  const onClickProductChangeCurrentData = (itemName, setItemData) => {

    setDataObject(ProductOrderCurrentData, itemName, setItemData)
    console.log('ProductOrderCurrentData:', ProductOrderCurrentData)
  }
  return (
    <>

      <Helmet heading="Homepage" />

      <Box
        component="main"
        flex={1}
        display="flex"
        flexDirection="column"
        py={{ xs: 0, sm: 3 }}
        sx={{

          backgroundImage: (theme) =>
            `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/placeholders/covers/login.jpg')`,
          backgroundSize: 'cover',
          '@media (max-width:600px)': {

            backgroundImage: 'none',
          },
        }}
      >

        <Box

          sx={{
            opacity: 0.9,

            [theme.breakpoints.only('xs')]: {
              backgroundImage: (theme) =>
                `url("/placeholders/covers/login.jpg")`,
              backgroundSize: 'cover',
              filter: 'grayscale(80%)',
              backgroundSize: 'cover',
              height: '100%',
              width: '100%',
              borderRadius: 'inherit',
            },
          }}
          py={{
            xs: 4,
            sm: 0,
            lg: 6,
            xl: 8,
          }}
        >
          {/*========================Main=======================*/}

        </Box>

        <Container disableGutters maxWidth="xl">
          <ApplicationUiHorizontalMenusTabs onTabChange={handleTabChange} />

          <Box
            px={{
              xs: 1,
              sm: 0,
            }}
            pt={{
              xs: 1,
              sm: 0,
            }}

          >

            {(isComputerScreen === "computer") ?
              (
                <>
                  {isCarOrderTablesListPageOpen === 0 &&
                    <CarOrderTablesListPage
                      dropdownCarItems={dropdownCarItems}
                      currentData={CarOrderCurrentData}
                      changeCurrentData={onClickCarChangeCurrentData}
                    />
                  }
                  {isCarOrderTablesListPageOpen === 1 &&
                    <ProductOrdersTable
                      dropdownProductItems={dropdownProductItems}
                      currentData={ProductOrderCurrentData}
                      changeCurrentData={onClickProductChangeCurrentData}

                    />}
                </>
              ) :
              (
                <>
                  {isCarOrderTablesListPageOpen === 0 && <CarOrderCard dropdownCarItems={dropdownCarItems} />}
                  {isCarOrderTablesListPageOpen === 1 && <ProductOrdersOrderCard dropdownProductItems={dropdownProductItems} />}
                </>
              )
            }





            {/* {isCarOrderTablesListPageOpen === 0 && <CarOrderCard dropdownCarItems={dropdownCarItems} />} */}

            {/* {isCarOrderTablesListPageOpen === 1 && <ProductOrdersOrderCard dropdownProductItems={dropdownProductItems} />} */}
            {/* {isCarOrderTablesListPageOpen === 0 && <CarOrderTablesListPage dropdownCarItems={dropdownCarItems} />}
            {isCarOrderTablesListPageOpen === 1 && <ProductOrdersTable dropdownProductItems={dropdownProductItems} />} */}

          </Box>

        </Container>
      </Box>
    </>
  );
};
export default Page;
