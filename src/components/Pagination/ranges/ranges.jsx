import { Card, CardContent, Divider, Pagination, Stack } from '@mui/material';
import { useState } from 'react';

const Component = (props) => {
  // console.log('Component:',props)
  // const [currentPage, setCurrentPage] = useState(1); // 初始当前页为第一页
  // const [totalPage, settotalPage] = useState(props.totalPage); // 初始当前页为第一页
  // // const [currentPage, setCurrentPage] = useState(1); // 初始当前页为第一页
  // // const [currentPage, setCurrentPage] = useState(1); // 初始当前页为第一页


  // const handlePageChange = (event, newPage) => {
  //   setCurrentPage(newPage); // 更新当前页
  //   console.log(newPage)
  //   // 这里你可以添加其他逻辑，例如获取新页面的数据等
  // };

  return (
          <Pagination
            count={props.totalPage} // 总页数
            page={props.currentPage} // 当前页数
            onChange={props.handlePageChange} // 处理分页变化的回调函数
            siblingCount={2} // 显示当前页附近的页码数
            boundaryCount={2} // 显示起始和结束页码数
          />
  );
};
export default Component;
