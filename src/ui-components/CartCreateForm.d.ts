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
export declare type CartCreateFormInputValues = {
    quantity?: number;
};
export declare type CartCreateFormValidationValues = {
    quantity?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartCreateFormOverridesProps = {
    CartCreateFormGrid?: FormProps<GridProps>;
    quantity?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CartCreateFormProps = React.PropsWithChildren<{
    overrides?: CartCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CartCreateFormInputValues) => CartCreateFormInputValues;
    onSuccess?: (fields: CartCreateFormInputValues) => void;
    onError?: (fields: CartCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CartCreateFormInputValues) => CartCreateFormInputValues;
    onValidate?: CartCreateFormValidationValues;
} & React.CSSProperties>;
export default function CartCreateForm(props: CartCreateFormProps): React.ReactElement;
