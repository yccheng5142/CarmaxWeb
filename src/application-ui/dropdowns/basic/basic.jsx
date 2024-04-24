import { Button, Divider, Stack } from '@mui/material';
import BasicDropdown from './basic-dropdown';
import RightAlignedDropdown from './right-aligned-dropdown';

const Component = (props) => {
  // console.log('props:', props);
  // console.log('Basic labelName:', props.labelName);
  // console.log('Basic dropDownList:', props.dropDownList);

  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{
          xs: 1,
          sm: 3,
        }}
        alignItems="center"
        direction={{
          xs: 'column',
          sm: 'row',
        }}
      >
        
        <BasicDropdown {...props}/>
      </Stack>
      <Divider
        sx={{
          my: {
            xs: 1,
            sm: 3,
          },
        }}
      />
      
      <Stack
        justifyContent="space-around"
        spacing={{
          xs: 2,
          sm: 3,
        }}
        alignItems="center"
        direction={{
          xs: 'column',
          sm: 'row',
        }}
      >
        {/* <RightAlignedDropdown /> */}
        
      </Stack>
    </>
  );
};
export default Component;
