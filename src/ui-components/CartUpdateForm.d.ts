/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Cart } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CartUpdateFormInputValues = {
    quantity?: number;
};
export declare type CartUpdateFormValidationValues = {
    quantity?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartUpdateFormOverridesProps = {
    CartUpdateFormGrid?: FormProps<GridProps>;
    quantity?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CartUpdateFormProps = React.PropsWithChildren<{
    overrides?: CartUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cart?: Cart;
    onSubmit?: (fields: CartUpdateFormInputValues) => CartUpdateFormInputValues;
    onSuccess?: (fields: CartUpdateFormInputValues) => void;
    onError?: (fields: CartUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CartUpdateFormInputValues) => CartUpdateFormInputValues;
    onValidate?: CartUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CartUpdateForm(props: CartUpdateFormProps): React.ReactElement;
