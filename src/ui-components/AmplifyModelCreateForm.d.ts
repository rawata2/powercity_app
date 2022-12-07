/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AmplifyModelCreateFormInputValues = {
    title?: string;
    price?: string;
    description?: string;
    image_url?: string;
};
export declare type AmplifyModelCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AmplifyModelCreateFormOverridesProps = {
    AmplifyModelCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    price?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    image_url?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AmplifyModelCreateFormProps = React.PropsWithChildren<{
    overrides?: AmplifyModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AmplifyModelCreateFormInputValues) => AmplifyModelCreateFormInputValues;
    onSuccess?: (fields: AmplifyModelCreateFormInputValues) => void;
    onError?: (fields: AmplifyModelCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AmplifyModelCreateFormInputValues) => AmplifyModelCreateFormInputValues;
    onValidate?: AmplifyModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function AmplifyModelCreateForm(props: AmplifyModelCreateFormProps): React.ReactElement;
