import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const AccountScalarFieldEnumSchema = z.enum(['id','userId','type','provider','providerAccountId','refresh_token','access_token','expires_at','token_type','scope','id_token','session_state','oauth_token_secret','oauth_token']);

export const SessionScalarFieldEnumSchema = z.enum(['id','sessionToken','userId','expires']);

export const UserScalarFieldEnumSchema = z.enum(['id','email','name','emailVerified','image']);

export const VerificationTokenScalarFieldEnumSchema = z.enum(['id','identifier','token','expires']);

export const RoomScalarFieldEnumSchema = z.enum(['id','userId','roomColor','roomLocation','roomName','roomSize']);

export const WishlistScalarFieldEnumSchema = z.enum(['id','userId']);

export const PlantScalarFieldEnumSchema = z.enum(['id','name','roomId','author','bibliography','family','familyCommonName','genus','genusId','imageUrl','isOnWishlist','rank','status','synonyms','wishlistId','sunlight','waterFrequency','height','year']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const SunlightSchema = z.enum(['Sunlight','Shade','GrowBox','HalfShade']);

export type SunlightType = `${z.infer<typeof SunlightSchema>}`

export const WaterFrequencySchema = z.enum(['light','moderate','frequent','abundant']);

export type WaterFrequencyType = `${z.infer<typeof WaterFrequencySchema>}`

export const LocationTypeSchema = z.enum(['OUTDOOR','INDOOR']);

export type LocationTypeType = `${z.infer<typeof LocationTypeSchema>}`

export const SizeSchema = z.enum(['S','M','L']);

export type SizeType = `${z.infer<typeof SizeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().nullable(),
  access_token: z.string().nullable(),
  expires_at: z.number().int().nullable(),
  token_type: z.string().nullable(),
  scope: z.string().nullable(),
  id_token: z.string().nullable(),
  session_state: z.string().nullable(),
  oauth_token_secret: z.string().nullable(),
  oauth_token: z.string().nullable(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string().cuid(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  email: z.string().nullable(),
  name: z.string().nullable(),
  emailVerified: z.coerce.date().nullable(),
  image: z.string().nullable(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////

export const VerificationTokenSchema = z.object({
  id: z.number().int(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
})

export type VerificationToken = z.infer<typeof VerificationTokenSchema>

/////////////////////////////////////////
// ROOM SCHEMA
/////////////////////////////////////////

export const RoomSchema = z.object({
  roomLocation: LocationTypeSchema,
  roomSize: SizeSchema,
  id: z.number().int(),
  userId: z.string(),
  roomColor: z.string(),
  roomName: z.string(),
})

export type Room = z.infer<typeof RoomSchema>

/////////////////////////////////////////
// WISHLIST SCHEMA
/////////////////////////////////////////

export const WishlistSchema = z.object({
  id: z.number().int(),
  userId: z.string(),
})

export type Wishlist = z.infer<typeof WishlistSchema>

/////////////////////////////////////////
// PLANT SCHEMA
/////////////////////////////////////////

export const PlantSchema = z.object({
  sunlight: SunlightSchema.nullable(),
  waterFrequency: WaterFrequencySchema.nullable(),
  id: z.number().int(),
  name: z.string(),
  roomId: z.number().int().nullable(),
  author: z.string().nullable(),
  bibliography: z.string().nullable(),
  family: z.string().nullable(),
  familyCommonName: z.string().nullable(),
  genus: z.string().nullable(),
  genusId: z.number().int().nullable(),
  imageUrl: z.string().nullable(),
  isOnWishlist: z.boolean().nullable(),
  rank: z.string().nullable(),
  status: z.string().nullable(),
  synonyms: z.string().array(),
  wishlistId: z.number().int().nullable(),
  height: z.number().int().nullable(),
  year: z.number().int().nullable(),
})

export type Plant = z.infer<typeof PlantSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  type: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  refresh_token: z.boolean().optional(),
  access_token: z.boolean().optional(),
  expires_at: z.boolean().optional(),
  token_type: z.boolean().optional(),
  scope: z.boolean().optional(),
  id_token: z.boolean().optional(),
  session_state: z.boolean().optional(),
  oauth_token_secret: z.boolean().optional(),
  oauth_token: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  sessionToken: z.boolean().optional(),
  userId: z.boolean().optional(),
  expires: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  rooms: z.union([z.boolean(),z.lazy(() => RoomFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  Wishlist: z.union([z.boolean(),z.lazy(() => WishlistArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  accounts: z.boolean().optional(),
  rooms: z.boolean().optional(),
  sessions: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  rooms: z.union([z.boolean(),z.lazy(() => RoomFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  Wishlist: z.union([z.boolean(),z.lazy(() => WishlistArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// VERIFICATION TOKEN
//------------------------------------------------------

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> = z.object({
  id: z.boolean().optional(),
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

// ROOM
//------------------------------------------------------

export const RoomIncludeSchema: z.ZodType<Prisma.RoomInclude> = z.object({
  plants: z.union([z.boolean(),z.lazy(() => PlantFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoomCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RoomArgsSchema: z.ZodType<Prisma.RoomDefaultArgs> = z.object({
  select: z.lazy(() => RoomSelectSchema).optional(),
  include: z.lazy(() => RoomIncludeSchema).optional(),
}).strict();

export const RoomCountOutputTypeArgsSchema: z.ZodType<Prisma.RoomCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => RoomCountOutputTypeSelectSchema).nullish(),
}).strict();

export const RoomCountOutputTypeSelectSchema: z.ZodType<Prisma.RoomCountOutputTypeSelect> = z.object({
  plants: z.boolean().optional(),
}).strict();

export const RoomSelectSchema: z.ZodType<Prisma.RoomSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  roomColor: z.boolean().optional(),
  roomLocation: z.boolean().optional(),
  roomName: z.boolean().optional(),
  roomSize: z.boolean().optional(),
  plants: z.union([z.boolean(),z.lazy(() => PlantFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoomCountOutputTypeArgsSchema)]).optional(),
}).strict()

// WISHLIST
//------------------------------------------------------

export const WishlistIncludeSchema: z.ZodType<Prisma.WishlistInclude> = z.object({
  plants: z.union([z.boolean(),z.lazy(() => PlantFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WishlistCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const WishlistArgsSchema: z.ZodType<Prisma.WishlistDefaultArgs> = z.object({
  select: z.lazy(() => WishlistSelectSchema).optional(),
  include: z.lazy(() => WishlistIncludeSchema).optional(),
}).strict();

export const WishlistCountOutputTypeArgsSchema: z.ZodType<Prisma.WishlistCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => WishlistCountOutputTypeSelectSchema).nullish(),
}).strict();

export const WishlistCountOutputTypeSelectSchema: z.ZodType<Prisma.WishlistCountOutputTypeSelect> = z.object({
  plants: z.boolean().optional(),
}).strict();

export const WishlistSelectSchema: z.ZodType<Prisma.WishlistSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  plants: z.union([z.boolean(),z.lazy(() => PlantFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WishlistCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PLANT
//------------------------------------------------------

export const PlantIncludeSchema: z.ZodType<Prisma.PlantInclude> = z.object({
  room: z.union([z.boolean(),z.lazy(() => RoomArgsSchema)]).optional(),
  wishlist: z.union([z.boolean(),z.lazy(() => WishlistArgsSchema)]).optional(),
}).strict()

export const PlantArgsSchema: z.ZodType<Prisma.PlantDefaultArgs> = z.object({
  select: z.lazy(() => PlantSelectSchema).optional(),
  include: z.lazy(() => PlantIncludeSchema).optional(),
}).strict();

export const PlantSelectSchema: z.ZodType<Prisma.PlantSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  roomId: z.boolean().optional(),
  author: z.boolean().optional(),
  bibliography: z.boolean().optional(),
  family: z.boolean().optional(),
  familyCommonName: z.boolean().optional(),
  genus: z.boolean().optional(),
  genusId: z.boolean().optional(),
  imageUrl: z.boolean().optional(),
  isOnWishlist: z.boolean().optional(),
  rank: z.boolean().optional(),
  status: z.boolean().optional(),
  synonyms: z.boolean().optional(),
  wishlistId: z.boolean().optional(),
  sunlight: z.boolean().optional(),
  waterFrequency: z.boolean().optional(),
  height: z.boolean().optional(),
  year: z.boolean().optional(),
  room: z.union([z.boolean(),z.lazy(() => RoomArgsSchema)]).optional(),
  wishlist: z.union([z.boolean(),z.lazy(() => WishlistArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  oauth_token_secret: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  oauth_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  oauth_token_secret: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  oauth_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  oauth_token_secret: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  oauth_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  oauth_token_secret: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  oauth_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional()
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  oauth_token_secret: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  oauth_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    sessionToken: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    sessionToken: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  rooms: z.lazy(() => RoomListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  Wishlist: z.union([ z.lazy(() => WishlistNullableRelationFilterSchema),z.lazy(() => WishlistWhereInputSchema) ]).optional().nullable(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  rooms: z.lazy(() => RoomOrderByRelationAggregateInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistOrderByWithRelationInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  rooms: z.lazy(() => RoomListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  Wishlist: z.union([ z.lazy(() => WishlistNullableRelationFilterSchema),z.lazy(() => WishlistWhereInputSchema) ]).optional().nullable(),
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const VerificationTokenWhereInputSchema: z.ZodType<Prisma.VerificationTokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerificationTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenWhereUniqueInputSchema: z.ZodType<Prisma.VerificationTokenWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    token: z.string(),
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.number().int(),
    token: z.string(),
  }),
  z.object({
    id: z.number().int(),
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    token: z.string(),
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema),
  }),
  z.object({
    token: z.string(),
  }),
  z.object({
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  token: z.string().optional(),
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const VerificationTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationTokenCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => VerificationTokenAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationTokenMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => VerificationTokenSumOrderByAggregateInputSchema).optional()
}).strict();

export const VerificationTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationTokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  identifier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const RoomWhereInputSchema: z.ZodType<Prisma.RoomWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoomWhereInputSchema),z.lazy(() => RoomWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoomWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoomWhereInputSchema),z.lazy(() => RoomWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roomColor: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roomLocation: z.union([ z.lazy(() => EnumLocationTypeFilterSchema),z.lazy(() => LocationTypeSchema) ]).optional(),
  roomName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roomSize: z.union([ z.lazy(() => EnumSizeFilterSchema),z.lazy(() => SizeSchema) ]).optional(),
  plants: z.lazy(() => PlantListRelationFilterSchema).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const RoomOrderByWithRelationInputSchema: z.ZodType<Prisma.RoomOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  roomColor: z.lazy(() => SortOrderSchema).optional(),
  roomLocation: z.lazy(() => SortOrderSchema).optional(),
  roomName: z.lazy(() => SortOrderSchema).optional(),
  roomSize: z.lazy(() => SortOrderSchema).optional(),
  plants: z.lazy(() => PlantOrderByRelationAggregateInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const RoomWhereUniqueInputSchema: z.ZodType<Prisma.RoomWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => RoomWhereInputSchema),z.lazy(() => RoomWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoomWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoomWhereInputSchema),z.lazy(() => RoomWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roomColor: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roomLocation: z.union([ z.lazy(() => EnumLocationTypeFilterSchema),z.lazy(() => LocationTypeSchema) ]).optional(),
  roomName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roomSize: z.union([ z.lazy(() => EnumSizeFilterSchema),z.lazy(() => SizeSchema) ]).optional(),
  plants: z.lazy(() => PlantListRelationFilterSchema).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const RoomOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoomOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  roomColor: z.lazy(() => SortOrderSchema).optional(),
  roomLocation: z.lazy(() => SortOrderSchema).optional(),
  roomName: z.lazy(() => SortOrderSchema).optional(),
  roomSize: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RoomCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RoomAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoomMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoomMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RoomSumOrderByAggregateInputSchema).optional()
}).strict();

export const RoomScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoomScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RoomScalarWhereWithAggregatesInputSchema),z.lazy(() => RoomScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoomScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoomScalarWhereWithAggregatesInputSchema),z.lazy(() => RoomScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  roomColor: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  roomLocation: z.union([ z.lazy(() => EnumLocationTypeWithAggregatesFilterSchema),z.lazy(() => LocationTypeSchema) ]).optional(),
  roomName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  roomSize: z.union([ z.lazy(() => EnumSizeWithAggregatesFilterSchema),z.lazy(() => SizeSchema) ]).optional(),
}).strict();

export const WishlistWhereInputSchema: z.ZodType<Prisma.WishlistWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WishlistWhereInputSchema),z.lazy(() => WishlistWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WishlistWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WishlistWhereInputSchema),z.lazy(() => WishlistWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  plants: z.lazy(() => PlantListRelationFilterSchema).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const WishlistOrderByWithRelationInputSchema: z.ZodType<Prisma.WishlistOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  plants: z.lazy(() => PlantOrderByRelationAggregateInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const WishlistWhereUniqueInputSchema: z.ZodType<Prisma.WishlistWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    userId: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => WishlistWhereInputSchema),z.lazy(() => WishlistWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WishlistWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WishlistWhereInputSchema),z.lazy(() => WishlistWhereInputSchema).array() ]).optional(),
  plants: z.lazy(() => PlantListRelationFilterSchema).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const WishlistOrderByWithAggregationInputSchema: z.ZodType<Prisma.WishlistOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WishlistCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WishlistAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WishlistMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WishlistMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WishlistSumOrderByAggregateInputSchema).optional()
}).strict();

export const WishlistScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WishlistScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WishlistScalarWhereWithAggregatesInputSchema),z.lazy(() => WishlistScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WishlistScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WishlistScalarWhereWithAggregatesInputSchema),z.lazy(() => WishlistScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PlantWhereInputSchema: z.ZodType<Prisma.PlantWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PlantWhereInputSchema),z.lazy(() => PlantWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlantWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlantWhereInputSchema),z.lazy(() => PlantWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roomId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  author: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  bibliography: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  family: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  familyCommonName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  genus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  genusId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  imageUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isOnWishlist: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  rank: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  synonyms: z.lazy(() => StringNullableListFilterSchema).optional(),
  wishlistId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  sunlight: z.union([ z.lazy(() => EnumSunlightNullableFilterSchema),z.lazy(() => SunlightSchema) ]).optional().nullable(),
  waterFrequency: z.union([ z.lazy(() => EnumWaterFrequencyNullableFilterSchema),z.lazy(() => WaterFrequencySchema) ]).optional().nullable(),
  height: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  year: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  room: z.union([ z.lazy(() => RoomNullableRelationFilterSchema),z.lazy(() => RoomWhereInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => WishlistNullableRelationFilterSchema),z.lazy(() => WishlistWhereInputSchema) ]).optional().nullable(),
}).strict();

export const PlantOrderByWithRelationInputSchema: z.ZodType<Prisma.PlantOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  roomId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  author: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bibliography: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  family: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  familyCommonName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  genus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  genusId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  imageUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isOnWishlist: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rank: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  synonyms: z.lazy(() => SortOrderSchema).optional(),
  wishlistId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sunlight: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  waterFrequency: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  height: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  year: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  room: z.lazy(() => RoomOrderByWithRelationInputSchema).optional(),
  wishlist: z.lazy(() => WishlistOrderByWithRelationInputSchema).optional()
}).strict();

export const PlantWhereUniqueInputSchema: z.ZodType<Prisma.PlantWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => PlantWhereInputSchema),z.lazy(() => PlantWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlantWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlantWhereInputSchema),z.lazy(() => PlantWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roomId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  author: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  bibliography: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  family: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  familyCommonName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  genus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  genusId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  imageUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isOnWishlist: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  rank: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  synonyms: z.lazy(() => StringNullableListFilterSchema).optional(),
  wishlistId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  sunlight: z.union([ z.lazy(() => EnumSunlightNullableFilterSchema),z.lazy(() => SunlightSchema) ]).optional().nullable(),
  waterFrequency: z.union([ z.lazy(() => EnumWaterFrequencyNullableFilterSchema),z.lazy(() => WaterFrequencySchema) ]).optional().nullable(),
  height: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  year: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  room: z.union([ z.lazy(() => RoomNullableRelationFilterSchema),z.lazy(() => RoomWhereInputSchema) ]).optional().nullable(),
  wishlist: z.union([ z.lazy(() => WishlistNullableRelationFilterSchema),z.lazy(() => WishlistWhereInputSchema) ]).optional().nullable(),
}).strict());

export const PlantOrderByWithAggregationInputSchema: z.ZodType<Prisma.PlantOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  roomId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  author: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bibliography: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  family: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  familyCommonName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  genus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  genusId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  imageUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isOnWishlist: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rank: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  synonyms: z.lazy(() => SortOrderSchema).optional(),
  wishlistId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sunlight: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  waterFrequency: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  height: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  year: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PlantCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PlantAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PlantMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PlantMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PlantSumOrderByAggregateInputSchema).optional()
}).strict();

export const PlantScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PlantScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PlantScalarWhereWithAggregatesInputSchema),z.lazy(() => PlantScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlantScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlantScalarWhereWithAggregatesInputSchema),z.lazy(() => PlantScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  roomId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  author: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  bibliography: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  family: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  familyCommonName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  genus: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  genusId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  imageUrl: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  isOnWishlist: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  rank: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  synonyms: z.lazy(() => StringNullableListFilterSchema).optional(),
  wishlistId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  sunlight: z.union([ z.lazy(() => EnumSunlightNullableWithAggregatesFilterSchema),z.lazy(() => SunlightSchema) ]).optional().nullable(),
  waterFrequency: z.union([ z.lazy(() => EnumWaterFrequencyNullableWithAggregatesFilterSchema),z.lazy(() => WaterFrequencySchema) ]).optional().nullable(),
  height: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  year: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  oauth_token_secret: z.string().optional().nullable(),
  oauth_token: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema)
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  oauth_token_secret: z.string().optional().nullable(),
  oauth_token: z.string().optional().nullable()
}).strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oauth_token_secret: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oauth_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oauth_token_secret: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oauth_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  oauth_token_secret: z.string().optional().nullable(),
  oauth_token: z.string().optional().nullable()
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oauth_token_secret: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oauth_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oauth_token_secret: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oauth_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  rooms: z.lazy(() => RoomCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  rooms: z.lazy(() => RoomUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  rooms: z.lazy(() => RoomUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  rooms: z.lazy(() => RoomUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const VerificationTokenCreateInputSchema: z.ZodType<Prisma.VerificationTokenCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateManyInputSchema: z.ZodType<Prisma.VerificationTokenCreateManyInput> = z.object({
  id: z.number().int().optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationTokenUpdateManyMutationInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoomCreateInputSchema: z.ZodType<Prisma.RoomCreateInput> = z.object({
  roomColor: z.string(),
  roomLocation: z.lazy(() => LocationTypeSchema),
  roomName: z.string(),
  roomSize: z.lazy(() => SizeSchema),
  plants: z.lazy(() => PlantCreateNestedManyWithoutRoomInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutRoomsInputSchema)
}).strict();

export const RoomUncheckedCreateInputSchema: z.ZodType<Prisma.RoomUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  roomColor: z.string(),
  roomLocation: z.lazy(() => LocationTypeSchema),
  roomName: z.string(),
  roomSize: z.lazy(() => SizeSchema),
  plants: z.lazy(() => PlantUncheckedCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomUpdateInputSchema: z.ZodType<Prisma.RoomUpdateInput> = z.object({
  roomColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomLocation: z.union([ z.lazy(() => LocationTypeSchema),z.lazy(() => EnumLocationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  roomName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomSize: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  plants: z.lazy(() => PlantUpdateManyWithoutRoomNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRoomsNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomLocation: z.union([ z.lazy(() => LocationTypeSchema),z.lazy(() => EnumLocationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  roomName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomSize: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  plants: z.lazy(() => PlantUncheckedUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomCreateManyInputSchema: z.ZodType<Prisma.RoomCreateManyInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  roomColor: z.string(),
  roomLocation: z.lazy(() => LocationTypeSchema),
  roomName: z.string(),
  roomSize: z.lazy(() => SizeSchema)
}).strict();

export const RoomUpdateManyMutationInputSchema: z.ZodType<Prisma.RoomUpdateManyMutationInput> = z.object({
  roomColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomLocation: z.union([ z.lazy(() => LocationTypeSchema),z.lazy(() => EnumLocationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  roomName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomSize: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoomUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomLocation: z.union([ z.lazy(() => LocationTypeSchema),z.lazy(() => EnumLocationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  roomName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomSize: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WishlistCreateInputSchema: z.ZodType<Prisma.WishlistCreateInput> = z.object({
  plants: z.lazy(() => PlantCreateNestedManyWithoutWishlistInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutWishlistInputSchema)
}).strict();

export const WishlistUncheckedCreateInputSchema: z.ZodType<Prisma.WishlistUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  plants: z.lazy(() => PlantUncheckedCreateNestedManyWithoutWishlistInputSchema).optional()
}).strict();

export const WishlistUpdateInputSchema: z.ZodType<Prisma.WishlistUpdateInput> = z.object({
  plants: z.lazy(() => PlantUpdateManyWithoutWishlistNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutWishlistNestedInputSchema).optional()
}).strict();

export const WishlistUncheckedUpdateInputSchema: z.ZodType<Prisma.WishlistUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  plants: z.lazy(() => PlantUncheckedUpdateManyWithoutWishlistNestedInputSchema).optional()
}).strict();

export const WishlistCreateManyInputSchema: z.ZodType<Prisma.WishlistCreateManyInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string()
}).strict();

export const WishlistUpdateManyMutationInputSchema: z.ZodType<Prisma.WishlistUpdateManyMutationInput> = z.object({
}).strict();

export const WishlistUncheckedUpdateManyInputSchema: z.ZodType<Prisma.WishlistUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlantCreateInputSchema: z.ZodType<Prisma.PlantCreateInput> = z.object({
  name: z.string(),
  author: z.string().optional().nullable(),
  bibliography: z.string().optional().nullable(),
  family: z.string().optional().nullable(),
  familyCommonName: z.string().optional().nullable(),
  genus: z.string().optional().nullable(),
  genusId: z.number().int().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  isOnWishlist: z.boolean().optional().nullable(),
  rank: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantCreatesynonymsInputSchema),z.string().array() ]).optional(),
  sunlight: z.lazy(() => SunlightSchema).optional().nullable(),
  waterFrequency: z.lazy(() => WaterFrequencySchema).optional().nullable(),
  height: z.number().int().optional().nullable(),
  year: z.number().int().optional().nullable(),
  room: z.lazy(() => RoomCreateNestedOneWithoutPlantsInputSchema).optional(),
  wishlist: z.lazy(() => WishlistCreateNestedOneWithoutPlantsInputSchema).optional()
}).strict();

export const PlantUncheckedCreateInputSchema: z.ZodType<Prisma.PlantUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  roomId: z.number().int().optional().nullable(),
  author: z.string().optional().nullable(),
  bibliography: z.string().optional().nullable(),
  family: z.string().optional().nullable(),
  familyCommonName: z.string().optional().nullable(),
  genus: z.string().optional().nullable(),
  genusId: z.number().int().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  isOnWishlist: z.boolean().optional().nullable(),
  rank: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantCreatesynonymsInputSchema),z.string().array() ]).optional(),
  wishlistId: z.number().int().optional().nullable(),
  sunlight: z.lazy(() => SunlightSchema).optional().nullable(),
  waterFrequency: z.lazy(() => WaterFrequencySchema).optional().nullable(),
  height: z.number().int().optional().nullable(),
  year: z.number().int().optional().nullable()
}).strict();

export const PlantUpdateInputSchema: z.ZodType<Prisma.PlantUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bibliography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  family: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  familyCommonName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genusId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isOnWishlist: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rank: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantUpdatesynonymsInputSchema),z.string().array() ]).optional(),
  sunlight: z.union([ z.lazy(() => SunlightSchema),z.lazy(() => NullableEnumSunlightFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  waterFrequency: z.union([ z.lazy(() => WaterFrequencySchema),z.lazy(() => NullableEnumWaterFrequencyFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  year: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  room: z.lazy(() => RoomUpdateOneWithoutPlantsNestedInputSchema).optional(),
  wishlist: z.lazy(() => WishlistUpdateOneWithoutPlantsNestedInputSchema).optional()
}).strict();

export const PlantUncheckedUpdateInputSchema: z.ZodType<Prisma.PlantUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bibliography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  family: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  familyCommonName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genusId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isOnWishlist: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rank: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantUpdatesynonymsInputSchema),z.string().array() ]).optional(),
  wishlistId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sunlight: z.union([ z.lazy(() => SunlightSchema),z.lazy(() => NullableEnumSunlightFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  waterFrequency: z.union([ z.lazy(() => WaterFrequencySchema),z.lazy(() => NullableEnumWaterFrequencyFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  year: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PlantCreateManyInputSchema: z.ZodType<Prisma.PlantCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  roomId: z.number().int().optional().nullable(),
  author: z.string().optional().nullable(),
  bibliography: z.string().optional().nullable(),
  family: z.string().optional().nullable(),
  familyCommonName: z.string().optional().nullable(),
  genus: z.string().optional().nullable(),
  genusId: z.number().int().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  isOnWishlist: z.boolean().optional().nullable(),
  rank: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantCreatesynonymsInputSchema),z.string().array() ]).optional(),
  wishlistId: z.number().int().optional().nullable(),
  sunlight: z.lazy(() => SunlightSchema).optional().nullable(),
  waterFrequency: z.lazy(() => WaterFrequencySchema).optional().nullable(),
  height: z.number().int().optional().nullable(),
  year: z.number().int().optional().nullable()
}).strict();

export const PlantUpdateManyMutationInputSchema: z.ZodType<Prisma.PlantUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bibliography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  family: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  familyCommonName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genusId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isOnWishlist: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rank: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantUpdatesynonymsInputSchema),z.string().array() ]).optional(),
  sunlight: z.union([ z.lazy(() => SunlightSchema),z.lazy(() => NullableEnumSunlightFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  waterFrequency: z.union([ z.lazy(() => WaterFrequencySchema),z.lazy(() => NullableEnumWaterFrequencyFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  year: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PlantUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PlantUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bibliography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  family: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  familyCommonName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genusId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isOnWishlist: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rank: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantUpdatesynonymsInputSchema),z.string().array() ]).optional(),
  wishlistId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sunlight: z.union([ z.lazy(() => SunlightSchema),z.lazy(() => NullableEnumSunlightFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  waterFrequency: z.union([ z.lazy(() => WaterFrequencySchema),z.lazy(() => NullableEnumWaterFrequencyFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  year: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputSchema: z.ZodType<Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> = z.object({
  provider: z.string(),
  providerAccountId: z.string()
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  oauth_token_secret: z.lazy(() => SortOrderSchema).optional(),
  oauth_token: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  oauth_token_secret: z.lazy(() => SortOrderSchema).optional(),
  oauth_token: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  oauth_token_secret: z.lazy(() => SortOrderSchema).optional(),
  oauth_token: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const RoomListRelationFilterSchema: z.ZodType<Prisma.RoomListRelationFilter> = z.object({
  every: z.lazy(() => RoomWhereInputSchema).optional(),
  some: z.lazy(() => RoomWhereInputSchema).optional(),
  none: z.lazy(() => RoomWhereInputSchema).optional()
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const WishlistNullableRelationFilterSchema: z.ZodType<Prisma.WishlistNullableRelationFilter> = z.object({
  is: z.lazy(() => WishlistWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => WishlistWhereInputSchema).optional().nullable()
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoomOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const VerificationTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput> = z.object({
  identifier: z.string(),
  token: z.string()
}).strict();

export const VerificationTokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenAvgOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenSumOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const EnumLocationTypeFilterSchema: z.ZodType<Prisma.EnumLocationTypeFilter> = z.object({
  equals: z.lazy(() => LocationTypeSchema).optional(),
  in: z.lazy(() => LocationTypeSchema).array().optional(),
  notIn: z.lazy(() => LocationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => LocationTypeSchema),z.lazy(() => NestedEnumLocationTypeFilterSchema) ]).optional(),
}).strict();

export const EnumSizeFilterSchema: z.ZodType<Prisma.EnumSizeFilter> = z.object({
  equals: z.lazy(() => SizeSchema).optional(),
  in: z.lazy(() => SizeSchema).array().optional(),
  notIn: z.lazy(() => SizeSchema).array().optional(),
  not: z.union([ z.lazy(() => SizeSchema),z.lazy(() => NestedEnumSizeFilterSchema) ]).optional(),
}).strict();

export const PlantListRelationFilterSchema: z.ZodType<Prisma.PlantListRelationFilter> = z.object({
  every: z.lazy(() => PlantWhereInputSchema).optional(),
  some: z.lazy(() => PlantWhereInputSchema).optional(),
  none: z.lazy(() => PlantWhereInputSchema).optional()
}).strict();

export const PlantOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PlantOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoomCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  roomColor: z.lazy(() => SortOrderSchema).optional(),
  roomLocation: z.lazy(() => SortOrderSchema).optional(),
  roomName: z.lazy(() => SortOrderSchema).optional(),
  roomSize: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RoomAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoomMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  roomColor: z.lazy(() => SortOrderSchema).optional(),
  roomLocation: z.lazy(() => SortOrderSchema).optional(),
  roomName: z.lazy(() => SortOrderSchema).optional(),
  roomSize: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoomMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  roomColor: z.lazy(() => SortOrderSchema).optional(),
  roomLocation: z.lazy(() => SortOrderSchema).optional(),
  roomName: z.lazy(() => SortOrderSchema).optional(),
  roomSize: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomSumOrderByAggregateInputSchema: z.ZodType<Prisma.RoomSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumLocationTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLocationTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LocationTypeSchema).optional(),
  in: z.lazy(() => LocationTypeSchema).array().optional(),
  notIn: z.lazy(() => LocationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => LocationTypeSchema),z.lazy(() => NestedEnumLocationTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLocationTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLocationTypeFilterSchema).optional()
}).strict();

export const EnumSizeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumSizeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SizeSchema).optional(),
  in: z.lazy(() => SizeSchema).array().optional(),
  notIn: z.lazy(() => SizeSchema).array().optional(),
  not: z.union([ z.lazy(() => SizeSchema),z.lazy(() => NestedEnumSizeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSizeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSizeFilterSchema).optional()
}).strict();

export const WishlistCountOrderByAggregateInputSchema: z.ZodType<Prisma.WishlistCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WishlistAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WishlistAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WishlistMaxOrderByAggregateInputSchema: z.ZodType<Prisma.WishlistMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WishlistMinOrderByAggregateInputSchema: z.ZodType<Prisma.WishlistMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WishlistSumOrderByAggregateInputSchema: z.ZodType<Prisma.WishlistSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const EnumSunlightNullableFilterSchema: z.ZodType<Prisma.EnumSunlightNullableFilter> = z.object({
  equals: z.lazy(() => SunlightSchema).optional().nullable(),
  in: z.lazy(() => SunlightSchema).array().optional().nullable(),
  notIn: z.lazy(() => SunlightSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => SunlightSchema),z.lazy(() => NestedEnumSunlightNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const EnumWaterFrequencyNullableFilterSchema: z.ZodType<Prisma.EnumWaterFrequencyNullableFilter> = z.object({
  equals: z.lazy(() => WaterFrequencySchema).optional().nullable(),
  in: z.lazy(() => WaterFrequencySchema).array().optional().nullable(),
  notIn: z.lazy(() => WaterFrequencySchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => WaterFrequencySchema),z.lazy(() => NestedEnumWaterFrequencyNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const RoomNullableRelationFilterSchema: z.ZodType<Prisma.RoomNullableRelationFilter> = z.object({
  is: z.lazy(() => RoomWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => RoomWhereInputSchema).optional().nullable()
}).strict();

export const PlantCountOrderByAggregateInputSchema: z.ZodType<Prisma.PlantCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  roomId: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  bibliography: z.lazy(() => SortOrderSchema).optional(),
  family: z.lazy(() => SortOrderSchema).optional(),
  familyCommonName: z.lazy(() => SortOrderSchema).optional(),
  genus: z.lazy(() => SortOrderSchema).optional(),
  genusId: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  isOnWishlist: z.lazy(() => SortOrderSchema).optional(),
  rank: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  synonyms: z.lazy(() => SortOrderSchema).optional(),
  wishlistId: z.lazy(() => SortOrderSchema).optional(),
  sunlight: z.lazy(() => SortOrderSchema).optional(),
  waterFrequency: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlantAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PlantAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  roomId: z.lazy(() => SortOrderSchema).optional(),
  genusId: z.lazy(() => SortOrderSchema).optional(),
  wishlistId: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlantMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PlantMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  roomId: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  bibliography: z.lazy(() => SortOrderSchema).optional(),
  family: z.lazy(() => SortOrderSchema).optional(),
  familyCommonName: z.lazy(() => SortOrderSchema).optional(),
  genus: z.lazy(() => SortOrderSchema).optional(),
  genusId: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  isOnWishlist: z.lazy(() => SortOrderSchema).optional(),
  rank: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  wishlistId: z.lazy(() => SortOrderSchema).optional(),
  sunlight: z.lazy(() => SortOrderSchema).optional(),
  waterFrequency: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlantMinOrderByAggregateInputSchema: z.ZodType<Prisma.PlantMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  roomId: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  bibliography: z.lazy(() => SortOrderSchema).optional(),
  family: z.lazy(() => SortOrderSchema).optional(),
  familyCommonName: z.lazy(() => SortOrderSchema).optional(),
  genus: z.lazy(() => SortOrderSchema).optional(),
  genusId: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  isOnWishlist: z.lazy(() => SortOrderSchema).optional(),
  rank: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  wishlistId: z.lazy(() => SortOrderSchema).optional(),
  sunlight: z.lazy(() => SortOrderSchema).optional(),
  waterFrequency: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlantSumOrderByAggregateInputSchema: z.ZodType<Prisma.PlantSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  roomId: z.lazy(() => SortOrderSchema).optional(),
  genusId: z.lazy(() => SortOrderSchema).optional(),
  wishlistId: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const EnumSunlightNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumSunlightNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SunlightSchema).optional().nullable(),
  in: z.lazy(() => SunlightSchema).array().optional().nullable(),
  notIn: z.lazy(() => SunlightSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => SunlightSchema),z.lazy(() => NestedEnumSunlightNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSunlightNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSunlightNullableFilterSchema).optional()
}).strict();

export const EnumWaterFrequencyNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumWaterFrequencyNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => WaterFrequencySchema).optional().nullable(),
  in: z.lazy(() => WaterFrequencySchema).array().optional().nullable(),
  notIn: z.lazy(() => WaterFrequencySchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => WaterFrequencySchema),z.lazy(() => NestedEnumWaterFrequencyNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumWaterFrequencyNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumWaterFrequencyNullableFilterSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputSchema),z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputSchema),z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]).optional(),
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoomCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.RoomCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutUserInputSchema),z.lazy(() => RoomCreateWithoutUserInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutUserInputSchema),z.lazy(() => RoomUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutUserInputSchema),z.lazy(() => RoomCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WishlistCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.WishlistCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => WishlistCreateWithoutUserInputSchema),z.lazy(() => WishlistUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WishlistCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => WishlistWhereUniqueInputSchema).optional()
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoomUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.RoomUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutUserInputSchema),z.lazy(() => RoomCreateWithoutUserInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutUserInputSchema),z.lazy(() => RoomUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutUserInputSchema),z.lazy(() => RoomCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WishlistUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.WishlistUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => WishlistCreateWithoutUserInputSchema),z.lazy(() => WishlistUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WishlistCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => WishlistWhereUniqueInputSchema).optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoomUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.RoomUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutUserInputSchema),z.lazy(() => RoomCreateWithoutUserInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutUserInputSchema),z.lazy(() => RoomUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutUserInputSchema),z.lazy(() => RoomCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoomUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => RoomUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoomUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => RoomUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoomUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => RoomUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WishlistUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.WishlistUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => WishlistCreateWithoutUserInputSchema),z.lazy(() => WishlistUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WishlistCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => WishlistUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => WishlistWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => WishlistWhereInputSchema) ]).optional(),
  connect: z.lazy(() => WishlistWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WishlistUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => WishlistUpdateWithoutUserInputSchema),z.lazy(() => WishlistUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoomUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutUserInputSchema),z.lazy(() => RoomCreateWithoutUserInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutUserInputSchema),z.lazy(() => RoomUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutUserInputSchema),z.lazy(() => RoomCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoomUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => RoomUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoomUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => RoomUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoomUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => RoomUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WishlistUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.WishlistUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => WishlistCreateWithoutUserInputSchema),z.lazy(() => WishlistUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WishlistCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => WishlistUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => WishlistWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => WishlistWhereInputSchema) ]).optional(),
  connect: z.lazy(() => WishlistWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WishlistUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => WishlistUpdateWithoutUserInputSchema),z.lazy(() => WishlistUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const PlantCreateNestedManyWithoutRoomInputSchema: z.ZodType<Prisma.PlantCreateNestedManyWithoutRoomInput> = z.object({
  create: z.union([ z.lazy(() => PlantCreateWithoutRoomInputSchema),z.lazy(() => PlantCreateWithoutRoomInputSchema).array(),z.lazy(() => PlantUncheckedCreateWithoutRoomInputSchema),z.lazy(() => PlantUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlantCreateOrConnectWithoutRoomInputSchema),z.lazy(() => PlantCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlantCreateManyRoomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutRoomsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRoomsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRoomsInputSchema),z.lazy(() => UserUncheckedCreateWithoutRoomsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRoomsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const PlantUncheckedCreateNestedManyWithoutRoomInputSchema: z.ZodType<Prisma.PlantUncheckedCreateNestedManyWithoutRoomInput> = z.object({
  create: z.union([ z.lazy(() => PlantCreateWithoutRoomInputSchema),z.lazy(() => PlantCreateWithoutRoomInputSchema).array(),z.lazy(() => PlantUncheckedCreateWithoutRoomInputSchema),z.lazy(() => PlantUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlantCreateOrConnectWithoutRoomInputSchema),z.lazy(() => PlantCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlantCreateManyRoomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumLocationTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLocationTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LocationTypeSchema).optional()
}).strict();

export const EnumSizeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSizeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SizeSchema).optional()
}).strict();

export const PlantUpdateManyWithoutRoomNestedInputSchema: z.ZodType<Prisma.PlantUpdateManyWithoutRoomNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlantCreateWithoutRoomInputSchema),z.lazy(() => PlantCreateWithoutRoomInputSchema).array(),z.lazy(() => PlantUncheckedCreateWithoutRoomInputSchema),z.lazy(() => PlantUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlantCreateOrConnectWithoutRoomInputSchema),z.lazy(() => PlantCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PlantUpsertWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => PlantUpsertWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlantCreateManyRoomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PlantUpdateWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => PlantUpdateWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PlantUpdateManyWithWhereWithoutRoomInputSchema),z.lazy(() => PlantUpdateManyWithWhereWithoutRoomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PlantScalarWhereInputSchema),z.lazy(() => PlantScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutRoomsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRoomsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRoomsInputSchema),z.lazy(() => UserUncheckedCreateWithoutRoomsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRoomsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRoomsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutRoomsInputSchema),z.lazy(() => UserUpdateWithoutRoomsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRoomsInputSchema) ]).optional(),
}).strict();

export const PlantUncheckedUpdateManyWithoutRoomNestedInputSchema: z.ZodType<Prisma.PlantUncheckedUpdateManyWithoutRoomNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlantCreateWithoutRoomInputSchema),z.lazy(() => PlantCreateWithoutRoomInputSchema).array(),z.lazy(() => PlantUncheckedCreateWithoutRoomInputSchema),z.lazy(() => PlantUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlantCreateOrConnectWithoutRoomInputSchema),z.lazy(() => PlantCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PlantUpsertWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => PlantUpsertWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlantCreateManyRoomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PlantUpdateWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => PlantUpdateWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PlantUpdateManyWithWhereWithoutRoomInputSchema),z.lazy(() => PlantUpdateManyWithWhereWithoutRoomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PlantScalarWhereInputSchema),z.lazy(() => PlantScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PlantCreateNestedManyWithoutWishlistInputSchema: z.ZodType<Prisma.PlantCreateNestedManyWithoutWishlistInput> = z.object({
  create: z.union([ z.lazy(() => PlantCreateWithoutWishlistInputSchema),z.lazy(() => PlantCreateWithoutWishlistInputSchema).array(),z.lazy(() => PlantUncheckedCreateWithoutWishlistInputSchema),z.lazy(() => PlantUncheckedCreateWithoutWishlistInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlantCreateOrConnectWithoutWishlistInputSchema),z.lazy(() => PlantCreateOrConnectWithoutWishlistInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlantCreateManyWishlistInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutWishlistInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutWishlistInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutWishlistInputSchema),z.lazy(() => UserUncheckedCreateWithoutWishlistInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWishlistInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const PlantUncheckedCreateNestedManyWithoutWishlistInputSchema: z.ZodType<Prisma.PlantUncheckedCreateNestedManyWithoutWishlistInput> = z.object({
  create: z.union([ z.lazy(() => PlantCreateWithoutWishlistInputSchema),z.lazy(() => PlantCreateWithoutWishlistInputSchema).array(),z.lazy(() => PlantUncheckedCreateWithoutWishlistInputSchema),z.lazy(() => PlantUncheckedCreateWithoutWishlistInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlantCreateOrConnectWithoutWishlistInputSchema),z.lazy(() => PlantCreateOrConnectWithoutWishlistInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlantCreateManyWishlistInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PlantUpdateManyWithoutWishlistNestedInputSchema: z.ZodType<Prisma.PlantUpdateManyWithoutWishlistNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlantCreateWithoutWishlistInputSchema),z.lazy(() => PlantCreateWithoutWishlistInputSchema).array(),z.lazy(() => PlantUncheckedCreateWithoutWishlistInputSchema),z.lazy(() => PlantUncheckedCreateWithoutWishlistInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlantCreateOrConnectWithoutWishlistInputSchema),z.lazy(() => PlantCreateOrConnectWithoutWishlistInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PlantUpsertWithWhereUniqueWithoutWishlistInputSchema),z.lazy(() => PlantUpsertWithWhereUniqueWithoutWishlistInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlantCreateManyWishlistInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PlantUpdateWithWhereUniqueWithoutWishlistInputSchema),z.lazy(() => PlantUpdateWithWhereUniqueWithoutWishlistInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PlantUpdateManyWithWhereWithoutWishlistInputSchema),z.lazy(() => PlantUpdateManyWithWhereWithoutWishlistInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PlantScalarWhereInputSchema),z.lazy(() => PlantScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutWishlistNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWishlistNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutWishlistInputSchema),z.lazy(() => UserUncheckedCreateWithoutWishlistInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWishlistInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutWishlistInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutWishlistInputSchema),z.lazy(() => UserUpdateWithoutWishlistInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWishlistInputSchema) ]).optional(),
}).strict();

export const PlantUncheckedUpdateManyWithoutWishlistNestedInputSchema: z.ZodType<Prisma.PlantUncheckedUpdateManyWithoutWishlistNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlantCreateWithoutWishlistInputSchema),z.lazy(() => PlantCreateWithoutWishlistInputSchema).array(),z.lazy(() => PlantUncheckedCreateWithoutWishlistInputSchema),z.lazy(() => PlantUncheckedCreateWithoutWishlistInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlantCreateOrConnectWithoutWishlistInputSchema),z.lazy(() => PlantCreateOrConnectWithoutWishlistInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PlantUpsertWithWhereUniqueWithoutWishlistInputSchema),z.lazy(() => PlantUpsertWithWhereUniqueWithoutWishlistInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PlantCreateManyWishlistInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PlantWhereUniqueInputSchema),z.lazy(() => PlantWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PlantUpdateWithWhereUniqueWithoutWishlistInputSchema),z.lazy(() => PlantUpdateWithWhereUniqueWithoutWishlistInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PlantUpdateManyWithWhereWithoutWishlistInputSchema),z.lazy(() => PlantUpdateManyWithWhereWithoutWishlistInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PlantScalarWhereInputSchema),z.lazy(() => PlantScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PlantCreatesynonymsInputSchema: z.ZodType<Prisma.PlantCreatesynonymsInput> = z.object({
  set: z.string().array()
}).strict();

export const RoomCreateNestedOneWithoutPlantsInputSchema: z.ZodType<Prisma.RoomCreateNestedOneWithoutPlantsInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutPlantsInputSchema),z.lazy(() => RoomUncheckedCreateWithoutPlantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutPlantsInputSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputSchema).optional()
}).strict();

export const WishlistCreateNestedOneWithoutPlantsInputSchema: z.ZodType<Prisma.WishlistCreateNestedOneWithoutPlantsInput> = z.object({
  create: z.union([ z.lazy(() => WishlistCreateWithoutPlantsInputSchema),z.lazy(() => WishlistUncheckedCreateWithoutPlantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WishlistCreateOrConnectWithoutPlantsInputSchema).optional(),
  connect: z.lazy(() => WishlistWhereUniqueInputSchema).optional()
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable()
}).strict();

export const PlantUpdatesynonymsInputSchema: z.ZodType<Prisma.PlantUpdatesynonymsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const NullableEnumSunlightFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumSunlightFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SunlightSchema).optional().nullable()
}).strict();

export const NullableEnumWaterFrequencyFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumWaterFrequencyFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => WaterFrequencySchema).optional().nullable()
}).strict();

export const RoomUpdateOneWithoutPlantsNestedInputSchema: z.ZodType<Prisma.RoomUpdateOneWithoutPlantsNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutPlantsInputSchema),z.lazy(() => RoomUncheckedCreateWithoutPlantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutPlantsInputSchema).optional(),
  upsert: z.lazy(() => RoomUpsertWithoutPlantsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RoomWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RoomWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoomUpdateToOneWithWhereWithoutPlantsInputSchema),z.lazy(() => RoomUpdateWithoutPlantsInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutPlantsInputSchema) ]).optional(),
}).strict();

export const WishlistUpdateOneWithoutPlantsNestedInputSchema: z.ZodType<Prisma.WishlistUpdateOneWithoutPlantsNestedInput> = z.object({
  create: z.union([ z.lazy(() => WishlistCreateWithoutPlantsInputSchema),z.lazy(() => WishlistUncheckedCreateWithoutPlantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WishlistCreateOrConnectWithoutPlantsInputSchema).optional(),
  upsert: z.lazy(() => WishlistUpsertWithoutPlantsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => WishlistWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => WishlistWhereInputSchema) ]).optional(),
  connect: z.lazy(() => WishlistWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WishlistUpdateToOneWithWhereWithoutPlantsInputSchema),z.lazy(() => WishlistUpdateWithoutPlantsInputSchema),z.lazy(() => WishlistUncheckedUpdateWithoutPlantsInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedEnumLocationTypeFilterSchema: z.ZodType<Prisma.NestedEnumLocationTypeFilter> = z.object({
  equals: z.lazy(() => LocationTypeSchema).optional(),
  in: z.lazy(() => LocationTypeSchema).array().optional(),
  notIn: z.lazy(() => LocationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => LocationTypeSchema),z.lazy(() => NestedEnumLocationTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumSizeFilterSchema: z.ZodType<Prisma.NestedEnumSizeFilter> = z.object({
  equals: z.lazy(() => SizeSchema).optional(),
  in: z.lazy(() => SizeSchema).array().optional(),
  notIn: z.lazy(() => SizeSchema).array().optional(),
  not: z.union([ z.lazy(() => SizeSchema),z.lazy(() => NestedEnumSizeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumLocationTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumLocationTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LocationTypeSchema).optional(),
  in: z.lazy(() => LocationTypeSchema).array().optional(),
  notIn: z.lazy(() => LocationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => LocationTypeSchema),z.lazy(() => NestedEnumLocationTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLocationTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLocationTypeFilterSchema).optional()
}).strict();

export const NestedEnumSizeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumSizeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SizeSchema).optional(),
  in: z.lazy(() => SizeSchema).array().optional(),
  notIn: z.lazy(() => SizeSchema).array().optional(),
  not: z.union([ z.lazy(() => SizeSchema),z.lazy(() => NestedEnumSizeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSizeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSizeFilterSchema).optional()
}).strict();

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumSunlightNullableFilterSchema: z.ZodType<Prisma.NestedEnumSunlightNullableFilter> = z.object({
  equals: z.lazy(() => SunlightSchema).optional().nullable(),
  in: z.lazy(() => SunlightSchema).array().optional().nullable(),
  notIn: z.lazy(() => SunlightSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => SunlightSchema),z.lazy(() => NestedEnumSunlightNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumWaterFrequencyNullableFilterSchema: z.ZodType<Prisma.NestedEnumWaterFrequencyNullableFilter> = z.object({
  equals: z.lazy(() => WaterFrequencySchema).optional().nullable(),
  in: z.lazy(() => WaterFrequencySchema).array().optional().nullable(),
  notIn: z.lazy(() => WaterFrequencySchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => WaterFrequencySchema),z.lazy(() => NestedEnumWaterFrequencyNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const NestedEnumSunlightNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumSunlightNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SunlightSchema).optional().nullable(),
  in: z.lazy(() => SunlightSchema).array().optional().nullable(),
  notIn: z.lazy(() => SunlightSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => SunlightSchema),z.lazy(() => NestedEnumSunlightNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSunlightNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSunlightNullableFilterSchema).optional()
}).strict();

export const NestedEnumWaterFrequencyNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumWaterFrequencyNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => WaterFrequencySchema).optional().nullable(),
  in: z.lazy(() => WaterFrequencySchema).array().optional().nullable(),
  notIn: z.lazy(() => WaterFrequencySchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => WaterFrequencySchema),z.lazy(() => NestedEnumWaterFrequencyNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumWaterFrequencyNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumWaterFrequencyNullableFilterSchema).optional()
}).strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  rooms: z.lazy(() => RoomCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  rooms: z.lazy(() => RoomUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rooms: z.lazy(() => RoomUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rooms: z.lazy(() => RoomUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  rooms: z.lazy(() => RoomCreateNestedManyWithoutUserInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  rooms: z.lazy(() => RoomUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  rooms: z.lazy(() => RoomUpdateManyWithoutUserNestedInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  rooms: z.lazy(() => RoomUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  oauth_token_secret: z.string().optional().nullable(),
  oauth_token: z.string().optional().nullable()
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  oauth_token_secret: z.string().optional().nullable(),
  oauth_token: z.string().optional().nullable()
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AccountCreateManyUserInputSchema),z.lazy(() => AccountCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RoomCreateWithoutUserInputSchema: z.ZodType<Prisma.RoomCreateWithoutUserInput> = z.object({
  roomColor: z.string(),
  roomLocation: z.lazy(() => LocationTypeSchema),
  roomName: z.string(),
  roomSize: z.lazy(() => SizeSchema),
  plants: z.lazy(() => PlantCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  roomColor: z.string(),
  roomLocation: z.lazy(() => LocationTypeSchema),
  roomName: z.string(),
  roomSize: z.lazy(() => SizeSchema),
  plants: z.lazy(() => PlantUncheckedCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoomCreateWithoutUserInputSchema),z.lazy(() => RoomUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const RoomCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.RoomCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoomCreateManyUserInputSchema),z.lazy(() => RoomCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SessionCreateManyUserInputSchema),z.lazy(() => SessionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const WishlistCreateWithoutUserInputSchema: z.ZodType<Prisma.WishlistCreateWithoutUserInput> = z.object({
  plants: z.lazy(() => PlantCreateNestedManyWithoutWishlistInputSchema).optional()
}).strict();

export const WishlistUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.WishlistUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  plants: z.lazy(() => PlantUncheckedCreateNestedManyWithoutWishlistInputSchema).optional()
}).strict();

export const WishlistCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.WishlistCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => WishlistWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WishlistCreateWithoutUserInputSchema),z.lazy(() => WishlistUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateManyMutationInputSchema),z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  oauth_token_secret: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  oauth_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const RoomUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.RoomUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoomUpdateWithoutUserInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => RoomCreateWithoutUserInputSchema),z.lazy(() => RoomUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const RoomUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.RoomUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoomUpdateWithoutUserInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const RoomUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.RoomUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => RoomScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoomUpdateManyMutationInputSchema),z.lazy(() => RoomUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const RoomScalarWhereInputSchema: z.ZodType<Prisma.RoomScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoomScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roomColor: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roomLocation: z.union([ z.lazy(() => EnumLocationTypeFilterSchema),z.lazy(() => LocationTypeSchema) ]).optional(),
  roomName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roomSize: z.union([ z.lazy(() => EnumSizeFilterSchema),z.lazy(() => SizeSchema) ]).optional(),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const WishlistUpsertWithoutUserInputSchema: z.ZodType<Prisma.WishlistUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => WishlistUpdateWithoutUserInputSchema),z.lazy(() => WishlistUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => WishlistCreateWithoutUserInputSchema),z.lazy(() => WishlistUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => WishlistWhereInputSchema).optional()
}).strict();

export const WishlistUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.WishlistUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => WishlistWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WishlistUpdateWithoutUserInputSchema),z.lazy(() => WishlistUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const WishlistUpdateWithoutUserInputSchema: z.ZodType<Prisma.WishlistUpdateWithoutUserInput> = z.object({
  plants: z.lazy(() => PlantUpdateManyWithoutWishlistNestedInputSchema).optional()
}).strict();

export const WishlistUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.WishlistUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  plants: z.lazy(() => PlantUncheckedUpdateManyWithoutWishlistNestedInputSchema).optional()
}).strict();

export const PlantCreateWithoutRoomInputSchema: z.ZodType<Prisma.PlantCreateWithoutRoomInput> = z.object({
  name: z.string(),
  author: z.string().optional().nullable(),
  bibliography: z.string().optional().nullable(),
  family: z.string().optional().nullable(),
  familyCommonName: z.string().optional().nullable(),
  genus: z.string().optional().nullable(),
  genusId: z.number().int().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  isOnWishlist: z.boolean().optional().nullable(),
  rank: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantCreatesynonymsInputSchema),z.string().array() ]).optional(),
  sunlight: z.lazy(() => SunlightSchema).optional().nullable(),
  waterFrequency: z.lazy(() => WaterFrequencySchema).optional().nullable(),
  height: z.number().int().optional().nullable(),
  year: z.number().int().optional().nullable(),
  wishlist: z.lazy(() => WishlistCreateNestedOneWithoutPlantsInputSchema).optional()
}).strict();

export const PlantUncheckedCreateWithoutRoomInputSchema: z.ZodType<Prisma.PlantUncheckedCreateWithoutRoomInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  author: z.string().optional().nullable(),
  bibliography: z.string().optional().nullable(),
  family: z.string().optional().nullable(),
  familyCommonName: z.string().optional().nullable(),
  genus: z.string().optional().nullable(),
  genusId: z.number().int().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  isOnWishlist: z.boolean().optional().nullable(),
  rank: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantCreatesynonymsInputSchema),z.string().array() ]).optional(),
  wishlistId: z.number().int().optional().nullable(),
  sunlight: z.lazy(() => SunlightSchema).optional().nullable(),
  waterFrequency: z.lazy(() => WaterFrequencySchema).optional().nullable(),
  height: z.number().int().optional().nullable(),
  year: z.number().int().optional().nullable()
}).strict();

export const PlantCreateOrConnectWithoutRoomInputSchema: z.ZodType<Prisma.PlantCreateOrConnectWithoutRoomInput> = z.object({
  where: z.lazy(() => PlantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PlantCreateWithoutRoomInputSchema),z.lazy(() => PlantUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export const PlantCreateManyRoomInputEnvelopeSchema: z.ZodType<Prisma.PlantCreateManyRoomInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PlantCreateManyRoomInputSchema),z.lazy(() => PlantCreateManyRoomInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserCreateWithoutRoomsInputSchema: z.ZodType<Prisma.UserCreateWithoutRoomsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutRoomsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutRoomsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutRoomsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRoomsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutRoomsInputSchema),z.lazy(() => UserUncheckedCreateWithoutRoomsInputSchema) ]),
}).strict();

export const PlantUpsertWithWhereUniqueWithoutRoomInputSchema: z.ZodType<Prisma.PlantUpsertWithWhereUniqueWithoutRoomInput> = z.object({
  where: z.lazy(() => PlantWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PlantUpdateWithoutRoomInputSchema),z.lazy(() => PlantUncheckedUpdateWithoutRoomInputSchema) ]),
  create: z.union([ z.lazy(() => PlantCreateWithoutRoomInputSchema),z.lazy(() => PlantUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export const PlantUpdateWithWhereUniqueWithoutRoomInputSchema: z.ZodType<Prisma.PlantUpdateWithWhereUniqueWithoutRoomInput> = z.object({
  where: z.lazy(() => PlantWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PlantUpdateWithoutRoomInputSchema),z.lazy(() => PlantUncheckedUpdateWithoutRoomInputSchema) ]),
}).strict();

export const PlantUpdateManyWithWhereWithoutRoomInputSchema: z.ZodType<Prisma.PlantUpdateManyWithWhereWithoutRoomInput> = z.object({
  where: z.lazy(() => PlantScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PlantUpdateManyMutationInputSchema),z.lazy(() => PlantUncheckedUpdateManyWithoutRoomInputSchema) ]),
}).strict();

export const PlantScalarWhereInputSchema: z.ZodType<Prisma.PlantScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PlantScalarWhereInputSchema),z.lazy(() => PlantScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlantScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlantScalarWhereInputSchema),z.lazy(() => PlantScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roomId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  author: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  bibliography: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  family: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  familyCommonName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  genus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  genusId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  imageUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isOnWishlist: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  rank: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  synonyms: z.lazy(() => StringNullableListFilterSchema).optional(),
  wishlistId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  sunlight: z.union([ z.lazy(() => EnumSunlightNullableFilterSchema),z.lazy(() => SunlightSchema) ]).optional().nullable(),
  waterFrequency: z.union([ z.lazy(() => EnumWaterFrequencyNullableFilterSchema),z.lazy(() => WaterFrequencySchema) ]).optional().nullable(),
  height: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  year: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const UserUpsertWithoutRoomsInputSchema: z.ZodType<Prisma.UserUpsertWithoutRoomsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutRoomsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRoomsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutRoomsInputSchema),z.lazy(() => UserUncheckedCreateWithoutRoomsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutRoomsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRoomsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutRoomsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRoomsInputSchema) ]),
}).strict();

export const UserUpdateWithoutRoomsInputSchema: z.ZodType<Prisma.UserUpdateWithoutRoomsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutRoomsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutRoomsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Wishlist: z.lazy(() => WishlistUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const PlantCreateWithoutWishlistInputSchema: z.ZodType<Prisma.PlantCreateWithoutWishlistInput> = z.object({
  name: z.string(),
  author: z.string().optional().nullable(),
  bibliography: z.string().optional().nullable(),
  family: z.string().optional().nullable(),
  familyCommonName: z.string().optional().nullable(),
  genus: z.string().optional().nullable(),
  genusId: z.number().int().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  isOnWishlist: z.boolean().optional().nullable(),
  rank: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantCreatesynonymsInputSchema),z.string().array() ]).optional(),
  sunlight: z.lazy(() => SunlightSchema).optional().nullable(),
  waterFrequency: z.lazy(() => WaterFrequencySchema).optional().nullable(),
  height: z.number().int().optional().nullable(),
  year: z.number().int().optional().nullable(),
  room: z.lazy(() => RoomCreateNestedOneWithoutPlantsInputSchema).optional()
}).strict();

export const PlantUncheckedCreateWithoutWishlistInputSchema: z.ZodType<Prisma.PlantUncheckedCreateWithoutWishlistInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  roomId: z.number().int().optional().nullable(),
  author: z.string().optional().nullable(),
  bibliography: z.string().optional().nullable(),
  family: z.string().optional().nullable(),
  familyCommonName: z.string().optional().nullable(),
  genus: z.string().optional().nullable(),
  genusId: z.number().int().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  isOnWishlist: z.boolean().optional().nullable(),
  rank: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantCreatesynonymsInputSchema),z.string().array() ]).optional(),
  sunlight: z.lazy(() => SunlightSchema).optional().nullable(),
  waterFrequency: z.lazy(() => WaterFrequencySchema).optional().nullable(),
  height: z.number().int().optional().nullable(),
  year: z.number().int().optional().nullable()
}).strict();

export const PlantCreateOrConnectWithoutWishlistInputSchema: z.ZodType<Prisma.PlantCreateOrConnectWithoutWishlistInput> = z.object({
  where: z.lazy(() => PlantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PlantCreateWithoutWishlistInputSchema),z.lazy(() => PlantUncheckedCreateWithoutWishlistInputSchema) ]),
}).strict();

export const PlantCreateManyWishlistInputEnvelopeSchema: z.ZodType<Prisma.PlantCreateManyWishlistInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PlantCreateManyWishlistInputSchema),z.lazy(() => PlantCreateManyWishlistInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserCreateWithoutWishlistInputSchema: z.ZodType<Prisma.UserCreateWithoutWishlistInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  rooms: z.lazy(() => RoomCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutWishlistInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutWishlistInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  rooms: z.lazy(() => RoomUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutWishlistInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutWishlistInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutWishlistInputSchema),z.lazy(() => UserUncheckedCreateWithoutWishlistInputSchema) ]),
}).strict();

export const PlantUpsertWithWhereUniqueWithoutWishlistInputSchema: z.ZodType<Prisma.PlantUpsertWithWhereUniqueWithoutWishlistInput> = z.object({
  where: z.lazy(() => PlantWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PlantUpdateWithoutWishlistInputSchema),z.lazy(() => PlantUncheckedUpdateWithoutWishlistInputSchema) ]),
  create: z.union([ z.lazy(() => PlantCreateWithoutWishlistInputSchema),z.lazy(() => PlantUncheckedCreateWithoutWishlistInputSchema) ]),
}).strict();

export const PlantUpdateWithWhereUniqueWithoutWishlistInputSchema: z.ZodType<Prisma.PlantUpdateWithWhereUniqueWithoutWishlistInput> = z.object({
  where: z.lazy(() => PlantWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PlantUpdateWithoutWishlistInputSchema),z.lazy(() => PlantUncheckedUpdateWithoutWishlistInputSchema) ]),
}).strict();

export const PlantUpdateManyWithWhereWithoutWishlistInputSchema: z.ZodType<Prisma.PlantUpdateManyWithWhereWithoutWishlistInput> = z.object({
  where: z.lazy(() => PlantScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PlantUpdateManyMutationInputSchema),z.lazy(() => PlantUncheckedUpdateManyWithoutWishlistInputSchema) ]),
}).strict();

export const UserUpsertWithoutWishlistInputSchema: z.ZodType<Prisma.UserUpsertWithoutWishlistInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutWishlistInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWishlistInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutWishlistInputSchema),z.lazy(() => UserUncheckedCreateWithoutWishlistInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutWishlistInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWishlistInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutWishlistInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWishlistInputSchema) ]),
}).strict();

export const UserUpdateWithoutWishlistInputSchema: z.ZodType<Prisma.UserUpdateWithoutWishlistInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  rooms: z.lazy(() => RoomUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutWishlistInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutWishlistInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  rooms: z.lazy(() => RoomUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const RoomCreateWithoutPlantsInputSchema: z.ZodType<Prisma.RoomCreateWithoutPlantsInput> = z.object({
  roomColor: z.string(),
  roomLocation: z.lazy(() => LocationTypeSchema),
  roomName: z.string(),
  roomSize: z.lazy(() => SizeSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutRoomsInputSchema)
}).strict();

export const RoomUncheckedCreateWithoutPlantsInputSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutPlantsInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  roomColor: z.string(),
  roomLocation: z.lazy(() => LocationTypeSchema),
  roomName: z.string(),
  roomSize: z.lazy(() => SizeSchema)
}).strict();

export const RoomCreateOrConnectWithoutPlantsInputSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutPlantsInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoomCreateWithoutPlantsInputSchema),z.lazy(() => RoomUncheckedCreateWithoutPlantsInputSchema) ]),
}).strict();

export const WishlistCreateWithoutPlantsInputSchema: z.ZodType<Prisma.WishlistCreateWithoutPlantsInput> = z.object({
  user: z.lazy(() => UserCreateNestedOneWithoutWishlistInputSchema)
}).strict();

export const WishlistUncheckedCreateWithoutPlantsInputSchema: z.ZodType<Prisma.WishlistUncheckedCreateWithoutPlantsInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string()
}).strict();

export const WishlistCreateOrConnectWithoutPlantsInputSchema: z.ZodType<Prisma.WishlistCreateOrConnectWithoutPlantsInput> = z.object({
  where: z.lazy(() => WishlistWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WishlistCreateWithoutPlantsInputSchema),z.lazy(() => WishlistUncheckedCreateWithoutPlantsInputSchema) ]),
}).strict();

export const RoomUpsertWithoutPlantsInputSchema: z.ZodType<Prisma.RoomUpsertWithoutPlantsInput> = z.object({
  update: z.union([ z.lazy(() => RoomUpdateWithoutPlantsInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutPlantsInputSchema) ]),
  create: z.union([ z.lazy(() => RoomCreateWithoutPlantsInputSchema),z.lazy(() => RoomUncheckedCreateWithoutPlantsInputSchema) ]),
  where: z.lazy(() => RoomWhereInputSchema).optional()
}).strict();

export const RoomUpdateToOneWithWhereWithoutPlantsInputSchema: z.ZodType<Prisma.RoomUpdateToOneWithWhereWithoutPlantsInput> = z.object({
  where: z.lazy(() => RoomWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RoomUpdateWithoutPlantsInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutPlantsInputSchema) ]),
}).strict();

export const RoomUpdateWithoutPlantsInputSchema: z.ZodType<Prisma.RoomUpdateWithoutPlantsInput> = z.object({
  roomColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomLocation: z.union([ z.lazy(() => LocationTypeSchema),z.lazy(() => EnumLocationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  roomName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomSize: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRoomsNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateWithoutPlantsInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateWithoutPlantsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomLocation: z.union([ z.lazy(() => LocationTypeSchema),z.lazy(() => EnumLocationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  roomName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomSize: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WishlistUpsertWithoutPlantsInputSchema: z.ZodType<Prisma.WishlistUpsertWithoutPlantsInput> = z.object({
  update: z.union([ z.lazy(() => WishlistUpdateWithoutPlantsInputSchema),z.lazy(() => WishlistUncheckedUpdateWithoutPlantsInputSchema) ]),
  create: z.union([ z.lazy(() => WishlistCreateWithoutPlantsInputSchema),z.lazy(() => WishlistUncheckedCreateWithoutPlantsInputSchema) ]),
  where: z.lazy(() => WishlistWhereInputSchema).optional()
}).strict();

export const WishlistUpdateToOneWithWhereWithoutPlantsInputSchema: z.ZodType<Prisma.WishlistUpdateToOneWithWhereWithoutPlantsInput> = z.object({
  where: z.lazy(() => WishlistWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WishlistUpdateWithoutPlantsInputSchema),z.lazy(() => WishlistUncheckedUpdateWithoutPlantsInputSchema) ]),
}).strict();

export const WishlistUpdateWithoutPlantsInputSchema: z.ZodType<Prisma.WishlistUpdateWithoutPlantsInput> = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutWishlistNestedInputSchema).optional()
}).strict();

export const WishlistUncheckedUpdateWithoutPlantsInputSchema: z.ZodType<Prisma.WishlistUncheckedUpdateWithoutPlantsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  oauth_token_secret: z.string().optional().nullable(),
  oauth_token: z.string().optional().nullable()
}).strict();

export const RoomCreateManyUserInputSchema: z.ZodType<Prisma.RoomCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  roomColor: z.string(),
  roomLocation: z.lazy(() => LocationTypeSchema),
  roomName: z.string(),
  roomSize: z.lazy(() => SizeSchema)
}).strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oauth_token_secret: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oauth_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oauth_token_secret: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oauth_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oauth_token_secret: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oauth_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const RoomUpdateWithoutUserInputSchema: z.ZodType<Prisma.RoomUpdateWithoutUserInput> = z.object({
  roomColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomLocation: z.union([ z.lazy(() => LocationTypeSchema),z.lazy(() => EnumLocationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  roomName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomSize: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  plants: z.lazy(() => PlantUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  roomColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomLocation: z.union([ z.lazy(() => LocationTypeSchema),z.lazy(() => EnumLocationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  roomName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomSize: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  plants: z.lazy(() => PlantUncheckedUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  roomColor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomLocation: z.union([ z.lazy(() => LocationTypeSchema),z.lazy(() => EnumLocationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  roomName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomSize: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlantCreateManyRoomInputSchema: z.ZodType<Prisma.PlantCreateManyRoomInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  author: z.string().optional().nullable(),
  bibliography: z.string().optional().nullable(),
  family: z.string().optional().nullable(),
  familyCommonName: z.string().optional().nullable(),
  genus: z.string().optional().nullable(),
  genusId: z.number().int().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  isOnWishlist: z.boolean().optional().nullable(),
  rank: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantCreatesynonymsInputSchema),z.string().array() ]).optional(),
  wishlistId: z.number().int().optional().nullable(),
  sunlight: z.lazy(() => SunlightSchema).optional().nullable(),
  waterFrequency: z.lazy(() => WaterFrequencySchema).optional().nullable(),
  height: z.number().int().optional().nullable(),
  year: z.number().int().optional().nullable()
}).strict();

export const PlantUpdateWithoutRoomInputSchema: z.ZodType<Prisma.PlantUpdateWithoutRoomInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bibliography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  family: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  familyCommonName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genusId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isOnWishlist: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rank: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantUpdatesynonymsInputSchema),z.string().array() ]).optional(),
  sunlight: z.union([ z.lazy(() => SunlightSchema),z.lazy(() => NullableEnumSunlightFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  waterFrequency: z.union([ z.lazy(() => WaterFrequencySchema),z.lazy(() => NullableEnumWaterFrequencyFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  year: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wishlist: z.lazy(() => WishlistUpdateOneWithoutPlantsNestedInputSchema).optional()
}).strict();

export const PlantUncheckedUpdateWithoutRoomInputSchema: z.ZodType<Prisma.PlantUncheckedUpdateWithoutRoomInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bibliography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  family: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  familyCommonName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genusId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isOnWishlist: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rank: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantUpdatesynonymsInputSchema),z.string().array() ]).optional(),
  wishlistId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sunlight: z.union([ z.lazy(() => SunlightSchema),z.lazy(() => NullableEnumSunlightFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  waterFrequency: z.union([ z.lazy(() => WaterFrequencySchema),z.lazy(() => NullableEnumWaterFrequencyFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  year: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PlantUncheckedUpdateManyWithoutRoomInputSchema: z.ZodType<Prisma.PlantUncheckedUpdateManyWithoutRoomInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bibliography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  family: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  familyCommonName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genusId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isOnWishlist: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rank: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantUpdatesynonymsInputSchema),z.string().array() ]).optional(),
  wishlistId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sunlight: z.union([ z.lazy(() => SunlightSchema),z.lazy(() => NullableEnumSunlightFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  waterFrequency: z.union([ z.lazy(() => WaterFrequencySchema),z.lazy(() => NullableEnumWaterFrequencyFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  year: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PlantCreateManyWishlistInputSchema: z.ZodType<Prisma.PlantCreateManyWishlistInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  roomId: z.number().int().optional().nullable(),
  author: z.string().optional().nullable(),
  bibliography: z.string().optional().nullable(),
  family: z.string().optional().nullable(),
  familyCommonName: z.string().optional().nullable(),
  genus: z.string().optional().nullable(),
  genusId: z.number().int().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  isOnWishlist: z.boolean().optional().nullable(),
  rank: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantCreatesynonymsInputSchema),z.string().array() ]).optional(),
  sunlight: z.lazy(() => SunlightSchema).optional().nullable(),
  waterFrequency: z.lazy(() => WaterFrequencySchema).optional().nullable(),
  height: z.number().int().optional().nullable(),
  year: z.number().int().optional().nullable()
}).strict();

export const PlantUpdateWithoutWishlistInputSchema: z.ZodType<Prisma.PlantUpdateWithoutWishlistInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bibliography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  family: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  familyCommonName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genusId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isOnWishlist: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rank: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantUpdatesynonymsInputSchema),z.string().array() ]).optional(),
  sunlight: z.union([ z.lazy(() => SunlightSchema),z.lazy(() => NullableEnumSunlightFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  waterFrequency: z.union([ z.lazy(() => WaterFrequencySchema),z.lazy(() => NullableEnumWaterFrequencyFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  year: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  room: z.lazy(() => RoomUpdateOneWithoutPlantsNestedInputSchema).optional()
}).strict();

export const PlantUncheckedUpdateWithoutWishlistInputSchema: z.ZodType<Prisma.PlantUncheckedUpdateWithoutWishlistInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bibliography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  family: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  familyCommonName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genusId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isOnWishlist: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rank: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantUpdatesynonymsInputSchema),z.string().array() ]).optional(),
  sunlight: z.union([ z.lazy(() => SunlightSchema),z.lazy(() => NullableEnumSunlightFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  waterFrequency: z.union([ z.lazy(() => WaterFrequencySchema),z.lazy(() => NullableEnumWaterFrequencyFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  year: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PlantUncheckedUpdateManyWithoutWishlistInputSchema: z.ZodType<Prisma.PlantUncheckedUpdateManyWithoutWishlistInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roomId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bibliography: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  family: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  familyCommonName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  genusId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isOnWishlist: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rank: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  synonyms: z.union([ z.lazy(() => PlantUpdatesynonymsInputSchema),z.string().array() ]).optional(),
  sunlight: z.union([ z.lazy(() => SunlightSchema),z.lazy(() => NullableEnumSunlightFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  waterFrequency: z.union([ z.lazy(() => WaterFrequencySchema),z.lazy(() => NullableEnumWaterFrequencyFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  year: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(),AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenFindFirstArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenFindManyArgsSchema: z.ZodType<Prisma.VerificationTokenFindManyArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenAggregateArgsSchema: z.ZodType<Prisma.VerificationTokenAggregateArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerificationTokenGroupByArgsSchema: z.ZodType<Prisma.VerificationTokenGroupByArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithAggregationInputSchema.array(),VerificationTokenOrderByWithAggregationInputSchema ]).optional(),
  by: VerificationTokenScalarFieldEnumSchema.array(),
  having: VerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerificationTokenFindUniqueArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const RoomFindFirstArgsSchema: z.ZodType<Prisma.RoomFindFirstArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithRelationInputSchema.array(),RoomOrderByWithRelationInputSchema ]).optional(),
  cursor: RoomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoomScalarFieldEnumSchema,RoomScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const RoomFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoomFindFirstOrThrowArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithRelationInputSchema.array(),RoomOrderByWithRelationInputSchema ]).optional(),
  cursor: RoomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoomScalarFieldEnumSchema,RoomScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const RoomFindManyArgsSchema: z.ZodType<Prisma.RoomFindManyArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithRelationInputSchema.array(),RoomOrderByWithRelationInputSchema ]).optional(),
  cursor: RoomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoomScalarFieldEnumSchema,RoomScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const RoomAggregateArgsSchema: z.ZodType<Prisma.RoomAggregateArgs> = z.object({
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithRelationInputSchema.array(),RoomOrderByWithRelationInputSchema ]).optional(),
  cursor: RoomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const RoomGroupByArgsSchema: z.ZodType<Prisma.RoomGroupByArgs> = z.object({
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithAggregationInputSchema.array(),RoomOrderByWithAggregationInputSchema ]).optional(),
  by: RoomScalarFieldEnumSchema.array(),
  having: RoomScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const RoomFindUniqueArgsSchema: z.ZodType<Prisma.RoomFindUniqueArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereUniqueInputSchema,
}).strict() ;

export const RoomFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoomFindUniqueOrThrowArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereUniqueInputSchema,
}).strict() ;

export const WishlistFindFirstArgsSchema: z.ZodType<Prisma.WishlistFindFirstArgs> = z.object({
  select: WishlistSelectSchema.optional(),
  include: WishlistIncludeSchema.optional(),
  where: WishlistWhereInputSchema.optional(),
  orderBy: z.union([ WishlistOrderByWithRelationInputSchema.array(),WishlistOrderByWithRelationInputSchema ]).optional(),
  cursor: WishlistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WishlistScalarFieldEnumSchema,WishlistScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WishlistFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WishlistFindFirstOrThrowArgs> = z.object({
  select: WishlistSelectSchema.optional(),
  include: WishlistIncludeSchema.optional(),
  where: WishlistWhereInputSchema.optional(),
  orderBy: z.union([ WishlistOrderByWithRelationInputSchema.array(),WishlistOrderByWithRelationInputSchema ]).optional(),
  cursor: WishlistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WishlistScalarFieldEnumSchema,WishlistScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WishlistFindManyArgsSchema: z.ZodType<Prisma.WishlistFindManyArgs> = z.object({
  select: WishlistSelectSchema.optional(),
  include: WishlistIncludeSchema.optional(),
  where: WishlistWhereInputSchema.optional(),
  orderBy: z.union([ WishlistOrderByWithRelationInputSchema.array(),WishlistOrderByWithRelationInputSchema ]).optional(),
  cursor: WishlistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WishlistScalarFieldEnumSchema,WishlistScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WishlistAggregateArgsSchema: z.ZodType<Prisma.WishlistAggregateArgs> = z.object({
  where: WishlistWhereInputSchema.optional(),
  orderBy: z.union([ WishlistOrderByWithRelationInputSchema.array(),WishlistOrderByWithRelationInputSchema ]).optional(),
  cursor: WishlistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const WishlistGroupByArgsSchema: z.ZodType<Prisma.WishlistGroupByArgs> = z.object({
  where: WishlistWhereInputSchema.optional(),
  orderBy: z.union([ WishlistOrderByWithAggregationInputSchema.array(),WishlistOrderByWithAggregationInputSchema ]).optional(),
  by: WishlistScalarFieldEnumSchema.array(),
  having: WishlistScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const WishlistFindUniqueArgsSchema: z.ZodType<Prisma.WishlistFindUniqueArgs> = z.object({
  select: WishlistSelectSchema.optional(),
  include: WishlistIncludeSchema.optional(),
  where: WishlistWhereUniqueInputSchema,
}).strict() ;

export const WishlistFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WishlistFindUniqueOrThrowArgs> = z.object({
  select: WishlistSelectSchema.optional(),
  include: WishlistIncludeSchema.optional(),
  where: WishlistWhereUniqueInputSchema,
}).strict() ;

export const PlantFindFirstArgsSchema: z.ZodType<Prisma.PlantFindFirstArgs> = z.object({
  select: PlantSelectSchema.optional(),
  include: PlantIncludeSchema.optional(),
  where: PlantWhereInputSchema.optional(),
  orderBy: z.union([ PlantOrderByWithRelationInputSchema.array(),PlantOrderByWithRelationInputSchema ]).optional(),
  cursor: PlantWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlantScalarFieldEnumSchema,PlantScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlantFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PlantFindFirstOrThrowArgs> = z.object({
  select: PlantSelectSchema.optional(),
  include: PlantIncludeSchema.optional(),
  where: PlantWhereInputSchema.optional(),
  orderBy: z.union([ PlantOrderByWithRelationInputSchema.array(),PlantOrderByWithRelationInputSchema ]).optional(),
  cursor: PlantWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlantScalarFieldEnumSchema,PlantScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlantFindManyArgsSchema: z.ZodType<Prisma.PlantFindManyArgs> = z.object({
  select: PlantSelectSchema.optional(),
  include: PlantIncludeSchema.optional(),
  where: PlantWhereInputSchema.optional(),
  orderBy: z.union([ PlantOrderByWithRelationInputSchema.array(),PlantOrderByWithRelationInputSchema ]).optional(),
  cursor: PlantWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlantScalarFieldEnumSchema,PlantScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlantAggregateArgsSchema: z.ZodType<Prisma.PlantAggregateArgs> = z.object({
  where: PlantWhereInputSchema.optional(),
  orderBy: z.union([ PlantOrderByWithRelationInputSchema.array(),PlantOrderByWithRelationInputSchema ]).optional(),
  cursor: PlantWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PlantGroupByArgsSchema: z.ZodType<Prisma.PlantGroupByArgs> = z.object({
  where: PlantWhereInputSchema.optional(),
  orderBy: z.union([ PlantOrderByWithAggregationInputSchema.array(),PlantOrderByWithAggregationInputSchema ]).optional(),
  by: PlantScalarFieldEnumSchema.array(),
  having: PlantScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PlantFindUniqueArgsSchema: z.ZodType<Prisma.PlantFindUniqueArgs> = z.object({
  select: PlantSelectSchema.optional(),
  include: PlantIncludeSchema.optional(),
  where: PlantWhereUniqueInputSchema,
}).strict() ;

export const PlantFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PlantFindUniqueOrThrowArgs> = z.object({
  select: PlantSelectSchema.optional(),
  include: PlantIncludeSchema.optional(),
  where: PlantWhereUniqueInputSchema,
}).strict() ;

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
}).strict() ;

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
}).strict() ;

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
}).strict() ;

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
}).strict() ;

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict() ;

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict() ;

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const VerificationTokenCreateArgsSchema: z.ZodType<Prisma.VerificationTokenCreateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
}).strict() ;

export const VerificationTokenUpsertArgsSchema: z.ZodType<Prisma.VerificationTokenUpsertArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
  create: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
  update: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
}).strict() ;

export const VerificationTokenCreateManyArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const VerificationTokenDeleteArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenUpdateArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenUpdateManyArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateManyArgs> = z.object({
  data: z.union([ VerificationTokenUpdateManyMutationInputSchema,VerificationTokenUncheckedUpdateManyInputSchema ]),
  where: VerificationTokenWhereInputSchema.optional(),
}).strict() ;

export const VerificationTokenDeleteManyArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteManyArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
}).strict() ;

export const RoomCreateArgsSchema: z.ZodType<Prisma.RoomCreateArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  data: z.union([ RoomCreateInputSchema,RoomUncheckedCreateInputSchema ]),
}).strict() ;

export const RoomUpsertArgsSchema: z.ZodType<Prisma.RoomUpsertArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereUniqueInputSchema,
  create: z.union([ RoomCreateInputSchema,RoomUncheckedCreateInputSchema ]),
  update: z.union([ RoomUpdateInputSchema,RoomUncheckedUpdateInputSchema ]),
}).strict() ;

export const RoomCreateManyArgsSchema: z.ZodType<Prisma.RoomCreateManyArgs> = z.object({
  data: z.union([ RoomCreateManyInputSchema,RoomCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const RoomDeleteArgsSchema: z.ZodType<Prisma.RoomDeleteArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereUniqueInputSchema,
}).strict() ;

export const RoomUpdateArgsSchema: z.ZodType<Prisma.RoomUpdateArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  data: z.union([ RoomUpdateInputSchema,RoomUncheckedUpdateInputSchema ]),
  where: RoomWhereUniqueInputSchema,
}).strict() ;

export const RoomUpdateManyArgsSchema: z.ZodType<Prisma.RoomUpdateManyArgs> = z.object({
  data: z.union([ RoomUpdateManyMutationInputSchema,RoomUncheckedUpdateManyInputSchema ]),
  where: RoomWhereInputSchema.optional(),
}).strict() ;

export const RoomDeleteManyArgsSchema: z.ZodType<Prisma.RoomDeleteManyArgs> = z.object({
  where: RoomWhereInputSchema.optional(),
}).strict() ;

export const WishlistCreateArgsSchema: z.ZodType<Prisma.WishlistCreateArgs> = z.object({
  select: WishlistSelectSchema.optional(),
  include: WishlistIncludeSchema.optional(),
  data: z.union([ WishlistCreateInputSchema,WishlistUncheckedCreateInputSchema ]),
}).strict() ;

export const WishlistUpsertArgsSchema: z.ZodType<Prisma.WishlistUpsertArgs> = z.object({
  select: WishlistSelectSchema.optional(),
  include: WishlistIncludeSchema.optional(),
  where: WishlistWhereUniqueInputSchema,
  create: z.union([ WishlistCreateInputSchema,WishlistUncheckedCreateInputSchema ]),
  update: z.union([ WishlistUpdateInputSchema,WishlistUncheckedUpdateInputSchema ]),
}).strict() ;

export const WishlistCreateManyArgsSchema: z.ZodType<Prisma.WishlistCreateManyArgs> = z.object({
  data: z.union([ WishlistCreateManyInputSchema,WishlistCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const WishlistDeleteArgsSchema: z.ZodType<Prisma.WishlistDeleteArgs> = z.object({
  select: WishlistSelectSchema.optional(),
  include: WishlistIncludeSchema.optional(),
  where: WishlistWhereUniqueInputSchema,
}).strict() ;

export const WishlistUpdateArgsSchema: z.ZodType<Prisma.WishlistUpdateArgs> = z.object({
  select: WishlistSelectSchema.optional(),
  include: WishlistIncludeSchema.optional(),
  data: z.union([ WishlistUpdateInputSchema,WishlistUncheckedUpdateInputSchema ]),
  where: WishlistWhereUniqueInputSchema,
}).strict() ;

export const WishlistUpdateManyArgsSchema: z.ZodType<Prisma.WishlistUpdateManyArgs> = z.object({
  data: z.union([ WishlistUpdateManyMutationInputSchema,WishlistUncheckedUpdateManyInputSchema ]),
  where: WishlistWhereInputSchema.optional(),
}).strict() ;

export const WishlistDeleteManyArgsSchema: z.ZodType<Prisma.WishlistDeleteManyArgs> = z.object({
  where: WishlistWhereInputSchema.optional(),
}).strict() ;

export const PlantCreateArgsSchema: z.ZodType<Prisma.PlantCreateArgs> = z.object({
  select: PlantSelectSchema.optional(),
  include: PlantIncludeSchema.optional(),
  data: z.union([ PlantCreateInputSchema,PlantUncheckedCreateInputSchema ]),
}).strict() ;

export const PlantUpsertArgsSchema: z.ZodType<Prisma.PlantUpsertArgs> = z.object({
  select: PlantSelectSchema.optional(),
  include: PlantIncludeSchema.optional(),
  where: PlantWhereUniqueInputSchema,
  create: z.union([ PlantCreateInputSchema,PlantUncheckedCreateInputSchema ]),
  update: z.union([ PlantUpdateInputSchema,PlantUncheckedUpdateInputSchema ]),
}).strict() ;

export const PlantCreateManyArgsSchema: z.ZodType<Prisma.PlantCreateManyArgs> = z.object({
  data: z.union([ PlantCreateManyInputSchema,PlantCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PlantDeleteArgsSchema: z.ZodType<Prisma.PlantDeleteArgs> = z.object({
  select: PlantSelectSchema.optional(),
  include: PlantIncludeSchema.optional(),
  where: PlantWhereUniqueInputSchema,
}).strict() ;

export const PlantUpdateArgsSchema: z.ZodType<Prisma.PlantUpdateArgs> = z.object({
  select: PlantSelectSchema.optional(),
  include: PlantIncludeSchema.optional(),
  data: z.union([ PlantUpdateInputSchema,PlantUncheckedUpdateInputSchema ]),
  where: PlantWhereUniqueInputSchema,
}).strict() ;

export const PlantUpdateManyArgsSchema: z.ZodType<Prisma.PlantUpdateManyArgs> = z.object({
  data: z.union([ PlantUpdateManyMutationInputSchema,PlantUncheckedUpdateManyInputSchema ]),
  where: PlantWhereInputSchema.optional(),
}).strict() ;

export const PlantDeleteManyArgsSchema: z.ZodType<Prisma.PlantDeleteManyArgs> = z.object({
  where: PlantWhereInputSchema.optional(),
}).strict() ;