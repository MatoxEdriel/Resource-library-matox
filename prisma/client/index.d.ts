
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model InvoiceLine
 * 
 */
export type InvoiceLine = $Result.DefaultSelection<Prisma.$InvoiceLinePayload>
/**
 * Model MediaType
 * 
 */
export type MediaType = $Result.DefaultSelection<Prisma.$MediaTypePayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model PlaylistTrack
 * 
 */
export type PlaylistTrack = $Result.DefaultSelection<Prisma.$PlaylistTrackPayload>
/**
 * Model Track
 * 
 */
export type Track = $Result.DefaultSelection<Prisma.$TrackPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Albums
 * const albums = await prisma.album.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Albums
   * const albums = await prisma.album.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceLine`: Exposes CRUD operations for the **InvoiceLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceLines
    * const invoiceLines = await prisma.invoiceLine.findMany()
    * ```
    */
  get invoiceLine(): Prisma.InvoiceLineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaType`: Exposes CRUD operations for the **MediaType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaTypes
    * const mediaTypes = await prisma.mediaType.findMany()
    * ```
    */
  get mediaType(): Prisma.MediaTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlistTrack`: Exposes CRUD operations for the **PlaylistTrack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaylistTracks
    * const playlistTracks = await prisma.playlistTrack.findMany()
    * ```
    */
  get playlistTrack(): Prisma.PlaylistTrackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.track`: Exposes CRUD operations for the **Track** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.track.findMany()
    * ```
    */
  get track(): Prisma.TrackDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
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
    Album: 'Album',
    Artist: 'Artist',
    Customer: 'Customer',
    Employee: 'Employee',
    Genre: 'Genre',
    Invoice: 'Invoice',
    InvoiceLine: 'InvoiceLine',
    MediaType: 'MediaType',
    Playlist: 'Playlist',
    PlaylistTrack: 'PlaylistTrack',
    Track: 'Track'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "album" | "artist" | "customer" | "employee" | "genre" | "invoice" | "invoiceLine" | "mediaType" | "playlist" | "playlistTrack" | "track"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      InvoiceLine: {
        payload: Prisma.$InvoiceLinePayload<ExtArgs>
        fields: Prisma.InvoiceLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceLinePayload>
          }
          findFirst: {
            args: Prisma.InvoiceLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceLinePayload>
          }
          findMany: {
            args: Prisma.InvoiceLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceLinePayload>[]
          }
          create: {
            args: Prisma.InvoiceLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceLinePayload>
          }
          createMany: {
            args: Prisma.InvoiceLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceLinePayload>[]
          }
          delete: {
            args: Prisma.InvoiceLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceLinePayload>
          }
          update: {
            args: Prisma.InvoiceLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceLinePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceLineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceLinePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceLinePayload>
          }
          aggregate: {
            args: Prisma.InvoiceLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceLine>
          }
          groupBy: {
            args: Prisma.InvoiceLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceLineCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceLineCountAggregateOutputType> | number
          }
        }
      }
      MediaType: {
        payload: Prisma.$MediaTypePayload<ExtArgs>
        fields: Prisma.MediaTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTypePayload>
          }
          findFirst: {
            args: Prisma.MediaTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTypePayload>
          }
          findMany: {
            args: Prisma.MediaTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTypePayload>[]
          }
          create: {
            args: Prisma.MediaTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTypePayload>
          }
          createMany: {
            args: Prisma.MediaTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTypePayload>[]
          }
          delete: {
            args: Prisma.MediaTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTypePayload>
          }
          update: {
            args: Prisma.MediaTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTypePayload>
          }
          deleteMany: {
            args: Prisma.MediaTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTypePayload>[]
          }
          upsert: {
            args: Prisma.MediaTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaTypePayload>
          }
          aggregate: {
            args: Prisma.MediaTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaType>
          }
          groupBy: {
            args: Prisma.MediaTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaTypeCountArgs<ExtArgs>
            result: $Utils.Optional<MediaTypeCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      PlaylistTrack: {
        payload: Prisma.$PlaylistTrackPayload<ExtArgs>
        fields: Prisma.PlaylistTrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistTrackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistTrackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>
          }
          findFirst: {
            args: Prisma.PlaylistTrackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistTrackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>
          }
          findMany: {
            args: Prisma.PlaylistTrackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>[]
          }
          create: {
            args: Prisma.PlaylistTrackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>
          }
          createMany: {
            args: Prisma.PlaylistTrackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistTrackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>[]
          }
          delete: {
            args: Prisma.PlaylistTrackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>
          }
          update: {
            args: Prisma.PlaylistTrackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistTrackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistTrackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistTrackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistTrackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTrackPayload>
          }
          aggregate: {
            args: Prisma.PlaylistTrackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylistTrack>
          }
          groupBy: {
            args: Prisma.PlaylistTrackGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistTrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistTrackCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistTrackCountAggregateOutputType> | number
          }
        }
      }
      Track: {
        payload: Prisma.$TrackPayload<ExtArgs>
        fields: Prisma.TrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findFirst: {
            args: Prisma.TrackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findMany: {
            args: Prisma.TrackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          create: {
            args: Prisma.TrackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          createMany: {
            args: Prisma.TrackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          delete: {
            args: Prisma.TrackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          update: {
            args: Prisma.TrackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          deleteMany: {
            args: Prisma.TrackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          upsert: {
            args: Prisma.TrackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          aggregate: {
            args: Prisma.TrackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrack>
          }
          groupBy: {
            args: Prisma.TrackGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackCountArgs<ExtArgs>
            result: $Utils.Optional<TrackCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    album?: AlbumOmit
    artist?: ArtistOmit
    customer?: CustomerOmit
    employee?: EmployeeOmit
    genre?: GenreOmit
    invoice?: InvoiceOmit
    invoiceLine?: InvoiceLineOmit
    mediaType?: MediaTypeOmit
    playlist?: PlaylistOmit
    playlistTrack?: PlaylistTrackOmit
    track?: TrackOmit
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
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    Track: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | AlbumCountOutputTypeCountTrackArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
  }


  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    Album: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Album?: boolean | ArtistCountOutputTypeCountAlbumArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountAlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    Invoice: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Invoice?: boolean | CustomerCountOutputTypeCountInvoiceArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    Customer: number
    other_Employee: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | EmployeeCountOutputTypeCountCustomerArgs
    other_Employee?: boolean | EmployeeCountOutputTypeCountOther_EmployeeArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountOther_EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    Track: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | GenreCountOutputTypeCountTrackArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    InvoiceLine: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InvoiceLine?: boolean | InvoiceCountOutputTypeCountInvoiceLineArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountInvoiceLineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceLineWhereInput
  }


  /**
   * Count Type MediaTypeCountOutputType
   */

  export type MediaTypeCountOutputType = {
    Track: number
  }

  export type MediaTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | MediaTypeCountOutputTypeCountTrackArgs
  }

  // Custom InputTypes
  /**
   * MediaTypeCountOutputType without action
   */
  export type MediaTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTypeCountOutputType
     */
    select?: MediaTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaTypeCountOutputType without action
   */
  export type MediaTypeCountOutputTypeCountTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    PlaylistTrack: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PlaylistTrack?: boolean | PlaylistCountOutputTypeCountPlaylistTrackArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountPlaylistTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistTrackWhereInput
  }


  /**
   * Count Type TrackCountOutputType
   */

  export type TrackCountOutputType = {
    InvoiceLine: number
    PlaylistTrack: number
  }

  export type TrackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InvoiceLine?: boolean | TrackCountOutputTypeCountInvoiceLineArgs
    PlaylistTrack?: boolean | TrackCountOutputTypeCountPlaylistTrackArgs
  }

  // Custom InputTypes
  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackCountOutputType
     */
    select?: TrackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeCountInvoiceLineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceLineWhereInput
  }

  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeCountPlaylistTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistTrackWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    AlbumId: number | null
    ArtistId: number | null
  }

  export type AlbumSumAggregateOutputType = {
    AlbumId: number | null
    ArtistId: number | null
  }

  export type AlbumMinAggregateOutputType = {
    AlbumId: number | null
    Title: string | null
    ArtistId: number | null
  }

  export type AlbumMaxAggregateOutputType = {
    AlbumId: number | null
    Title: string | null
    ArtistId: number | null
  }

  export type AlbumCountAggregateOutputType = {
    AlbumId: number
    Title: number
    ArtistId: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    AlbumId?: true
    ArtistId?: true
  }

  export type AlbumSumAggregateInputType = {
    AlbumId?: true
    ArtistId?: true
  }

  export type AlbumMinAggregateInputType = {
    AlbumId?: true
    Title?: true
    ArtistId?: true
  }

  export type AlbumMaxAggregateInputType = {
    AlbumId?: true
    Title?: true
    ArtistId?: true
  }

  export type AlbumCountAggregateInputType = {
    AlbumId?: true
    Title?: true
    ArtistId?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    AlbumId: number
    Title: string
    ArtistId: number
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AlbumId?: boolean
    Title?: boolean
    ArtistId?: boolean
    Artist?: boolean | ArtistDefaultArgs<ExtArgs>
    Track?: boolean | Album$TrackArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AlbumId?: boolean
    Title?: boolean
    ArtistId?: boolean
    Artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AlbumId?: boolean
    Title?: boolean
    ArtistId?: boolean
    Artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    AlbumId?: boolean
    Title?: boolean
    ArtistId?: boolean
  }

  export type AlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"AlbumId" | "Title" | "ArtistId", ExtArgs["result"]["album"]>
  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Artist?: boolean | ArtistDefaultArgs<ExtArgs>
    Track?: boolean | Album$TrackArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }

  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      Artist: Prisma.$ArtistPayload<ExtArgs>
      Track: Prisma.$TrackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      AlbumId: number
      Title: string
      ArtistId: number
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `AlbumId`
     * const albumWithAlbumIdOnly = await prisma.album.findMany({ select: { AlbumId: true } })
     * 
     */
    findMany<T extends AlbumFindManyArgs>(args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends AlbumCreateArgs>(args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumCreateManyArgs>(args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {AlbumCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Albums and only return the `AlbumId`
     * const albumWithAlbumIdOnly = await prisma.album.createManyAndReturn({
     *   select: { AlbumId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends AlbumDeleteArgs>(args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumUpdateArgs>(args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumDeleteManyArgs>(args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumUpdateManyArgs>(args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums and returns the data updated in the database.
     * @param {AlbumUpdateManyAndReturnArgs} args - Arguments to update many Albums.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Albums and only return the `AlbumId`
     * const albumWithAlbumIdOnly = await prisma.album.updateManyAndReturn({
     *   select: { AlbumId: true },
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
    updateManyAndReturn<T extends AlbumUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
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
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Track<T extends Album$TrackArgs<ExtArgs> = {}>(args?: Subset<T, Album$TrackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Album model
   */
  interface AlbumFieldRefs {
    readonly AlbumId: FieldRef<"Album", 'Int'>
    readonly Title: FieldRef<"Album", 'String'>
    readonly ArtistId: FieldRef<"Album", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
  }

  /**
   * Album createManyAndReturn
   */
  export type AlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album updateManyAndReturn
   */
  export type AlbumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to delete.
     */
    limit?: number
  }

  /**
   * Album.Track
   */
  export type Album$TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }


  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    ArtistId: number | null
  }

  export type ArtistSumAggregateOutputType = {
    ArtistId: number | null
  }

  export type ArtistMinAggregateOutputType = {
    ArtistId: number | null
    Name: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    ArtistId: number | null
    Name: string | null
  }

  export type ArtistCountAggregateOutputType = {
    ArtistId: number
    Name: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    ArtistId?: true
  }

  export type ArtistSumAggregateInputType = {
    ArtistId?: true
  }

  export type ArtistMinAggregateInputType = {
    ArtistId?: true
    Name?: true
  }

  export type ArtistMaxAggregateInputType = {
    ArtistId?: true
    Name?: true
  }

  export type ArtistCountAggregateInputType = {
    ArtistId?: true
    Name?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    ArtistId: number
    Name: string | null
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ArtistId?: boolean
    Name?: boolean
    Album?: boolean | Artist$AlbumArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ArtistId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ArtistId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    ArtistId?: boolean
    Name?: boolean
  }

  export type ArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ArtistId" | "Name", ExtArgs["result"]["artist"]>
  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Album?: boolean | Artist$AlbumArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      Album: Prisma.$AlbumPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ArtistId: number
      Name: string | null
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `ArtistId`
     * const artistWithArtistIdOnly = await prisma.artist.findMany({ select: { ArtistId: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `ArtistId`
     * const artistWithArtistIdOnly = await prisma.artist.createManyAndReturn({
     *   select: { ArtistId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artists and only return the `ArtistId`
     * const artistWithArtistIdOnly = await prisma.artist.updateManyAndReturn({
     *   select: { ArtistId: true },
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
    updateManyAndReturn<T extends ArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
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
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Album<T extends Artist$AlbumArgs<ExtArgs> = {}>(args?: Subset<T, Artist$AlbumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly ArtistId: FieldRef<"Artist", 'Int'>
    readonly Name: FieldRef<"Artist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data?: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
  }

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist updateManyAndReturn
   */
  export type ArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artist.Album
   */
  export type Artist$AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    CustomerId: number | null
    SupportRepId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    CustomerId: number | null
    SupportRepId: number | null
  }

  export type CustomerMinAggregateOutputType = {
    CustomerId: number | null
    FirstName: string | null
    LastName: string | null
    Company: string | null
    Address: string | null
    City: string | null
    State: string | null
    Country: string | null
    PostalCode: string | null
    Phone: string | null
    Fax: string | null
    Email: string | null
    SupportRepId: number | null
  }

  export type CustomerMaxAggregateOutputType = {
    CustomerId: number | null
    FirstName: string | null
    LastName: string | null
    Company: string | null
    Address: string | null
    City: string | null
    State: string | null
    Country: string | null
    PostalCode: string | null
    Phone: string | null
    Fax: string | null
    Email: string | null
    SupportRepId: number | null
  }

  export type CustomerCountAggregateOutputType = {
    CustomerId: number
    FirstName: number
    LastName: number
    Company: number
    Address: number
    City: number
    State: number
    Country: number
    PostalCode: number
    Phone: number
    Fax: number
    Email: number
    SupportRepId: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    CustomerId?: true
    SupportRepId?: true
  }

  export type CustomerSumAggregateInputType = {
    CustomerId?: true
    SupportRepId?: true
  }

  export type CustomerMinAggregateInputType = {
    CustomerId?: true
    FirstName?: true
    LastName?: true
    Company?: true
    Address?: true
    City?: true
    State?: true
    Country?: true
    PostalCode?: true
    Phone?: true
    Fax?: true
    Email?: true
    SupportRepId?: true
  }

  export type CustomerMaxAggregateInputType = {
    CustomerId?: true
    FirstName?: true
    LastName?: true
    Company?: true
    Address?: true
    City?: true
    State?: true
    Country?: true
    PostalCode?: true
    Phone?: true
    Fax?: true
    Email?: true
    SupportRepId?: true
  }

  export type CustomerCountAggregateInputType = {
    CustomerId?: true
    FirstName?: true
    LastName?: true
    Company?: true
    Address?: true
    City?: true
    State?: true
    Country?: true
    PostalCode?: true
    Phone?: true
    Fax?: true
    Email?: true
    SupportRepId?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    CustomerId: number
    FirstName: string
    LastName: string
    Company: string | null
    Address: string | null
    City: string | null
    State: string | null
    Country: string | null
    PostalCode: string | null
    Phone: string | null
    Fax: string | null
    Email: string
    SupportRepId: number | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CustomerId?: boolean
    FirstName?: boolean
    LastName?: boolean
    Company?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    Country?: boolean
    PostalCode?: boolean
    Phone?: boolean
    Fax?: boolean
    Email?: boolean
    SupportRepId?: boolean
    Employee?: boolean | Customer$EmployeeArgs<ExtArgs>
    Invoice?: boolean | Customer$InvoiceArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CustomerId?: boolean
    FirstName?: boolean
    LastName?: boolean
    Company?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    Country?: boolean
    PostalCode?: boolean
    Phone?: boolean
    Fax?: boolean
    Email?: boolean
    SupportRepId?: boolean
    Employee?: boolean | Customer$EmployeeArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CustomerId?: boolean
    FirstName?: boolean
    LastName?: boolean
    Company?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    Country?: boolean
    PostalCode?: boolean
    Phone?: boolean
    Fax?: boolean
    Email?: boolean
    SupportRepId?: boolean
    Employee?: boolean | Customer$EmployeeArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    CustomerId?: boolean
    FirstName?: boolean
    LastName?: boolean
    Company?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    Country?: boolean
    PostalCode?: boolean
    Phone?: boolean
    Fax?: boolean
    Email?: boolean
    SupportRepId?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CustomerId" | "FirstName" | "LastName" | "Company" | "Address" | "City" | "State" | "Country" | "PostalCode" | "Phone" | "Fax" | "Email" | "SupportRepId", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | Customer$EmployeeArgs<ExtArgs>
    Invoice?: boolean | Customer$InvoiceArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | Customer$EmployeeArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | Customer$EmployeeArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      Employee: Prisma.$EmployeePayload<ExtArgs> | null
      Invoice: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CustomerId: number
      FirstName: string
      LastName: string
      Company: string | null
      Address: string | null
      City: string | null
      State: string | null
      Country: string | null
      PostalCode: string | null
      Phone: string | null
      Fax: string | null
      Email: string
      SupportRepId: number | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `CustomerId`
     * const customerWithCustomerIdOnly = await prisma.customer.findMany({ select: { CustomerId: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `CustomerId`
     * const customerWithCustomerIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { CustomerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `CustomerId`
     * const customerWithCustomerIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { CustomerId: true },
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Employee<T extends Customer$EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, Customer$EmployeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Invoice<T extends Customer$InvoiceArgs<ExtArgs> = {}>(args?: Subset<T, Customer$InvoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly CustomerId: FieldRef<"Customer", 'Int'>
    readonly FirstName: FieldRef<"Customer", 'String'>
    readonly LastName: FieldRef<"Customer", 'String'>
    readonly Company: FieldRef<"Customer", 'String'>
    readonly Address: FieldRef<"Customer", 'String'>
    readonly City: FieldRef<"Customer", 'String'>
    readonly State: FieldRef<"Customer", 'String'>
    readonly Country: FieldRef<"Customer", 'String'>
    readonly PostalCode: FieldRef<"Customer", 'String'>
    readonly Phone: FieldRef<"Customer", 'String'>
    readonly Fax: FieldRef<"Customer", 'String'>
    readonly Email: FieldRef<"Customer", 'String'>
    readonly SupportRepId: FieldRef<"Customer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.Employee
   */
  export type Customer$EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Customer.Invoice
   */
  export type Customer$InvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    EmployeeId: number | null
    ReportsTo: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    EmployeeId: number | null
    ReportsTo: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    EmployeeId: number | null
    LastName: string | null
    FirstName: string | null
    Title: string | null
    ReportsTo: number | null
    BirthDate: Date | null
    HireDate: Date | null
    Address: string | null
    City: string | null
    State: string | null
    Country: string | null
    PostalCode: string | null
    Phone: string | null
    Fax: string | null
    Email: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    EmployeeId: number | null
    LastName: string | null
    FirstName: string | null
    Title: string | null
    ReportsTo: number | null
    BirthDate: Date | null
    HireDate: Date | null
    Address: string | null
    City: string | null
    State: string | null
    Country: string | null
    PostalCode: string | null
    Phone: string | null
    Fax: string | null
    Email: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    EmployeeId: number
    LastName: number
    FirstName: number
    Title: number
    ReportsTo: number
    BirthDate: number
    HireDate: number
    Address: number
    City: number
    State: number
    Country: number
    PostalCode: number
    Phone: number
    Fax: number
    Email: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    EmployeeId?: true
    ReportsTo?: true
  }

  export type EmployeeSumAggregateInputType = {
    EmployeeId?: true
    ReportsTo?: true
  }

  export type EmployeeMinAggregateInputType = {
    EmployeeId?: true
    LastName?: true
    FirstName?: true
    Title?: true
    ReportsTo?: true
    BirthDate?: true
    HireDate?: true
    Address?: true
    City?: true
    State?: true
    Country?: true
    PostalCode?: true
    Phone?: true
    Fax?: true
    Email?: true
  }

  export type EmployeeMaxAggregateInputType = {
    EmployeeId?: true
    LastName?: true
    FirstName?: true
    Title?: true
    ReportsTo?: true
    BirthDate?: true
    HireDate?: true
    Address?: true
    City?: true
    State?: true
    Country?: true
    PostalCode?: true
    Phone?: true
    Fax?: true
    Email?: true
  }

  export type EmployeeCountAggregateInputType = {
    EmployeeId?: true
    LastName?: true
    FirstName?: true
    Title?: true
    ReportsTo?: true
    BirthDate?: true
    HireDate?: true
    Address?: true
    City?: true
    State?: true
    Country?: true
    PostalCode?: true
    Phone?: true
    Fax?: true
    Email?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    EmployeeId: number
    LastName: string
    FirstName: string
    Title: string | null
    ReportsTo: number | null
    BirthDate: Date | null
    HireDate: Date | null
    Address: string | null
    City: string | null
    State: string | null
    Country: string | null
    PostalCode: string | null
    Phone: string | null
    Fax: string | null
    Email: string | null
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EmployeeId?: boolean
    LastName?: boolean
    FirstName?: boolean
    Title?: boolean
    ReportsTo?: boolean
    BirthDate?: boolean
    HireDate?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    Country?: boolean
    PostalCode?: boolean
    Phone?: boolean
    Fax?: boolean
    Email?: boolean
    Customer?: boolean | Employee$CustomerArgs<ExtArgs>
    Employee?: boolean | Employee$EmployeeArgs<ExtArgs>
    other_Employee?: boolean | Employee$other_EmployeeArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EmployeeId?: boolean
    LastName?: boolean
    FirstName?: boolean
    Title?: boolean
    ReportsTo?: boolean
    BirthDate?: boolean
    HireDate?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    Country?: boolean
    PostalCode?: boolean
    Phone?: boolean
    Fax?: boolean
    Email?: boolean
    Employee?: boolean | Employee$EmployeeArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EmployeeId?: boolean
    LastName?: boolean
    FirstName?: boolean
    Title?: boolean
    ReportsTo?: boolean
    BirthDate?: boolean
    HireDate?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    Country?: boolean
    PostalCode?: boolean
    Phone?: boolean
    Fax?: boolean
    Email?: boolean
    Employee?: boolean | Employee$EmployeeArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    EmployeeId?: boolean
    LastName?: boolean
    FirstName?: boolean
    Title?: boolean
    ReportsTo?: boolean
    BirthDate?: boolean
    HireDate?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    Country?: boolean
    PostalCode?: boolean
    Phone?: boolean
    Fax?: boolean
    Email?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"EmployeeId" | "LastName" | "FirstName" | "Title" | "ReportsTo" | "BirthDate" | "HireDate" | "Address" | "City" | "State" | "Country" | "PostalCode" | "Phone" | "Fax" | "Email", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | Employee$CustomerArgs<ExtArgs>
    Employee?: boolean | Employee$EmployeeArgs<ExtArgs>
    other_Employee?: boolean | Employee$other_EmployeeArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | Employee$EmployeeArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | Employee$EmployeeArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      Customer: Prisma.$CustomerPayload<ExtArgs>[]
      Employee: Prisma.$EmployeePayload<ExtArgs> | null
      other_Employee: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      EmployeeId: number
      LastName: string
      FirstName: string
      Title: string | null
      ReportsTo: number | null
      BirthDate: Date | null
      HireDate: Date | null
      Address: string | null
      City: string | null
      State: string | null
      Country: string | null
      PostalCode: string | null
      Phone: string | null
      Fax: string | null
      Email: string | null
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `EmployeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.findMany({ select: { EmployeeId: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `EmployeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { EmployeeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `EmployeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { EmployeeId: true },
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Customer<T extends Employee$CustomerArgs<ExtArgs> = {}>(args?: Subset<T, Employee$CustomerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Employee<T extends Employee$EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, Employee$EmployeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_Employee<T extends Employee$other_EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, Employee$other_EmployeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly EmployeeId: FieldRef<"Employee", 'Int'>
    readonly LastName: FieldRef<"Employee", 'String'>
    readonly FirstName: FieldRef<"Employee", 'String'>
    readonly Title: FieldRef<"Employee", 'String'>
    readonly ReportsTo: FieldRef<"Employee", 'Int'>
    readonly BirthDate: FieldRef<"Employee", 'DateTime'>
    readonly HireDate: FieldRef<"Employee", 'DateTime'>
    readonly Address: FieldRef<"Employee", 'String'>
    readonly City: FieldRef<"Employee", 'String'>
    readonly State: FieldRef<"Employee", 'String'>
    readonly Country: FieldRef<"Employee", 'String'>
    readonly PostalCode: FieldRef<"Employee", 'String'>
    readonly Phone: FieldRef<"Employee", 'String'>
    readonly Fax: FieldRef<"Employee", 'String'>
    readonly Email: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.Customer
   */
  export type Employee$CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Employee.Employee
   */
  export type Employee$EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Employee.other_Employee
   */
  export type Employee$other_EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    GenreId: number | null
  }

  export type GenreSumAggregateOutputType = {
    GenreId: number | null
  }

  export type GenreMinAggregateOutputType = {
    GenreId: number | null
    Name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    GenreId: number | null
    Name: string | null
  }

  export type GenreCountAggregateOutputType = {
    GenreId: number
    Name: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    GenreId?: true
  }

  export type GenreSumAggregateInputType = {
    GenreId?: true
  }

  export type GenreMinAggregateInputType = {
    GenreId?: true
    Name?: true
  }

  export type GenreMaxAggregateInputType = {
    GenreId?: true
    Name?: true
  }

  export type GenreCountAggregateInputType = {
    GenreId?: true
    Name?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    GenreId: number
    Name: string | null
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    GenreId?: boolean
    Name?: boolean
    Track?: boolean | Genre$TrackArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    GenreId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    GenreId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    GenreId?: boolean
    Name?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"GenreId" | "Name", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | Genre$TrackArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      Track: Prisma.$TrackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      GenreId: number
      Name: string | null
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `GenreId`
     * const genreWithGenreIdOnly = await prisma.genre.findMany({ select: { GenreId: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `GenreId`
     * const genreWithGenreIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { GenreId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `GenreId`
     * const genreWithGenreIdOnly = await prisma.genre.updateManyAndReturn({
     *   select: { GenreId: true },
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
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
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
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Track<T extends Genre$TrackArgs<ExtArgs> = {}>(args?: Subset<T, Genre$TrackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly GenreId: FieldRef<"Genre", 'Int'>
    readonly Name: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data?: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.Track
   */
  export type Genre$TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    InvoiceId: number | null
    CustomerId: number | null
    Total: Decimal | null
  }

  export type InvoiceSumAggregateOutputType = {
    InvoiceId: number | null
    CustomerId: number | null
    Total: Decimal | null
  }

  export type InvoiceMinAggregateOutputType = {
    InvoiceId: number | null
    CustomerId: number | null
    InvoiceDate: Date | null
    BillingAddress: string | null
    BillingCity: string | null
    BillingState: string | null
    BillingCountry: string | null
    BillingPostalCode: string | null
    Total: Decimal | null
  }

  export type InvoiceMaxAggregateOutputType = {
    InvoiceId: number | null
    CustomerId: number | null
    InvoiceDate: Date | null
    BillingAddress: string | null
    BillingCity: string | null
    BillingState: string | null
    BillingCountry: string | null
    BillingPostalCode: string | null
    Total: Decimal | null
  }

  export type InvoiceCountAggregateOutputType = {
    InvoiceId: number
    CustomerId: number
    InvoiceDate: number
    BillingAddress: number
    BillingCity: number
    BillingState: number
    BillingCountry: number
    BillingPostalCode: number
    Total: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    InvoiceId?: true
    CustomerId?: true
    Total?: true
  }

  export type InvoiceSumAggregateInputType = {
    InvoiceId?: true
    CustomerId?: true
    Total?: true
  }

  export type InvoiceMinAggregateInputType = {
    InvoiceId?: true
    CustomerId?: true
    InvoiceDate?: true
    BillingAddress?: true
    BillingCity?: true
    BillingState?: true
    BillingCountry?: true
    BillingPostalCode?: true
    Total?: true
  }

  export type InvoiceMaxAggregateInputType = {
    InvoiceId?: true
    CustomerId?: true
    InvoiceDate?: true
    BillingAddress?: true
    BillingCity?: true
    BillingState?: true
    BillingCountry?: true
    BillingPostalCode?: true
    Total?: true
  }

  export type InvoiceCountAggregateInputType = {
    InvoiceId?: true
    CustomerId?: true
    InvoiceDate?: true
    BillingAddress?: true
    BillingCity?: true
    BillingState?: true
    BillingCountry?: true
    BillingPostalCode?: true
    Total?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    InvoiceId: number
    CustomerId: number
    InvoiceDate: Date
    BillingAddress: string | null
    BillingCity: string | null
    BillingState: string | null
    BillingCountry: string | null
    BillingPostalCode: string | null
    Total: Decimal
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InvoiceId?: boolean
    CustomerId?: boolean
    InvoiceDate?: boolean
    BillingAddress?: boolean
    BillingCity?: boolean
    BillingState?: boolean
    BillingCountry?: boolean
    BillingPostalCode?: boolean
    Total?: boolean
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
    InvoiceLine?: boolean | Invoice$InvoiceLineArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InvoiceId?: boolean
    CustomerId?: boolean
    InvoiceDate?: boolean
    BillingAddress?: boolean
    BillingCity?: boolean
    BillingState?: boolean
    BillingCountry?: boolean
    BillingPostalCode?: boolean
    Total?: boolean
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InvoiceId?: boolean
    CustomerId?: boolean
    InvoiceDate?: boolean
    BillingAddress?: boolean
    BillingCity?: boolean
    BillingState?: boolean
    BillingCountry?: boolean
    BillingPostalCode?: boolean
    Total?: boolean
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    InvoiceId?: boolean
    CustomerId?: boolean
    InvoiceDate?: boolean
    BillingAddress?: boolean
    BillingCity?: boolean
    BillingState?: boolean
    BillingCountry?: boolean
    BillingPostalCode?: boolean
    Total?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"InvoiceId" | "CustomerId" | "InvoiceDate" | "BillingAddress" | "BillingCity" | "BillingState" | "BillingCountry" | "BillingPostalCode" | "Total", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
    InvoiceLine?: boolean | Invoice$InvoiceLineArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      Customer: Prisma.$CustomerPayload<ExtArgs>
      InvoiceLine: Prisma.$InvoiceLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      InvoiceId: number
      CustomerId: number
      InvoiceDate: Date
      BillingAddress: string | null
      BillingCity: string | null
      BillingState: string | null
      BillingCountry: string | null
      BillingPostalCode: string | null
      Total: Prisma.Decimal
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `InvoiceId`
     * const invoiceWithInvoiceIdOnly = await prisma.invoice.findMany({ select: { InvoiceId: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `InvoiceId`
     * const invoiceWithInvoiceIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { InvoiceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `InvoiceId`
     * const invoiceWithInvoiceIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { InvoiceId: true },
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
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    InvoiceLine<T extends Invoice$InvoiceLineArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$InvoiceLineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly InvoiceId: FieldRef<"Invoice", 'Int'>
    readonly CustomerId: FieldRef<"Invoice", 'Int'>
    readonly InvoiceDate: FieldRef<"Invoice", 'DateTime'>
    readonly BillingAddress: FieldRef<"Invoice", 'String'>
    readonly BillingCity: FieldRef<"Invoice", 'String'>
    readonly BillingState: FieldRef<"Invoice", 'String'>
    readonly BillingCountry: FieldRef<"Invoice", 'String'>
    readonly BillingPostalCode: FieldRef<"Invoice", 'String'>
    readonly Total: FieldRef<"Invoice", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.InvoiceLine
   */
  export type Invoice$InvoiceLineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: InvoiceLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: InvoiceLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceLineInclude<ExtArgs> | null
    where?: InvoiceLineWhereInput
    orderBy?: InvoiceLineOrderByWithRelationInput | InvoiceLineOrderByWithRelationInput[]
    cursor?: InvoiceLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceLineScalarFieldEnum | InvoiceLineScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model InvoiceLine
   */

  export type AggregateInvoiceLine = {
    _count: InvoiceLineCountAggregateOutputType | null
    _avg: InvoiceLineAvgAggregateOutputType | null
    _sum: InvoiceLineSumAggregateOutputType | null
    _min: InvoiceLineMinAggregateOutputType | null
    _max: InvoiceLineMaxAggregateOutputType | null
  }

  export type InvoiceLineAvgAggregateOutputType = {
    InvoiceLineId: number | null
    InvoiceId: number | null
    TrackId: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
  }

  export type InvoiceLineSumAggregateOutputType = {
    InvoiceLineId: number | null
    InvoiceId: number | null
    TrackId: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
  }

  export type InvoiceLineMinAggregateOutputType = {
    InvoiceLineId: number | null
    InvoiceId: number | null
    TrackId: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
  }

  export type InvoiceLineMaxAggregateOutputType = {
    InvoiceLineId: number | null
    InvoiceId: number | null
    TrackId: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
  }

  export type InvoiceLineCountAggregateOutputType = {
    InvoiceLineId: number
    InvoiceId: number
    TrackId: number
    UnitPrice: number
    Quantity: number
    _all: number
  }


  export type InvoiceLineAvgAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
  }

  export type InvoiceLineSumAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
  }

  export type InvoiceLineMinAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
  }

  export type InvoiceLineMaxAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
  }

  export type InvoiceLineCountAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
    _all?: true
  }

  export type InvoiceLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceLine to aggregate.
     */
    where?: InvoiceLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceLines to fetch.
     */
    orderBy?: InvoiceLineOrderByWithRelationInput | InvoiceLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceLines
    **/
    _count?: true | InvoiceLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceLineMaxAggregateInputType
  }

  export type GetInvoiceLineAggregateType<T extends InvoiceLineAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceLine[P]>
      : GetScalarType<T[P], AggregateInvoiceLine[P]>
  }




  export type InvoiceLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceLineWhereInput
    orderBy?: InvoiceLineOrderByWithAggregationInput | InvoiceLineOrderByWithAggregationInput[]
    by: InvoiceLineScalarFieldEnum[] | InvoiceLineScalarFieldEnum
    having?: InvoiceLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceLineCountAggregateInputType | true
    _avg?: InvoiceLineAvgAggregateInputType
    _sum?: InvoiceLineSumAggregateInputType
    _min?: InvoiceLineMinAggregateInputType
    _max?: InvoiceLineMaxAggregateInputType
  }

  export type InvoiceLineGroupByOutputType = {
    InvoiceLineId: number
    InvoiceId: number
    TrackId: number
    UnitPrice: Decimal
    Quantity: number
    _count: InvoiceLineCountAggregateOutputType | null
    _avg: InvoiceLineAvgAggregateOutputType | null
    _sum: InvoiceLineSumAggregateOutputType | null
    _min: InvoiceLineMinAggregateOutputType | null
    _max: InvoiceLineMaxAggregateOutputType | null
  }

  type GetInvoiceLineGroupByPayload<T extends InvoiceLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceLineGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceLineGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InvoiceLineId?: boolean
    InvoiceId?: boolean
    TrackId?: boolean
    UnitPrice?: boolean
    Quantity?: boolean
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceLine"]>

  export type InvoiceLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InvoiceLineId?: boolean
    InvoiceId?: boolean
    TrackId?: boolean
    UnitPrice?: boolean
    Quantity?: boolean
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceLine"]>

  export type InvoiceLineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InvoiceLineId?: boolean
    InvoiceId?: boolean
    TrackId?: boolean
    UnitPrice?: boolean
    Quantity?: boolean
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceLine"]>

  export type InvoiceLineSelectScalar = {
    InvoiceLineId?: boolean
    InvoiceId?: boolean
    TrackId?: boolean
    UnitPrice?: boolean
    Quantity?: boolean
  }

  export type InvoiceLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"InvoiceLineId" | "InvoiceId" | "TrackId" | "UnitPrice" | "Quantity", ExtArgs["result"]["invoiceLine"]>
  export type InvoiceLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceLineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $InvoiceLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceLine"
    objects: {
      Track: Prisma.$TrackPayload<ExtArgs>
      Invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      InvoiceLineId: number
      InvoiceId: number
      TrackId: number
      UnitPrice: Prisma.Decimal
      Quantity: number
    }, ExtArgs["result"]["invoiceLine"]>
    composites: {}
  }

  type InvoiceLineGetPayload<S extends boolean | null | undefined | InvoiceLineDefaultArgs> = $Result.GetResult<Prisma.$InvoiceLinePayload, S>

  type InvoiceLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceLineCountAggregateInputType | true
    }

  export interface InvoiceLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceLine'], meta: { name: 'InvoiceLine' } }
    /**
     * Find zero or one InvoiceLine that matches the filter.
     * @param {InvoiceLineFindUniqueArgs} args - Arguments to find a InvoiceLine
     * @example
     * // Get one InvoiceLine
     * const invoiceLine = await prisma.invoiceLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceLineFindUniqueArgs>(args: SelectSubset<T, InvoiceLineFindUniqueArgs<ExtArgs>>): Prisma__InvoiceLineClient<$Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvoiceLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceLineFindUniqueOrThrowArgs} args - Arguments to find a InvoiceLine
     * @example
     * // Get one InvoiceLine
     * const invoiceLine = await prisma.invoiceLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceLineFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceLineClient<$Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceLineFindFirstArgs} args - Arguments to find a InvoiceLine
     * @example
     * // Get one InvoiceLine
     * const invoiceLine = await prisma.invoiceLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceLineFindFirstArgs>(args?: SelectSubset<T, InvoiceLineFindFirstArgs<ExtArgs>>): Prisma__InvoiceLineClient<$Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceLineFindFirstOrThrowArgs} args - Arguments to find a InvoiceLine
     * @example
     * // Get one InvoiceLine
     * const invoiceLine = await prisma.invoiceLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceLineFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceLineClient<$Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvoiceLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceLines
     * const invoiceLines = await prisma.invoiceLine.findMany()
     * 
     * // Get first 10 InvoiceLines
     * const invoiceLines = await prisma.invoiceLine.findMany({ take: 10 })
     * 
     * // Only select the `InvoiceLineId`
     * const invoiceLineWithInvoiceLineIdOnly = await prisma.invoiceLine.findMany({ select: { InvoiceLineId: true } })
     * 
     */
    findMany<T extends InvoiceLineFindManyArgs>(args?: SelectSubset<T, InvoiceLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvoiceLine.
     * @param {InvoiceLineCreateArgs} args - Arguments to create a InvoiceLine.
     * @example
     * // Create one InvoiceLine
     * const InvoiceLine = await prisma.invoiceLine.create({
     *   data: {
     *     // ... data to create a InvoiceLine
     *   }
     * })
     * 
     */
    create<T extends InvoiceLineCreateArgs>(args: SelectSubset<T, InvoiceLineCreateArgs<ExtArgs>>): Prisma__InvoiceLineClient<$Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvoiceLines.
     * @param {InvoiceLineCreateManyArgs} args - Arguments to create many InvoiceLines.
     * @example
     * // Create many InvoiceLines
     * const invoiceLine = await prisma.invoiceLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceLineCreateManyArgs>(args?: SelectSubset<T, InvoiceLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceLines and returns the data saved in the database.
     * @param {InvoiceLineCreateManyAndReturnArgs} args - Arguments to create many InvoiceLines.
     * @example
     * // Create many InvoiceLines
     * const invoiceLine = await prisma.invoiceLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceLines and only return the `InvoiceLineId`
     * const invoiceLineWithInvoiceLineIdOnly = await prisma.invoiceLine.createManyAndReturn({
     *   select: { InvoiceLineId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceLineCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvoiceLine.
     * @param {InvoiceLineDeleteArgs} args - Arguments to delete one InvoiceLine.
     * @example
     * // Delete one InvoiceLine
     * const InvoiceLine = await prisma.invoiceLine.delete({
     *   where: {
     *     // ... filter to delete one InvoiceLine
     *   }
     * })
     * 
     */
    delete<T extends InvoiceLineDeleteArgs>(args: SelectSubset<T, InvoiceLineDeleteArgs<ExtArgs>>): Prisma__InvoiceLineClient<$Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvoiceLine.
     * @param {InvoiceLineUpdateArgs} args - Arguments to update one InvoiceLine.
     * @example
     * // Update one InvoiceLine
     * const invoiceLine = await prisma.invoiceLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceLineUpdateArgs>(args: SelectSubset<T, InvoiceLineUpdateArgs<ExtArgs>>): Prisma__InvoiceLineClient<$Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvoiceLines.
     * @param {InvoiceLineDeleteManyArgs} args - Arguments to filter InvoiceLines to delete.
     * @example
     * // Delete a few InvoiceLines
     * const { count } = await prisma.invoiceLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceLineDeleteManyArgs>(args?: SelectSubset<T, InvoiceLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceLines
     * const invoiceLine = await prisma.invoiceLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceLineUpdateManyArgs>(args: SelectSubset<T, InvoiceLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceLines and returns the data updated in the database.
     * @param {InvoiceLineUpdateManyAndReturnArgs} args - Arguments to update many InvoiceLines.
     * @example
     * // Update many InvoiceLines
     * const invoiceLine = await prisma.invoiceLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvoiceLines and only return the `InvoiceLineId`
     * const invoiceLineWithInvoiceLineIdOnly = await prisma.invoiceLine.updateManyAndReturn({
     *   select: { InvoiceLineId: true },
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
    updateManyAndReturn<T extends InvoiceLineUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvoiceLine.
     * @param {InvoiceLineUpsertArgs} args - Arguments to update or create a InvoiceLine.
     * @example
     * // Update or create a InvoiceLine
     * const invoiceLine = await prisma.invoiceLine.upsert({
     *   create: {
     *     // ... data to create a InvoiceLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceLine we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceLineUpsertArgs>(args: SelectSubset<T, InvoiceLineUpsertArgs<ExtArgs>>): Prisma__InvoiceLineClient<$Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvoiceLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceLineCountArgs} args - Arguments to filter InvoiceLines to count.
     * @example
     * // Count the number of InvoiceLines
     * const count = await prisma.invoiceLine.count({
     *   where: {
     *     // ... the filter for the InvoiceLines we want to count
     *   }
     * })
    **/
    count<T extends InvoiceLineCountArgs>(
      args?: Subset<T, InvoiceLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceLineAggregateArgs>(args: Subset<T, InvoiceLineAggregateArgs>): Prisma.PrismaPromise<GetInvoiceLineAggregateType<T>>

    /**
     * Group by InvoiceLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceLineGroupByArgs} args - Group by arguments.
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
      T extends InvoiceLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceLineGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceLineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceLine model
   */
  readonly fields: InvoiceLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Track<T extends TrackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackDefaultArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InvoiceLine model
   */
  interface InvoiceLineFieldRefs {
    readonly InvoiceLineId: FieldRef<"InvoiceLine", 'Int'>
    readonly InvoiceId: FieldRef<"InvoiceLine", 'Int'>
    readonly TrackId: FieldRef<"InvoiceLine", 'Int'>
    readonly UnitPrice: FieldRef<"InvoiceLine", 'Decimal'>
    readonly Quantity: FieldRef<"InvoiceLine", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceLine findUnique
   */
  export type InvoiceLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: InvoiceLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: InvoiceLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceLineInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceLine to fetch.
     */
    where: InvoiceLineWhereUniqueInput
  }

  /**
   * InvoiceLine findUniqueOrThrow
   */
  export type InvoiceLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: InvoiceLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: InvoiceLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceLineInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceLine to fetch.
     */
    where: InvoiceLineWhereUniqueInput
  }

  /**
   * InvoiceLine findFirst
   */
  export type InvoiceLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: InvoiceLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: InvoiceLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceLineInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceLine to fetch.
     */
    where?: InvoiceLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceLines to fetch.
     */
    orderBy?: InvoiceLineOrderByWithRelationInput | InvoiceLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceLines.
     */
    cursor?: InvoiceLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceLines.
     */
    distinct?: InvoiceLineScalarFieldEnum | InvoiceLineScalarFieldEnum[]
  }

  /**
   * InvoiceLine findFirstOrThrow
   */
  export type InvoiceLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: InvoiceLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: InvoiceLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceLineInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceLine to fetch.
     */
    where?: InvoiceLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceLines to fetch.
     */
    orderBy?: InvoiceLineOrderByWithRelationInput | InvoiceLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceLines.
     */
    cursor?: InvoiceLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceLines.
     */
    distinct?: InvoiceLineScalarFieldEnum | InvoiceLineScalarFieldEnum[]
  }

  /**
   * InvoiceLine findMany
   */
  export type InvoiceLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: InvoiceLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: InvoiceLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceLineInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceLines to fetch.
     */
    where?: InvoiceLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceLines to fetch.
     */
    orderBy?: InvoiceLineOrderByWithRelationInput | InvoiceLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceLines.
     */
    cursor?: InvoiceLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceLines.
     */
    skip?: number
    distinct?: InvoiceLineScalarFieldEnum | InvoiceLineScalarFieldEnum[]
  }

  /**
   * InvoiceLine create
   */
  export type InvoiceLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: InvoiceLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: InvoiceLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceLineInclude<ExtArgs> | null
    /**
     * The data needed to create a InvoiceLine.
     */
    data: XOR<InvoiceLineCreateInput, InvoiceLineUncheckedCreateInput>
  }

  /**
   * InvoiceLine createMany
   */
  export type InvoiceLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceLines.
     */
    data: InvoiceLineCreateManyInput | InvoiceLineCreateManyInput[]
  }

  /**
   * InvoiceLine createManyAndReturn
   */
  export type InvoiceLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: InvoiceLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: InvoiceLineOmit<ExtArgs> | null
    /**
     * The data used to create many InvoiceLines.
     */
    data: InvoiceLineCreateManyInput | InvoiceLineCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceLine update
   */
  export type InvoiceLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: InvoiceLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: InvoiceLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceLineInclude<ExtArgs> | null
    /**
     * The data needed to update a InvoiceLine.
     */
    data: XOR<InvoiceLineUpdateInput, InvoiceLineUncheckedUpdateInput>
    /**
     * Choose, which InvoiceLine to update.
     */
    where: InvoiceLineWhereUniqueInput
  }

  /**
   * InvoiceLine updateMany
   */
  export type InvoiceLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceLines.
     */
    data: XOR<InvoiceLineUpdateManyMutationInput, InvoiceLineUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceLines to update
     */
    where?: InvoiceLineWhereInput
    /**
     * Limit how many InvoiceLines to update.
     */
    limit?: number
  }

  /**
   * InvoiceLine updateManyAndReturn
   */
  export type InvoiceLineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: InvoiceLineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: InvoiceLineOmit<ExtArgs> | null
    /**
     * The data used to update InvoiceLines.
     */
    data: XOR<InvoiceLineUpdateManyMutationInput, InvoiceLineUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceLines to update
     */
    where?: InvoiceLineWhereInput
    /**
     * Limit how many InvoiceLines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceLineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceLine upsert
   */
  export type InvoiceLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: InvoiceLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: InvoiceLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceLineInclude<ExtArgs> | null
    /**
     * The filter to search for the InvoiceLine to update in case it exists.
     */
    where: InvoiceLineWhereUniqueInput
    /**
     * In case the InvoiceLine found by the `where` argument doesn't exist, create a new InvoiceLine with this data.
     */
    create: XOR<InvoiceLineCreateInput, InvoiceLineUncheckedCreateInput>
    /**
     * In case the InvoiceLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceLineUpdateInput, InvoiceLineUncheckedUpdateInput>
  }

  /**
   * InvoiceLine delete
   */
  export type InvoiceLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: InvoiceLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: InvoiceLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceLineInclude<ExtArgs> | null
    /**
     * Filter which InvoiceLine to delete.
     */
    where: InvoiceLineWhereUniqueInput
  }

  /**
   * InvoiceLine deleteMany
   */
  export type InvoiceLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceLines to delete
     */
    where?: InvoiceLineWhereInput
    /**
     * Limit how many InvoiceLines to delete.
     */
    limit?: number
  }

  /**
   * InvoiceLine without action
   */
  export type InvoiceLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: InvoiceLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: InvoiceLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceLineInclude<ExtArgs> | null
  }


  /**
   * Model MediaType
   */

  export type AggregateMediaType = {
    _count: MediaTypeCountAggregateOutputType | null
    _avg: MediaTypeAvgAggregateOutputType | null
    _sum: MediaTypeSumAggregateOutputType | null
    _min: MediaTypeMinAggregateOutputType | null
    _max: MediaTypeMaxAggregateOutputType | null
  }

  export type MediaTypeAvgAggregateOutputType = {
    MediaTypeId: number | null
  }

  export type MediaTypeSumAggregateOutputType = {
    MediaTypeId: number | null
  }

  export type MediaTypeMinAggregateOutputType = {
    MediaTypeId: number | null
    Name: string | null
  }

  export type MediaTypeMaxAggregateOutputType = {
    MediaTypeId: number | null
    Name: string | null
  }

  export type MediaTypeCountAggregateOutputType = {
    MediaTypeId: number
    Name: number
    _all: number
  }


  export type MediaTypeAvgAggregateInputType = {
    MediaTypeId?: true
  }

  export type MediaTypeSumAggregateInputType = {
    MediaTypeId?: true
  }

  export type MediaTypeMinAggregateInputType = {
    MediaTypeId?: true
    Name?: true
  }

  export type MediaTypeMaxAggregateInputType = {
    MediaTypeId?: true
    Name?: true
  }

  export type MediaTypeCountAggregateInputType = {
    MediaTypeId?: true
    Name?: true
    _all?: true
  }

  export type MediaTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaType to aggregate.
     */
    where?: MediaTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaTypes to fetch.
     */
    orderBy?: MediaTypeOrderByWithRelationInput | MediaTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaTypes
    **/
    _count?: true | MediaTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaTypeMaxAggregateInputType
  }

  export type GetMediaTypeAggregateType<T extends MediaTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaType[P]>
      : GetScalarType<T[P], AggregateMediaType[P]>
  }




  export type MediaTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaTypeWhereInput
    orderBy?: MediaTypeOrderByWithAggregationInput | MediaTypeOrderByWithAggregationInput[]
    by: MediaTypeScalarFieldEnum[] | MediaTypeScalarFieldEnum
    having?: MediaTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaTypeCountAggregateInputType | true
    _avg?: MediaTypeAvgAggregateInputType
    _sum?: MediaTypeSumAggregateInputType
    _min?: MediaTypeMinAggregateInputType
    _max?: MediaTypeMaxAggregateInputType
  }

  export type MediaTypeGroupByOutputType = {
    MediaTypeId: number
    Name: string | null
    _count: MediaTypeCountAggregateOutputType | null
    _avg: MediaTypeAvgAggregateOutputType | null
    _sum: MediaTypeSumAggregateOutputType | null
    _min: MediaTypeMinAggregateOutputType | null
    _max: MediaTypeMaxAggregateOutputType | null
  }

  type GetMediaTypeGroupByPayload<T extends MediaTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaTypeGroupByOutputType[P]>
            : GetScalarType<T[P], MediaTypeGroupByOutputType[P]>
        }
      >
    >


  export type MediaTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MediaTypeId?: boolean
    Name?: boolean
    Track?: boolean | MediaType$TrackArgs<ExtArgs>
    _count?: boolean | MediaTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaType"]>

  export type MediaTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MediaTypeId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["mediaType"]>

  export type MediaTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MediaTypeId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["mediaType"]>

  export type MediaTypeSelectScalar = {
    MediaTypeId?: boolean
    Name?: boolean
  }

  export type MediaTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MediaTypeId" | "Name", ExtArgs["result"]["mediaType"]>
  export type MediaTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | MediaType$TrackArgs<ExtArgs>
    _count?: boolean | MediaTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MediaTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MediaTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MediaTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaType"
    objects: {
      Track: Prisma.$TrackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MediaTypeId: number
      Name: string | null
    }, ExtArgs["result"]["mediaType"]>
    composites: {}
  }

  type MediaTypeGetPayload<S extends boolean | null | undefined | MediaTypeDefaultArgs> = $Result.GetResult<Prisma.$MediaTypePayload, S>

  type MediaTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaTypeCountAggregateInputType | true
    }

  export interface MediaTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaType'], meta: { name: 'MediaType' } }
    /**
     * Find zero or one MediaType that matches the filter.
     * @param {MediaTypeFindUniqueArgs} args - Arguments to find a MediaType
     * @example
     * // Get one MediaType
     * const mediaType = await prisma.mediaType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaTypeFindUniqueArgs>(args: SelectSubset<T, MediaTypeFindUniqueArgs<ExtArgs>>): Prisma__MediaTypeClient<$Result.GetResult<Prisma.$MediaTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaTypeFindUniqueOrThrowArgs} args - Arguments to find a MediaType
     * @example
     * // Get one MediaType
     * const mediaType = await prisma.mediaType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaTypeClient<$Result.GetResult<Prisma.$MediaTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTypeFindFirstArgs} args - Arguments to find a MediaType
     * @example
     * // Get one MediaType
     * const mediaType = await prisma.mediaType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaTypeFindFirstArgs>(args?: SelectSubset<T, MediaTypeFindFirstArgs<ExtArgs>>): Prisma__MediaTypeClient<$Result.GetResult<Prisma.$MediaTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTypeFindFirstOrThrowArgs} args - Arguments to find a MediaType
     * @example
     * // Get one MediaType
     * const mediaType = await prisma.mediaType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaTypeClient<$Result.GetResult<Prisma.$MediaTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaTypes
     * const mediaTypes = await prisma.mediaType.findMany()
     * 
     * // Get first 10 MediaTypes
     * const mediaTypes = await prisma.mediaType.findMany({ take: 10 })
     * 
     * // Only select the `MediaTypeId`
     * const mediaTypeWithMediaTypeIdOnly = await prisma.mediaType.findMany({ select: { MediaTypeId: true } })
     * 
     */
    findMany<T extends MediaTypeFindManyArgs>(args?: SelectSubset<T, MediaTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaType.
     * @param {MediaTypeCreateArgs} args - Arguments to create a MediaType.
     * @example
     * // Create one MediaType
     * const MediaType = await prisma.mediaType.create({
     *   data: {
     *     // ... data to create a MediaType
     *   }
     * })
     * 
     */
    create<T extends MediaTypeCreateArgs>(args: SelectSubset<T, MediaTypeCreateArgs<ExtArgs>>): Prisma__MediaTypeClient<$Result.GetResult<Prisma.$MediaTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaTypes.
     * @param {MediaTypeCreateManyArgs} args - Arguments to create many MediaTypes.
     * @example
     * // Create many MediaTypes
     * const mediaType = await prisma.mediaType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaTypeCreateManyArgs>(args?: SelectSubset<T, MediaTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaTypes and returns the data saved in the database.
     * @param {MediaTypeCreateManyAndReturnArgs} args - Arguments to create many MediaTypes.
     * @example
     * // Create many MediaTypes
     * const mediaType = await prisma.mediaType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaTypes and only return the `MediaTypeId`
     * const mediaTypeWithMediaTypeIdOnly = await prisma.mediaType.createManyAndReturn({
     *   select: { MediaTypeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediaType.
     * @param {MediaTypeDeleteArgs} args - Arguments to delete one MediaType.
     * @example
     * // Delete one MediaType
     * const MediaType = await prisma.mediaType.delete({
     *   where: {
     *     // ... filter to delete one MediaType
     *   }
     * })
     * 
     */
    delete<T extends MediaTypeDeleteArgs>(args: SelectSubset<T, MediaTypeDeleteArgs<ExtArgs>>): Prisma__MediaTypeClient<$Result.GetResult<Prisma.$MediaTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaType.
     * @param {MediaTypeUpdateArgs} args - Arguments to update one MediaType.
     * @example
     * // Update one MediaType
     * const mediaType = await prisma.mediaType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaTypeUpdateArgs>(args: SelectSubset<T, MediaTypeUpdateArgs<ExtArgs>>): Prisma__MediaTypeClient<$Result.GetResult<Prisma.$MediaTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaTypes.
     * @param {MediaTypeDeleteManyArgs} args - Arguments to filter MediaTypes to delete.
     * @example
     * // Delete a few MediaTypes
     * const { count } = await prisma.mediaType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaTypeDeleteManyArgs>(args?: SelectSubset<T, MediaTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaTypes
     * const mediaType = await prisma.mediaType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaTypeUpdateManyArgs>(args: SelectSubset<T, MediaTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaTypes and returns the data updated in the database.
     * @param {MediaTypeUpdateManyAndReturnArgs} args - Arguments to update many MediaTypes.
     * @example
     * // Update many MediaTypes
     * const mediaType = await prisma.mediaType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaTypes and only return the `MediaTypeId`
     * const mediaTypeWithMediaTypeIdOnly = await prisma.mediaType.updateManyAndReturn({
     *   select: { MediaTypeId: true },
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
    updateManyAndReturn<T extends MediaTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediaType.
     * @param {MediaTypeUpsertArgs} args - Arguments to update or create a MediaType.
     * @example
     * // Update or create a MediaType
     * const mediaType = await prisma.mediaType.upsert({
     *   create: {
     *     // ... data to create a MediaType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaType we want to update
     *   }
     * })
     */
    upsert<T extends MediaTypeUpsertArgs>(args: SelectSubset<T, MediaTypeUpsertArgs<ExtArgs>>): Prisma__MediaTypeClient<$Result.GetResult<Prisma.$MediaTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTypeCountArgs} args - Arguments to filter MediaTypes to count.
     * @example
     * // Count the number of MediaTypes
     * const count = await prisma.mediaType.count({
     *   where: {
     *     // ... the filter for the MediaTypes we want to count
     *   }
     * })
    **/
    count<T extends MediaTypeCountArgs>(
      args?: Subset<T, MediaTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaTypeAggregateArgs>(args: Subset<T, MediaTypeAggregateArgs>): Prisma.PrismaPromise<GetMediaTypeAggregateType<T>>

    /**
     * Group by MediaType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTypeGroupByArgs} args - Group by arguments.
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
      T extends MediaTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaTypeGroupByArgs['orderBy'] }
        : { orderBy?: MediaTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaType model
   */
  readonly fields: MediaTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Track<T extends MediaType$TrackArgs<ExtArgs> = {}>(args?: Subset<T, MediaType$TrackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MediaType model
   */
  interface MediaTypeFieldRefs {
    readonly MediaTypeId: FieldRef<"MediaType", 'Int'>
    readonly Name: FieldRef<"MediaType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MediaType findUnique
   */
  export type MediaTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaType
     */
    select?: MediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaType
     */
    omit?: MediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTypeInclude<ExtArgs> | null
    /**
     * Filter, which MediaType to fetch.
     */
    where: MediaTypeWhereUniqueInput
  }

  /**
   * MediaType findUniqueOrThrow
   */
  export type MediaTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaType
     */
    select?: MediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaType
     */
    omit?: MediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTypeInclude<ExtArgs> | null
    /**
     * Filter, which MediaType to fetch.
     */
    where: MediaTypeWhereUniqueInput
  }

  /**
   * MediaType findFirst
   */
  export type MediaTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaType
     */
    select?: MediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaType
     */
    omit?: MediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTypeInclude<ExtArgs> | null
    /**
     * Filter, which MediaType to fetch.
     */
    where?: MediaTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaTypes to fetch.
     */
    orderBy?: MediaTypeOrderByWithRelationInput | MediaTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaTypes.
     */
    cursor?: MediaTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaTypes.
     */
    distinct?: MediaTypeScalarFieldEnum | MediaTypeScalarFieldEnum[]
  }

  /**
   * MediaType findFirstOrThrow
   */
  export type MediaTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaType
     */
    select?: MediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaType
     */
    omit?: MediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTypeInclude<ExtArgs> | null
    /**
     * Filter, which MediaType to fetch.
     */
    where?: MediaTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaTypes to fetch.
     */
    orderBy?: MediaTypeOrderByWithRelationInput | MediaTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaTypes.
     */
    cursor?: MediaTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaTypes.
     */
    distinct?: MediaTypeScalarFieldEnum | MediaTypeScalarFieldEnum[]
  }

  /**
   * MediaType findMany
   */
  export type MediaTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaType
     */
    select?: MediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaType
     */
    omit?: MediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTypeInclude<ExtArgs> | null
    /**
     * Filter, which MediaTypes to fetch.
     */
    where?: MediaTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaTypes to fetch.
     */
    orderBy?: MediaTypeOrderByWithRelationInput | MediaTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaTypes.
     */
    cursor?: MediaTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaTypes.
     */
    skip?: number
    distinct?: MediaTypeScalarFieldEnum | MediaTypeScalarFieldEnum[]
  }

  /**
   * MediaType create
   */
  export type MediaTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaType
     */
    select?: MediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaType
     */
    omit?: MediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaType.
     */
    data?: XOR<MediaTypeCreateInput, MediaTypeUncheckedCreateInput>
  }

  /**
   * MediaType createMany
   */
  export type MediaTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaTypes.
     */
    data: MediaTypeCreateManyInput | MediaTypeCreateManyInput[]
  }

  /**
   * MediaType createManyAndReturn
   */
  export type MediaTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaType
     */
    select?: MediaTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaType
     */
    omit?: MediaTypeOmit<ExtArgs> | null
    /**
     * The data used to create many MediaTypes.
     */
    data: MediaTypeCreateManyInput | MediaTypeCreateManyInput[]
  }

  /**
   * MediaType update
   */
  export type MediaTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaType
     */
    select?: MediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaType
     */
    omit?: MediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaType.
     */
    data: XOR<MediaTypeUpdateInput, MediaTypeUncheckedUpdateInput>
    /**
     * Choose, which MediaType to update.
     */
    where: MediaTypeWhereUniqueInput
  }

  /**
   * MediaType updateMany
   */
  export type MediaTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaTypes.
     */
    data: XOR<MediaTypeUpdateManyMutationInput, MediaTypeUncheckedUpdateManyInput>
    /**
     * Filter which MediaTypes to update
     */
    where?: MediaTypeWhereInput
    /**
     * Limit how many MediaTypes to update.
     */
    limit?: number
  }

  /**
   * MediaType updateManyAndReturn
   */
  export type MediaTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaType
     */
    select?: MediaTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaType
     */
    omit?: MediaTypeOmit<ExtArgs> | null
    /**
     * The data used to update MediaTypes.
     */
    data: XOR<MediaTypeUpdateManyMutationInput, MediaTypeUncheckedUpdateManyInput>
    /**
     * Filter which MediaTypes to update
     */
    where?: MediaTypeWhereInput
    /**
     * Limit how many MediaTypes to update.
     */
    limit?: number
  }

  /**
   * MediaType upsert
   */
  export type MediaTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaType
     */
    select?: MediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaType
     */
    omit?: MediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaType to update in case it exists.
     */
    where: MediaTypeWhereUniqueInput
    /**
     * In case the MediaType found by the `where` argument doesn't exist, create a new MediaType with this data.
     */
    create: XOR<MediaTypeCreateInput, MediaTypeUncheckedCreateInput>
    /**
     * In case the MediaType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaTypeUpdateInput, MediaTypeUncheckedUpdateInput>
  }

  /**
   * MediaType delete
   */
  export type MediaTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaType
     */
    select?: MediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaType
     */
    omit?: MediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTypeInclude<ExtArgs> | null
    /**
     * Filter which MediaType to delete.
     */
    where: MediaTypeWhereUniqueInput
  }

  /**
   * MediaType deleteMany
   */
  export type MediaTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaTypes to delete
     */
    where?: MediaTypeWhereInput
    /**
     * Limit how many MediaTypes to delete.
     */
    limit?: number
  }

  /**
   * MediaType.Track
   */
  export type MediaType$TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * MediaType without action
   */
  export type MediaTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaType
     */
    select?: MediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaType
     */
    omit?: MediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaTypeInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistAvgAggregateOutputType = {
    PlaylistId: number | null
  }

  export type PlaylistSumAggregateOutputType = {
    PlaylistId: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    PlaylistId: number | null
    Name: string | null
  }

  export type PlaylistMaxAggregateOutputType = {
    PlaylistId: number | null
    Name: string | null
  }

  export type PlaylistCountAggregateOutputType = {
    PlaylistId: number
    Name: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    PlaylistId?: true
  }

  export type PlaylistSumAggregateInputType = {
    PlaylistId?: true
  }

  export type PlaylistMinAggregateInputType = {
    PlaylistId?: true
    Name?: true
  }

  export type PlaylistMaxAggregateInputType = {
    PlaylistId?: true
    Name?: true
  }

  export type PlaylistCountAggregateInputType = {
    PlaylistId?: true
    Name?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _avg?: PlaylistAvgAggregateInputType
    _sum?: PlaylistSumAggregateInputType
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    PlaylistId: number
    Name: string | null
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PlaylistId?: boolean
    Name?: boolean
    PlaylistTrack?: boolean | Playlist$PlaylistTrackArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PlaylistId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PlaylistId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    PlaylistId?: boolean
    Name?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PlaylistId" | "Name", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PlaylistTrack?: boolean | Playlist$PlaylistTrackArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      PlaylistTrack: Prisma.$PlaylistTrackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      PlaylistId: number
      Name: string | null
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `PlaylistId`
     * const playlistWithPlaylistIdOnly = await prisma.playlist.findMany({ select: { PlaylistId: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `PlaylistId`
     * const playlistWithPlaylistIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { PlaylistId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `PlaylistId`
     * const playlistWithPlaylistIdOnly = await prisma.playlist.updateManyAndReturn({
     *   select: { PlaylistId: true },
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
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
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
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PlaylistTrack<T extends Playlist$PlaylistTrackArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$PlaylistTrackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly PlaylistId: FieldRef<"Playlist", 'Int'>
    readonly Name: FieldRef<"Playlist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data?: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.PlaylistTrack
   */
  export type Playlist$PlaylistTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    where?: PlaylistTrackWhereInput
    orderBy?: PlaylistTrackOrderByWithRelationInput | PlaylistTrackOrderByWithRelationInput[]
    cursor?: PlaylistTrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistTrackScalarFieldEnum | PlaylistTrackScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model PlaylistTrack
   */

  export type AggregatePlaylistTrack = {
    _count: PlaylistTrackCountAggregateOutputType | null
    _avg: PlaylistTrackAvgAggregateOutputType | null
    _sum: PlaylistTrackSumAggregateOutputType | null
    _min: PlaylistTrackMinAggregateOutputType | null
    _max: PlaylistTrackMaxAggregateOutputType | null
  }

  export type PlaylistTrackAvgAggregateOutputType = {
    PlaylistId: number | null
    TrackId: number | null
  }

  export type PlaylistTrackSumAggregateOutputType = {
    PlaylistId: number | null
    TrackId: number | null
  }

  export type PlaylistTrackMinAggregateOutputType = {
    PlaylistId: number | null
    TrackId: number | null
  }

  export type PlaylistTrackMaxAggregateOutputType = {
    PlaylistId: number | null
    TrackId: number | null
  }

  export type PlaylistTrackCountAggregateOutputType = {
    PlaylistId: number
    TrackId: number
    _all: number
  }


  export type PlaylistTrackAvgAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
  }

  export type PlaylistTrackSumAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
  }

  export type PlaylistTrackMinAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
  }

  export type PlaylistTrackMaxAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
  }

  export type PlaylistTrackCountAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
    _all?: true
  }

  export type PlaylistTrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistTrack to aggregate.
     */
    where?: PlaylistTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTracks to fetch.
     */
    orderBy?: PlaylistTrackOrderByWithRelationInput | PlaylistTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaylistTracks
    **/
    _count?: true | PlaylistTrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistTrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistTrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistTrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistTrackMaxAggregateInputType
  }

  export type GetPlaylistTrackAggregateType<T extends PlaylistTrackAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylistTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylistTrack[P]>
      : GetScalarType<T[P], AggregatePlaylistTrack[P]>
  }




  export type PlaylistTrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistTrackWhereInput
    orderBy?: PlaylistTrackOrderByWithAggregationInput | PlaylistTrackOrderByWithAggregationInput[]
    by: PlaylistTrackScalarFieldEnum[] | PlaylistTrackScalarFieldEnum
    having?: PlaylistTrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistTrackCountAggregateInputType | true
    _avg?: PlaylistTrackAvgAggregateInputType
    _sum?: PlaylistTrackSumAggregateInputType
    _min?: PlaylistTrackMinAggregateInputType
    _max?: PlaylistTrackMaxAggregateInputType
  }

  export type PlaylistTrackGroupByOutputType = {
    PlaylistId: number
    TrackId: number
    _count: PlaylistTrackCountAggregateOutputType | null
    _avg: PlaylistTrackAvgAggregateOutputType | null
    _sum: PlaylistTrackSumAggregateOutputType | null
    _min: PlaylistTrackMinAggregateOutputType | null
    _max: PlaylistTrackMaxAggregateOutputType | null
  }

  type GetPlaylistTrackGroupByPayload<T extends PlaylistTrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistTrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistTrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistTrackGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistTrackGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistTrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PlaylistId?: boolean
    TrackId?: boolean
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistTrack"]>

  export type PlaylistTrackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PlaylistId?: boolean
    TrackId?: boolean
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistTrack"]>

  export type PlaylistTrackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PlaylistId?: boolean
    TrackId?: boolean
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistTrack"]>

  export type PlaylistTrackSelectScalar = {
    PlaylistId?: boolean
    TrackId?: boolean
  }

  export type PlaylistTrackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PlaylistId" | "TrackId", ExtArgs["result"]["playlistTrack"]>
  export type PlaylistTrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }
  export type PlaylistTrackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }
  export type PlaylistTrackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }

  export type $PlaylistTrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaylistTrack"
    objects: {
      Track: Prisma.$TrackPayload<ExtArgs>
      Playlist: Prisma.$PlaylistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      PlaylistId: number
      TrackId: number
    }, ExtArgs["result"]["playlistTrack"]>
    composites: {}
  }

  type PlaylistTrackGetPayload<S extends boolean | null | undefined | PlaylistTrackDefaultArgs> = $Result.GetResult<Prisma.$PlaylistTrackPayload, S>

  type PlaylistTrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistTrackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistTrackCountAggregateInputType | true
    }

  export interface PlaylistTrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaylistTrack'], meta: { name: 'PlaylistTrack' } }
    /**
     * Find zero or one PlaylistTrack that matches the filter.
     * @param {PlaylistTrackFindUniqueArgs} args - Arguments to find a PlaylistTrack
     * @example
     * // Get one PlaylistTrack
     * const playlistTrack = await prisma.playlistTrack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistTrackFindUniqueArgs>(args: SelectSubset<T, PlaylistTrackFindUniqueArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlaylistTrack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistTrackFindUniqueOrThrowArgs} args - Arguments to find a PlaylistTrack
     * @example
     * // Get one PlaylistTrack
     * const playlistTrack = await prisma.playlistTrack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistTrackFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistTrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistTrack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTrackFindFirstArgs} args - Arguments to find a PlaylistTrack
     * @example
     * // Get one PlaylistTrack
     * const playlistTrack = await prisma.playlistTrack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistTrackFindFirstArgs>(args?: SelectSubset<T, PlaylistTrackFindFirstArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistTrack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTrackFindFirstOrThrowArgs} args - Arguments to find a PlaylistTrack
     * @example
     * // Get one PlaylistTrack
     * const playlistTrack = await prisma.playlistTrack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistTrackFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistTrackFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlaylistTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaylistTracks
     * const playlistTracks = await prisma.playlistTrack.findMany()
     * 
     * // Get first 10 PlaylistTracks
     * const playlistTracks = await prisma.playlistTrack.findMany({ take: 10 })
     * 
     * // Only select the `PlaylistId`
     * const playlistTrackWithPlaylistIdOnly = await prisma.playlistTrack.findMany({ select: { PlaylistId: true } })
     * 
     */
    findMany<T extends PlaylistTrackFindManyArgs>(args?: SelectSubset<T, PlaylistTrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlaylistTrack.
     * @param {PlaylistTrackCreateArgs} args - Arguments to create a PlaylistTrack.
     * @example
     * // Create one PlaylistTrack
     * const PlaylistTrack = await prisma.playlistTrack.create({
     *   data: {
     *     // ... data to create a PlaylistTrack
     *   }
     * })
     * 
     */
    create<T extends PlaylistTrackCreateArgs>(args: SelectSubset<T, PlaylistTrackCreateArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlaylistTracks.
     * @param {PlaylistTrackCreateManyArgs} args - Arguments to create many PlaylistTracks.
     * @example
     * // Create many PlaylistTracks
     * const playlistTrack = await prisma.playlistTrack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistTrackCreateManyArgs>(args?: SelectSubset<T, PlaylistTrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaylistTracks and returns the data saved in the database.
     * @param {PlaylistTrackCreateManyAndReturnArgs} args - Arguments to create many PlaylistTracks.
     * @example
     * // Create many PlaylistTracks
     * const playlistTrack = await prisma.playlistTrack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaylistTracks and only return the `PlaylistId`
     * const playlistTrackWithPlaylistIdOnly = await prisma.playlistTrack.createManyAndReturn({
     *   select: { PlaylistId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistTrackCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistTrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlaylistTrack.
     * @param {PlaylistTrackDeleteArgs} args - Arguments to delete one PlaylistTrack.
     * @example
     * // Delete one PlaylistTrack
     * const PlaylistTrack = await prisma.playlistTrack.delete({
     *   where: {
     *     // ... filter to delete one PlaylistTrack
     *   }
     * })
     * 
     */
    delete<T extends PlaylistTrackDeleteArgs>(args: SelectSubset<T, PlaylistTrackDeleteArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlaylistTrack.
     * @param {PlaylistTrackUpdateArgs} args - Arguments to update one PlaylistTrack.
     * @example
     * // Update one PlaylistTrack
     * const playlistTrack = await prisma.playlistTrack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistTrackUpdateArgs>(args: SelectSubset<T, PlaylistTrackUpdateArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlaylistTracks.
     * @param {PlaylistTrackDeleteManyArgs} args - Arguments to filter PlaylistTracks to delete.
     * @example
     * // Delete a few PlaylistTracks
     * const { count } = await prisma.playlistTrack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistTrackDeleteManyArgs>(args?: SelectSubset<T, PlaylistTrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaylistTracks
     * const playlistTrack = await prisma.playlistTrack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistTrackUpdateManyArgs>(args: SelectSubset<T, PlaylistTrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistTracks and returns the data updated in the database.
     * @param {PlaylistTrackUpdateManyAndReturnArgs} args - Arguments to update many PlaylistTracks.
     * @example
     * // Update many PlaylistTracks
     * const playlistTrack = await prisma.playlistTrack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlaylistTracks and only return the `PlaylistId`
     * const playlistTrackWithPlaylistIdOnly = await prisma.playlistTrack.updateManyAndReturn({
     *   select: { PlaylistId: true },
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
    updateManyAndReturn<T extends PlaylistTrackUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistTrackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlaylistTrack.
     * @param {PlaylistTrackUpsertArgs} args - Arguments to update or create a PlaylistTrack.
     * @example
     * // Update or create a PlaylistTrack
     * const playlistTrack = await prisma.playlistTrack.upsert({
     *   create: {
     *     // ... data to create a PlaylistTrack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaylistTrack we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistTrackUpsertArgs>(args: SelectSubset<T, PlaylistTrackUpsertArgs<ExtArgs>>): Prisma__PlaylistTrackClient<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlaylistTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTrackCountArgs} args - Arguments to filter PlaylistTracks to count.
     * @example
     * // Count the number of PlaylistTracks
     * const count = await prisma.playlistTrack.count({
     *   where: {
     *     // ... the filter for the PlaylistTracks we want to count
     *   }
     * })
    **/
    count<T extends PlaylistTrackCountArgs>(
      args?: Subset<T, PlaylistTrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistTrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaylistTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistTrackAggregateArgs>(args: Subset<T, PlaylistTrackAggregateArgs>): Prisma.PrismaPromise<GetPlaylistTrackAggregateType<T>>

    /**
     * Group by PlaylistTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTrackGroupByArgs} args - Group by arguments.
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
      T extends PlaylistTrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistTrackGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistTrackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaylistTrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaylistTrack model
   */
  readonly fields: PlaylistTrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaylistTrack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistTrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Track<T extends TrackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackDefaultArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlaylistTrack model
   */
  interface PlaylistTrackFieldRefs {
    readonly PlaylistId: FieldRef<"PlaylistTrack", 'Int'>
    readonly TrackId: FieldRef<"PlaylistTrack", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlaylistTrack findUnique
   */
  export type PlaylistTrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTrack to fetch.
     */
    where: PlaylistTrackWhereUniqueInput
  }

  /**
   * PlaylistTrack findUniqueOrThrow
   */
  export type PlaylistTrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTrack to fetch.
     */
    where: PlaylistTrackWhereUniqueInput
  }

  /**
   * PlaylistTrack findFirst
   */
  export type PlaylistTrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTrack to fetch.
     */
    where?: PlaylistTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTracks to fetch.
     */
    orderBy?: PlaylistTrackOrderByWithRelationInput | PlaylistTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistTracks.
     */
    cursor?: PlaylistTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistTracks.
     */
    distinct?: PlaylistTrackScalarFieldEnum | PlaylistTrackScalarFieldEnum[]
  }

  /**
   * PlaylistTrack findFirstOrThrow
   */
  export type PlaylistTrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTrack to fetch.
     */
    where?: PlaylistTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTracks to fetch.
     */
    orderBy?: PlaylistTrackOrderByWithRelationInput | PlaylistTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistTracks.
     */
    cursor?: PlaylistTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistTracks.
     */
    distinct?: PlaylistTrackScalarFieldEnum | PlaylistTrackScalarFieldEnum[]
  }

  /**
   * PlaylistTrack findMany
   */
  export type PlaylistTrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTracks to fetch.
     */
    where?: PlaylistTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTracks to fetch.
     */
    orderBy?: PlaylistTrackOrderByWithRelationInput | PlaylistTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaylistTracks.
     */
    cursor?: PlaylistTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTracks.
     */
    skip?: number
    distinct?: PlaylistTrackScalarFieldEnum | PlaylistTrackScalarFieldEnum[]
  }

  /**
   * PlaylistTrack create
   */
  export type PlaylistTrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaylistTrack.
     */
    data: XOR<PlaylistTrackCreateInput, PlaylistTrackUncheckedCreateInput>
  }

  /**
   * PlaylistTrack createMany
   */
  export type PlaylistTrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaylistTracks.
     */
    data: PlaylistTrackCreateManyInput | PlaylistTrackCreateManyInput[]
  }

  /**
   * PlaylistTrack createManyAndReturn
   */
  export type PlaylistTrackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * The data used to create many PlaylistTracks.
     */
    data: PlaylistTrackCreateManyInput | PlaylistTrackCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistTrack update
   */
  export type PlaylistTrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaylistTrack.
     */
    data: XOR<PlaylistTrackUpdateInput, PlaylistTrackUncheckedUpdateInput>
    /**
     * Choose, which PlaylistTrack to update.
     */
    where: PlaylistTrackWhereUniqueInput
  }

  /**
   * PlaylistTrack updateMany
   */
  export type PlaylistTrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaylistTracks.
     */
    data: XOR<PlaylistTrackUpdateManyMutationInput, PlaylistTrackUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistTracks to update
     */
    where?: PlaylistTrackWhereInput
    /**
     * Limit how many PlaylistTracks to update.
     */
    limit?: number
  }

  /**
   * PlaylistTrack updateManyAndReturn
   */
  export type PlaylistTrackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * The data used to update PlaylistTracks.
     */
    data: XOR<PlaylistTrackUpdateManyMutationInput, PlaylistTrackUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistTracks to update
     */
    where?: PlaylistTrackWhereInput
    /**
     * Limit how many PlaylistTracks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistTrack upsert
   */
  export type PlaylistTrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaylistTrack to update in case it exists.
     */
    where: PlaylistTrackWhereUniqueInput
    /**
     * In case the PlaylistTrack found by the `where` argument doesn't exist, create a new PlaylistTrack with this data.
     */
    create: XOR<PlaylistTrackCreateInput, PlaylistTrackUncheckedCreateInput>
    /**
     * In case the PlaylistTrack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistTrackUpdateInput, PlaylistTrackUncheckedUpdateInput>
  }

  /**
   * PlaylistTrack delete
   */
  export type PlaylistTrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    /**
     * Filter which PlaylistTrack to delete.
     */
    where: PlaylistTrackWhereUniqueInput
  }

  /**
   * PlaylistTrack deleteMany
   */
  export type PlaylistTrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistTracks to delete
     */
    where?: PlaylistTrackWhereInput
    /**
     * Limit how many PlaylistTracks to delete.
     */
    limit?: number
  }

  /**
   * PlaylistTrack without action
   */
  export type PlaylistTrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
  }


  /**
   * Model Track
   */

  export type AggregateTrack = {
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  export type TrackAvgAggregateOutputType = {
    TrackId: number | null
    AlbumId: number | null
    MediaTypeId: number | null
    GenreId: number | null
    Milliseconds: number | null
    Bytes: number | null
    UnitPrice: Decimal | null
  }

  export type TrackSumAggregateOutputType = {
    TrackId: number | null
    AlbumId: number | null
    MediaTypeId: number | null
    GenreId: number | null
    Milliseconds: number | null
    Bytes: number | null
    UnitPrice: Decimal | null
  }

  export type TrackMinAggregateOutputType = {
    TrackId: number | null
    Name: string | null
    AlbumId: number | null
    MediaTypeId: number | null
    GenreId: number | null
    Composer: string | null
    Milliseconds: number | null
    Bytes: number | null
    UnitPrice: Decimal | null
  }

  export type TrackMaxAggregateOutputType = {
    TrackId: number | null
    Name: string | null
    AlbumId: number | null
    MediaTypeId: number | null
    GenreId: number | null
    Composer: string | null
    Milliseconds: number | null
    Bytes: number | null
    UnitPrice: Decimal | null
  }

  export type TrackCountAggregateOutputType = {
    TrackId: number
    Name: number
    AlbumId: number
    MediaTypeId: number
    GenreId: number
    Composer: number
    Milliseconds: number
    Bytes: number
    UnitPrice: number
    _all: number
  }


  export type TrackAvgAggregateInputType = {
    TrackId?: true
    AlbumId?: true
    MediaTypeId?: true
    GenreId?: true
    Milliseconds?: true
    Bytes?: true
    UnitPrice?: true
  }

  export type TrackSumAggregateInputType = {
    TrackId?: true
    AlbumId?: true
    MediaTypeId?: true
    GenreId?: true
    Milliseconds?: true
    Bytes?: true
    UnitPrice?: true
  }

  export type TrackMinAggregateInputType = {
    TrackId?: true
    Name?: true
    AlbumId?: true
    MediaTypeId?: true
    GenreId?: true
    Composer?: true
    Milliseconds?: true
    Bytes?: true
    UnitPrice?: true
  }

  export type TrackMaxAggregateInputType = {
    TrackId?: true
    Name?: true
    AlbumId?: true
    MediaTypeId?: true
    GenreId?: true
    Composer?: true
    Milliseconds?: true
    Bytes?: true
    UnitPrice?: true
  }

  export type TrackCountAggregateInputType = {
    TrackId?: true
    Name?: true
    AlbumId?: true
    MediaTypeId?: true
    GenreId?: true
    Composer?: true
    Milliseconds?: true
    Bytes?: true
    UnitPrice?: true
    _all?: true
  }

  export type TrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Track to aggregate.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackMaxAggregateInputType
  }

  export type GetTrackAggregateType<T extends TrackAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack[P]>
      : GetScalarType<T[P], AggregateTrack[P]>
  }




  export type TrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithAggregationInput | TrackOrderByWithAggregationInput[]
    by: TrackScalarFieldEnum[] | TrackScalarFieldEnum
    having?: TrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackCountAggregateInputType | true
    _avg?: TrackAvgAggregateInputType
    _sum?: TrackSumAggregateInputType
    _min?: TrackMinAggregateInputType
    _max?: TrackMaxAggregateInputType
  }

  export type TrackGroupByOutputType = {
    TrackId: number
    Name: string
    AlbumId: number | null
    MediaTypeId: number
    GenreId: number | null
    Composer: string | null
    Milliseconds: number
    Bytes: number | null
    UnitPrice: Decimal
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  type GetTrackGroupByPayload<T extends TrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackGroupByOutputType[P]>
            : GetScalarType<T[P], TrackGroupByOutputType[P]>
        }
      >
    >


  export type TrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TrackId?: boolean
    Name?: boolean
    AlbumId?: boolean
    MediaTypeId?: boolean
    GenreId?: boolean
    Composer?: boolean
    Milliseconds?: boolean
    Bytes?: boolean
    UnitPrice?: boolean
    InvoiceLine?: boolean | Track$InvoiceLineArgs<ExtArgs>
    PlaylistTrack?: boolean | Track$PlaylistTrackArgs<ExtArgs>
    MediaType?: boolean | MediaTypeDefaultArgs<ExtArgs>
    Genre?: boolean | Track$GenreArgs<ExtArgs>
    Album?: boolean | Track$AlbumArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TrackId?: boolean
    Name?: boolean
    AlbumId?: boolean
    MediaTypeId?: boolean
    GenreId?: boolean
    Composer?: boolean
    Milliseconds?: boolean
    Bytes?: boolean
    UnitPrice?: boolean
    MediaType?: boolean | MediaTypeDefaultArgs<ExtArgs>
    Genre?: boolean | Track$GenreArgs<ExtArgs>
    Album?: boolean | Track$AlbumArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TrackId?: boolean
    Name?: boolean
    AlbumId?: boolean
    MediaTypeId?: boolean
    GenreId?: boolean
    Composer?: boolean
    Milliseconds?: boolean
    Bytes?: boolean
    UnitPrice?: boolean
    MediaType?: boolean | MediaTypeDefaultArgs<ExtArgs>
    Genre?: boolean | Track$GenreArgs<ExtArgs>
    Album?: boolean | Track$AlbumArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectScalar = {
    TrackId?: boolean
    Name?: boolean
    AlbumId?: boolean
    MediaTypeId?: boolean
    GenreId?: boolean
    Composer?: boolean
    Milliseconds?: boolean
    Bytes?: boolean
    UnitPrice?: boolean
  }

  export type TrackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"TrackId" | "Name" | "AlbumId" | "MediaTypeId" | "GenreId" | "Composer" | "Milliseconds" | "Bytes" | "UnitPrice", ExtArgs["result"]["track"]>
  export type TrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InvoiceLine?: boolean | Track$InvoiceLineArgs<ExtArgs>
    PlaylistTrack?: boolean | Track$PlaylistTrackArgs<ExtArgs>
    MediaType?: boolean | MediaTypeDefaultArgs<ExtArgs>
    Genre?: boolean | Track$GenreArgs<ExtArgs>
    Album?: boolean | Track$AlbumArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MediaType?: boolean | MediaTypeDefaultArgs<ExtArgs>
    Genre?: boolean | Track$GenreArgs<ExtArgs>
    Album?: boolean | Track$AlbumArgs<ExtArgs>
  }
  export type TrackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MediaType?: boolean | MediaTypeDefaultArgs<ExtArgs>
    Genre?: boolean | Track$GenreArgs<ExtArgs>
    Album?: boolean | Track$AlbumArgs<ExtArgs>
  }

  export type $TrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Track"
    objects: {
      InvoiceLine: Prisma.$InvoiceLinePayload<ExtArgs>[]
      PlaylistTrack: Prisma.$PlaylistTrackPayload<ExtArgs>[]
      MediaType: Prisma.$MediaTypePayload<ExtArgs>
      Genre: Prisma.$GenrePayload<ExtArgs> | null
      Album: Prisma.$AlbumPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      TrackId: number
      Name: string
      AlbumId: number | null
      MediaTypeId: number
      GenreId: number | null
      Composer: string | null
      Milliseconds: number
      Bytes: number | null
      UnitPrice: Prisma.Decimal
    }, ExtArgs["result"]["track"]>
    composites: {}
  }

  type TrackGetPayload<S extends boolean | null | undefined | TrackDefaultArgs> = $Result.GetResult<Prisma.$TrackPayload, S>

  type TrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackCountAggregateInputType | true
    }

  export interface TrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Track'], meta: { name: 'Track' } }
    /**
     * Find zero or one Track that matches the filter.
     * @param {TrackFindUniqueArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackFindUniqueArgs>(args: SelectSubset<T, TrackFindUniqueArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Track that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackFindUniqueOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Track that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackFindFirstArgs>(args?: SelectSubset<T, TrackFindFirstArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Track that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.track.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.track.findMany({ take: 10 })
     * 
     * // Only select the `TrackId`
     * const trackWithTrackIdOnly = await prisma.track.findMany({ select: { TrackId: true } })
     * 
     */
    findMany<T extends TrackFindManyArgs>(args?: SelectSubset<T, TrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Track.
     * @param {TrackCreateArgs} args - Arguments to create a Track.
     * @example
     * // Create one Track
     * const Track = await prisma.track.create({
     *   data: {
     *     // ... data to create a Track
     *   }
     * })
     * 
     */
    create<T extends TrackCreateArgs>(args: SelectSubset<T, TrackCreateArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tracks.
     * @param {TrackCreateManyArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const track = await prisma.track.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackCreateManyArgs>(args?: SelectSubset<T, TrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tracks and returns the data saved in the database.
     * @param {TrackCreateManyAndReturnArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const track = await prisma.track.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tracks and only return the `TrackId`
     * const trackWithTrackIdOnly = await prisma.track.createManyAndReturn({
     *   select: { TrackId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Track.
     * @param {TrackDeleteArgs} args - Arguments to delete one Track.
     * @example
     * // Delete one Track
     * const Track = await prisma.track.delete({
     *   where: {
     *     // ... filter to delete one Track
     *   }
     * })
     * 
     */
    delete<T extends TrackDeleteArgs>(args: SelectSubset<T, TrackDeleteArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Track.
     * @param {TrackUpdateArgs} args - Arguments to update one Track.
     * @example
     * // Update one Track
     * const track = await prisma.track.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackUpdateArgs>(args: SelectSubset<T, TrackUpdateArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tracks.
     * @param {TrackDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.track.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackDeleteManyArgs>(args?: SelectSubset<T, TrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackUpdateManyArgs>(args: SelectSubset<T, TrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks and returns the data updated in the database.
     * @param {TrackUpdateManyAndReturnArgs} args - Arguments to update many Tracks.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tracks and only return the `TrackId`
     * const trackWithTrackIdOnly = await prisma.track.updateManyAndReturn({
     *   select: { TrackId: true },
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
    updateManyAndReturn<T extends TrackUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Track.
     * @param {TrackUpsertArgs} args - Arguments to update or create a Track.
     * @example
     * // Update or create a Track
     * const track = await prisma.track.upsert({
     *   create: {
     *     // ... data to create a Track
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track we want to update
     *   }
     * })
     */
    upsert<T extends TrackUpsertArgs>(args: SelectSubset<T, TrackUpsertArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.track.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TrackCountArgs>(
      args?: Subset<T, TrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackAggregateArgs>(args: Subset<T, TrackAggregateArgs>): Prisma.PrismaPromise<GetTrackAggregateType<T>>

    /**
     * Group by Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackGroupByArgs} args - Group by arguments.
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
      T extends TrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackGroupByArgs['orderBy'] }
        : { orderBy?: TrackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Track model
   */
  readonly fields: TrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Track.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    InvoiceLine<T extends Track$InvoiceLineArgs<ExtArgs> = {}>(args?: Subset<T, Track$InvoiceLineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PlaylistTrack<T extends Track$PlaylistTrackArgs<ExtArgs> = {}>(args?: Subset<T, Track$PlaylistTrackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MediaType<T extends MediaTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaTypeDefaultArgs<ExtArgs>>): Prisma__MediaTypeClient<$Result.GetResult<Prisma.$MediaTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Genre<T extends Track$GenreArgs<ExtArgs> = {}>(args?: Subset<T, Track$GenreArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Album<T extends Track$AlbumArgs<ExtArgs> = {}>(args?: Subset<T, Track$AlbumArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Track model
   */
  interface TrackFieldRefs {
    readonly TrackId: FieldRef<"Track", 'Int'>
    readonly Name: FieldRef<"Track", 'String'>
    readonly AlbumId: FieldRef<"Track", 'Int'>
    readonly MediaTypeId: FieldRef<"Track", 'Int'>
    readonly GenreId: FieldRef<"Track", 'Int'>
    readonly Composer: FieldRef<"Track", 'String'>
    readonly Milliseconds: FieldRef<"Track", 'Int'>
    readonly Bytes: FieldRef<"Track", 'Int'>
    readonly UnitPrice: FieldRef<"Track", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Track findUnique
   */
  export type TrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findUniqueOrThrow
   */
  export type TrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findFirst
   */
  export type TrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track findFirstOrThrow
   */
  export type TrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track findMany
   */
  export type TrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track create
   */
  export type TrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to create a Track.
     */
    data: XOR<TrackCreateInput, TrackUncheckedCreateInput>
  }

  /**
   * Track createMany
   */
  export type TrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
  }

  /**
   * Track createManyAndReturn
   */
  export type TrackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Track update
   */
  export type TrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to update a Track.
     */
    data: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
    /**
     * Choose, which Track to update.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track updateMany
   */
  export type TrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
    /**
     * Limit how many Tracks to update.
     */
    limit?: number
  }

  /**
   * Track updateManyAndReturn
   */
  export type TrackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
    /**
     * Limit how many Tracks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Track upsert
   */
  export type TrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The filter to search for the Track to update in case it exists.
     */
    where: TrackWhereUniqueInput
    /**
     * In case the Track found by the `where` argument doesn't exist, create a new Track with this data.
     */
    create: XOR<TrackCreateInput, TrackUncheckedCreateInput>
    /**
     * In case the Track was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
  }

  /**
   * Track delete
   */
  export type TrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter which Track to delete.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track deleteMany
   */
  export type TrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to delete
     */
    where?: TrackWhereInput
    /**
     * Limit how many Tracks to delete.
     */
    limit?: number
  }

  /**
   * Track.InvoiceLine
   */
  export type Track$InvoiceLineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: InvoiceLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: InvoiceLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceLineInclude<ExtArgs> | null
    where?: InvoiceLineWhereInput
    orderBy?: InvoiceLineOrderByWithRelationInput | InvoiceLineOrderByWithRelationInput[]
    cursor?: InvoiceLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceLineScalarFieldEnum | InvoiceLineScalarFieldEnum[]
  }

  /**
   * Track.PlaylistTrack
   */
  export type Track$PlaylistTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrack
     */
    select?: PlaylistTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrack
     */
    omit?: PlaylistTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTrackInclude<ExtArgs> | null
    where?: PlaylistTrackWhereInput
    orderBy?: PlaylistTrackOrderByWithRelationInput | PlaylistTrackOrderByWithRelationInput[]
    cursor?: PlaylistTrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistTrackScalarFieldEnum | PlaylistTrackScalarFieldEnum[]
  }

  /**
   * Track.Genre
   */
  export type Track$GenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
  }

  /**
   * Track.Album
   */
  export type Track$AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
  }

  /**
   * Track without action
   */
  export type TrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlbumScalarFieldEnum: {
    AlbumId: 'AlbumId',
    Title: 'Title',
    ArtistId: 'ArtistId'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    ArtistId: 'ArtistId',
    Name: 'Name'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    CustomerId: 'CustomerId',
    FirstName: 'FirstName',
    LastName: 'LastName',
    Company: 'Company',
    Address: 'Address',
    City: 'City',
    State: 'State',
    Country: 'Country',
    PostalCode: 'PostalCode',
    Phone: 'Phone',
    Fax: 'Fax',
    Email: 'Email',
    SupportRepId: 'SupportRepId'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    EmployeeId: 'EmployeeId',
    LastName: 'LastName',
    FirstName: 'FirstName',
    Title: 'Title',
    ReportsTo: 'ReportsTo',
    BirthDate: 'BirthDate',
    HireDate: 'HireDate',
    Address: 'Address',
    City: 'City',
    State: 'State',
    Country: 'Country',
    PostalCode: 'PostalCode',
    Phone: 'Phone',
    Fax: 'Fax',
    Email: 'Email'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    GenreId: 'GenreId',
    Name: 'Name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    InvoiceId: 'InvoiceId',
    CustomerId: 'CustomerId',
    InvoiceDate: 'InvoiceDate',
    BillingAddress: 'BillingAddress',
    BillingCity: 'BillingCity',
    BillingState: 'BillingState',
    BillingCountry: 'BillingCountry',
    BillingPostalCode: 'BillingPostalCode',
    Total: 'Total'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const InvoiceLineScalarFieldEnum: {
    InvoiceLineId: 'InvoiceLineId',
    InvoiceId: 'InvoiceId',
    TrackId: 'TrackId',
    UnitPrice: 'UnitPrice',
    Quantity: 'Quantity'
  };

  export type InvoiceLineScalarFieldEnum = (typeof InvoiceLineScalarFieldEnum)[keyof typeof InvoiceLineScalarFieldEnum]


  export const MediaTypeScalarFieldEnum: {
    MediaTypeId: 'MediaTypeId',
    Name: 'Name'
  };

  export type MediaTypeScalarFieldEnum = (typeof MediaTypeScalarFieldEnum)[keyof typeof MediaTypeScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    PlaylistId: 'PlaylistId',
    Name: 'Name'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const PlaylistTrackScalarFieldEnum: {
    PlaylistId: 'PlaylistId',
    TrackId: 'TrackId'
  };

  export type PlaylistTrackScalarFieldEnum = (typeof PlaylistTrackScalarFieldEnum)[keyof typeof PlaylistTrackScalarFieldEnum]


  export const TrackScalarFieldEnum: {
    TrackId: 'TrackId',
    Name: 'Name',
    AlbumId: 'AlbumId',
    MediaTypeId: 'MediaTypeId',
    GenreId: 'GenreId',
    Composer: 'Composer',
    Milliseconds: 'Milliseconds',
    Bytes: 'Bytes',
    UnitPrice: 'UnitPrice'
  };

  export type TrackScalarFieldEnum = (typeof TrackScalarFieldEnum)[keyof typeof TrackScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    AlbumId?: IntFilter<"Album"> | number
    Title?: StringFilter<"Album"> | string
    ArtistId?: IntFilter<"Album"> | number
    Artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    Track?: TrackListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
    Artist?: ArtistOrderByWithRelationInput
    Track?: TrackOrderByRelationAggregateInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    AlbumId?: number
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    Title?: StringFilter<"Album"> | string
    ArtistId?: IntFilter<"Album"> | number
    Artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    Track?: TrackListRelationFilter
  }, "AlbumId">

  export type AlbumOrderByWithAggregationInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    AlbumId?: IntWithAggregatesFilter<"Album"> | number
    Title?: StringWithAggregatesFilter<"Album"> | string
    ArtistId?: IntWithAggregatesFilter<"Album"> | number
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    ArtistId?: IntFilter<"Artist"> | number
    Name?: StringNullableFilter<"Artist"> | string | null
    Album?: AlbumListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    ArtistId?: SortOrder
    Name?: SortOrderInput | SortOrder
    Album?: AlbumOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    ArtistId?: number
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    Name?: StringNullableFilter<"Artist"> | string | null
    Album?: AlbumListRelationFilter
  }, "ArtistId">

  export type ArtistOrderByWithAggregationInput = {
    ArtistId?: SortOrder
    Name?: SortOrderInput | SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _avg?: ArtistAvgOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
    _sum?: ArtistSumOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    ArtistId?: IntWithAggregatesFilter<"Artist"> | number
    Name?: StringNullableWithAggregatesFilter<"Artist"> | string | null
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    CustomerId?: IntFilter<"Customer"> | number
    FirstName?: StringFilter<"Customer"> | string
    LastName?: StringFilter<"Customer"> | string
    Company?: StringNullableFilter<"Customer"> | string | null
    Address?: StringNullableFilter<"Customer"> | string | null
    City?: StringNullableFilter<"Customer"> | string | null
    State?: StringNullableFilter<"Customer"> | string | null
    Country?: StringNullableFilter<"Customer"> | string | null
    PostalCode?: StringNullableFilter<"Customer"> | string | null
    Phone?: StringNullableFilter<"Customer"> | string | null
    Fax?: StringNullableFilter<"Customer"> | string | null
    Email?: StringFilter<"Customer"> | string
    SupportRepId?: IntNullableFilter<"Customer"> | number | null
    Employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    Invoice?: InvoiceListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    CustomerId?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Company?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    State?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    PostalCode?: SortOrderInput | SortOrder
    Phone?: SortOrderInput | SortOrder
    Fax?: SortOrderInput | SortOrder
    Email?: SortOrder
    SupportRepId?: SortOrderInput | SortOrder
    Employee?: EmployeeOrderByWithRelationInput
    Invoice?: InvoiceOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    CustomerId?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    FirstName?: StringFilter<"Customer"> | string
    LastName?: StringFilter<"Customer"> | string
    Company?: StringNullableFilter<"Customer"> | string | null
    Address?: StringNullableFilter<"Customer"> | string | null
    City?: StringNullableFilter<"Customer"> | string | null
    State?: StringNullableFilter<"Customer"> | string | null
    Country?: StringNullableFilter<"Customer"> | string | null
    PostalCode?: StringNullableFilter<"Customer"> | string | null
    Phone?: StringNullableFilter<"Customer"> | string | null
    Fax?: StringNullableFilter<"Customer"> | string | null
    Email?: StringFilter<"Customer"> | string
    SupportRepId?: IntNullableFilter<"Customer"> | number | null
    Employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    Invoice?: InvoiceListRelationFilter
  }, "CustomerId">

  export type CustomerOrderByWithAggregationInput = {
    CustomerId?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Company?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    State?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    PostalCode?: SortOrderInput | SortOrder
    Phone?: SortOrderInput | SortOrder
    Fax?: SortOrderInput | SortOrder
    Email?: SortOrder
    SupportRepId?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    CustomerId?: IntWithAggregatesFilter<"Customer"> | number
    FirstName?: StringWithAggregatesFilter<"Customer"> | string
    LastName?: StringWithAggregatesFilter<"Customer"> | string
    Company?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    Address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    City?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    State?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    Country?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    PostalCode?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    Phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    Fax?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    Email?: StringWithAggregatesFilter<"Customer"> | string
    SupportRepId?: IntNullableWithAggregatesFilter<"Customer"> | number | null
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    EmployeeId?: IntFilter<"Employee"> | number
    LastName?: StringFilter<"Employee"> | string
    FirstName?: StringFilter<"Employee"> | string
    Title?: StringNullableFilter<"Employee"> | string | null
    ReportsTo?: IntNullableFilter<"Employee"> | number | null
    BirthDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    HireDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    Address?: StringNullableFilter<"Employee"> | string | null
    City?: StringNullableFilter<"Employee"> | string | null
    State?: StringNullableFilter<"Employee"> | string | null
    Country?: StringNullableFilter<"Employee"> | string | null
    PostalCode?: StringNullableFilter<"Employee"> | string | null
    Phone?: StringNullableFilter<"Employee"> | string | null
    Fax?: StringNullableFilter<"Employee"> | string | null
    Email?: StringNullableFilter<"Employee"> | string | null
    Customer?: CustomerListRelationFilter
    Employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    other_Employee?: EmployeeListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    EmployeeId?: SortOrder
    LastName?: SortOrder
    FirstName?: SortOrder
    Title?: SortOrderInput | SortOrder
    ReportsTo?: SortOrderInput | SortOrder
    BirthDate?: SortOrderInput | SortOrder
    HireDate?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    State?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    PostalCode?: SortOrderInput | SortOrder
    Phone?: SortOrderInput | SortOrder
    Fax?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Customer?: CustomerOrderByRelationAggregateInput
    Employee?: EmployeeOrderByWithRelationInput
    other_Employee?: EmployeeOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    EmployeeId?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    LastName?: StringFilter<"Employee"> | string
    FirstName?: StringFilter<"Employee"> | string
    Title?: StringNullableFilter<"Employee"> | string | null
    ReportsTo?: IntNullableFilter<"Employee"> | number | null
    BirthDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    HireDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    Address?: StringNullableFilter<"Employee"> | string | null
    City?: StringNullableFilter<"Employee"> | string | null
    State?: StringNullableFilter<"Employee"> | string | null
    Country?: StringNullableFilter<"Employee"> | string | null
    PostalCode?: StringNullableFilter<"Employee"> | string | null
    Phone?: StringNullableFilter<"Employee"> | string | null
    Fax?: StringNullableFilter<"Employee"> | string | null
    Email?: StringNullableFilter<"Employee"> | string | null
    Customer?: CustomerListRelationFilter
    Employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    other_Employee?: EmployeeListRelationFilter
  }, "EmployeeId">

  export type EmployeeOrderByWithAggregationInput = {
    EmployeeId?: SortOrder
    LastName?: SortOrder
    FirstName?: SortOrder
    Title?: SortOrderInput | SortOrder
    ReportsTo?: SortOrderInput | SortOrder
    BirthDate?: SortOrderInput | SortOrder
    HireDate?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    State?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    PostalCode?: SortOrderInput | SortOrder
    Phone?: SortOrderInput | SortOrder
    Fax?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    EmployeeId?: IntWithAggregatesFilter<"Employee"> | number
    LastName?: StringWithAggregatesFilter<"Employee"> | string
    FirstName?: StringWithAggregatesFilter<"Employee"> | string
    Title?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    ReportsTo?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    BirthDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    HireDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    Address?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    City?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    State?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    Country?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    PostalCode?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    Phone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    Fax?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    Email?: StringNullableWithAggregatesFilter<"Employee"> | string | null
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    GenreId?: IntFilter<"Genre"> | number
    Name?: StringNullableFilter<"Genre"> | string | null
    Track?: TrackListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    GenreId?: SortOrder
    Name?: SortOrderInput | SortOrder
    Track?: TrackOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    GenreId?: number
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    Name?: StringNullableFilter<"Genre"> | string | null
    Track?: TrackListRelationFilter
  }, "GenreId">

  export type GenreOrderByWithAggregationInput = {
    GenreId?: SortOrder
    Name?: SortOrderInput | SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    GenreId?: IntWithAggregatesFilter<"Genre"> | number
    Name?: StringNullableWithAggregatesFilter<"Genre"> | string | null
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    InvoiceId?: IntFilter<"Invoice"> | number
    CustomerId?: IntFilter<"Invoice"> | number
    InvoiceDate?: DateTimeFilter<"Invoice"> | Date | string
    BillingAddress?: StringNullableFilter<"Invoice"> | string | null
    BillingCity?: StringNullableFilter<"Invoice"> | string | null
    BillingState?: StringNullableFilter<"Invoice"> | string | null
    BillingCountry?: StringNullableFilter<"Invoice"> | string | null
    BillingPostalCode?: StringNullableFilter<"Invoice"> | string | null
    Total?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    Customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    InvoiceLine?: InvoiceLineListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    InvoiceDate?: SortOrder
    BillingAddress?: SortOrderInput | SortOrder
    BillingCity?: SortOrderInput | SortOrder
    BillingState?: SortOrderInput | SortOrder
    BillingCountry?: SortOrderInput | SortOrder
    BillingPostalCode?: SortOrderInput | SortOrder
    Total?: SortOrder
    Customer?: CustomerOrderByWithRelationInput
    InvoiceLine?: InvoiceLineOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    InvoiceId?: number
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    CustomerId?: IntFilter<"Invoice"> | number
    InvoiceDate?: DateTimeFilter<"Invoice"> | Date | string
    BillingAddress?: StringNullableFilter<"Invoice"> | string | null
    BillingCity?: StringNullableFilter<"Invoice"> | string | null
    BillingState?: StringNullableFilter<"Invoice"> | string | null
    BillingCountry?: StringNullableFilter<"Invoice"> | string | null
    BillingPostalCode?: StringNullableFilter<"Invoice"> | string | null
    Total?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    Customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    InvoiceLine?: InvoiceLineListRelationFilter
  }, "InvoiceId">

  export type InvoiceOrderByWithAggregationInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    InvoiceDate?: SortOrder
    BillingAddress?: SortOrderInput | SortOrder
    BillingCity?: SortOrderInput | SortOrder
    BillingState?: SortOrderInput | SortOrder
    BillingCountry?: SortOrderInput | SortOrder
    BillingPostalCode?: SortOrderInput | SortOrder
    Total?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    InvoiceId?: IntWithAggregatesFilter<"Invoice"> | number
    CustomerId?: IntWithAggregatesFilter<"Invoice"> | number
    InvoiceDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    BillingAddress?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    BillingCity?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    BillingState?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    BillingCountry?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    BillingPostalCode?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    Total?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
  }

  export type InvoiceLineWhereInput = {
    AND?: InvoiceLineWhereInput | InvoiceLineWhereInput[]
    OR?: InvoiceLineWhereInput[]
    NOT?: InvoiceLineWhereInput | InvoiceLineWhereInput[]
    InvoiceLineId?: IntFilter<"InvoiceLine"> | number
    InvoiceId?: IntFilter<"InvoiceLine"> | number
    TrackId?: IntFilter<"InvoiceLine"> | number
    UnitPrice?: DecimalFilter<"InvoiceLine"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntFilter<"InvoiceLine"> | number
    Track?: XOR<TrackScalarRelationFilter, TrackWhereInput>
    Invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }

  export type InvoiceLineOrderByWithRelationInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
    Track?: TrackOrderByWithRelationInput
    Invoice?: InvoiceOrderByWithRelationInput
  }

  export type InvoiceLineWhereUniqueInput = Prisma.AtLeast<{
    InvoiceLineId?: number
    AND?: InvoiceLineWhereInput | InvoiceLineWhereInput[]
    OR?: InvoiceLineWhereInput[]
    NOT?: InvoiceLineWhereInput | InvoiceLineWhereInput[]
    InvoiceId?: IntFilter<"InvoiceLine"> | number
    TrackId?: IntFilter<"InvoiceLine"> | number
    UnitPrice?: DecimalFilter<"InvoiceLine"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntFilter<"InvoiceLine"> | number
    Track?: XOR<TrackScalarRelationFilter, TrackWhereInput>
    Invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }, "InvoiceLineId">

  export type InvoiceLineOrderByWithAggregationInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
    _count?: InvoiceLineCountOrderByAggregateInput
    _avg?: InvoiceLineAvgOrderByAggregateInput
    _max?: InvoiceLineMaxOrderByAggregateInput
    _min?: InvoiceLineMinOrderByAggregateInput
    _sum?: InvoiceLineSumOrderByAggregateInput
  }

  export type InvoiceLineScalarWhereWithAggregatesInput = {
    AND?: InvoiceLineScalarWhereWithAggregatesInput | InvoiceLineScalarWhereWithAggregatesInput[]
    OR?: InvoiceLineScalarWhereWithAggregatesInput[]
    NOT?: InvoiceLineScalarWhereWithAggregatesInput | InvoiceLineScalarWhereWithAggregatesInput[]
    InvoiceLineId?: IntWithAggregatesFilter<"InvoiceLine"> | number
    InvoiceId?: IntWithAggregatesFilter<"InvoiceLine"> | number
    TrackId?: IntWithAggregatesFilter<"InvoiceLine"> | number
    UnitPrice?: DecimalWithAggregatesFilter<"InvoiceLine"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntWithAggregatesFilter<"InvoiceLine"> | number
  }

  export type MediaTypeWhereInput = {
    AND?: MediaTypeWhereInput | MediaTypeWhereInput[]
    OR?: MediaTypeWhereInput[]
    NOT?: MediaTypeWhereInput | MediaTypeWhereInput[]
    MediaTypeId?: IntFilter<"MediaType"> | number
    Name?: StringNullableFilter<"MediaType"> | string | null
    Track?: TrackListRelationFilter
  }

  export type MediaTypeOrderByWithRelationInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrderInput | SortOrder
    Track?: TrackOrderByRelationAggregateInput
  }

  export type MediaTypeWhereUniqueInput = Prisma.AtLeast<{
    MediaTypeId?: number
    AND?: MediaTypeWhereInput | MediaTypeWhereInput[]
    OR?: MediaTypeWhereInput[]
    NOT?: MediaTypeWhereInput | MediaTypeWhereInput[]
    Name?: StringNullableFilter<"MediaType"> | string | null
    Track?: TrackListRelationFilter
  }, "MediaTypeId">

  export type MediaTypeOrderByWithAggregationInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrderInput | SortOrder
    _count?: MediaTypeCountOrderByAggregateInput
    _avg?: MediaTypeAvgOrderByAggregateInput
    _max?: MediaTypeMaxOrderByAggregateInput
    _min?: MediaTypeMinOrderByAggregateInput
    _sum?: MediaTypeSumOrderByAggregateInput
  }

  export type MediaTypeScalarWhereWithAggregatesInput = {
    AND?: MediaTypeScalarWhereWithAggregatesInput | MediaTypeScalarWhereWithAggregatesInput[]
    OR?: MediaTypeScalarWhereWithAggregatesInput[]
    NOT?: MediaTypeScalarWhereWithAggregatesInput | MediaTypeScalarWhereWithAggregatesInput[]
    MediaTypeId?: IntWithAggregatesFilter<"MediaType"> | number
    Name?: StringNullableWithAggregatesFilter<"MediaType"> | string | null
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    PlaylistId?: IntFilter<"Playlist"> | number
    Name?: StringNullableFilter<"Playlist"> | string | null
    PlaylistTrack?: PlaylistTrackListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    PlaylistId?: SortOrder
    Name?: SortOrderInput | SortOrder
    PlaylistTrack?: PlaylistTrackOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    PlaylistId?: number
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    Name?: StringNullableFilter<"Playlist"> | string | null
    PlaylistTrack?: PlaylistTrackListRelationFilter
  }, "PlaylistId">

  export type PlaylistOrderByWithAggregationInput = {
    PlaylistId?: SortOrder
    Name?: SortOrderInput | SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _avg?: PlaylistAvgOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
    _sum?: PlaylistSumOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    PlaylistId?: IntWithAggregatesFilter<"Playlist"> | number
    Name?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
  }

  export type PlaylistTrackWhereInput = {
    AND?: PlaylistTrackWhereInput | PlaylistTrackWhereInput[]
    OR?: PlaylistTrackWhereInput[]
    NOT?: PlaylistTrackWhereInput | PlaylistTrackWhereInput[]
    PlaylistId?: IntFilter<"PlaylistTrack"> | number
    TrackId?: IntFilter<"PlaylistTrack"> | number
    Track?: XOR<TrackScalarRelationFilter, TrackWhereInput>
    Playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
  }

  export type PlaylistTrackOrderByWithRelationInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
    Track?: TrackOrderByWithRelationInput
    Playlist?: PlaylistOrderByWithRelationInput
  }

  export type PlaylistTrackWhereUniqueInput = Prisma.AtLeast<{
    PlaylistId_TrackId?: PlaylistTrackPlaylistIdTrackIdCompoundUniqueInput
    AND?: PlaylistTrackWhereInput | PlaylistTrackWhereInput[]
    OR?: PlaylistTrackWhereInput[]
    NOT?: PlaylistTrackWhereInput | PlaylistTrackWhereInput[]
    PlaylistId?: IntFilter<"PlaylistTrack"> | number
    TrackId?: IntFilter<"PlaylistTrack"> | number
    Track?: XOR<TrackScalarRelationFilter, TrackWhereInput>
    Playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
  }, "PlaylistId_TrackId">

  export type PlaylistTrackOrderByWithAggregationInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
    _count?: PlaylistTrackCountOrderByAggregateInput
    _avg?: PlaylistTrackAvgOrderByAggregateInput
    _max?: PlaylistTrackMaxOrderByAggregateInput
    _min?: PlaylistTrackMinOrderByAggregateInput
    _sum?: PlaylistTrackSumOrderByAggregateInput
  }

  export type PlaylistTrackScalarWhereWithAggregatesInput = {
    AND?: PlaylistTrackScalarWhereWithAggregatesInput | PlaylistTrackScalarWhereWithAggregatesInput[]
    OR?: PlaylistTrackScalarWhereWithAggregatesInput[]
    NOT?: PlaylistTrackScalarWhereWithAggregatesInput | PlaylistTrackScalarWhereWithAggregatesInput[]
    PlaylistId?: IntWithAggregatesFilter<"PlaylistTrack"> | number
    TrackId?: IntWithAggregatesFilter<"PlaylistTrack"> | number
  }

  export type TrackWhereInput = {
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    TrackId?: IntFilter<"Track"> | number
    Name?: StringFilter<"Track"> | string
    AlbumId?: IntNullableFilter<"Track"> | number | null
    MediaTypeId?: IntFilter<"Track"> | number
    GenreId?: IntNullableFilter<"Track"> | number | null
    Composer?: StringNullableFilter<"Track"> | string | null
    Milliseconds?: IntFilter<"Track"> | number
    Bytes?: IntNullableFilter<"Track"> | number | null
    UnitPrice?: DecimalFilter<"Track"> | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineListRelationFilter
    PlaylistTrack?: PlaylistTrackListRelationFilter
    MediaType?: XOR<MediaTypeScalarRelationFilter, MediaTypeWhereInput>
    Genre?: XOR<GenreNullableScalarRelationFilter, GenreWhereInput> | null
    Album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
  }

  export type TrackOrderByWithRelationInput = {
    TrackId?: SortOrder
    Name?: SortOrder
    AlbumId?: SortOrderInput | SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrderInput | SortOrder
    Composer?: SortOrderInput | SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrderInput | SortOrder
    UnitPrice?: SortOrder
    InvoiceLine?: InvoiceLineOrderByRelationAggregateInput
    PlaylistTrack?: PlaylistTrackOrderByRelationAggregateInput
    MediaType?: MediaTypeOrderByWithRelationInput
    Genre?: GenreOrderByWithRelationInput
    Album?: AlbumOrderByWithRelationInput
  }

  export type TrackWhereUniqueInput = Prisma.AtLeast<{
    TrackId?: number
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    Name?: StringFilter<"Track"> | string
    AlbumId?: IntNullableFilter<"Track"> | number | null
    MediaTypeId?: IntFilter<"Track"> | number
    GenreId?: IntNullableFilter<"Track"> | number | null
    Composer?: StringNullableFilter<"Track"> | string | null
    Milliseconds?: IntFilter<"Track"> | number
    Bytes?: IntNullableFilter<"Track"> | number | null
    UnitPrice?: DecimalFilter<"Track"> | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineListRelationFilter
    PlaylistTrack?: PlaylistTrackListRelationFilter
    MediaType?: XOR<MediaTypeScalarRelationFilter, MediaTypeWhereInput>
    Genre?: XOR<GenreNullableScalarRelationFilter, GenreWhereInput> | null
    Album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
  }, "TrackId">

  export type TrackOrderByWithAggregationInput = {
    TrackId?: SortOrder
    Name?: SortOrder
    AlbumId?: SortOrderInput | SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrderInput | SortOrder
    Composer?: SortOrderInput | SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrderInput | SortOrder
    UnitPrice?: SortOrder
    _count?: TrackCountOrderByAggregateInput
    _avg?: TrackAvgOrderByAggregateInput
    _max?: TrackMaxOrderByAggregateInput
    _min?: TrackMinOrderByAggregateInput
    _sum?: TrackSumOrderByAggregateInput
  }

  export type TrackScalarWhereWithAggregatesInput = {
    AND?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    OR?: TrackScalarWhereWithAggregatesInput[]
    NOT?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    TrackId?: IntWithAggregatesFilter<"Track"> | number
    Name?: StringWithAggregatesFilter<"Track"> | string
    AlbumId?: IntNullableWithAggregatesFilter<"Track"> | number | null
    MediaTypeId?: IntWithAggregatesFilter<"Track"> | number
    GenreId?: IntNullableWithAggregatesFilter<"Track"> | number | null
    Composer?: StringNullableWithAggregatesFilter<"Track"> | string | null
    Milliseconds?: IntWithAggregatesFilter<"Track"> | number
    Bytes?: IntNullableWithAggregatesFilter<"Track"> | number | null
    UnitPrice?: DecimalWithAggregatesFilter<"Track"> | Decimal | DecimalJsLike | number | string
  }

  export type AlbumCreateInput = {
    Title: string
    Artist: ArtistCreateNestedOneWithoutAlbumInput
    Track?: TrackCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    AlbumId?: number
    Title: string
    ArtistId: number
    Track?: TrackUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Artist?: ArtistUpdateOneRequiredWithoutAlbumNestedInput
    Track?: TrackUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    ArtistId?: IntFieldUpdateOperationsInput | number
    Track?: TrackUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    AlbumId?: number
    Title: string
    ArtistId: number
  }

  export type AlbumUpdateManyMutationInput = {
    Title?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    ArtistId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistCreateInput = {
    Name?: string | null
    Album?: AlbumCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    ArtistId?: number
    Name?: string | null
    Album?: AlbumUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Album?: AlbumUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    ArtistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Album?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    ArtistId?: number
    Name?: string | null
  }

  export type ArtistUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUncheckedUpdateManyInput = {
    ArtistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerCreateInput = {
    FirstName: string
    LastName: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
    Employee?: EmployeeCreateNestedOneWithoutCustomerInput
    Invoice?: InvoiceCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    CustomerId?: number
    FirstName: string
    LastName: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
    SupportRepId?: number | null
    Invoice?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Employee?: EmployeeUpdateOneWithoutCustomerNestedInput
    Invoice?: InvoiceUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    CustomerId?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    SupportRepId?: NullableIntFieldUpdateOperationsInput | number | null
    Invoice?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    CustomerId?: number
    FirstName: string
    LastName: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
    SupportRepId?: number | null
  }

  export type CustomerUpdateManyMutationInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    CustomerId?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    SupportRepId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmployeeCreateInput = {
    LastName: string
    FirstName: string
    Title?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    Customer?: CustomerCreateNestedManyWithoutEmployeeInput
    Employee?: EmployeeCreateNestedOneWithoutOther_EmployeeInput
    other_Employee?: EmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    EmployeeId?: number
    LastName: string
    FirstName: string
    Title?: string | null
    ReportsTo?: number | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    Customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    other_Employee?: EmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    Employee?: EmployeeUpdateOneWithoutOther_EmployeeNestedInput
    other_Employee?: EmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    EmployeeId?: IntFieldUpdateOperationsInput | number
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    ReportsTo?: NullableIntFieldUpdateOperationsInput | number | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    other_Employee?: EmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    EmployeeId?: number
    LastName: string
    FirstName: string
    Title?: string | null
    ReportsTo?: number | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
  }

  export type EmployeeUpdateManyMutationInput = {
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeUncheckedUpdateManyInput = {
    EmployeeId?: IntFieldUpdateOperationsInput | number
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    ReportsTo?: NullableIntFieldUpdateOperationsInput | number | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreCreateInput = {
    Name?: string | null
    Track?: TrackCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    GenreId?: number
    Name?: string | null
    Track?: TrackUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Track?: TrackUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    GenreId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Track?: TrackUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    GenreId?: number
    Name?: string | null
  }

  export type GenreUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUncheckedUpdateManyInput = {
    GenreId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceCreateInput = {
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    Customer: CustomerCreateNestedOneWithoutInvoiceInput
    InvoiceLine?: InvoiceLineCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    InvoiceId?: number
    CustomerId: number
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Customer?: CustomerUpdateOneRequiredWithoutInvoiceNestedInput
    InvoiceLine?: InvoiceLineUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    InvoiceId?: IntFieldUpdateOperationsInput | number
    CustomerId?: IntFieldUpdateOperationsInput | number
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    InvoiceId?: number
    CustomerId: number
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
  }

  export type InvoiceUpdateManyMutationInput = {
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    InvoiceId?: IntFieldUpdateOperationsInput | number
    CustomerId?: IntFieldUpdateOperationsInput | number
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InvoiceLineCreateInput = {
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
    Track: TrackCreateNestedOneWithoutInvoiceLineInput
    Invoice: InvoiceCreateNestedOneWithoutInvoiceLineInput
  }

  export type InvoiceLineUncheckedCreateInput = {
    InvoiceLineId?: number
    InvoiceId: number
    TrackId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type InvoiceLineUpdateInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Track?: TrackUpdateOneRequiredWithoutInvoiceLineNestedInput
    Invoice?: InvoiceUpdateOneRequiredWithoutInvoiceLineNestedInput
  }

  export type InvoiceLineUncheckedUpdateInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    InvoiceId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InvoiceLineCreateManyInput = {
    InvoiceLineId?: number
    InvoiceId: number
    TrackId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type InvoiceLineUpdateManyMutationInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InvoiceLineUncheckedUpdateManyInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    InvoiceId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MediaTypeCreateInput = {
    Name?: string | null
    Track?: TrackCreateNestedManyWithoutMediaTypeInput
  }

  export type MediaTypeUncheckedCreateInput = {
    MediaTypeId?: number
    Name?: string | null
    Track?: TrackUncheckedCreateNestedManyWithoutMediaTypeInput
  }

  export type MediaTypeUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Track?: TrackUpdateManyWithoutMediaTypeNestedInput
  }

  export type MediaTypeUncheckedUpdateInput = {
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Track?: TrackUncheckedUpdateManyWithoutMediaTypeNestedInput
  }

  export type MediaTypeCreateManyInput = {
    MediaTypeId?: number
    Name?: string | null
  }

  export type MediaTypeUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaTypeUncheckedUpdateManyInput = {
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistCreateInput = {
    Name?: string | null
    PlaylistTrack?: PlaylistTrackCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateInput = {
    PlaylistId?: number
    Name?: string | null
    PlaylistTrack?: PlaylistTrackUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    PlaylistTrack?: PlaylistTrackUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    PlaylistTrack?: PlaylistTrackUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    PlaylistId?: number
    Name?: string | null
  }

  export type PlaylistUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistUncheckedUpdateManyInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistTrackCreateInput = {
    Track: TrackCreateNestedOneWithoutPlaylistTrackInput
    Playlist: PlaylistCreateNestedOneWithoutPlaylistTrackInput
  }

  export type PlaylistTrackUncheckedCreateInput = {
    PlaylistId: number
    TrackId: number
  }

  export type PlaylistTrackUpdateInput = {
    Track?: TrackUpdateOneRequiredWithoutPlaylistTrackNestedInput
    Playlist?: PlaylistUpdateOneRequiredWithoutPlaylistTrackNestedInput
  }

  export type PlaylistTrackUncheckedUpdateInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistTrackCreateManyInput = {
    PlaylistId: number
    TrackId: number
  }

  export type PlaylistTrackUpdateManyMutationInput = {

  }

  export type PlaylistTrackUncheckedUpdateManyInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
  }

  export type TrackCreateInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineCreateNestedManyWithoutTrackInput
    PlaylistTrack?: PlaylistTrackCreateNestedManyWithoutTrackInput
    MediaType: MediaTypeCreateNestedOneWithoutTrackInput
    Genre?: GenreCreateNestedOneWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTrackInput
  }

  export type TrackUncheckedCreateInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUncheckedCreateNestedManyWithoutTrackInput
    PlaylistTrack?: PlaylistTrackUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUpdateManyWithoutTrackNestedInput
    PlaylistTrack?: PlaylistTrackUpdateManyWithoutTrackNestedInput
    MediaType?: MediaTypeUpdateOneRequiredWithoutTrackNestedInput
    Genre?: GenreUpdateOneWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUncheckedUpdateManyWithoutTrackNestedInput
    PlaylistTrack?: PlaylistTrackUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackCreateManyInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
  }

  export type TrackUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TrackUncheckedUpdateManyInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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

  export type ArtistScalarRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type TrackListRelationFilter = {
    every?: TrackWhereInput
    some?: TrackWhereInput
    none?: TrackWhereInput
  }

  export type TrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumCountOrderByAggregateInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    AlbumId?: SortOrder
    ArtistId?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
    AlbumId?: SortOrder
    ArtistId?: SortOrder
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

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    ArtistId?: SortOrder
    Name?: SortOrder
  }

  export type ArtistAvgOrderByAggregateInput = {
    ArtistId?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    ArtistId?: SortOrder
    Name?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    ArtistId?: SortOrder
    Name?: SortOrder
  }

  export type ArtistSumOrderByAggregateInput = {
    ArtistId?: SortOrder
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

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    CustomerId?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Company?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    Country?: SortOrder
    PostalCode?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    Email?: SortOrder
    SupportRepId?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    CustomerId?: SortOrder
    SupportRepId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    CustomerId?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Company?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    Country?: SortOrder
    PostalCode?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    Email?: SortOrder
    SupportRepId?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    CustomerId?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Company?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    Country?: SortOrder
    PostalCode?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    Email?: SortOrder
    SupportRepId?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    CustomerId?: SortOrder
    SupportRepId?: SortOrder
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

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    EmployeeId?: SortOrder
    LastName?: SortOrder
    FirstName?: SortOrder
    Title?: SortOrder
    ReportsTo?: SortOrder
    BirthDate?: SortOrder
    HireDate?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    Country?: SortOrder
    PostalCode?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    Email?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    EmployeeId?: SortOrder
    ReportsTo?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    EmployeeId?: SortOrder
    LastName?: SortOrder
    FirstName?: SortOrder
    Title?: SortOrder
    ReportsTo?: SortOrder
    BirthDate?: SortOrder
    HireDate?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    Country?: SortOrder
    PostalCode?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    Email?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    EmployeeId?: SortOrder
    LastName?: SortOrder
    FirstName?: SortOrder
    Title?: SortOrder
    ReportsTo?: SortOrder
    BirthDate?: SortOrder
    HireDate?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    Country?: SortOrder
    PostalCode?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    Email?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    EmployeeId?: SortOrder
    ReportsTo?: SortOrder
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

  export type GenreCountOrderByAggregateInput = {
    GenreId?: SortOrder
    Name?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    GenreId?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    GenreId?: SortOrder
    Name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    GenreId?: SortOrder
    Name?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    GenreId?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type InvoiceLineListRelationFilter = {
    every?: InvoiceLineWhereInput
    some?: InvoiceLineWhereInput
    none?: InvoiceLineWhereInput
  }

  export type InvoiceLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    InvoiceDate?: SortOrder
    BillingAddress?: SortOrder
    BillingCity?: SortOrder
    BillingState?: SortOrder
    BillingCountry?: SortOrder
    BillingPostalCode?: SortOrder
    Total?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    Total?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    InvoiceDate?: SortOrder
    BillingAddress?: SortOrder
    BillingCity?: SortOrder
    BillingState?: SortOrder
    BillingCountry?: SortOrder
    BillingPostalCode?: SortOrder
    Total?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    InvoiceDate?: SortOrder
    BillingAddress?: SortOrder
    BillingCity?: SortOrder
    BillingState?: SortOrder
    BillingCountry?: SortOrder
    BillingPostalCode?: SortOrder
    Total?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    Total?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type TrackScalarRelationFilter = {
    is?: TrackWhereInput
    isNot?: TrackWhereInput
  }

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type InvoiceLineCountOrderByAggregateInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
  }

  export type InvoiceLineAvgOrderByAggregateInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
  }

  export type InvoiceLineMaxOrderByAggregateInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
  }

  export type InvoiceLineMinOrderByAggregateInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
  }

  export type InvoiceLineSumOrderByAggregateInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
  }

  export type MediaTypeCountOrderByAggregateInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrder
  }

  export type MediaTypeAvgOrderByAggregateInput = {
    MediaTypeId?: SortOrder
  }

  export type MediaTypeMaxOrderByAggregateInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrder
  }

  export type MediaTypeMinOrderByAggregateInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrder
  }

  export type MediaTypeSumOrderByAggregateInput = {
    MediaTypeId?: SortOrder
  }

  export type PlaylistTrackListRelationFilter = {
    every?: PlaylistTrackWhereInput
    some?: PlaylistTrackWhereInput
    none?: PlaylistTrackWhereInput
  }

  export type PlaylistTrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistCountOrderByAggregateInput = {
    PlaylistId?: SortOrder
    Name?: SortOrder
  }

  export type PlaylistAvgOrderByAggregateInput = {
    PlaylistId?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    PlaylistId?: SortOrder
    Name?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    PlaylistId?: SortOrder
    Name?: SortOrder
  }

  export type PlaylistSumOrderByAggregateInput = {
    PlaylistId?: SortOrder
  }

  export type PlaylistScalarRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type PlaylistTrackPlaylistIdTrackIdCompoundUniqueInput = {
    PlaylistId: number
    TrackId: number
  }

  export type PlaylistTrackCountOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type PlaylistTrackAvgOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type PlaylistTrackMaxOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type PlaylistTrackMinOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type PlaylistTrackSumOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type MediaTypeScalarRelationFilter = {
    is?: MediaTypeWhereInput
    isNot?: MediaTypeWhereInput
  }

  export type GenreNullableScalarRelationFilter = {
    is?: GenreWhereInput | null
    isNot?: GenreWhereInput | null
  }

  export type AlbumNullableScalarRelationFilter = {
    is?: AlbumWhereInput | null
    isNot?: AlbumWhereInput | null
  }

  export type TrackCountOrderByAggregateInput = {
    TrackId?: SortOrder
    Name?: SortOrder
    AlbumId?: SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrder
    Composer?: SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrder
    UnitPrice?: SortOrder
  }

  export type TrackAvgOrderByAggregateInput = {
    TrackId?: SortOrder
    AlbumId?: SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrder
    UnitPrice?: SortOrder
  }

  export type TrackMaxOrderByAggregateInput = {
    TrackId?: SortOrder
    Name?: SortOrder
    AlbumId?: SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrder
    Composer?: SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrder
    UnitPrice?: SortOrder
  }

  export type TrackMinOrderByAggregateInput = {
    TrackId?: SortOrder
    Name?: SortOrder
    AlbumId?: SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrder
    Composer?: SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrder
    UnitPrice?: SortOrder
  }

  export type TrackSumOrderByAggregateInput = {
    TrackId?: SortOrder
    AlbumId?: SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrder
    UnitPrice?: SortOrder
  }

  export type ArtistCreateNestedOneWithoutAlbumInput = {
    create?: XOR<ArtistCreateWithoutAlbumInput, ArtistUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumInput
    connect?: ArtistWhereUniqueInput
  }

  export type TrackCreateNestedManyWithoutAlbumInput = {
    create?: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput> | TrackCreateWithoutAlbumInput[] | TrackUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAlbumInput | TrackCreateOrConnectWithoutAlbumInput[]
    createMany?: TrackCreateManyAlbumInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type TrackUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput> | TrackCreateWithoutAlbumInput[] | TrackUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAlbumInput | TrackCreateOrConnectWithoutAlbumInput[]
    createMany?: TrackCreateManyAlbumInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ArtistUpdateOneRequiredWithoutAlbumNestedInput = {
    create?: XOR<ArtistCreateWithoutAlbumInput, ArtistUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumInput
    upsert?: ArtistUpsertWithoutAlbumInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutAlbumInput, ArtistUpdateWithoutAlbumInput>, ArtistUncheckedUpdateWithoutAlbumInput>
  }

  export type TrackUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput> | TrackCreateWithoutAlbumInput[] | TrackUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAlbumInput | TrackCreateOrConnectWithoutAlbumInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutAlbumInput | TrackUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: TrackCreateManyAlbumInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutAlbumInput | TrackUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutAlbumInput | TrackUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrackUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput> | TrackCreateWithoutAlbumInput[] | TrackUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAlbumInput | TrackCreateOrConnectWithoutAlbumInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutAlbumInput | TrackUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: TrackCreateManyAlbumInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutAlbumInput | TrackUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutAlbumInput | TrackUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type AlbumCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AlbumUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutCustomerInput = {
    create?: XOR<EmployeeCreateWithoutCustomerInput, EmployeeUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutCustomerInput
    connect?: EmployeeWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type EmployeeUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<EmployeeCreateWithoutCustomerInput, EmployeeUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutCustomerInput
    upsert?: EmployeeUpsertWithoutCustomerInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutCustomerInput, EmployeeUpdateWithoutCustomerInput>, EmployeeUncheckedUpdateWithoutCustomerInput>
  }

  export type InvoiceUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type CustomerCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type EmployeeCreateNestedOneWithoutOther_EmployeeInput = {
    create?: XOR<EmployeeCreateWithoutOther_EmployeeInput, EmployeeUncheckedCreateWithoutOther_EmployeeInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutOther_EmployeeInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeCreateWithoutEmployeeInput, EmployeeUncheckedCreateWithoutEmployeeInput> | EmployeeCreateWithoutEmployeeInput[] | EmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeInput | EmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeCreateManyEmployeeInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeCreateWithoutEmployeeInput, EmployeeUncheckedCreateWithoutEmployeeInput> | EmployeeCreateWithoutEmployeeInput[] | EmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeInput | EmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeCreateManyEmployeeInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CustomerUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutEmployeeInput | CustomerUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutEmployeeInput | CustomerUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutEmployeeInput | CustomerUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type EmployeeUpdateOneWithoutOther_EmployeeNestedInput = {
    create?: XOR<EmployeeCreateWithoutOther_EmployeeInput, EmployeeUncheckedCreateWithoutOther_EmployeeInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutOther_EmployeeInput
    upsert?: EmployeeUpsertWithoutOther_EmployeeInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutOther_EmployeeInput, EmployeeUpdateWithoutOther_EmployeeInput>, EmployeeUncheckedUpdateWithoutOther_EmployeeInput>
  }

  export type EmployeeUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeCreateWithoutEmployeeInput, EmployeeUncheckedCreateWithoutEmployeeInput> | EmployeeCreateWithoutEmployeeInput[] | EmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeInput | EmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeCreateManyEmployeeInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutEmployeeInput | EmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutEmployeeInput | CustomerUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutEmployeeInput | CustomerUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutEmployeeInput | CustomerUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeCreateWithoutEmployeeInput, EmployeeUncheckedCreateWithoutEmployeeInput> | EmployeeCreateWithoutEmployeeInput[] | EmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeInput | EmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeCreateManyEmployeeInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutEmployeeInput | EmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type TrackCreateNestedManyWithoutGenreInput = {
    create?: XOR<TrackCreateWithoutGenreInput, TrackUncheckedCreateWithoutGenreInput> | TrackCreateWithoutGenreInput[] | TrackUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutGenreInput | TrackCreateOrConnectWithoutGenreInput[]
    createMany?: TrackCreateManyGenreInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type TrackUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<TrackCreateWithoutGenreInput, TrackUncheckedCreateWithoutGenreInput> | TrackCreateWithoutGenreInput[] | TrackUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutGenreInput | TrackCreateOrConnectWithoutGenreInput[]
    createMany?: TrackCreateManyGenreInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type TrackUpdateManyWithoutGenreNestedInput = {
    create?: XOR<TrackCreateWithoutGenreInput, TrackUncheckedCreateWithoutGenreInput> | TrackCreateWithoutGenreInput[] | TrackUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutGenreInput | TrackCreateOrConnectWithoutGenreInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutGenreInput | TrackUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: TrackCreateManyGenreInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutGenreInput | TrackUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutGenreInput | TrackUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type TrackUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<TrackCreateWithoutGenreInput, TrackUncheckedCreateWithoutGenreInput> | TrackCreateWithoutGenreInput[] | TrackUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutGenreInput | TrackCreateOrConnectWithoutGenreInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutGenreInput | TrackUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: TrackCreateManyGenreInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutGenreInput | TrackUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutGenreInput | TrackUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<CustomerCreateWithoutInvoiceInput, CustomerUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoiceInput
    connect?: CustomerWhereUniqueInput
  }

  export type InvoiceLineCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceLineCreateWithoutInvoiceInput, InvoiceLineUncheckedCreateWithoutInvoiceInput> | InvoiceLineCreateWithoutInvoiceInput[] | InvoiceLineUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceLineCreateOrConnectWithoutInvoiceInput | InvoiceLineCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceLineCreateManyInvoiceInputEnvelope
    connect?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
  }

  export type InvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceLineCreateWithoutInvoiceInput, InvoiceLineUncheckedCreateWithoutInvoiceInput> | InvoiceLineCreateWithoutInvoiceInput[] | InvoiceLineUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceLineCreateOrConnectWithoutInvoiceInput | InvoiceLineCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceLineCreateManyInvoiceInputEnvelope
    connect?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CustomerUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<CustomerCreateWithoutInvoiceInput, CustomerUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoiceInput
    upsert?: CustomerUpsertWithoutInvoiceInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutInvoiceInput, CustomerUpdateWithoutInvoiceInput>, CustomerUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceLineUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceLineCreateWithoutInvoiceInput, InvoiceLineUncheckedCreateWithoutInvoiceInput> | InvoiceLineCreateWithoutInvoiceInput[] | InvoiceLineUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceLineCreateOrConnectWithoutInvoiceInput | InvoiceLineCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceLineCreateManyInvoiceInputEnvelope
    set?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    disconnect?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    delete?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    connect?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    update?: InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceLineUpdateManyWithWhereWithoutInvoiceInput | InvoiceLineUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceLineScalarWhereInput | InvoiceLineScalarWhereInput[]
  }

  export type InvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceLineCreateWithoutInvoiceInput, InvoiceLineUncheckedCreateWithoutInvoiceInput> | InvoiceLineCreateWithoutInvoiceInput[] | InvoiceLineUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceLineCreateOrConnectWithoutInvoiceInput | InvoiceLineCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceLineCreateManyInvoiceInputEnvelope
    set?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    disconnect?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    delete?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    connect?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    update?: InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceLineUpdateManyWithWhereWithoutInvoiceInput | InvoiceLineUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceLineScalarWhereInput | InvoiceLineScalarWhereInput[]
  }

  export type TrackCreateNestedOneWithoutInvoiceLineInput = {
    create?: XOR<TrackCreateWithoutInvoiceLineInput, TrackUncheckedCreateWithoutInvoiceLineInput>
    connectOrCreate?: TrackCreateOrConnectWithoutInvoiceLineInput
    connect?: TrackWhereUniqueInput
  }

  export type InvoiceCreateNestedOneWithoutInvoiceLineInput = {
    create?: XOR<InvoiceCreateWithoutInvoiceLineInput, InvoiceUncheckedCreateWithoutInvoiceLineInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutInvoiceLineInput
    connect?: InvoiceWhereUniqueInput
  }

  export type TrackUpdateOneRequiredWithoutInvoiceLineNestedInput = {
    create?: XOR<TrackCreateWithoutInvoiceLineInput, TrackUncheckedCreateWithoutInvoiceLineInput>
    connectOrCreate?: TrackCreateOrConnectWithoutInvoiceLineInput
    upsert?: TrackUpsertWithoutInvoiceLineInput
    connect?: TrackWhereUniqueInput
    update?: XOR<XOR<TrackUpdateToOneWithWhereWithoutInvoiceLineInput, TrackUpdateWithoutInvoiceLineInput>, TrackUncheckedUpdateWithoutInvoiceLineInput>
  }

  export type InvoiceUpdateOneRequiredWithoutInvoiceLineNestedInput = {
    create?: XOR<InvoiceCreateWithoutInvoiceLineInput, InvoiceUncheckedCreateWithoutInvoiceLineInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutInvoiceLineInput
    upsert?: InvoiceUpsertWithoutInvoiceLineInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutInvoiceLineInput, InvoiceUpdateWithoutInvoiceLineInput>, InvoiceUncheckedUpdateWithoutInvoiceLineInput>
  }

  export type TrackCreateNestedManyWithoutMediaTypeInput = {
    create?: XOR<TrackCreateWithoutMediaTypeInput, TrackUncheckedCreateWithoutMediaTypeInput> | TrackCreateWithoutMediaTypeInput[] | TrackUncheckedCreateWithoutMediaTypeInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutMediaTypeInput | TrackCreateOrConnectWithoutMediaTypeInput[]
    createMany?: TrackCreateManyMediaTypeInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type TrackUncheckedCreateNestedManyWithoutMediaTypeInput = {
    create?: XOR<TrackCreateWithoutMediaTypeInput, TrackUncheckedCreateWithoutMediaTypeInput> | TrackCreateWithoutMediaTypeInput[] | TrackUncheckedCreateWithoutMediaTypeInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutMediaTypeInput | TrackCreateOrConnectWithoutMediaTypeInput[]
    createMany?: TrackCreateManyMediaTypeInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type TrackUpdateManyWithoutMediaTypeNestedInput = {
    create?: XOR<TrackCreateWithoutMediaTypeInput, TrackUncheckedCreateWithoutMediaTypeInput> | TrackCreateWithoutMediaTypeInput[] | TrackUncheckedCreateWithoutMediaTypeInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutMediaTypeInput | TrackCreateOrConnectWithoutMediaTypeInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutMediaTypeInput | TrackUpsertWithWhereUniqueWithoutMediaTypeInput[]
    createMany?: TrackCreateManyMediaTypeInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutMediaTypeInput | TrackUpdateWithWhereUniqueWithoutMediaTypeInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutMediaTypeInput | TrackUpdateManyWithWhereWithoutMediaTypeInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type TrackUncheckedUpdateManyWithoutMediaTypeNestedInput = {
    create?: XOR<TrackCreateWithoutMediaTypeInput, TrackUncheckedCreateWithoutMediaTypeInput> | TrackCreateWithoutMediaTypeInput[] | TrackUncheckedCreateWithoutMediaTypeInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutMediaTypeInput | TrackCreateOrConnectWithoutMediaTypeInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutMediaTypeInput | TrackUpsertWithWhereUniqueWithoutMediaTypeInput[]
    createMany?: TrackCreateManyMediaTypeInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutMediaTypeInput | TrackUpdateWithWhereUniqueWithoutMediaTypeInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutMediaTypeInput | TrackUpdateManyWithWhereWithoutMediaTypeInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type PlaylistTrackCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistTrackCreateWithoutPlaylistInput, PlaylistTrackUncheckedCreateWithoutPlaylistInput> | PlaylistTrackCreateWithoutPlaylistInput[] | PlaylistTrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutPlaylistInput | PlaylistTrackCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistTrackCreateManyPlaylistInputEnvelope
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
  }

  export type PlaylistTrackUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistTrackCreateWithoutPlaylistInput, PlaylistTrackUncheckedCreateWithoutPlaylistInput> | PlaylistTrackCreateWithoutPlaylistInput[] | PlaylistTrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutPlaylistInput | PlaylistTrackCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistTrackCreateManyPlaylistInputEnvelope
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
  }

  export type PlaylistTrackUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistTrackCreateWithoutPlaylistInput, PlaylistTrackUncheckedCreateWithoutPlaylistInput> | PlaylistTrackCreateWithoutPlaylistInput[] | PlaylistTrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutPlaylistInput | PlaylistTrackCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistTrackUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistTrackUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistTrackCreateManyPlaylistInputEnvelope
    set?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    disconnect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    delete?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    update?: PlaylistTrackUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistTrackUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistTrackUpdateManyWithWhereWithoutPlaylistInput | PlaylistTrackUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistTrackScalarWhereInput | PlaylistTrackScalarWhereInput[]
  }

  export type PlaylistTrackUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistTrackCreateWithoutPlaylistInput, PlaylistTrackUncheckedCreateWithoutPlaylistInput> | PlaylistTrackCreateWithoutPlaylistInput[] | PlaylistTrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutPlaylistInput | PlaylistTrackCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistTrackUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistTrackUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistTrackCreateManyPlaylistInputEnvelope
    set?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    disconnect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    delete?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    update?: PlaylistTrackUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistTrackUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistTrackUpdateManyWithWhereWithoutPlaylistInput | PlaylistTrackUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistTrackScalarWhereInput | PlaylistTrackScalarWhereInput[]
  }

  export type TrackCreateNestedOneWithoutPlaylistTrackInput = {
    create?: XOR<TrackCreateWithoutPlaylistTrackInput, TrackUncheckedCreateWithoutPlaylistTrackInput>
    connectOrCreate?: TrackCreateOrConnectWithoutPlaylistTrackInput
    connect?: TrackWhereUniqueInput
  }

  export type PlaylistCreateNestedOneWithoutPlaylistTrackInput = {
    create?: XOR<PlaylistCreateWithoutPlaylistTrackInput, PlaylistUncheckedCreateWithoutPlaylistTrackInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutPlaylistTrackInput
    connect?: PlaylistWhereUniqueInput
  }

  export type TrackUpdateOneRequiredWithoutPlaylistTrackNestedInput = {
    create?: XOR<TrackCreateWithoutPlaylistTrackInput, TrackUncheckedCreateWithoutPlaylistTrackInput>
    connectOrCreate?: TrackCreateOrConnectWithoutPlaylistTrackInput
    upsert?: TrackUpsertWithoutPlaylistTrackInput
    connect?: TrackWhereUniqueInput
    update?: XOR<XOR<TrackUpdateToOneWithWhereWithoutPlaylistTrackInput, TrackUpdateWithoutPlaylistTrackInput>, TrackUncheckedUpdateWithoutPlaylistTrackInput>
  }

  export type PlaylistUpdateOneRequiredWithoutPlaylistTrackNestedInput = {
    create?: XOR<PlaylistCreateWithoutPlaylistTrackInput, PlaylistUncheckedCreateWithoutPlaylistTrackInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutPlaylistTrackInput
    upsert?: PlaylistUpsertWithoutPlaylistTrackInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutPlaylistTrackInput, PlaylistUpdateWithoutPlaylistTrackInput>, PlaylistUncheckedUpdateWithoutPlaylistTrackInput>
  }

  export type InvoiceLineCreateNestedManyWithoutTrackInput = {
    create?: XOR<InvoiceLineCreateWithoutTrackInput, InvoiceLineUncheckedCreateWithoutTrackInput> | InvoiceLineCreateWithoutTrackInput[] | InvoiceLineUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: InvoiceLineCreateOrConnectWithoutTrackInput | InvoiceLineCreateOrConnectWithoutTrackInput[]
    createMany?: InvoiceLineCreateManyTrackInputEnvelope
    connect?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
  }

  export type PlaylistTrackCreateNestedManyWithoutTrackInput = {
    create?: XOR<PlaylistTrackCreateWithoutTrackInput, PlaylistTrackUncheckedCreateWithoutTrackInput> | PlaylistTrackCreateWithoutTrackInput[] | PlaylistTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutTrackInput | PlaylistTrackCreateOrConnectWithoutTrackInput[]
    createMany?: PlaylistTrackCreateManyTrackInputEnvelope
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
  }

  export type MediaTypeCreateNestedOneWithoutTrackInput = {
    create?: XOR<MediaTypeCreateWithoutTrackInput, MediaTypeUncheckedCreateWithoutTrackInput>
    connectOrCreate?: MediaTypeCreateOrConnectWithoutTrackInput
    connect?: MediaTypeWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutTrackInput = {
    create?: XOR<GenreCreateWithoutTrackInput, GenreUncheckedCreateWithoutTrackInput>
    connectOrCreate?: GenreCreateOrConnectWithoutTrackInput
    connect?: GenreWhereUniqueInput
  }

  export type AlbumCreateNestedOneWithoutTrackInput = {
    create?: XOR<AlbumCreateWithoutTrackInput, AlbumUncheckedCreateWithoutTrackInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutTrackInput
    connect?: AlbumWhereUniqueInput
  }

  export type InvoiceLineUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<InvoiceLineCreateWithoutTrackInput, InvoiceLineUncheckedCreateWithoutTrackInput> | InvoiceLineCreateWithoutTrackInput[] | InvoiceLineUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: InvoiceLineCreateOrConnectWithoutTrackInput | InvoiceLineCreateOrConnectWithoutTrackInput[]
    createMany?: InvoiceLineCreateManyTrackInputEnvelope
    connect?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
  }

  export type PlaylistTrackUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<PlaylistTrackCreateWithoutTrackInput, PlaylistTrackUncheckedCreateWithoutTrackInput> | PlaylistTrackCreateWithoutTrackInput[] | PlaylistTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutTrackInput | PlaylistTrackCreateOrConnectWithoutTrackInput[]
    createMany?: PlaylistTrackCreateManyTrackInputEnvelope
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
  }

  export type InvoiceLineUpdateManyWithoutTrackNestedInput = {
    create?: XOR<InvoiceLineCreateWithoutTrackInput, InvoiceLineUncheckedCreateWithoutTrackInput> | InvoiceLineCreateWithoutTrackInput[] | InvoiceLineUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: InvoiceLineCreateOrConnectWithoutTrackInput | InvoiceLineCreateOrConnectWithoutTrackInput[]
    upsert?: InvoiceLineUpsertWithWhereUniqueWithoutTrackInput | InvoiceLineUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: InvoiceLineCreateManyTrackInputEnvelope
    set?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    disconnect?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    delete?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    connect?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    update?: InvoiceLineUpdateWithWhereUniqueWithoutTrackInput | InvoiceLineUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: InvoiceLineUpdateManyWithWhereWithoutTrackInput | InvoiceLineUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: InvoiceLineScalarWhereInput | InvoiceLineScalarWhereInput[]
  }

  export type PlaylistTrackUpdateManyWithoutTrackNestedInput = {
    create?: XOR<PlaylistTrackCreateWithoutTrackInput, PlaylistTrackUncheckedCreateWithoutTrackInput> | PlaylistTrackCreateWithoutTrackInput[] | PlaylistTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutTrackInput | PlaylistTrackCreateOrConnectWithoutTrackInput[]
    upsert?: PlaylistTrackUpsertWithWhereUniqueWithoutTrackInput | PlaylistTrackUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: PlaylistTrackCreateManyTrackInputEnvelope
    set?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    disconnect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    delete?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    update?: PlaylistTrackUpdateWithWhereUniqueWithoutTrackInput | PlaylistTrackUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: PlaylistTrackUpdateManyWithWhereWithoutTrackInput | PlaylistTrackUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: PlaylistTrackScalarWhereInput | PlaylistTrackScalarWhereInput[]
  }

  export type MediaTypeUpdateOneRequiredWithoutTrackNestedInput = {
    create?: XOR<MediaTypeCreateWithoutTrackInput, MediaTypeUncheckedCreateWithoutTrackInput>
    connectOrCreate?: MediaTypeCreateOrConnectWithoutTrackInput
    upsert?: MediaTypeUpsertWithoutTrackInput
    connect?: MediaTypeWhereUniqueInput
    update?: XOR<XOR<MediaTypeUpdateToOneWithWhereWithoutTrackInput, MediaTypeUpdateWithoutTrackInput>, MediaTypeUncheckedUpdateWithoutTrackInput>
  }

  export type GenreUpdateOneWithoutTrackNestedInput = {
    create?: XOR<GenreCreateWithoutTrackInput, GenreUncheckedCreateWithoutTrackInput>
    connectOrCreate?: GenreCreateOrConnectWithoutTrackInput
    upsert?: GenreUpsertWithoutTrackInput
    disconnect?: GenreWhereInput | boolean
    delete?: GenreWhereInput | boolean
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutTrackInput, GenreUpdateWithoutTrackInput>, GenreUncheckedUpdateWithoutTrackInput>
  }

  export type AlbumUpdateOneWithoutTrackNestedInput = {
    create?: XOR<AlbumCreateWithoutTrackInput, AlbumUncheckedCreateWithoutTrackInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutTrackInput
    upsert?: AlbumUpsertWithoutTrackInput
    disconnect?: AlbumWhereInput | boolean
    delete?: AlbumWhereInput | boolean
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutTrackInput, AlbumUpdateWithoutTrackInput>, AlbumUncheckedUpdateWithoutTrackInput>
  }

  export type InvoiceLineUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<InvoiceLineCreateWithoutTrackInput, InvoiceLineUncheckedCreateWithoutTrackInput> | InvoiceLineCreateWithoutTrackInput[] | InvoiceLineUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: InvoiceLineCreateOrConnectWithoutTrackInput | InvoiceLineCreateOrConnectWithoutTrackInput[]
    upsert?: InvoiceLineUpsertWithWhereUniqueWithoutTrackInput | InvoiceLineUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: InvoiceLineCreateManyTrackInputEnvelope
    set?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    disconnect?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    delete?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    connect?: InvoiceLineWhereUniqueInput | InvoiceLineWhereUniqueInput[]
    update?: InvoiceLineUpdateWithWhereUniqueWithoutTrackInput | InvoiceLineUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: InvoiceLineUpdateManyWithWhereWithoutTrackInput | InvoiceLineUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: InvoiceLineScalarWhereInput | InvoiceLineScalarWhereInput[]
  }

  export type PlaylistTrackUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<PlaylistTrackCreateWithoutTrackInput, PlaylistTrackUncheckedCreateWithoutTrackInput> | PlaylistTrackCreateWithoutTrackInput[] | PlaylistTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: PlaylistTrackCreateOrConnectWithoutTrackInput | PlaylistTrackCreateOrConnectWithoutTrackInput[]
    upsert?: PlaylistTrackUpsertWithWhereUniqueWithoutTrackInput | PlaylistTrackUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: PlaylistTrackCreateManyTrackInputEnvelope
    set?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    disconnect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    delete?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    connect?: PlaylistTrackWhereUniqueInput | PlaylistTrackWhereUniqueInput[]
    update?: PlaylistTrackUpdateWithWhereUniqueWithoutTrackInput | PlaylistTrackUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: PlaylistTrackUpdateManyWithWhereWithoutTrackInput | PlaylistTrackUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: PlaylistTrackScalarWhereInput | PlaylistTrackScalarWhereInput[]
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ArtistCreateWithoutAlbumInput = {
    Name?: string | null
  }

  export type ArtistUncheckedCreateWithoutAlbumInput = {
    ArtistId?: number
    Name?: string | null
  }

  export type ArtistCreateOrConnectWithoutAlbumInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutAlbumInput, ArtistUncheckedCreateWithoutAlbumInput>
  }

  export type TrackCreateWithoutAlbumInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineCreateNestedManyWithoutTrackInput
    PlaylistTrack?: PlaylistTrackCreateNestedManyWithoutTrackInput
    MediaType: MediaTypeCreateNestedOneWithoutTrackInput
    Genre?: GenreCreateNestedOneWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutAlbumInput = {
    TrackId?: number
    Name: string
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUncheckedCreateNestedManyWithoutTrackInput
    PlaylistTrack?: PlaylistTrackUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutAlbumInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput>
  }

  export type TrackCreateManyAlbumInputEnvelope = {
    data: TrackCreateManyAlbumInput | TrackCreateManyAlbumInput[]
  }

  export type ArtistUpsertWithoutAlbumInput = {
    update: XOR<ArtistUpdateWithoutAlbumInput, ArtistUncheckedUpdateWithoutAlbumInput>
    create: XOR<ArtistCreateWithoutAlbumInput, ArtistUncheckedCreateWithoutAlbumInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutAlbumInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutAlbumInput, ArtistUncheckedUpdateWithoutAlbumInput>
  }

  export type ArtistUpdateWithoutAlbumInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUncheckedUpdateWithoutAlbumInput = {
    ArtistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrackUpsertWithWhereUniqueWithoutAlbumInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutAlbumInput, TrackUncheckedUpdateWithoutAlbumInput>
    create: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutAlbumInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutAlbumInput, TrackUncheckedUpdateWithoutAlbumInput>
  }

  export type TrackUpdateManyWithWhereWithoutAlbumInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutAlbumInput>
  }

  export type TrackScalarWhereInput = {
    AND?: TrackScalarWhereInput | TrackScalarWhereInput[]
    OR?: TrackScalarWhereInput[]
    NOT?: TrackScalarWhereInput | TrackScalarWhereInput[]
    TrackId?: IntFilter<"Track"> | number
    Name?: StringFilter<"Track"> | string
    AlbumId?: IntNullableFilter<"Track"> | number | null
    MediaTypeId?: IntFilter<"Track"> | number
    GenreId?: IntNullableFilter<"Track"> | number | null
    Composer?: StringNullableFilter<"Track"> | string | null
    Milliseconds?: IntFilter<"Track"> | number
    Bytes?: IntNullableFilter<"Track"> | number | null
    UnitPrice?: DecimalFilter<"Track"> | Decimal | DecimalJsLike | number | string
  }

  export type AlbumCreateWithoutArtistInput = {
    Title: string
    Track?: TrackCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutArtistInput = {
    AlbumId?: number
    Title: string
    Track?: TrackUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumCreateManyArtistInputEnvelope = {
    data: AlbumCreateManyArtistInput | AlbumCreateManyArtistInput[]
  }

  export type AlbumUpsertWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
  }

  export type AlbumUpdateManyWithWhereWithoutArtistInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutArtistInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    AlbumId?: IntFilter<"Album"> | number
    Title?: StringFilter<"Album"> | string
    ArtistId?: IntFilter<"Album"> | number
  }

  export type EmployeeCreateWithoutCustomerInput = {
    LastName: string
    FirstName: string
    Title?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    Employee?: EmployeeCreateNestedOneWithoutOther_EmployeeInput
    other_Employee?: EmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutCustomerInput = {
    EmployeeId?: number
    LastName: string
    FirstName: string
    Title?: string | null
    ReportsTo?: number | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    other_Employee?: EmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutCustomerInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutCustomerInput, EmployeeUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceCreateWithoutCustomerInput = {
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutCustomerInput = {
    InvoiceId?: number
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceCreateManyCustomerInputEnvelope = {
    data: InvoiceCreateManyCustomerInput | InvoiceCreateManyCustomerInput[]
  }

  export type EmployeeUpsertWithoutCustomerInput = {
    update: XOR<EmployeeUpdateWithoutCustomerInput, EmployeeUncheckedUpdateWithoutCustomerInput>
    create: XOR<EmployeeCreateWithoutCustomerInput, EmployeeUncheckedCreateWithoutCustomerInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutCustomerInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutCustomerInput, EmployeeUncheckedUpdateWithoutCustomerInput>
  }

  export type EmployeeUpdateWithoutCustomerInput = {
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Employee?: EmployeeUpdateOneWithoutOther_EmployeeNestedInput
    other_Employee?: EmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutCustomerInput = {
    EmployeeId?: IntFieldUpdateOperationsInput | number
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    ReportsTo?: NullableIntFieldUpdateOperationsInput | number | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    other_Employee?: EmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutCustomerInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutCustomerInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    InvoiceId?: IntFilter<"Invoice"> | number
    CustomerId?: IntFilter<"Invoice"> | number
    InvoiceDate?: DateTimeFilter<"Invoice"> | Date | string
    BillingAddress?: StringNullableFilter<"Invoice"> | string | null
    BillingCity?: StringNullableFilter<"Invoice"> | string | null
    BillingState?: StringNullableFilter<"Invoice"> | string | null
    BillingCountry?: StringNullableFilter<"Invoice"> | string | null
    BillingPostalCode?: StringNullableFilter<"Invoice"> | string | null
    Total?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
  }

  export type CustomerCreateWithoutEmployeeInput = {
    FirstName: string
    LastName: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
    Invoice?: InvoiceCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutEmployeeInput = {
    CustomerId?: number
    FirstName: string
    LastName: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
    Invoice?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutEmployeeInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput>
  }

  export type CustomerCreateManyEmployeeInputEnvelope = {
    data: CustomerCreateManyEmployeeInput | CustomerCreateManyEmployeeInput[]
  }

  export type EmployeeCreateWithoutOther_EmployeeInput = {
    LastName: string
    FirstName: string
    Title?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    Customer?: CustomerCreateNestedManyWithoutEmployeeInput
    Employee?: EmployeeCreateNestedOneWithoutOther_EmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutOther_EmployeeInput = {
    EmployeeId?: number
    LastName: string
    FirstName: string
    Title?: string | null
    ReportsTo?: number | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    Customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutOther_EmployeeInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutOther_EmployeeInput, EmployeeUncheckedCreateWithoutOther_EmployeeInput>
  }

  export type EmployeeCreateWithoutEmployeeInput = {
    LastName: string
    FirstName: string
    Title?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    Customer?: CustomerCreateNestedManyWithoutEmployeeInput
    other_Employee?: EmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutEmployeeInput = {
    EmployeeId?: number
    LastName: string
    FirstName: string
    Title?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    Customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    other_Employee?: EmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutEmployeeInput, EmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeCreateManyEmployeeInputEnvelope = {
    data: EmployeeCreateManyEmployeeInput | EmployeeCreateManyEmployeeInput[]
  }

  export type CustomerUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutEmployeeInput, CustomerUncheckedUpdateWithoutEmployeeInput>
    create: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutEmployeeInput, CustomerUncheckedUpdateWithoutEmployeeInput>
  }

  export type CustomerUpdateManyWithWhereWithoutEmployeeInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    CustomerId?: IntFilter<"Customer"> | number
    FirstName?: StringFilter<"Customer"> | string
    LastName?: StringFilter<"Customer"> | string
    Company?: StringNullableFilter<"Customer"> | string | null
    Address?: StringNullableFilter<"Customer"> | string | null
    City?: StringNullableFilter<"Customer"> | string | null
    State?: StringNullableFilter<"Customer"> | string | null
    Country?: StringNullableFilter<"Customer"> | string | null
    PostalCode?: StringNullableFilter<"Customer"> | string | null
    Phone?: StringNullableFilter<"Customer"> | string | null
    Fax?: StringNullableFilter<"Customer"> | string | null
    Email?: StringFilter<"Customer"> | string
    SupportRepId?: IntNullableFilter<"Customer"> | number | null
  }

  export type EmployeeUpsertWithoutOther_EmployeeInput = {
    update: XOR<EmployeeUpdateWithoutOther_EmployeeInput, EmployeeUncheckedUpdateWithoutOther_EmployeeInput>
    create: XOR<EmployeeCreateWithoutOther_EmployeeInput, EmployeeUncheckedCreateWithoutOther_EmployeeInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutOther_EmployeeInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutOther_EmployeeInput, EmployeeUncheckedUpdateWithoutOther_EmployeeInput>
  }

  export type EmployeeUpdateWithoutOther_EmployeeInput = {
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    Employee?: EmployeeUpdateOneWithoutOther_EmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutOther_EmployeeInput = {
    EmployeeId?: IntFieldUpdateOperationsInput | number
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    ReportsTo?: NullableIntFieldUpdateOperationsInput | number | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutEmployeeInput, EmployeeUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeCreateWithoutEmployeeInput, EmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutEmployeeInput, EmployeeUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    EmployeeId?: IntFilter<"Employee"> | number
    LastName?: StringFilter<"Employee"> | string
    FirstName?: StringFilter<"Employee"> | string
    Title?: StringNullableFilter<"Employee"> | string | null
    ReportsTo?: IntNullableFilter<"Employee"> | number | null
    BirthDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    HireDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    Address?: StringNullableFilter<"Employee"> | string | null
    City?: StringNullableFilter<"Employee"> | string | null
    State?: StringNullableFilter<"Employee"> | string | null
    Country?: StringNullableFilter<"Employee"> | string | null
    PostalCode?: StringNullableFilter<"Employee"> | string | null
    Phone?: StringNullableFilter<"Employee"> | string | null
    Fax?: StringNullableFilter<"Employee"> | string | null
    Email?: StringNullableFilter<"Employee"> | string | null
  }

  export type TrackCreateWithoutGenreInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineCreateNestedManyWithoutTrackInput
    PlaylistTrack?: PlaylistTrackCreateNestedManyWithoutTrackInput
    MediaType: MediaTypeCreateNestedOneWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutGenreInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUncheckedCreateNestedManyWithoutTrackInput
    PlaylistTrack?: PlaylistTrackUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutGenreInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutGenreInput, TrackUncheckedCreateWithoutGenreInput>
  }

  export type TrackCreateManyGenreInputEnvelope = {
    data: TrackCreateManyGenreInput | TrackCreateManyGenreInput[]
  }

  export type TrackUpsertWithWhereUniqueWithoutGenreInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutGenreInput, TrackUncheckedUpdateWithoutGenreInput>
    create: XOR<TrackCreateWithoutGenreInput, TrackUncheckedCreateWithoutGenreInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutGenreInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutGenreInput, TrackUncheckedUpdateWithoutGenreInput>
  }

  export type TrackUpdateManyWithWhereWithoutGenreInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutGenreInput>
  }

  export type CustomerCreateWithoutInvoiceInput = {
    FirstName: string
    LastName: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
    Employee?: EmployeeCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutInvoiceInput = {
    CustomerId?: number
    FirstName: string
    LastName: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
    SupportRepId?: number | null
  }

  export type CustomerCreateOrConnectWithoutInvoiceInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutInvoiceInput, CustomerUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceLineCreateWithoutInvoiceInput = {
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
    Track: TrackCreateNestedOneWithoutInvoiceLineInput
  }

  export type InvoiceLineUncheckedCreateWithoutInvoiceInput = {
    InvoiceLineId?: number
    TrackId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type InvoiceLineCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceLineWhereUniqueInput
    create: XOR<InvoiceLineCreateWithoutInvoiceInput, InvoiceLineUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceLineCreateManyInvoiceInputEnvelope = {
    data: InvoiceLineCreateManyInvoiceInput | InvoiceLineCreateManyInvoiceInput[]
  }

  export type CustomerUpsertWithoutInvoiceInput = {
    update: XOR<CustomerUpdateWithoutInvoiceInput, CustomerUncheckedUpdateWithoutInvoiceInput>
    create: XOR<CustomerCreateWithoutInvoiceInput, CustomerUncheckedCreateWithoutInvoiceInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutInvoiceInput, CustomerUncheckedUpdateWithoutInvoiceInput>
  }

  export type CustomerUpdateWithoutInvoiceInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Employee?: EmployeeUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutInvoiceInput = {
    CustomerId?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    SupportRepId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceLineWhereUniqueInput
    update: XOR<InvoiceLineUpdateWithoutInvoiceInput, InvoiceLineUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceLineCreateWithoutInvoiceInput, InvoiceLineUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceLineWhereUniqueInput
    data: XOR<InvoiceLineUpdateWithoutInvoiceInput, InvoiceLineUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceLineUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceLineScalarWhereInput
    data: XOR<InvoiceLineUpdateManyMutationInput, InvoiceLineUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceLineScalarWhereInput = {
    AND?: InvoiceLineScalarWhereInput | InvoiceLineScalarWhereInput[]
    OR?: InvoiceLineScalarWhereInput[]
    NOT?: InvoiceLineScalarWhereInput | InvoiceLineScalarWhereInput[]
    InvoiceLineId?: IntFilter<"InvoiceLine"> | number
    InvoiceId?: IntFilter<"InvoiceLine"> | number
    TrackId?: IntFilter<"InvoiceLine"> | number
    UnitPrice?: DecimalFilter<"InvoiceLine"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntFilter<"InvoiceLine"> | number
  }

  export type TrackCreateWithoutInvoiceLineInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    PlaylistTrack?: PlaylistTrackCreateNestedManyWithoutTrackInput
    MediaType: MediaTypeCreateNestedOneWithoutTrackInput
    Genre?: GenreCreateNestedOneWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutInvoiceLineInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    PlaylistTrack?: PlaylistTrackUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutInvoiceLineInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutInvoiceLineInput, TrackUncheckedCreateWithoutInvoiceLineInput>
  }

  export type InvoiceCreateWithoutInvoiceLineInput = {
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    Customer: CustomerCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutInvoiceLineInput = {
    InvoiceId?: number
    CustomerId: number
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
  }

  export type InvoiceCreateOrConnectWithoutInvoiceLineInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutInvoiceLineInput, InvoiceUncheckedCreateWithoutInvoiceLineInput>
  }

  export type TrackUpsertWithoutInvoiceLineInput = {
    update: XOR<TrackUpdateWithoutInvoiceLineInput, TrackUncheckedUpdateWithoutInvoiceLineInput>
    create: XOR<TrackCreateWithoutInvoiceLineInput, TrackUncheckedCreateWithoutInvoiceLineInput>
    where?: TrackWhereInput
  }

  export type TrackUpdateToOneWithWhereWithoutInvoiceLineInput = {
    where?: TrackWhereInput
    data: XOR<TrackUpdateWithoutInvoiceLineInput, TrackUncheckedUpdateWithoutInvoiceLineInput>
  }

  export type TrackUpdateWithoutInvoiceLineInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PlaylistTrack?: PlaylistTrackUpdateManyWithoutTrackNestedInput
    MediaType?: MediaTypeUpdateOneRequiredWithoutTrackNestedInput
    Genre?: GenreUpdateOneWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutInvoiceLineInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PlaylistTrack?: PlaylistTrackUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type InvoiceUpsertWithoutInvoiceLineInput = {
    update: XOR<InvoiceUpdateWithoutInvoiceLineInput, InvoiceUncheckedUpdateWithoutInvoiceLineInput>
    create: XOR<InvoiceCreateWithoutInvoiceLineInput, InvoiceUncheckedCreateWithoutInvoiceLineInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutInvoiceLineInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutInvoiceLineInput, InvoiceUncheckedUpdateWithoutInvoiceLineInput>
  }

  export type InvoiceUpdateWithoutInvoiceLineInput = {
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Customer?: CustomerUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutInvoiceLineInput = {
    InvoiceId?: IntFieldUpdateOperationsInput | number
    CustomerId?: IntFieldUpdateOperationsInput | number
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TrackCreateWithoutMediaTypeInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineCreateNestedManyWithoutTrackInput
    PlaylistTrack?: PlaylistTrackCreateNestedManyWithoutTrackInput
    Genre?: GenreCreateNestedOneWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutMediaTypeInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUncheckedCreateNestedManyWithoutTrackInput
    PlaylistTrack?: PlaylistTrackUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutMediaTypeInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutMediaTypeInput, TrackUncheckedCreateWithoutMediaTypeInput>
  }

  export type TrackCreateManyMediaTypeInputEnvelope = {
    data: TrackCreateManyMediaTypeInput | TrackCreateManyMediaTypeInput[]
  }

  export type TrackUpsertWithWhereUniqueWithoutMediaTypeInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutMediaTypeInput, TrackUncheckedUpdateWithoutMediaTypeInput>
    create: XOR<TrackCreateWithoutMediaTypeInput, TrackUncheckedCreateWithoutMediaTypeInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutMediaTypeInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutMediaTypeInput, TrackUncheckedUpdateWithoutMediaTypeInput>
  }

  export type TrackUpdateManyWithWhereWithoutMediaTypeInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutMediaTypeInput>
  }

  export type PlaylistTrackCreateWithoutPlaylistInput = {
    Track: TrackCreateNestedOneWithoutPlaylistTrackInput
  }

  export type PlaylistTrackUncheckedCreateWithoutPlaylistInput = {
    TrackId: number
  }

  export type PlaylistTrackCreateOrConnectWithoutPlaylistInput = {
    where: PlaylistTrackWhereUniqueInput
    create: XOR<PlaylistTrackCreateWithoutPlaylistInput, PlaylistTrackUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistTrackCreateManyPlaylistInputEnvelope = {
    data: PlaylistTrackCreateManyPlaylistInput | PlaylistTrackCreateManyPlaylistInput[]
  }

  export type PlaylistTrackUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistTrackWhereUniqueInput
    update: XOR<PlaylistTrackUpdateWithoutPlaylistInput, PlaylistTrackUncheckedUpdateWithoutPlaylistInput>
    create: XOR<PlaylistTrackCreateWithoutPlaylistInput, PlaylistTrackUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistTrackUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistTrackWhereUniqueInput
    data: XOR<PlaylistTrackUpdateWithoutPlaylistInput, PlaylistTrackUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistTrackUpdateManyWithWhereWithoutPlaylistInput = {
    where: PlaylistTrackScalarWhereInput
    data: XOR<PlaylistTrackUpdateManyMutationInput, PlaylistTrackUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type PlaylistTrackScalarWhereInput = {
    AND?: PlaylistTrackScalarWhereInput | PlaylistTrackScalarWhereInput[]
    OR?: PlaylistTrackScalarWhereInput[]
    NOT?: PlaylistTrackScalarWhereInput | PlaylistTrackScalarWhereInput[]
    PlaylistId?: IntFilter<"PlaylistTrack"> | number
    TrackId?: IntFilter<"PlaylistTrack"> | number
  }

  export type TrackCreateWithoutPlaylistTrackInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineCreateNestedManyWithoutTrackInput
    MediaType: MediaTypeCreateNestedOneWithoutTrackInput
    Genre?: GenreCreateNestedOneWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutPlaylistTrackInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutPlaylistTrackInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutPlaylistTrackInput, TrackUncheckedCreateWithoutPlaylistTrackInput>
  }

  export type PlaylistCreateWithoutPlaylistTrackInput = {
    Name?: string | null
  }

  export type PlaylistUncheckedCreateWithoutPlaylistTrackInput = {
    PlaylistId?: number
    Name?: string | null
  }

  export type PlaylistCreateOrConnectWithoutPlaylistTrackInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutPlaylistTrackInput, PlaylistUncheckedCreateWithoutPlaylistTrackInput>
  }

  export type TrackUpsertWithoutPlaylistTrackInput = {
    update: XOR<TrackUpdateWithoutPlaylistTrackInput, TrackUncheckedUpdateWithoutPlaylistTrackInput>
    create: XOR<TrackCreateWithoutPlaylistTrackInput, TrackUncheckedCreateWithoutPlaylistTrackInput>
    where?: TrackWhereInput
  }

  export type TrackUpdateToOneWithWhereWithoutPlaylistTrackInput = {
    where?: TrackWhereInput
    data: XOR<TrackUpdateWithoutPlaylistTrackInput, TrackUncheckedUpdateWithoutPlaylistTrackInput>
  }

  export type TrackUpdateWithoutPlaylistTrackInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUpdateManyWithoutTrackNestedInput
    MediaType?: MediaTypeUpdateOneRequiredWithoutTrackNestedInput
    Genre?: GenreUpdateOneWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutPlaylistTrackInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type PlaylistUpsertWithoutPlaylistTrackInput = {
    update: XOR<PlaylistUpdateWithoutPlaylistTrackInput, PlaylistUncheckedUpdateWithoutPlaylistTrackInput>
    create: XOR<PlaylistCreateWithoutPlaylistTrackInput, PlaylistUncheckedCreateWithoutPlaylistTrackInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutPlaylistTrackInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutPlaylistTrackInput, PlaylistUncheckedUpdateWithoutPlaylistTrackInput>
  }

  export type PlaylistUpdateWithoutPlaylistTrackInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistUncheckedUpdateWithoutPlaylistTrackInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceLineCreateWithoutTrackInput = {
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
    Invoice: InvoiceCreateNestedOneWithoutInvoiceLineInput
  }

  export type InvoiceLineUncheckedCreateWithoutTrackInput = {
    InvoiceLineId?: number
    InvoiceId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type InvoiceLineCreateOrConnectWithoutTrackInput = {
    where: InvoiceLineWhereUniqueInput
    create: XOR<InvoiceLineCreateWithoutTrackInput, InvoiceLineUncheckedCreateWithoutTrackInput>
  }

  export type InvoiceLineCreateManyTrackInputEnvelope = {
    data: InvoiceLineCreateManyTrackInput | InvoiceLineCreateManyTrackInput[]
  }

  export type PlaylistTrackCreateWithoutTrackInput = {
    Playlist: PlaylistCreateNestedOneWithoutPlaylistTrackInput
  }

  export type PlaylistTrackUncheckedCreateWithoutTrackInput = {
    PlaylistId: number
  }

  export type PlaylistTrackCreateOrConnectWithoutTrackInput = {
    where: PlaylistTrackWhereUniqueInput
    create: XOR<PlaylistTrackCreateWithoutTrackInput, PlaylistTrackUncheckedCreateWithoutTrackInput>
  }

  export type PlaylistTrackCreateManyTrackInputEnvelope = {
    data: PlaylistTrackCreateManyTrackInput | PlaylistTrackCreateManyTrackInput[]
  }

  export type MediaTypeCreateWithoutTrackInput = {
    Name?: string | null
  }

  export type MediaTypeUncheckedCreateWithoutTrackInput = {
    MediaTypeId?: number
    Name?: string | null
  }

  export type MediaTypeCreateOrConnectWithoutTrackInput = {
    where: MediaTypeWhereUniqueInput
    create: XOR<MediaTypeCreateWithoutTrackInput, MediaTypeUncheckedCreateWithoutTrackInput>
  }

  export type GenreCreateWithoutTrackInput = {
    Name?: string | null
  }

  export type GenreUncheckedCreateWithoutTrackInput = {
    GenreId?: number
    Name?: string | null
  }

  export type GenreCreateOrConnectWithoutTrackInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutTrackInput, GenreUncheckedCreateWithoutTrackInput>
  }

  export type AlbumCreateWithoutTrackInput = {
    Title: string
    Artist: ArtistCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutTrackInput = {
    AlbumId?: number
    Title: string
    ArtistId: number
  }

  export type AlbumCreateOrConnectWithoutTrackInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutTrackInput, AlbumUncheckedCreateWithoutTrackInput>
  }

  export type InvoiceLineUpsertWithWhereUniqueWithoutTrackInput = {
    where: InvoiceLineWhereUniqueInput
    update: XOR<InvoiceLineUpdateWithoutTrackInput, InvoiceLineUncheckedUpdateWithoutTrackInput>
    create: XOR<InvoiceLineCreateWithoutTrackInput, InvoiceLineUncheckedCreateWithoutTrackInput>
  }

  export type InvoiceLineUpdateWithWhereUniqueWithoutTrackInput = {
    where: InvoiceLineWhereUniqueInput
    data: XOR<InvoiceLineUpdateWithoutTrackInput, InvoiceLineUncheckedUpdateWithoutTrackInput>
  }

  export type InvoiceLineUpdateManyWithWhereWithoutTrackInput = {
    where: InvoiceLineScalarWhereInput
    data: XOR<InvoiceLineUpdateManyMutationInput, InvoiceLineUncheckedUpdateManyWithoutTrackInput>
  }

  export type PlaylistTrackUpsertWithWhereUniqueWithoutTrackInput = {
    where: PlaylistTrackWhereUniqueInput
    update: XOR<PlaylistTrackUpdateWithoutTrackInput, PlaylistTrackUncheckedUpdateWithoutTrackInput>
    create: XOR<PlaylistTrackCreateWithoutTrackInput, PlaylistTrackUncheckedCreateWithoutTrackInput>
  }

  export type PlaylistTrackUpdateWithWhereUniqueWithoutTrackInput = {
    where: PlaylistTrackWhereUniqueInput
    data: XOR<PlaylistTrackUpdateWithoutTrackInput, PlaylistTrackUncheckedUpdateWithoutTrackInput>
  }

  export type PlaylistTrackUpdateManyWithWhereWithoutTrackInput = {
    where: PlaylistTrackScalarWhereInput
    data: XOR<PlaylistTrackUpdateManyMutationInput, PlaylistTrackUncheckedUpdateManyWithoutTrackInput>
  }

  export type MediaTypeUpsertWithoutTrackInput = {
    update: XOR<MediaTypeUpdateWithoutTrackInput, MediaTypeUncheckedUpdateWithoutTrackInput>
    create: XOR<MediaTypeCreateWithoutTrackInput, MediaTypeUncheckedCreateWithoutTrackInput>
    where?: MediaTypeWhereInput
  }

  export type MediaTypeUpdateToOneWithWhereWithoutTrackInput = {
    where?: MediaTypeWhereInput
    data: XOR<MediaTypeUpdateWithoutTrackInput, MediaTypeUncheckedUpdateWithoutTrackInput>
  }

  export type MediaTypeUpdateWithoutTrackInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaTypeUncheckedUpdateWithoutTrackInput = {
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUpsertWithoutTrackInput = {
    update: XOR<GenreUpdateWithoutTrackInput, GenreUncheckedUpdateWithoutTrackInput>
    create: XOR<GenreCreateWithoutTrackInput, GenreUncheckedCreateWithoutTrackInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutTrackInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutTrackInput, GenreUncheckedUpdateWithoutTrackInput>
  }

  export type GenreUpdateWithoutTrackInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUncheckedUpdateWithoutTrackInput = {
    GenreId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumUpsertWithoutTrackInput = {
    update: XOR<AlbumUpdateWithoutTrackInput, AlbumUncheckedUpdateWithoutTrackInput>
    create: XOR<AlbumCreateWithoutTrackInput, AlbumUncheckedCreateWithoutTrackInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutTrackInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutTrackInput, AlbumUncheckedUpdateWithoutTrackInput>
  }

  export type AlbumUpdateWithoutTrackInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Artist?: ArtistUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutTrackInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    ArtistId?: IntFieldUpdateOperationsInput | number
  }

  export type TrackCreateManyAlbumInput = {
    TrackId?: number
    Name: string
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
  }

  export type TrackUpdateWithoutAlbumInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUpdateManyWithoutTrackNestedInput
    PlaylistTrack?: PlaylistTrackUpdateManyWithoutTrackNestedInput
    MediaType?: MediaTypeUpdateOneRequiredWithoutTrackNestedInput
    Genre?: GenreUpdateOneWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutAlbumInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUncheckedUpdateManyWithoutTrackNestedInput
    PlaylistTrack?: PlaylistTrackUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutAlbumInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AlbumCreateManyArtistInput = {
    AlbumId?: number
    Title: string
  }

  export type AlbumUpdateWithoutArtistInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Track?: TrackUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutArtistInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Track?: TrackUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutArtistInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceCreateManyCustomerInput = {
    InvoiceId?: number
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
  }

  export type InvoiceUpdateWithoutCustomerInput = {
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutCustomerInput = {
    InvoiceId?: IntFieldUpdateOperationsInput | number
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerInput = {
    InvoiceId?: IntFieldUpdateOperationsInput | number
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CustomerCreateManyEmployeeInput = {
    CustomerId?: number
    FirstName: string
    LastName: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
  }

  export type EmployeeCreateManyEmployeeInput = {
    EmployeeId?: number
    LastName: string
    FirstName: string
    Title?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
  }

  export type CustomerUpdateWithoutEmployeeInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Invoice?: InvoiceUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutEmployeeInput = {
    CustomerId?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Invoice?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutEmployeeInput = {
    CustomerId?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUpdateWithoutEmployeeInput = {
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    other_Employee?: EmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutEmployeeInput = {
    EmployeeId?: IntFieldUpdateOperationsInput | number
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    other_Employee?: EmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutEmployeeInput = {
    EmployeeId?: IntFieldUpdateOperationsInput | number
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrackCreateManyGenreInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
  }

  export type TrackUpdateWithoutGenreInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUpdateManyWithoutTrackNestedInput
    PlaylistTrack?: PlaylistTrackUpdateManyWithoutTrackNestedInput
    MediaType?: MediaTypeUpdateOneRequiredWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutGenreInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUncheckedUpdateManyWithoutTrackNestedInput
    PlaylistTrack?: PlaylistTrackUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutGenreInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InvoiceLineCreateManyInvoiceInput = {
    InvoiceLineId?: number
    TrackId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type InvoiceLineUpdateWithoutInvoiceInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Track?: TrackUpdateOneRequiredWithoutInvoiceLineNestedInput
  }

  export type InvoiceLineUncheckedUpdateWithoutInvoiceInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InvoiceLineUncheckedUpdateManyWithoutInvoiceInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TrackCreateManyMediaTypeInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
  }

  export type TrackUpdateWithoutMediaTypeInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUpdateManyWithoutTrackNestedInput
    PlaylistTrack?: PlaylistTrackUpdateManyWithoutTrackNestedInput
    Genre?: GenreUpdateOneWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutMediaTypeInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    InvoiceLine?: InvoiceLineUncheckedUpdateManyWithoutTrackNestedInput
    PlaylistTrack?: PlaylistTrackUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutMediaTypeInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PlaylistTrackCreateManyPlaylistInput = {
    TrackId: number
  }

  export type PlaylistTrackUpdateWithoutPlaylistInput = {
    Track?: TrackUpdateOneRequiredWithoutPlaylistTrackNestedInput
  }

  export type PlaylistTrackUncheckedUpdateWithoutPlaylistInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistTrackUncheckedUpdateManyWithoutPlaylistInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
  }

  export type InvoiceLineCreateManyTrackInput = {
    InvoiceLineId?: number
    InvoiceId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type PlaylistTrackCreateManyTrackInput = {
    PlaylistId: number
  }

  export type InvoiceLineUpdateWithoutTrackInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Invoice?: InvoiceUpdateOneRequiredWithoutInvoiceLineNestedInput
  }

  export type InvoiceLineUncheckedUpdateWithoutTrackInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    InvoiceId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InvoiceLineUncheckedUpdateManyWithoutTrackInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    InvoiceId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistTrackUpdateWithoutTrackInput = {
    Playlist?: PlaylistUpdateOneRequiredWithoutPlaylistTrackNestedInput
  }

  export type PlaylistTrackUncheckedUpdateWithoutTrackInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistTrackUncheckedUpdateManyWithoutTrackInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
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