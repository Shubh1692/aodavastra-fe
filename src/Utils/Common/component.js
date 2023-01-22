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
    background-color: ${theme.secondPrimaryColor} !important;
    color:${theme.white} !important;
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

export const OrderConatiner = styled.div`
    background: #F9F9F9;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    padding: 12px;
`
export const PurpleText = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: ${theme.purple};
`

export const BolderText = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: ${theme.lightBlack};
`

export const BoldText = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: ${theme.lightBlack};
`

export const SemiLightText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${theme.lightBlack};
`

export const LightText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: ${theme.lightBlack};
`
export const Heading = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color:${theme.lightBlack};
`

export const BoldHeading = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color:${theme.lightBlack};
`
export const FeedText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${theme.lightBlack};
    opacity: 0.7;
    padding-left: 10px;
`
export const TimeSection = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 13.6393px;
    line-height: 20px;
    color: ${theme.lightBlack};
    opacity: 0.7;
`

export const TagPrize = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${theme.lightBlack};
`

export const CommentMessage = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 15.4446px;
    line-height: 23px;
    color: ${theme.lightBlack};
`