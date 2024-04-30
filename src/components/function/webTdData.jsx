import react from "@heroicons/react";
import ApplicationUiDropdownsBasic from 'src/application-ui/dropdowns/basic/basic';
import { alpha, Box, Button, Card, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';

const WebTdData = ({ itemName, itemLists, onClickFunction,onClickCurrentData,currentData }) => {
    const dropDownProps = onClickFunction ? { dropDownClick: onClickFunction } : {};
    return (

        <>
            <Box
                p={1}
                display="flex"
                flexDirection="row"
                alignItems="center" // 垂直对齐
            >
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: '1.5em',
                        paddingRight: '5px',
                        paddingTop: '0px',
                        
                    }}
                >
                    {itemName}:
                </Typography>
                <ApplicationUiDropdownsBasic
                    labelName={itemName}
                    dropDownList={itemLists}
                    {...dropDownProps}
                    onClickCurrentData={onClickCurrentData}
                    currentData={currentData}
                />
            </Box>

        </>
    )


}
export default WebTdData;