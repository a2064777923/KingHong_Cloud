
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Folder
 * 
 */
export type Folder = $Result.DefaultSelection<Prisma.$FolderPayload>
/**
 * Model FileEntry
 * 
 */
export type FileEntry = $Result.DefaultSelection<Prisma.$FileEntryPayload>
/**
 * Model Share
 * 
 */
export type Share = $Result.DefaultSelection<Prisma.$SharePayload>
/**
 * Model ShareItem
 * 
 */
export type ShareItem = $Result.DefaultSelection<Prisma.$ShareItemPayload>
/**
 * Model ShareAccessLog
 * 
 */
export type ShareAccessLog = $Result.DefaultSelection<Prisma.$ShareAccessLogPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const FileKind: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  PDF: 'PDF',
  TEXT: 'TEXT',
  CODE: 'CODE',
  ARCHIVE: 'ARCHIVE',
  OFFICE: 'OFFICE',
  OTHER: 'OTHER'
};

export type FileKind = (typeof FileKind)[keyof typeof FileKind]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type FileKind = $Enums.FileKind

export const FileKind: typeof $Enums.FileKind

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.folder`: Exposes CRUD operations for the **Folder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Folders
    * const folders = await prisma.folder.findMany()
    * ```
    */
  get folder(): Prisma.FolderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileEntry`: Exposes CRUD operations for the **FileEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileEntries
    * const fileEntries = await prisma.fileEntry.findMany()
    * ```
    */
  get fileEntry(): Prisma.FileEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.share`: Exposes CRUD operations for the **Share** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shares
    * const shares = await prisma.share.findMany()
    * ```
    */
  get share(): Prisma.ShareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shareItem`: Exposes CRUD operations for the **ShareItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShareItems
    * const shareItems = await prisma.shareItem.findMany()
    * ```
    */
  get shareItem(): Prisma.ShareItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shareAccessLog`: Exposes CRUD operations for the **ShareAccessLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShareAccessLogs
    * const shareAccessLogs = await prisma.shareAccessLog.findMany()
    * ```
    */
  get shareAccessLog(): Prisma.ShareAccessLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Folder: 'Folder',
    FileEntry: 'FileEntry',
    Share: 'Share',
    ShareItem: 'ShareItem',
    ShareAccessLog: 'ShareAccessLog',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "folder" | "fileEntry" | "share" | "shareItem" | "shareAccessLog" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Folder: {
        payload: Prisma.$FolderPayload<ExtArgs>
        fields: Prisma.FolderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FolderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FolderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          findFirst: {
            args: Prisma.FolderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FolderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          findMany: {
            args: Prisma.FolderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          create: {
            args: Prisma.FolderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          createMany: {
            args: Prisma.FolderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FolderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          delete: {
            args: Prisma.FolderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          update: {
            args: Prisma.FolderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          deleteMany: {
            args: Prisma.FolderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FolderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FolderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          upsert: {
            args: Prisma.FolderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          aggregate: {
            args: Prisma.FolderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFolder>
          }
          groupBy: {
            args: Prisma.FolderGroupByArgs<ExtArgs>
            result: $Utils.Optional<FolderGroupByOutputType>[]
          }
          count: {
            args: Prisma.FolderCountArgs<ExtArgs>
            result: $Utils.Optional<FolderCountAggregateOutputType> | number
          }
        }
      }
      FileEntry: {
        payload: Prisma.$FileEntryPayload<ExtArgs>
        fields: Prisma.FileEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileEntryPayload>
          }
          findFirst: {
            args: Prisma.FileEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileEntryPayload>
          }
          findMany: {
            args: Prisma.FileEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileEntryPayload>[]
          }
          create: {
            args: Prisma.FileEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileEntryPayload>
          }
          createMany: {
            args: Prisma.FileEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileEntryPayload>[]
          }
          delete: {
            args: Prisma.FileEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileEntryPayload>
          }
          update: {
            args: Prisma.FileEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileEntryPayload>
          }
          deleteMany: {
            args: Prisma.FileEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileEntryPayload>[]
          }
          upsert: {
            args: Prisma.FileEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileEntryPayload>
          }
          aggregate: {
            args: Prisma.FileEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileEntry>
          }
          groupBy: {
            args: Prisma.FileEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileEntryCountArgs<ExtArgs>
            result: $Utils.Optional<FileEntryCountAggregateOutputType> | number
          }
        }
      }
      Share: {
        payload: Prisma.$SharePayload<ExtArgs>
        fields: Prisma.ShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          findFirst: {
            args: Prisma.ShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          findMany: {
            args: Prisma.ShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>[]
          }
          create: {
            args: Prisma.ShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          createMany: {
            args: Prisma.ShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>[]
          }
          delete: {
            args: Prisma.ShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          update: {
            args: Prisma.ShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          deleteMany: {
            args: Prisma.ShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>[]
          }
          upsert: {
            args: Prisma.ShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          aggregate: {
            args: Prisma.ShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShare>
          }
          groupBy: {
            args: Prisma.ShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareCountArgs<ExtArgs>
            result: $Utils.Optional<ShareCountAggregateOutputType> | number
          }
        }
      }
      ShareItem: {
        payload: Prisma.$ShareItemPayload<ExtArgs>
        fields: Prisma.ShareItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareItemPayload>
          }
          findFirst: {
            args: Prisma.ShareItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareItemPayload>
          }
          findMany: {
            args: Prisma.ShareItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareItemPayload>[]
          }
          create: {
            args: Prisma.ShareItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareItemPayload>
          }
          createMany: {
            args: Prisma.ShareItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareItemPayload>[]
          }
          delete: {
            args: Prisma.ShareItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareItemPayload>
          }
          update: {
            args: Prisma.ShareItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareItemPayload>
          }
          deleteMany: {
            args: Prisma.ShareItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareItemPayload>[]
          }
          upsert: {
            args: Prisma.ShareItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareItemPayload>
          }
          aggregate: {
            args: Prisma.ShareItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareItem>
          }
          groupBy: {
            args: Prisma.ShareItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareItemCountArgs<ExtArgs>
            result: $Utils.Optional<ShareItemCountAggregateOutputType> | number
          }
        }
      }
      ShareAccessLog: {
        payload: Prisma.$ShareAccessLogPayload<ExtArgs>
        fields: Prisma.ShareAccessLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareAccessLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareAccessLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareAccessLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareAccessLogPayload>
          }
          findFirst: {
            args: Prisma.ShareAccessLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareAccessLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareAccessLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareAccessLogPayload>
          }
          findMany: {
            args: Prisma.ShareAccessLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareAccessLogPayload>[]
          }
          create: {
            args: Prisma.ShareAccessLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareAccessLogPayload>
          }
          createMany: {
            args: Prisma.ShareAccessLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareAccessLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareAccessLogPayload>[]
          }
          delete: {
            args: Prisma.ShareAccessLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareAccessLogPayload>
          }
          update: {
            args: Prisma.ShareAccessLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareAccessLogPayload>
          }
          deleteMany: {
            args: Prisma.ShareAccessLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareAccessLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareAccessLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareAccessLogPayload>[]
          }
          upsert: {
            args: Prisma.ShareAccessLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareAccessLogPayload>
          }
          aggregate: {
            args: Prisma.ShareAccessLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareAccessLog>
          }
          groupBy: {
            args: Prisma.ShareAccessLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareAccessLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareAccessLogCountArgs<ExtArgs>
            result: $Utils.Optional<ShareAccessLogCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    folder?: FolderOmit
    fileEntry?: FileEntryOmit
    share?: ShareOmit
    shareItem?: ShareItemOmit
    shareAccessLog?: ShareAccessLogOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    folders: number
    files: number
    shares: number
    sessions: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folders?: boolean | UserCountOutputTypeCountFoldersArgs
    files?: boolean | UserCountOutputTypeCountFilesArgs
    shares?: boolean | UserCountOutputTypeCountSharesArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type FolderCountOutputType
   */

  export type FolderCountOutputType = {
    children: number
    files: number
  }

  export type FolderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | FolderCountOutputTypeCountChildrenArgs
    files?: boolean | FolderCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolderCountOutputType
     */
    select?: FolderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
  }

  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileEntryWhereInput
  }


  /**
   * Count Type FileEntryCountOutputType
   */

  export type FileEntryCountOutputType = {
    shareItems: number
  }

  export type FileEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareItems?: boolean | FileEntryCountOutputTypeCountShareItemsArgs
  }

  // Custom InputTypes
  /**
   * FileEntryCountOutputType without action
   */
  export type FileEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntryCountOutputType
     */
    select?: FileEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileEntryCountOutputType without action
   */
  export type FileEntryCountOutputTypeCountShareItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareItemWhereInput
  }


  /**
   * Count Type ShareCountOutputType
   */

  export type ShareCountOutputType = {
    items: number
    accessLogs: number
  }

  export type ShareCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ShareCountOutputTypeCountItemsArgs
    accessLogs?: boolean | ShareCountOutputTypeCountAccessLogsArgs
  }

  // Custom InputTypes
  /**
   * ShareCountOutputType without action
   */
  export type ShareCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareCountOutputType
     */
    select?: ShareCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShareCountOutputType without action
   */
  export type ShareCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareItemWhereInput
  }

  /**
   * ShareCountOutputType without action
   */
  export type ShareCountOutputTypeCountAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareAccessLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    maxUploadBytes: number | null
  }

  export type UserSumAggregateOutputType = {
    maxUploadBytes: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    maxUploadBytes: bigint | null
    rootFolderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    maxUploadBytes: bigint | null
    rootFolderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    role: number
    isActive: number
    maxUploadBytes: number
    rootFolderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    maxUploadBytes?: true
  }

  export type UserSumAggregateInputType = {
    maxUploadBytes?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    isActive?: true
    maxUploadBytes?: true
    rootFolderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    isActive?: true
    maxUploadBytes?: true
    rootFolderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    isActive?: true
    maxUploadBytes?: true
    rootFolderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    passwordHash: string
    role: $Enums.UserRole
    isActive: boolean
    maxUploadBytes: bigint | null
    rootFolderId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    maxUploadBytes?: boolean
    rootFolderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    folders?: boolean | User$foldersArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    shares?: boolean | User$sharesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    maxUploadBytes?: boolean
    rootFolderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    maxUploadBytes?: boolean
    rootFolderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    maxUploadBytes?: boolean
    rootFolderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "role" | "isActive" | "maxUploadBytes" | "rootFolderId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folders?: boolean | User$foldersArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    shares?: boolean | User$sharesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      folders: Prisma.$FolderPayload<ExtArgs>[]
      files: Prisma.$FileEntryPayload<ExtArgs>[]
      shares: Prisma.$SharePayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      passwordHash: string
      role: $Enums.UserRole
      isActive: boolean
      maxUploadBytes: bigint | null
      rootFolderId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    folders<T extends User$foldersArgs<ExtArgs> = {}>(args?: Subset<T, User$foldersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends User$filesArgs<ExtArgs> = {}>(args?: Subset<T, User$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shares<T extends User$sharesArgs<ExtArgs> = {}>(args?: Subset<T, User$sharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly maxUploadBytes: FieldRef<"User", 'BigInt'>
    readonly rootFolderId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.folders
   */
  export type User$foldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    cursor?: FolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * User.files
   */
  export type User$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntry
     */
    select?: FileEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileEntry
     */
    omit?: FileEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileEntryInclude<ExtArgs> | null
    where?: FileEntryWhereInput
    orderBy?: FileEntryOrderByWithRelationInput | FileEntryOrderByWithRelationInput[]
    cursor?: FileEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileEntryScalarFieldEnum | FileEntryScalarFieldEnum[]
  }

  /**
   * User.shares
   */
  export type User$sharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    where?: ShareWhereInput
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    cursor?: ShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    createdAt: Date | null
    lastSeenAt: Date | null
    ip: string | null
    userAgent: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    createdAt: Date | null
    lastSeenAt: Date | null
    ip: string | null
    userAgent: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    expiresAt: number
    createdAt: number
    lastSeenAt: number
    ip: number
    userAgent: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
    lastSeenAt?: true
    ip?: true
    userAgent?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
    lastSeenAt?: true
    ip?: true
    userAgent?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
    lastSeenAt?: true
    ip?: true
    userAgent?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    expiresAt: Date
    createdAt: Date
    lastSeenAt: Date
    ip: string | null
    userAgent: string | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
    ip?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
    ip?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
    ip?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
    ip?: boolean
    userAgent?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "expiresAt" | "createdAt" | "lastSeenAt" | "ip" | "userAgent", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      expiresAt: Date
      createdAt: Date
      lastSeenAt: Date
      ip: string | null
      userAgent: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly tokenHash: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly lastSeenAt: FieldRef<"Session", 'DateTime'>
    readonly ip: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Folder
   */

  export type AggregateFolder = {
    _count: FolderCountAggregateOutputType | null
    _min: FolderMinAggregateOutputType | null
    _max: FolderMaxAggregateOutputType | null
  }

  export type FolderMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    parentId: string | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FolderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    parentId: string | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FolderCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    parentId: number
    path: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FolderMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    parentId?: true
    path?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FolderMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    parentId?: true
    path?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FolderCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    parentId?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FolderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folder to aggregate.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Folders
    **/
    _count?: true | FolderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FolderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FolderMaxAggregateInputType
  }

  export type GetFolderAggregateType<T extends FolderAggregateArgs> = {
        [P in keyof T & keyof AggregateFolder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolder[P]>
      : GetScalarType<T[P], AggregateFolder[P]>
  }




  export type FolderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithAggregationInput | FolderOrderByWithAggregationInput[]
    by: FolderScalarFieldEnum[] | FolderScalarFieldEnum
    having?: FolderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FolderCountAggregateInputType | true
    _min?: FolderMinAggregateInputType
    _max?: FolderMaxAggregateInputType
  }

  export type FolderGroupByOutputType = {
    id: string
    name: string
    ownerId: string
    parentId: string | null
    path: string
    createdAt: Date
    updatedAt: Date
    _count: FolderCountAggregateOutputType | null
    _min: FolderMinAggregateOutputType | null
    _max: FolderMaxAggregateOutputType | null
  }

  type GetFolderGroupByPayload<T extends FolderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FolderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FolderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FolderGroupByOutputType[P]>
            : GetScalarType<T[P], FolderGroupByOutputType[P]>
        }
      >
    >


  export type FolderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    parentId?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
    children?: boolean | Folder$childrenArgs<ExtArgs>
    files?: boolean | Folder$filesArgs<ExtArgs>
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    parentId?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    parentId?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    parentId?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FolderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "parentId" | "path" | "createdAt" | "updatedAt", ExtArgs["result"]["folder"]>
  export type FolderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
    children?: boolean | Folder$childrenArgs<ExtArgs>
    files?: boolean | Folder$filesArgs<ExtArgs>
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FolderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
  }
  export type FolderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
  }

  export type $FolderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Folder"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$FolderPayload<ExtArgs> | null
      children: Prisma.$FolderPayload<ExtArgs>[]
      files: Prisma.$FileEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerId: string
      parentId: string | null
      path: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["folder"]>
    composites: {}
  }

  type FolderGetPayload<S extends boolean | null | undefined | FolderDefaultArgs> = $Result.GetResult<Prisma.$FolderPayload, S>

  type FolderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FolderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FolderCountAggregateInputType | true
    }

  export interface FolderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Folder'], meta: { name: 'Folder' } }
    /**
     * Find zero or one Folder that matches the filter.
     * @param {FolderFindUniqueArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FolderFindUniqueArgs>(args: SelectSubset<T, FolderFindUniqueArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Folder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FolderFindUniqueOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FolderFindUniqueOrThrowArgs>(args: SelectSubset<T, FolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FolderFindFirstArgs>(args?: SelectSubset<T, FolderFindFirstArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FolderFindFirstOrThrowArgs>(args?: SelectSubset<T, FolderFindFirstOrThrowArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Folders
     * const folders = await prisma.folder.findMany()
     * 
     * // Get first 10 Folders
     * const folders = await prisma.folder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const folderWithIdOnly = await prisma.folder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FolderFindManyArgs>(args?: SelectSubset<T, FolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Folder.
     * @param {FolderCreateArgs} args - Arguments to create a Folder.
     * @example
     * // Create one Folder
     * const Folder = await prisma.folder.create({
     *   data: {
     *     // ... data to create a Folder
     *   }
     * })
     * 
     */
    create<T extends FolderCreateArgs>(args: SelectSubset<T, FolderCreateArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Folders.
     * @param {FolderCreateManyArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FolderCreateManyArgs>(args?: SelectSubset<T, FolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Folders and returns the data saved in the database.
     * @param {FolderCreateManyAndReturnArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FolderCreateManyAndReturnArgs>(args?: SelectSubset<T, FolderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Folder.
     * @param {FolderDeleteArgs} args - Arguments to delete one Folder.
     * @example
     * // Delete one Folder
     * const Folder = await prisma.folder.delete({
     *   where: {
     *     // ... filter to delete one Folder
     *   }
     * })
     * 
     */
    delete<T extends FolderDeleteArgs>(args: SelectSubset<T, FolderDeleteArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Folder.
     * @param {FolderUpdateArgs} args - Arguments to update one Folder.
     * @example
     * // Update one Folder
     * const folder = await prisma.folder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FolderUpdateArgs>(args: SelectSubset<T, FolderUpdateArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Folders.
     * @param {FolderDeleteManyArgs} args - Arguments to filter Folders to delete.
     * @example
     * // Delete a few Folders
     * const { count } = await prisma.folder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FolderDeleteManyArgs>(args?: SelectSubset<T, FolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FolderUpdateManyArgs>(args: SelectSubset<T, FolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders and returns the data updated in the database.
     * @param {FolderUpdateManyAndReturnArgs} args - Arguments to update many Folders.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FolderUpdateManyAndReturnArgs>(args: SelectSubset<T, FolderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Folder.
     * @param {FolderUpsertArgs} args - Arguments to update or create a Folder.
     * @example
     * // Update or create a Folder
     * const folder = await prisma.folder.upsert({
     *   create: {
     *     // ... data to create a Folder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Folder we want to update
     *   }
     * })
     */
    upsert<T extends FolderUpsertArgs>(args: SelectSubset<T, FolderUpsertArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderCountArgs} args - Arguments to filter Folders to count.
     * @example
     * // Count the number of Folders
     * const count = await prisma.folder.count({
     *   where: {
     *     // ... the filter for the Folders we want to count
     *   }
     * })
    **/
    count<T extends FolderCountArgs>(
      args?: Subset<T, FolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FolderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FolderAggregateArgs>(args: Subset<T, FolderAggregateArgs>): Prisma.PrismaPromise<GetFolderAggregateType<T>>

    /**
     * Group by Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FolderGroupByArgs['orderBy'] }
        : { orderBy?: FolderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Folder model
   */
  readonly fields: FolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Folder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FolderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Folder$parentArgs<ExtArgs> = {}>(args?: Subset<T, Folder$parentArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Folder$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Folder$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends Folder$filesArgs<ExtArgs> = {}>(args?: Subset<T, Folder$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Folder model
   */
  interface FolderFieldRefs {
    readonly id: FieldRef<"Folder", 'String'>
    readonly name: FieldRef<"Folder", 'String'>
    readonly ownerId: FieldRef<"Folder", 'String'>
    readonly parentId: FieldRef<"Folder", 'String'>
    readonly path: FieldRef<"Folder", 'String'>
    readonly createdAt: FieldRef<"Folder", 'DateTime'>
    readonly updatedAt: FieldRef<"Folder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Folder findUnique
   */
  export type FolderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder findUniqueOrThrow
   */
  export type FolderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder findFirst
   */
  export type FolderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder findFirstOrThrow
   */
  export type FolderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder findMany
   */
  export type FolderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folders to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder create
   */
  export type FolderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The data needed to create a Folder.
     */
    data: XOR<FolderCreateInput, FolderUncheckedCreateInput>
  }

  /**
   * Folder createMany
   */
  export type FolderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[]
  }

  /**
   * Folder createManyAndReturn
   */
  export type FolderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Folder update
   */
  export type FolderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The data needed to update a Folder.
     */
    data: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>
    /**
     * Choose, which Folder to update.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder updateMany
   */
  export type FolderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to update.
     */
    limit?: number
  }

  /**
   * Folder updateManyAndReturn
   */
  export type FolderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Folder upsert
   */
  export type FolderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The filter to search for the Folder to update in case it exists.
     */
    where: FolderWhereUniqueInput
    /**
     * In case the Folder found by the `where` argument doesn't exist, create a new Folder with this data.
     */
    create: XOR<FolderCreateInput, FolderUncheckedCreateInput>
    /**
     * In case the Folder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>
  }

  /**
   * Folder delete
   */
  export type FolderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter which Folder to delete.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder deleteMany
   */
  export type FolderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folders to delete
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to delete.
     */
    limit?: number
  }

  /**
   * Folder.parent
   */
  export type Folder$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
  }

  /**
   * Folder.children
   */
  export type Folder$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    cursor?: FolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder.files
   */
  export type Folder$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntry
     */
    select?: FileEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileEntry
     */
    omit?: FileEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileEntryInclude<ExtArgs> | null
    where?: FileEntryWhereInput
    orderBy?: FileEntryOrderByWithRelationInput | FileEntryOrderByWithRelationInput[]
    cursor?: FileEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileEntryScalarFieldEnum | FileEntryScalarFieldEnum[]
  }

  /**
   * Folder without action
   */
  export type FolderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
  }


  /**
   * Model FileEntry
   */

  export type AggregateFileEntry = {
    _count: FileEntryCountAggregateOutputType | null
    _avg: FileEntryAvgAggregateOutputType | null
    _sum: FileEntrySumAggregateOutputType | null
    _min: FileEntryMinAggregateOutputType | null
    _max: FileEntryMaxAggregateOutputType | null
  }

  export type FileEntryAvgAggregateOutputType = {
    sizeBytes: number | null
  }

  export type FileEntrySumAggregateOutputType = {
    sizeBytes: bigint | null
  }

  export type FileEntryMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    folderId: string | null
    storageKey: string | null
    originalName: string | null
    extension: string | null
    mimeType: string | null
    sizeBytes: bigint | null
    kind: $Enums.FileKind | null
    checksumSha256: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileEntryMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    folderId: string | null
    storageKey: string | null
    originalName: string | null
    extension: string | null
    mimeType: string | null
    sizeBytes: bigint | null
    kind: $Enums.FileKind | null
    checksumSha256: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileEntryCountAggregateOutputType = {
    id: number
    ownerId: number
    folderId: number
    storageKey: number
    originalName: number
    extension: number
    mimeType: number
    sizeBytes: number
    kind: number
    checksumSha256: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileEntryAvgAggregateInputType = {
    sizeBytes?: true
  }

  export type FileEntrySumAggregateInputType = {
    sizeBytes?: true
  }

  export type FileEntryMinAggregateInputType = {
    id?: true
    ownerId?: true
    folderId?: true
    storageKey?: true
    originalName?: true
    extension?: true
    mimeType?: true
    sizeBytes?: true
    kind?: true
    checksumSha256?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileEntryMaxAggregateInputType = {
    id?: true
    ownerId?: true
    folderId?: true
    storageKey?: true
    originalName?: true
    extension?: true
    mimeType?: true
    sizeBytes?: true
    kind?: true
    checksumSha256?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileEntryCountAggregateInputType = {
    id?: true
    ownerId?: true
    folderId?: true
    storageKey?: true
    originalName?: true
    extension?: true
    mimeType?: true
    sizeBytes?: true
    kind?: true
    checksumSha256?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileEntry to aggregate.
     */
    where?: FileEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileEntries to fetch.
     */
    orderBy?: FileEntryOrderByWithRelationInput | FileEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileEntries
    **/
    _count?: true | FileEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileEntryMaxAggregateInputType
  }

  export type GetFileEntryAggregateType<T extends FileEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateFileEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileEntry[P]>
      : GetScalarType<T[P], AggregateFileEntry[P]>
  }




  export type FileEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileEntryWhereInput
    orderBy?: FileEntryOrderByWithAggregationInput | FileEntryOrderByWithAggregationInput[]
    by: FileEntryScalarFieldEnum[] | FileEntryScalarFieldEnum
    having?: FileEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileEntryCountAggregateInputType | true
    _avg?: FileEntryAvgAggregateInputType
    _sum?: FileEntrySumAggregateInputType
    _min?: FileEntryMinAggregateInputType
    _max?: FileEntryMaxAggregateInputType
  }

  export type FileEntryGroupByOutputType = {
    id: string
    ownerId: string
    folderId: string | null
    storageKey: string
    originalName: string
    extension: string | null
    mimeType: string
    sizeBytes: bigint
    kind: $Enums.FileKind
    checksumSha256: string | null
    createdAt: Date
    updatedAt: Date
    _count: FileEntryCountAggregateOutputType | null
    _avg: FileEntryAvgAggregateOutputType | null
    _sum: FileEntrySumAggregateOutputType | null
    _min: FileEntryMinAggregateOutputType | null
    _max: FileEntryMaxAggregateOutputType | null
  }

  type GetFileEntryGroupByPayload<T extends FileEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileEntryGroupByOutputType[P]>
            : GetScalarType<T[P], FileEntryGroupByOutputType[P]>
        }
      >
    >


  export type FileEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    folderId?: boolean
    storageKey?: boolean
    originalName?: boolean
    extension?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    kind?: boolean
    checksumSha256?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    folder?: boolean | FileEntry$folderArgs<ExtArgs>
    shareItems?: boolean | FileEntry$shareItemsArgs<ExtArgs>
    _count?: boolean | FileEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileEntry"]>

  export type FileEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    folderId?: boolean
    storageKey?: boolean
    originalName?: boolean
    extension?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    kind?: boolean
    checksumSha256?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    folder?: boolean | FileEntry$folderArgs<ExtArgs>
  }, ExtArgs["result"]["fileEntry"]>

  export type FileEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    folderId?: boolean
    storageKey?: boolean
    originalName?: boolean
    extension?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    kind?: boolean
    checksumSha256?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    folder?: boolean | FileEntry$folderArgs<ExtArgs>
  }, ExtArgs["result"]["fileEntry"]>

  export type FileEntrySelectScalar = {
    id?: boolean
    ownerId?: boolean
    folderId?: boolean
    storageKey?: boolean
    originalName?: boolean
    extension?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    kind?: boolean
    checksumSha256?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "folderId" | "storageKey" | "originalName" | "extension" | "mimeType" | "sizeBytes" | "kind" | "checksumSha256" | "createdAt" | "updatedAt", ExtArgs["result"]["fileEntry"]>
  export type FileEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    folder?: boolean | FileEntry$folderArgs<ExtArgs>
    shareItems?: boolean | FileEntry$shareItemsArgs<ExtArgs>
    _count?: boolean | FileEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    folder?: boolean | FileEntry$folderArgs<ExtArgs>
  }
  export type FileEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    folder?: boolean | FileEntry$folderArgs<ExtArgs>
  }

  export type $FileEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileEntry"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      folder: Prisma.$FolderPayload<ExtArgs> | null
      shareItems: Prisma.$ShareItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      folderId: string | null
      storageKey: string
      originalName: string
      extension: string | null
      mimeType: string
      sizeBytes: bigint
      kind: $Enums.FileKind
      checksumSha256: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fileEntry"]>
    composites: {}
  }

  type FileEntryGetPayload<S extends boolean | null | undefined | FileEntryDefaultArgs> = $Result.GetResult<Prisma.$FileEntryPayload, S>

  type FileEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileEntryCountAggregateInputType | true
    }

  export interface FileEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileEntry'], meta: { name: 'FileEntry' } }
    /**
     * Find zero or one FileEntry that matches the filter.
     * @param {FileEntryFindUniqueArgs} args - Arguments to find a FileEntry
     * @example
     * // Get one FileEntry
     * const fileEntry = await prisma.fileEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileEntryFindUniqueArgs>(args: SelectSubset<T, FileEntryFindUniqueArgs<ExtArgs>>): Prisma__FileEntryClient<$Result.GetResult<Prisma.$FileEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileEntryFindUniqueOrThrowArgs} args - Arguments to find a FileEntry
     * @example
     * // Get one FileEntry
     * const fileEntry = await prisma.fileEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, FileEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileEntryClient<$Result.GetResult<Prisma.$FileEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileEntryFindFirstArgs} args - Arguments to find a FileEntry
     * @example
     * // Get one FileEntry
     * const fileEntry = await prisma.fileEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileEntryFindFirstArgs>(args?: SelectSubset<T, FileEntryFindFirstArgs<ExtArgs>>): Prisma__FileEntryClient<$Result.GetResult<Prisma.$FileEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileEntryFindFirstOrThrowArgs} args - Arguments to find a FileEntry
     * @example
     * // Get one FileEntry
     * const fileEntry = await prisma.fileEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, FileEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileEntryClient<$Result.GetResult<Prisma.$FileEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileEntries
     * const fileEntries = await prisma.fileEntry.findMany()
     * 
     * // Get first 10 FileEntries
     * const fileEntries = await prisma.fileEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileEntryWithIdOnly = await prisma.fileEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileEntryFindManyArgs>(args?: SelectSubset<T, FileEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileEntry.
     * @param {FileEntryCreateArgs} args - Arguments to create a FileEntry.
     * @example
     * // Create one FileEntry
     * const FileEntry = await prisma.fileEntry.create({
     *   data: {
     *     // ... data to create a FileEntry
     *   }
     * })
     * 
     */
    create<T extends FileEntryCreateArgs>(args: SelectSubset<T, FileEntryCreateArgs<ExtArgs>>): Prisma__FileEntryClient<$Result.GetResult<Prisma.$FileEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileEntries.
     * @param {FileEntryCreateManyArgs} args - Arguments to create many FileEntries.
     * @example
     * // Create many FileEntries
     * const fileEntry = await prisma.fileEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileEntryCreateManyArgs>(args?: SelectSubset<T, FileEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileEntries and returns the data saved in the database.
     * @param {FileEntryCreateManyAndReturnArgs} args - Arguments to create many FileEntries.
     * @example
     * // Create many FileEntries
     * const fileEntry = await prisma.fileEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileEntries and only return the `id`
     * const fileEntryWithIdOnly = await prisma.fileEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, FileEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileEntry.
     * @param {FileEntryDeleteArgs} args - Arguments to delete one FileEntry.
     * @example
     * // Delete one FileEntry
     * const FileEntry = await prisma.fileEntry.delete({
     *   where: {
     *     // ... filter to delete one FileEntry
     *   }
     * })
     * 
     */
    delete<T extends FileEntryDeleteArgs>(args: SelectSubset<T, FileEntryDeleteArgs<ExtArgs>>): Prisma__FileEntryClient<$Result.GetResult<Prisma.$FileEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileEntry.
     * @param {FileEntryUpdateArgs} args - Arguments to update one FileEntry.
     * @example
     * // Update one FileEntry
     * const fileEntry = await prisma.fileEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileEntryUpdateArgs>(args: SelectSubset<T, FileEntryUpdateArgs<ExtArgs>>): Prisma__FileEntryClient<$Result.GetResult<Prisma.$FileEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileEntries.
     * @param {FileEntryDeleteManyArgs} args - Arguments to filter FileEntries to delete.
     * @example
     * // Delete a few FileEntries
     * const { count } = await prisma.fileEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileEntryDeleteManyArgs>(args?: SelectSubset<T, FileEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileEntries
     * const fileEntry = await prisma.fileEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileEntryUpdateManyArgs>(args: SelectSubset<T, FileEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileEntries and returns the data updated in the database.
     * @param {FileEntryUpdateManyAndReturnArgs} args - Arguments to update many FileEntries.
     * @example
     * // Update many FileEntries
     * const fileEntry = await prisma.fileEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileEntries and only return the `id`
     * const fileEntryWithIdOnly = await prisma.fileEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, FileEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileEntry.
     * @param {FileEntryUpsertArgs} args - Arguments to update or create a FileEntry.
     * @example
     * // Update or create a FileEntry
     * const fileEntry = await prisma.fileEntry.upsert({
     *   create: {
     *     // ... data to create a FileEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileEntry we want to update
     *   }
     * })
     */
    upsert<T extends FileEntryUpsertArgs>(args: SelectSubset<T, FileEntryUpsertArgs<ExtArgs>>): Prisma__FileEntryClient<$Result.GetResult<Prisma.$FileEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileEntryCountArgs} args - Arguments to filter FileEntries to count.
     * @example
     * // Count the number of FileEntries
     * const count = await prisma.fileEntry.count({
     *   where: {
     *     // ... the filter for the FileEntries we want to count
     *   }
     * })
    **/
    count<T extends FileEntryCountArgs>(
      args?: Subset<T, FileEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileEntryAggregateArgs>(args: Subset<T, FileEntryAggregateArgs>): Prisma.PrismaPromise<GetFileEntryAggregateType<T>>

    /**
     * Group by FileEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileEntryGroupByArgs['orderBy'] }
        : { orderBy?: FileEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileEntry model
   */
  readonly fields: FileEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    folder<T extends FileEntry$folderArgs<ExtArgs> = {}>(args?: Subset<T, FileEntry$folderArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shareItems<T extends FileEntry$shareItemsArgs<ExtArgs> = {}>(args?: Subset<T, FileEntry$shareItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FileEntry model
   */
  interface FileEntryFieldRefs {
    readonly id: FieldRef<"FileEntry", 'String'>
    readonly ownerId: FieldRef<"FileEntry", 'String'>
    readonly folderId: FieldRef<"FileEntry", 'String'>
    readonly storageKey: FieldRef<"FileEntry", 'String'>
    readonly originalName: FieldRef<"FileEntry", 'String'>
    readonly extension: FieldRef<"FileEntry", 'String'>
    readonly mimeType: FieldRef<"FileEntry", 'String'>
    readonly sizeBytes: FieldRef<"FileEntry", 'BigInt'>
    readonly kind: FieldRef<"FileEntry", 'FileKind'>
    readonly checksumSha256: FieldRef<"FileEntry", 'String'>
    readonly createdAt: FieldRef<"FileEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"FileEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileEntry findUnique
   */
  export type FileEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntry
     */
    select?: FileEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileEntry
     */
    omit?: FileEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileEntryInclude<ExtArgs> | null
    /**
     * Filter, which FileEntry to fetch.
     */
    where: FileEntryWhereUniqueInput
  }

  /**
   * FileEntry findUniqueOrThrow
   */
  export type FileEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntry
     */
    select?: FileEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileEntry
     */
    omit?: FileEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileEntryInclude<ExtArgs> | null
    /**
     * Filter, which FileEntry to fetch.
     */
    where: FileEntryWhereUniqueInput
  }

  /**
   * FileEntry findFirst
   */
  export type FileEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntry
     */
    select?: FileEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileEntry
     */
    omit?: FileEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileEntryInclude<ExtArgs> | null
    /**
     * Filter, which FileEntry to fetch.
     */
    where?: FileEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileEntries to fetch.
     */
    orderBy?: FileEntryOrderByWithRelationInput | FileEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileEntries.
     */
    cursor?: FileEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileEntries.
     */
    distinct?: FileEntryScalarFieldEnum | FileEntryScalarFieldEnum[]
  }

  /**
   * FileEntry findFirstOrThrow
   */
  export type FileEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntry
     */
    select?: FileEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileEntry
     */
    omit?: FileEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileEntryInclude<ExtArgs> | null
    /**
     * Filter, which FileEntry to fetch.
     */
    where?: FileEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileEntries to fetch.
     */
    orderBy?: FileEntryOrderByWithRelationInput | FileEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileEntries.
     */
    cursor?: FileEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileEntries.
     */
    distinct?: FileEntryScalarFieldEnum | FileEntryScalarFieldEnum[]
  }

  /**
   * FileEntry findMany
   */
  export type FileEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntry
     */
    select?: FileEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileEntry
     */
    omit?: FileEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileEntryInclude<ExtArgs> | null
    /**
     * Filter, which FileEntries to fetch.
     */
    where?: FileEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileEntries to fetch.
     */
    orderBy?: FileEntryOrderByWithRelationInput | FileEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileEntries.
     */
    cursor?: FileEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileEntries.
     */
    distinct?: FileEntryScalarFieldEnum | FileEntryScalarFieldEnum[]
  }

  /**
   * FileEntry create
   */
  export type FileEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntry
     */
    select?: FileEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileEntry
     */
    omit?: FileEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a FileEntry.
     */
    data: XOR<FileEntryCreateInput, FileEntryUncheckedCreateInput>
  }

  /**
   * FileEntry createMany
   */
  export type FileEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileEntries.
     */
    data: FileEntryCreateManyInput | FileEntryCreateManyInput[]
  }

  /**
   * FileEntry createManyAndReturn
   */
  export type FileEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntry
     */
    select?: FileEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileEntry
     */
    omit?: FileEntryOmit<ExtArgs> | null
    /**
     * The data used to create many FileEntries.
     */
    data: FileEntryCreateManyInput | FileEntryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileEntry update
   */
  export type FileEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntry
     */
    select?: FileEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileEntry
     */
    omit?: FileEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a FileEntry.
     */
    data: XOR<FileEntryUpdateInput, FileEntryUncheckedUpdateInput>
    /**
     * Choose, which FileEntry to update.
     */
    where: FileEntryWhereUniqueInput
  }

  /**
   * FileEntry updateMany
   */
  export type FileEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileEntries.
     */
    data: XOR<FileEntryUpdateManyMutationInput, FileEntryUncheckedUpdateManyInput>
    /**
     * Filter which FileEntries to update
     */
    where?: FileEntryWhereInput
    /**
     * Limit how many FileEntries to update.
     */
    limit?: number
  }

  /**
   * FileEntry updateManyAndReturn
   */
  export type FileEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntry
     */
    select?: FileEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileEntry
     */
    omit?: FileEntryOmit<ExtArgs> | null
    /**
     * The data used to update FileEntries.
     */
    data: XOR<FileEntryUpdateManyMutationInput, FileEntryUncheckedUpdateManyInput>
    /**
     * Filter which FileEntries to update
     */
    where?: FileEntryWhereInput
    /**
     * Limit how many FileEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileEntry upsert
   */
  export type FileEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntry
     */
    select?: FileEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileEntry
     */
    omit?: FileEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the FileEntry to update in case it exists.
     */
    where: FileEntryWhereUniqueInput
    /**
     * In case the FileEntry found by the `where` argument doesn't exist, create a new FileEntry with this data.
     */
    create: XOR<FileEntryCreateInput, FileEntryUncheckedCreateInput>
    /**
     * In case the FileEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileEntryUpdateInput, FileEntryUncheckedUpdateInput>
  }

  /**
   * FileEntry delete
   */
  export type FileEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntry
     */
    select?: FileEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileEntry
     */
    omit?: FileEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileEntryInclude<ExtArgs> | null
    /**
     * Filter which FileEntry to delete.
     */
    where: FileEntryWhereUniqueInput
  }

  /**
   * FileEntry deleteMany
   */
  export type FileEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileEntries to delete
     */
    where?: FileEntryWhereInput
    /**
     * Limit how many FileEntries to delete.
     */
    limit?: number
  }

  /**
   * FileEntry.folder
   */
  export type FileEntry$folderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
  }

  /**
   * FileEntry.shareItems
   */
  export type FileEntry$shareItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareItem
     */
    select?: ShareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareItem
     */
    omit?: ShareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareItemInclude<ExtArgs> | null
    where?: ShareItemWhereInput
    orderBy?: ShareItemOrderByWithRelationInput | ShareItemOrderByWithRelationInput[]
    cursor?: ShareItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareItemScalarFieldEnum | ShareItemScalarFieldEnum[]
  }

  /**
   * FileEntry without action
   */
  export type FileEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileEntry
     */
    select?: FileEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileEntry
     */
    omit?: FileEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileEntryInclude<ExtArgs> | null
  }


  /**
   * Model Share
   */

  export type AggregateShare = {
    _count: ShareCountAggregateOutputType | null
    _avg: ShareAvgAggregateOutputType | null
    _sum: ShareSumAggregateOutputType | null
    _min: ShareMinAggregateOutputType | null
    _max: ShareMaxAggregateOutputType | null
  }

  export type ShareAvgAggregateOutputType = {
    maxDownloads: number | null
    downloadCount: number | null
  }

  export type ShareSumAggregateOutputType = {
    maxDownloads: number | null
    downloadCount: number | null
  }

  export type ShareMinAggregateOutputType = {
    id: string | null
    creatorId: string | null
    token: string | null
    passwordHash: string | null
    expiresAt: Date | null
    maxDownloads: number | null
    downloadCount: number | null
    allowPreview: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShareMaxAggregateOutputType = {
    id: string | null
    creatorId: string | null
    token: string | null
    passwordHash: string | null
    expiresAt: Date | null
    maxDownloads: number | null
    downloadCount: number | null
    allowPreview: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShareCountAggregateOutputType = {
    id: number
    creatorId: number
    token: number
    passwordHash: number
    expiresAt: number
    maxDownloads: number
    downloadCount: number
    allowPreview: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShareAvgAggregateInputType = {
    maxDownloads?: true
    downloadCount?: true
  }

  export type ShareSumAggregateInputType = {
    maxDownloads?: true
    downloadCount?: true
  }

  export type ShareMinAggregateInputType = {
    id?: true
    creatorId?: true
    token?: true
    passwordHash?: true
    expiresAt?: true
    maxDownloads?: true
    downloadCount?: true
    allowPreview?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShareMaxAggregateInputType = {
    id?: true
    creatorId?: true
    token?: true
    passwordHash?: true
    expiresAt?: true
    maxDownloads?: true
    downloadCount?: true
    allowPreview?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShareCountAggregateInputType = {
    id?: true
    creatorId?: true
    token?: true
    passwordHash?: true
    expiresAt?: true
    maxDownloads?: true
    downloadCount?: true
    allowPreview?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Share to aggregate.
     */
    where?: ShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shares
    **/
    _count?: true | ShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareMaxAggregateInputType
  }

  export type GetShareAggregateType<T extends ShareAggregateArgs> = {
        [P in keyof T & keyof AggregateShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShare[P]>
      : GetScalarType<T[P], AggregateShare[P]>
  }




  export type ShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareWhereInput
    orderBy?: ShareOrderByWithAggregationInput | ShareOrderByWithAggregationInput[]
    by: ShareScalarFieldEnum[] | ShareScalarFieldEnum
    having?: ShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareCountAggregateInputType | true
    _avg?: ShareAvgAggregateInputType
    _sum?: ShareSumAggregateInputType
    _min?: ShareMinAggregateInputType
    _max?: ShareMaxAggregateInputType
  }

  export type ShareGroupByOutputType = {
    id: string
    creatorId: string
    token: string
    passwordHash: string | null
    expiresAt: Date | null
    maxDownloads: number | null
    downloadCount: number
    allowPreview: boolean
    createdAt: Date
    updatedAt: Date
    _count: ShareCountAggregateOutputType | null
    _avg: ShareAvgAggregateOutputType | null
    _sum: ShareSumAggregateOutputType | null
    _min: ShareMinAggregateOutputType | null
    _max: ShareMaxAggregateOutputType | null
  }

  type GetShareGroupByPayload<T extends ShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareGroupByOutputType[P]>
            : GetScalarType<T[P], ShareGroupByOutputType[P]>
        }
      >
    >


  export type ShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    token?: boolean
    passwordHash?: boolean
    expiresAt?: boolean
    maxDownloads?: boolean
    downloadCount?: boolean
    allowPreview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Share$itemsArgs<ExtArgs>
    accessLogs?: boolean | Share$accessLogsArgs<ExtArgs>
    _count?: boolean | ShareCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["share"]>

  export type ShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    token?: boolean
    passwordHash?: boolean
    expiresAt?: boolean
    maxDownloads?: boolean
    downloadCount?: boolean
    allowPreview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["share"]>

  export type ShareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    token?: boolean
    passwordHash?: boolean
    expiresAt?: boolean
    maxDownloads?: boolean
    downloadCount?: boolean
    allowPreview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["share"]>

  export type ShareSelectScalar = {
    id?: boolean
    creatorId?: boolean
    token?: boolean
    passwordHash?: boolean
    expiresAt?: boolean
    maxDownloads?: boolean
    downloadCount?: boolean
    allowPreview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorId" | "token" | "passwordHash" | "expiresAt" | "maxDownloads" | "downloadCount" | "allowPreview" | "createdAt" | "updatedAt", ExtArgs["result"]["share"]>
  export type ShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Share$itemsArgs<ExtArgs>
    accessLogs?: boolean | Share$accessLogsArgs<ExtArgs>
    _count?: boolean | ShareCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Share"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$ShareItemPayload<ExtArgs>[]
      accessLogs: Prisma.$ShareAccessLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creatorId: string
      token: string
      passwordHash: string | null
      expiresAt: Date | null
      maxDownloads: number | null
      downloadCount: number
      allowPreview: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["share"]>
    composites: {}
  }

  type ShareGetPayload<S extends boolean | null | undefined | ShareDefaultArgs> = $Result.GetResult<Prisma.$SharePayload, S>

  type ShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareCountAggregateInputType | true
    }

  export interface ShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Share'], meta: { name: 'Share' } }
    /**
     * Find zero or one Share that matches the filter.
     * @param {ShareFindUniqueArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareFindUniqueArgs>(args: SelectSubset<T, ShareFindUniqueArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Share that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareFindUniqueOrThrowArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Share that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFindFirstArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareFindFirstArgs>(args?: SelectSubset<T, ShareFindFirstArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Share that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFindFirstOrThrowArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shares
     * const shares = await prisma.share.findMany()
     * 
     * // Get first 10 Shares
     * const shares = await prisma.share.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareWithIdOnly = await prisma.share.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareFindManyArgs>(args?: SelectSubset<T, ShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Share.
     * @param {ShareCreateArgs} args - Arguments to create a Share.
     * @example
     * // Create one Share
     * const Share = await prisma.share.create({
     *   data: {
     *     // ... data to create a Share
     *   }
     * })
     * 
     */
    create<T extends ShareCreateArgs>(args: SelectSubset<T, ShareCreateArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shares.
     * @param {ShareCreateManyArgs} args - Arguments to create many Shares.
     * @example
     * // Create many Shares
     * const share = await prisma.share.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareCreateManyArgs>(args?: SelectSubset<T, ShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shares and returns the data saved in the database.
     * @param {ShareCreateManyAndReturnArgs} args - Arguments to create many Shares.
     * @example
     * // Create many Shares
     * const share = await prisma.share.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shares and only return the `id`
     * const shareWithIdOnly = await prisma.share.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Share.
     * @param {ShareDeleteArgs} args - Arguments to delete one Share.
     * @example
     * // Delete one Share
     * const Share = await prisma.share.delete({
     *   where: {
     *     // ... filter to delete one Share
     *   }
     * })
     * 
     */
    delete<T extends ShareDeleteArgs>(args: SelectSubset<T, ShareDeleteArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Share.
     * @param {ShareUpdateArgs} args - Arguments to update one Share.
     * @example
     * // Update one Share
     * const share = await prisma.share.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareUpdateArgs>(args: SelectSubset<T, ShareUpdateArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shares.
     * @param {ShareDeleteManyArgs} args - Arguments to filter Shares to delete.
     * @example
     * // Delete a few Shares
     * const { count } = await prisma.share.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareDeleteManyArgs>(args?: SelectSubset<T, ShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shares
     * const share = await prisma.share.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareUpdateManyArgs>(args: SelectSubset<T, ShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shares and returns the data updated in the database.
     * @param {ShareUpdateManyAndReturnArgs} args - Arguments to update many Shares.
     * @example
     * // Update many Shares
     * const share = await prisma.share.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shares and only return the `id`
     * const shareWithIdOnly = await prisma.share.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Share.
     * @param {ShareUpsertArgs} args - Arguments to update or create a Share.
     * @example
     * // Update or create a Share
     * const share = await prisma.share.upsert({
     *   create: {
     *     // ... data to create a Share
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Share we want to update
     *   }
     * })
     */
    upsert<T extends ShareUpsertArgs>(args: SelectSubset<T, ShareUpsertArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareCountArgs} args - Arguments to filter Shares to count.
     * @example
     * // Count the number of Shares
     * const count = await prisma.share.count({
     *   where: {
     *     // ... the filter for the Shares we want to count
     *   }
     * })
    **/
    count<T extends ShareCountArgs>(
      args?: Subset<T, ShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Share.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShareAggregateArgs>(args: Subset<T, ShareAggregateArgs>): Prisma.PrismaPromise<GetShareAggregateType<T>>

    /**
     * Group by Share.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareGroupByArgs['orderBy'] }
        : { orderBy?: ShareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Share model
   */
  readonly fields: ShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Share.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Share$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Share$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accessLogs<T extends Share$accessLogsArgs<ExtArgs> = {}>(args?: Subset<T, Share$accessLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareAccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Share model
   */
  interface ShareFieldRefs {
    readonly id: FieldRef<"Share", 'String'>
    readonly creatorId: FieldRef<"Share", 'String'>
    readonly token: FieldRef<"Share", 'String'>
    readonly passwordHash: FieldRef<"Share", 'String'>
    readonly expiresAt: FieldRef<"Share", 'DateTime'>
    readonly maxDownloads: FieldRef<"Share", 'Int'>
    readonly downloadCount: FieldRef<"Share", 'Int'>
    readonly allowPreview: FieldRef<"Share", 'Boolean'>
    readonly createdAt: FieldRef<"Share", 'DateTime'>
    readonly updatedAt: FieldRef<"Share", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Share findUnique
   */
  export type ShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Share to fetch.
     */
    where: ShareWhereUniqueInput
  }

  /**
   * Share findUniqueOrThrow
   */
  export type ShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Share to fetch.
     */
    where: ShareWhereUniqueInput
  }

  /**
   * Share findFirst
   */
  export type ShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Share to fetch.
     */
    where?: ShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shares.
     */
    cursor?: ShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shares.
     */
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * Share findFirstOrThrow
   */
  export type ShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Share to fetch.
     */
    where?: ShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shares.
     */
    cursor?: ShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shares.
     */
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * Share findMany
   */
  export type ShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Shares to fetch.
     */
    where?: ShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shares.
     */
    cursor?: ShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shares.
     */
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * Share create
   */
  export type ShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * The data needed to create a Share.
     */
    data: XOR<ShareCreateInput, ShareUncheckedCreateInput>
  }

  /**
   * Share createMany
   */
  export type ShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shares.
     */
    data: ShareCreateManyInput | ShareCreateManyInput[]
  }

  /**
   * Share createManyAndReturn
   */
  export type ShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * The data used to create many Shares.
     */
    data: ShareCreateManyInput | ShareCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Share update
   */
  export type ShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * The data needed to update a Share.
     */
    data: XOR<ShareUpdateInput, ShareUncheckedUpdateInput>
    /**
     * Choose, which Share to update.
     */
    where: ShareWhereUniqueInput
  }

  /**
   * Share updateMany
   */
  export type ShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shares.
     */
    data: XOR<ShareUpdateManyMutationInput, ShareUncheckedUpdateManyInput>
    /**
     * Filter which Shares to update
     */
    where?: ShareWhereInput
    /**
     * Limit how many Shares to update.
     */
    limit?: number
  }

  /**
   * Share updateManyAndReturn
   */
  export type ShareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * The data used to update Shares.
     */
    data: XOR<ShareUpdateManyMutationInput, ShareUncheckedUpdateManyInput>
    /**
     * Filter which Shares to update
     */
    where?: ShareWhereInput
    /**
     * Limit how many Shares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Share upsert
   */
  export type ShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * The filter to search for the Share to update in case it exists.
     */
    where: ShareWhereUniqueInput
    /**
     * In case the Share found by the `where` argument doesn't exist, create a new Share with this data.
     */
    create: XOR<ShareCreateInput, ShareUncheckedCreateInput>
    /**
     * In case the Share was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareUpdateInput, ShareUncheckedUpdateInput>
  }

  /**
   * Share delete
   */
  export type ShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter which Share to delete.
     */
    where: ShareWhereUniqueInput
  }

  /**
   * Share deleteMany
   */
  export type ShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shares to delete
     */
    where?: ShareWhereInput
    /**
     * Limit how many Shares to delete.
     */
    limit?: number
  }

  /**
   * Share.items
   */
  export type Share$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareItem
     */
    select?: ShareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareItem
     */
    omit?: ShareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareItemInclude<ExtArgs> | null
    where?: ShareItemWhereInput
    orderBy?: ShareItemOrderByWithRelationInput | ShareItemOrderByWithRelationInput[]
    cursor?: ShareItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareItemScalarFieldEnum | ShareItemScalarFieldEnum[]
  }

  /**
   * Share.accessLogs
   */
  export type Share$accessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareAccessLog
     */
    select?: ShareAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareAccessLog
     */
    omit?: ShareAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareAccessLogInclude<ExtArgs> | null
    where?: ShareAccessLogWhereInput
    orderBy?: ShareAccessLogOrderByWithRelationInput | ShareAccessLogOrderByWithRelationInput[]
    cursor?: ShareAccessLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareAccessLogScalarFieldEnum | ShareAccessLogScalarFieldEnum[]
  }

  /**
   * Share without action
   */
  export type ShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
  }


  /**
   * Model ShareItem
   */

  export type AggregateShareItem = {
    _count: ShareItemCountAggregateOutputType | null
    _min: ShareItemMinAggregateOutputType | null
    _max: ShareItemMaxAggregateOutputType | null
  }

  export type ShareItemMinAggregateOutputType = {
    id: string | null
    shareId: string | null
    fileId: string | null
    createdAt: Date | null
  }

  export type ShareItemMaxAggregateOutputType = {
    id: string | null
    shareId: string | null
    fileId: string | null
    createdAt: Date | null
  }

  export type ShareItemCountAggregateOutputType = {
    id: number
    shareId: number
    fileId: number
    createdAt: number
    _all: number
  }


  export type ShareItemMinAggregateInputType = {
    id?: true
    shareId?: true
    fileId?: true
    createdAt?: true
  }

  export type ShareItemMaxAggregateInputType = {
    id?: true
    shareId?: true
    fileId?: true
    createdAt?: true
  }

  export type ShareItemCountAggregateInputType = {
    id?: true
    shareId?: true
    fileId?: true
    createdAt?: true
    _all?: true
  }

  export type ShareItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareItem to aggregate.
     */
    where?: ShareItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareItems to fetch.
     */
    orderBy?: ShareItemOrderByWithRelationInput | ShareItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShareItems
    **/
    _count?: true | ShareItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareItemMaxAggregateInputType
  }

  export type GetShareItemAggregateType<T extends ShareItemAggregateArgs> = {
        [P in keyof T & keyof AggregateShareItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareItem[P]>
      : GetScalarType<T[P], AggregateShareItem[P]>
  }




  export type ShareItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareItemWhereInput
    orderBy?: ShareItemOrderByWithAggregationInput | ShareItemOrderByWithAggregationInput[]
    by: ShareItemScalarFieldEnum[] | ShareItemScalarFieldEnum
    having?: ShareItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareItemCountAggregateInputType | true
    _min?: ShareItemMinAggregateInputType
    _max?: ShareItemMaxAggregateInputType
  }

  export type ShareItemGroupByOutputType = {
    id: string
    shareId: string
    fileId: string
    createdAt: Date
    _count: ShareItemCountAggregateOutputType | null
    _min: ShareItemMinAggregateOutputType | null
    _max: ShareItemMaxAggregateOutputType | null
  }

  type GetShareItemGroupByPayload<T extends ShareItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareItemGroupByOutputType[P]>
            : GetScalarType<T[P], ShareItemGroupByOutputType[P]>
        }
      >
    >


  export type ShareItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareId?: boolean
    fileId?: boolean
    createdAt?: boolean
    share?: boolean | ShareDefaultArgs<ExtArgs>
    file?: boolean | FileEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareItem"]>

  export type ShareItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareId?: boolean
    fileId?: boolean
    createdAt?: boolean
    share?: boolean | ShareDefaultArgs<ExtArgs>
    file?: boolean | FileEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareItem"]>

  export type ShareItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareId?: boolean
    fileId?: boolean
    createdAt?: boolean
    share?: boolean | ShareDefaultArgs<ExtArgs>
    file?: boolean | FileEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareItem"]>

  export type ShareItemSelectScalar = {
    id?: boolean
    shareId?: boolean
    fileId?: boolean
    createdAt?: boolean
  }

  export type ShareItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shareId" | "fileId" | "createdAt", ExtArgs["result"]["shareItem"]>
  export type ShareItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    share?: boolean | ShareDefaultArgs<ExtArgs>
    file?: boolean | FileEntryDefaultArgs<ExtArgs>
  }
  export type ShareItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    share?: boolean | ShareDefaultArgs<ExtArgs>
    file?: boolean | FileEntryDefaultArgs<ExtArgs>
  }
  export type ShareItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    share?: boolean | ShareDefaultArgs<ExtArgs>
    file?: boolean | FileEntryDefaultArgs<ExtArgs>
  }

  export type $ShareItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShareItem"
    objects: {
      share: Prisma.$SharePayload<ExtArgs>
      file: Prisma.$FileEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shareId: string
      fileId: string
      createdAt: Date
    }, ExtArgs["result"]["shareItem"]>
    composites: {}
  }

  type ShareItemGetPayload<S extends boolean | null | undefined | ShareItemDefaultArgs> = $Result.GetResult<Prisma.$ShareItemPayload, S>

  type ShareItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareItemCountAggregateInputType | true
    }

  export interface ShareItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShareItem'], meta: { name: 'ShareItem' } }
    /**
     * Find zero or one ShareItem that matches the filter.
     * @param {ShareItemFindUniqueArgs} args - Arguments to find a ShareItem
     * @example
     * // Get one ShareItem
     * const shareItem = await prisma.shareItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareItemFindUniqueArgs>(args: SelectSubset<T, ShareItemFindUniqueArgs<ExtArgs>>): Prisma__ShareItemClient<$Result.GetResult<Prisma.$ShareItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShareItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareItemFindUniqueOrThrowArgs} args - Arguments to find a ShareItem
     * @example
     * // Get one ShareItem
     * const shareItem = await prisma.shareItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareItemClient<$Result.GetResult<Prisma.$ShareItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareItemFindFirstArgs} args - Arguments to find a ShareItem
     * @example
     * // Get one ShareItem
     * const shareItem = await prisma.shareItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareItemFindFirstArgs>(args?: SelectSubset<T, ShareItemFindFirstArgs<ExtArgs>>): Prisma__ShareItemClient<$Result.GetResult<Prisma.$ShareItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareItemFindFirstOrThrowArgs} args - Arguments to find a ShareItem
     * @example
     * // Get one ShareItem
     * const shareItem = await prisma.shareItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareItemClient<$Result.GetResult<Prisma.$ShareItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShareItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShareItems
     * const shareItems = await prisma.shareItem.findMany()
     * 
     * // Get first 10 ShareItems
     * const shareItems = await prisma.shareItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareItemWithIdOnly = await prisma.shareItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareItemFindManyArgs>(args?: SelectSubset<T, ShareItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShareItem.
     * @param {ShareItemCreateArgs} args - Arguments to create a ShareItem.
     * @example
     * // Create one ShareItem
     * const ShareItem = await prisma.shareItem.create({
     *   data: {
     *     // ... data to create a ShareItem
     *   }
     * })
     * 
     */
    create<T extends ShareItemCreateArgs>(args: SelectSubset<T, ShareItemCreateArgs<ExtArgs>>): Prisma__ShareItemClient<$Result.GetResult<Prisma.$ShareItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShareItems.
     * @param {ShareItemCreateManyArgs} args - Arguments to create many ShareItems.
     * @example
     * // Create many ShareItems
     * const shareItem = await prisma.shareItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareItemCreateManyArgs>(args?: SelectSubset<T, ShareItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShareItems and returns the data saved in the database.
     * @param {ShareItemCreateManyAndReturnArgs} args - Arguments to create many ShareItems.
     * @example
     * // Create many ShareItems
     * const shareItem = await prisma.shareItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShareItems and only return the `id`
     * const shareItemWithIdOnly = await prisma.shareItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShareItem.
     * @param {ShareItemDeleteArgs} args - Arguments to delete one ShareItem.
     * @example
     * // Delete one ShareItem
     * const ShareItem = await prisma.shareItem.delete({
     *   where: {
     *     // ... filter to delete one ShareItem
     *   }
     * })
     * 
     */
    delete<T extends ShareItemDeleteArgs>(args: SelectSubset<T, ShareItemDeleteArgs<ExtArgs>>): Prisma__ShareItemClient<$Result.GetResult<Prisma.$ShareItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShareItem.
     * @param {ShareItemUpdateArgs} args - Arguments to update one ShareItem.
     * @example
     * // Update one ShareItem
     * const shareItem = await prisma.shareItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareItemUpdateArgs>(args: SelectSubset<T, ShareItemUpdateArgs<ExtArgs>>): Prisma__ShareItemClient<$Result.GetResult<Prisma.$ShareItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShareItems.
     * @param {ShareItemDeleteManyArgs} args - Arguments to filter ShareItems to delete.
     * @example
     * // Delete a few ShareItems
     * const { count } = await prisma.shareItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareItemDeleteManyArgs>(args?: SelectSubset<T, ShareItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShareItems
     * const shareItem = await prisma.shareItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareItemUpdateManyArgs>(args: SelectSubset<T, ShareItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareItems and returns the data updated in the database.
     * @param {ShareItemUpdateManyAndReturnArgs} args - Arguments to update many ShareItems.
     * @example
     * // Update many ShareItems
     * const shareItem = await prisma.shareItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShareItems and only return the `id`
     * const shareItemWithIdOnly = await prisma.shareItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShareItem.
     * @param {ShareItemUpsertArgs} args - Arguments to update or create a ShareItem.
     * @example
     * // Update or create a ShareItem
     * const shareItem = await prisma.shareItem.upsert({
     *   create: {
     *     // ... data to create a ShareItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShareItem we want to update
     *   }
     * })
     */
    upsert<T extends ShareItemUpsertArgs>(args: SelectSubset<T, ShareItemUpsertArgs<ExtArgs>>): Prisma__ShareItemClient<$Result.GetResult<Prisma.$ShareItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShareItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareItemCountArgs} args - Arguments to filter ShareItems to count.
     * @example
     * // Count the number of ShareItems
     * const count = await prisma.shareItem.count({
     *   where: {
     *     // ... the filter for the ShareItems we want to count
     *   }
     * })
    **/
    count<T extends ShareItemCountArgs>(
      args?: Subset<T, ShareItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShareItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShareItemAggregateArgs>(args: Subset<T, ShareItemAggregateArgs>): Prisma.PrismaPromise<GetShareItemAggregateType<T>>

    /**
     * Group by ShareItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShareItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareItemGroupByArgs['orderBy'] }
        : { orderBy?: ShareItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShareItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShareItem model
   */
  readonly fields: ShareItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShareItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    share<T extends ShareDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShareDefaultArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    file<T extends FileEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileEntryDefaultArgs<ExtArgs>>): Prisma__FileEntryClient<$Result.GetResult<Prisma.$FileEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShareItem model
   */
  interface ShareItemFieldRefs {
    readonly id: FieldRef<"ShareItem", 'String'>
    readonly shareId: FieldRef<"ShareItem", 'String'>
    readonly fileId: FieldRef<"ShareItem", 'String'>
    readonly createdAt: FieldRef<"ShareItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShareItem findUnique
   */
  export type ShareItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareItem
     */
    select?: ShareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareItem
     */
    omit?: ShareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareItemInclude<ExtArgs> | null
    /**
     * Filter, which ShareItem to fetch.
     */
    where: ShareItemWhereUniqueInput
  }

  /**
   * ShareItem findUniqueOrThrow
   */
  export type ShareItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareItem
     */
    select?: ShareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareItem
     */
    omit?: ShareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareItemInclude<ExtArgs> | null
    /**
     * Filter, which ShareItem to fetch.
     */
    where: ShareItemWhereUniqueInput
  }

  /**
   * ShareItem findFirst
   */
  export type ShareItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareItem
     */
    select?: ShareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareItem
     */
    omit?: ShareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareItemInclude<ExtArgs> | null
    /**
     * Filter, which ShareItem to fetch.
     */
    where?: ShareItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareItems to fetch.
     */
    orderBy?: ShareItemOrderByWithRelationInput | ShareItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareItems.
     */
    cursor?: ShareItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareItems.
     */
    distinct?: ShareItemScalarFieldEnum | ShareItemScalarFieldEnum[]
  }

  /**
   * ShareItem findFirstOrThrow
   */
  export type ShareItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareItem
     */
    select?: ShareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareItem
     */
    omit?: ShareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareItemInclude<ExtArgs> | null
    /**
     * Filter, which ShareItem to fetch.
     */
    where?: ShareItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareItems to fetch.
     */
    orderBy?: ShareItemOrderByWithRelationInput | ShareItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareItems.
     */
    cursor?: ShareItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareItems.
     */
    distinct?: ShareItemScalarFieldEnum | ShareItemScalarFieldEnum[]
  }

  /**
   * ShareItem findMany
   */
  export type ShareItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareItem
     */
    select?: ShareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareItem
     */
    omit?: ShareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareItemInclude<ExtArgs> | null
    /**
     * Filter, which ShareItems to fetch.
     */
    where?: ShareItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareItems to fetch.
     */
    orderBy?: ShareItemOrderByWithRelationInput | ShareItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShareItems.
     */
    cursor?: ShareItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareItems.
     */
    distinct?: ShareItemScalarFieldEnum | ShareItemScalarFieldEnum[]
  }

  /**
   * ShareItem create
   */
  export type ShareItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareItem
     */
    select?: ShareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareItem
     */
    omit?: ShareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ShareItem.
     */
    data: XOR<ShareItemCreateInput, ShareItemUncheckedCreateInput>
  }

  /**
   * ShareItem createMany
   */
  export type ShareItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShareItems.
     */
    data: ShareItemCreateManyInput | ShareItemCreateManyInput[]
  }

  /**
   * ShareItem createManyAndReturn
   */
  export type ShareItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareItem
     */
    select?: ShareItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareItem
     */
    omit?: ShareItemOmit<ExtArgs> | null
    /**
     * The data used to create many ShareItems.
     */
    data: ShareItemCreateManyInput | ShareItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareItem update
   */
  export type ShareItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareItem
     */
    select?: ShareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareItem
     */
    omit?: ShareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ShareItem.
     */
    data: XOR<ShareItemUpdateInput, ShareItemUncheckedUpdateInput>
    /**
     * Choose, which ShareItem to update.
     */
    where: ShareItemWhereUniqueInput
  }

  /**
   * ShareItem updateMany
   */
  export type ShareItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShareItems.
     */
    data: XOR<ShareItemUpdateManyMutationInput, ShareItemUncheckedUpdateManyInput>
    /**
     * Filter which ShareItems to update
     */
    where?: ShareItemWhereInput
    /**
     * Limit how many ShareItems to update.
     */
    limit?: number
  }

  /**
   * ShareItem updateManyAndReturn
   */
  export type ShareItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareItem
     */
    select?: ShareItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareItem
     */
    omit?: ShareItemOmit<ExtArgs> | null
    /**
     * The data used to update ShareItems.
     */
    data: XOR<ShareItemUpdateManyMutationInput, ShareItemUncheckedUpdateManyInput>
    /**
     * Filter which ShareItems to update
     */
    where?: ShareItemWhereInput
    /**
     * Limit how many ShareItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareItem upsert
   */
  export type ShareItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareItem
     */
    select?: ShareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareItem
     */
    omit?: ShareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ShareItem to update in case it exists.
     */
    where: ShareItemWhereUniqueInput
    /**
     * In case the ShareItem found by the `where` argument doesn't exist, create a new ShareItem with this data.
     */
    create: XOR<ShareItemCreateInput, ShareItemUncheckedCreateInput>
    /**
     * In case the ShareItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareItemUpdateInput, ShareItemUncheckedUpdateInput>
  }

  /**
   * ShareItem delete
   */
  export type ShareItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareItem
     */
    select?: ShareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareItem
     */
    omit?: ShareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareItemInclude<ExtArgs> | null
    /**
     * Filter which ShareItem to delete.
     */
    where: ShareItemWhereUniqueInput
  }

  /**
   * ShareItem deleteMany
   */
  export type ShareItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareItems to delete
     */
    where?: ShareItemWhereInput
    /**
     * Limit how many ShareItems to delete.
     */
    limit?: number
  }

  /**
   * ShareItem without action
   */
  export type ShareItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareItem
     */
    select?: ShareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareItem
     */
    omit?: ShareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareItemInclude<ExtArgs> | null
  }


  /**
   * Model ShareAccessLog
   */

  export type AggregateShareAccessLog = {
    _count: ShareAccessLogCountAggregateOutputType | null
    _min: ShareAccessLogMinAggregateOutputType | null
    _max: ShareAccessLogMaxAggregateOutputType | null
  }

  export type ShareAccessLogMinAggregateOutputType = {
    id: string | null
    shareId: string | null
    accessedAt: Date | null
    ip: string | null
    userAgent: string | null
    action: string | null
  }

  export type ShareAccessLogMaxAggregateOutputType = {
    id: string | null
    shareId: string | null
    accessedAt: Date | null
    ip: string | null
    userAgent: string | null
    action: string | null
  }

  export type ShareAccessLogCountAggregateOutputType = {
    id: number
    shareId: number
    accessedAt: number
    ip: number
    userAgent: number
    action: number
    _all: number
  }


  export type ShareAccessLogMinAggregateInputType = {
    id?: true
    shareId?: true
    accessedAt?: true
    ip?: true
    userAgent?: true
    action?: true
  }

  export type ShareAccessLogMaxAggregateInputType = {
    id?: true
    shareId?: true
    accessedAt?: true
    ip?: true
    userAgent?: true
    action?: true
  }

  export type ShareAccessLogCountAggregateInputType = {
    id?: true
    shareId?: true
    accessedAt?: true
    ip?: true
    userAgent?: true
    action?: true
    _all?: true
  }

  export type ShareAccessLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareAccessLog to aggregate.
     */
    where?: ShareAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareAccessLogs to fetch.
     */
    orderBy?: ShareAccessLogOrderByWithRelationInput | ShareAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShareAccessLogs
    **/
    _count?: true | ShareAccessLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareAccessLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareAccessLogMaxAggregateInputType
  }

  export type GetShareAccessLogAggregateType<T extends ShareAccessLogAggregateArgs> = {
        [P in keyof T & keyof AggregateShareAccessLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareAccessLog[P]>
      : GetScalarType<T[P], AggregateShareAccessLog[P]>
  }




  export type ShareAccessLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareAccessLogWhereInput
    orderBy?: ShareAccessLogOrderByWithAggregationInput | ShareAccessLogOrderByWithAggregationInput[]
    by: ShareAccessLogScalarFieldEnum[] | ShareAccessLogScalarFieldEnum
    having?: ShareAccessLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareAccessLogCountAggregateInputType | true
    _min?: ShareAccessLogMinAggregateInputType
    _max?: ShareAccessLogMaxAggregateInputType
  }

  export type ShareAccessLogGroupByOutputType = {
    id: string
    shareId: string
    accessedAt: Date
    ip: string | null
    userAgent: string | null
    action: string
    _count: ShareAccessLogCountAggregateOutputType | null
    _min: ShareAccessLogMinAggregateOutputType | null
    _max: ShareAccessLogMaxAggregateOutputType | null
  }

  type GetShareAccessLogGroupByPayload<T extends ShareAccessLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareAccessLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareAccessLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareAccessLogGroupByOutputType[P]>
            : GetScalarType<T[P], ShareAccessLogGroupByOutputType[P]>
        }
      >
    >


  export type ShareAccessLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareId?: boolean
    accessedAt?: boolean
    ip?: boolean
    userAgent?: boolean
    action?: boolean
    share?: boolean | ShareDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareAccessLog"]>

  export type ShareAccessLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareId?: boolean
    accessedAt?: boolean
    ip?: boolean
    userAgent?: boolean
    action?: boolean
    share?: boolean | ShareDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareAccessLog"]>

  export type ShareAccessLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareId?: boolean
    accessedAt?: boolean
    ip?: boolean
    userAgent?: boolean
    action?: boolean
    share?: boolean | ShareDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareAccessLog"]>

  export type ShareAccessLogSelectScalar = {
    id?: boolean
    shareId?: boolean
    accessedAt?: boolean
    ip?: boolean
    userAgent?: boolean
    action?: boolean
  }

  export type ShareAccessLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shareId" | "accessedAt" | "ip" | "userAgent" | "action", ExtArgs["result"]["shareAccessLog"]>
  export type ShareAccessLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    share?: boolean | ShareDefaultArgs<ExtArgs>
  }
  export type ShareAccessLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    share?: boolean | ShareDefaultArgs<ExtArgs>
  }
  export type ShareAccessLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    share?: boolean | ShareDefaultArgs<ExtArgs>
  }

  export type $ShareAccessLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShareAccessLog"
    objects: {
      share: Prisma.$SharePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shareId: string
      accessedAt: Date
      ip: string | null
      userAgent: string | null
      action: string
    }, ExtArgs["result"]["shareAccessLog"]>
    composites: {}
  }

  type ShareAccessLogGetPayload<S extends boolean | null | undefined | ShareAccessLogDefaultArgs> = $Result.GetResult<Prisma.$ShareAccessLogPayload, S>

  type ShareAccessLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareAccessLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareAccessLogCountAggregateInputType | true
    }

  export interface ShareAccessLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShareAccessLog'], meta: { name: 'ShareAccessLog' } }
    /**
     * Find zero or one ShareAccessLog that matches the filter.
     * @param {ShareAccessLogFindUniqueArgs} args - Arguments to find a ShareAccessLog
     * @example
     * // Get one ShareAccessLog
     * const shareAccessLog = await prisma.shareAccessLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareAccessLogFindUniqueArgs>(args: SelectSubset<T, ShareAccessLogFindUniqueArgs<ExtArgs>>): Prisma__ShareAccessLogClient<$Result.GetResult<Prisma.$ShareAccessLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShareAccessLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareAccessLogFindUniqueOrThrowArgs} args - Arguments to find a ShareAccessLog
     * @example
     * // Get one ShareAccessLog
     * const shareAccessLog = await prisma.shareAccessLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareAccessLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareAccessLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareAccessLogClient<$Result.GetResult<Prisma.$ShareAccessLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareAccessLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareAccessLogFindFirstArgs} args - Arguments to find a ShareAccessLog
     * @example
     * // Get one ShareAccessLog
     * const shareAccessLog = await prisma.shareAccessLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareAccessLogFindFirstArgs>(args?: SelectSubset<T, ShareAccessLogFindFirstArgs<ExtArgs>>): Prisma__ShareAccessLogClient<$Result.GetResult<Prisma.$ShareAccessLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareAccessLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareAccessLogFindFirstOrThrowArgs} args - Arguments to find a ShareAccessLog
     * @example
     * // Get one ShareAccessLog
     * const shareAccessLog = await prisma.shareAccessLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareAccessLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareAccessLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareAccessLogClient<$Result.GetResult<Prisma.$ShareAccessLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShareAccessLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareAccessLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShareAccessLogs
     * const shareAccessLogs = await prisma.shareAccessLog.findMany()
     * 
     * // Get first 10 ShareAccessLogs
     * const shareAccessLogs = await prisma.shareAccessLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareAccessLogWithIdOnly = await prisma.shareAccessLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareAccessLogFindManyArgs>(args?: SelectSubset<T, ShareAccessLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareAccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShareAccessLog.
     * @param {ShareAccessLogCreateArgs} args - Arguments to create a ShareAccessLog.
     * @example
     * // Create one ShareAccessLog
     * const ShareAccessLog = await prisma.shareAccessLog.create({
     *   data: {
     *     // ... data to create a ShareAccessLog
     *   }
     * })
     * 
     */
    create<T extends ShareAccessLogCreateArgs>(args: SelectSubset<T, ShareAccessLogCreateArgs<ExtArgs>>): Prisma__ShareAccessLogClient<$Result.GetResult<Prisma.$ShareAccessLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShareAccessLogs.
     * @param {ShareAccessLogCreateManyArgs} args - Arguments to create many ShareAccessLogs.
     * @example
     * // Create many ShareAccessLogs
     * const shareAccessLog = await prisma.shareAccessLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareAccessLogCreateManyArgs>(args?: SelectSubset<T, ShareAccessLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShareAccessLogs and returns the data saved in the database.
     * @param {ShareAccessLogCreateManyAndReturnArgs} args - Arguments to create many ShareAccessLogs.
     * @example
     * // Create many ShareAccessLogs
     * const shareAccessLog = await prisma.shareAccessLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShareAccessLogs and only return the `id`
     * const shareAccessLogWithIdOnly = await prisma.shareAccessLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareAccessLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareAccessLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareAccessLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShareAccessLog.
     * @param {ShareAccessLogDeleteArgs} args - Arguments to delete one ShareAccessLog.
     * @example
     * // Delete one ShareAccessLog
     * const ShareAccessLog = await prisma.shareAccessLog.delete({
     *   where: {
     *     // ... filter to delete one ShareAccessLog
     *   }
     * })
     * 
     */
    delete<T extends ShareAccessLogDeleteArgs>(args: SelectSubset<T, ShareAccessLogDeleteArgs<ExtArgs>>): Prisma__ShareAccessLogClient<$Result.GetResult<Prisma.$ShareAccessLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShareAccessLog.
     * @param {ShareAccessLogUpdateArgs} args - Arguments to update one ShareAccessLog.
     * @example
     * // Update one ShareAccessLog
     * const shareAccessLog = await prisma.shareAccessLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareAccessLogUpdateArgs>(args: SelectSubset<T, ShareAccessLogUpdateArgs<ExtArgs>>): Prisma__ShareAccessLogClient<$Result.GetResult<Prisma.$ShareAccessLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShareAccessLogs.
     * @param {ShareAccessLogDeleteManyArgs} args - Arguments to filter ShareAccessLogs to delete.
     * @example
     * // Delete a few ShareAccessLogs
     * const { count } = await prisma.shareAccessLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareAccessLogDeleteManyArgs>(args?: SelectSubset<T, ShareAccessLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareAccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareAccessLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShareAccessLogs
     * const shareAccessLog = await prisma.shareAccessLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareAccessLogUpdateManyArgs>(args: SelectSubset<T, ShareAccessLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareAccessLogs and returns the data updated in the database.
     * @param {ShareAccessLogUpdateManyAndReturnArgs} args - Arguments to update many ShareAccessLogs.
     * @example
     * // Update many ShareAccessLogs
     * const shareAccessLog = await prisma.shareAccessLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShareAccessLogs and only return the `id`
     * const shareAccessLogWithIdOnly = await prisma.shareAccessLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareAccessLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareAccessLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareAccessLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShareAccessLog.
     * @param {ShareAccessLogUpsertArgs} args - Arguments to update or create a ShareAccessLog.
     * @example
     * // Update or create a ShareAccessLog
     * const shareAccessLog = await prisma.shareAccessLog.upsert({
     *   create: {
     *     // ... data to create a ShareAccessLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShareAccessLog we want to update
     *   }
     * })
     */
    upsert<T extends ShareAccessLogUpsertArgs>(args: SelectSubset<T, ShareAccessLogUpsertArgs<ExtArgs>>): Prisma__ShareAccessLogClient<$Result.GetResult<Prisma.$ShareAccessLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShareAccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareAccessLogCountArgs} args - Arguments to filter ShareAccessLogs to count.
     * @example
     * // Count the number of ShareAccessLogs
     * const count = await prisma.shareAccessLog.count({
     *   where: {
     *     // ... the filter for the ShareAccessLogs we want to count
     *   }
     * })
    **/
    count<T extends ShareAccessLogCountArgs>(
      args?: Subset<T, ShareAccessLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareAccessLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShareAccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareAccessLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShareAccessLogAggregateArgs>(args: Subset<T, ShareAccessLogAggregateArgs>): Prisma.PrismaPromise<GetShareAccessLogAggregateType<T>>

    /**
     * Group by ShareAccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareAccessLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShareAccessLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareAccessLogGroupByArgs['orderBy'] }
        : { orderBy?: ShareAccessLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShareAccessLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareAccessLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShareAccessLog model
   */
  readonly fields: ShareAccessLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShareAccessLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareAccessLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    share<T extends ShareDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShareDefaultArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShareAccessLog model
   */
  interface ShareAccessLogFieldRefs {
    readonly id: FieldRef<"ShareAccessLog", 'String'>
    readonly shareId: FieldRef<"ShareAccessLog", 'String'>
    readonly accessedAt: FieldRef<"ShareAccessLog", 'DateTime'>
    readonly ip: FieldRef<"ShareAccessLog", 'String'>
    readonly userAgent: FieldRef<"ShareAccessLog", 'String'>
    readonly action: FieldRef<"ShareAccessLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShareAccessLog findUnique
   */
  export type ShareAccessLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareAccessLog
     */
    select?: ShareAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareAccessLog
     */
    omit?: ShareAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which ShareAccessLog to fetch.
     */
    where: ShareAccessLogWhereUniqueInput
  }

  /**
   * ShareAccessLog findUniqueOrThrow
   */
  export type ShareAccessLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareAccessLog
     */
    select?: ShareAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareAccessLog
     */
    omit?: ShareAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which ShareAccessLog to fetch.
     */
    where: ShareAccessLogWhereUniqueInput
  }

  /**
   * ShareAccessLog findFirst
   */
  export type ShareAccessLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareAccessLog
     */
    select?: ShareAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareAccessLog
     */
    omit?: ShareAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which ShareAccessLog to fetch.
     */
    where?: ShareAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareAccessLogs to fetch.
     */
    orderBy?: ShareAccessLogOrderByWithRelationInput | ShareAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareAccessLogs.
     */
    cursor?: ShareAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareAccessLogs.
     */
    distinct?: ShareAccessLogScalarFieldEnum | ShareAccessLogScalarFieldEnum[]
  }

  /**
   * ShareAccessLog findFirstOrThrow
   */
  export type ShareAccessLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareAccessLog
     */
    select?: ShareAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareAccessLog
     */
    omit?: ShareAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which ShareAccessLog to fetch.
     */
    where?: ShareAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareAccessLogs to fetch.
     */
    orderBy?: ShareAccessLogOrderByWithRelationInput | ShareAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareAccessLogs.
     */
    cursor?: ShareAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareAccessLogs.
     */
    distinct?: ShareAccessLogScalarFieldEnum | ShareAccessLogScalarFieldEnum[]
  }

  /**
   * ShareAccessLog findMany
   */
  export type ShareAccessLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareAccessLog
     */
    select?: ShareAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareAccessLog
     */
    omit?: ShareAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which ShareAccessLogs to fetch.
     */
    where?: ShareAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareAccessLogs to fetch.
     */
    orderBy?: ShareAccessLogOrderByWithRelationInput | ShareAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShareAccessLogs.
     */
    cursor?: ShareAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareAccessLogs.
     */
    distinct?: ShareAccessLogScalarFieldEnum | ShareAccessLogScalarFieldEnum[]
  }

  /**
   * ShareAccessLog create
   */
  export type ShareAccessLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareAccessLog
     */
    select?: ShareAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareAccessLog
     */
    omit?: ShareAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareAccessLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ShareAccessLog.
     */
    data: XOR<ShareAccessLogCreateInput, ShareAccessLogUncheckedCreateInput>
  }

  /**
   * ShareAccessLog createMany
   */
  export type ShareAccessLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShareAccessLogs.
     */
    data: ShareAccessLogCreateManyInput | ShareAccessLogCreateManyInput[]
  }

  /**
   * ShareAccessLog createManyAndReturn
   */
  export type ShareAccessLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareAccessLog
     */
    select?: ShareAccessLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareAccessLog
     */
    omit?: ShareAccessLogOmit<ExtArgs> | null
    /**
     * The data used to create many ShareAccessLogs.
     */
    data: ShareAccessLogCreateManyInput | ShareAccessLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareAccessLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareAccessLog update
   */
  export type ShareAccessLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareAccessLog
     */
    select?: ShareAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareAccessLog
     */
    omit?: ShareAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareAccessLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ShareAccessLog.
     */
    data: XOR<ShareAccessLogUpdateInput, ShareAccessLogUncheckedUpdateInput>
    /**
     * Choose, which ShareAccessLog to update.
     */
    where: ShareAccessLogWhereUniqueInput
  }

  /**
   * ShareAccessLog updateMany
   */
  export type ShareAccessLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShareAccessLogs.
     */
    data: XOR<ShareAccessLogUpdateManyMutationInput, ShareAccessLogUncheckedUpdateManyInput>
    /**
     * Filter which ShareAccessLogs to update
     */
    where?: ShareAccessLogWhereInput
    /**
     * Limit how many ShareAccessLogs to update.
     */
    limit?: number
  }

  /**
   * ShareAccessLog updateManyAndReturn
   */
  export type ShareAccessLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareAccessLog
     */
    select?: ShareAccessLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareAccessLog
     */
    omit?: ShareAccessLogOmit<ExtArgs> | null
    /**
     * The data used to update ShareAccessLogs.
     */
    data: XOR<ShareAccessLogUpdateManyMutationInput, ShareAccessLogUncheckedUpdateManyInput>
    /**
     * Filter which ShareAccessLogs to update
     */
    where?: ShareAccessLogWhereInput
    /**
     * Limit how many ShareAccessLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareAccessLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareAccessLog upsert
   */
  export type ShareAccessLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareAccessLog
     */
    select?: ShareAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareAccessLog
     */
    omit?: ShareAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareAccessLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ShareAccessLog to update in case it exists.
     */
    where: ShareAccessLogWhereUniqueInput
    /**
     * In case the ShareAccessLog found by the `where` argument doesn't exist, create a new ShareAccessLog with this data.
     */
    create: XOR<ShareAccessLogCreateInput, ShareAccessLogUncheckedCreateInput>
    /**
     * In case the ShareAccessLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareAccessLogUpdateInput, ShareAccessLogUncheckedUpdateInput>
  }

  /**
   * ShareAccessLog delete
   */
  export type ShareAccessLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareAccessLog
     */
    select?: ShareAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareAccessLog
     */
    omit?: ShareAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareAccessLogInclude<ExtArgs> | null
    /**
     * Filter which ShareAccessLog to delete.
     */
    where: ShareAccessLogWhereUniqueInput
  }

  /**
   * ShareAccessLog deleteMany
   */
  export type ShareAccessLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareAccessLogs to delete
     */
    where?: ShareAccessLogWhereInput
    /**
     * Limit how many ShareAccessLogs to delete.
     */
    limit?: number
  }

  /**
   * ShareAccessLog without action
   */
  export type ShareAccessLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareAccessLog
     */
    select?: ShareAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareAccessLog
     */
    omit?: ShareAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareAccessLogInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    targetType: string | null
    targetId: string | null
    detail: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    targetType: string | null
    targetId: string | null
    detail: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    actorId: number
    action: number
    targetType: number
    targetId: number
    detail: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    targetType?: true
    targetId?: true
    detail?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    targetType?: true
    targetId?: true
    detail?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    targetType?: true
    targetId?: true
    detail?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    actorId: string
    action: string
    targetType: string
    targetId: string | null
    detail: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    detail?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    detail?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    detail?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    actorId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    detail?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorId" | "action" | "targetType" | "targetId" | "detail" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorId: string
      action: string
      targetType: string
      targetId: string | null
      detail: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly targetType: FieldRef<"AuditLog", 'String'>
    readonly targetId: FieldRef<"AuditLog", 'String'>
    readonly detail: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    maxUploadBytes: 'maxUploadBytes',
    rootFolderId: 'rootFolderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    lastSeenAt: 'lastSeenAt',
    ip: 'ip',
    userAgent: 'userAgent'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const FolderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    parentId: 'parentId',
    path: 'path',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FolderScalarFieldEnum = (typeof FolderScalarFieldEnum)[keyof typeof FolderScalarFieldEnum]


  export const FileEntryScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    folderId: 'folderId',
    storageKey: 'storageKey',
    originalName: 'originalName',
    extension: 'extension',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    kind: 'kind',
    checksumSha256: 'checksumSha256',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileEntryScalarFieldEnum = (typeof FileEntryScalarFieldEnum)[keyof typeof FileEntryScalarFieldEnum]


  export const ShareScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    token: 'token',
    passwordHash: 'passwordHash',
    expiresAt: 'expiresAt',
    maxDownloads: 'maxDownloads',
    downloadCount: 'downloadCount',
    allowPreview: 'allowPreview',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShareScalarFieldEnum = (typeof ShareScalarFieldEnum)[keyof typeof ShareScalarFieldEnum]


  export const ShareItemScalarFieldEnum: {
    id: 'id',
    shareId: 'shareId',
    fileId: 'fileId',
    createdAt: 'createdAt'
  };

  export type ShareItemScalarFieldEnum = (typeof ShareItemScalarFieldEnum)[keyof typeof ShareItemScalarFieldEnum]


  export const ShareAccessLogScalarFieldEnum: {
    id: 'id',
    shareId: 'shareId',
    accessedAt: 'accessedAt',
    ip: 'ip',
    userAgent: 'userAgent',
    action: 'action'
  };

  export type ShareAccessLogScalarFieldEnum = (typeof ShareAccessLogScalarFieldEnum)[keyof typeof ShareAccessLogScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    actorId: 'actorId',
    action: 'action',
    targetType: 'targetType',
    targetId: 'targetId',
    detail: 'detail',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'FileKind'
   */
  export type EnumFileKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileKind'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    maxUploadBytes?: BigIntNullableFilter<"User"> | bigint | number | null
    rootFolderId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    folders?: FolderListRelationFilter
    files?: FileEntryListRelationFilter
    shares?: ShareListRelationFilter
    sessions?: SessionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    maxUploadBytes?: SortOrderInput | SortOrder
    rootFolderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    folders?: FolderOrderByRelationAggregateInput
    files?: FileEntryOrderByRelationAggregateInput
    shares?: ShareOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    maxUploadBytes?: BigIntNullableFilter<"User"> | bigint | number | null
    rootFolderId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    folders?: FolderListRelationFilter
    files?: FileEntryListRelationFilter
    shares?: ShareListRelationFilter
    sessions?: SessionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    maxUploadBytes?: SortOrderInput | SortOrder
    rootFolderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    maxUploadBytes?: BigIntNullableWithAggregatesFilter<"User"> | bigint | number | null
    rootFolderId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    tokenHash?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastSeenAt?: DateTimeFilter<"Session"> | Date | string
    ip?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastSeenAt?: DateTimeFilter<"Session"> | Date | string
    ip?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    tokenHash?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    lastSeenAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ip?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type FolderWhereInput = {
    AND?: FolderWhereInput | FolderWhereInput[]
    OR?: FolderWhereInput[]
    NOT?: FolderWhereInput | FolderWhereInput[]
    id?: StringFilter<"Folder"> | string
    name?: StringFilter<"Folder"> | string
    ownerId?: StringFilter<"Folder"> | string
    parentId?: StringNullableFilter<"Folder"> | string | null
    path?: StringFilter<"Folder"> | string
    createdAt?: DateTimeFilter<"Folder"> | Date | string
    updatedAt?: DateTimeFilter<"Folder"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<FolderNullableScalarRelationFilter, FolderWhereInput> | null
    children?: FolderListRelationFilter
    files?: FileEntryListRelationFilter
  }

  export type FolderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    parent?: FolderOrderByWithRelationInput
    children?: FolderOrderByRelationAggregateInput
    files?: FileEntryOrderByRelationAggregateInput
  }

  export type FolderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ownerId_path?: FolderOwnerIdPathCompoundUniqueInput
    AND?: FolderWhereInput | FolderWhereInput[]
    OR?: FolderWhereInput[]
    NOT?: FolderWhereInput | FolderWhereInput[]
    name?: StringFilter<"Folder"> | string
    ownerId?: StringFilter<"Folder"> | string
    parentId?: StringNullableFilter<"Folder"> | string | null
    path?: StringFilter<"Folder"> | string
    createdAt?: DateTimeFilter<"Folder"> | Date | string
    updatedAt?: DateTimeFilter<"Folder"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<FolderNullableScalarRelationFilter, FolderWhereInput> | null
    children?: FolderListRelationFilter
    files?: FileEntryListRelationFilter
  }, "id" | "ownerId_path">

  export type FolderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FolderCountOrderByAggregateInput
    _max?: FolderMaxOrderByAggregateInput
    _min?: FolderMinOrderByAggregateInput
  }

  export type FolderScalarWhereWithAggregatesInput = {
    AND?: FolderScalarWhereWithAggregatesInput | FolderScalarWhereWithAggregatesInput[]
    OR?: FolderScalarWhereWithAggregatesInput[]
    NOT?: FolderScalarWhereWithAggregatesInput | FolderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Folder"> | string
    name?: StringWithAggregatesFilter<"Folder"> | string
    ownerId?: StringWithAggregatesFilter<"Folder"> | string
    parentId?: StringNullableWithAggregatesFilter<"Folder"> | string | null
    path?: StringWithAggregatesFilter<"Folder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Folder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Folder"> | Date | string
  }

  export type FileEntryWhereInput = {
    AND?: FileEntryWhereInput | FileEntryWhereInput[]
    OR?: FileEntryWhereInput[]
    NOT?: FileEntryWhereInput | FileEntryWhereInput[]
    id?: StringFilter<"FileEntry"> | string
    ownerId?: StringFilter<"FileEntry"> | string
    folderId?: StringNullableFilter<"FileEntry"> | string | null
    storageKey?: StringFilter<"FileEntry"> | string
    originalName?: StringFilter<"FileEntry"> | string
    extension?: StringNullableFilter<"FileEntry"> | string | null
    mimeType?: StringFilter<"FileEntry"> | string
    sizeBytes?: BigIntFilter<"FileEntry"> | bigint | number
    kind?: EnumFileKindFilter<"FileEntry"> | $Enums.FileKind
    checksumSha256?: StringNullableFilter<"FileEntry"> | string | null
    createdAt?: DateTimeFilter<"FileEntry"> | Date | string
    updatedAt?: DateTimeFilter<"FileEntry"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    folder?: XOR<FolderNullableScalarRelationFilter, FolderWhereInput> | null
    shareItems?: ShareItemListRelationFilter
  }

  export type FileEntryOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    folderId?: SortOrderInput | SortOrder
    storageKey?: SortOrder
    originalName?: SortOrder
    extension?: SortOrderInput | SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    kind?: SortOrder
    checksumSha256?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    folder?: FolderOrderByWithRelationInput
    shareItems?: ShareItemOrderByRelationAggregateInput
  }

  export type FileEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    storageKey?: string
    AND?: FileEntryWhereInput | FileEntryWhereInput[]
    OR?: FileEntryWhereInput[]
    NOT?: FileEntryWhereInput | FileEntryWhereInput[]
    ownerId?: StringFilter<"FileEntry"> | string
    folderId?: StringNullableFilter<"FileEntry"> | string | null
    originalName?: StringFilter<"FileEntry"> | string
    extension?: StringNullableFilter<"FileEntry"> | string | null
    mimeType?: StringFilter<"FileEntry"> | string
    sizeBytes?: BigIntFilter<"FileEntry"> | bigint | number
    kind?: EnumFileKindFilter<"FileEntry"> | $Enums.FileKind
    checksumSha256?: StringNullableFilter<"FileEntry"> | string | null
    createdAt?: DateTimeFilter<"FileEntry"> | Date | string
    updatedAt?: DateTimeFilter<"FileEntry"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    folder?: XOR<FolderNullableScalarRelationFilter, FolderWhereInput> | null
    shareItems?: ShareItemListRelationFilter
  }, "id" | "storageKey">

  export type FileEntryOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    folderId?: SortOrderInput | SortOrder
    storageKey?: SortOrder
    originalName?: SortOrder
    extension?: SortOrderInput | SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    kind?: SortOrder
    checksumSha256?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileEntryCountOrderByAggregateInput
    _avg?: FileEntryAvgOrderByAggregateInput
    _max?: FileEntryMaxOrderByAggregateInput
    _min?: FileEntryMinOrderByAggregateInput
    _sum?: FileEntrySumOrderByAggregateInput
  }

  export type FileEntryScalarWhereWithAggregatesInput = {
    AND?: FileEntryScalarWhereWithAggregatesInput | FileEntryScalarWhereWithAggregatesInput[]
    OR?: FileEntryScalarWhereWithAggregatesInput[]
    NOT?: FileEntryScalarWhereWithAggregatesInput | FileEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FileEntry"> | string
    ownerId?: StringWithAggregatesFilter<"FileEntry"> | string
    folderId?: StringNullableWithAggregatesFilter<"FileEntry"> | string | null
    storageKey?: StringWithAggregatesFilter<"FileEntry"> | string
    originalName?: StringWithAggregatesFilter<"FileEntry"> | string
    extension?: StringNullableWithAggregatesFilter<"FileEntry"> | string | null
    mimeType?: StringWithAggregatesFilter<"FileEntry"> | string
    sizeBytes?: BigIntWithAggregatesFilter<"FileEntry"> | bigint | number
    kind?: EnumFileKindWithAggregatesFilter<"FileEntry"> | $Enums.FileKind
    checksumSha256?: StringNullableWithAggregatesFilter<"FileEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FileEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FileEntry"> | Date | string
  }

  export type ShareWhereInput = {
    AND?: ShareWhereInput | ShareWhereInput[]
    OR?: ShareWhereInput[]
    NOT?: ShareWhereInput | ShareWhereInput[]
    id?: StringFilter<"Share"> | string
    creatorId?: StringFilter<"Share"> | string
    token?: StringFilter<"Share"> | string
    passwordHash?: StringNullableFilter<"Share"> | string | null
    expiresAt?: DateTimeNullableFilter<"Share"> | Date | string | null
    maxDownloads?: IntNullableFilter<"Share"> | number | null
    downloadCount?: IntFilter<"Share"> | number
    allowPreview?: BoolFilter<"Share"> | boolean
    createdAt?: DateTimeFilter<"Share"> | Date | string
    updatedAt?: DateTimeFilter<"Share"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ShareItemListRelationFilter
    accessLogs?: ShareAccessLogListRelationFilter
  }

  export type ShareOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    token?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    maxDownloads?: SortOrderInput | SortOrder
    downloadCount?: SortOrder
    allowPreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    items?: ShareItemOrderByRelationAggregateInput
    accessLogs?: ShareAccessLogOrderByRelationAggregateInput
  }

  export type ShareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: ShareWhereInput | ShareWhereInput[]
    OR?: ShareWhereInput[]
    NOT?: ShareWhereInput | ShareWhereInput[]
    creatorId?: StringFilter<"Share"> | string
    passwordHash?: StringNullableFilter<"Share"> | string | null
    expiresAt?: DateTimeNullableFilter<"Share"> | Date | string | null
    maxDownloads?: IntNullableFilter<"Share"> | number | null
    downloadCount?: IntFilter<"Share"> | number
    allowPreview?: BoolFilter<"Share"> | boolean
    createdAt?: DateTimeFilter<"Share"> | Date | string
    updatedAt?: DateTimeFilter<"Share"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ShareItemListRelationFilter
    accessLogs?: ShareAccessLogListRelationFilter
  }, "id" | "token">

  export type ShareOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    token?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    maxDownloads?: SortOrderInput | SortOrder
    downloadCount?: SortOrder
    allowPreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShareCountOrderByAggregateInput
    _avg?: ShareAvgOrderByAggregateInput
    _max?: ShareMaxOrderByAggregateInput
    _min?: ShareMinOrderByAggregateInput
    _sum?: ShareSumOrderByAggregateInput
  }

  export type ShareScalarWhereWithAggregatesInput = {
    AND?: ShareScalarWhereWithAggregatesInput | ShareScalarWhereWithAggregatesInput[]
    OR?: ShareScalarWhereWithAggregatesInput[]
    NOT?: ShareScalarWhereWithAggregatesInput | ShareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Share"> | string
    creatorId?: StringWithAggregatesFilter<"Share"> | string
    token?: StringWithAggregatesFilter<"Share"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"Share"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Share"> | Date | string | null
    maxDownloads?: IntNullableWithAggregatesFilter<"Share"> | number | null
    downloadCount?: IntWithAggregatesFilter<"Share"> | number
    allowPreview?: BoolWithAggregatesFilter<"Share"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Share"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Share"> | Date | string
  }

  export type ShareItemWhereInput = {
    AND?: ShareItemWhereInput | ShareItemWhereInput[]
    OR?: ShareItemWhereInput[]
    NOT?: ShareItemWhereInput | ShareItemWhereInput[]
    id?: StringFilter<"ShareItem"> | string
    shareId?: StringFilter<"ShareItem"> | string
    fileId?: StringFilter<"ShareItem"> | string
    createdAt?: DateTimeFilter<"ShareItem"> | Date | string
    share?: XOR<ShareScalarRelationFilter, ShareWhereInput>
    file?: XOR<FileEntryScalarRelationFilter, FileEntryWhereInput>
  }

  export type ShareItemOrderByWithRelationInput = {
    id?: SortOrder
    shareId?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
    share?: ShareOrderByWithRelationInput
    file?: FileEntryOrderByWithRelationInput
  }

  export type ShareItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shareId_fileId?: ShareItemShareIdFileIdCompoundUniqueInput
    AND?: ShareItemWhereInput | ShareItemWhereInput[]
    OR?: ShareItemWhereInput[]
    NOT?: ShareItemWhereInput | ShareItemWhereInput[]
    shareId?: StringFilter<"ShareItem"> | string
    fileId?: StringFilter<"ShareItem"> | string
    createdAt?: DateTimeFilter<"ShareItem"> | Date | string
    share?: XOR<ShareScalarRelationFilter, ShareWhereInput>
    file?: XOR<FileEntryScalarRelationFilter, FileEntryWhereInput>
  }, "id" | "shareId_fileId">

  export type ShareItemOrderByWithAggregationInput = {
    id?: SortOrder
    shareId?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
    _count?: ShareItemCountOrderByAggregateInput
    _max?: ShareItemMaxOrderByAggregateInput
    _min?: ShareItemMinOrderByAggregateInput
  }

  export type ShareItemScalarWhereWithAggregatesInput = {
    AND?: ShareItemScalarWhereWithAggregatesInput | ShareItemScalarWhereWithAggregatesInput[]
    OR?: ShareItemScalarWhereWithAggregatesInput[]
    NOT?: ShareItemScalarWhereWithAggregatesInput | ShareItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShareItem"> | string
    shareId?: StringWithAggregatesFilter<"ShareItem"> | string
    fileId?: StringWithAggregatesFilter<"ShareItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShareItem"> | Date | string
  }

  export type ShareAccessLogWhereInput = {
    AND?: ShareAccessLogWhereInput | ShareAccessLogWhereInput[]
    OR?: ShareAccessLogWhereInput[]
    NOT?: ShareAccessLogWhereInput | ShareAccessLogWhereInput[]
    id?: StringFilter<"ShareAccessLog"> | string
    shareId?: StringFilter<"ShareAccessLog"> | string
    accessedAt?: DateTimeFilter<"ShareAccessLog"> | Date | string
    ip?: StringNullableFilter<"ShareAccessLog"> | string | null
    userAgent?: StringNullableFilter<"ShareAccessLog"> | string | null
    action?: StringFilter<"ShareAccessLog"> | string
    share?: XOR<ShareScalarRelationFilter, ShareWhereInput>
  }

  export type ShareAccessLogOrderByWithRelationInput = {
    id?: SortOrder
    shareId?: SortOrder
    accessedAt?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    action?: SortOrder
    share?: ShareOrderByWithRelationInput
  }

  export type ShareAccessLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShareAccessLogWhereInput | ShareAccessLogWhereInput[]
    OR?: ShareAccessLogWhereInput[]
    NOT?: ShareAccessLogWhereInput | ShareAccessLogWhereInput[]
    shareId?: StringFilter<"ShareAccessLog"> | string
    accessedAt?: DateTimeFilter<"ShareAccessLog"> | Date | string
    ip?: StringNullableFilter<"ShareAccessLog"> | string | null
    userAgent?: StringNullableFilter<"ShareAccessLog"> | string | null
    action?: StringFilter<"ShareAccessLog"> | string
    share?: XOR<ShareScalarRelationFilter, ShareWhereInput>
  }, "id">

  export type ShareAccessLogOrderByWithAggregationInput = {
    id?: SortOrder
    shareId?: SortOrder
    accessedAt?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    action?: SortOrder
    _count?: ShareAccessLogCountOrderByAggregateInput
    _max?: ShareAccessLogMaxOrderByAggregateInput
    _min?: ShareAccessLogMinOrderByAggregateInput
  }

  export type ShareAccessLogScalarWhereWithAggregatesInput = {
    AND?: ShareAccessLogScalarWhereWithAggregatesInput | ShareAccessLogScalarWhereWithAggregatesInput[]
    OR?: ShareAccessLogScalarWhereWithAggregatesInput[]
    NOT?: ShareAccessLogScalarWhereWithAggregatesInput | ShareAccessLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShareAccessLog"> | string
    shareId?: StringWithAggregatesFilter<"ShareAccessLog"> | string
    accessedAt?: DateTimeWithAggregatesFilter<"ShareAccessLog"> | Date | string
    ip?: StringNullableWithAggregatesFilter<"ShareAccessLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ShareAccessLog"> | string | null
    action?: StringWithAggregatesFilter<"ShareAccessLog"> | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    targetType?: StringFilter<"AuditLog"> | string
    targetId?: StringNullableFilter<"AuditLog"> | string | null
    detail?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    actorId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    targetType?: StringFilter<"AuditLog"> | string
    targetId?: StringNullableFilter<"AuditLog"> | string | null
    detail?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    actorId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    targetType?: StringWithAggregatesFilter<"AuditLog"> | string
    targetId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    detail?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    maxUploadBytes?: bigint | number | null
    rootFolderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutOwnerInput
    files?: FileEntryCreateNestedManyWithoutOwnerInput
    shares?: ShareCreateNestedManyWithoutCreatorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    maxUploadBytes?: bigint | number | null
    rootFolderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutOwnerInput
    files?: FileEntryUncheckedCreateNestedManyWithoutOwnerInput
    shares?: ShareUncheckedCreateNestedManyWithoutCreatorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxUploadBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rootFolderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutOwnerNestedInput
    files?: FileEntryUpdateManyWithoutOwnerNestedInput
    shares?: ShareUpdateManyWithoutCreatorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxUploadBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rootFolderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutOwnerNestedInput
    files?: FileEntryUncheckedUpdateManyWithoutOwnerNestedInput
    shares?: ShareUncheckedUpdateManyWithoutCreatorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    maxUploadBytes?: bigint | number | null
    rootFolderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxUploadBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rootFolderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxUploadBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rootFolderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastSeenAt?: Date | string
    ip?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastSeenAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastSeenAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FolderCreateInput = {
    id?: string
    name: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFoldersInput
    parent?: FolderCreateNestedOneWithoutChildrenInput
    children?: FolderCreateNestedManyWithoutParentInput
    files?: FileEntryCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateInput = {
    id?: string
    name: string
    ownerId: string
    parentId?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: FolderUncheckedCreateNestedManyWithoutParentInput
    files?: FileEntryUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFoldersNestedInput
    parent?: FolderUpdateOneWithoutChildrenNestedInput
    children?: FolderUpdateManyWithoutParentNestedInput
    files?: FileEntryUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: FolderUncheckedUpdateManyWithoutParentNestedInput
    files?: FileEntryUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderCreateManyInput = {
    id?: string
    name: string
    ownerId: string
    parentId?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FolderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileEntryCreateInput = {
    id?: string
    storageKey: string
    originalName: string
    extension?: string | null
    mimeType: string
    sizeBytes: bigint | number
    kind?: $Enums.FileKind
    checksumSha256?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFilesInput
    folder?: FolderCreateNestedOneWithoutFilesInput
    shareItems?: ShareItemCreateNestedManyWithoutFileInput
  }

  export type FileEntryUncheckedCreateInput = {
    id?: string
    ownerId: string
    folderId?: string | null
    storageKey: string
    originalName: string
    extension?: string | null
    mimeType: string
    sizeBytes: bigint | number
    kind?: $Enums.FileKind
    checksumSha256?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shareItems?: ShareItemUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: EnumFileKindFieldUpdateOperationsInput | $Enums.FileKind
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFilesNestedInput
    folder?: FolderUpdateOneWithoutFilesNestedInput
    shareItems?: ShareItemUpdateManyWithoutFileNestedInput
  }

  export type FileEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: EnumFileKindFieldUpdateOperationsInput | $Enums.FileKind
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareItems?: ShareItemUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FileEntryCreateManyInput = {
    id?: string
    ownerId: string
    folderId?: string | null
    storageKey: string
    originalName: string
    extension?: string | null
    mimeType: string
    sizeBytes: bigint | number
    kind?: $Enums.FileKind
    checksumSha256?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: EnumFileKindFieldUpdateOperationsInput | $Enums.FileKind
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: EnumFileKindFieldUpdateOperationsInput | $Enums.FileKind
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareCreateInput = {
    id?: string
    token: string
    passwordHash?: string | null
    expiresAt?: Date | string | null
    maxDownloads?: number | null
    downloadCount?: number
    allowPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutSharesInput
    items?: ShareItemCreateNestedManyWithoutShareInput
    accessLogs?: ShareAccessLogCreateNestedManyWithoutShareInput
  }

  export type ShareUncheckedCreateInput = {
    id?: string
    creatorId: string
    token: string
    passwordHash?: string | null
    expiresAt?: Date | string | null
    maxDownloads?: number | null
    downloadCount?: number
    allowPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ShareItemUncheckedCreateNestedManyWithoutShareInput
    accessLogs?: ShareAccessLogUncheckedCreateNestedManyWithoutShareInput
  }

  export type ShareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDownloads?: NullableIntFieldUpdateOperationsInput | number | null
    downloadCount?: IntFieldUpdateOperationsInput | number
    allowPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutSharesNestedInput
    items?: ShareItemUpdateManyWithoutShareNestedInput
    accessLogs?: ShareAccessLogUpdateManyWithoutShareNestedInput
  }

  export type ShareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDownloads?: NullableIntFieldUpdateOperationsInput | number | null
    downloadCount?: IntFieldUpdateOperationsInput | number
    allowPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ShareItemUncheckedUpdateManyWithoutShareNestedInput
    accessLogs?: ShareAccessLogUncheckedUpdateManyWithoutShareNestedInput
  }

  export type ShareCreateManyInput = {
    id?: string
    creatorId: string
    token: string
    passwordHash?: string | null
    expiresAt?: Date | string | null
    maxDownloads?: number | null
    downloadCount?: number
    allowPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDownloads?: NullableIntFieldUpdateOperationsInput | number | null
    downloadCount?: IntFieldUpdateOperationsInput | number
    allowPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDownloads?: NullableIntFieldUpdateOperationsInput | number | null
    downloadCount?: IntFieldUpdateOperationsInput | number
    allowPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareItemCreateInput = {
    id?: string
    createdAt?: Date | string
    share: ShareCreateNestedOneWithoutItemsInput
    file: FileEntryCreateNestedOneWithoutShareItemsInput
  }

  export type ShareItemUncheckedCreateInput = {
    id?: string
    shareId: string
    fileId: string
    createdAt?: Date | string
  }

  export type ShareItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    share?: ShareUpdateOneRequiredWithoutItemsNestedInput
    file?: FileEntryUpdateOneRequiredWithoutShareItemsNestedInput
  }

  export type ShareItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareItemCreateManyInput = {
    id?: string
    shareId: string
    fileId: string
    createdAt?: Date | string
  }

  export type ShareItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareAccessLogCreateInput = {
    id?: string
    accessedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
    action: string
    share: ShareCreateNestedOneWithoutAccessLogsInput
  }

  export type ShareAccessLogUncheckedCreateInput = {
    id?: string
    shareId: string
    accessedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
    action: string
  }

  export type ShareAccessLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    share?: ShareUpdateOneRequiredWithoutAccessLogsNestedInput
  }

  export type ShareAccessLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
  }

  export type ShareAccessLogCreateManyInput = {
    id?: string
    shareId: string
    accessedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
    action: string
  }

  export type ShareAccessLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
  }

  export type ShareAccessLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    targetType: string
    targetId?: string | null
    detail?: string | null
    createdAt?: Date | string
    actor: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    actorId: string
    action: string
    targetType: string
    targetId?: string | null
    detail?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    actorId: string
    action: string
    targetType: string
    targetId?: string | null
    detail?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FolderListRelationFilter = {
    every?: FolderWhereInput
    some?: FolderWhereInput
    none?: FolderWhereInput
  }

  export type FileEntryListRelationFilter = {
    every?: FileEntryWhereInput
    some?: FileEntryWhereInput
    none?: FileEntryWhereInput
  }

  export type ShareListRelationFilter = {
    every?: ShareWhereInput
    some?: ShareWhereInput
    none?: ShareWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FolderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    maxUploadBytes?: SortOrder
    rootFolderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    maxUploadBytes?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    maxUploadBytes?: SortOrder
    rootFolderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    maxUploadBytes?: SortOrder
    rootFolderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    maxUploadBytes?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
  }

  export type FolderNullableScalarRelationFilter = {
    is?: FolderWhereInput | null
    isNot?: FolderWhereInput | null
  }

  export type FolderOwnerIdPathCompoundUniqueInput = {
    ownerId: string
    path: string
  }

  export type FolderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    parentId?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FolderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    parentId?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FolderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    parentId?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumFileKindFilter<$PrismaModel = never> = {
    equals?: $Enums.FileKind | EnumFileKindFieldRefInput<$PrismaModel>
    in?: $Enums.FileKind[]
    notIn?: $Enums.FileKind[]
    not?: NestedEnumFileKindFilter<$PrismaModel> | $Enums.FileKind
  }

  export type ShareItemListRelationFilter = {
    every?: ShareItemWhereInput
    some?: ShareItemWhereInput
    none?: ShareItemWhereInput
  }

  export type ShareItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileEntryCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    folderId?: SortOrder
    storageKey?: SortOrder
    originalName?: SortOrder
    extension?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    kind?: SortOrder
    checksumSha256?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileEntryAvgOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type FileEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    folderId?: SortOrder
    storageKey?: SortOrder
    originalName?: SortOrder
    extension?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    kind?: SortOrder
    checksumSha256?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileEntryMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    folderId?: SortOrder
    storageKey?: SortOrder
    originalName?: SortOrder
    extension?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    kind?: SortOrder
    checksumSha256?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileEntrySumOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumFileKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileKind | EnumFileKindFieldRefInput<$PrismaModel>
    in?: $Enums.FileKind[]
    notIn?: $Enums.FileKind[]
    not?: NestedEnumFileKindWithAggregatesFilter<$PrismaModel> | $Enums.FileKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileKindFilter<$PrismaModel>
    _max?: NestedEnumFileKindFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ShareAccessLogListRelationFilter = {
    every?: ShareAccessLogWhereInput
    some?: ShareAccessLogWhereInput
    none?: ShareAccessLogWhereInput
  }

  export type ShareAccessLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShareCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    token?: SortOrder
    passwordHash?: SortOrder
    expiresAt?: SortOrder
    maxDownloads?: SortOrder
    downloadCount?: SortOrder
    allowPreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShareAvgOrderByAggregateInput = {
    maxDownloads?: SortOrder
    downloadCount?: SortOrder
  }

  export type ShareMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    token?: SortOrder
    passwordHash?: SortOrder
    expiresAt?: SortOrder
    maxDownloads?: SortOrder
    downloadCount?: SortOrder
    allowPreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShareMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    token?: SortOrder
    passwordHash?: SortOrder
    expiresAt?: SortOrder
    maxDownloads?: SortOrder
    downloadCount?: SortOrder
    allowPreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShareSumOrderByAggregateInput = {
    maxDownloads?: SortOrder
    downloadCount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ShareScalarRelationFilter = {
    is?: ShareWhereInput
    isNot?: ShareWhereInput
  }

  export type FileEntryScalarRelationFilter = {
    is?: FileEntryWhereInput
    isNot?: FileEntryWhereInput
  }

  export type ShareItemShareIdFileIdCompoundUniqueInput = {
    shareId: string
    fileId: string
  }

  export type ShareItemCountOrderByAggregateInput = {
    id?: SortOrder
    shareId?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
  }

  export type ShareItemMaxOrderByAggregateInput = {
    id?: SortOrder
    shareId?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
  }

  export type ShareItemMinOrderByAggregateInput = {
    id?: SortOrder
    shareId?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
  }

  export type ShareAccessLogCountOrderByAggregateInput = {
    id?: SortOrder
    shareId?: SortOrder
    accessedAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    action?: SortOrder
  }

  export type ShareAccessLogMaxOrderByAggregateInput = {
    id?: SortOrder
    shareId?: SortOrder
    accessedAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    action?: SortOrder
  }

  export type ShareAccessLogMinOrderByAggregateInput = {
    id?: SortOrder
    shareId?: SortOrder
    accessedAt?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    action?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
  }

  export type FolderCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FolderCreateWithoutOwnerInput, FolderUncheckedCreateWithoutOwnerInput> | FolderCreateWithoutOwnerInput[] | FolderUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutOwnerInput | FolderCreateOrConnectWithoutOwnerInput[]
    createMany?: FolderCreateManyOwnerInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type FileEntryCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FileEntryCreateWithoutOwnerInput, FileEntryUncheckedCreateWithoutOwnerInput> | FileEntryCreateWithoutOwnerInput[] | FileEntryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FileEntryCreateOrConnectWithoutOwnerInput | FileEntryCreateOrConnectWithoutOwnerInput[]
    createMany?: FileEntryCreateManyOwnerInputEnvelope
    connect?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
  }

  export type ShareCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ShareCreateWithoutCreatorInput, ShareUncheckedCreateWithoutCreatorInput> | ShareCreateWithoutCreatorInput[] | ShareUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutCreatorInput | ShareCreateOrConnectWithoutCreatorInput[]
    createMany?: ShareCreateManyCreatorInputEnvelope
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type FolderUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FolderCreateWithoutOwnerInput, FolderUncheckedCreateWithoutOwnerInput> | FolderCreateWithoutOwnerInput[] | FolderUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutOwnerInput | FolderCreateOrConnectWithoutOwnerInput[]
    createMany?: FolderCreateManyOwnerInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type FileEntryUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FileEntryCreateWithoutOwnerInput, FileEntryUncheckedCreateWithoutOwnerInput> | FileEntryCreateWithoutOwnerInput[] | FileEntryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FileEntryCreateOrConnectWithoutOwnerInput | FileEntryCreateOrConnectWithoutOwnerInput[]
    createMany?: FileEntryCreateManyOwnerInputEnvelope
    connect?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
  }

  export type ShareUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ShareCreateWithoutCreatorInput, ShareUncheckedCreateWithoutCreatorInput> | ShareCreateWithoutCreatorInput[] | ShareUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutCreatorInput | ShareCreateOrConnectWithoutCreatorInput[]
    createMany?: ShareCreateManyCreatorInputEnvelope
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FolderUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FolderCreateWithoutOwnerInput, FolderUncheckedCreateWithoutOwnerInput> | FolderCreateWithoutOwnerInput[] | FolderUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutOwnerInput | FolderCreateOrConnectWithoutOwnerInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutOwnerInput | FolderUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FolderCreateManyOwnerInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutOwnerInput | FolderUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutOwnerInput | FolderUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type FileEntryUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FileEntryCreateWithoutOwnerInput, FileEntryUncheckedCreateWithoutOwnerInput> | FileEntryCreateWithoutOwnerInput[] | FileEntryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FileEntryCreateOrConnectWithoutOwnerInput | FileEntryCreateOrConnectWithoutOwnerInput[]
    upsert?: FileEntryUpsertWithWhereUniqueWithoutOwnerInput | FileEntryUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FileEntryCreateManyOwnerInputEnvelope
    set?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    disconnect?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    delete?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    connect?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    update?: FileEntryUpdateWithWhereUniqueWithoutOwnerInput | FileEntryUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FileEntryUpdateManyWithWhereWithoutOwnerInput | FileEntryUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FileEntryScalarWhereInput | FileEntryScalarWhereInput[]
  }

  export type ShareUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ShareCreateWithoutCreatorInput, ShareUncheckedCreateWithoutCreatorInput> | ShareCreateWithoutCreatorInput[] | ShareUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutCreatorInput | ShareCreateOrConnectWithoutCreatorInput[]
    upsert?: ShareUpsertWithWhereUniqueWithoutCreatorInput | ShareUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ShareCreateManyCreatorInputEnvelope
    set?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    disconnect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    delete?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    update?: ShareUpdateWithWhereUniqueWithoutCreatorInput | ShareUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ShareUpdateManyWithWhereWithoutCreatorInput | ShareUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ShareScalarWhereInput | ShareScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type FolderUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FolderCreateWithoutOwnerInput, FolderUncheckedCreateWithoutOwnerInput> | FolderCreateWithoutOwnerInput[] | FolderUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutOwnerInput | FolderCreateOrConnectWithoutOwnerInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutOwnerInput | FolderUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FolderCreateManyOwnerInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutOwnerInput | FolderUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutOwnerInput | FolderUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type FileEntryUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FileEntryCreateWithoutOwnerInput, FileEntryUncheckedCreateWithoutOwnerInput> | FileEntryCreateWithoutOwnerInput[] | FileEntryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FileEntryCreateOrConnectWithoutOwnerInput | FileEntryCreateOrConnectWithoutOwnerInput[]
    upsert?: FileEntryUpsertWithWhereUniqueWithoutOwnerInput | FileEntryUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FileEntryCreateManyOwnerInputEnvelope
    set?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    disconnect?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    delete?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    connect?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    update?: FileEntryUpdateWithWhereUniqueWithoutOwnerInput | FileEntryUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FileEntryUpdateManyWithWhereWithoutOwnerInput | FileEntryUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FileEntryScalarWhereInput | FileEntryScalarWhereInput[]
  }

  export type ShareUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ShareCreateWithoutCreatorInput, ShareUncheckedCreateWithoutCreatorInput> | ShareCreateWithoutCreatorInput[] | ShareUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutCreatorInput | ShareCreateOrConnectWithoutCreatorInput[]
    upsert?: ShareUpsertWithWhereUniqueWithoutCreatorInput | ShareUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ShareCreateManyCreatorInputEnvelope
    set?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    disconnect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    delete?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    update?: ShareUpdateWithWhereUniqueWithoutCreatorInput | ShareUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ShareUpdateManyWithWhereWithoutCreatorInput | ShareUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ShareScalarWhereInput | ShareScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutFoldersInput = {
    create?: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoldersInput
    connect?: UserWhereUniqueInput
  }

  export type FolderCreateNestedOneWithoutChildrenInput = {
    create?: XOR<FolderCreateWithoutChildrenInput, FolderUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: FolderCreateOrConnectWithoutChildrenInput
    connect?: FolderWhereUniqueInput
  }

  export type FolderCreateNestedManyWithoutParentInput = {
    create?: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput> | FolderCreateWithoutParentInput[] | FolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutParentInput | FolderCreateOrConnectWithoutParentInput[]
    createMany?: FolderCreateManyParentInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type FileEntryCreateNestedManyWithoutFolderInput = {
    create?: XOR<FileEntryCreateWithoutFolderInput, FileEntryUncheckedCreateWithoutFolderInput> | FileEntryCreateWithoutFolderInput[] | FileEntryUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: FileEntryCreateOrConnectWithoutFolderInput | FileEntryCreateOrConnectWithoutFolderInput[]
    createMany?: FileEntryCreateManyFolderInputEnvelope
    connect?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
  }

  export type FolderUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput> | FolderCreateWithoutParentInput[] | FolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutParentInput | FolderCreateOrConnectWithoutParentInput[]
    createMany?: FolderCreateManyParentInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type FileEntryUncheckedCreateNestedManyWithoutFolderInput = {
    create?: XOR<FileEntryCreateWithoutFolderInput, FileEntryUncheckedCreateWithoutFolderInput> | FileEntryCreateWithoutFolderInput[] | FileEntryUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: FileEntryCreateOrConnectWithoutFolderInput | FileEntryCreateOrConnectWithoutFolderInput[]
    createMany?: FileEntryCreateManyFolderInputEnvelope
    connect?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFoldersNestedInput = {
    create?: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoldersInput
    upsert?: UserUpsertWithoutFoldersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFoldersInput, UserUpdateWithoutFoldersInput>, UserUncheckedUpdateWithoutFoldersInput>
  }

  export type FolderUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<FolderCreateWithoutChildrenInput, FolderUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: FolderCreateOrConnectWithoutChildrenInput
    upsert?: FolderUpsertWithoutChildrenInput
    disconnect?: FolderWhereInput | boolean
    delete?: FolderWhereInput | boolean
    connect?: FolderWhereUniqueInput
    update?: XOR<XOR<FolderUpdateToOneWithWhereWithoutChildrenInput, FolderUpdateWithoutChildrenInput>, FolderUncheckedUpdateWithoutChildrenInput>
  }

  export type FolderUpdateManyWithoutParentNestedInput = {
    create?: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput> | FolderCreateWithoutParentInput[] | FolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutParentInput | FolderCreateOrConnectWithoutParentInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutParentInput | FolderUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: FolderCreateManyParentInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutParentInput | FolderUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutParentInput | FolderUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type FileEntryUpdateManyWithoutFolderNestedInput = {
    create?: XOR<FileEntryCreateWithoutFolderInput, FileEntryUncheckedCreateWithoutFolderInput> | FileEntryCreateWithoutFolderInput[] | FileEntryUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: FileEntryCreateOrConnectWithoutFolderInput | FileEntryCreateOrConnectWithoutFolderInput[]
    upsert?: FileEntryUpsertWithWhereUniqueWithoutFolderInput | FileEntryUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: FileEntryCreateManyFolderInputEnvelope
    set?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    disconnect?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    delete?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    connect?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    update?: FileEntryUpdateWithWhereUniqueWithoutFolderInput | FileEntryUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: FileEntryUpdateManyWithWhereWithoutFolderInput | FileEntryUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: FileEntryScalarWhereInput | FileEntryScalarWhereInput[]
  }

  export type FolderUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput> | FolderCreateWithoutParentInput[] | FolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutParentInput | FolderCreateOrConnectWithoutParentInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutParentInput | FolderUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: FolderCreateManyParentInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutParentInput | FolderUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutParentInput | FolderUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type FileEntryUncheckedUpdateManyWithoutFolderNestedInput = {
    create?: XOR<FileEntryCreateWithoutFolderInput, FileEntryUncheckedCreateWithoutFolderInput> | FileEntryCreateWithoutFolderInput[] | FileEntryUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: FileEntryCreateOrConnectWithoutFolderInput | FileEntryCreateOrConnectWithoutFolderInput[]
    upsert?: FileEntryUpsertWithWhereUniqueWithoutFolderInput | FileEntryUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: FileEntryCreateManyFolderInputEnvelope
    set?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    disconnect?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    delete?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    connect?: FileEntryWhereUniqueInput | FileEntryWhereUniqueInput[]
    update?: FileEntryUpdateWithWhereUniqueWithoutFolderInput | FileEntryUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: FileEntryUpdateManyWithWhereWithoutFolderInput | FileEntryUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: FileEntryScalarWhereInput | FileEntryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    connect?: UserWhereUniqueInput
  }

  export type FolderCreateNestedOneWithoutFilesInput = {
    create?: XOR<FolderCreateWithoutFilesInput, FolderUncheckedCreateWithoutFilesInput>
    connectOrCreate?: FolderCreateOrConnectWithoutFilesInput
    connect?: FolderWhereUniqueInput
  }

  export type ShareItemCreateNestedManyWithoutFileInput = {
    create?: XOR<ShareItemCreateWithoutFileInput, ShareItemUncheckedCreateWithoutFileInput> | ShareItemCreateWithoutFileInput[] | ShareItemUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ShareItemCreateOrConnectWithoutFileInput | ShareItemCreateOrConnectWithoutFileInput[]
    createMany?: ShareItemCreateManyFileInputEnvelope
    connect?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
  }

  export type ShareItemUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<ShareItemCreateWithoutFileInput, ShareItemUncheckedCreateWithoutFileInput> | ShareItemCreateWithoutFileInput[] | ShareItemUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ShareItemCreateOrConnectWithoutFileInput | ShareItemCreateOrConnectWithoutFileInput[]
    createMany?: ShareItemCreateManyFileInputEnvelope
    connect?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumFileKindFieldUpdateOperationsInput = {
    set?: $Enums.FileKind
  }

  export type UserUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    upsert?: UserUpsertWithoutFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFilesInput, UserUpdateWithoutFilesInput>, UserUncheckedUpdateWithoutFilesInput>
  }

  export type FolderUpdateOneWithoutFilesNestedInput = {
    create?: XOR<FolderCreateWithoutFilesInput, FolderUncheckedCreateWithoutFilesInput>
    connectOrCreate?: FolderCreateOrConnectWithoutFilesInput
    upsert?: FolderUpsertWithoutFilesInput
    disconnect?: FolderWhereInput | boolean
    delete?: FolderWhereInput | boolean
    connect?: FolderWhereUniqueInput
    update?: XOR<XOR<FolderUpdateToOneWithWhereWithoutFilesInput, FolderUpdateWithoutFilesInput>, FolderUncheckedUpdateWithoutFilesInput>
  }

  export type ShareItemUpdateManyWithoutFileNestedInput = {
    create?: XOR<ShareItemCreateWithoutFileInput, ShareItemUncheckedCreateWithoutFileInput> | ShareItemCreateWithoutFileInput[] | ShareItemUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ShareItemCreateOrConnectWithoutFileInput | ShareItemCreateOrConnectWithoutFileInput[]
    upsert?: ShareItemUpsertWithWhereUniqueWithoutFileInput | ShareItemUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: ShareItemCreateManyFileInputEnvelope
    set?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    disconnect?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    delete?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    connect?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    update?: ShareItemUpdateWithWhereUniqueWithoutFileInput | ShareItemUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: ShareItemUpdateManyWithWhereWithoutFileInput | ShareItemUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: ShareItemScalarWhereInput | ShareItemScalarWhereInput[]
  }

  export type ShareItemUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<ShareItemCreateWithoutFileInput, ShareItemUncheckedCreateWithoutFileInput> | ShareItemCreateWithoutFileInput[] | ShareItemUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ShareItemCreateOrConnectWithoutFileInput | ShareItemCreateOrConnectWithoutFileInput[]
    upsert?: ShareItemUpsertWithWhereUniqueWithoutFileInput | ShareItemUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: ShareItemCreateManyFileInputEnvelope
    set?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    disconnect?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    delete?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    connect?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    update?: ShareItemUpdateWithWhereUniqueWithoutFileInput | ShareItemUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: ShareItemUpdateManyWithWhereWithoutFileInput | ShareItemUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: ShareItemScalarWhereInput | ShareItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSharesInput = {
    create?: XOR<UserCreateWithoutSharesInput, UserUncheckedCreateWithoutSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharesInput
    connect?: UserWhereUniqueInput
  }

  export type ShareItemCreateNestedManyWithoutShareInput = {
    create?: XOR<ShareItemCreateWithoutShareInput, ShareItemUncheckedCreateWithoutShareInput> | ShareItemCreateWithoutShareInput[] | ShareItemUncheckedCreateWithoutShareInput[]
    connectOrCreate?: ShareItemCreateOrConnectWithoutShareInput | ShareItemCreateOrConnectWithoutShareInput[]
    createMany?: ShareItemCreateManyShareInputEnvelope
    connect?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
  }

  export type ShareAccessLogCreateNestedManyWithoutShareInput = {
    create?: XOR<ShareAccessLogCreateWithoutShareInput, ShareAccessLogUncheckedCreateWithoutShareInput> | ShareAccessLogCreateWithoutShareInput[] | ShareAccessLogUncheckedCreateWithoutShareInput[]
    connectOrCreate?: ShareAccessLogCreateOrConnectWithoutShareInput | ShareAccessLogCreateOrConnectWithoutShareInput[]
    createMany?: ShareAccessLogCreateManyShareInputEnvelope
    connect?: ShareAccessLogWhereUniqueInput | ShareAccessLogWhereUniqueInput[]
  }

  export type ShareItemUncheckedCreateNestedManyWithoutShareInput = {
    create?: XOR<ShareItemCreateWithoutShareInput, ShareItemUncheckedCreateWithoutShareInput> | ShareItemCreateWithoutShareInput[] | ShareItemUncheckedCreateWithoutShareInput[]
    connectOrCreate?: ShareItemCreateOrConnectWithoutShareInput | ShareItemCreateOrConnectWithoutShareInput[]
    createMany?: ShareItemCreateManyShareInputEnvelope
    connect?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
  }

  export type ShareAccessLogUncheckedCreateNestedManyWithoutShareInput = {
    create?: XOR<ShareAccessLogCreateWithoutShareInput, ShareAccessLogUncheckedCreateWithoutShareInput> | ShareAccessLogCreateWithoutShareInput[] | ShareAccessLogUncheckedCreateWithoutShareInput[]
    connectOrCreate?: ShareAccessLogCreateOrConnectWithoutShareInput | ShareAccessLogCreateOrConnectWithoutShareInput[]
    createMany?: ShareAccessLogCreateManyShareInputEnvelope
    connect?: ShareAccessLogWhereUniqueInput | ShareAccessLogWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<UserCreateWithoutSharesInput, UserUncheckedCreateWithoutSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharesInput
    upsert?: UserUpsertWithoutSharesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharesInput, UserUpdateWithoutSharesInput>, UserUncheckedUpdateWithoutSharesInput>
  }

  export type ShareItemUpdateManyWithoutShareNestedInput = {
    create?: XOR<ShareItemCreateWithoutShareInput, ShareItemUncheckedCreateWithoutShareInput> | ShareItemCreateWithoutShareInput[] | ShareItemUncheckedCreateWithoutShareInput[]
    connectOrCreate?: ShareItemCreateOrConnectWithoutShareInput | ShareItemCreateOrConnectWithoutShareInput[]
    upsert?: ShareItemUpsertWithWhereUniqueWithoutShareInput | ShareItemUpsertWithWhereUniqueWithoutShareInput[]
    createMany?: ShareItemCreateManyShareInputEnvelope
    set?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    disconnect?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    delete?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    connect?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    update?: ShareItemUpdateWithWhereUniqueWithoutShareInput | ShareItemUpdateWithWhereUniqueWithoutShareInput[]
    updateMany?: ShareItemUpdateManyWithWhereWithoutShareInput | ShareItemUpdateManyWithWhereWithoutShareInput[]
    deleteMany?: ShareItemScalarWhereInput | ShareItemScalarWhereInput[]
  }

  export type ShareAccessLogUpdateManyWithoutShareNestedInput = {
    create?: XOR<ShareAccessLogCreateWithoutShareInput, ShareAccessLogUncheckedCreateWithoutShareInput> | ShareAccessLogCreateWithoutShareInput[] | ShareAccessLogUncheckedCreateWithoutShareInput[]
    connectOrCreate?: ShareAccessLogCreateOrConnectWithoutShareInput | ShareAccessLogCreateOrConnectWithoutShareInput[]
    upsert?: ShareAccessLogUpsertWithWhereUniqueWithoutShareInput | ShareAccessLogUpsertWithWhereUniqueWithoutShareInput[]
    createMany?: ShareAccessLogCreateManyShareInputEnvelope
    set?: ShareAccessLogWhereUniqueInput | ShareAccessLogWhereUniqueInput[]
    disconnect?: ShareAccessLogWhereUniqueInput | ShareAccessLogWhereUniqueInput[]
    delete?: ShareAccessLogWhereUniqueInput | ShareAccessLogWhereUniqueInput[]
    connect?: ShareAccessLogWhereUniqueInput | ShareAccessLogWhereUniqueInput[]
    update?: ShareAccessLogUpdateWithWhereUniqueWithoutShareInput | ShareAccessLogUpdateWithWhereUniqueWithoutShareInput[]
    updateMany?: ShareAccessLogUpdateManyWithWhereWithoutShareInput | ShareAccessLogUpdateManyWithWhereWithoutShareInput[]
    deleteMany?: ShareAccessLogScalarWhereInput | ShareAccessLogScalarWhereInput[]
  }

  export type ShareItemUncheckedUpdateManyWithoutShareNestedInput = {
    create?: XOR<ShareItemCreateWithoutShareInput, ShareItemUncheckedCreateWithoutShareInput> | ShareItemCreateWithoutShareInput[] | ShareItemUncheckedCreateWithoutShareInput[]
    connectOrCreate?: ShareItemCreateOrConnectWithoutShareInput | ShareItemCreateOrConnectWithoutShareInput[]
    upsert?: ShareItemUpsertWithWhereUniqueWithoutShareInput | ShareItemUpsertWithWhereUniqueWithoutShareInput[]
    createMany?: ShareItemCreateManyShareInputEnvelope
    set?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    disconnect?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    delete?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    connect?: ShareItemWhereUniqueInput | ShareItemWhereUniqueInput[]
    update?: ShareItemUpdateWithWhereUniqueWithoutShareInput | ShareItemUpdateWithWhereUniqueWithoutShareInput[]
    updateMany?: ShareItemUpdateManyWithWhereWithoutShareInput | ShareItemUpdateManyWithWhereWithoutShareInput[]
    deleteMany?: ShareItemScalarWhereInput | ShareItemScalarWhereInput[]
  }

  export type ShareAccessLogUncheckedUpdateManyWithoutShareNestedInput = {
    create?: XOR<ShareAccessLogCreateWithoutShareInput, ShareAccessLogUncheckedCreateWithoutShareInput> | ShareAccessLogCreateWithoutShareInput[] | ShareAccessLogUncheckedCreateWithoutShareInput[]
    connectOrCreate?: ShareAccessLogCreateOrConnectWithoutShareInput | ShareAccessLogCreateOrConnectWithoutShareInput[]
    upsert?: ShareAccessLogUpsertWithWhereUniqueWithoutShareInput | ShareAccessLogUpsertWithWhereUniqueWithoutShareInput[]
    createMany?: ShareAccessLogCreateManyShareInputEnvelope
    set?: ShareAccessLogWhereUniqueInput | ShareAccessLogWhereUniqueInput[]
    disconnect?: ShareAccessLogWhereUniqueInput | ShareAccessLogWhereUniqueInput[]
    delete?: ShareAccessLogWhereUniqueInput | ShareAccessLogWhereUniqueInput[]
    connect?: ShareAccessLogWhereUniqueInput | ShareAccessLogWhereUniqueInput[]
    update?: ShareAccessLogUpdateWithWhereUniqueWithoutShareInput | ShareAccessLogUpdateWithWhereUniqueWithoutShareInput[]
    updateMany?: ShareAccessLogUpdateManyWithWhereWithoutShareInput | ShareAccessLogUpdateManyWithWhereWithoutShareInput[]
    deleteMany?: ShareAccessLogScalarWhereInput | ShareAccessLogScalarWhereInput[]
  }

  export type ShareCreateNestedOneWithoutItemsInput = {
    create?: XOR<ShareCreateWithoutItemsInput, ShareUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ShareCreateOrConnectWithoutItemsInput
    connect?: ShareWhereUniqueInput
  }

  export type FileEntryCreateNestedOneWithoutShareItemsInput = {
    create?: XOR<FileEntryCreateWithoutShareItemsInput, FileEntryUncheckedCreateWithoutShareItemsInput>
    connectOrCreate?: FileEntryCreateOrConnectWithoutShareItemsInput
    connect?: FileEntryWhereUniqueInput
  }

  export type ShareUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ShareCreateWithoutItemsInput, ShareUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ShareCreateOrConnectWithoutItemsInput
    upsert?: ShareUpsertWithoutItemsInput
    connect?: ShareWhereUniqueInput
    update?: XOR<XOR<ShareUpdateToOneWithWhereWithoutItemsInput, ShareUpdateWithoutItemsInput>, ShareUncheckedUpdateWithoutItemsInput>
  }

  export type FileEntryUpdateOneRequiredWithoutShareItemsNestedInput = {
    create?: XOR<FileEntryCreateWithoutShareItemsInput, FileEntryUncheckedCreateWithoutShareItemsInput>
    connectOrCreate?: FileEntryCreateOrConnectWithoutShareItemsInput
    upsert?: FileEntryUpsertWithoutShareItemsInput
    connect?: FileEntryWhereUniqueInput
    update?: XOR<XOR<FileEntryUpdateToOneWithWhereWithoutShareItemsInput, FileEntryUpdateWithoutShareItemsInput>, FileEntryUncheckedUpdateWithoutShareItemsInput>
  }

  export type ShareCreateNestedOneWithoutAccessLogsInput = {
    create?: XOR<ShareCreateWithoutAccessLogsInput, ShareUncheckedCreateWithoutAccessLogsInput>
    connectOrCreate?: ShareCreateOrConnectWithoutAccessLogsInput
    connect?: ShareWhereUniqueInput
  }

  export type ShareUpdateOneRequiredWithoutAccessLogsNestedInput = {
    create?: XOR<ShareCreateWithoutAccessLogsInput, ShareUncheckedCreateWithoutAccessLogsInput>
    connectOrCreate?: ShareCreateOrConnectWithoutAccessLogsInput
    upsert?: ShareUpsertWithoutAccessLogsInput
    connect?: ShareWhereUniqueInput
    update?: XOR<XOR<ShareUpdateToOneWithWhereWithoutAccessLogsInput, ShareUpdateWithoutAccessLogsInput>, ShareUncheckedUpdateWithoutAccessLogsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumFileKindFilter<$PrismaModel = never> = {
    equals?: $Enums.FileKind | EnumFileKindFieldRefInput<$PrismaModel>
    in?: $Enums.FileKind[]
    notIn?: $Enums.FileKind[]
    not?: NestedEnumFileKindFilter<$PrismaModel> | $Enums.FileKind
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumFileKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileKind | EnumFileKindFieldRefInput<$PrismaModel>
    in?: $Enums.FileKind[]
    notIn?: $Enums.FileKind[]
    not?: NestedEnumFileKindWithAggregatesFilter<$PrismaModel> | $Enums.FileKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileKindFilter<$PrismaModel>
    _max?: NestedEnumFileKindFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FolderCreateWithoutOwnerInput = {
    id?: string
    name: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: FolderCreateNestedOneWithoutChildrenInput
    children?: FolderCreateNestedManyWithoutParentInput
    files?: FileEntryCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    parentId?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: FolderUncheckedCreateNestedManyWithoutParentInput
    files?: FileEntryUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderCreateOrConnectWithoutOwnerInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutOwnerInput, FolderUncheckedCreateWithoutOwnerInput>
  }

  export type FolderCreateManyOwnerInputEnvelope = {
    data: FolderCreateManyOwnerInput | FolderCreateManyOwnerInput[]
  }

  export type FileEntryCreateWithoutOwnerInput = {
    id?: string
    storageKey: string
    originalName: string
    extension?: string | null
    mimeType: string
    sizeBytes: bigint | number
    kind?: $Enums.FileKind
    checksumSha256?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folder?: FolderCreateNestedOneWithoutFilesInput
    shareItems?: ShareItemCreateNestedManyWithoutFileInput
  }

  export type FileEntryUncheckedCreateWithoutOwnerInput = {
    id?: string
    folderId?: string | null
    storageKey: string
    originalName: string
    extension?: string | null
    mimeType: string
    sizeBytes: bigint | number
    kind?: $Enums.FileKind
    checksumSha256?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shareItems?: ShareItemUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileEntryCreateOrConnectWithoutOwnerInput = {
    where: FileEntryWhereUniqueInput
    create: XOR<FileEntryCreateWithoutOwnerInput, FileEntryUncheckedCreateWithoutOwnerInput>
  }

  export type FileEntryCreateManyOwnerInputEnvelope = {
    data: FileEntryCreateManyOwnerInput | FileEntryCreateManyOwnerInput[]
  }

  export type ShareCreateWithoutCreatorInput = {
    id?: string
    token: string
    passwordHash?: string | null
    expiresAt?: Date | string | null
    maxDownloads?: number | null
    downloadCount?: number
    allowPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ShareItemCreateNestedManyWithoutShareInput
    accessLogs?: ShareAccessLogCreateNestedManyWithoutShareInput
  }

  export type ShareUncheckedCreateWithoutCreatorInput = {
    id?: string
    token: string
    passwordHash?: string | null
    expiresAt?: Date | string | null
    maxDownloads?: number | null
    downloadCount?: number
    allowPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ShareItemUncheckedCreateNestedManyWithoutShareInput
    accessLogs?: ShareAccessLogUncheckedCreateNestedManyWithoutShareInput
  }

  export type ShareCreateOrConnectWithoutCreatorInput = {
    where: ShareWhereUniqueInput
    create: XOR<ShareCreateWithoutCreatorInput, ShareUncheckedCreateWithoutCreatorInput>
  }

  export type ShareCreateManyCreatorInputEnvelope = {
    data: ShareCreateManyCreatorInput | ShareCreateManyCreatorInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastSeenAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastSeenAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type AuditLogCreateWithoutActorInput = {
    id?: string
    action: string
    targetType: string
    targetId?: string | null
    detail?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    action: string
    targetType: string
    targetId?: string | null
    detail?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogCreateManyActorInputEnvelope = {
    data: AuditLogCreateManyActorInput | AuditLogCreateManyActorInput[]
  }

  export type FolderUpsertWithWhereUniqueWithoutOwnerInput = {
    where: FolderWhereUniqueInput
    update: XOR<FolderUpdateWithoutOwnerInput, FolderUncheckedUpdateWithoutOwnerInput>
    create: XOR<FolderCreateWithoutOwnerInput, FolderUncheckedCreateWithoutOwnerInput>
  }

  export type FolderUpdateWithWhereUniqueWithoutOwnerInput = {
    where: FolderWhereUniqueInput
    data: XOR<FolderUpdateWithoutOwnerInput, FolderUncheckedUpdateWithoutOwnerInput>
  }

  export type FolderUpdateManyWithWhereWithoutOwnerInput = {
    where: FolderScalarWhereInput
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyWithoutOwnerInput>
  }

  export type FolderScalarWhereInput = {
    AND?: FolderScalarWhereInput | FolderScalarWhereInput[]
    OR?: FolderScalarWhereInput[]
    NOT?: FolderScalarWhereInput | FolderScalarWhereInput[]
    id?: StringFilter<"Folder"> | string
    name?: StringFilter<"Folder"> | string
    ownerId?: StringFilter<"Folder"> | string
    parentId?: StringNullableFilter<"Folder"> | string | null
    path?: StringFilter<"Folder"> | string
    createdAt?: DateTimeFilter<"Folder"> | Date | string
    updatedAt?: DateTimeFilter<"Folder"> | Date | string
  }

  export type FileEntryUpsertWithWhereUniqueWithoutOwnerInput = {
    where: FileEntryWhereUniqueInput
    update: XOR<FileEntryUpdateWithoutOwnerInput, FileEntryUncheckedUpdateWithoutOwnerInput>
    create: XOR<FileEntryCreateWithoutOwnerInput, FileEntryUncheckedCreateWithoutOwnerInput>
  }

  export type FileEntryUpdateWithWhereUniqueWithoutOwnerInput = {
    where: FileEntryWhereUniqueInput
    data: XOR<FileEntryUpdateWithoutOwnerInput, FileEntryUncheckedUpdateWithoutOwnerInput>
  }

  export type FileEntryUpdateManyWithWhereWithoutOwnerInput = {
    where: FileEntryScalarWhereInput
    data: XOR<FileEntryUpdateManyMutationInput, FileEntryUncheckedUpdateManyWithoutOwnerInput>
  }

  export type FileEntryScalarWhereInput = {
    AND?: FileEntryScalarWhereInput | FileEntryScalarWhereInput[]
    OR?: FileEntryScalarWhereInput[]
    NOT?: FileEntryScalarWhereInput | FileEntryScalarWhereInput[]
    id?: StringFilter<"FileEntry"> | string
    ownerId?: StringFilter<"FileEntry"> | string
    folderId?: StringNullableFilter<"FileEntry"> | string | null
    storageKey?: StringFilter<"FileEntry"> | string
    originalName?: StringFilter<"FileEntry"> | string
    extension?: StringNullableFilter<"FileEntry"> | string | null
    mimeType?: StringFilter<"FileEntry"> | string
    sizeBytes?: BigIntFilter<"FileEntry"> | bigint | number
    kind?: EnumFileKindFilter<"FileEntry"> | $Enums.FileKind
    checksumSha256?: StringNullableFilter<"FileEntry"> | string | null
    createdAt?: DateTimeFilter<"FileEntry"> | Date | string
    updatedAt?: DateTimeFilter<"FileEntry"> | Date | string
  }

  export type ShareUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ShareWhereUniqueInput
    update: XOR<ShareUpdateWithoutCreatorInput, ShareUncheckedUpdateWithoutCreatorInput>
    create: XOR<ShareCreateWithoutCreatorInput, ShareUncheckedCreateWithoutCreatorInput>
  }

  export type ShareUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ShareWhereUniqueInput
    data: XOR<ShareUpdateWithoutCreatorInput, ShareUncheckedUpdateWithoutCreatorInput>
  }

  export type ShareUpdateManyWithWhereWithoutCreatorInput = {
    where: ShareScalarWhereInput
    data: XOR<ShareUpdateManyMutationInput, ShareUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ShareScalarWhereInput = {
    AND?: ShareScalarWhereInput | ShareScalarWhereInput[]
    OR?: ShareScalarWhereInput[]
    NOT?: ShareScalarWhereInput | ShareScalarWhereInput[]
    id?: StringFilter<"Share"> | string
    creatorId?: StringFilter<"Share"> | string
    token?: StringFilter<"Share"> | string
    passwordHash?: StringNullableFilter<"Share"> | string | null
    expiresAt?: DateTimeNullableFilter<"Share"> | Date | string | null
    maxDownloads?: IntNullableFilter<"Share"> | number | null
    downloadCount?: IntFilter<"Share"> | number
    allowPreview?: BoolFilter<"Share"> | boolean
    createdAt?: DateTimeFilter<"Share"> | Date | string
    updatedAt?: DateTimeFilter<"Share"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    tokenHash?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastSeenAt?: DateTimeFilter<"Session"> | Date | string
    ip?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    targetType?: StringFilter<"AuditLog"> | string
    targetId?: StringNullableFilter<"AuditLog"> | string | null
    detail?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    maxUploadBytes?: bigint | number | null
    rootFolderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutOwnerInput
    files?: FileEntryCreateNestedManyWithoutOwnerInput
    shares?: ShareCreateNestedManyWithoutCreatorInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    maxUploadBytes?: bigint | number | null
    rootFolderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutOwnerInput
    files?: FileEntryUncheckedCreateNestedManyWithoutOwnerInput
    shares?: ShareUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxUploadBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rootFolderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutOwnerNestedInput
    files?: FileEntryUpdateManyWithoutOwnerNestedInput
    shares?: ShareUpdateManyWithoutCreatorNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxUploadBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rootFolderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutOwnerNestedInput
    files?: FileEntryUncheckedUpdateManyWithoutOwnerNestedInput
    shares?: ShareUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateWithoutFoldersInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    maxUploadBytes?: bigint | number | null
    rootFolderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileEntryCreateNestedManyWithoutOwnerInput
    shares?: ShareCreateNestedManyWithoutCreatorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutFoldersInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    maxUploadBytes?: bigint | number | null
    rootFolderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileEntryUncheckedCreateNestedManyWithoutOwnerInput
    shares?: ShareUncheckedCreateNestedManyWithoutCreatorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutFoldersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
  }

  export type FolderCreateWithoutChildrenInput = {
    id?: string
    name: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFoldersInput
    parent?: FolderCreateNestedOneWithoutChildrenInput
    files?: FileEntryCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    ownerId: string
    parentId?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileEntryUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderCreateOrConnectWithoutChildrenInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutChildrenInput, FolderUncheckedCreateWithoutChildrenInput>
  }

  export type FolderCreateWithoutParentInput = {
    id?: string
    name: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFoldersInput
    children?: FolderCreateNestedManyWithoutParentInput
    files?: FileEntryCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    ownerId: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: FolderUncheckedCreateNestedManyWithoutParentInput
    files?: FileEntryUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderCreateOrConnectWithoutParentInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput>
  }

  export type FolderCreateManyParentInputEnvelope = {
    data: FolderCreateManyParentInput | FolderCreateManyParentInput[]
  }

  export type FileEntryCreateWithoutFolderInput = {
    id?: string
    storageKey: string
    originalName: string
    extension?: string | null
    mimeType: string
    sizeBytes: bigint | number
    kind?: $Enums.FileKind
    checksumSha256?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFilesInput
    shareItems?: ShareItemCreateNestedManyWithoutFileInput
  }

  export type FileEntryUncheckedCreateWithoutFolderInput = {
    id?: string
    ownerId: string
    storageKey: string
    originalName: string
    extension?: string | null
    mimeType: string
    sizeBytes: bigint | number
    kind?: $Enums.FileKind
    checksumSha256?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shareItems?: ShareItemUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileEntryCreateOrConnectWithoutFolderInput = {
    where: FileEntryWhereUniqueInput
    create: XOR<FileEntryCreateWithoutFolderInput, FileEntryUncheckedCreateWithoutFolderInput>
  }

  export type FileEntryCreateManyFolderInputEnvelope = {
    data: FileEntryCreateManyFolderInput | FileEntryCreateManyFolderInput[]
  }

  export type UserUpsertWithoutFoldersInput = {
    update: XOR<UserUpdateWithoutFoldersInput, UserUncheckedUpdateWithoutFoldersInput>
    create: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFoldersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFoldersInput, UserUncheckedUpdateWithoutFoldersInput>
  }

  export type UserUpdateWithoutFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxUploadBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rootFolderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileEntryUpdateManyWithoutOwnerNestedInput
    shares?: ShareUpdateManyWithoutCreatorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxUploadBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rootFolderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileEntryUncheckedUpdateManyWithoutOwnerNestedInput
    shares?: ShareUncheckedUpdateManyWithoutCreatorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type FolderUpsertWithoutChildrenInput = {
    update: XOR<FolderUpdateWithoutChildrenInput, FolderUncheckedUpdateWithoutChildrenInput>
    create: XOR<FolderCreateWithoutChildrenInput, FolderUncheckedCreateWithoutChildrenInput>
    where?: FolderWhereInput
  }

  export type FolderUpdateToOneWithWhereWithoutChildrenInput = {
    where?: FolderWhereInput
    data: XOR<FolderUpdateWithoutChildrenInput, FolderUncheckedUpdateWithoutChildrenInput>
  }

  export type FolderUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFoldersNestedInput
    parent?: FolderUpdateOneWithoutChildrenNestedInput
    files?: FileEntryUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileEntryUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderUpsertWithWhereUniqueWithoutParentInput = {
    where: FolderWhereUniqueInput
    update: XOR<FolderUpdateWithoutParentInput, FolderUncheckedUpdateWithoutParentInput>
    create: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput>
  }

  export type FolderUpdateWithWhereUniqueWithoutParentInput = {
    where: FolderWhereUniqueInput
    data: XOR<FolderUpdateWithoutParentInput, FolderUncheckedUpdateWithoutParentInput>
  }

  export type FolderUpdateManyWithWhereWithoutParentInput = {
    where: FolderScalarWhereInput
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyWithoutParentInput>
  }

  export type FileEntryUpsertWithWhereUniqueWithoutFolderInput = {
    where: FileEntryWhereUniqueInput
    update: XOR<FileEntryUpdateWithoutFolderInput, FileEntryUncheckedUpdateWithoutFolderInput>
    create: XOR<FileEntryCreateWithoutFolderInput, FileEntryUncheckedCreateWithoutFolderInput>
  }

  export type FileEntryUpdateWithWhereUniqueWithoutFolderInput = {
    where: FileEntryWhereUniqueInput
    data: XOR<FileEntryUpdateWithoutFolderInput, FileEntryUncheckedUpdateWithoutFolderInput>
  }

  export type FileEntryUpdateManyWithWhereWithoutFolderInput = {
    where: FileEntryScalarWhereInput
    data: XOR<FileEntryUpdateManyMutationInput, FileEntryUncheckedUpdateManyWithoutFolderInput>
  }

  export type UserCreateWithoutFilesInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    maxUploadBytes?: bigint | number | null
    rootFolderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutOwnerInput
    shares?: ShareCreateNestedManyWithoutCreatorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutFilesInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    maxUploadBytes?: bigint | number | null
    rootFolderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutOwnerInput
    shares?: ShareUncheckedCreateNestedManyWithoutCreatorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type FolderCreateWithoutFilesInput = {
    id?: string
    name: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFoldersInput
    parent?: FolderCreateNestedOneWithoutChildrenInput
    children?: FolderCreateNestedManyWithoutParentInput
  }

  export type FolderUncheckedCreateWithoutFilesInput = {
    id?: string
    name: string
    ownerId: string
    parentId?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: FolderUncheckedCreateNestedManyWithoutParentInput
  }

  export type FolderCreateOrConnectWithoutFilesInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutFilesInput, FolderUncheckedCreateWithoutFilesInput>
  }

  export type ShareItemCreateWithoutFileInput = {
    id?: string
    createdAt?: Date | string
    share: ShareCreateNestedOneWithoutItemsInput
  }

  export type ShareItemUncheckedCreateWithoutFileInput = {
    id?: string
    shareId: string
    createdAt?: Date | string
  }

  export type ShareItemCreateOrConnectWithoutFileInput = {
    where: ShareItemWhereUniqueInput
    create: XOR<ShareItemCreateWithoutFileInput, ShareItemUncheckedCreateWithoutFileInput>
  }

  export type ShareItemCreateManyFileInputEnvelope = {
    data: ShareItemCreateManyFileInput | ShareItemCreateManyFileInput[]
  }

  export type UserUpsertWithoutFilesInput = {
    update: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
  }

  export type UserUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxUploadBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rootFolderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutOwnerNestedInput
    shares?: ShareUpdateManyWithoutCreatorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxUploadBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rootFolderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutOwnerNestedInput
    shares?: ShareUncheckedUpdateManyWithoutCreatorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type FolderUpsertWithoutFilesInput = {
    update: XOR<FolderUpdateWithoutFilesInput, FolderUncheckedUpdateWithoutFilesInput>
    create: XOR<FolderCreateWithoutFilesInput, FolderUncheckedCreateWithoutFilesInput>
    where?: FolderWhereInput
  }

  export type FolderUpdateToOneWithWhereWithoutFilesInput = {
    where?: FolderWhereInput
    data: XOR<FolderUpdateWithoutFilesInput, FolderUncheckedUpdateWithoutFilesInput>
  }

  export type FolderUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFoldersNestedInput
    parent?: FolderUpdateOneWithoutChildrenNestedInput
    children?: FolderUpdateManyWithoutParentNestedInput
  }

  export type FolderUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: FolderUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ShareItemUpsertWithWhereUniqueWithoutFileInput = {
    where: ShareItemWhereUniqueInput
    update: XOR<ShareItemUpdateWithoutFileInput, ShareItemUncheckedUpdateWithoutFileInput>
    create: XOR<ShareItemCreateWithoutFileInput, ShareItemUncheckedCreateWithoutFileInput>
  }

  export type ShareItemUpdateWithWhereUniqueWithoutFileInput = {
    where: ShareItemWhereUniqueInput
    data: XOR<ShareItemUpdateWithoutFileInput, ShareItemUncheckedUpdateWithoutFileInput>
  }

  export type ShareItemUpdateManyWithWhereWithoutFileInput = {
    where: ShareItemScalarWhereInput
    data: XOR<ShareItemUpdateManyMutationInput, ShareItemUncheckedUpdateManyWithoutFileInput>
  }

  export type ShareItemScalarWhereInput = {
    AND?: ShareItemScalarWhereInput | ShareItemScalarWhereInput[]
    OR?: ShareItemScalarWhereInput[]
    NOT?: ShareItemScalarWhereInput | ShareItemScalarWhereInput[]
    id?: StringFilter<"ShareItem"> | string
    shareId?: StringFilter<"ShareItem"> | string
    fileId?: StringFilter<"ShareItem"> | string
    createdAt?: DateTimeFilter<"ShareItem"> | Date | string
  }

  export type UserCreateWithoutSharesInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    maxUploadBytes?: bigint | number | null
    rootFolderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutOwnerInput
    files?: FileEntryCreateNestedManyWithoutOwnerInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutSharesInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    maxUploadBytes?: bigint | number | null
    rootFolderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutOwnerInput
    files?: FileEntryUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutSharesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharesInput, UserUncheckedCreateWithoutSharesInput>
  }

  export type ShareItemCreateWithoutShareInput = {
    id?: string
    createdAt?: Date | string
    file: FileEntryCreateNestedOneWithoutShareItemsInput
  }

  export type ShareItemUncheckedCreateWithoutShareInput = {
    id?: string
    fileId: string
    createdAt?: Date | string
  }

  export type ShareItemCreateOrConnectWithoutShareInput = {
    where: ShareItemWhereUniqueInput
    create: XOR<ShareItemCreateWithoutShareInput, ShareItemUncheckedCreateWithoutShareInput>
  }

  export type ShareItemCreateManyShareInputEnvelope = {
    data: ShareItemCreateManyShareInput | ShareItemCreateManyShareInput[]
  }

  export type ShareAccessLogCreateWithoutShareInput = {
    id?: string
    accessedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
    action: string
  }

  export type ShareAccessLogUncheckedCreateWithoutShareInput = {
    id?: string
    accessedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
    action: string
  }

  export type ShareAccessLogCreateOrConnectWithoutShareInput = {
    where: ShareAccessLogWhereUniqueInput
    create: XOR<ShareAccessLogCreateWithoutShareInput, ShareAccessLogUncheckedCreateWithoutShareInput>
  }

  export type ShareAccessLogCreateManyShareInputEnvelope = {
    data: ShareAccessLogCreateManyShareInput | ShareAccessLogCreateManyShareInput[]
  }

  export type UserUpsertWithoutSharesInput = {
    update: XOR<UserUpdateWithoutSharesInput, UserUncheckedUpdateWithoutSharesInput>
    create: XOR<UserCreateWithoutSharesInput, UserUncheckedCreateWithoutSharesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharesInput, UserUncheckedUpdateWithoutSharesInput>
  }

  export type UserUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxUploadBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rootFolderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutOwnerNestedInput
    files?: FileEntryUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxUploadBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rootFolderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutOwnerNestedInput
    files?: FileEntryUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ShareItemUpsertWithWhereUniqueWithoutShareInput = {
    where: ShareItemWhereUniqueInput
    update: XOR<ShareItemUpdateWithoutShareInput, ShareItemUncheckedUpdateWithoutShareInput>
    create: XOR<ShareItemCreateWithoutShareInput, ShareItemUncheckedCreateWithoutShareInput>
  }

  export type ShareItemUpdateWithWhereUniqueWithoutShareInput = {
    where: ShareItemWhereUniqueInput
    data: XOR<ShareItemUpdateWithoutShareInput, ShareItemUncheckedUpdateWithoutShareInput>
  }

  export type ShareItemUpdateManyWithWhereWithoutShareInput = {
    where: ShareItemScalarWhereInput
    data: XOR<ShareItemUpdateManyMutationInput, ShareItemUncheckedUpdateManyWithoutShareInput>
  }

  export type ShareAccessLogUpsertWithWhereUniqueWithoutShareInput = {
    where: ShareAccessLogWhereUniqueInput
    update: XOR<ShareAccessLogUpdateWithoutShareInput, ShareAccessLogUncheckedUpdateWithoutShareInput>
    create: XOR<ShareAccessLogCreateWithoutShareInput, ShareAccessLogUncheckedCreateWithoutShareInput>
  }

  export type ShareAccessLogUpdateWithWhereUniqueWithoutShareInput = {
    where: ShareAccessLogWhereUniqueInput
    data: XOR<ShareAccessLogUpdateWithoutShareInput, ShareAccessLogUncheckedUpdateWithoutShareInput>
  }

  export type ShareAccessLogUpdateManyWithWhereWithoutShareInput = {
    where: ShareAccessLogScalarWhereInput
    data: XOR<ShareAccessLogUpdateManyMutationInput, ShareAccessLogUncheckedUpdateManyWithoutShareInput>
  }

  export type ShareAccessLogScalarWhereInput = {
    AND?: ShareAccessLogScalarWhereInput | ShareAccessLogScalarWhereInput[]
    OR?: ShareAccessLogScalarWhereInput[]
    NOT?: ShareAccessLogScalarWhereInput | ShareAccessLogScalarWhereInput[]
    id?: StringFilter<"ShareAccessLog"> | string
    shareId?: StringFilter<"ShareAccessLog"> | string
    accessedAt?: DateTimeFilter<"ShareAccessLog"> | Date | string
    ip?: StringNullableFilter<"ShareAccessLog"> | string | null
    userAgent?: StringNullableFilter<"ShareAccessLog"> | string | null
    action?: StringFilter<"ShareAccessLog"> | string
  }

  export type ShareCreateWithoutItemsInput = {
    id?: string
    token: string
    passwordHash?: string | null
    expiresAt?: Date | string | null
    maxDownloads?: number | null
    downloadCount?: number
    allowPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutSharesInput
    accessLogs?: ShareAccessLogCreateNestedManyWithoutShareInput
  }

  export type ShareUncheckedCreateWithoutItemsInput = {
    id?: string
    creatorId: string
    token: string
    passwordHash?: string | null
    expiresAt?: Date | string | null
    maxDownloads?: number | null
    downloadCount?: number
    allowPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessLogs?: ShareAccessLogUncheckedCreateNestedManyWithoutShareInput
  }

  export type ShareCreateOrConnectWithoutItemsInput = {
    where: ShareWhereUniqueInput
    create: XOR<ShareCreateWithoutItemsInput, ShareUncheckedCreateWithoutItemsInput>
  }

  export type FileEntryCreateWithoutShareItemsInput = {
    id?: string
    storageKey: string
    originalName: string
    extension?: string | null
    mimeType: string
    sizeBytes: bigint | number
    kind?: $Enums.FileKind
    checksumSha256?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFilesInput
    folder?: FolderCreateNestedOneWithoutFilesInput
  }

  export type FileEntryUncheckedCreateWithoutShareItemsInput = {
    id?: string
    ownerId: string
    folderId?: string | null
    storageKey: string
    originalName: string
    extension?: string | null
    mimeType: string
    sizeBytes: bigint | number
    kind?: $Enums.FileKind
    checksumSha256?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileEntryCreateOrConnectWithoutShareItemsInput = {
    where: FileEntryWhereUniqueInput
    create: XOR<FileEntryCreateWithoutShareItemsInput, FileEntryUncheckedCreateWithoutShareItemsInput>
  }

  export type ShareUpsertWithoutItemsInput = {
    update: XOR<ShareUpdateWithoutItemsInput, ShareUncheckedUpdateWithoutItemsInput>
    create: XOR<ShareCreateWithoutItemsInput, ShareUncheckedCreateWithoutItemsInput>
    where?: ShareWhereInput
  }

  export type ShareUpdateToOneWithWhereWithoutItemsInput = {
    where?: ShareWhereInput
    data: XOR<ShareUpdateWithoutItemsInput, ShareUncheckedUpdateWithoutItemsInput>
  }

  export type ShareUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDownloads?: NullableIntFieldUpdateOperationsInput | number | null
    downloadCount?: IntFieldUpdateOperationsInput | number
    allowPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutSharesNestedInput
    accessLogs?: ShareAccessLogUpdateManyWithoutShareNestedInput
  }

  export type ShareUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDownloads?: NullableIntFieldUpdateOperationsInput | number | null
    downloadCount?: IntFieldUpdateOperationsInput | number
    allowPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessLogs?: ShareAccessLogUncheckedUpdateManyWithoutShareNestedInput
  }

  export type FileEntryUpsertWithoutShareItemsInput = {
    update: XOR<FileEntryUpdateWithoutShareItemsInput, FileEntryUncheckedUpdateWithoutShareItemsInput>
    create: XOR<FileEntryCreateWithoutShareItemsInput, FileEntryUncheckedCreateWithoutShareItemsInput>
    where?: FileEntryWhereInput
  }

  export type FileEntryUpdateToOneWithWhereWithoutShareItemsInput = {
    where?: FileEntryWhereInput
    data: XOR<FileEntryUpdateWithoutShareItemsInput, FileEntryUncheckedUpdateWithoutShareItemsInput>
  }

  export type FileEntryUpdateWithoutShareItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: EnumFileKindFieldUpdateOperationsInput | $Enums.FileKind
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFilesNestedInput
    folder?: FolderUpdateOneWithoutFilesNestedInput
  }

  export type FileEntryUncheckedUpdateWithoutShareItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: EnumFileKindFieldUpdateOperationsInput | $Enums.FileKind
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareCreateWithoutAccessLogsInput = {
    id?: string
    token: string
    passwordHash?: string | null
    expiresAt?: Date | string | null
    maxDownloads?: number | null
    downloadCount?: number
    allowPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutSharesInput
    items?: ShareItemCreateNestedManyWithoutShareInput
  }

  export type ShareUncheckedCreateWithoutAccessLogsInput = {
    id?: string
    creatorId: string
    token: string
    passwordHash?: string | null
    expiresAt?: Date | string | null
    maxDownloads?: number | null
    downloadCount?: number
    allowPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ShareItemUncheckedCreateNestedManyWithoutShareInput
  }

  export type ShareCreateOrConnectWithoutAccessLogsInput = {
    where: ShareWhereUniqueInput
    create: XOR<ShareCreateWithoutAccessLogsInput, ShareUncheckedCreateWithoutAccessLogsInput>
  }

  export type ShareUpsertWithoutAccessLogsInput = {
    update: XOR<ShareUpdateWithoutAccessLogsInput, ShareUncheckedUpdateWithoutAccessLogsInput>
    create: XOR<ShareCreateWithoutAccessLogsInput, ShareUncheckedCreateWithoutAccessLogsInput>
    where?: ShareWhereInput
  }

  export type ShareUpdateToOneWithWhereWithoutAccessLogsInput = {
    where?: ShareWhereInput
    data: XOR<ShareUpdateWithoutAccessLogsInput, ShareUncheckedUpdateWithoutAccessLogsInput>
  }

  export type ShareUpdateWithoutAccessLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDownloads?: NullableIntFieldUpdateOperationsInput | number | null
    downloadCount?: IntFieldUpdateOperationsInput | number
    allowPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutSharesNestedInput
    items?: ShareItemUpdateManyWithoutShareNestedInput
  }

  export type ShareUncheckedUpdateWithoutAccessLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDownloads?: NullableIntFieldUpdateOperationsInput | number | null
    downloadCount?: IntFieldUpdateOperationsInput | number
    allowPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ShareItemUncheckedUpdateManyWithoutShareNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    maxUploadBytes?: bigint | number | null
    rootFolderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutOwnerInput
    files?: FileEntryCreateNestedManyWithoutOwnerInput
    shares?: ShareCreateNestedManyWithoutCreatorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    maxUploadBytes?: bigint | number | null
    rootFolderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutOwnerInput
    files?: FileEntryUncheckedCreateNestedManyWithoutOwnerInput
    shares?: ShareUncheckedCreateNestedManyWithoutCreatorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxUploadBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rootFolderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutOwnerNestedInput
    files?: FileEntryUpdateManyWithoutOwnerNestedInput
    shares?: ShareUpdateManyWithoutCreatorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxUploadBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    rootFolderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutOwnerNestedInput
    files?: FileEntryUncheckedUpdateManyWithoutOwnerNestedInput
    shares?: ShareUncheckedUpdateManyWithoutCreatorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FolderCreateManyOwnerInput = {
    id?: string
    name: string
    parentId?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileEntryCreateManyOwnerInput = {
    id?: string
    folderId?: string | null
    storageKey: string
    originalName: string
    extension?: string | null
    mimeType: string
    sizeBytes: bigint | number
    kind?: $Enums.FileKind
    checksumSha256?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShareCreateManyCreatorInput = {
    id?: string
    token: string
    passwordHash?: string | null
    expiresAt?: Date | string | null
    maxDownloads?: number | null
    downloadCount?: number
    allowPreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastSeenAt?: Date | string
    ip?: string | null
    userAgent?: string | null
  }

  export type AuditLogCreateManyActorInput = {
    id?: string
    action: string
    targetType: string
    targetId?: string | null
    detail?: string | null
    createdAt?: Date | string
  }

  export type FolderUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: FolderUpdateOneWithoutChildrenNestedInput
    children?: FolderUpdateManyWithoutParentNestedInput
    files?: FileEntryUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: FolderUncheckedUpdateManyWithoutParentNestedInput
    files?: FileEntryUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileEntryUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: EnumFileKindFieldUpdateOperationsInput | $Enums.FileKind
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: FolderUpdateOneWithoutFilesNestedInput
    shareItems?: ShareItemUpdateManyWithoutFileNestedInput
  }

  export type FileEntryUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: EnumFileKindFieldUpdateOperationsInput | $Enums.FileKind
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareItems?: ShareItemUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FileEntryUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: EnumFileKindFieldUpdateOperationsInput | $Enums.FileKind
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDownloads?: NullableIntFieldUpdateOperationsInput | number | null
    downloadCount?: IntFieldUpdateOperationsInput | number
    allowPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ShareItemUpdateManyWithoutShareNestedInput
    accessLogs?: ShareAccessLogUpdateManyWithoutShareNestedInput
  }

  export type ShareUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDownloads?: NullableIntFieldUpdateOperationsInput | number | null
    downloadCount?: IntFieldUpdateOperationsInput | number
    allowPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ShareItemUncheckedUpdateManyWithoutShareNestedInput
    accessLogs?: ShareAccessLogUncheckedUpdateManyWithoutShareNestedInput
  }

  export type ShareUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxDownloads?: NullableIntFieldUpdateOperationsInput | number | null
    downloadCount?: IntFieldUpdateOperationsInput | number
    allowPreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolderCreateManyParentInput = {
    id?: string
    name: string
    ownerId: string
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileEntryCreateManyFolderInput = {
    id?: string
    ownerId: string
    storageKey: string
    originalName: string
    extension?: string | null
    mimeType: string
    sizeBytes: bigint | number
    kind?: $Enums.FileKind
    checksumSha256?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FolderUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFoldersNestedInput
    children?: FolderUpdateManyWithoutParentNestedInput
    files?: FileEntryUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: FolderUncheckedUpdateManyWithoutParentNestedInput
    files?: FileEntryUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileEntryUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: EnumFileKindFieldUpdateOperationsInput | $Enums.FileKind
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFilesNestedInput
    shareItems?: ShareItemUpdateManyWithoutFileNestedInput
  }

  export type FileEntryUncheckedUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: EnumFileKindFieldUpdateOperationsInput | $Enums.FileKind
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareItems?: ShareItemUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FileEntryUncheckedUpdateManyWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    extension?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    kind?: EnumFileKindFieldUpdateOperationsInput | $Enums.FileKind
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareItemCreateManyFileInput = {
    id?: string
    shareId: string
    createdAt?: Date | string
  }

  export type ShareItemUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    share?: ShareUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ShareItemUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareItemUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareItemCreateManyShareInput = {
    id?: string
    fileId: string
    createdAt?: Date | string
  }

  export type ShareAccessLogCreateManyShareInput = {
    id?: string
    accessedAt?: Date | string
    ip?: string | null
    userAgent?: string | null
    action: string
  }

  export type ShareItemUpdateWithoutShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: FileEntryUpdateOneRequiredWithoutShareItemsNestedInput
  }

  export type ShareItemUncheckedUpdateWithoutShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareItemUncheckedUpdateManyWithoutShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareAccessLogUpdateWithoutShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
  }

  export type ShareAccessLogUncheckedUpdateWithoutShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
  }

  export type ShareAccessLogUncheckedUpdateManyWithoutShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}