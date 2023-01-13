import { Button } from "@mui/material";
import styled from "styled-components";
import theme from '../../Assets/Styles/theme'

export const FlexDivRow = styled.div`
  display: flex;
  flex-direction:row;
`;

export const FlexCenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PrimaryButton = styled(Button)`
    background-color: #A484BD !important;
    color:white !important;
    font-style: normal !important;
    font-weight: 400 !important;
    text-transform: inherit !important;
    font-size: 19.1045px;
    margin-top: 12px;
`
export const PrimaryText = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 19.1045px;
    line-height: 29px;
    color: #3C3C3C;
`
export const PrimaryColorText = styled.span`
    color: ${theme.primaryColor} !important;
    font-weight: 500 !important;
`