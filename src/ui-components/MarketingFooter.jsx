/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function MarketingFooter(props) {
  const { overrides, ...rest } = props;
  const imageOneOnClick = useNavigateAction({
    type: "url",
    url: "https://www.facebook.com/Meta/",
  });
  const imageTwoOnClick = useNavigateAction({
    type: "url",
    url: "https://www.instagram.com/",
  });
  const imageThreeOnClick = useNavigateAction({
    type: "url",
    url: "https://twitter.com/",
  });
  return (
    <View
      width="1440px"
      height="400px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "MarketingFooter")}
    >
      <View
        width="1440px"
        height="400px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 738")}
      ></View>
      <Text
        fontFamily="Inria Sans"
        fontSize="32px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.17px"
        width="148px"
        height="33px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="52px"
        left="635px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Powercity"
        {...getOverrideProps(overrides, "Powercity")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="19px"
        right="47px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Contact Us"
        {...getOverrideProps(overrides, "Contact Us")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="235px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="89.25%"
        bottom="4.75%"
        left="40.69%"
        right="42.99%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Copyright © 2022 Powercity, Inc."
        {...getOverrideProps(
          overrides,
          "Copyright \u00A9 2022 Powercity, Inc."
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="70px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="89.25%"
        bottom="4.75%"
        left="2.15%"
        right="92.99%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Security"
        {...getOverrideProps(overrides, "Security")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="49px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="236px"
        left="278px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Meta"
        {...getOverrideProps(overrides, "Meta")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="106px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="229px"
        left="667px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Instagram"
        {...getOverrideProps(overrides, "Instagram")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="107px"
        height="31px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="236px"
        left="1057px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Twitter"
        {...getOverrideProps(overrides, "Twitter")}
      ></Text>
      <Image
        width="163px"
        height="149px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="51px"
        left="221px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://cdn.shopify.com/s/files/1/0067/0374/3040/files/white_240x240.png?v=1648004714"
        onClick={() => {
          imageOneOnClick();
        }}
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
      <Image
        width="168px"
        height="147px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="43px"
        left="620px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://i.pinimg.com/736x/21/d6/7f/21d67f1d6b3be5bb2e39395311c77fc6.jpg"
        onClick={() => {
          imageTwoOnClick();
        }}
        {...getOverrideProps(overrides, "image 2")}
      ></Image>
      <Image
        width="409px"
        height="192px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="30px"
        left="889px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://www.shutterstock.com/shutterstock/videos/1063781164/thumb/5.jpg?ip=x480"
        onClick={() => {
          imageThreeOnClick();
        }}
        {...getOverrideProps(overrides, "image 3")}
      ></Image>
    </View>
  );
}
