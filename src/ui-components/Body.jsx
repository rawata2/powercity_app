/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Body(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="860px"
      height="616px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Body")}
    >
      <Flex {...getOverrideProps(overrides, "Button")}></Flex>
      <Flex {...getOverrideProps(overrides, "TextAreaField")}></Flex>
      <Flex {...getOverrideProps(overrides, "TextField17155")}></Flex>
      <Flex {...getOverrideProps(overrides, "TextField17148")}></Flex>
    </View>
  );
}
