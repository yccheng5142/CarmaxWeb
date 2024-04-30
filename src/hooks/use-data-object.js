import React, { useState } from 'react';

function initDataObject() {
    console.log('initDataObject')

    let currentData = {
        年度:null,
        品牌:null,
        車型:null,
        販賣類型:null,
        仕向地:null
    }

    console.log("updatedData:", currentData);
    return currentData;
}

function setDataObject(currentData, itemName, setItemData) {
    currentData[itemName] = setItemData
    return currentData
}
export { initDataObject, setDataObject }