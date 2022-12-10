/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function ContactUsHomebrew(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="826px"
      height="784px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ContactUsHomebrew")}
    >
      <Flex {...getOverrideProps(overrides, "TextField1403")}></Flex>
      <Flex {...getOverrideProps(overrides, "Button")}></Flex>
      <Flex {...getOverrideProps(overrides, "TextAreaField")}></Flex>
      <Flex {...getOverrideProps(overrides, "TextField1404")}></Flex>
      <View
        width="414.02px"
        height="54.32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="12.55%"
        bottom="80.52%"
        left="0%"
        right="49.88%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Filler")}
      >
        <Text
          fontFamily="JejuGothic"
          fontSize="24px"
          fontWeight="400"
          color="rgba(90,90,90,1)"
          lineHeight="26.040000915527344px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="375px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="12px"
          left="7px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Help Center  /  Submit A Request"
          {...getOverrideProps(overrides, "Help Center / Submit A Request")}
        ></Text>
      </View>
      <View
        width="739.32px"
        height="88.14px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="88.76%"
        left="0.62%"
        right="9.88%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Header")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(88,88,88,1)"
          lineHeight="19.363636016845703px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="796px"
          height="25px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="42px"
          left="3px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Welcome to the contact us page. Please fill in the following fields and tell us about your query."
          {...getOverrideProps(
            overrides,
            "Welcome to the contact us page. Please fill in the following fields and tell us about your query."
          )}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="29.045454025268555px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="375px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="3px"
          left="3px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Need Assistance"
          {...getOverrideProps(overrides, "Need Assistance")}
        ></Text>
      </View>
    </View>
  );
}
