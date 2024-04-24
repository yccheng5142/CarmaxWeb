import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useEffect } from 'react';
import {
  alpha,
  Avatar,
  Box,
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
// import ApplicationUiDropdownsAlternate from 'src/application-ui/dropdowns/alternate/alternate';
import ApplicationUiDropdownsBasic from 'src/application-ui/dropdowns/basic/basic';

const orders = [
  {
    orderNumber: '#589',
    clientName: 'Shanelle Wynn',
    clientAvatar: '/avatars/1.png',
    product: 'Apple Macbook PRO 16',
    productImage: '/placeholders/products/1.png',
    status: 'Completed',
    statusColor: 'success',
    total: '$68,492',
    customerSince: 2019,
  },
  {
    orderNumber: '#590',
    clientName: 'Brax Childs',
    clientAvatar: '/avatars/2.png',
    product: 'iPhone 15 Pro Max',
    productImage: '/placeholders/products/2.png',
    status: 'Pending',
    statusColor: 'warning',
    total: '$3,457',
    customerSince: 2020,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
   {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#589',
    clientName: 'Shanelle Wynn',
    clientAvatar: '/avatars/1.png',
    product: 'Apple Macbook PRO 16',
    productImage: '/placeholders/products/1.png',
    status: 'Completed',
    statusColor: 'success',
    total: '$68,492',
    customerSince: 2019,
  },
  {
    orderNumber: '#590',
    clientName: 'Brax Childs',
    clientAvatar: '/avatars/2.png',
    product: 'iPhone 15 Pro Max',
    productImage: '/placeholders/products/2.png',
    status: 'Pending',
    statusColor: 'warning',
    total: '$3,457',
    customerSince: 2020,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
   {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#589',
    clientName: 'Shanelle Wynn',
    clientAvatar: '/avatars/1.png',
    product: 'Apple Macbook PRO 16',
    productImage: '/placeholders/products/1.png',
    status: 'Completed',
    statusColor: 'success',
    total: '$68,492',
    customerSince: 2019,
  },
  {
    orderNumber: '#590',
    clientName: 'Brax Childs',
    clientAvatar: '/avatars/2.png',
    product: 'iPhone 15 Pro Max',
    productImage: '/placeholders/products/2.png',
    status: 'Pending',
    statusColor: 'warning',
    total: '$3,457',
    customerSince: 2020,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
   {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#589',
    clientName: 'Shanelle Wynn',
    clientAvatar: '/avatars/1.png',
    product: 'Apple Macbook PRO 16',
    productImage: '/placeholders/products/1.png',
    status: 'Completed',
    statusColor: 'success',
    total: '$68,492',
    customerSince: 2019,
  },
  {
    orderNumber: '#590',
    clientName: 'Brax Childs',
    clientAvatar: '/avatars/2.png',
    product: 'iPhone 15 Pro Max',
    productImage: '/placeholders/products/2.png',
    status: 'Pending',
    statusColor: 'warning',
    total: '$3,457',
    customerSince: 2020,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
   {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#589',
    clientName: 'Shanelle Wynn',
    clientAvatar: '/avatars/1.png',
    product: 'Apple Macbook PRO 16',
    productImage: '/placeholders/products/1.png',
    status: 'Completed',
    statusColor: 'success',
    total: '$68,492',
    customerSince: 2019,
  },
  {
    orderNumber: '#590',
    clientName: 'Brax Childs',
    clientAvatar: '/avatars/2.png',
    product: 'iPhone 15 Pro Max',
    productImage: '/placeholders/products/2.png',
    status: 'Pending',
    statusColor: 'warning',
    total: '$3,457',
    customerSince: 2020,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
   {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#589',
    clientName: 'Shanelle Wynn',
    clientAvatar: '/avatars/1.png',
    product: 'Apple Macbook PRO 16',
    productImage: '/placeholders/products/1.png',
    status: 'Completed',
    statusColor: 'success',
    total: '$68,492',
    customerSince: 2019,
  },
  {
    orderNumber: '#590',
    clientName: 'Brax Childs',
    clientAvatar: '/avatars/2.png',
    product: 'iPhone 15 Pro Max',
    productImage: '/placeholders/products/2.png',
    status: 'Pending',
    statusColor: 'warning',
    total: '$3,457',
    customerSince: 2020,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
   {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#589',
    clientName: 'Shanelle Wynn',
    clientAvatar: '/avatars/1.png',
    product: 'Apple Macbook PRO 16',
    productImage: '/placeholders/products/1.png',
    status: 'Completed',
    statusColor: 'success',
    total: '$68,492',
    customerSince: 2019,
  },
  {
    orderNumber: '#590',
    clientName: 'Brax Childs',
    clientAvatar: '/avatars/2.png',
    product: 'iPhone 15 Pro Max',
    productImage: '/placeholders/products/2.png',
    status: 'Pending',
    statusColor: 'warning',
    total: '$3,457',
    customerSince: 2020,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
  {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
   {
    orderNumber: '#591',
    clientName: 'Amin Waller',
    clientAvatar: '/avatars/3.png',
    product: 'Apple TV Gen. 5',
    productImage: '/placeholders/products/3.png',
    status: 'Failed',
    statusColor: 'error',
    total: '$7,584',
    customerSince: 2017,
  },
];
const dropdownCarItems=[
  {
   itemName: '年度',
   itemNameEng: 'year',
   itemLists: ['2023','2024','2025']
  },
  {
   itemName: '品牌',
   itemNameEng: 'Brand',
   itemLists: ['Toyota','LEXUS',]
  },
  {
   itemName: '車型',
   itemNameEng: 'CarNMT',
   itemBrand:'Toyota',
   itemLists: ['Rva4','COROLLA CROSS']
  },
  {
   itemName: '車型',
   itemNameEng: 'CarNML',
   itemBrand:'LEXUS',
   itemLists: ['RX200','UX200']},
  {
   itemName: '仕向地',
   itemNameEng: 'Location',
   itemLists: ['Taiwan','JP','test']
  },
  
]
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



function Component() {
  const initPage = 0;
  let SliceOrders = [];
  const { t } = useTranslation();
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rowsPerPageOrder, setRowsPerPageOrder] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    handleChangePageOrder();
  }, [page,rowsPerPage]); // 空数组作为依赖项，表示仅在组件挂载时运行一次



  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    // console.log(window.innerWidth)
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
  }, []); // 空数组作为依赖项，表示仅在组件挂载时运行一次

  const handleChangePage = (_event, newPage) => {
    // console.log('handleChangePage');
    setPage(newPage);
    console.log(newPage);
  };
  const handleChangePageOrder = ()=>{
    if (orders.length>10){
      const startIndex = page * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
      SliceOrders = orders.slice(startIndex, endIndex);
      setRowsPerPageOrder(SliceOrders);
      // console.log({SliceOrders});
    }

  }


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    console.log(parseInt(event.target.value, 10));
  };



  return (
    <Card>
      <Box
        p={2}
        flex={1}
        display="flex"
        flexDirection="row"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        {/* ============================================= */}
        {dropdownCarItems.map((carItem) => (
          <Box 
            p={1}
            display="flex"
            flexDirection="row">
            <Typography
              sx= {{ color: 'red', fontSize: '2em', paddingRight: '10px',paddingTop: '8px'}}
            >

            {carItem.itemName}:
            </Typography>
            <ApplicationUiDropdownsBasic carItem = {carItem}/>
          </Box>
          ))
        }
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
                <TableCell align="left">{t('年度')}</TableCell>
                <TableCell align="left">{t('品牌')}</TableCell>
                <TableCell align="center">{t('料號')}</TableCell>
                <TableCell align="center">{t('品項')}</TableCell>
                <TableCell align="right">{t('販賣類型')}</TableCell>
              </TableRow>
            </TableHeadWrapper>
            <TableBody>
              {rowsPerPageOrder.map((order, index) => (
                <React.Fragment key={index}>
                  <TableRow hover>
                    <TableCell>
                      <Box>
                        <Typography variant="h5">{order.orderNumber}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
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
          <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}

            slotProps={{
              select: {
                variant: 'outlined',
                size: 'small',
                sx: {
                  p: 0,
                },
              },
            }}
          />
        </Box>
      </Box>
    </Card>
  );
}
export default Component;
