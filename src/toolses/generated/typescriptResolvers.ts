import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  admin?: Maybe<AdminQuery>;
  my?: Maybe<My>;
  viewer?: Maybe<Viewer>;
};

export type Mutation = {
  __typename?: 'Mutation';
  admin?: Maybe<AdminMutation>;
  my?: Maybe<MyMutation>;
  viewer?: Maybe<ViewerMutation>;
};

export type Viewer = {
  __typename?: 'Viewer';
  _?: Maybe<Scalars['Boolean']>;
};

export type My = {
  __typename?: 'My';
  _?: Maybe<Scalars['Boolean']>;
};

export type AdminQuery = {
  __typename?: 'AdminQuery';
  _?: Maybe<Scalars['Boolean']>;
};

export type ViewerMutation = {
  __typename?: 'ViewerMutation';
  _?: Maybe<Scalars['Boolean']>;
};

export type MyMutation = {
  __typename?: 'MyMutation';
  _?: Maybe<Scalars['Boolean']>;
};

export type AdminMutation = {
  __typename?: 'AdminMutation';
  _?: Maybe<Scalars['Boolean']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Viewer: ResolverTypeWrapper<Viewer>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  My: ResolverTypeWrapper<My>;
  AdminQuery: ResolverTypeWrapper<AdminQuery>;
  ViewerMutation: ResolverTypeWrapper<ViewerMutation>;
  MyMutation: ResolverTypeWrapper<MyMutation>;
  AdminMutation: ResolverTypeWrapper<AdminMutation>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Mutation: {};
  Viewer: Viewer;
  Boolean: Scalars['Boolean'];
  My: My;
  AdminQuery: AdminQuery;
  ViewerMutation: ViewerMutation;
  MyMutation: MyMutation;
  AdminMutation: AdminMutation;
  Upload: Scalars['Upload'];
  String: Scalars['String'];
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  admin?: Resolver<Maybe<ResolversTypes['AdminQuery']>, ParentType, ContextType>;
  my?: Resolver<Maybe<ResolversTypes['My']>, ParentType, ContextType>;
  viewer?: Resolver<Maybe<ResolversTypes['Viewer']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  admin?: Resolver<Maybe<ResolversTypes['AdminMutation']>, ParentType, ContextType>;
  my?: Resolver<Maybe<ResolversTypes['MyMutation']>, ParentType, ContextType>;
  viewer?: Resolver<Maybe<ResolversTypes['ViewerMutation']>, ParentType, ContextType>;
};

export type ViewerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Viewer'] = ResolversParentTypes['Viewer']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MyResolvers<ContextType = any, ParentType extends ResolversParentTypes['My'] = ResolversParentTypes['My']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminQuery'] = ResolversParentTypes['AdminQuery']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewerMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewerMutation'] = ResolversParentTypes['ViewerMutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MyMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyMutation'] = ResolversParentTypes['MyMutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminMutation'] = ResolversParentTypes['AdminMutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Viewer?: ViewerResolvers<ContextType>;
  My?: MyResolvers<ContextType>;
  AdminQuery?: AdminQueryResolvers<ContextType>;
  ViewerMutation?: ViewerMutationResolvers<ContextType>;
  MyMutation?: MyMutationResolvers<ContextType>;
  AdminMutation?: AdminMutationResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
