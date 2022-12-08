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
import { Flex, Image, SearchField, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const powercityOnClick = useNavigateAction({ type: "url", url: "" });
  const frameThreeTwoOneTwoNineSevenSixSevenZeroSevenSixOnClick =
    useNavigateAction({ type: "url", url: "" });
  const accountOnClick = useNavigateAction({ type: "url", url: "" });
  const savedOnClick = useNavigateAction({ type: "url", url: "" });
  const basketOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <Flex
      gap="83px"
      direction="row"
      width="1429px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 50px 24px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Text
        fontFamily="Baloo Bhai 2"
        fontSize="40px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        textTransform="capitalize"
        lineHeight="64.87999725341797px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Powercity"
        onClick={() => {
          powercityOnClick();
        }}
        {...getOverrideProps(overrides, "Powercity")}
      ></Text>
      <Flex
        gap="52px"
        direction="row"
        width="1018px"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
        <SearchField
          placeholder="What are you looking for? "
          width="662px"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <Flex
          gap="40px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            frameThreeTwoOneTwoNineSevenSixSevenZeroSevenSixOnClick();
          }}
          {...getOverrideProps(overrides, "Frame 32129767076")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Account"
            onClick={() => {
              accountOnClick();
            }}
            {...getOverrideProps(overrides, "Account")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Saved"
            onClick={() => {
              savedOnClick();
            }}
            {...getOverrideProps(overrides, "Saved")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            onClick={() => {
              basketOnClick();
            }}
            {...getOverrideProps(overrides, "Basket")}
          ></Text>
          <Image
            width="45px"
            height="45px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
