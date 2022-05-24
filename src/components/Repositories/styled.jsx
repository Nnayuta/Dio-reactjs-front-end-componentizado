import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 50%;
    margin: 0 auto;
    width: 100%;
    max-width: 60vw;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    padding: 8px;
    user-select: none;
    cursor: pointer;
    z-index: 9999;
    margin-bottom: 5px;

    &.is-selected {
        border-bottom: 2px solid #c9510c;
    }

    &.is-selected:focus {
        outline: none;
    }

    &:hover {
    }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    padding: 8px;
    border: 1px solid #ccc;
    margin-top: -5px;
    display: none;

    &.is-selected {
        display: block;
    }

`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: auto;
    height: 100%;
    width: 100%;
    max-height: 80vh;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #f5f5f5;
        box-shadow: inset 0 0 2px #0000004c;
    }

    &::-webkit-scrollbar-thumb {
        background: #333;
        border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: transparent;
    }
`;