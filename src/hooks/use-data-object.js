import React, { useState } from 'react';

function initDataObject(dropdownData) {
    // 使用 useState 定义状态
    const [currentData, setCurrentData] = useState({
    year:null,
    carnmodel:null,
    location:null,
    });
    
    setCurrentData(currentData.carnmodel = 123)
    // 在函数内部更新状态值
    const updatedData = dropdownData.map(item => ({
        const [item.name, setCurrentData] = useState(Null)
    }));

    // 更新状态值并返回
    setCurrentData(updatedData);
    console.log("updatedData:",updatedData)
    return currentData;
}

function setDataObject(currentData,itemName, setItemData) {
    // 使用 useState 定义状态
    const [Data, setData] = useState(currentData);
    // 更新 currentData
    const updatedData = {
        ...currentData,
        [itemName]: setItemData
    };
    
    // 设置新的状态值
    setData(updatedData);
    return Data
}
export {initDataObject,setDataObject}