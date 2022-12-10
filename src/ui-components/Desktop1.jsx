/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
} from "@aws-amplify/ui-react/internal";
import { Product } from "../models";
import { schema } from "../models/schema";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Desktop1(props) {
  const { overrides, ...rest } = props;
  const submitQueryOnClick = useDataStoreCreateAction({
    fields: {},
    model: Product,
    schema: schema,
  });
  return (
    <View
      width="1440px"
      height="1024px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Desktop1")}
    >
      <View
        width="1125px"
        height="730px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="236px"
        left="174px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <View
          width="809px"
          height="118px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="556px"
          left="146px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Button613")}
        >
          <Icon
            width="751px"
            height="66px"
            viewBox={{ minX: 0, minY: 0, width: 751, height: 66 }}
            paths={[
              {
                d: "M2 1L749 1L749 -1L2 -1L2 1ZM750 2L750 64L752 64L752 2L750 2ZM749 65L2.00001 65L2.00001 67L749 67L749 65ZM1 64L1 2L-1 2L-1 64L1 64ZM2.00001 65C1.44772 65 1 64.5523 1 64L-1 64C-1 65.6569 0.34317 67 2.00001 67L2.00001 65ZM750 64C750 64.5523 749.552 65 749 65L749 67C750.657 67 752 65.6569 752 64L750 64ZM749 1C749.552 1 750 1.44772 750 2L752 2C752 0.343136 750.657 -1 749 -1L749 1ZM2 -1C0.343147 -1 -1 0.343143 -1 2L1 2C1 1.44771 1.44771 1 2 1L2 -1Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
              {
                d: "M0 2C0 0.895429 0.89543 0 2 0L749 0C750.105 0 751 0.895431 751 2L751 64C751 65.1046 750.105 66 749 66L2.00001 66C0.895445 66 0 65.1046 0 64L0 2Z",
                fill: "rgba(63,136,158,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="27px"
            left="32px"
            {...getOverrideProps(overrides, "Button25")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24.204544067382812px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="732px"
            height="48px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="36px"
            left="42px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Submit Query"
            onClick={() => {
              submitQueryOnClick();
            }}
            {...getOverrideProps(overrides, "Submit Query")}
          ></Text>
        </View>
        <View
          width="875px"
          height="292px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="247px"
          left="110px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Query input")}
        >
          <View
            width="753px"
            height="190px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="50px"
            left="66px"
            border="1px SOLID rgba(0,0,0,1)"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="11px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(93,173,199,0.31)"
            {...getOverrideProps(overrides, "QueryField")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="500"
            color="rgba(90,90,90,1)"
            lineHeight="24.204544067382812px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="181px"
            height="24px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="17px"
            left="68px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Your Query "
            {...getOverrideProps(overrides, "Your Query")}
          ></Text>
        </View>
        <View
          width="779px"
          height="117px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="134px"
          left="165px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Email input")}
        >
          <View
            width="753px"
            height="52px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="42px"
            left="12px"
            border="1px SOLID rgba(0,0,0,1)"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="11px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(93,173,199,0.31)"
            {...getOverrideProps(overrides, "EmailField")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="500"
            color="rgba(90,90,90,1)"
            lineHeight="24.204544067382812px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="181px"
            height="24px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="9px"
            left="13px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Email Address"
            {...getOverrideProps(overrides, "Email Address")}
          ></Text>
        </View>
        <View
          width="792px"
          height="112px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="11px"
          left="152px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Name input")}
        >
          <View
            width="753px"
            height="52px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="39px"
            left="25px"
            border="1px SOLID rgba(0,0,0,1)"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="11px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(93,173,199,0.31)"
            {...getOverrideProps(overrides, "TextField")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="500"
            color="rgba(90,90,90,1)"
            lineHeight="24.204544067382812px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="181px"
            height="24px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="6px"
            left="26px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Full Name"
            {...getOverrideProps(overrides, "Full Name")}
          ></Text>
        </View>
      </View>
      <View
        width="406px"
        height="53px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="173px"
        left="344px"
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
        width="725px"
        height="86px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="77px"
        left="349px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Header")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
