/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
import ContactUs from "./ContactUs";
export default function ContactUs2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="866px"
      height="633px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ContactUs2")}
    >
      <View
        width="866px"
        height="633px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1164")}
      ></View>
      <ContactUs
        display="flex"
        gap="24px"
        direction="column"
        width="647px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="28px"
        left="73px"
        padding="20px 30px 20px 30px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ContactUs")}
      ></ContactUs>
    </View>
  );
}
