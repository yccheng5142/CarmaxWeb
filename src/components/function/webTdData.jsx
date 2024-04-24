import react from "@heroicons/react";
import ApplicationUiDropdownsBasic from 'src/application-ui/dropdowns/basic/basic';
import { alpha, Box, Button, Card, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';

const WebTdData = ({ itemName, itemLists, onClickFunction }) => {
    const dropDownProps = onClickFunction ? { dropDownClick: onClickFunction } : {};
    return (
        // <>
        //     <tr style={{ width: '100%' }}>
        //         <td style={{ width: '70%' }}>
        //             <Typography
        //                 sx={{ color: 'red', fontSize: '2em', paddingRight: '10px', paddingTop: '8px' }}
        //             >
        //                 {itemName}:
        //             </Typography>
        //         </td>
        //         <td style={{ width: '30%' }}>
        //             <ApplicationUiDropdownsBasic
        //                 labelName={itemName}
        //                 dropDownList={itemLists}
        //                 {...dropDownProps}
        //             />
        //         </td>
        //     </tr>

        // </>
        <>
            <Box
                p={1}
                display="flex"
                flexDirection="row">
                <Typography
                    sx={{ color: 'red', fontSize: '2em', paddingRight: '10px', paddingTop: '8px' }}
                >
                    {itemName}:
                </Typography>
                <ApplicationUiDropdownsBasic
                    labelName={itemName}
                    dropDownList={itemLists}
                    {...dropDownProps}
                />
            </Box>

        </>
    )


}
export default WebTdData;