import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAmplifyModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AmplifyModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly price?: string | null;
  readonly description?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAmplifyModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AmplifyModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly price?: string | null;
  readonly description?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AmplifyModel = LazyLoading extends LazyLoadingDisabled ? EagerAmplifyModel : LazyAmplifyModel

export declare const AmplifyModel: (new (init: ModelInit<AmplifyModel>) => AmplifyModel) & {
  copyOf(source: AmplifyModel, mutator: (draft: MutableModel<AmplifyModel>) => MutableModel<AmplifyModel> | void): AmplifyModel;
}