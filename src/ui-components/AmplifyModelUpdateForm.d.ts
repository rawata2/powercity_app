/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AmplifyModel } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AmplifyModelUpdateFormInputValues = {
    title?: string;
    price?: string;
    description?: string;
    image_url?: string;
};
export declare type AmplifyModelUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AmplifyModelUpdateFormOverridesProps = {
    AmplifyModelUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    price?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    image_url?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AmplifyModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: AmplifyModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    amplifyModel?: AmplifyModel;
    onSubmit?: (fields: AmplifyModelUpdateFormInputValues) => AmplifyModelUpdateFormInputValues;
    onSuccess?: (fields: AmplifyModelUpdateFormInputValues) => void;
    onError?: (fields: AmplifyModelUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AmplifyModelUpdateFormInputValues) => AmplifyModelUpdateFormInputValues;
    onValidate?: AmplifyModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AmplifyModelUpdateForm(props: AmplifyModelUpdateFormProps): React.ReactElement;
