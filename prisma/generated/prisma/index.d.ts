
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model LessonType
 * 
 */
export type LessonType = $Result.DefaultSelection<Prisma.$LessonTypePayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Completed
 * 
 */
export type Completed = $Result.DefaultSelection<Prisma.$CompletedPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model QA
 * 
 */
export type QA = $Result.DefaultSelection<Prisma.$QAPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model Support
 * 
 */
export type Support = $Result.DefaultSelection<Prisma.$SupportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUBSCRIBER: 'SUBSCRIBER',
  AUTHOR: 'AUTHOR',
  INSTRUCTOR: 'INSTRUCTOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Difficulty: {
  ALL_LEVELS: 'ALL_LEVELS',
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCE: 'ADVANCE'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessonType`: Exposes CRUD operations for the **LessonType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonTypes
    * const lessonTypes = await prisma.lessonType.findMany()
    * ```
    */
  get lessonType(): Prisma.LessonTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completed`: Exposes CRUD operations for the **Completed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Completeds
    * const completeds = await prisma.completed.findMany()
    * ```
    */
  get completed(): Prisma.CompletedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qA`: Exposes CRUD operations for the **QA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QAS
    * const qAS = await prisma.qA.findMany()
    * ```
    */
  get qA(): Prisma.QADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.support`: Exposes CRUD operations for the **Support** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Supports
    * const supports = await prisma.support.findMany()
    * ```
    */
  get support(): Prisma.SupportDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Module: 'Module',
    Course: 'Course',
    Lesson: 'Lesson',
    LessonType: 'LessonType',
    Rating: 'Rating',
    Category: 'Category',
    Completed: 'Completed',
    Post: 'Post',
    QA: 'QA',
    Answer: 'Answer',
    Support: 'Support'
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
      modelProps: "user" | "module" | "course" | "lesson" | "lessonType" | "rating" | "category" | "completed" | "post" | "qA" | "answer" | "support"
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
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      LessonType: {
        payload: Prisma.$LessonTypePayload<ExtArgs>
        fields: Prisma.LessonTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTypePayload>
          }
          findFirst: {
            args: Prisma.LessonTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTypePayload>
          }
          findMany: {
            args: Prisma.LessonTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTypePayload>[]
          }
          create: {
            args: Prisma.LessonTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTypePayload>
          }
          createMany: {
            args: Prisma.LessonTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTypePayload>[]
          }
          delete: {
            args: Prisma.LessonTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTypePayload>
          }
          update: {
            args: Prisma.LessonTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTypePayload>
          }
          deleteMany: {
            args: Prisma.LessonTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTypePayload>[]
          }
          upsert: {
            args: Prisma.LessonTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTypePayload>
          }
          aggregate: {
            args: Prisma.LessonTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonType>
          }
          groupBy: {
            args: Prisma.LessonTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonTypeCountArgs<ExtArgs>
            result: $Utils.Optional<LessonTypeCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Completed: {
        payload: Prisma.$CompletedPayload<ExtArgs>
        fields: Prisma.CompletedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPayload>
          }
          findFirst: {
            args: Prisma.CompletedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPayload>
          }
          findMany: {
            args: Prisma.CompletedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPayload>[]
          }
          create: {
            args: Prisma.CompletedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPayload>
          }
          createMany: {
            args: Prisma.CompletedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPayload>[]
          }
          delete: {
            args: Prisma.CompletedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPayload>
          }
          update: {
            args: Prisma.CompletedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPayload>
          }
          deleteMany: {
            args: Prisma.CompletedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompletedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPayload>[]
          }
          upsert: {
            args: Prisma.CompletedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedPayload>
          }
          aggregate: {
            args: Prisma.CompletedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompleted>
          }
          groupBy: {
            args: Prisma.CompletedGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      QA: {
        payload: Prisma.$QAPayload<ExtArgs>
        fields: Prisma.QAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPayload>
          }
          findFirst: {
            args: Prisma.QAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPayload>
          }
          findMany: {
            args: Prisma.QAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPayload>[]
          }
          create: {
            args: Prisma.QACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPayload>
          }
          createMany: {
            args: Prisma.QACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QACreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPayload>[]
          }
          delete: {
            args: Prisma.QADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPayload>
          }
          update: {
            args: Prisma.QAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPayload>
          }
          deleteMany: {
            args: Prisma.QADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QAUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPayload>[]
          }
          upsert: {
            args: Prisma.QAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPayload>
          }
          aggregate: {
            args: Prisma.QAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQA>
          }
          groupBy: {
            args: Prisma.QAGroupByArgs<ExtArgs>
            result: $Utils.Optional<QAGroupByOutputType>[]
          }
          count: {
            args: Prisma.QACountArgs<ExtArgs>
            result: $Utils.Optional<QACountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      Support: {
        payload: Prisma.$SupportPayload<ExtArgs>
        fields: Prisma.SupportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>
          }
          findFirst: {
            args: Prisma.SupportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>
          }
          findMany: {
            args: Prisma.SupportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>[]
          }
          create: {
            args: Prisma.SupportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>
          }
          createMany: {
            args: Prisma.SupportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>[]
          }
          delete: {
            args: Prisma.SupportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>
          }
          update: {
            args: Prisma.SupportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>
          }
          deleteMany: {
            args: Prisma.SupportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>[]
          }
          upsert: {
            args: Prisma.SupportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>
          }
          aggregate: {
            args: Prisma.SupportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupport>
          }
          groupBy: {
            args: Prisma.SupportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportCountArgs<ExtArgs>
            result: $Utils.Optional<SupportCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    module?: ModuleOmit
    course?: CourseOmit
    lesson?: LessonOmit
    lessonType?: LessonTypeOmit
    rating?: RatingOmit
    category?: CategoryOmit
    completed?: CompletedOmit
    post?: PostOmit
    qA?: QAOmit
    answer?: AnswerOmit
    support?: SupportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    Answer: number
    Completed: number
    Course: number
    posts: number
    QA: number
    Support: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answer?: boolean | UserCountOutputTypeCountAnswerArgs
    Completed?: boolean | UserCountOutputTypeCountCompletedArgs
    Course?: boolean | UserCountOutputTypeCountCourseArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    QA?: boolean | UserCountOutputTypeCountQAArgs
    Support?: boolean | UserCountOutputTypeCountSupportArgs
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
  export type UserCountOutputTypeCountAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompletedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QAWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSupportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    lessons: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | ModuleCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    Completed: number
    modules: number
    QA: number
    ratings: number
    categories: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Completed?: boolean | CourseCountOutputTypeCountCompletedArgs
    modules?: boolean | CourseCountOutputTypeCountModulesArgs
    QA?: boolean | CourseCountOutputTypeCountQAArgs
    ratings?: boolean | CourseCountOutputTypeCountRatingsArgs
    categories?: boolean | CourseCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCompletedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountQAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QAWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    QA: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    QA?: boolean | LessonCountOutputTypeCountQAArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountQAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QAWhereInput
  }


  /**
   * Count Type LessonTypeCountOutputType
   */

  export type LessonTypeCountOutputType = {
    Lessons: number
  }

  export type LessonTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lessons?: boolean | LessonTypeCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * LessonTypeCountOutputType without action
   */
  export type LessonTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTypeCountOutputType
     */
    select?: LessonTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonTypeCountOutputType without action
   */
  export type LessonTypeCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    courses: number
    Post: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | CategoryCountOutputTypeCountCoursesArgs
    Post?: boolean | CategoryCountOutputTypeCountPostArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    categories: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | PostCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * Count Type QACountOutputType
   */

  export type QACountOutputType = {
    answers: number
  }

  export type QACountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QACountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QACountOutputType without action
   */
  export type QACountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QACountOutputType
     */
    select?: QACountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QACountOutputType without action
   */
  export type QACountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    createdAt: Date | null
    password: string | null
    passwordResetCode: string | null
    picture: string | null
    role: $Enums.Role | null
    stripeAccountId: string | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    createdAt: Date | null
    password: string | null
    passwordResetCode: string | null
    picture: string | null
    role: $Enums.Role | null
    stripeAccountId: string | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    password: number
    passwordResetCode: number
    picture: number
    role: number
    stripeAccountId: number
    stripeSeller: number
    stripeSession: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    password?: true
    passwordResetCode?: true
    picture?: true
    role?: true
    stripeAccountId?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    password?: true
    passwordResetCode?: true
    picture?: true
    role?: true
    stripeAccountId?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    password?: true
    passwordResetCode?: true
    picture?: true
    role?: true
    stripeAccountId?: true
    stripeSeller?: true
    stripeSession?: true
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
    id: number
    email: string
    name: string | null
    createdAt: Date
    password: string
    passwordResetCode: string | null
    picture: string
    role: $Enums.Role
    stripeAccountId: string | null
    stripeSeller: JsonValue | null
    stripeSession: JsonValue | null
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
    email?: boolean
    name?: boolean
    createdAt?: boolean
    password?: boolean
    passwordResetCode?: boolean
    picture?: boolean
    role?: boolean
    stripeAccountId?: boolean
    stripeSeller?: boolean
    stripeSession?: boolean
    updatedAt?: boolean
    Answer?: boolean | User$AnswerArgs<ExtArgs>
    Completed?: boolean | User$CompletedArgs<ExtArgs>
    Course?: boolean | User$CourseArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    QA?: boolean | User$QAArgs<ExtArgs>
    Support?: boolean | User$SupportArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    password?: boolean
    passwordResetCode?: boolean
    picture?: boolean
    role?: boolean
    stripeAccountId?: boolean
    stripeSeller?: boolean
    stripeSession?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    password?: boolean
    passwordResetCode?: boolean
    picture?: boolean
    role?: boolean
    stripeAccountId?: boolean
    stripeSeller?: boolean
    stripeSession?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    password?: boolean
    passwordResetCode?: boolean
    picture?: boolean
    role?: boolean
    stripeAccountId?: boolean
    stripeSeller?: boolean
    stripeSession?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "password" | "passwordResetCode" | "picture" | "role" | "stripeAccountId" | "stripeSeller" | "stripeSession" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answer?: boolean | User$AnswerArgs<ExtArgs>
    Completed?: boolean | User$CompletedArgs<ExtArgs>
    Course?: boolean | User$CourseArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    QA?: boolean | User$QAArgs<ExtArgs>
    Support?: boolean | User$SupportArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Answer: Prisma.$AnswerPayload<ExtArgs>[]
      Completed: Prisma.$CompletedPayload<ExtArgs>[]
      Course: Prisma.$CoursePayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      QA: Prisma.$QAPayload<ExtArgs>[]
      Support: Prisma.$SupportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      createdAt: Date
      password: string
      passwordResetCode: string | null
      picture: string
      role: $Enums.Role
      stripeAccountId: string | null
      stripeSeller: Prisma.JsonValue | null
      stripeSession: Prisma.JsonValue | null
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
    Answer<T extends User$AnswerArgs<ExtArgs> = {}>(args?: Subset<T, User$AnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Completed<T extends User$CompletedArgs<ExtArgs> = {}>(args?: Subset<T, User$CompletedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Course<T extends User$CourseArgs<ExtArgs> = {}>(args?: Subset<T, User$CourseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    QA<T extends User$QAArgs<ExtArgs> = {}>(args?: Subset<T, User$QAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Support<T extends User$SupportArgs<ExtArgs> = {}>(args?: Subset<T, User$SupportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly passwordResetCode: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly stripeAccountId: FieldRef<"User", 'String'>
    readonly stripeSeller: FieldRef<"User", 'Json'>
    readonly stripeSession: FieldRef<"User", 'Json'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * User.Answer
   */
  export type User$AnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * User.Completed
   */
  export type User$CompletedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completed
     */
    select?: CompletedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completed
     */
    omit?: CompletedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedInclude<ExtArgs> | null
    where?: CompletedWhereInput
    orderBy?: CompletedOrderByWithRelationInput | CompletedOrderByWithRelationInput[]
    cursor?: CompletedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedScalarFieldEnum | CompletedScalarFieldEnum[]
  }

  /**
   * User.Course
   */
  export type User$CourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.QA
   */
  export type User$QAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAInclude<ExtArgs> | null
    where?: QAWhereInput
    orderBy?: QAOrderByWithRelationInput | QAOrderByWithRelationInput[]
    cursor?: QAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QAScalarFieldEnum | QAScalarFieldEnum[]
  }

  /**
   * User.Support
   */
  export type User$SupportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    where?: SupportWhereInput
    orderBy?: SupportOrderByWithRelationInput | SupportOrderByWithRelationInput[]
    cursor?: SupportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupportScalarFieldEnum | SupportScalarFieldEnum[]
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
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type ModuleSumAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    courseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    courseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    courseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type ModuleSumAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: number
    title: string
    slug: string | null
    courseId: number
    createdAt: Date
    updatedAt: Date
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    lessons?: boolean | Module$lessonsArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "courseId" | "createdAt" | "updatedAt", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    lessons?: boolean | Module$lessonsArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      lessons: Prisma.$LessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string | null
      courseId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {ModuleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {ModuleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
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
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lessons<T extends Module$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Module$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Module model
   */ 
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'Int'>
    readonly title: FieldRef<"Module", 'String'>
    readonly slug: FieldRef<"Module", 'String'>
    readonly courseId: FieldRef<"Module", 'Int'>
    readonly createdAt: FieldRef<"Module", 'DateTime'>
    readonly updatedAt: FieldRef<"Module", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module createManyAndReturn
   */
  export type ModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module updateManyAndReturn
   */
  export type ModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module.lessons
   */
  export type Module$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    price: number | null
    displayPrice: number | null
    completed: number | null
    instructorId: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    price: number | null
    displayPrice: number | null
    completed: number[]
    instructorId: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    price: number | null
    onSale: boolean | null
    displayPrice: number | null
    image: string | null
    published: boolean | null
    difficulty: $Enums.Difficulty | null
    paid: boolean | null
    instructorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    price: number | null
    onSale: boolean | null
    displayPrice: number | null
    image: string | null
    published: boolean | null
    difficulty: $Enums.Difficulty | null
    paid: boolean | null
    instructorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    price: number
    onSale: number
    displayPrice: number
    image: number
    published: number
    completed: number
    difficulty: number
    paid: number
    instructorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    price?: true
    displayPrice?: true
    completed?: true
    instructorId?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    price?: true
    displayPrice?: true
    completed?: true
    instructorId?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    onSale?: true
    displayPrice?: true
    image?: true
    published?: true
    difficulty?: true
    paid?: true
    instructorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    onSale?: true
    displayPrice?: true
    image?: true
    published?: true
    difficulty?: true
    paid?: true
    instructorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    onSale?: true
    displayPrice?: true
    image?: true
    published?: true
    completed?: true
    difficulty?: true
    paid?: true
    instructorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    name: string
    slug: string | null
    description: string
    price: number
    onSale: boolean
    displayPrice: number | null
    image: string | null
    published: boolean
    completed: number[]
    difficulty: $Enums.Difficulty
    paid: boolean
    instructorId: number
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    onSale?: boolean
    displayPrice?: boolean
    image?: boolean
    published?: boolean
    completed?: boolean
    difficulty?: boolean
    paid?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Completed?: boolean | Course$CompletedArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    modules?: boolean | Course$modulesArgs<ExtArgs>
    QA?: boolean | Course$QAArgs<ExtArgs>
    ratings?: boolean | Course$ratingsArgs<ExtArgs>
    categories?: boolean | Course$categoriesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    onSale?: boolean
    displayPrice?: boolean
    image?: boolean
    published?: boolean
    completed?: boolean
    difficulty?: boolean
    paid?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    onSale?: boolean
    displayPrice?: boolean
    image?: boolean
    published?: boolean
    completed?: boolean
    difficulty?: boolean
    paid?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    onSale?: boolean
    displayPrice?: boolean
    image?: boolean
    published?: boolean
    completed?: boolean
    difficulty?: boolean
    paid?: boolean
    instructorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "price" | "onSale" | "displayPrice" | "image" | "published" | "completed" | "difficulty" | "paid" | "instructorId" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Completed?: boolean | Course$CompletedArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    modules?: boolean | Course$modulesArgs<ExtArgs>
    QA?: boolean | Course$QAArgs<ExtArgs>
    ratings?: boolean | Course$ratingsArgs<ExtArgs>
    categories?: boolean | Course$categoriesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      Completed: Prisma.$CompletedPayload<ExtArgs>[]
      instructor: Prisma.$UserPayload<ExtArgs>
      modules: Prisma.$ModulePayload<ExtArgs>[]
      QA: Prisma.$QAPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string | null
      description: string
      price: number
      onSale: boolean
      displayPrice: number | null
      image: string | null
      published: boolean
      completed: number[]
      difficulty: $Enums.Difficulty
      paid: boolean
      instructorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Completed<T extends Course$CompletedArgs<ExtArgs> = {}>(args?: Subset<T, Course$CompletedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instructor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modules<T extends Course$modulesArgs<ExtArgs> = {}>(args?: Subset<T, Course$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    QA<T extends Course$QAArgs<ExtArgs> = {}>(args?: Subset<T, Course$QAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Course$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Course$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Course$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Course$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */ 
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly name: FieldRef<"Course", 'String'>
    readonly slug: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Float'>
    readonly onSale: FieldRef<"Course", 'Boolean'>
    readonly displayPrice: FieldRef<"Course", 'Float'>
    readonly image: FieldRef<"Course", 'String'>
    readonly published: FieldRef<"Course", 'Boolean'>
    readonly completed: FieldRef<"Course", 'Int[]'>
    readonly difficulty: FieldRef<"Course", 'Difficulty'>
    readonly paid: FieldRef<"Course", 'Boolean'>
    readonly instructorId: FieldRef<"Course", 'Int'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.Completed
   */
  export type Course$CompletedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completed
     */
    select?: CompletedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completed
     */
    omit?: CompletedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedInclude<ExtArgs> | null
    where?: CompletedWhereInput
    orderBy?: CompletedOrderByWithRelationInput | CompletedOrderByWithRelationInput[]
    cursor?: CompletedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedScalarFieldEnum | CompletedScalarFieldEnum[]
  }

  /**
   * Course.modules
   */
  export type Course$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Course.QA
   */
  export type Course$QAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAInclude<ExtArgs> | null
    where?: QAWhereInput
    orderBy?: QAOrderByWithRelationInput | QAOrderByWithRelationInput[]
    cursor?: QAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QAScalarFieldEnum | QAScalarFieldEnum[]
  }

  /**
   * Course.ratings
   */
  export type Course$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Course.categories
   */
  export type Course$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    id: number | null
    lessonTypeId: number | null
    moduleId: number | null
  }

  export type LessonSumAggregateOutputType = {
    id: number | null
    lessonTypeId: number | null
    moduleId: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    content: string | null
    video: string | null
    freePreview: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lessonTypeId: number | null
    moduleId: number | null
  }

  export type LessonMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    content: string | null
    video: string | null
    freePreview: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lessonTypeId: number | null
    moduleId: number | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    video: number
    freePreview: number
    createdAt: number
    updatedAt: number
    lessonTypeId: number
    moduleId: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    id?: true
    lessonTypeId?: true
    moduleId?: true
  }

  export type LessonSumAggregateInputType = {
    id?: true
    lessonTypeId?: true
    moduleId?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    video?: true
    freePreview?: true
    createdAt?: true
    updatedAt?: true
    lessonTypeId?: true
    moduleId?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    video?: true
    freePreview?: true
    createdAt?: true
    updatedAt?: true
    lessonTypeId?: true
    moduleId?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    video?: true
    freePreview?: true
    createdAt?: true
    updatedAt?: true
    lessonTypeId?: true
    moduleId?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: number
    title: string
    slug: string | null
    content: string
    video: string | null
    freePreview: boolean
    createdAt: Date
    updatedAt: Date
    lessonTypeId: number
    moduleId: number | null
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    video?: boolean
    freePreview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lessonTypeId?: boolean
    moduleId?: boolean
    lessonType?: boolean | LessonTypeDefaultArgs<ExtArgs>
    QA?: boolean | Lesson$QAArgs<ExtArgs>
    module?: boolean | Lesson$moduleArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    video?: boolean
    freePreview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lessonTypeId?: boolean
    moduleId?: boolean
    lessonType?: boolean | LessonTypeDefaultArgs<ExtArgs>
    module?: boolean | Lesson$moduleArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    video?: boolean
    freePreview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lessonTypeId?: boolean
    moduleId?: boolean
    lessonType?: boolean | LessonTypeDefaultArgs<ExtArgs>
    module?: boolean | Lesson$moduleArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    video?: boolean
    freePreview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lessonTypeId?: boolean
    moduleId?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "content" | "video" | "freePreview" | "createdAt" | "updatedAt" | "lessonTypeId" | "moduleId", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessonType?: boolean | LessonTypeDefaultArgs<ExtArgs>
    QA?: boolean | Lesson$QAArgs<ExtArgs>
    module?: boolean | Lesson$moduleArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessonType?: boolean | LessonTypeDefaultArgs<ExtArgs>
    module?: boolean | Lesson$moduleArgs<ExtArgs>
  }
  export type LessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessonType?: boolean | LessonTypeDefaultArgs<ExtArgs>
    module?: boolean | Lesson$moduleArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      lessonType: Prisma.$LessonTypePayload<ExtArgs>
      QA: Prisma.$QAPayload<ExtArgs>[]
      module: Prisma.$ModulePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string | null
      content: string
      video: string | null
      freePreview: boolean
      createdAt: Date
      updatedAt: Date
      lessonTypeId: number
      moduleId: number | null
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
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
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lessonType<T extends LessonTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonTypeDefaultArgs<ExtArgs>>): Prisma__LessonTypeClient<$Result.GetResult<Prisma.$LessonTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    QA<T extends Lesson$QAArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$QAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    module<T extends Lesson$moduleArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$moduleArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Lesson model
   */ 
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'Int'>
    readonly title: FieldRef<"Lesson", 'String'>
    readonly slug: FieldRef<"Lesson", 'String'>
    readonly content: FieldRef<"Lesson", 'String'>
    readonly video: FieldRef<"Lesson", 'String'>
    readonly freePreview: FieldRef<"Lesson", 'Boolean'>
    readonly createdAt: FieldRef<"Lesson", 'DateTime'>
    readonly updatedAt: FieldRef<"Lesson", 'DateTime'>
    readonly lessonTypeId: FieldRef<"Lesson", 'Int'>
    readonly moduleId: FieldRef<"Lesson", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson.QA
   */
  export type Lesson$QAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAInclude<ExtArgs> | null
    where?: QAWhereInput
    orderBy?: QAOrderByWithRelationInput | QAOrderByWithRelationInput[]
    cursor?: QAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QAScalarFieldEnum | QAScalarFieldEnum[]
  }

  /**
   * Lesson.module
   */
  export type Lesson$moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model LessonType
   */

  export type AggregateLessonType = {
    _count: LessonTypeCountAggregateOutputType | null
    _avg: LessonTypeAvgAggregateOutputType | null
    _sum: LessonTypeSumAggregateOutputType | null
    _min: LessonTypeMinAggregateOutputType | null
    _max: LessonTypeMaxAggregateOutputType | null
  }

  export type LessonTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type LessonTypeSumAggregateOutputType = {
    id: number | null
  }

  export type LessonTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LessonTypeAvgAggregateInputType = {
    id?: true
  }

  export type LessonTypeSumAggregateInputType = {
    id?: true
  }

  export type LessonTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LessonTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonType to aggregate.
     */
    where?: LessonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonTypes to fetch.
     */
    orderBy?: LessonTypeOrderByWithRelationInput | LessonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonTypes
    **/
    _count?: true | LessonTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonTypeMaxAggregateInputType
  }

  export type GetLessonTypeAggregateType<T extends LessonTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonType[P]>
      : GetScalarType<T[P], AggregateLessonType[P]>
  }




  export type LessonTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonTypeWhereInput
    orderBy?: LessonTypeOrderByWithAggregationInput | LessonTypeOrderByWithAggregationInput[]
    by: LessonTypeScalarFieldEnum[] | LessonTypeScalarFieldEnum
    having?: LessonTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonTypeCountAggregateInputType | true
    _avg?: LessonTypeAvgAggregateInputType
    _sum?: LessonTypeSumAggregateInputType
    _min?: LessonTypeMinAggregateInputType
    _max?: LessonTypeMaxAggregateInputType
  }

  export type LessonTypeGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: LessonTypeCountAggregateOutputType | null
    _avg: LessonTypeAvgAggregateOutputType | null
    _sum: LessonTypeSumAggregateOutputType | null
    _min: LessonTypeMinAggregateOutputType | null
    _max: LessonTypeMaxAggregateOutputType | null
  }

  type GetLessonTypeGroupByPayload<T extends LessonTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonTypeGroupByOutputType[P]>
            : GetScalarType<T[P], LessonTypeGroupByOutputType[P]>
        }
      >
    >


  export type LessonTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Lessons?: boolean | LessonType$LessonsArgs<ExtArgs>
    _count?: boolean | LessonTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonType"]>

  export type LessonTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lessonType"]>

  export type LessonTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lessonType"]>

  export type LessonTypeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LessonTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["lessonType"]>
  export type LessonTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lessons?: boolean | LessonType$LessonsArgs<ExtArgs>
    _count?: boolean | LessonTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LessonTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LessonTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonType"
    objects: {
      Lessons: Prisma.$LessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lessonType"]>
    composites: {}
  }

  type LessonTypeGetPayload<S extends boolean | null | undefined | LessonTypeDefaultArgs> = $Result.GetResult<Prisma.$LessonTypePayload, S>

  type LessonTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonTypeCountAggregateInputType | true
    }

  export interface LessonTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonType'], meta: { name: 'LessonType' } }
    /**
     * Find zero or one LessonType that matches the filter.
     * @param {LessonTypeFindUniqueArgs} args - Arguments to find a LessonType
     * @example
     * // Get one LessonType
     * const lessonType = await prisma.lessonType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonTypeFindUniqueArgs>(args: SelectSubset<T, LessonTypeFindUniqueArgs<ExtArgs>>): Prisma__LessonTypeClient<$Result.GetResult<Prisma.$LessonTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LessonType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonTypeFindUniqueOrThrowArgs} args - Arguments to find a LessonType
     * @example
     * // Get one LessonType
     * const lessonType = await prisma.lessonType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonTypeClient<$Result.GetResult<Prisma.$LessonTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonTypeFindFirstArgs} args - Arguments to find a LessonType
     * @example
     * // Get one LessonType
     * const lessonType = await prisma.lessonType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonTypeFindFirstArgs>(args?: SelectSubset<T, LessonTypeFindFirstArgs<ExtArgs>>): Prisma__LessonTypeClient<$Result.GetResult<Prisma.$LessonTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonTypeFindFirstOrThrowArgs} args - Arguments to find a LessonType
     * @example
     * // Get one LessonType
     * const lessonType = await prisma.lessonType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonTypeClient<$Result.GetResult<Prisma.$LessonTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LessonTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonTypes
     * const lessonTypes = await prisma.lessonType.findMany()
     * 
     * // Get first 10 LessonTypes
     * const lessonTypes = await prisma.lessonType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonTypeWithIdOnly = await prisma.lessonType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonTypeFindManyArgs>(args?: SelectSubset<T, LessonTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LessonType.
     * @param {LessonTypeCreateArgs} args - Arguments to create a LessonType.
     * @example
     * // Create one LessonType
     * const LessonType = await prisma.lessonType.create({
     *   data: {
     *     // ... data to create a LessonType
     *   }
     * })
     * 
     */
    create<T extends LessonTypeCreateArgs>(args: SelectSubset<T, LessonTypeCreateArgs<ExtArgs>>): Prisma__LessonTypeClient<$Result.GetResult<Prisma.$LessonTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LessonTypes.
     * @param {LessonTypeCreateManyArgs} args - Arguments to create many LessonTypes.
     * @example
     * // Create many LessonTypes
     * const lessonType = await prisma.lessonType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonTypeCreateManyArgs>(args?: SelectSubset<T, LessonTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonTypes and returns the data saved in the database.
     * @param {LessonTypeCreateManyAndReturnArgs} args - Arguments to create many LessonTypes.
     * @example
     * // Create many LessonTypes
     * const lessonType = await prisma.lessonType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonTypes and only return the `id`
     * const lessonTypeWithIdOnly = await prisma.lessonType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LessonType.
     * @param {LessonTypeDeleteArgs} args - Arguments to delete one LessonType.
     * @example
     * // Delete one LessonType
     * const LessonType = await prisma.lessonType.delete({
     *   where: {
     *     // ... filter to delete one LessonType
     *   }
     * })
     * 
     */
    delete<T extends LessonTypeDeleteArgs>(args: SelectSubset<T, LessonTypeDeleteArgs<ExtArgs>>): Prisma__LessonTypeClient<$Result.GetResult<Prisma.$LessonTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LessonType.
     * @param {LessonTypeUpdateArgs} args - Arguments to update one LessonType.
     * @example
     * // Update one LessonType
     * const lessonType = await prisma.lessonType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonTypeUpdateArgs>(args: SelectSubset<T, LessonTypeUpdateArgs<ExtArgs>>): Prisma__LessonTypeClient<$Result.GetResult<Prisma.$LessonTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LessonTypes.
     * @param {LessonTypeDeleteManyArgs} args - Arguments to filter LessonTypes to delete.
     * @example
     * // Delete a few LessonTypes
     * const { count } = await prisma.lessonType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonTypeDeleteManyArgs>(args?: SelectSubset<T, LessonTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonTypes
     * const lessonType = await prisma.lessonType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonTypeUpdateManyArgs>(args: SelectSubset<T, LessonTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonTypes and returns the data updated in the database.
     * @param {LessonTypeUpdateManyAndReturnArgs} args - Arguments to update many LessonTypes.
     * @example
     * // Update many LessonTypes
     * const lessonType = await prisma.lessonType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LessonTypes and only return the `id`
     * const lessonTypeWithIdOnly = await prisma.lessonType.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LessonType.
     * @param {LessonTypeUpsertArgs} args - Arguments to update or create a LessonType.
     * @example
     * // Update or create a LessonType
     * const lessonType = await prisma.lessonType.upsert({
     *   create: {
     *     // ... data to create a LessonType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonType we want to update
     *   }
     * })
     */
    upsert<T extends LessonTypeUpsertArgs>(args: SelectSubset<T, LessonTypeUpsertArgs<ExtArgs>>): Prisma__LessonTypeClient<$Result.GetResult<Prisma.$LessonTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LessonTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonTypeCountArgs} args - Arguments to filter LessonTypes to count.
     * @example
     * // Count the number of LessonTypes
     * const count = await prisma.lessonType.count({
     *   where: {
     *     // ... the filter for the LessonTypes we want to count
     *   }
     * })
    **/
    count<T extends LessonTypeCountArgs>(
      args?: Subset<T, LessonTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonTypeAggregateArgs>(args: Subset<T, LessonTypeAggregateArgs>): Prisma.PrismaPromise<GetLessonTypeAggregateType<T>>

    /**
     * Group by LessonType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonTypeGroupByArgs} args - Group by arguments.
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
      T extends LessonTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonTypeGroupByArgs['orderBy'] }
        : { orderBy?: LessonTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonType model
   */
  readonly fields: LessonTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Lessons<T extends LessonType$LessonsArgs<ExtArgs> = {}>(args?: Subset<T, LessonType$LessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LessonType model
   */ 
  interface LessonTypeFieldRefs {
    readonly id: FieldRef<"LessonType", 'Int'>
    readonly name: FieldRef<"LessonType", 'String'>
    readonly createdAt: FieldRef<"LessonType", 'DateTime'>
    readonly updatedAt: FieldRef<"LessonType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LessonType findUnique
   */
  export type LessonTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonType
     */
    select?: LessonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonType
     */
    omit?: LessonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTypeInclude<ExtArgs> | null
    /**
     * Filter, which LessonType to fetch.
     */
    where: LessonTypeWhereUniqueInput
  }

  /**
   * LessonType findUniqueOrThrow
   */
  export type LessonTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonType
     */
    select?: LessonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonType
     */
    omit?: LessonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTypeInclude<ExtArgs> | null
    /**
     * Filter, which LessonType to fetch.
     */
    where: LessonTypeWhereUniqueInput
  }

  /**
   * LessonType findFirst
   */
  export type LessonTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonType
     */
    select?: LessonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonType
     */
    omit?: LessonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTypeInclude<ExtArgs> | null
    /**
     * Filter, which LessonType to fetch.
     */
    where?: LessonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonTypes to fetch.
     */
    orderBy?: LessonTypeOrderByWithRelationInput | LessonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonTypes.
     */
    cursor?: LessonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonTypes.
     */
    distinct?: LessonTypeScalarFieldEnum | LessonTypeScalarFieldEnum[]
  }

  /**
   * LessonType findFirstOrThrow
   */
  export type LessonTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonType
     */
    select?: LessonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonType
     */
    omit?: LessonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTypeInclude<ExtArgs> | null
    /**
     * Filter, which LessonType to fetch.
     */
    where?: LessonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonTypes to fetch.
     */
    orderBy?: LessonTypeOrderByWithRelationInput | LessonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonTypes.
     */
    cursor?: LessonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonTypes.
     */
    distinct?: LessonTypeScalarFieldEnum | LessonTypeScalarFieldEnum[]
  }

  /**
   * LessonType findMany
   */
  export type LessonTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonType
     */
    select?: LessonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonType
     */
    omit?: LessonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTypeInclude<ExtArgs> | null
    /**
     * Filter, which LessonTypes to fetch.
     */
    where?: LessonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonTypes to fetch.
     */
    orderBy?: LessonTypeOrderByWithRelationInput | LessonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonTypes.
     */
    cursor?: LessonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonTypes.
     */
    skip?: number
    distinct?: LessonTypeScalarFieldEnum | LessonTypeScalarFieldEnum[]
  }

  /**
   * LessonType create
   */
  export type LessonTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonType
     */
    select?: LessonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonType
     */
    omit?: LessonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonType.
     */
    data: XOR<LessonTypeCreateInput, LessonTypeUncheckedCreateInput>
  }

  /**
   * LessonType createMany
   */
  export type LessonTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonTypes.
     */
    data: LessonTypeCreateManyInput | LessonTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonType createManyAndReturn
   */
  export type LessonTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonType
     */
    select?: LessonTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonType
     */
    omit?: LessonTypeOmit<ExtArgs> | null
    /**
     * The data used to create many LessonTypes.
     */
    data: LessonTypeCreateManyInput | LessonTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonType update
   */
  export type LessonTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonType
     */
    select?: LessonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonType
     */
    omit?: LessonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonType.
     */
    data: XOR<LessonTypeUpdateInput, LessonTypeUncheckedUpdateInput>
    /**
     * Choose, which LessonType to update.
     */
    where: LessonTypeWhereUniqueInput
  }

  /**
   * LessonType updateMany
   */
  export type LessonTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonTypes.
     */
    data: XOR<LessonTypeUpdateManyMutationInput, LessonTypeUncheckedUpdateManyInput>
    /**
     * Filter which LessonTypes to update
     */
    where?: LessonTypeWhereInput
    /**
     * Limit how many LessonTypes to update.
     */
    limit?: number
  }

  /**
   * LessonType updateManyAndReturn
   */
  export type LessonTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonType
     */
    select?: LessonTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonType
     */
    omit?: LessonTypeOmit<ExtArgs> | null
    /**
     * The data used to update LessonTypes.
     */
    data: XOR<LessonTypeUpdateManyMutationInput, LessonTypeUncheckedUpdateManyInput>
    /**
     * Filter which LessonTypes to update
     */
    where?: LessonTypeWhereInput
    /**
     * Limit how many LessonTypes to update.
     */
    limit?: number
  }

  /**
   * LessonType upsert
   */
  export type LessonTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonType
     */
    select?: LessonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonType
     */
    omit?: LessonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonType to update in case it exists.
     */
    where: LessonTypeWhereUniqueInput
    /**
     * In case the LessonType found by the `where` argument doesn't exist, create a new LessonType with this data.
     */
    create: XOR<LessonTypeCreateInput, LessonTypeUncheckedCreateInput>
    /**
     * In case the LessonType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonTypeUpdateInput, LessonTypeUncheckedUpdateInput>
  }

  /**
   * LessonType delete
   */
  export type LessonTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonType
     */
    select?: LessonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonType
     */
    omit?: LessonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTypeInclude<ExtArgs> | null
    /**
     * Filter which LessonType to delete.
     */
    where: LessonTypeWhereUniqueInput
  }

  /**
   * LessonType deleteMany
   */
  export type LessonTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonTypes to delete
     */
    where?: LessonTypeWhereInput
    /**
     * Limit how many LessonTypes to delete.
     */
    limit?: number
  }

  /**
   * LessonType.Lessons
   */
  export type LessonType$LessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * LessonType without action
   */
  export type LessonTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonType
     */
    select?: LessonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonType
     */
    omit?: LessonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTypeInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    id: number | null
    value: number | null
    courseId: number | null
  }

  export type RatingSumAggregateOutputType = {
    id: number | null
    value: number | null
    courseId: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: number | null
    value: number | null
    comment: string | null
    courseId: number | null
  }

  export type RatingMaxAggregateOutputType = {
    id: number | null
    value: number | null
    comment: string | null
    courseId: number | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    value: number
    comment: number
    courseId: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    id?: true
    value?: true
    courseId?: true
  }

  export type RatingSumAggregateInputType = {
    id?: true
    value?: true
    courseId?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    value?: true
    comment?: true
    courseId?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    value?: true
    comment?: true
    courseId?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    value?: true
    comment?: true
    courseId?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: number
    value: number
    comment: string | null
    courseId: number
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    comment?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    comment?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    comment?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    value?: boolean
    comment?: boolean
    courseId?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "comment" | "courseId", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      value: number
      comment: string | null
      courseId: number
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
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
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rating model
   */ 
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'Int'>
    readonly value: FieldRef<"Rating", 'Int'>
    readonly comment: FieldRef<"Rating", 'String'>
    readonly courseId: FieldRef<"Rating", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courses?: boolean | Category$coursesArgs<ExtArgs>
    Post?: boolean | Category$PostArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Category$coursesArgs<ExtArgs>
    Post?: boolean | Category$PostArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
      Post: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends Category$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Category$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Post<T extends Category$PostArgs<ExtArgs> = {}>(args?: Subset<T, Category$PostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.courses
   */
  export type Category$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Category.Post
   */
  export type Category$PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Completed
   */

  export type AggregateCompleted = {
    _count: CompletedCountAggregateOutputType | null
    _avg: CompletedAvgAggregateOutputType | null
    _sum: CompletedSumAggregateOutputType | null
    _min: CompletedMinAggregateOutputType | null
    _max: CompletedMaxAggregateOutputType | null
  }

  export type CompletedAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
    lessons: number | null
  }

  export type CompletedSumAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
    lessons: number[]
  }

  export type CompletedMinAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompletedMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompletedCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    lessons: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompletedAvgAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    lessons?: true
  }

  export type CompletedSumAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    lessons?: true
  }

  export type CompletedMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompletedMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompletedCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    lessons?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompletedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Completed to aggregate.
     */
    where?: CompletedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Completeds to fetch.
     */
    orderBy?: CompletedOrderByWithRelationInput | CompletedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Completeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Completeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Completeds
    **/
    _count?: true | CompletedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompletedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompletedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedMaxAggregateInputType
  }

  export type GetCompletedAggregateType<T extends CompletedAggregateArgs> = {
        [P in keyof T & keyof AggregateCompleted]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompleted[P]>
      : GetScalarType<T[P], AggregateCompleted[P]>
  }




  export type CompletedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedWhereInput
    orderBy?: CompletedOrderByWithAggregationInput | CompletedOrderByWithAggregationInput[]
    by: CompletedScalarFieldEnum[] | CompletedScalarFieldEnum
    having?: CompletedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedCountAggregateInputType | true
    _avg?: CompletedAvgAggregateInputType
    _sum?: CompletedSumAggregateInputType
    _min?: CompletedMinAggregateInputType
    _max?: CompletedMaxAggregateInputType
  }

  export type CompletedGroupByOutputType = {
    id: number
    userId: number
    courseId: number
    lessons: number[]
    createdAt: Date
    updatedAt: Date
    _count: CompletedCountAggregateOutputType | null
    _avg: CompletedAvgAggregateOutputType | null
    _sum: CompletedSumAggregateOutputType | null
    _min: CompletedMinAggregateOutputType | null
    _max: CompletedMaxAggregateOutputType | null
  }

  type GetCompletedGroupByPayload<T extends CompletedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedGroupByOutputType[P]>
        }
      >
    >


  export type CompletedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    lessons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completed"]>

  export type CompletedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    lessons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completed"]>

  export type CompletedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    lessons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completed"]>

  export type CompletedSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    lessons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompletedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "lessons" | "createdAt" | "updatedAt", ExtArgs["result"]["completed"]>
  export type CompletedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompletedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompletedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompletedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Completed"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      courseId: number
      lessons: number[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["completed"]>
    composites: {}
  }

  type CompletedGetPayload<S extends boolean | null | undefined | CompletedDefaultArgs> = $Result.GetResult<Prisma.$CompletedPayload, S>

  type CompletedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletedCountAggregateInputType | true
    }

  export interface CompletedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Completed'], meta: { name: 'Completed' } }
    /**
     * Find zero or one Completed that matches the filter.
     * @param {CompletedFindUniqueArgs} args - Arguments to find a Completed
     * @example
     * // Get one Completed
     * const completed = await prisma.completed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedFindUniqueArgs>(args: SelectSubset<T, CompletedFindUniqueArgs<ExtArgs>>): Prisma__CompletedClient<$Result.GetResult<Prisma.$CompletedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Completed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletedFindUniqueOrThrowArgs} args - Arguments to find a Completed
     * @example
     * // Get one Completed
     * const completed = await prisma.completed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedClient<$Result.GetResult<Prisma.$CompletedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Completed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedFindFirstArgs} args - Arguments to find a Completed
     * @example
     * // Get one Completed
     * const completed = await prisma.completed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedFindFirstArgs>(args?: SelectSubset<T, CompletedFindFirstArgs<ExtArgs>>): Prisma__CompletedClient<$Result.GetResult<Prisma.$CompletedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Completed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedFindFirstOrThrowArgs} args - Arguments to find a Completed
     * @example
     * // Get one Completed
     * const completed = await prisma.completed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedClient<$Result.GetResult<Prisma.$CompletedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Completeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Completeds
     * const completeds = await prisma.completed.findMany()
     * 
     * // Get first 10 Completeds
     * const completeds = await prisma.completed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completedWithIdOnly = await prisma.completed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletedFindManyArgs>(args?: SelectSubset<T, CompletedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Completed.
     * @param {CompletedCreateArgs} args - Arguments to create a Completed.
     * @example
     * // Create one Completed
     * const Completed = await prisma.completed.create({
     *   data: {
     *     // ... data to create a Completed
     *   }
     * })
     * 
     */
    create<T extends CompletedCreateArgs>(args: SelectSubset<T, CompletedCreateArgs<ExtArgs>>): Prisma__CompletedClient<$Result.GetResult<Prisma.$CompletedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Completeds.
     * @param {CompletedCreateManyArgs} args - Arguments to create many Completeds.
     * @example
     * // Create many Completeds
     * const completed = await prisma.completed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedCreateManyArgs>(args?: SelectSubset<T, CompletedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Completeds and returns the data saved in the database.
     * @param {CompletedCreateManyAndReturnArgs} args - Arguments to create many Completeds.
     * @example
     * // Create many Completeds
     * const completed = await prisma.completed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Completeds and only return the `id`
     * const completedWithIdOnly = await prisma.completed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletedCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Completed.
     * @param {CompletedDeleteArgs} args - Arguments to delete one Completed.
     * @example
     * // Delete one Completed
     * const Completed = await prisma.completed.delete({
     *   where: {
     *     // ... filter to delete one Completed
     *   }
     * })
     * 
     */
    delete<T extends CompletedDeleteArgs>(args: SelectSubset<T, CompletedDeleteArgs<ExtArgs>>): Prisma__CompletedClient<$Result.GetResult<Prisma.$CompletedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Completed.
     * @param {CompletedUpdateArgs} args - Arguments to update one Completed.
     * @example
     * // Update one Completed
     * const completed = await prisma.completed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedUpdateArgs>(args: SelectSubset<T, CompletedUpdateArgs<ExtArgs>>): Prisma__CompletedClient<$Result.GetResult<Prisma.$CompletedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Completeds.
     * @param {CompletedDeleteManyArgs} args - Arguments to filter Completeds to delete.
     * @example
     * // Delete a few Completeds
     * const { count } = await prisma.completed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedDeleteManyArgs>(args?: SelectSubset<T, CompletedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Completeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Completeds
     * const completed = await prisma.completed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedUpdateManyArgs>(args: SelectSubset<T, CompletedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Completeds and returns the data updated in the database.
     * @param {CompletedUpdateManyAndReturnArgs} args - Arguments to update many Completeds.
     * @example
     * // Update many Completeds
     * const completed = await prisma.completed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Completeds and only return the `id`
     * const completedWithIdOnly = await prisma.completed.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompletedUpdateManyAndReturnArgs>(args: SelectSubset<T, CompletedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Completed.
     * @param {CompletedUpsertArgs} args - Arguments to update or create a Completed.
     * @example
     * // Update or create a Completed
     * const completed = await prisma.completed.upsert({
     *   create: {
     *     // ... data to create a Completed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Completed we want to update
     *   }
     * })
     */
    upsert<T extends CompletedUpsertArgs>(args: SelectSubset<T, CompletedUpsertArgs<ExtArgs>>): Prisma__CompletedClient<$Result.GetResult<Prisma.$CompletedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Completeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCountArgs} args - Arguments to filter Completeds to count.
     * @example
     * // Count the number of Completeds
     * const count = await prisma.completed.count({
     *   where: {
     *     // ... the filter for the Completeds we want to count
     *   }
     * })
    **/
    count<T extends CompletedCountArgs>(
      args?: Subset<T, CompletedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Completed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompletedAggregateArgs>(args: Subset<T, CompletedAggregateArgs>): Prisma.PrismaPromise<GetCompletedAggregateType<T>>

    /**
     * Group by Completed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedGroupByArgs} args - Group by arguments.
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
      T extends CompletedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedGroupByArgs['orderBy'] }
        : { orderBy?: CompletedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompletedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Completed model
   */
  readonly fields: CompletedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Completed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Completed model
   */ 
  interface CompletedFieldRefs {
    readonly id: FieldRef<"Completed", 'Int'>
    readonly userId: FieldRef<"Completed", 'Int'>
    readonly courseId: FieldRef<"Completed", 'Int'>
    readonly lessons: FieldRef<"Completed", 'Int[]'>
    readonly createdAt: FieldRef<"Completed", 'DateTime'>
    readonly updatedAt: FieldRef<"Completed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Completed findUnique
   */
  export type CompletedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completed
     */
    select?: CompletedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completed
     */
    omit?: CompletedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedInclude<ExtArgs> | null
    /**
     * Filter, which Completed to fetch.
     */
    where: CompletedWhereUniqueInput
  }

  /**
   * Completed findUniqueOrThrow
   */
  export type CompletedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completed
     */
    select?: CompletedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completed
     */
    omit?: CompletedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedInclude<ExtArgs> | null
    /**
     * Filter, which Completed to fetch.
     */
    where: CompletedWhereUniqueInput
  }

  /**
   * Completed findFirst
   */
  export type CompletedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completed
     */
    select?: CompletedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completed
     */
    omit?: CompletedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedInclude<ExtArgs> | null
    /**
     * Filter, which Completed to fetch.
     */
    where?: CompletedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Completeds to fetch.
     */
    orderBy?: CompletedOrderByWithRelationInput | CompletedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Completeds.
     */
    cursor?: CompletedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Completeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Completeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Completeds.
     */
    distinct?: CompletedScalarFieldEnum | CompletedScalarFieldEnum[]
  }

  /**
   * Completed findFirstOrThrow
   */
  export type CompletedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completed
     */
    select?: CompletedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completed
     */
    omit?: CompletedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedInclude<ExtArgs> | null
    /**
     * Filter, which Completed to fetch.
     */
    where?: CompletedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Completeds to fetch.
     */
    orderBy?: CompletedOrderByWithRelationInput | CompletedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Completeds.
     */
    cursor?: CompletedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Completeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Completeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Completeds.
     */
    distinct?: CompletedScalarFieldEnum | CompletedScalarFieldEnum[]
  }

  /**
   * Completed findMany
   */
  export type CompletedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completed
     */
    select?: CompletedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completed
     */
    omit?: CompletedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedInclude<ExtArgs> | null
    /**
     * Filter, which Completeds to fetch.
     */
    where?: CompletedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Completeds to fetch.
     */
    orderBy?: CompletedOrderByWithRelationInput | CompletedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Completeds.
     */
    cursor?: CompletedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Completeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Completeds.
     */
    skip?: number
    distinct?: CompletedScalarFieldEnum | CompletedScalarFieldEnum[]
  }

  /**
   * Completed create
   */
  export type CompletedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completed
     */
    select?: CompletedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completed
     */
    omit?: CompletedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedInclude<ExtArgs> | null
    /**
     * The data needed to create a Completed.
     */
    data: XOR<CompletedCreateInput, CompletedUncheckedCreateInput>
  }

  /**
   * Completed createMany
   */
  export type CompletedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Completeds.
     */
    data: CompletedCreateManyInput | CompletedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Completed createManyAndReturn
   */
  export type CompletedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completed
     */
    select?: CompletedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Completed
     */
    omit?: CompletedOmit<ExtArgs> | null
    /**
     * The data used to create many Completeds.
     */
    data: CompletedCreateManyInput | CompletedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Completed update
   */
  export type CompletedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completed
     */
    select?: CompletedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completed
     */
    omit?: CompletedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedInclude<ExtArgs> | null
    /**
     * The data needed to update a Completed.
     */
    data: XOR<CompletedUpdateInput, CompletedUncheckedUpdateInput>
    /**
     * Choose, which Completed to update.
     */
    where: CompletedWhereUniqueInput
  }

  /**
   * Completed updateMany
   */
  export type CompletedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Completeds.
     */
    data: XOR<CompletedUpdateManyMutationInput, CompletedUncheckedUpdateManyInput>
    /**
     * Filter which Completeds to update
     */
    where?: CompletedWhereInput
    /**
     * Limit how many Completeds to update.
     */
    limit?: number
  }

  /**
   * Completed updateManyAndReturn
   */
  export type CompletedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completed
     */
    select?: CompletedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Completed
     */
    omit?: CompletedOmit<ExtArgs> | null
    /**
     * The data used to update Completeds.
     */
    data: XOR<CompletedUpdateManyMutationInput, CompletedUncheckedUpdateManyInput>
    /**
     * Filter which Completeds to update
     */
    where?: CompletedWhereInput
    /**
     * Limit how many Completeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Completed upsert
   */
  export type CompletedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completed
     */
    select?: CompletedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completed
     */
    omit?: CompletedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedInclude<ExtArgs> | null
    /**
     * The filter to search for the Completed to update in case it exists.
     */
    where: CompletedWhereUniqueInput
    /**
     * In case the Completed found by the `where` argument doesn't exist, create a new Completed with this data.
     */
    create: XOR<CompletedCreateInput, CompletedUncheckedCreateInput>
    /**
     * In case the Completed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedUpdateInput, CompletedUncheckedUpdateInput>
  }

  /**
   * Completed delete
   */
  export type CompletedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completed
     */
    select?: CompletedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completed
     */
    omit?: CompletedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedInclude<ExtArgs> | null
    /**
     * Filter which Completed to delete.
     */
    where: CompletedWhereUniqueInput
  }

  /**
   * Completed deleteMany
   */
  export type CompletedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Completeds to delete
     */
    where?: CompletedWhereInput
    /**
     * Limit how many Completeds to delete.
     */
    limit?: number
  }

  /**
   * Completed without action
   */
  export type CompletedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completed
     */
    select?: CompletedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completed
     */
    omit?: CompletedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    postedById: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    postedById: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    published: boolean | null
    body: string | null
    createdAt: Date | null
    excerpt: string | null
    postedById: number | null
    slug: string | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    published: boolean | null
    body: string | null
    createdAt: Date | null
    excerpt: string | null
    postedById: number | null
    slug: string | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    published: number
    body: number
    createdAt: number
    excerpt: number
    postedById: number
    slug: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    postedById?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    postedById?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    published?: true
    body?: true
    createdAt?: true
    excerpt?: true
    postedById?: true
    slug?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    published?: true
    body?: true
    createdAt?: true
    excerpt?: true
    postedById?: true
    slug?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    published?: true
    body?: true
    createdAt?: true
    excerpt?: true
    postedById?: true
    slug?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    published: boolean
    body: string
    createdAt: Date
    excerpt: string | null
    postedById: number
    slug: string | null
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    published?: boolean
    body?: boolean
    createdAt?: boolean
    excerpt?: boolean
    postedById?: boolean
    slug?: boolean
    updatedAt?: boolean
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | Post$categoriesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    published?: boolean
    body?: boolean
    createdAt?: boolean
    excerpt?: boolean
    postedById?: boolean
    slug?: boolean
    updatedAt?: boolean
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    published?: boolean
    body?: boolean
    createdAt?: boolean
    excerpt?: boolean
    postedById?: boolean
    slug?: boolean
    updatedAt?: boolean
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    published?: boolean
    body?: boolean
    createdAt?: boolean
    excerpt?: boolean
    postedById?: boolean
    slug?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "published" | "body" | "createdAt" | "excerpt" | "postedById" | "slug" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | Post$categoriesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      postedBy: Prisma.$UserPayload<ExtArgs>
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      published: boolean
      body: string
      createdAt: Date
      excerpt: string | null
      postedById: number
      slug: string | null
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends Post$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Post$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly body: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly excerpt: FieldRef<"Post", 'String'>
    readonly postedById: FieldRef<"Post", 'Int'>
    readonly slug: FieldRef<"Post", 'String'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.categories
   */
  export type Post$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model QA
   */

  export type AggregateQA = {
    _count: QACountAggregateOutputType | null
    _avg: QAAvgAggregateOutputType | null
    _sum: QASumAggregateOutputType | null
    _min: QAMinAggregateOutputType | null
    _max: QAMaxAggregateOutputType | null
  }

  export type QAAvgAggregateOutputType = {
    id: number | null
    postedById: number | null
    courseId: number | null
    lessonId: number | null
  }

  export type QASumAggregateOutputType = {
    id: number | null
    postedById: number | null
    courseId: number | null
    lessonId: number | null
  }

  export type QAMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    description: string | null
    resolved: boolean | null
    postedById: number | null
    courseId: number | null
    lessonId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QAMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    description: string | null
    resolved: boolean | null
    postedById: number | null
    courseId: number | null
    lessonId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QACountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    resolved: number
    postedById: number
    courseId: number
    lessonId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QAAvgAggregateInputType = {
    id?: true
    postedById?: true
    courseId?: true
    lessonId?: true
  }

  export type QASumAggregateInputType = {
    id?: true
    postedById?: true
    courseId?: true
    lessonId?: true
  }

  export type QAMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    resolved?: true
    postedById?: true
    courseId?: true
    lessonId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QAMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    resolved?: true
    postedById?: true
    courseId?: true
    lessonId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QACountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    resolved?: true
    postedById?: true
    courseId?: true
    lessonId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QA to aggregate.
     */
    where?: QAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QAS to fetch.
     */
    orderBy?: QAOrderByWithRelationInput | QAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QAS
    **/
    _count?: true | QACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QAMaxAggregateInputType
  }

  export type GetQAAggregateType<T extends QAAggregateArgs> = {
        [P in keyof T & keyof AggregateQA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQA[P]>
      : GetScalarType<T[P], AggregateQA[P]>
  }




  export type QAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QAWhereInput
    orderBy?: QAOrderByWithAggregationInput | QAOrderByWithAggregationInput[]
    by: QAScalarFieldEnum[] | QAScalarFieldEnum
    having?: QAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QACountAggregateInputType | true
    _avg?: QAAvgAggregateInputType
    _sum?: QASumAggregateInputType
    _min?: QAMinAggregateInputType
    _max?: QAMaxAggregateInputType
  }

  export type QAGroupByOutputType = {
    id: number
    title: string
    slug: string | null
    description: string
    resolved: boolean
    postedById: number
    courseId: number | null
    lessonId: number | null
    createdAt: Date
    updatedAt: Date
    _count: QACountAggregateOutputType | null
    _avg: QAAvgAggregateOutputType | null
    _sum: QASumAggregateOutputType | null
    _min: QAMinAggregateOutputType | null
    _max: QAMaxAggregateOutputType | null
  }

  type GetQAGroupByPayload<T extends QAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QAGroupByOutputType[P]>
            : GetScalarType<T[P], QAGroupByOutputType[P]>
        }
      >
    >


  export type QASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    resolved?: boolean
    postedById?: boolean
    courseId?: boolean
    lessonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    answers?: boolean | QA$answersArgs<ExtArgs>
    course?: boolean | QA$courseArgs<ExtArgs>
    lesson?: boolean | QA$lessonArgs<ExtArgs>
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | QACountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qA"]>

  export type QASelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    resolved?: boolean
    postedById?: boolean
    courseId?: boolean
    lessonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | QA$courseArgs<ExtArgs>
    lesson?: boolean | QA$lessonArgs<ExtArgs>
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qA"]>

  export type QASelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    resolved?: boolean
    postedById?: boolean
    courseId?: boolean
    lessonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | QA$courseArgs<ExtArgs>
    lesson?: boolean | QA$lessonArgs<ExtArgs>
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qA"]>

  export type QASelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    resolved?: boolean
    postedById?: boolean
    courseId?: boolean
    lessonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "description" | "resolved" | "postedById" | "courseId" | "lessonId" | "createdAt" | "updatedAt", ExtArgs["result"]["qA"]>
  export type QAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QA$answersArgs<ExtArgs>
    course?: boolean | QA$courseArgs<ExtArgs>
    lesson?: boolean | QA$lessonArgs<ExtArgs>
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | QACountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QAIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | QA$courseArgs<ExtArgs>
    lesson?: boolean | QA$lessonArgs<ExtArgs>
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QAIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | QA$courseArgs<ExtArgs>
    lesson?: boolean | QA$lessonArgs<ExtArgs>
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QA"
    objects: {
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      course: Prisma.$CoursePayload<ExtArgs> | null
      lesson: Prisma.$LessonPayload<ExtArgs> | null
      postedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string | null
      description: string
      resolved: boolean
      postedById: number
      courseId: number | null
      lessonId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["qA"]>
    composites: {}
  }

  type QAGetPayload<S extends boolean | null | undefined | QADefaultArgs> = $Result.GetResult<Prisma.$QAPayload, S>

  type QACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QACountAggregateInputType | true
    }

  export interface QADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QA'], meta: { name: 'QA' } }
    /**
     * Find zero or one QA that matches the filter.
     * @param {QAFindUniqueArgs} args - Arguments to find a QA
     * @example
     * // Get one QA
     * const qA = await prisma.qA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QAFindUniqueArgs>(args: SelectSubset<T, QAFindUniqueArgs<ExtArgs>>): Prisma__QAClient<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QAFindUniqueOrThrowArgs} args - Arguments to find a QA
     * @example
     * // Get one QA
     * const qA = await prisma.qA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QAFindUniqueOrThrowArgs>(args: SelectSubset<T, QAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QAClient<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAFindFirstArgs} args - Arguments to find a QA
     * @example
     * // Get one QA
     * const qA = await prisma.qA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QAFindFirstArgs>(args?: SelectSubset<T, QAFindFirstArgs<ExtArgs>>): Prisma__QAClient<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAFindFirstOrThrowArgs} args - Arguments to find a QA
     * @example
     * // Get one QA
     * const qA = await prisma.qA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QAFindFirstOrThrowArgs>(args?: SelectSubset<T, QAFindFirstOrThrowArgs<ExtArgs>>): Prisma__QAClient<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QAS
     * const qAS = await prisma.qA.findMany()
     * 
     * // Get first 10 QAS
     * const qAS = await prisma.qA.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qAWithIdOnly = await prisma.qA.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QAFindManyArgs>(args?: SelectSubset<T, QAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QA.
     * @param {QACreateArgs} args - Arguments to create a QA.
     * @example
     * // Create one QA
     * const QA = await prisma.qA.create({
     *   data: {
     *     // ... data to create a QA
     *   }
     * })
     * 
     */
    create<T extends QACreateArgs>(args: SelectSubset<T, QACreateArgs<ExtArgs>>): Prisma__QAClient<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QAS.
     * @param {QACreateManyArgs} args - Arguments to create many QAS.
     * @example
     * // Create many QAS
     * const qA = await prisma.qA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QACreateManyArgs>(args?: SelectSubset<T, QACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QAS and returns the data saved in the database.
     * @param {QACreateManyAndReturnArgs} args - Arguments to create many QAS.
     * @example
     * // Create many QAS
     * const qA = await prisma.qA.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QAS and only return the `id`
     * const qAWithIdOnly = await prisma.qA.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QACreateManyAndReturnArgs>(args?: SelectSubset<T, QACreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QA.
     * @param {QADeleteArgs} args - Arguments to delete one QA.
     * @example
     * // Delete one QA
     * const QA = await prisma.qA.delete({
     *   where: {
     *     // ... filter to delete one QA
     *   }
     * })
     * 
     */
    delete<T extends QADeleteArgs>(args: SelectSubset<T, QADeleteArgs<ExtArgs>>): Prisma__QAClient<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QA.
     * @param {QAUpdateArgs} args - Arguments to update one QA.
     * @example
     * // Update one QA
     * const qA = await prisma.qA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QAUpdateArgs>(args: SelectSubset<T, QAUpdateArgs<ExtArgs>>): Prisma__QAClient<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QAS.
     * @param {QADeleteManyArgs} args - Arguments to filter QAS to delete.
     * @example
     * // Delete a few QAS
     * const { count } = await prisma.qA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QADeleteManyArgs>(args?: SelectSubset<T, QADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QAS
     * const qA = await prisma.qA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QAUpdateManyArgs>(args: SelectSubset<T, QAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QAS and returns the data updated in the database.
     * @param {QAUpdateManyAndReturnArgs} args - Arguments to update many QAS.
     * @example
     * // Update many QAS
     * const qA = await prisma.qA.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QAS and only return the `id`
     * const qAWithIdOnly = await prisma.qA.updateManyAndReturn({
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
    updateManyAndReturn<T extends QAUpdateManyAndReturnArgs>(args: SelectSubset<T, QAUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QA.
     * @param {QAUpsertArgs} args - Arguments to update or create a QA.
     * @example
     * // Update or create a QA
     * const qA = await prisma.qA.upsert({
     *   create: {
     *     // ... data to create a QA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QA we want to update
     *   }
     * })
     */
    upsert<T extends QAUpsertArgs>(args: SelectSubset<T, QAUpsertArgs<ExtArgs>>): Prisma__QAClient<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QACountArgs} args - Arguments to filter QAS to count.
     * @example
     * // Count the number of QAS
     * const count = await prisma.qA.count({
     *   where: {
     *     // ... the filter for the QAS we want to count
     *   }
     * })
    **/
    count<T extends QACountArgs>(
      args?: Subset<T, QACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QAAggregateArgs>(args: Subset<T, QAAggregateArgs>): Prisma.PrismaPromise<GetQAAggregateType<T>>

    /**
     * Group by QA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAGroupByArgs} args - Group by arguments.
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
      T extends QAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QAGroupByArgs['orderBy'] }
        : { orderBy?: QAGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QA model
   */
  readonly fields: QAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends QA$answersArgs<ExtArgs> = {}>(args?: Subset<T, QA$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course<T extends QA$courseArgs<ExtArgs> = {}>(args?: Subset<T, QA$courseArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lesson<T extends QA$lessonArgs<ExtArgs> = {}>(args?: Subset<T, QA$lessonArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    postedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QA model
   */ 
  interface QAFieldRefs {
    readonly id: FieldRef<"QA", 'Int'>
    readonly title: FieldRef<"QA", 'String'>
    readonly slug: FieldRef<"QA", 'String'>
    readonly description: FieldRef<"QA", 'String'>
    readonly resolved: FieldRef<"QA", 'Boolean'>
    readonly postedById: FieldRef<"QA", 'Int'>
    readonly courseId: FieldRef<"QA", 'Int'>
    readonly lessonId: FieldRef<"QA", 'Int'>
    readonly createdAt: FieldRef<"QA", 'DateTime'>
    readonly updatedAt: FieldRef<"QA", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QA findUnique
   */
  export type QAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAInclude<ExtArgs> | null
    /**
     * Filter, which QA to fetch.
     */
    where: QAWhereUniqueInput
  }

  /**
   * QA findUniqueOrThrow
   */
  export type QAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAInclude<ExtArgs> | null
    /**
     * Filter, which QA to fetch.
     */
    where: QAWhereUniqueInput
  }

  /**
   * QA findFirst
   */
  export type QAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAInclude<ExtArgs> | null
    /**
     * Filter, which QA to fetch.
     */
    where?: QAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QAS to fetch.
     */
    orderBy?: QAOrderByWithRelationInput | QAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QAS.
     */
    cursor?: QAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QAS.
     */
    distinct?: QAScalarFieldEnum | QAScalarFieldEnum[]
  }

  /**
   * QA findFirstOrThrow
   */
  export type QAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAInclude<ExtArgs> | null
    /**
     * Filter, which QA to fetch.
     */
    where?: QAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QAS to fetch.
     */
    orderBy?: QAOrderByWithRelationInput | QAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QAS.
     */
    cursor?: QAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QAS.
     */
    distinct?: QAScalarFieldEnum | QAScalarFieldEnum[]
  }

  /**
   * QA findMany
   */
  export type QAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAInclude<ExtArgs> | null
    /**
     * Filter, which QAS to fetch.
     */
    where?: QAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QAS to fetch.
     */
    orderBy?: QAOrderByWithRelationInput | QAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QAS.
     */
    cursor?: QAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QAS.
     */
    skip?: number
    distinct?: QAScalarFieldEnum | QAScalarFieldEnum[]
  }

  /**
   * QA create
   */
  export type QACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAInclude<ExtArgs> | null
    /**
     * The data needed to create a QA.
     */
    data: XOR<QACreateInput, QAUncheckedCreateInput>
  }

  /**
   * QA createMany
   */
  export type QACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QAS.
     */
    data: QACreateManyInput | QACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QA createManyAndReturn
   */
  export type QACreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * The data used to create many QAS.
     */
    data: QACreateManyInput | QACreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QA update
   */
  export type QAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAInclude<ExtArgs> | null
    /**
     * The data needed to update a QA.
     */
    data: XOR<QAUpdateInput, QAUncheckedUpdateInput>
    /**
     * Choose, which QA to update.
     */
    where: QAWhereUniqueInput
  }

  /**
   * QA updateMany
   */
  export type QAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QAS.
     */
    data: XOR<QAUpdateManyMutationInput, QAUncheckedUpdateManyInput>
    /**
     * Filter which QAS to update
     */
    where?: QAWhereInput
    /**
     * Limit how many QAS to update.
     */
    limit?: number
  }

  /**
   * QA updateManyAndReturn
   */
  export type QAUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * The data used to update QAS.
     */
    data: XOR<QAUpdateManyMutationInput, QAUncheckedUpdateManyInput>
    /**
     * Filter which QAS to update
     */
    where?: QAWhereInput
    /**
     * Limit how many QAS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QA upsert
   */
  export type QAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAInclude<ExtArgs> | null
    /**
     * The filter to search for the QA to update in case it exists.
     */
    where: QAWhereUniqueInput
    /**
     * In case the QA found by the `where` argument doesn't exist, create a new QA with this data.
     */
    create: XOR<QACreateInput, QAUncheckedCreateInput>
    /**
     * In case the QA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QAUpdateInput, QAUncheckedUpdateInput>
  }

  /**
   * QA delete
   */
  export type QADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAInclude<ExtArgs> | null
    /**
     * Filter which QA to delete.
     */
    where: QAWhereUniqueInput
  }

  /**
   * QA deleteMany
   */
  export type QADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QAS to delete
     */
    where?: QAWhereInput
    /**
     * Limit how many QAS to delete.
     */
    limit?: number
  }

  /**
   * QA.answers
   */
  export type QA$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * QA.course
   */
  export type QA$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
  }

  /**
   * QA.lesson
   */
  export type QA$lessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
  }

  /**
   * QA without action
   */
  export type QADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QA
     */
    select?: QASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QA
     */
    omit?: QAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    id: number | null
    postedById: number | null
    qaId: number | null
  }

  export type AnswerSumAggregateOutputType = {
    id: number | null
    postedById: number | null
    qaId: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: number | null
    content: string | null
    postedById: number | null
    qaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: number | null
    content: string | null
    postedById: number | null
    qaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    content: number
    postedById: number
    qaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    id?: true
    postedById?: true
    qaId?: true
  }

  export type AnswerSumAggregateInputType = {
    id?: true
    postedById?: true
    qaId?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    content?: true
    postedById?: true
    qaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    content?: true
    postedById?: true
    qaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    content?: true
    postedById?: true
    qaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: number
    content: string
    postedById: number
    qaId: number
    createdAt: Date
    updatedAt: Date
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    postedById?: boolean
    qaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
    qa?: boolean | QADefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    postedById?: boolean
    qaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
    qa?: boolean | QADefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    postedById?: boolean
    qaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
    qa?: boolean | QADefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    content?: boolean
    postedById?: boolean
    qaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "postedById" | "qaId" | "createdAt" | "updatedAt", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
    qa?: boolean | QADefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
    qa?: boolean | QADefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
    qa?: boolean | QADefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      postedBy: Prisma.$UserPayload<ExtArgs>
      qa: Prisma.$QAPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      postedById: number
      qaId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    qa<T extends QADefaultArgs<ExtArgs> = {}>(args?: Subset<T, QADefaultArgs<ExtArgs>>): Prisma__QAClient<$Result.GetResult<Prisma.$QAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Answer model
   */ 
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'Int'>
    readonly content: FieldRef<"Answer", 'String'>
    readonly postedById: FieldRef<"Answer", 'Int'>
    readonly qaId: FieldRef<"Answer", 'Int'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly updatedAt: FieldRef<"Answer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model Support
   */

  export type AggregateSupport = {
    _count: SupportCountAggregateOutputType | null
    _avg: SupportAvgAggregateOutputType | null
    _sum: SupportSumAggregateOutputType | null
    _min: SupportMinAggregateOutputType | null
    _max: SupportMaxAggregateOutputType | null
  }

  export type SupportAvgAggregateOutputType = {
    id: number | null
    postedById: number | null
  }

  export type SupportSumAggregateOutputType = {
    id: number | null
    postedById: number | null
  }

  export type SupportMinAggregateOutputType = {
    id: number | null
    courseUrl: string | null
    message: string | null
    resolved: boolean | null
    postedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportMaxAggregateOutputType = {
    id: number | null
    courseUrl: string | null
    message: string | null
    resolved: boolean | null
    postedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportCountAggregateOutputType = {
    id: number
    courseUrl: number
    message: number
    resolved: number
    postedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupportAvgAggregateInputType = {
    id?: true
    postedById?: true
  }

  export type SupportSumAggregateInputType = {
    id?: true
    postedById?: true
  }

  export type SupportMinAggregateInputType = {
    id?: true
    courseUrl?: true
    message?: true
    resolved?: true
    postedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportMaxAggregateInputType = {
    id?: true
    courseUrl?: true
    message?: true
    resolved?: true
    postedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportCountAggregateInputType = {
    id?: true
    courseUrl?: true
    message?: true
    resolved?: true
    postedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Support to aggregate.
     */
    where?: SupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supports to fetch.
     */
    orderBy?: SupportOrderByWithRelationInput | SupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Supports
    **/
    _count?: true | SupportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportMaxAggregateInputType
  }

  export type GetSupportAggregateType<T extends SupportAggregateArgs> = {
        [P in keyof T & keyof AggregateSupport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupport[P]>
      : GetScalarType<T[P], AggregateSupport[P]>
  }




  export type SupportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportWhereInput
    orderBy?: SupportOrderByWithAggregationInput | SupportOrderByWithAggregationInput[]
    by: SupportScalarFieldEnum[] | SupportScalarFieldEnum
    having?: SupportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportCountAggregateInputType | true
    _avg?: SupportAvgAggregateInputType
    _sum?: SupportSumAggregateInputType
    _min?: SupportMinAggregateInputType
    _max?: SupportMaxAggregateInputType
  }

  export type SupportGroupByOutputType = {
    id: number
    courseUrl: string | null
    message: string
    resolved: boolean
    postedById: number
    createdAt: Date
    updatedAt: Date
    _count: SupportCountAggregateOutputType | null
    _avg: SupportAvgAggregateOutputType | null
    _sum: SupportSumAggregateOutputType | null
    _min: SupportMinAggregateOutputType | null
    _max: SupportMaxAggregateOutputType | null
  }

  type GetSupportGroupByPayload<T extends SupportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportGroupByOutputType[P]>
            : GetScalarType<T[P], SupportGroupByOutputType[P]>
        }
      >
    >


  export type SupportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseUrl?: boolean
    message?: boolean
    resolved?: boolean
    postedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["support"]>

  export type SupportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseUrl?: boolean
    message?: boolean
    resolved?: boolean
    postedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["support"]>

  export type SupportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseUrl?: boolean
    message?: boolean
    resolved?: boolean
    postedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["support"]>

  export type SupportSelectScalar = {
    id?: boolean
    courseUrl?: boolean
    message?: boolean
    resolved?: boolean
    postedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseUrl" | "message" | "resolved" | "postedById" | "createdAt" | "updatedAt", ExtArgs["result"]["support"]>
  export type SupportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SupportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SupportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SupportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Support"
    objects: {
      postedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseUrl: string | null
      message: string
      resolved: boolean
      postedById: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["support"]>
    composites: {}
  }

  type SupportGetPayload<S extends boolean | null | undefined | SupportDefaultArgs> = $Result.GetResult<Prisma.$SupportPayload, S>

  type SupportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupportCountAggregateInputType | true
    }

  export interface SupportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Support'], meta: { name: 'Support' } }
    /**
     * Find zero or one Support that matches the filter.
     * @param {SupportFindUniqueArgs} args - Arguments to find a Support
     * @example
     * // Get one Support
     * const support = await prisma.support.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportFindUniqueArgs>(args: SelectSubset<T, SupportFindUniqueArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Support that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupportFindUniqueOrThrowArgs} args - Arguments to find a Support
     * @example
     * // Get one Support
     * const support = await prisma.support.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Support that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportFindFirstArgs} args - Arguments to find a Support
     * @example
     * // Get one Support
     * const support = await prisma.support.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportFindFirstArgs>(args?: SelectSubset<T, SupportFindFirstArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Support that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportFindFirstOrThrowArgs} args - Arguments to find a Support
     * @example
     * // Get one Support
     * const support = await prisma.support.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Supports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supports
     * const supports = await prisma.support.findMany()
     * 
     * // Get first 10 Supports
     * const supports = await prisma.support.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportWithIdOnly = await prisma.support.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportFindManyArgs>(args?: SelectSubset<T, SupportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Support.
     * @param {SupportCreateArgs} args - Arguments to create a Support.
     * @example
     * // Create one Support
     * const Support = await prisma.support.create({
     *   data: {
     *     // ... data to create a Support
     *   }
     * })
     * 
     */
    create<T extends SupportCreateArgs>(args: SelectSubset<T, SupportCreateArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Supports.
     * @param {SupportCreateManyArgs} args - Arguments to create many Supports.
     * @example
     * // Create many Supports
     * const support = await prisma.support.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportCreateManyArgs>(args?: SelectSubset<T, SupportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Supports and returns the data saved in the database.
     * @param {SupportCreateManyAndReturnArgs} args - Arguments to create many Supports.
     * @example
     * // Create many Supports
     * const support = await prisma.support.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Supports and only return the `id`
     * const supportWithIdOnly = await prisma.support.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Support.
     * @param {SupportDeleteArgs} args - Arguments to delete one Support.
     * @example
     * // Delete one Support
     * const Support = await prisma.support.delete({
     *   where: {
     *     // ... filter to delete one Support
     *   }
     * })
     * 
     */
    delete<T extends SupportDeleteArgs>(args: SelectSubset<T, SupportDeleteArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Support.
     * @param {SupportUpdateArgs} args - Arguments to update one Support.
     * @example
     * // Update one Support
     * const support = await prisma.support.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportUpdateArgs>(args: SelectSubset<T, SupportUpdateArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Supports.
     * @param {SupportDeleteManyArgs} args - Arguments to filter Supports to delete.
     * @example
     * // Delete a few Supports
     * const { count } = await prisma.support.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportDeleteManyArgs>(args?: SelectSubset<T, SupportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supports
     * const support = await prisma.support.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportUpdateManyArgs>(args: SelectSubset<T, SupportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supports and returns the data updated in the database.
     * @param {SupportUpdateManyAndReturnArgs} args - Arguments to update many Supports.
     * @example
     * // Update many Supports
     * const support = await prisma.support.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Supports and only return the `id`
     * const supportWithIdOnly = await prisma.support.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupportUpdateManyAndReturnArgs>(args: SelectSubset<T, SupportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Support.
     * @param {SupportUpsertArgs} args - Arguments to update or create a Support.
     * @example
     * // Update or create a Support
     * const support = await prisma.support.upsert({
     *   create: {
     *     // ... data to create a Support
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Support we want to update
     *   }
     * })
     */
    upsert<T extends SupportUpsertArgs>(args: SelectSubset<T, SupportUpsertArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Supports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportCountArgs} args - Arguments to filter Supports to count.
     * @example
     * // Count the number of Supports
     * const count = await prisma.support.count({
     *   where: {
     *     // ... the filter for the Supports we want to count
     *   }
     * })
    **/
    count<T extends SupportCountArgs>(
      args?: Subset<T, SupportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Support.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupportAggregateArgs>(args: Subset<T, SupportAggregateArgs>): Prisma.PrismaPromise<GetSupportAggregateType<T>>

    /**
     * Group by Support.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportGroupByArgs} args - Group by arguments.
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
      T extends SupportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportGroupByArgs['orderBy'] }
        : { orderBy?: SupportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Support model
   */
  readonly fields: SupportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Support.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Support model
   */ 
  interface SupportFieldRefs {
    readonly id: FieldRef<"Support", 'Int'>
    readonly courseUrl: FieldRef<"Support", 'String'>
    readonly message: FieldRef<"Support", 'String'>
    readonly resolved: FieldRef<"Support", 'Boolean'>
    readonly postedById: FieldRef<"Support", 'Int'>
    readonly createdAt: FieldRef<"Support", 'DateTime'>
    readonly updatedAt: FieldRef<"Support", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Support findUnique
   */
  export type SupportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * Filter, which Support to fetch.
     */
    where: SupportWhereUniqueInput
  }

  /**
   * Support findUniqueOrThrow
   */
  export type SupportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * Filter, which Support to fetch.
     */
    where: SupportWhereUniqueInput
  }

  /**
   * Support findFirst
   */
  export type SupportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * Filter, which Support to fetch.
     */
    where?: SupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supports to fetch.
     */
    orderBy?: SupportOrderByWithRelationInput | SupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supports.
     */
    cursor?: SupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supports.
     */
    distinct?: SupportScalarFieldEnum | SupportScalarFieldEnum[]
  }

  /**
   * Support findFirstOrThrow
   */
  export type SupportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * Filter, which Support to fetch.
     */
    where?: SupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supports to fetch.
     */
    orderBy?: SupportOrderByWithRelationInput | SupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supports.
     */
    cursor?: SupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supports.
     */
    distinct?: SupportScalarFieldEnum | SupportScalarFieldEnum[]
  }

  /**
   * Support findMany
   */
  export type SupportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * Filter, which Supports to fetch.
     */
    where?: SupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supports to fetch.
     */
    orderBy?: SupportOrderByWithRelationInput | SupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Supports.
     */
    cursor?: SupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supports.
     */
    skip?: number
    distinct?: SupportScalarFieldEnum | SupportScalarFieldEnum[]
  }

  /**
   * Support create
   */
  export type SupportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * The data needed to create a Support.
     */
    data: XOR<SupportCreateInput, SupportUncheckedCreateInput>
  }

  /**
   * Support createMany
   */
  export type SupportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Supports.
     */
    data: SupportCreateManyInput | SupportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Support createManyAndReturn
   */
  export type SupportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * The data used to create many Supports.
     */
    data: SupportCreateManyInput | SupportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Support update
   */
  export type SupportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * The data needed to update a Support.
     */
    data: XOR<SupportUpdateInput, SupportUncheckedUpdateInput>
    /**
     * Choose, which Support to update.
     */
    where: SupportWhereUniqueInput
  }

  /**
   * Support updateMany
   */
  export type SupportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Supports.
     */
    data: XOR<SupportUpdateManyMutationInput, SupportUncheckedUpdateManyInput>
    /**
     * Filter which Supports to update
     */
    where?: SupportWhereInput
    /**
     * Limit how many Supports to update.
     */
    limit?: number
  }

  /**
   * Support updateManyAndReturn
   */
  export type SupportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * The data used to update Supports.
     */
    data: XOR<SupportUpdateManyMutationInput, SupportUncheckedUpdateManyInput>
    /**
     * Filter which Supports to update
     */
    where?: SupportWhereInput
    /**
     * Limit how many Supports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Support upsert
   */
  export type SupportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * The filter to search for the Support to update in case it exists.
     */
    where: SupportWhereUniqueInput
    /**
     * In case the Support found by the `where` argument doesn't exist, create a new Support with this data.
     */
    create: XOR<SupportCreateInput, SupportUncheckedCreateInput>
    /**
     * In case the Support was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportUpdateInput, SupportUncheckedUpdateInput>
  }

  /**
   * Support delete
   */
  export type SupportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * Filter which Support to delete.
     */
    where: SupportWhereUniqueInput
  }

  /**
   * Support deleteMany
   */
  export type SupportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supports to delete
     */
    where?: SupportWhereInput
    /**
     * Limit how many Supports to delete.
     */
    limit?: number
  }

  /**
   * Support without action
   */
  export type SupportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    password: 'password',
    passwordResetCode: 'passwordResetCode',
    picture: 'picture',
    role: 'role',
    stripeAccountId: 'stripeAccountId',
    stripeSeller: 'stripeSeller',
    stripeSession: 'stripeSession',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    courseId: 'courseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    price: 'price',
    onSale: 'onSale',
    displayPrice: 'displayPrice',
    image: 'image',
    published: 'published',
    completed: 'completed',
    difficulty: 'difficulty',
    paid: 'paid',
    instructorId: 'instructorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    video: 'video',
    freePreview: 'freePreview',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lessonTypeId: 'lessonTypeId',
    moduleId: 'moduleId'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const LessonTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LessonTypeScalarFieldEnum = (typeof LessonTypeScalarFieldEnum)[keyof typeof LessonTypeScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    value: 'value',
    comment: 'comment',
    courseId: 'courseId'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CompletedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    lessons: 'lessons',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompletedScalarFieldEnum = (typeof CompletedScalarFieldEnum)[keyof typeof CompletedScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    published: 'published',
    body: 'body',
    createdAt: 'createdAt',
    excerpt: 'excerpt',
    postedById: 'postedById',
    slug: 'slug',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const QAScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    resolved: 'resolved',
    postedById: 'postedById',
    courseId: 'courseId',
    lessonId: 'lessonId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QAScalarFieldEnum = (typeof QAScalarFieldEnum)[keyof typeof QAScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    content: 'content',
    postedById: 'postedById',
    qaId: 'qaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const SupportScalarFieldEnum: {
    id: 'id',
    courseUrl: 'courseUrl',
    message: 'message',
    resolved: 'resolved',
    postedById: 'postedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupportScalarFieldEnum = (typeof SupportScalarFieldEnum)[keyof typeof SupportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    passwordResetCode?: StringNullableFilter<"User"> | string | null
    picture?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    stripeAccountId?: StringNullableFilter<"User"> | string | null
    stripeSeller?: JsonNullableFilter<"User">
    stripeSession?: JsonNullableFilter<"User">
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Answer?: AnswerListRelationFilter
    Completed?: CompletedListRelationFilter
    Course?: CourseListRelationFilter
    posts?: PostListRelationFilter
    QA?: QAListRelationFilter
    Support?: SupportListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    passwordResetCode?: SortOrderInput | SortOrder
    picture?: SortOrder
    role?: SortOrder
    stripeAccountId?: SortOrderInput | SortOrder
    stripeSeller?: SortOrderInput | SortOrder
    stripeSession?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    Answer?: AnswerOrderByRelationAggregateInput
    Completed?: CompletedOrderByRelationAggregateInput
    Course?: CourseOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    QA?: QAOrderByRelationAggregateInput
    Support?: SupportOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    passwordResetCode?: StringNullableFilter<"User"> | string | null
    picture?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    stripeAccountId?: StringNullableFilter<"User"> | string | null
    stripeSeller?: JsonNullableFilter<"User">
    stripeSession?: JsonNullableFilter<"User">
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Answer?: AnswerListRelationFilter
    Completed?: CompletedListRelationFilter
    Course?: CourseListRelationFilter
    posts?: PostListRelationFilter
    QA?: QAListRelationFilter
    Support?: SupportListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    passwordResetCode?: SortOrderInput | SortOrder
    picture?: SortOrder
    role?: SortOrder
    stripeAccountId?: SortOrderInput | SortOrder
    stripeSeller?: SortOrderInput | SortOrder
    stripeSession?: SortOrderInput | SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    password?: StringWithAggregatesFilter<"User"> | string
    passwordResetCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    picture?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    stripeAccountId?: StringNullableWithAggregatesFilter<"User"> | string | null
    stripeSeller?: JsonNullableWithAggregatesFilter<"User">
    stripeSession?: JsonNullableWithAggregatesFilter<"User">
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: IntFilter<"Module"> | number
    title?: StringFilter<"Module"> | string
    slug?: StringNullableFilter<"Module"> | string | null
    courseId?: IntFilter<"Module"> | number
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    lessons?: LessonListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrderInput | SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    lessons?: LessonOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    title?: StringFilter<"Module"> | string
    slug?: StringNullableFilter<"Module"> | string | null
    courseId?: IntFilter<"Module"> | number
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    lessons?: LessonListRelationFilter
  }, "id">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrderInput | SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Module"> | number
    title?: StringWithAggregatesFilter<"Module"> | string
    slug?: StringNullableWithAggregatesFilter<"Module"> | string | null
    courseId?: IntWithAggregatesFilter<"Module"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    name?: StringFilter<"Course"> | string
    slug?: StringNullableFilter<"Course"> | string | null
    description?: StringFilter<"Course"> | string
    price?: FloatFilter<"Course"> | number
    onSale?: BoolFilter<"Course"> | boolean
    displayPrice?: FloatNullableFilter<"Course"> | number | null
    image?: StringNullableFilter<"Course"> | string | null
    published?: BoolFilter<"Course"> | boolean
    completed?: IntNullableListFilter<"Course">
    difficulty?: EnumDifficultyFilter<"Course"> | $Enums.Difficulty
    paid?: BoolFilter<"Course"> | boolean
    instructorId?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    Completed?: CompletedListRelationFilter
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    modules?: ModuleListRelationFilter
    QA?: QAListRelationFilter
    ratings?: RatingListRelationFilter
    categories?: CategoryListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    description?: SortOrder
    price?: SortOrder
    onSale?: SortOrder
    displayPrice?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    published?: SortOrder
    completed?: SortOrder
    difficulty?: SortOrder
    paid?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Completed?: CompletedOrderByRelationAggregateInput
    instructor?: UserOrderByWithRelationInput
    modules?: ModuleOrderByRelationAggregateInput
    QA?: QAOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    slug?: StringNullableFilter<"Course"> | string | null
    description?: StringFilter<"Course"> | string
    price?: FloatFilter<"Course"> | number
    onSale?: BoolFilter<"Course"> | boolean
    displayPrice?: FloatNullableFilter<"Course"> | number | null
    image?: StringNullableFilter<"Course"> | string | null
    published?: BoolFilter<"Course"> | boolean
    completed?: IntNullableListFilter<"Course">
    difficulty?: EnumDifficultyFilter<"Course"> | $Enums.Difficulty
    paid?: BoolFilter<"Course"> | boolean
    instructorId?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    Completed?: CompletedListRelationFilter
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    modules?: ModuleListRelationFilter
    QA?: QAListRelationFilter
    ratings?: RatingListRelationFilter
    categories?: CategoryListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    description?: SortOrder
    price?: SortOrder
    onSale?: SortOrder
    displayPrice?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    published?: SortOrder
    completed?: SortOrder
    difficulty?: SortOrder
    paid?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    name?: StringWithAggregatesFilter<"Course"> | string
    slug?: StringNullableWithAggregatesFilter<"Course"> | string | null
    description?: StringWithAggregatesFilter<"Course"> | string
    price?: FloatWithAggregatesFilter<"Course"> | number
    onSale?: BoolWithAggregatesFilter<"Course"> | boolean
    displayPrice?: FloatNullableWithAggregatesFilter<"Course"> | number | null
    image?: StringNullableWithAggregatesFilter<"Course"> | string | null
    published?: BoolWithAggregatesFilter<"Course"> | boolean
    completed?: IntNullableListFilter<"Course">
    difficulty?: EnumDifficultyWithAggregatesFilter<"Course"> | $Enums.Difficulty
    paid?: BoolWithAggregatesFilter<"Course"> | boolean
    instructorId?: IntWithAggregatesFilter<"Course"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: IntFilter<"Lesson"> | number
    title?: StringFilter<"Lesson"> | string
    slug?: StringNullableFilter<"Lesson"> | string | null
    content?: StringFilter<"Lesson"> | string
    video?: StringNullableFilter<"Lesson"> | string | null
    freePreview?: BoolFilter<"Lesson"> | boolean
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    lessonTypeId?: IntFilter<"Lesson"> | number
    moduleId?: IntNullableFilter<"Lesson"> | number | null
    lessonType?: XOR<LessonTypeScalarRelationFilter, LessonTypeWhereInput>
    QA?: QAListRelationFilter
    module?: XOR<ModuleNullableScalarRelationFilter, ModuleWhereInput> | null
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrderInput | SortOrder
    content?: SortOrder
    video?: SortOrderInput | SortOrder
    freePreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lessonTypeId?: SortOrder
    moduleId?: SortOrderInput | SortOrder
    lessonType?: LessonTypeOrderByWithRelationInput
    QA?: QAOrderByRelationAggregateInput
    module?: ModuleOrderByWithRelationInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    title?: StringFilter<"Lesson"> | string
    slug?: StringNullableFilter<"Lesson"> | string | null
    content?: StringFilter<"Lesson"> | string
    video?: StringNullableFilter<"Lesson"> | string | null
    freePreview?: BoolFilter<"Lesson"> | boolean
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    lessonTypeId?: IntFilter<"Lesson"> | number
    moduleId?: IntNullableFilter<"Lesson"> | number | null
    lessonType?: XOR<LessonTypeScalarRelationFilter, LessonTypeWhereInput>
    QA?: QAListRelationFilter
    module?: XOR<ModuleNullableScalarRelationFilter, ModuleWhereInput> | null
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrderInput | SortOrder
    content?: SortOrder
    video?: SortOrderInput | SortOrder
    freePreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lessonTypeId?: SortOrder
    moduleId?: SortOrderInput | SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lesson"> | number
    title?: StringWithAggregatesFilter<"Lesson"> | string
    slug?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    content?: StringWithAggregatesFilter<"Lesson"> | string
    video?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    freePreview?: BoolWithAggregatesFilter<"Lesson"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
    lessonTypeId?: IntWithAggregatesFilter<"Lesson"> | number
    moduleId?: IntNullableWithAggregatesFilter<"Lesson"> | number | null
  }

  export type LessonTypeWhereInput = {
    AND?: LessonTypeWhereInput | LessonTypeWhereInput[]
    OR?: LessonTypeWhereInput[]
    NOT?: LessonTypeWhereInput | LessonTypeWhereInput[]
    id?: IntFilter<"LessonType"> | number
    name?: StringFilter<"LessonType"> | string
    createdAt?: DateTimeFilter<"LessonType"> | Date | string
    updatedAt?: DateTimeFilter<"LessonType"> | Date | string
    Lessons?: LessonListRelationFilter
  }

  export type LessonTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Lessons?: LessonOrderByRelationAggregateInput
  }

  export type LessonTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LessonTypeWhereInput | LessonTypeWhereInput[]
    OR?: LessonTypeWhereInput[]
    NOT?: LessonTypeWhereInput | LessonTypeWhereInput[]
    name?: StringFilter<"LessonType"> | string
    createdAt?: DateTimeFilter<"LessonType"> | Date | string
    updatedAt?: DateTimeFilter<"LessonType"> | Date | string
    Lessons?: LessonListRelationFilter
  }, "id">

  export type LessonTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LessonTypeCountOrderByAggregateInput
    _avg?: LessonTypeAvgOrderByAggregateInput
    _max?: LessonTypeMaxOrderByAggregateInput
    _min?: LessonTypeMinOrderByAggregateInput
    _sum?: LessonTypeSumOrderByAggregateInput
  }

  export type LessonTypeScalarWhereWithAggregatesInput = {
    AND?: LessonTypeScalarWhereWithAggregatesInput | LessonTypeScalarWhereWithAggregatesInput[]
    OR?: LessonTypeScalarWhereWithAggregatesInput[]
    NOT?: LessonTypeScalarWhereWithAggregatesInput | LessonTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LessonType"> | number
    name?: StringWithAggregatesFilter<"LessonType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LessonType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LessonType"> | Date | string
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: IntFilter<"Rating"> | number
    value?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    courseId?: IntFilter<"Rating"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    comment?: SortOrderInput | SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    value?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    courseId?: IntFilter<"Rating"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    comment?: SortOrderInput | SortOrder
    courseId?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rating"> | number
    value?: IntWithAggregatesFilter<"Rating"> | number
    comment?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    courseId?: IntWithAggregatesFilter<"Rating"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    courses?: CourseListRelationFilter
    Post?: PostListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
    Post?: PostOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    courses?: CourseListRelationFilter
    Post?: PostListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type CompletedWhereInput = {
    AND?: CompletedWhereInput | CompletedWhereInput[]
    OR?: CompletedWhereInput[]
    NOT?: CompletedWhereInput | CompletedWhereInput[]
    id?: IntFilter<"Completed"> | number
    userId?: IntFilter<"Completed"> | number
    courseId?: IntFilter<"Completed"> | number
    lessons?: IntNullableListFilter<"Completed">
    createdAt?: DateTimeFilter<"Completed"> | Date | string
    updatedAt?: DateTimeFilter<"Completed"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CompletedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    lessons?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CompletedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompletedWhereInput | CompletedWhereInput[]
    OR?: CompletedWhereInput[]
    NOT?: CompletedWhereInput | CompletedWhereInput[]
    userId?: IntFilter<"Completed"> | number
    courseId?: IntFilter<"Completed"> | number
    lessons?: IntNullableListFilter<"Completed">
    createdAt?: DateTimeFilter<"Completed"> | Date | string
    updatedAt?: DateTimeFilter<"Completed"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CompletedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    lessons?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompletedCountOrderByAggregateInput
    _avg?: CompletedAvgOrderByAggregateInput
    _max?: CompletedMaxOrderByAggregateInput
    _min?: CompletedMinOrderByAggregateInput
    _sum?: CompletedSumOrderByAggregateInput
  }

  export type CompletedScalarWhereWithAggregatesInput = {
    AND?: CompletedScalarWhereWithAggregatesInput | CompletedScalarWhereWithAggregatesInput[]
    OR?: CompletedScalarWhereWithAggregatesInput[]
    NOT?: CompletedScalarWhereWithAggregatesInput | CompletedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Completed"> | number
    userId?: IntWithAggregatesFilter<"Completed"> | number
    courseId?: IntWithAggregatesFilter<"Completed"> | number
    lessons?: IntNullableListFilter<"Completed">
    createdAt?: DateTimeWithAggregatesFilter<"Completed"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Completed"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    body?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    excerpt?: StringNullableFilter<"Post"> | string | null
    postedById?: IntFilter<"Post"> | number
    slug?: StringNullableFilter<"Post"> | string | null
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    postedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    categories?: CategoryListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    published?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    postedById?: SortOrder
    slug?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    postedBy?: UserOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    body?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    excerpt?: StringNullableFilter<"Post"> | string | null
    postedById?: IntFilter<"Post"> | number
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    postedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    categories?: CategoryListRelationFilter
  }, "id" | "slug">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    published?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    postedById?: SortOrder
    slug?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    body?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    excerpt?: StringNullableWithAggregatesFilter<"Post"> | string | null
    postedById?: IntWithAggregatesFilter<"Post"> | number
    slug?: StringNullableWithAggregatesFilter<"Post"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type QAWhereInput = {
    AND?: QAWhereInput | QAWhereInput[]
    OR?: QAWhereInput[]
    NOT?: QAWhereInput | QAWhereInput[]
    id?: IntFilter<"QA"> | number
    title?: StringFilter<"QA"> | string
    slug?: StringNullableFilter<"QA"> | string | null
    description?: StringFilter<"QA"> | string
    resolved?: BoolFilter<"QA"> | boolean
    postedById?: IntFilter<"QA"> | number
    courseId?: IntNullableFilter<"QA"> | number | null
    lessonId?: IntNullableFilter<"QA"> | number | null
    createdAt?: DateTimeFilter<"QA"> | Date | string
    updatedAt?: DateTimeFilter<"QA"> | Date | string
    answers?: AnswerListRelationFilter
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
    lesson?: XOR<LessonNullableScalarRelationFilter, LessonWhereInput> | null
    postedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type QAOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrderInput | SortOrder
    description?: SortOrder
    resolved?: SortOrder
    postedById?: SortOrder
    courseId?: SortOrderInput | SortOrder
    lessonId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answers?: AnswerOrderByRelationAggregateInput
    course?: CourseOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
    postedBy?: UserOrderByWithRelationInput
  }

  export type QAWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: QAWhereInput | QAWhereInput[]
    OR?: QAWhereInput[]
    NOT?: QAWhereInput | QAWhereInput[]
    title?: StringFilter<"QA"> | string
    description?: StringFilter<"QA"> | string
    resolved?: BoolFilter<"QA"> | boolean
    postedById?: IntFilter<"QA"> | number
    courseId?: IntNullableFilter<"QA"> | number | null
    lessonId?: IntNullableFilter<"QA"> | number | null
    createdAt?: DateTimeFilter<"QA"> | Date | string
    updatedAt?: DateTimeFilter<"QA"> | Date | string
    answers?: AnswerListRelationFilter
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
    lesson?: XOR<LessonNullableScalarRelationFilter, LessonWhereInput> | null
    postedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "slug">

  export type QAOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrderInput | SortOrder
    description?: SortOrder
    resolved?: SortOrder
    postedById?: SortOrder
    courseId?: SortOrderInput | SortOrder
    lessonId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QACountOrderByAggregateInput
    _avg?: QAAvgOrderByAggregateInput
    _max?: QAMaxOrderByAggregateInput
    _min?: QAMinOrderByAggregateInput
    _sum?: QASumOrderByAggregateInput
  }

  export type QAScalarWhereWithAggregatesInput = {
    AND?: QAScalarWhereWithAggregatesInput | QAScalarWhereWithAggregatesInput[]
    OR?: QAScalarWhereWithAggregatesInput[]
    NOT?: QAScalarWhereWithAggregatesInput | QAScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QA"> | number
    title?: StringWithAggregatesFilter<"QA"> | string
    slug?: StringNullableWithAggregatesFilter<"QA"> | string | null
    description?: StringWithAggregatesFilter<"QA"> | string
    resolved?: BoolWithAggregatesFilter<"QA"> | boolean
    postedById?: IntWithAggregatesFilter<"QA"> | number
    courseId?: IntNullableWithAggregatesFilter<"QA"> | number | null
    lessonId?: IntNullableWithAggregatesFilter<"QA"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"QA"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QA"> | Date | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: IntFilter<"Answer"> | number
    content?: StringFilter<"Answer"> | string
    postedById?: IntFilter<"Answer"> | number
    qaId?: IntFilter<"Answer"> | number
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    postedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    qa?: XOR<QAScalarRelationFilter, QAWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    postedById?: SortOrder
    qaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postedBy?: UserOrderByWithRelationInput
    qa?: QAOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    content?: StringFilter<"Answer"> | string
    postedById?: IntFilter<"Answer"> | number
    qaId?: IntFilter<"Answer"> | number
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    postedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    qa?: XOR<QAScalarRelationFilter, QAWhereInput>
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    postedById?: SortOrder
    qaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Answer"> | number
    content?: StringWithAggregatesFilter<"Answer"> | string
    postedById?: IntWithAggregatesFilter<"Answer"> | number
    qaId?: IntWithAggregatesFilter<"Answer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
  }

  export type SupportWhereInput = {
    AND?: SupportWhereInput | SupportWhereInput[]
    OR?: SupportWhereInput[]
    NOT?: SupportWhereInput | SupportWhereInput[]
    id?: IntFilter<"Support"> | number
    courseUrl?: StringNullableFilter<"Support"> | string | null
    message?: StringFilter<"Support"> | string
    resolved?: BoolFilter<"Support"> | boolean
    postedById?: IntFilter<"Support"> | number
    createdAt?: DateTimeFilter<"Support"> | Date | string
    updatedAt?: DateTimeFilter<"Support"> | Date | string
    postedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SupportOrderByWithRelationInput = {
    id?: SortOrder
    courseUrl?: SortOrderInput | SortOrder
    message?: SortOrder
    resolved?: SortOrder
    postedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postedBy?: UserOrderByWithRelationInput
  }

  export type SupportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SupportWhereInput | SupportWhereInput[]
    OR?: SupportWhereInput[]
    NOT?: SupportWhereInput | SupportWhereInput[]
    courseUrl?: StringNullableFilter<"Support"> | string | null
    message?: StringFilter<"Support"> | string
    resolved?: BoolFilter<"Support"> | boolean
    postedById?: IntFilter<"Support"> | number
    createdAt?: DateTimeFilter<"Support"> | Date | string
    updatedAt?: DateTimeFilter<"Support"> | Date | string
    postedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SupportOrderByWithAggregationInput = {
    id?: SortOrder
    courseUrl?: SortOrderInput | SortOrder
    message?: SortOrder
    resolved?: SortOrder
    postedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupportCountOrderByAggregateInput
    _avg?: SupportAvgOrderByAggregateInput
    _max?: SupportMaxOrderByAggregateInput
    _min?: SupportMinOrderByAggregateInput
    _sum?: SupportSumOrderByAggregateInput
  }

  export type SupportScalarWhereWithAggregatesInput = {
    AND?: SupportScalarWhereWithAggregatesInput | SupportScalarWhereWithAggregatesInput[]
    OR?: SupportScalarWhereWithAggregatesInput[]
    NOT?: SupportScalarWhereWithAggregatesInput | SupportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Support"> | number
    courseUrl?: StringNullableWithAggregatesFilter<"Support"> | string | null
    message?: StringWithAggregatesFilter<"Support"> | string
    resolved?: BoolWithAggregatesFilter<"Support"> | boolean
    postedById?: IntWithAggregatesFilter<"Support"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Support"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Support"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    Answer?: AnswerCreateNestedManyWithoutPostedByInput
    Completed?: CompletedCreateNestedManyWithoutUserInput
    Course?: CourseCreateNestedManyWithoutInstructorInput
    posts?: PostCreateNestedManyWithoutPostedByInput
    QA?: QACreateNestedManyWithoutPostedByInput
    Support?: SupportCreateNestedManyWithoutPostedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    Answer?: AnswerUncheckedCreateNestedManyWithoutPostedByInput
    Completed?: CompletedUncheckedCreateNestedManyWithoutUserInput
    Course?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    posts?: PostUncheckedCreateNestedManyWithoutPostedByInput
    QA?: QAUncheckedCreateNestedManyWithoutPostedByInput
    Support?: SupportUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUpdateManyWithoutPostedByNestedInput
    Completed?: CompletedUpdateManyWithoutUserNestedInput
    Course?: CourseUpdateManyWithoutInstructorNestedInput
    posts?: PostUpdateManyWithoutPostedByNestedInput
    QA?: QAUpdateManyWithoutPostedByNestedInput
    Support?: SupportUpdateManyWithoutPostedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUncheckedUpdateManyWithoutPostedByNestedInput
    Completed?: CompletedUncheckedUpdateManyWithoutUserNestedInput
    Course?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    posts?: PostUncheckedUpdateManyWithoutPostedByNestedInput
    QA?: QAUncheckedUpdateManyWithoutPostedByNestedInput
    Support?: SupportUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleCreateInput = {
    title: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutModulesInput
    lessons?: LessonCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: number
    title: string
    slug?: string | null
    courseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutModulesNestedInput
    lessons?: LessonUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: number
    title: string
    slug?: string | null
    courseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Completed?: CompletedCreateNestedManyWithoutCourseInput
    instructor: UserCreateNestedOneWithoutCourseInput
    modules?: ModuleCreateNestedManyWithoutCourseInput
    QA?: QACreateNestedManyWithoutCourseInput
    ratings?: RatingCreateNestedManyWithoutCourseInput
    categories?: CategoryCreateNestedManyWithoutCoursesInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    instructorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Completed?: CompletedUncheckedCreateNestedManyWithoutCourseInput
    modules?: ModuleUncheckedCreateNestedManyWithoutCourseInput
    QA?: QAUncheckedCreateNestedManyWithoutCourseInput
    ratings?: RatingUncheckedCreateNestedManyWithoutCourseInput
    categories?: CategoryUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type CourseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Completed?: CompletedUpdateManyWithoutCourseNestedInput
    instructor?: UserUpdateOneRequiredWithoutCourseNestedInput
    modules?: ModuleUpdateManyWithoutCourseNestedInput
    QA?: QAUpdateManyWithoutCourseNestedInput
    ratings?: RatingUpdateManyWithoutCourseNestedInput
    categories?: CategoryUpdateManyWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Completed?: CompletedUncheckedUpdateManyWithoutCourseNestedInput
    modules?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
    QA?: QAUncheckedUpdateManyWithoutCourseNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutCourseNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    instructorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateInput = {
    title: string
    slug?: string | null
    content: string
    video?: string | null
    freePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lessonType: LessonTypeCreateNestedOneWithoutLessonsInput
    QA?: QACreateNestedManyWithoutLessonInput
    module?: ModuleCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateInput = {
    id?: number
    title: string
    slug?: string | null
    content: string
    video?: string | null
    freePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lessonTypeId: number
    moduleId?: number | null
    QA?: QAUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    freePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonType?: LessonTypeUpdateOneRequiredWithoutLessonsNestedInput
    QA?: QAUpdateManyWithoutLessonNestedInput
    module?: ModuleUpdateOneWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    freePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonTypeId?: IntFieldUpdateOperationsInput | number
    moduleId?: NullableIntFieldUpdateOperationsInput | number | null
    QA?: QAUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: number
    title: string
    slug?: string | null
    content: string
    video?: string | null
    freePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lessonTypeId: number
    moduleId?: number | null
  }

  export type LessonUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    freePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    freePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonTypeId?: IntFieldUpdateOperationsInput | number
    moduleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LessonTypeCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Lessons?: LessonCreateNestedManyWithoutLessonTypeInput
  }

  export type LessonTypeUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Lessons?: LessonUncheckedCreateNestedManyWithoutLessonTypeInput
  }

  export type LessonTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Lessons?: LessonUpdateManyWithoutLessonTypeNestedInput
  }

  export type LessonTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Lessons?: LessonUncheckedUpdateManyWithoutLessonTypeNestedInput
  }

  export type LessonTypeCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateInput = {
    value: number
    comment?: string | null
    course: CourseCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateInput = {
    id?: number
    value: number
    comment?: string | null
    courseId: number
  }

  export type RatingUpdateInput = {
    value?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    course?: CourseUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type RatingCreateManyInput = {
    id?: number
    value: number
    comment?: string | null
    courseId: number
  }

  export type RatingUpdateManyMutationInput = {
    value?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutCategoriesInput
    Post?: PostCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutCategoriesInput
    Post?: PostUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutCategoriesNestedInput
    Post?: PostUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutCategoriesNestedInput
    Post?: PostUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedCreateInput = {
    lessons?: CompletedCreatelessonsInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCompletedInput
    user: UserCreateNestedOneWithoutCompletedInput
  }

  export type CompletedUncheckedCreateInput = {
    id?: number
    userId: number
    courseId: number
    lessons?: CompletedCreatelessonsInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedUpdateInput = {
    lessons?: CompletedUpdatelessonsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCompletedNestedInput
    user?: UserUpdateOneRequiredWithoutCompletedNestedInput
  }

  export type CompletedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    lessons?: CompletedUpdatelessonsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedCreateManyInput = {
    id?: number
    userId: number
    courseId: number
    lessons?: CompletedCreatelessonsInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedUpdateManyMutationInput = {
    lessons?: CompletedUpdatelessonsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    lessons?: CompletedUpdatelessonsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    title: string
    published?: boolean
    body: string
    createdAt?: Date | string
    excerpt?: string | null
    slug?: string | null
    updatedAt?: Date | string
    postedBy: UserCreateNestedOneWithoutPostsInput
    categories?: CategoryCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    published?: boolean
    body: string
    createdAt?: Date | string
    excerpt?: string | null
    postedById: number
    slug?: string | null
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedBy?: UserUpdateOneRequiredWithoutPostsNestedInput
    categories?: CategoryUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    postedById?: IntFieldUpdateOperationsInput | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    published?: boolean
    body: string
    createdAt?: Date | string
    excerpt?: string | null
    postedById: number
    slug?: string | null
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    postedById?: IntFieldUpdateOperationsInput | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QACreateInput = {
    title: string
    slug?: string | null
    description: string
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerCreateNestedManyWithoutQaInput
    course?: CourseCreateNestedOneWithoutQAInput
    lesson?: LessonCreateNestedOneWithoutQAInput
    postedBy: UserCreateNestedOneWithoutQAInput
  }

  export type QAUncheckedCreateInput = {
    id?: number
    title: string
    slug?: string | null
    description: string
    resolved?: boolean
    postedById: number
    courseId?: number | null
    lessonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQaInput
  }

  export type QAUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUpdateManyWithoutQaNestedInput
    course?: CourseUpdateOneWithoutQANestedInput
    lesson?: LessonUpdateOneWithoutQANestedInput
    postedBy?: UserUpdateOneRequiredWithoutQANestedInput
  }

  export type QAUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    postedById?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    lessonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQaNestedInput
  }

  export type QACreateManyInput = {
    id?: number
    title: string
    slug?: string | null
    description: string
    resolved?: boolean
    postedById: number
    courseId?: number | null
    lessonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QAUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QAUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    postedById?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    lessonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postedBy: UserCreateNestedOneWithoutAnswerInput
    qa: QACreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: number
    content: string
    postedById: number
    qaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedBy?: UserUpdateOneRequiredWithoutAnswerNestedInput
    qa?: QAUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedById?: IntFieldUpdateOperationsInput | number
    qaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyInput = {
    id?: number
    content: string
    postedById: number
    qaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedById?: IntFieldUpdateOperationsInput | number
    qaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportCreateInput = {
    courseUrl?: string | null
    message: string
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    postedBy: UserCreateNestedOneWithoutSupportInput
  }

  export type SupportUncheckedCreateInput = {
    id?: number
    courseUrl?: string | null
    message: string
    resolved?: boolean
    postedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportUpdateInput = {
    courseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedBy?: UserUpdateOneRequiredWithoutSupportNestedInput
  }

  export type SupportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    postedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportCreateManyInput = {
    id?: number
    courseUrl?: string | null
    message: string
    resolved?: boolean
    postedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportUpdateManyMutationInput = {
    courseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    postedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type CompletedListRelationFilter = {
    every?: CompletedWhereInput
    some?: CompletedWhereInput
    none?: CompletedWhereInput
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type QAListRelationFilter = {
    every?: QAWhereInput
    some?: QAWhereInput
    none?: QAWhereInput
  }

  export type SupportListRelationFilter = {
    every?: SupportWhereInput
    some?: SupportWhereInput
    none?: SupportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompletedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QAOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    passwordResetCode?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    stripeAccountId?: SortOrder
    stripeSeller?: SortOrder
    stripeSession?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    passwordResetCode?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    stripeAccountId?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    passwordResetCode?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    stripeAccountId?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ModuleListRelationFilter = {
    every?: ModuleWhereInput
    some?: ModuleWhereInput
    none?: ModuleWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type ModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    onSale?: SortOrder
    displayPrice?: SortOrder
    image?: SortOrder
    published?: SortOrder
    completed?: SortOrder
    difficulty?: SortOrder
    paid?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    displayPrice?: SortOrder
    completed?: SortOrder
    instructorId?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    onSale?: SortOrder
    displayPrice?: SortOrder
    image?: SortOrder
    published?: SortOrder
    difficulty?: SortOrder
    paid?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    onSale?: SortOrder
    displayPrice?: SortOrder
    image?: SortOrder
    published?: SortOrder
    difficulty?: SortOrder
    paid?: SortOrder
    instructorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    displayPrice?: SortOrder
    completed?: SortOrder
    instructorId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LessonTypeScalarRelationFilter = {
    is?: LessonTypeWhereInput
    isNot?: LessonTypeWhereInput
  }

  export type ModuleNullableScalarRelationFilter = {
    is?: ModuleWhereInput | null
    isNot?: ModuleWhereInput | null
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    video?: SortOrder
    freePreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lessonTypeId?: SortOrder
    moduleId?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    id?: SortOrder
    lessonTypeId?: SortOrder
    moduleId?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    video?: SortOrder
    freePreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lessonTypeId?: SortOrder
    moduleId?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    video?: SortOrder
    freePreview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lessonTypeId?: SortOrder
    moduleId?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    id?: SortOrder
    lessonTypeId?: SortOrder
    moduleId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type LessonTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LessonTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    comment?: SortOrder
    courseId?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    courseId?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    comment?: SortOrder
    courseId?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    comment?: SortOrder
    courseId?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    courseId?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompletedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    lessons?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompletedAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    lessons?: SortOrder
  }

  export type CompletedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompletedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompletedSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    lessons?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    published?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    excerpt?: SortOrder
    postedById?: SortOrder
    slug?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    postedById?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    published?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    excerpt?: SortOrder
    postedById?: SortOrder
    slug?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    published?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    excerpt?: SortOrder
    postedById?: SortOrder
    slug?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    postedById?: SortOrder
  }

  export type CourseNullableScalarRelationFilter = {
    is?: CourseWhereInput | null
    isNot?: CourseWhereInput | null
  }

  export type LessonNullableScalarRelationFilter = {
    is?: LessonWhereInput | null
    isNot?: LessonWhereInput | null
  }

  export type QACountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    resolved?: SortOrder
    postedById?: SortOrder
    courseId?: SortOrder
    lessonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QAAvgOrderByAggregateInput = {
    id?: SortOrder
    postedById?: SortOrder
    courseId?: SortOrder
    lessonId?: SortOrder
  }

  export type QAMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    resolved?: SortOrder
    postedById?: SortOrder
    courseId?: SortOrder
    lessonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QAMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    resolved?: SortOrder
    postedById?: SortOrder
    courseId?: SortOrder
    lessonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QASumOrderByAggregateInput = {
    id?: SortOrder
    postedById?: SortOrder
    courseId?: SortOrder
    lessonId?: SortOrder
  }

  export type QAScalarRelationFilter = {
    is?: QAWhereInput
    isNot?: QAWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postedById?: SortOrder
    qaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    postedById?: SortOrder
    qaId?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postedById?: SortOrder
    qaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postedById?: SortOrder
    qaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    id?: SortOrder
    postedById?: SortOrder
    qaId?: SortOrder
  }

  export type SupportCountOrderByAggregateInput = {
    id?: SortOrder
    courseUrl?: SortOrder
    message?: SortOrder
    resolved?: SortOrder
    postedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportAvgOrderByAggregateInput = {
    id?: SortOrder
    postedById?: SortOrder
  }

  export type SupportMaxOrderByAggregateInput = {
    id?: SortOrder
    courseUrl?: SortOrder
    message?: SortOrder
    resolved?: SortOrder
    postedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportMinOrderByAggregateInput = {
    id?: SortOrder
    courseUrl?: SortOrder
    message?: SortOrder
    resolved?: SortOrder
    postedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportSumOrderByAggregateInput = {
    id?: SortOrder
    postedById?: SortOrder
  }

  export type AnswerCreateNestedManyWithoutPostedByInput = {
    create?: XOR<AnswerCreateWithoutPostedByInput, AnswerUncheckedCreateWithoutPostedByInput> | AnswerCreateWithoutPostedByInput[] | AnswerUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutPostedByInput | AnswerCreateOrConnectWithoutPostedByInput[]
    createMany?: AnswerCreateManyPostedByInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CompletedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletedCreateWithoutUserInput, CompletedUncheckedCreateWithoutUserInput> | CompletedCreateWithoutUserInput[] | CompletedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCreateOrConnectWithoutUserInput | CompletedCreateOrConnectWithoutUserInput[]
    createMany?: CompletedCreateManyUserInputEnvelope
    connect?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutPostedByInput = {
    create?: XOR<PostCreateWithoutPostedByInput, PostUncheckedCreateWithoutPostedByInput> | PostCreateWithoutPostedByInput[] | PostUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPostedByInput | PostCreateOrConnectWithoutPostedByInput[]
    createMany?: PostCreateManyPostedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type QACreateNestedManyWithoutPostedByInput = {
    create?: XOR<QACreateWithoutPostedByInput, QAUncheckedCreateWithoutPostedByInput> | QACreateWithoutPostedByInput[] | QAUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: QACreateOrConnectWithoutPostedByInput | QACreateOrConnectWithoutPostedByInput[]
    createMany?: QACreateManyPostedByInputEnvelope
    connect?: QAWhereUniqueInput | QAWhereUniqueInput[]
  }

  export type SupportCreateNestedManyWithoutPostedByInput = {
    create?: XOR<SupportCreateWithoutPostedByInput, SupportUncheckedCreateWithoutPostedByInput> | SupportCreateWithoutPostedByInput[] | SupportUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: SupportCreateOrConnectWithoutPostedByInput | SupportCreateOrConnectWithoutPostedByInput[]
    createMany?: SupportCreateManyPostedByInputEnvelope
    connect?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutPostedByInput = {
    create?: XOR<AnswerCreateWithoutPostedByInput, AnswerUncheckedCreateWithoutPostedByInput> | AnswerCreateWithoutPostedByInput[] | AnswerUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutPostedByInput | AnswerCreateOrConnectWithoutPostedByInput[]
    createMany?: AnswerCreateManyPostedByInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CompletedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletedCreateWithoutUserInput, CompletedUncheckedCreateWithoutUserInput> | CompletedCreateWithoutUserInput[] | CompletedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCreateOrConnectWithoutUserInput | CompletedCreateOrConnectWithoutUserInput[]
    createMany?: CompletedCreateManyUserInputEnvelope
    connect?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutPostedByInput = {
    create?: XOR<PostCreateWithoutPostedByInput, PostUncheckedCreateWithoutPostedByInput> | PostCreateWithoutPostedByInput[] | PostUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPostedByInput | PostCreateOrConnectWithoutPostedByInput[]
    createMany?: PostCreateManyPostedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type QAUncheckedCreateNestedManyWithoutPostedByInput = {
    create?: XOR<QACreateWithoutPostedByInput, QAUncheckedCreateWithoutPostedByInput> | QACreateWithoutPostedByInput[] | QAUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: QACreateOrConnectWithoutPostedByInput | QACreateOrConnectWithoutPostedByInput[]
    createMany?: QACreateManyPostedByInputEnvelope
    connect?: QAWhereUniqueInput | QAWhereUniqueInput[]
  }

  export type SupportUncheckedCreateNestedManyWithoutPostedByInput = {
    create?: XOR<SupportCreateWithoutPostedByInput, SupportUncheckedCreateWithoutPostedByInput> | SupportCreateWithoutPostedByInput[] | SupportUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: SupportCreateOrConnectWithoutPostedByInput | SupportCreateOrConnectWithoutPostedByInput[]
    createMany?: SupportCreateManyPostedByInputEnvelope
    connect?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type AnswerUpdateManyWithoutPostedByNestedInput = {
    create?: XOR<AnswerCreateWithoutPostedByInput, AnswerUncheckedCreateWithoutPostedByInput> | AnswerCreateWithoutPostedByInput[] | AnswerUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutPostedByInput | AnswerCreateOrConnectWithoutPostedByInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutPostedByInput | AnswerUpsertWithWhereUniqueWithoutPostedByInput[]
    createMany?: AnswerCreateManyPostedByInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutPostedByInput | AnswerUpdateWithWhereUniqueWithoutPostedByInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutPostedByInput | AnswerUpdateManyWithWhereWithoutPostedByInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CompletedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletedCreateWithoutUserInput, CompletedUncheckedCreateWithoutUserInput> | CompletedCreateWithoutUserInput[] | CompletedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCreateOrConnectWithoutUserInput | CompletedCreateOrConnectWithoutUserInput[]
    upsert?: CompletedUpsertWithWhereUniqueWithoutUserInput | CompletedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletedCreateManyUserInputEnvelope
    set?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    disconnect?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    delete?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    connect?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    update?: CompletedUpdateWithWhereUniqueWithoutUserInput | CompletedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletedUpdateManyWithWhereWithoutUserInput | CompletedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletedScalarWhereInput | CompletedScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorInput | CourseUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorInput | CourseUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorInput | CourseUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type PostUpdateManyWithoutPostedByNestedInput = {
    create?: XOR<PostCreateWithoutPostedByInput, PostUncheckedCreateWithoutPostedByInput> | PostCreateWithoutPostedByInput[] | PostUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPostedByInput | PostCreateOrConnectWithoutPostedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutPostedByInput | PostUpsertWithWhereUniqueWithoutPostedByInput[]
    createMany?: PostCreateManyPostedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutPostedByInput | PostUpdateWithWhereUniqueWithoutPostedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutPostedByInput | PostUpdateManyWithWhereWithoutPostedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type QAUpdateManyWithoutPostedByNestedInput = {
    create?: XOR<QACreateWithoutPostedByInput, QAUncheckedCreateWithoutPostedByInput> | QACreateWithoutPostedByInput[] | QAUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: QACreateOrConnectWithoutPostedByInput | QACreateOrConnectWithoutPostedByInput[]
    upsert?: QAUpsertWithWhereUniqueWithoutPostedByInput | QAUpsertWithWhereUniqueWithoutPostedByInput[]
    createMany?: QACreateManyPostedByInputEnvelope
    set?: QAWhereUniqueInput | QAWhereUniqueInput[]
    disconnect?: QAWhereUniqueInput | QAWhereUniqueInput[]
    delete?: QAWhereUniqueInput | QAWhereUniqueInput[]
    connect?: QAWhereUniqueInput | QAWhereUniqueInput[]
    update?: QAUpdateWithWhereUniqueWithoutPostedByInput | QAUpdateWithWhereUniqueWithoutPostedByInput[]
    updateMany?: QAUpdateManyWithWhereWithoutPostedByInput | QAUpdateManyWithWhereWithoutPostedByInput[]
    deleteMany?: QAScalarWhereInput | QAScalarWhereInput[]
  }

  export type SupportUpdateManyWithoutPostedByNestedInput = {
    create?: XOR<SupportCreateWithoutPostedByInput, SupportUncheckedCreateWithoutPostedByInput> | SupportCreateWithoutPostedByInput[] | SupportUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: SupportCreateOrConnectWithoutPostedByInput | SupportCreateOrConnectWithoutPostedByInput[]
    upsert?: SupportUpsertWithWhereUniqueWithoutPostedByInput | SupportUpsertWithWhereUniqueWithoutPostedByInput[]
    createMany?: SupportCreateManyPostedByInputEnvelope
    set?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    disconnect?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    delete?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    connect?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    update?: SupportUpdateWithWhereUniqueWithoutPostedByInput | SupportUpdateWithWhereUniqueWithoutPostedByInput[]
    updateMany?: SupportUpdateManyWithWhereWithoutPostedByInput | SupportUpdateManyWithWhereWithoutPostedByInput[]
    deleteMany?: SupportScalarWhereInput | SupportScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnswerUncheckedUpdateManyWithoutPostedByNestedInput = {
    create?: XOR<AnswerCreateWithoutPostedByInput, AnswerUncheckedCreateWithoutPostedByInput> | AnswerCreateWithoutPostedByInput[] | AnswerUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutPostedByInput | AnswerCreateOrConnectWithoutPostedByInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutPostedByInput | AnswerUpsertWithWhereUniqueWithoutPostedByInput[]
    createMany?: AnswerCreateManyPostedByInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutPostedByInput | AnswerUpdateWithWhereUniqueWithoutPostedByInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutPostedByInput | AnswerUpdateManyWithWhereWithoutPostedByInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CompletedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletedCreateWithoutUserInput, CompletedUncheckedCreateWithoutUserInput> | CompletedCreateWithoutUserInput[] | CompletedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCreateOrConnectWithoutUserInput | CompletedCreateOrConnectWithoutUserInput[]
    upsert?: CompletedUpsertWithWhereUniqueWithoutUserInput | CompletedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletedCreateManyUserInputEnvelope
    set?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    disconnect?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    delete?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    connect?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    update?: CompletedUpdateWithWhereUniqueWithoutUserInput | CompletedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletedUpdateManyWithWhereWithoutUserInput | CompletedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletedScalarWhereInput | CompletedScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorInput | CourseUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorInput | CourseUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorInput | CourseUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutPostedByNestedInput = {
    create?: XOR<PostCreateWithoutPostedByInput, PostUncheckedCreateWithoutPostedByInput> | PostCreateWithoutPostedByInput[] | PostUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPostedByInput | PostCreateOrConnectWithoutPostedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutPostedByInput | PostUpsertWithWhereUniqueWithoutPostedByInput[]
    createMany?: PostCreateManyPostedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutPostedByInput | PostUpdateWithWhereUniqueWithoutPostedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutPostedByInput | PostUpdateManyWithWhereWithoutPostedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type QAUncheckedUpdateManyWithoutPostedByNestedInput = {
    create?: XOR<QACreateWithoutPostedByInput, QAUncheckedCreateWithoutPostedByInput> | QACreateWithoutPostedByInput[] | QAUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: QACreateOrConnectWithoutPostedByInput | QACreateOrConnectWithoutPostedByInput[]
    upsert?: QAUpsertWithWhereUniqueWithoutPostedByInput | QAUpsertWithWhereUniqueWithoutPostedByInput[]
    createMany?: QACreateManyPostedByInputEnvelope
    set?: QAWhereUniqueInput | QAWhereUniqueInput[]
    disconnect?: QAWhereUniqueInput | QAWhereUniqueInput[]
    delete?: QAWhereUniqueInput | QAWhereUniqueInput[]
    connect?: QAWhereUniqueInput | QAWhereUniqueInput[]
    update?: QAUpdateWithWhereUniqueWithoutPostedByInput | QAUpdateWithWhereUniqueWithoutPostedByInput[]
    updateMany?: QAUpdateManyWithWhereWithoutPostedByInput | QAUpdateManyWithWhereWithoutPostedByInput[]
    deleteMany?: QAScalarWhereInput | QAScalarWhereInput[]
  }

  export type SupportUncheckedUpdateManyWithoutPostedByNestedInput = {
    create?: XOR<SupportCreateWithoutPostedByInput, SupportUncheckedCreateWithoutPostedByInput> | SupportCreateWithoutPostedByInput[] | SupportUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: SupportCreateOrConnectWithoutPostedByInput | SupportCreateOrConnectWithoutPostedByInput[]
    upsert?: SupportUpsertWithWhereUniqueWithoutPostedByInput | SupportUpsertWithWhereUniqueWithoutPostedByInput[]
    createMany?: SupportCreateManyPostedByInputEnvelope
    set?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    disconnect?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    delete?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    connect?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    update?: SupportUpdateWithWhereUniqueWithoutPostedByInput | SupportUpdateWithWhereUniqueWithoutPostedByInput[]
    updateMany?: SupportUpdateManyWithWhereWithoutPostedByInput | SupportUpdateManyWithWhereWithoutPostedByInput[]
    deleteMany?: SupportScalarWhereInput | SupportScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutModulesInput = {
    create?: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutModulesInput
    connect?: CourseWhereUniqueInput
  }

  export type LessonCreateNestedManyWithoutModuleInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutModulesInput
    upsert?: CourseUpsertWithoutModulesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutModulesInput, CourseUpdateWithoutModulesInput>, CourseUncheckedUpdateWithoutModulesInput>
  }

  export type LessonUpdateManyWithoutModuleNestedInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutModuleInput | LessonUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutModuleInput | LessonUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutModuleInput | LessonUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutModuleInput | LessonUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutModuleInput | LessonUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutModuleInput | LessonUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type CourseCreatecompletedInput = {
    set: number[]
  }

  export type CompletedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CompletedCreateWithoutCourseInput, CompletedUncheckedCreateWithoutCourseInput> | CompletedCreateWithoutCourseInput[] | CompletedUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CompletedCreateOrConnectWithoutCourseInput | CompletedCreateOrConnectWithoutCourseInput[]
    createMany?: CompletedCreateManyCourseInputEnvelope
    connect?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCourseInput = {
    create?: XOR<UserCreateWithoutCourseInput, UserUncheckedCreateWithoutCourseInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseInput
    connect?: UserWhereUniqueInput
  }

  export type ModuleCreateNestedManyWithoutCourseInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type QACreateNestedManyWithoutCourseInput = {
    create?: XOR<QACreateWithoutCourseInput, QAUncheckedCreateWithoutCourseInput> | QACreateWithoutCourseInput[] | QAUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: QACreateOrConnectWithoutCourseInput | QACreateOrConnectWithoutCourseInput[]
    createMany?: QACreateManyCourseInputEnvelope
    connect?: QAWhereUniqueInput | QAWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutCourseInput = {
    create?: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput> | RatingCreateWithoutCourseInput[] | RatingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutCourseInput | RatingCreateOrConnectWithoutCourseInput[]
    createMany?: RatingCreateManyCourseInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutCoursesInput = {
    create?: XOR<CategoryCreateWithoutCoursesInput, CategoryUncheckedCreateWithoutCoursesInput> | CategoryCreateWithoutCoursesInput[] | CategoryUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutCoursesInput | CategoryCreateOrConnectWithoutCoursesInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CompletedUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CompletedCreateWithoutCourseInput, CompletedUncheckedCreateWithoutCourseInput> | CompletedCreateWithoutCourseInput[] | CompletedUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CompletedCreateOrConnectWithoutCourseInput | CompletedCreateOrConnectWithoutCourseInput[]
    createMany?: CompletedCreateManyCourseInputEnvelope
    connect?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
  }

  export type ModuleUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type QAUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<QACreateWithoutCourseInput, QAUncheckedCreateWithoutCourseInput> | QACreateWithoutCourseInput[] | QAUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: QACreateOrConnectWithoutCourseInput | QACreateOrConnectWithoutCourseInput[]
    createMany?: QACreateManyCourseInputEnvelope
    connect?: QAWhereUniqueInput | QAWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput> | RatingCreateWithoutCourseInput[] | RatingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutCourseInput | RatingCreateOrConnectWithoutCourseInput[]
    createMany?: RatingCreateManyCourseInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: XOR<CategoryCreateWithoutCoursesInput, CategoryUncheckedCreateWithoutCoursesInput> | CategoryCreateWithoutCoursesInput[] | CategoryUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutCoursesInput | CategoryCreateOrConnectWithoutCoursesInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdatecompletedInput = {
    set?: number[]
    push?: number | number[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type CompletedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CompletedCreateWithoutCourseInput, CompletedUncheckedCreateWithoutCourseInput> | CompletedCreateWithoutCourseInput[] | CompletedUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CompletedCreateOrConnectWithoutCourseInput | CompletedCreateOrConnectWithoutCourseInput[]
    upsert?: CompletedUpsertWithWhereUniqueWithoutCourseInput | CompletedUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CompletedCreateManyCourseInputEnvelope
    set?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    disconnect?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    delete?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    connect?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    update?: CompletedUpdateWithWhereUniqueWithoutCourseInput | CompletedUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CompletedUpdateManyWithWhereWithoutCourseInput | CompletedUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CompletedScalarWhereInput | CompletedScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<UserCreateWithoutCourseInput, UserUncheckedCreateWithoutCourseInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseInput
    upsert?: UserUpsertWithoutCourseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCourseInput, UserUpdateWithoutCourseInput>, UserUncheckedUpdateWithoutCourseInput>
  }

  export type ModuleUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutCourseInput | ModuleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutCourseInput | ModuleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutCourseInput | ModuleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type QAUpdateManyWithoutCourseNestedInput = {
    create?: XOR<QACreateWithoutCourseInput, QAUncheckedCreateWithoutCourseInput> | QACreateWithoutCourseInput[] | QAUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: QACreateOrConnectWithoutCourseInput | QACreateOrConnectWithoutCourseInput[]
    upsert?: QAUpsertWithWhereUniqueWithoutCourseInput | QAUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: QACreateManyCourseInputEnvelope
    set?: QAWhereUniqueInput | QAWhereUniqueInput[]
    disconnect?: QAWhereUniqueInput | QAWhereUniqueInput[]
    delete?: QAWhereUniqueInput | QAWhereUniqueInput[]
    connect?: QAWhereUniqueInput | QAWhereUniqueInput[]
    update?: QAUpdateWithWhereUniqueWithoutCourseInput | QAUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: QAUpdateManyWithWhereWithoutCourseInput | QAUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: QAScalarWhereInput | QAScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput> | RatingCreateWithoutCourseInput[] | RatingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutCourseInput | RatingCreateOrConnectWithoutCourseInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutCourseInput | RatingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RatingCreateManyCourseInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutCourseInput | RatingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutCourseInput | RatingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<CategoryCreateWithoutCoursesInput, CategoryUncheckedCreateWithoutCoursesInput> | CategoryCreateWithoutCoursesInput[] | CategoryUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutCoursesInput | CategoryCreateOrConnectWithoutCoursesInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutCoursesInput | CategoryUpsertWithWhereUniqueWithoutCoursesInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutCoursesInput | CategoryUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutCoursesInput | CategoryUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CompletedUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CompletedCreateWithoutCourseInput, CompletedUncheckedCreateWithoutCourseInput> | CompletedCreateWithoutCourseInput[] | CompletedUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CompletedCreateOrConnectWithoutCourseInput | CompletedCreateOrConnectWithoutCourseInput[]
    upsert?: CompletedUpsertWithWhereUniqueWithoutCourseInput | CompletedUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CompletedCreateManyCourseInputEnvelope
    set?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    disconnect?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    delete?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    connect?: CompletedWhereUniqueInput | CompletedWhereUniqueInput[]
    update?: CompletedUpdateWithWhereUniqueWithoutCourseInput | CompletedUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CompletedUpdateManyWithWhereWithoutCourseInput | CompletedUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CompletedScalarWhereInput | CompletedScalarWhereInput[]
  }

  export type ModuleUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutCourseInput | ModuleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutCourseInput | ModuleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutCourseInput | ModuleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type QAUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<QACreateWithoutCourseInput, QAUncheckedCreateWithoutCourseInput> | QACreateWithoutCourseInput[] | QAUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: QACreateOrConnectWithoutCourseInput | QACreateOrConnectWithoutCourseInput[]
    upsert?: QAUpsertWithWhereUniqueWithoutCourseInput | QAUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: QACreateManyCourseInputEnvelope
    set?: QAWhereUniqueInput | QAWhereUniqueInput[]
    disconnect?: QAWhereUniqueInput | QAWhereUniqueInput[]
    delete?: QAWhereUniqueInput | QAWhereUniqueInput[]
    connect?: QAWhereUniqueInput | QAWhereUniqueInput[]
    update?: QAUpdateWithWhereUniqueWithoutCourseInput | QAUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: QAUpdateManyWithWhereWithoutCourseInput | QAUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: QAScalarWhereInput | QAScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput> | RatingCreateWithoutCourseInput[] | RatingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutCourseInput | RatingCreateOrConnectWithoutCourseInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutCourseInput | RatingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RatingCreateManyCourseInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutCourseInput | RatingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutCourseInput | RatingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<CategoryCreateWithoutCoursesInput, CategoryUncheckedCreateWithoutCoursesInput> | CategoryCreateWithoutCoursesInput[] | CategoryUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutCoursesInput | CategoryCreateOrConnectWithoutCoursesInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutCoursesInput | CategoryUpsertWithWhereUniqueWithoutCoursesInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutCoursesInput | CategoryUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutCoursesInput | CategoryUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type LessonTypeCreateNestedOneWithoutLessonsInput = {
    create?: XOR<LessonTypeCreateWithoutLessonsInput, LessonTypeUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: LessonTypeCreateOrConnectWithoutLessonsInput
    connect?: LessonTypeWhereUniqueInput
  }

  export type QACreateNestedManyWithoutLessonInput = {
    create?: XOR<QACreateWithoutLessonInput, QAUncheckedCreateWithoutLessonInput> | QACreateWithoutLessonInput[] | QAUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: QACreateOrConnectWithoutLessonInput | QACreateOrConnectWithoutLessonInput[]
    createMany?: QACreateManyLessonInputEnvelope
    connect?: QAWhereUniqueInput | QAWhereUniqueInput[]
  }

  export type ModuleCreateNestedOneWithoutLessonsInput = {
    create?: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutLessonsInput
    connect?: ModuleWhereUniqueInput
  }

  export type QAUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<QACreateWithoutLessonInput, QAUncheckedCreateWithoutLessonInput> | QACreateWithoutLessonInput[] | QAUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: QACreateOrConnectWithoutLessonInput | QACreateOrConnectWithoutLessonInput[]
    createMany?: QACreateManyLessonInputEnvelope
    connect?: QAWhereUniqueInput | QAWhereUniqueInput[]
  }

  export type LessonTypeUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<LessonTypeCreateWithoutLessonsInput, LessonTypeUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: LessonTypeCreateOrConnectWithoutLessonsInput
    upsert?: LessonTypeUpsertWithoutLessonsInput
    connect?: LessonTypeWhereUniqueInput
    update?: XOR<XOR<LessonTypeUpdateToOneWithWhereWithoutLessonsInput, LessonTypeUpdateWithoutLessonsInput>, LessonTypeUncheckedUpdateWithoutLessonsInput>
  }

  export type QAUpdateManyWithoutLessonNestedInput = {
    create?: XOR<QACreateWithoutLessonInput, QAUncheckedCreateWithoutLessonInput> | QACreateWithoutLessonInput[] | QAUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: QACreateOrConnectWithoutLessonInput | QACreateOrConnectWithoutLessonInput[]
    upsert?: QAUpsertWithWhereUniqueWithoutLessonInput | QAUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: QACreateManyLessonInputEnvelope
    set?: QAWhereUniqueInput | QAWhereUniqueInput[]
    disconnect?: QAWhereUniqueInput | QAWhereUniqueInput[]
    delete?: QAWhereUniqueInput | QAWhereUniqueInput[]
    connect?: QAWhereUniqueInput | QAWhereUniqueInput[]
    update?: QAUpdateWithWhereUniqueWithoutLessonInput | QAUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: QAUpdateManyWithWhereWithoutLessonInput | QAUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: QAScalarWhereInput | QAScalarWhereInput[]
  }

  export type ModuleUpdateOneWithoutLessonsNestedInput = {
    create?: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutLessonsInput
    upsert?: ModuleUpsertWithoutLessonsInput
    disconnect?: ModuleWhereInput | boolean
    delete?: ModuleWhereInput | boolean
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutLessonsInput, ModuleUpdateWithoutLessonsInput>, ModuleUncheckedUpdateWithoutLessonsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QAUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<QACreateWithoutLessonInput, QAUncheckedCreateWithoutLessonInput> | QACreateWithoutLessonInput[] | QAUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: QACreateOrConnectWithoutLessonInput | QACreateOrConnectWithoutLessonInput[]
    upsert?: QAUpsertWithWhereUniqueWithoutLessonInput | QAUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: QACreateManyLessonInputEnvelope
    set?: QAWhereUniqueInput | QAWhereUniqueInput[]
    disconnect?: QAWhereUniqueInput | QAWhereUniqueInput[]
    delete?: QAWhereUniqueInput | QAWhereUniqueInput[]
    connect?: QAWhereUniqueInput | QAWhereUniqueInput[]
    update?: QAUpdateWithWhereUniqueWithoutLessonInput | QAUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: QAUpdateManyWithWhereWithoutLessonInput | QAUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: QAScalarWhereInput | QAScalarWhereInput[]
  }

  export type LessonCreateNestedManyWithoutLessonTypeInput = {
    create?: XOR<LessonCreateWithoutLessonTypeInput, LessonUncheckedCreateWithoutLessonTypeInput> | LessonCreateWithoutLessonTypeInput[] | LessonUncheckedCreateWithoutLessonTypeInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutLessonTypeInput | LessonCreateOrConnectWithoutLessonTypeInput[]
    createMany?: LessonCreateManyLessonTypeInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutLessonTypeInput = {
    create?: XOR<LessonCreateWithoutLessonTypeInput, LessonUncheckedCreateWithoutLessonTypeInput> | LessonCreateWithoutLessonTypeInput[] | LessonUncheckedCreateWithoutLessonTypeInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutLessonTypeInput | LessonCreateOrConnectWithoutLessonTypeInput[]
    createMany?: LessonCreateManyLessonTypeInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonUpdateManyWithoutLessonTypeNestedInput = {
    create?: XOR<LessonCreateWithoutLessonTypeInput, LessonUncheckedCreateWithoutLessonTypeInput> | LessonCreateWithoutLessonTypeInput[] | LessonUncheckedCreateWithoutLessonTypeInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutLessonTypeInput | LessonCreateOrConnectWithoutLessonTypeInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutLessonTypeInput | LessonUpsertWithWhereUniqueWithoutLessonTypeInput[]
    createMany?: LessonCreateManyLessonTypeInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutLessonTypeInput | LessonUpdateWithWhereUniqueWithoutLessonTypeInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutLessonTypeInput | LessonUpdateManyWithWhereWithoutLessonTypeInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutLessonTypeNestedInput = {
    create?: XOR<LessonCreateWithoutLessonTypeInput, LessonUncheckedCreateWithoutLessonTypeInput> | LessonCreateWithoutLessonTypeInput[] | LessonUncheckedCreateWithoutLessonTypeInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutLessonTypeInput | LessonCreateOrConnectWithoutLessonTypeInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutLessonTypeInput | LessonUpsertWithWhereUniqueWithoutLessonTypeInput[]
    createMany?: LessonCreateManyLessonTypeInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutLessonTypeInput | LessonUpdateWithWhereUniqueWithoutLessonTypeInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutLessonTypeInput | LessonUpdateManyWithWhereWithoutLessonTypeInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutRatingsInput = {
    create?: XOR<CourseCreateWithoutRatingsInput, CourseUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRatingsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<CourseCreateWithoutRatingsInput, CourseUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRatingsInput
    upsert?: CourseUpsertWithoutRatingsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutRatingsInput, CourseUpdateWithoutRatingsInput>, CourseUncheckedUpdateWithoutRatingsInput>
  }

  export type CourseCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<CourseCreateWithoutCategoriesInput, CourseUncheckedCreateWithoutCategoriesInput> | CourseCreateWithoutCategoriesInput[] | CourseUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoriesInput | CourseCreateOrConnectWithoutCategoriesInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput> | PostCreateWithoutCategoriesInput[] | PostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput | PostCreateOrConnectWithoutCategoriesInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<CourseCreateWithoutCategoriesInput, CourseUncheckedCreateWithoutCategoriesInput> | CourseCreateWithoutCategoriesInput[] | CourseUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoriesInput | CourseCreateOrConnectWithoutCategoriesInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput> | PostCreateWithoutCategoriesInput[] | PostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput | PostCreateOrConnectWithoutCategoriesInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<CourseCreateWithoutCategoriesInput, CourseUncheckedCreateWithoutCategoriesInput> | CourseCreateWithoutCategoriesInput[] | CourseUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoriesInput | CourseCreateOrConnectWithoutCategoriesInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCategoriesInput | CourseUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCategoriesInput | CourseUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCategoriesInput | CourseUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput> | PostCreateWithoutCategoriesInput[] | PostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput | PostCreateOrConnectWithoutCategoriesInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoriesInput | PostUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoriesInput | PostUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoriesInput | PostUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<CourseCreateWithoutCategoriesInput, CourseUncheckedCreateWithoutCategoriesInput> | CourseCreateWithoutCategoriesInput[] | CourseUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoriesInput | CourseCreateOrConnectWithoutCategoriesInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCategoriesInput | CourseUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCategoriesInput | CourseUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCategoriesInput | CourseUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput> | PostCreateWithoutCategoriesInput[] | PostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput | PostCreateOrConnectWithoutCategoriesInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoriesInput | PostUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoriesInput | PostUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoriesInput | PostUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CompletedCreatelessonsInput = {
    set: number[]
  }

  export type CourseCreateNestedOneWithoutCompletedInput = {
    create?: XOR<CourseCreateWithoutCompletedInput, CourseUncheckedCreateWithoutCompletedInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCompletedInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCompletedInput = {
    create?: XOR<UserCreateWithoutCompletedInput, UserUncheckedCreateWithoutCompletedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletedInput
    connect?: UserWhereUniqueInput
  }

  export type CompletedUpdatelessonsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type CourseUpdateOneRequiredWithoutCompletedNestedInput = {
    create?: XOR<CourseCreateWithoutCompletedInput, CourseUncheckedCreateWithoutCompletedInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCompletedInput
    upsert?: CourseUpsertWithoutCompletedInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCompletedInput, CourseUpdateWithoutCompletedInput>, CourseUncheckedUpdateWithoutCompletedInput>
  }

  export type UserUpdateOneRequiredWithoutCompletedNestedInput = {
    create?: XOR<UserCreateWithoutCompletedInput, UserUncheckedCreateWithoutCompletedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletedInput
    upsert?: UserUpsertWithoutCompletedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompletedInput, UserUpdateWithoutCompletedInput>, UserUncheckedUpdateWithoutCompletedInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutPostInput = {
    create?: XOR<CategoryCreateWithoutPostInput, CategoryUncheckedCreateWithoutPostInput> | CategoryCreateWithoutPostInput[] | CategoryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostInput | CategoryCreateOrConnectWithoutPostInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CategoryCreateWithoutPostInput, CategoryUncheckedCreateWithoutPostInput> | CategoryCreateWithoutPostInput[] | CategoryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostInput | CategoryCreateOrConnectWithoutPostInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateManyWithoutPostNestedInput = {
    create?: XOR<CategoryCreateWithoutPostInput, CategoryUncheckedCreateWithoutPostInput> | CategoryCreateWithoutPostInput[] | CategoryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostInput | CategoryCreateOrConnectWithoutPostInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutPostInput | CategoryUpsertWithWhereUniqueWithoutPostInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutPostInput | CategoryUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutPostInput | CategoryUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CategoryCreateWithoutPostInput, CategoryUncheckedCreateWithoutPostInput> | CategoryCreateWithoutPostInput[] | CategoryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostInput | CategoryCreateOrConnectWithoutPostInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutPostInput | CategoryUpsertWithWhereUniqueWithoutPostInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutPostInput | CategoryUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutPostInput | CategoryUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type AnswerCreateNestedManyWithoutQaInput = {
    create?: XOR<AnswerCreateWithoutQaInput, AnswerUncheckedCreateWithoutQaInput> | AnswerCreateWithoutQaInput[] | AnswerUncheckedCreateWithoutQaInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQaInput | AnswerCreateOrConnectWithoutQaInput[]
    createMany?: AnswerCreateManyQaInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type CourseCreateNestedOneWithoutQAInput = {
    create?: XOR<CourseCreateWithoutQAInput, CourseUncheckedCreateWithoutQAInput>
    connectOrCreate?: CourseCreateOrConnectWithoutQAInput
    connect?: CourseWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutQAInput = {
    create?: XOR<LessonCreateWithoutQAInput, LessonUncheckedCreateWithoutQAInput>
    connectOrCreate?: LessonCreateOrConnectWithoutQAInput
    connect?: LessonWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQAInput = {
    create?: XOR<UserCreateWithoutQAInput, UserUncheckedCreateWithoutQAInput>
    connectOrCreate?: UserCreateOrConnectWithoutQAInput
    connect?: UserWhereUniqueInput
  }

  export type AnswerUncheckedCreateNestedManyWithoutQaInput = {
    create?: XOR<AnswerCreateWithoutQaInput, AnswerUncheckedCreateWithoutQaInput> | AnswerCreateWithoutQaInput[] | AnswerUncheckedCreateWithoutQaInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQaInput | AnswerCreateOrConnectWithoutQaInput[]
    createMany?: AnswerCreateManyQaInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUpdateManyWithoutQaNestedInput = {
    create?: XOR<AnswerCreateWithoutQaInput, AnswerUncheckedCreateWithoutQaInput> | AnswerCreateWithoutQaInput[] | AnswerUncheckedCreateWithoutQaInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQaInput | AnswerCreateOrConnectWithoutQaInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQaInput | AnswerUpsertWithWhereUniqueWithoutQaInput[]
    createMany?: AnswerCreateManyQaInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQaInput | AnswerUpdateWithWhereUniqueWithoutQaInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQaInput | AnswerUpdateManyWithWhereWithoutQaInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type CourseUpdateOneWithoutQANestedInput = {
    create?: XOR<CourseCreateWithoutQAInput, CourseUncheckedCreateWithoutQAInput>
    connectOrCreate?: CourseCreateOrConnectWithoutQAInput
    upsert?: CourseUpsertWithoutQAInput
    disconnect?: CourseWhereInput | boolean
    delete?: CourseWhereInput | boolean
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutQAInput, CourseUpdateWithoutQAInput>, CourseUncheckedUpdateWithoutQAInput>
  }

  export type LessonUpdateOneWithoutQANestedInput = {
    create?: XOR<LessonCreateWithoutQAInput, LessonUncheckedCreateWithoutQAInput>
    connectOrCreate?: LessonCreateOrConnectWithoutQAInput
    upsert?: LessonUpsertWithoutQAInput
    disconnect?: LessonWhereInput | boolean
    delete?: LessonWhereInput | boolean
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutQAInput, LessonUpdateWithoutQAInput>, LessonUncheckedUpdateWithoutQAInput>
  }

  export type UserUpdateOneRequiredWithoutQANestedInput = {
    create?: XOR<UserCreateWithoutQAInput, UserUncheckedCreateWithoutQAInput>
    connectOrCreate?: UserCreateOrConnectWithoutQAInput
    upsert?: UserUpsertWithoutQAInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQAInput, UserUpdateWithoutQAInput>, UserUncheckedUpdateWithoutQAInput>
  }

  export type AnswerUncheckedUpdateManyWithoutQaNestedInput = {
    create?: XOR<AnswerCreateWithoutQaInput, AnswerUncheckedCreateWithoutQaInput> | AnswerCreateWithoutQaInput[] | AnswerUncheckedCreateWithoutQaInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQaInput | AnswerCreateOrConnectWithoutQaInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQaInput | AnswerUpsertWithWhereUniqueWithoutQaInput[]
    createMany?: AnswerCreateManyQaInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQaInput | AnswerUpdateWithWhereUniqueWithoutQaInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQaInput | AnswerUpdateManyWithWhereWithoutQaInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAnswerInput = {
    create?: XOR<UserCreateWithoutAnswerInput, UserUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswerInput
    connect?: UserWhereUniqueInput
  }

  export type QACreateNestedOneWithoutAnswersInput = {
    create?: XOR<QACreateWithoutAnswersInput, QAUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QACreateOrConnectWithoutAnswersInput
    connect?: QAWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAnswerNestedInput = {
    create?: XOR<UserCreateWithoutAnswerInput, UserUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswerInput
    upsert?: UserUpsertWithoutAnswerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnswerInput, UserUpdateWithoutAnswerInput>, UserUncheckedUpdateWithoutAnswerInput>
  }

  export type QAUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QACreateWithoutAnswersInput, QAUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QACreateOrConnectWithoutAnswersInput
    upsert?: QAUpsertWithoutAnswersInput
    connect?: QAWhereUniqueInput
    update?: XOR<XOR<QAUpdateToOneWithWhereWithoutAnswersInput, QAUpdateWithoutAnswersInput>, QAUncheckedUpdateWithoutAnswersInput>
  }

  export type UserCreateNestedOneWithoutSupportInput = {
    create?: XOR<UserCreateWithoutSupportInput, UserUncheckedCreateWithoutSupportInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupportInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSupportNestedInput = {
    create?: XOR<UserCreateWithoutSupportInput, UserUncheckedCreateWithoutSupportInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupportInput
    upsert?: UserUpsertWithoutSupportInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSupportInput, UserUpdateWithoutSupportInput>, UserUncheckedUpdateWithoutSupportInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type AnswerCreateWithoutPostedByInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    qa: QACreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutPostedByInput = {
    id?: number
    content: string
    qaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutPostedByInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutPostedByInput, AnswerUncheckedCreateWithoutPostedByInput>
  }

  export type AnswerCreateManyPostedByInputEnvelope = {
    data: AnswerCreateManyPostedByInput | AnswerCreateManyPostedByInput[]
    skipDuplicates?: boolean
  }

  export type CompletedCreateWithoutUserInput = {
    lessons?: CompletedCreatelessonsInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCompletedInput
  }

  export type CompletedUncheckedCreateWithoutUserInput = {
    id?: number
    courseId: number
    lessons?: CompletedCreatelessonsInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedCreateOrConnectWithoutUserInput = {
    where: CompletedWhereUniqueInput
    create: XOR<CompletedCreateWithoutUserInput, CompletedUncheckedCreateWithoutUserInput>
  }

  export type CompletedCreateManyUserInputEnvelope = {
    data: CompletedCreateManyUserInput | CompletedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutInstructorInput = {
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Completed?: CompletedCreateNestedManyWithoutCourseInput
    modules?: ModuleCreateNestedManyWithoutCourseInput
    QA?: QACreateNestedManyWithoutCourseInput
    ratings?: RatingCreateNestedManyWithoutCourseInput
    categories?: CategoryCreateNestedManyWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutInstructorInput = {
    id?: number
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Completed?: CompletedUncheckedCreateNestedManyWithoutCourseInput
    modules?: ModuleUncheckedCreateNestedManyWithoutCourseInput
    QA?: QAUncheckedCreateNestedManyWithoutCourseInput
    ratings?: RatingUncheckedCreateNestedManyWithoutCourseInput
    categories?: CategoryUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type CourseCreateOrConnectWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput>
  }

  export type CourseCreateManyInstructorInputEnvelope = {
    data: CourseCreateManyInstructorInput | CourseCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutPostedByInput = {
    title: string
    published?: boolean
    body: string
    createdAt?: Date | string
    excerpt?: string | null
    slug?: string | null
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostedByInput = {
    id?: number
    title: string
    published?: boolean
    body: string
    createdAt?: Date | string
    excerpt?: string | null
    slug?: string | null
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostedByInput, PostUncheckedCreateWithoutPostedByInput>
  }

  export type PostCreateManyPostedByInputEnvelope = {
    data: PostCreateManyPostedByInput | PostCreateManyPostedByInput[]
    skipDuplicates?: boolean
  }

  export type QACreateWithoutPostedByInput = {
    title: string
    slug?: string | null
    description: string
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerCreateNestedManyWithoutQaInput
    course?: CourseCreateNestedOneWithoutQAInput
    lesson?: LessonCreateNestedOneWithoutQAInput
  }

  export type QAUncheckedCreateWithoutPostedByInput = {
    id?: number
    title: string
    slug?: string | null
    description: string
    resolved?: boolean
    courseId?: number | null
    lessonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQaInput
  }

  export type QACreateOrConnectWithoutPostedByInput = {
    where: QAWhereUniqueInput
    create: XOR<QACreateWithoutPostedByInput, QAUncheckedCreateWithoutPostedByInput>
  }

  export type QACreateManyPostedByInputEnvelope = {
    data: QACreateManyPostedByInput | QACreateManyPostedByInput[]
    skipDuplicates?: boolean
  }

  export type SupportCreateWithoutPostedByInput = {
    courseUrl?: string | null
    message: string
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportUncheckedCreateWithoutPostedByInput = {
    id?: number
    courseUrl?: string | null
    message: string
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportCreateOrConnectWithoutPostedByInput = {
    where: SupportWhereUniqueInput
    create: XOR<SupportCreateWithoutPostedByInput, SupportUncheckedCreateWithoutPostedByInput>
  }

  export type SupportCreateManyPostedByInputEnvelope = {
    data: SupportCreateManyPostedByInput | SupportCreateManyPostedByInput[]
    skipDuplicates?: boolean
  }

  export type AnswerUpsertWithWhereUniqueWithoutPostedByInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutPostedByInput, AnswerUncheckedUpdateWithoutPostedByInput>
    create: XOR<AnswerCreateWithoutPostedByInput, AnswerUncheckedCreateWithoutPostedByInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutPostedByInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutPostedByInput, AnswerUncheckedUpdateWithoutPostedByInput>
  }

  export type AnswerUpdateManyWithWhereWithoutPostedByInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutPostedByInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: IntFilter<"Answer"> | number
    content?: StringFilter<"Answer"> | string
    postedById?: IntFilter<"Answer"> | number
    qaId?: IntFilter<"Answer"> | number
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
  }

  export type CompletedUpsertWithWhereUniqueWithoutUserInput = {
    where: CompletedWhereUniqueInput
    update: XOR<CompletedUpdateWithoutUserInput, CompletedUncheckedUpdateWithoutUserInput>
    create: XOR<CompletedCreateWithoutUserInput, CompletedUncheckedCreateWithoutUserInput>
  }

  export type CompletedUpdateWithWhereUniqueWithoutUserInput = {
    where: CompletedWhereUniqueInput
    data: XOR<CompletedUpdateWithoutUserInput, CompletedUncheckedUpdateWithoutUserInput>
  }

  export type CompletedUpdateManyWithWhereWithoutUserInput = {
    where: CompletedScalarWhereInput
    data: XOR<CompletedUpdateManyMutationInput, CompletedUncheckedUpdateManyWithoutUserInput>
  }

  export type CompletedScalarWhereInput = {
    AND?: CompletedScalarWhereInput | CompletedScalarWhereInput[]
    OR?: CompletedScalarWhereInput[]
    NOT?: CompletedScalarWhereInput | CompletedScalarWhereInput[]
    id?: IntFilter<"Completed"> | number
    userId?: IntFilter<"Completed"> | number
    courseId?: IntFilter<"Completed"> | number
    lessons?: IntNullableListFilter<"Completed">
    createdAt?: DateTimeFilter<"Completed"> | Date | string
    updatedAt?: DateTimeFilter<"Completed"> | Date | string
  }

  export type CourseUpsertWithWhereUniqueWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutInstructorInput, CourseUncheckedUpdateWithoutInstructorInput>
    create: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutInstructorInput, CourseUncheckedUpdateWithoutInstructorInput>
  }

  export type CourseUpdateManyWithWhereWithoutInstructorInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutInstructorInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: IntFilter<"Course"> | number
    name?: StringFilter<"Course"> | string
    slug?: StringNullableFilter<"Course"> | string | null
    description?: StringFilter<"Course"> | string
    price?: FloatFilter<"Course"> | number
    onSale?: BoolFilter<"Course"> | boolean
    displayPrice?: FloatNullableFilter<"Course"> | number | null
    image?: StringNullableFilter<"Course"> | string | null
    published?: BoolFilter<"Course"> | boolean
    completed?: IntNullableListFilter<"Course">
    difficulty?: EnumDifficultyFilter<"Course"> | $Enums.Difficulty
    paid?: BoolFilter<"Course"> | boolean
    instructorId?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutPostedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutPostedByInput, PostUncheckedUpdateWithoutPostedByInput>
    create: XOR<PostCreateWithoutPostedByInput, PostUncheckedCreateWithoutPostedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutPostedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutPostedByInput, PostUncheckedUpdateWithoutPostedByInput>
  }

  export type PostUpdateManyWithWhereWithoutPostedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostedByInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    body?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    excerpt?: StringNullableFilter<"Post"> | string | null
    postedById?: IntFilter<"Post"> | number
    slug?: StringNullableFilter<"Post"> | string | null
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type QAUpsertWithWhereUniqueWithoutPostedByInput = {
    where: QAWhereUniqueInput
    update: XOR<QAUpdateWithoutPostedByInput, QAUncheckedUpdateWithoutPostedByInput>
    create: XOR<QACreateWithoutPostedByInput, QAUncheckedCreateWithoutPostedByInput>
  }

  export type QAUpdateWithWhereUniqueWithoutPostedByInput = {
    where: QAWhereUniqueInput
    data: XOR<QAUpdateWithoutPostedByInput, QAUncheckedUpdateWithoutPostedByInput>
  }

  export type QAUpdateManyWithWhereWithoutPostedByInput = {
    where: QAScalarWhereInput
    data: XOR<QAUpdateManyMutationInput, QAUncheckedUpdateManyWithoutPostedByInput>
  }

  export type QAScalarWhereInput = {
    AND?: QAScalarWhereInput | QAScalarWhereInput[]
    OR?: QAScalarWhereInput[]
    NOT?: QAScalarWhereInput | QAScalarWhereInput[]
    id?: IntFilter<"QA"> | number
    title?: StringFilter<"QA"> | string
    slug?: StringNullableFilter<"QA"> | string | null
    description?: StringFilter<"QA"> | string
    resolved?: BoolFilter<"QA"> | boolean
    postedById?: IntFilter<"QA"> | number
    courseId?: IntNullableFilter<"QA"> | number | null
    lessonId?: IntNullableFilter<"QA"> | number | null
    createdAt?: DateTimeFilter<"QA"> | Date | string
    updatedAt?: DateTimeFilter<"QA"> | Date | string
  }

  export type SupportUpsertWithWhereUniqueWithoutPostedByInput = {
    where: SupportWhereUniqueInput
    update: XOR<SupportUpdateWithoutPostedByInput, SupportUncheckedUpdateWithoutPostedByInput>
    create: XOR<SupportCreateWithoutPostedByInput, SupportUncheckedCreateWithoutPostedByInput>
  }

  export type SupportUpdateWithWhereUniqueWithoutPostedByInput = {
    where: SupportWhereUniqueInput
    data: XOR<SupportUpdateWithoutPostedByInput, SupportUncheckedUpdateWithoutPostedByInput>
  }

  export type SupportUpdateManyWithWhereWithoutPostedByInput = {
    where: SupportScalarWhereInput
    data: XOR<SupportUpdateManyMutationInput, SupportUncheckedUpdateManyWithoutPostedByInput>
  }

  export type SupportScalarWhereInput = {
    AND?: SupportScalarWhereInput | SupportScalarWhereInput[]
    OR?: SupportScalarWhereInput[]
    NOT?: SupportScalarWhereInput | SupportScalarWhereInput[]
    id?: IntFilter<"Support"> | number
    courseUrl?: StringNullableFilter<"Support"> | string | null
    message?: StringFilter<"Support"> | string
    resolved?: BoolFilter<"Support"> | boolean
    postedById?: IntFilter<"Support"> | number
    createdAt?: DateTimeFilter<"Support"> | Date | string
    updatedAt?: DateTimeFilter<"Support"> | Date | string
  }

  export type CourseCreateWithoutModulesInput = {
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Completed?: CompletedCreateNestedManyWithoutCourseInput
    instructor: UserCreateNestedOneWithoutCourseInput
    QA?: QACreateNestedManyWithoutCourseInput
    ratings?: RatingCreateNestedManyWithoutCourseInput
    categories?: CategoryCreateNestedManyWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutModulesInput = {
    id?: number
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    instructorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Completed?: CompletedUncheckedCreateNestedManyWithoutCourseInput
    QA?: QAUncheckedCreateNestedManyWithoutCourseInput
    ratings?: RatingUncheckedCreateNestedManyWithoutCourseInput
    categories?: CategoryUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type CourseCreateOrConnectWithoutModulesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
  }

  export type LessonCreateWithoutModuleInput = {
    title: string
    slug?: string | null
    content: string
    video?: string | null
    freePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lessonType: LessonTypeCreateNestedOneWithoutLessonsInput
    QA?: QACreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutModuleInput = {
    id?: number
    title: string
    slug?: string | null
    content: string
    video?: string | null
    freePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lessonTypeId: number
    QA?: QAUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutModuleInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput>
  }

  export type LessonCreateManyModuleInputEnvelope = {
    data: LessonCreateManyModuleInput | LessonCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutModulesInput = {
    update: XOR<CourseUpdateWithoutModulesInput, CourseUncheckedUpdateWithoutModulesInput>
    create: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutModulesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutModulesInput, CourseUncheckedUpdateWithoutModulesInput>
  }

  export type CourseUpdateWithoutModulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Completed?: CompletedUpdateManyWithoutCourseNestedInput
    instructor?: UserUpdateOneRequiredWithoutCourseNestedInput
    QA?: QAUpdateManyWithoutCourseNestedInput
    ratings?: RatingUpdateManyWithoutCourseNestedInput
    categories?: CategoryUpdateManyWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutModulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Completed?: CompletedUncheckedUpdateManyWithoutCourseNestedInput
    QA?: QAUncheckedUpdateManyWithoutCourseNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutCourseNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type LessonUpsertWithWhereUniqueWithoutModuleInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutModuleInput, LessonUncheckedUpdateWithoutModuleInput>
    create: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutModuleInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutModuleInput, LessonUncheckedUpdateWithoutModuleInput>
  }

  export type LessonUpdateManyWithWhereWithoutModuleInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutModuleInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: IntFilter<"Lesson"> | number
    title?: StringFilter<"Lesson"> | string
    slug?: StringNullableFilter<"Lesson"> | string | null
    content?: StringFilter<"Lesson"> | string
    video?: StringNullableFilter<"Lesson"> | string | null
    freePreview?: BoolFilter<"Lesson"> | boolean
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    lessonTypeId?: IntFilter<"Lesson"> | number
    moduleId?: IntNullableFilter<"Lesson"> | number | null
  }

  export type CompletedCreateWithoutCourseInput = {
    lessons?: CompletedCreatelessonsInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompletedInput
  }

  export type CompletedUncheckedCreateWithoutCourseInput = {
    id?: number
    userId: number
    lessons?: CompletedCreatelessonsInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedCreateOrConnectWithoutCourseInput = {
    where: CompletedWhereUniqueInput
    create: XOR<CompletedCreateWithoutCourseInput, CompletedUncheckedCreateWithoutCourseInput>
  }

  export type CompletedCreateManyCourseInputEnvelope = {
    data: CompletedCreateManyCourseInput | CompletedCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCourseInput = {
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    Answer?: AnswerCreateNestedManyWithoutPostedByInput
    Completed?: CompletedCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutPostedByInput
    QA?: QACreateNestedManyWithoutPostedByInput
    Support?: SupportCreateNestedManyWithoutPostedByInput
  }

  export type UserUncheckedCreateWithoutCourseInput = {
    id?: number
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    Answer?: AnswerUncheckedCreateNestedManyWithoutPostedByInput
    Completed?: CompletedUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutPostedByInput
    QA?: QAUncheckedCreateNestedManyWithoutPostedByInput
    Support?: SupportUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type UserCreateOrConnectWithoutCourseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCourseInput, UserUncheckedCreateWithoutCourseInput>
  }

  export type ModuleCreateWithoutCourseInput = {
    title: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutCourseInput = {
    id?: number
    title: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutCourseInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput>
  }

  export type ModuleCreateManyCourseInputEnvelope = {
    data: ModuleCreateManyCourseInput | ModuleCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type QACreateWithoutCourseInput = {
    title: string
    slug?: string | null
    description: string
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerCreateNestedManyWithoutQaInput
    lesson?: LessonCreateNestedOneWithoutQAInput
    postedBy: UserCreateNestedOneWithoutQAInput
  }

  export type QAUncheckedCreateWithoutCourseInput = {
    id?: number
    title: string
    slug?: string | null
    description: string
    resolved?: boolean
    postedById: number
    lessonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQaInput
  }

  export type QACreateOrConnectWithoutCourseInput = {
    where: QAWhereUniqueInput
    create: XOR<QACreateWithoutCourseInput, QAUncheckedCreateWithoutCourseInput>
  }

  export type QACreateManyCourseInputEnvelope = {
    data: QACreateManyCourseInput | QACreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutCourseInput = {
    value: number
    comment?: string | null
  }

  export type RatingUncheckedCreateWithoutCourseInput = {
    id?: number
    value: number
    comment?: string | null
  }

  export type RatingCreateOrConnectWithoutCourseInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput>
  }

  export type RatingCreateManyCourseInputEnvelope = {
    data: RatingCreateManyCourseInput | RatingCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutCoursesInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Post?: PostCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutCoursesInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Post?: PostUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryCreateOrConnectWithoutCoursesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCoursesInput, CategoryUncheckedCreateWithoutCoursesInput>
  }

  export type CompletedUpsertWithWhereUniqueWithoutCourseInput = {
    where: CompletedWhereUniqueInput
    update: XOR<CompletedUpdateWithoutCourseInput, CompletedUncheckedUpdateWithoutCourseInput>
    create: XOR<CompletedCreateWithoutCourseInput, CompletedUncheckedCreateWithoutCourseInput>
  }

  export type CompletedUpdateWithWhereUniqueWithoutCourseInput = {
    where: CompletedWhereUniqueInput
    data: XOR<CompletedUpdateWithoutCourseInput, CompletedUncheckedUpdateWithoutCourseInput>
  }

  export type CompletedUpdateManyWithWhereWithoutCourseInput = {
    where: CompletedScalarWhereInput
    data: XOR<CompletedUpdateManyMutationInput, CompletedUncheckedUpdateManyWithoutCourseInput>
  }

  export type UserUpsertWithoutCourseInput = {
    update: XOR<UserUpdateWithoutCourseInput, UserUncheckedUpdateWithoutCourseInput>
    create: XOR<UserCreateWithoutCourseInput, UserUncheckedCreateWithoutCourseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCourseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCourseInput, UserUncheckedUpdateWithoutCourseInput>
  }

  export type UserUpdateWithoutCourseInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUpdateManyWithoutPostedByNestedInput
    Completed?: CompletedUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutPostedByNestedInput
    QA?: QAUpdateManyWithoutPostedByNestedInput
    Support?: SupportUpdateManyWithoutPostedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUncheckedUpdateManyWithoutPostedByNestedInput
    Completed?: CompletedUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutPostedByNestedInput
    QA?: QAUncheckedUpdateManyWithoutPostedByNestedInput
    Support?: SupportUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type ModuleUpsertWithWhereUniqueWithoutCourseInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutCourseInput, ModuleUncheckedUpdateWithoutCourseInput>
    create: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutCourseInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutCourseInput, ModuleUncheckedUpdateWithoutCourseInput>
  }

  export type ModuleUpdateManyWithWhereWithoutCourseInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutCourseInput>
  }

  export type ModuleScalarWhereInput = {
    AND?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    OR?: ModuleScalarWhereInput[]
    NOT?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    id?: IntFilter<"Module"> | number
    title?: StringFilter<"Module"> | string
    slug?: StringNullableFilter<"Module"> | string | null
    courseId?: IntFilter<"Module"> | number
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
  }

  export type QAUpsertWithWhereUniqueWithoutCourseInput = {
    where: QAWhereUniqueInput
    update: XOR<QAUpdateWithoutCourseInput, QAUncheckedUpdateWithoutCourseInput>
    create: XOR<QACreateWithoutCourseInput, QAUncheckedCreateWithoutCourseInput>
  }

  export type QAUpdateWithWhereUniqueWithoutCourseInput = {
    where: QAWhereUniqueInput
    data: XOR<QAUpdateWithoutCourseInput, QAUncheckedUpdateWithoutCourseInput>
  }

  export type QAUpdateManyWithWhereWithoutCourseInput = {
    where: QAScalarWhereInput
    data: XOR<QAUpdateManyMutationInput, QAUncheckedUpdateManyWithoutCourseInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutCourseInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutCourseInput, RatingUncheckedUpdateWithoutCourseInput>
    create: XOR<RatingCreateWithoutCourseInput, RatingUncheckedCreateWithoutCourseInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutCourseInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutCourseInput, RatingUncheckedUpdateWithoutCourseInput>
  }

  export type RatingUpdateManyWithWhereWithoutCourseInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutCourseInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: IntFilter<"Rating"> | number
    value?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    courseId?: IntFilter<"Rating"> | number
  }

  export type CategoryUpsertWithWhereUniqueWithoutCoursesInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutCoursesInput, CategoryUncheckedUpdateWithoutCoursesInput>
    create: XOR<CategoryCreateWithoutCoursesInput, CategoryUncheckedCreateWithoutCoursesInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutCoursesInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutCoursesInput, CategoryUncheckedUpdateWithoutCoursesInput>
  }

  export type CategoryUpdateManyWithWhereWithoutCoursesInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCoursesInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type LessonTypeCreateWithoutLessonsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonTypeUncheckedCreateWithoutLessonsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonTypeCreateOrConnectWithoutLessonsInput = {
    where: LessonTypeWhereUniqueInput
    create: XOR<LessonTypeCreateWithoutLessonsInput, LessonTypeUncheckedCreateWithoutLessonsInput>
  }

  export type QACreateWithoutLessonInput = {
    title: string
    slug?: string | null
    description: string
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerCreateNestedManyWithoutQaInput
    course?: CourseCreateNestedOneWithoutQAInput
    postedBy: UserCreateNestedOneWithoutQAInput
  }

  export type QAUncheckedCreateWithoutLessonInput = {
    id?: number
    title: string
    slug?: string | null
    description: string
    resolved?: boolean
    postedById: number
    courseId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQaInput
  }

  export type QACreateOrConnectWithoutLessonInput = {
    where: QAWhereUniqueInput
    create: XOR<QACreateWithoutLessonInput, QAUncheckedCreateWithoutLessonInput>
  }

  export type QACreateManyLessonInputEnvelope = {
    data: QACreateManyLessonInput | QACreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type ModuleCreateWithoutLessonsInput = {
    title: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutModulesInput
  }

  export type ModuleUncheckedCreateWithoutLessonsInput = {
    id?: number
    title: string
    slug?: string | null
    courseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleCreateOrConnectWithoutLessonsInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
  }

  export type LessonTypeUpsertWithoutLessonsInput = {
    update: XOR<LessonTypeUpdateWithoutLessonsInput, LessonTypeUncheckedUpdateWithoutLessonsInput>
    create: XOR<LessonTypeCreateWithoutLessonsInput, LessonTypeUncheckedCreateWithoutLessonsInput>
    where?: LessonTypeWhereInput
  }

  export type LessonTypeUpdateToOneWithWhereWithoutLessonsInput = {
    where?: LessonTypeWhereInput
    data: XOR<LessonTypeUpdateWithoutLessonsInput, LessonTypeUncheckedUpdateWithoutLessonsInput>
  }

  export type LessonTypeUpdateWithoutLessonsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonTypeUncheckedUpdateWithoutLessonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QAUpsertWithWhereUniqueWithoutLessonInput = {
    where: QAWhereUniqueInput
    update: XOR<QAUpdateWithoutLessonInput, QAUncheckedUpdateWithoutLessonInput>
    create: XOR<QACreateWithoutLessonInput, QAUncheckedCreateWithoutLessonInput>
  }

  export type QAUpdateWithWhereUniqueWithoutLessonInput = {
    where: QAWhereUniqueInput
    data: XOR<QAUpdateWithoutLessonInput, QAUncheckedUpdateWithoutLessonInput>
  }

  export type QAUpdateManyWithWhereWithoutLessonInput = {
    where: QAScalarWhereInput
    data: XOR<QAUpdateManyMutationInput, QAUncheckedUpdateManyWithoutLessonInput>
  }

  export type ModuleUpsertWithoutLessonsInput = {
    update: XOR<ModuleUpdateWithoutLessonsInput, ModuleUncheckedUpdateWithoutLessonsInput>
    create: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutLessonsInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutLessonsInput, ModuleUncheckedUpdateWithoutLessonsInput>
  }

  export type ModuleUpdateWithoutLessonsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutModulesNestedInput
  }

  export type ModuleUncheckedUpdateWithoutLessonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateWithoutLessonTypeInput = {
    title: string
    slug?: string | null
    content: string
    video?: string | null
    freePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    QA?: QACreateNestedManyWithoutLessonInput
    module?: ModuleCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateWithoutLessonTypeInput = {
    id?: number
    title: string
    slug?: string | null
    content: string
    video?: string | null
    freePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moduleId?: number | null
    QA?: QAUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutLessonTypeInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutLessonTypeInput, LessonUncheckedCreateWithoutLessonTypeInput>
  }

  export type LessonCreateManyLessonTypeInputEnvelope = {
    data: LessonCreateManyLessonTypeInput | LessonCreateManyLessonTypeInput[]
    skipDuplicates?: boolean
  }

  export type LessonUpsertWithWhereUniqueWithoutLessonTypeInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutLessonTypeInput, LessonUncheckedUpdateWithoutLessonTypeInput>
    create: XOR<LessonCreateWithoutLessonTypeInput, LessonUncheckedCreateWithoutLessonTypeInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutLessonTypeInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutLessonTypeInput, LessonUncheckedUpdateWithoutLessonTypeInput>
  }

  export type LessonUpdateManyWithWhereWithoutLessonTypeInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutLessonTypeInput>
  }

  export type CourseCreateWithoutRatingsInput = {
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Completed?: CompletedCreateNestedManyWithoutCourseInput
    instructor: UserCreateNestedOneWithoutCourseInput
    modules?: ModuleCreateNestedManyWithoutCourseInput
    QA?: QACreateNestedManyWithoutCourseInput
    categories?: CategoryCreateNestedManyWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutRatingsInput = {
    id?: number
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    instructorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Completed?: CompletedUncheckedCreateNestedManyWithoutCourseInput
    modules?: ModuleUncheckedCreateNestedManyWithoutCourseInput
    QA?: QAUncheckedCreateNestedManyWithoutCourseInput
    categories?: CategoryUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type CourseCreateOrConnectWithoutRatingsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutRatingsInput, CourseUncheckedCreateWithoutRatingsInput>
  }

  export type CourseUpsertWithoutRatingsInput = {
    update: XOR<CourseUpdateWithoutRatingsInput, CourseUncheckedUpdateWithoutRatingsInput>
    create: XOR<CourseCreateWithoutRatingsInput, CourseUncheckedCreateWithoutRatingsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutRatingsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutRatingsInput, CourseUncheckedUpdateWithoutRatingsInput>
  }

  export type CourseUpdateWithoutRatingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Completed?: CompletedUpdateManyWithoutCourseNestedInput
    instructor?: UserUpdateOneRequiredWithoutCourseNestedInput
    modules?: ModuleUpdateManyWithoutCourseNestedInput
    QA?: QAUpdateManyWithoutCourseNestedInput
    categories?: CategoryUpdateManyWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Completed?: CompletedUncheckedUpdateManyWithoutCourseNestedInput
    modules?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
    QA?: QAUncheckedUpdateManyWithoutCourseNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type CourseCreateWithoutCategoriesInput = {
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Completed?: CompletedCreateNestedManyWithoutCourseInput
    instructor: UserCreateNestedOneWithoutCourseInput
    modules?: ModuleCreateNestedManyWithoutCourseInput
    QA?: QACreateNestedManyWithoutCourseInput
    ratings?: RatingCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    instructorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Completed?: CompletedUncheckedCreateNestedManyWithoutCourseInput
    modules?: ModuleUncheckedCreateNestedManyWithoutCourseInput
    QA?: QAUncheckedCreateNestedManyWithoutCourseInput
    ratings?: RatingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCategoriesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCategoriesInput, CourseUncheckedCreateWithoutCategoriesInput>
  }

  export type PostCreateWithoutCategoriesInput = {
    title: string
    published?: boolean
    body: string
    createdAt?: Date | string
    excerpt?: string | null
    slug?: string | null
    updatedAt?: Date | string
    postedBy: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    published?: boolean
    body: string
    createdAt?: Date | string
    excerpt?: string | null
    postedById: number
    slug?: string | null
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
  }

  export type CourseUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutCategoriesInput, CourseUncheckedUpdateWithoutCategoriesInput>
    create: XOR<CourseCreateWithoutCategoriesInput, CourseUncheckedCreateWithoutCategoriesInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutCategoriesInput, CourseUncheckedUpdateWithoutCategoriesInput>
  }

  export type CourseUpdateManyWithWhereWithoutCategoriesInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type PostUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCategoriesInput, PostUncheckedUpdateWithoutCategoriesInput>
    create: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCategoriesInput, PostUncheckedUpdateWithoutCategoriesInput>
  }

  export type PostUpdateManyWithWhereWithoutCategoriesInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type CourseCreateWithoutCompletedInput = {
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: UserCreateNestedOneWithoutCourseInput
    modules?: ModuleCreateNestedManyWithoutCourseInput
    QA?: QACreateNestedManyWithoutCourseInput
    ratings?: RatingCreateNestedManyWithoutCourseInput
    categories?: CategoryCreateNestedManyWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutCompletedInput = {
    id?: number
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    instructorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: ModuleUncheckedCreateNestedManyWithoutCourseInput
    QA?: QAUncheckedCreateNestedManyWithoutCourseInput
    ratings?: RatingUncheckedCreateNestedManyWithoutCourseInput
    categories?: CategoryUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type CourseCreateOrConnectWithoutCompletedInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCompletedInput, CourseUncheckedCreateWithoutCompletedInput>
  }

  export type UserCreateWithoutCompletedInput = {
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    Answer?: AnswerCreateNestedManyWithoutPostedByInput
    Course?: CourseCreateNestedManyWithoutInstructorInput
    posts?: PostCreateNestedManyWithoutPostedByInput
    QA?: QACreateNestedManyWithoutPostedByInput
    Support?: SupportCreateNestedManyWithoutPostedByInput
  }

  export type UserUncheckedCreateWithoutCompletedInput = {
    id?: number
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    Answer?: AnswerUncheckedCreateNestedManyWithoutPostedByInput
    Course?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    posts?: PostUncheckedCreateNestedManyWithoutPostedByInput
    QA?: QAUncheckedCreateNestedManyWithoutPostedByInput
    Support?: SupportUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type UserCreateOrConnectWithoutCompletedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompletedInput, UserUncheckedCreateWithoutCompletedInput>
  }

  export type CourseUpsertWithoutCompletedInput = {
    update: XOR<CourseUpdateWithoutCompletedInput, CourseUncheckedUpdateWithoutCompletedInput>
    create: XOR<CourseCreateWithoutCompletedInput, CourseUncheckedCreateWithoutCompletedInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCompletedInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCompletedInput, CourseUncheckedUpdateWithoutCompletedInput>
  }

  export type CourseUpdateWithoutCompletedInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCourseNestedInput
    modules?: ModuleUpdateManyWithoutCourseNestedInput
    QA?: QAUpdateManyWithoutCourseNestedInput
    ratings?: RatingUpdateManyWithoutCourseNestedInput
    categories?: CategoryUpdateManyWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutCompletedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
    QA?: QAUncheckedUpdateManyWithoutCourseNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutCourseNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type UserUpsertWithoutCompletedInput = {
    update: XOR<UserUpdateWithoutCompletedInput, UserUncheckedUpdateWithoutCompletedInput>
    create: XOR<UserCreateWithoutCompletedInput, UserUncheckedCreateWithoutCompletedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompletedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompletedInput, UserUncheckedUpdateWithoutCompletedInput>
  }

  export type UserUpdateWithoutCompletedInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUpdateManyWithoutPostedByNestedInput
    Course?: CourseUpdateManyWithoutInstructorNestedInput
    posts?: PostUpdateManyWithoutPostedByNestedInput
    QA?: QAUpdateManyWithoutPostedByNestedInput
    Support?: SupportUpdateManyWithoutPostedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCompletedInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUncheckedUpdateManyWithoutPostedByNestedInput
    Course?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    posts?: PostUncheckedUpdateManyWithoutPostedByNestedInput
    QA?: QAUncheckedUpdateManyWithoutPostedByNestedInput
    Support?: SupportUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    Answer?: AnswerCreateNestedManyWithoutPostedByInput
    Completed?: CompletedCreateNestedManyWithoutUserInput
    Course?: CourseCreateNestedManyWithoutInstructorInput
    QA?: QACreateNestedManyWithoutPostedByInput
    Support?: SupportCreateNestedManyWithoutPostedByInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    Answer?: AnswerUncheckedCreateNestedManyWithoutPostedByInput
    Completed?: CompletedUncheckedCreateNestedManyWithoutUserInput
    Course?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    QA?: QAUncheckedCreateNestedManyWithoutPostedByInput
    Support?: SupportUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CategoryCreateWithoutPostInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutPostInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryCreateOrConnectWithoutPostInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPostInput, CategoryUncheckedCreateWithoutPostInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUpdateManyWithoutPostedByNestedInput
    Completed?: CompletedUpdateManyWithoutUserNestedInput
    Course?: CourseUpdateManyWithoutInstructorNestedInput
    QA?: QAUpdateManyWithoutPostedByNestedInput
    Support?: SupportUpdateManyWithoutPostedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUncheckedUpdateManyWithoutPostedByNestedInput
    Completed?: CompletedUncheckedUpdateManyWithoutUserNestedInput
    Course?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    QA?: QAUncheckedUpdateManyWithoutPostedByNestedInput
    Support?: SupportUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutPostInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutPostInput, CategoryUncheckedUpdateWithoutPostInput>
    create: XOR<CategoryCreateWithoutPostInput, CategoryUncheckedCreateWithoutPostInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutPostInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutPostInput, CategoryUncheckedUpdateWithoutPostInput>
  }

  export type CategoryUpdateManyWithWhereWithoutPostInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutPostInput>
  }

  export type AnswerCreateWithoutQaInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postedBy: UserCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutQaInput = {
    id?: number
    content: string
    postedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutQaInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQaInput, AnswerUncheckedCreateWithoutQaInput>
  }

  export type AnswerCreateManyQaInputEnvelope = {
    data: AnswerCreateManyQaInput | AnswerCreateManyQaInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutQAInput = {
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Completed?: CompletedCreateNestedManyWithoutCourseInput
    instructor: UserCreateNestedOneWithoutCourseInput
    modules?: ModuleCreateNestedManyWithoutCourseInput
    ratings?: RatingCreateNestedManyWithoutCourseInput
    categories?: CategoryCreateNestedManyWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutQAInput = {
    id?: number
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    instructorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Completed?: CompletedUncheckedCreateNestedManyWithoutCourseInput
    modules?: ModuleUncheckedCreateNestedManyWithoutCourseInput
    ratings?: RatingUncheckedCreateNestedManyWithoutCourseInput
    categories?: CategoryUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type CourseCreateOrConnectWithoutQAInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutQAInput, CourseUncheckedCreateWithoutQAInput>
  }

  export type LessonCreateWithoutQAInput = {
    title: string
    slug?: string | null
    content: string
    video?: string | null
    freePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lessonType: LessonTypeCreateNestedOneWithoutLessonsInput
    module?: ModuleCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateWithoutQAInput = {
    id?: number
    title: string
    slug?: string | null
    content: string
    video?: string | null
    freePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lessonTypeId: number
    moduleId?: number | null
  }

  export type LessonCreateOrConnectWithoutQAInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutQAInput, LessonUncheckedCreateWithoutQAInput>
  }

  export type UserCreateWithoutQAInput = {
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    Answer?: AnswerCreateNestedManyWithoutPostedByInput
    Completed?: CompletedCreateNestedManyWithoutUserInput
    Course?: CourseCreateNestedManyWithoutInstructorInput
    posts?: PostCreateNestedManyWithoutPostedByInput
    Support?: SupportCreateNestedManyWithoutPostedByInput
  }

  export type UserUncheckedCreateWithoutQAInput = {
    id?: number
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    Answer?: AnswerUncheckedCreateNestedManyWithoutPostedByInput
    Completed?: CompletedUncheckedCreateNestedManyWithoutUserInput
    Course?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    posts?: PostUncheckedCreateNestedManyWithoutPostedByInput
    Support?: SupportUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type UserCreateOrConnectWithoutQAInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQAInput, UserUncheckedCreateWithoutQAInput>
  }

  export type AnswerUpsertWithWhereUniqueWithoutQaInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQaInput, AnswerUncheckedUpdateWithoutQaInput>
    create: XOR<AnswerCreateWithoutQaInput, AnswerUncheckedCreateWithoutQaInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQaInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQaInput, AnswerUncheckedUpdateWithoutQaInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQaInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQaInput>
  }

  export type CourseUpsertWithoutQAInput = {
    update: XOR<CourseUpdateWithoutQAInput, CourseUncheckedUpdateWithoutQAInput>
    create: XOR<CourseCreateWithoutQAInput, CourseUncheckedCreateWithoutQAInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutQAInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutQAInput, CourseUncheckedUpdateWithoutQAInput>
  }

  export type CourseUpdateWithoutQAInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Completed?: CompletedUpdateManyWithoutCourseNestedInput
    instructor?: UserUpdateOneRequiredWithoutCourseNestedInput
    modules?: ModuleUpdateManyWithoutCourseNestedInput
    ratings?: RatingUpdateManyWithoutCourseNestedInput
    categories?: CategoryUpdateManyWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutQAInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Completed?: CompletedUncheckedUpdateManyWithoutCourseNestedInput
    modules?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutCourseNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type LessonUpsertWithoutQAInput = {
    update: XOR<LessonUpdateWithoutQAInput, LessonUncheckedUpdateWithoutQAInput>
    create: XOR<LessonCreateWithoutQAInput, LessonUncheckedCreateWithoutQAInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutQAInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutQAInput, LessonUncheckedUpdateWithoutQAInput>
  }

  export type LessonUpdateWithoutQAInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    freePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonType?: LessonTypeUpdateOneRequiredWithoutLessonsNestedInput
    module?: ModuleUpdateOneWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateWithoutQAInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    freePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonTypeId?: IntFieldUpdateOperationsInput | number
    moduleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutQAInput = {
    update: XOR<UserUpdateWithoutQAInput, UserUncheckedUpdateWithoutQAInput>
    create: XOR<UserCreateWithoutQAInput, UserUncheckedCreateWithoutQAInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQAInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQAInput, UserUncheckedUpdateWithoutQAInput>
  }

  export type UserUpdateWithoutQAInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUpdateManyWithoutPostedByNestedInput
    Completed?: CompletedUpdateManyWithoutUserNestedInput
    Course?: CourseUpdateManyWithoutInstructorNestedInput
    posts?: PostUpdateManyWithoutPostedByNestedInput
    Support?: SupportUpdateManyWithoutPostedByNestedInput
  }

  export type UserUncheckedUpdateWithoutQAInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUncheckedUpdateManyWithoutPostedByNestedInput
    Completed?: CompletedUncheckedUpdateManyWithoutUserNestedInput
    Course?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    posts?: PostUncheckedUpdateManyWithoutPostedByNestedInput
    Support?: SupportUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type UserCreateWithoutAnswerInput = {
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    Completed?: CompletedCreateNestedManyWithoutUserInput
    Course?: CourseCreateNestedManyWithoutInstructorInput
    posts?: PostCreateNestedManyWithoutPostedByInput
    QA?: QACreateNestedManyWithoutPostedByInput
    Support?: SupportCreateNestedManyWithoutPostedByInput
  }

  export type UserUncheckedCreateWithoutAnswerInput = {
    id?: number
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    Completed?: CompletedUncheckedCreateNestedManyWithoutUserInput
    Course?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    posts?: PostUncheckedCreateNestedManyWithoutPostedByInput
    QA?: QAUncheckedCreateNestedManyWithoutPostedByInput
    Support?: SupportUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type UserCreateOrConnectWithoutAnswerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswerInput, UserUncheckedCreateWithoutAnswerInput>
  }

  export type QACreateWithoutAnswersInput = {
    title: string
    slug?: string | null
    description: string
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    course?: CourseCreateNestedOneWithoutQAInput
    lesson?: LessonCreateNestedOneWithoutQAInput
    postedBy: UserCreateNestedOneWithoutQAInput
  }

  export type QAUncheckedCreateWithoutAnswersInput = {
    id?: number
    title: string
    slug?: string | null
    description: string
    resolved?: boolean
    postedById: number
    courseId?: number | null
    lessonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QACreateOrConnectWithoutAnswersInput = {
    where: QAWhereUniqueInput
    create: XOR<QACreateWithoutAnswersInput, QAUncheckedCreateWithoutAnswersInput>
  }

  export type UserUpsertWithoutAnswerInput = {
    update: XOR<UserUpdateWithoutAnswerInput, UserUncheckedUpdateWithoutAnswerInput>
    create: XOR<UserCreateWithoutAnswerInput, UserUncheckedCreateWithoutAnswerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnswerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnswerInput, UserUncheckedUpdateWithoutAnswerInput>
  }

  export type UserUpdateWithoutAnswerInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Completed?: CompletedUpdateManyWithoutUserNestedInput
    Course?: CourseUpdateManyWithoutInstructorNestedInput
    posts?: PostUpdateManyWithoutPostedByNestedInput
    QA?: QAUpdateManyWithoutPostedByNestedInput
    Support?: SupportUpdateManyWithoutPostedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Completed?: CompletedUncheckedUpdateManyWithoutUserNestedInput
    Course?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    posts?: PostUncheckedUpdateManyWithoutPostedByNestedInput
    QA?: QAUncheckedUpdateManyWithoutPostedByNestedInput
    Support?: SupportUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type QAUpsertWithoutAnswersInput = {
    update: XOR<QAUpdateWithoutAnswersInput, QAUncheckedUpdateWithoutAnswersInput>
    create: XOR<QACreateWithoutAnswersInput, QAUncheckedCreateWithoutAnswersInput>
    where?: QAWhereInput
  }

  export type QAUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QAWhereInput
    data: XOR<QAUpdateWithoutAnswersInput, QAUncheckedUpdateWithoutAnswersInput>
  }

  export type QAUpdateWithoutAnswersInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneWithoutQANestedInput
    lesson?: LessonUpdateOneWithoutQANestedInput
    postedBy?: UserUpdateOneRequiredWithoutQANestedInput
  }

  export type QAUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    postedById?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    lessonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSupportInput = {
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    Answer?: AnswerCreateNestedManyWithoutPostedByInput
    Completed?: CompletedCreateNestedManyWithoutUserInput
    Course?: CourseCreateNestedManyWithoutInstructorInput
    posts?: PostCreateNestedManyWithoutPostedByInput
    QA?: QACreateNestedManyWithoutPostedByInput
  }

  export type UserUncheckedCreateWithoutSupportInput = {
    id?: number
    email: string
    name?: string | null
    createdAt?: Date | string
    password: string
    passwordResetCode?: string | null
    picture?: string
    role?: $Enums.Role
    stripeAccountId?: string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    Answer?: AnswerUncheckedCreateNestedManyWithoutPostedByInput
    Completed?: CompletedUncheckedCreateNestedManyWithoutUserInput
    Course?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    posts?: PostUncheckedCreateNestedManyWithoutPostedByInput
    QA?: QAUncheckedCreateNestedManyWithoutPostedByInput
  }

  export type UserCreateOrConnectWithoutSupportInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSupportInput, UserUncheckedCreateWithoutSupportInput>
  }

  export type UserUpsertWithoutSupportInput = {
    update: XOR<UserUpdateWithoutSupportInput, UserUncheckedUpdateWithoutSupportInput>
    create: XOR<UserCreateWithoutSupportInput, UserUncheckedCreateWithoutSupportInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSupportInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSupportInput, UserUncheckedUpdateWithoutSupportInput>
  }

  export type UserUpdateWithoutSupportInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUpdateManyWithoutPostedByNestedInput
    Completed?: CompletedUpdateManyWithoutUserNestedInput
    Course?: CourseUpdateManyWithoutInstructorNestedInput
    posts?: PostUpdateManyWithoutPostedByNestedInput
    QA?: QAUpdateManyWithoutPostedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSupportInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSeller?: NullableJsonNullValueInput | InputJsonValue
    stripeSession?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUncheckedUpdateManyWithoutPostedByNestedInput
    Completed?: CompletedUncheckedUpdateManyWithoutUserNestedInput
    Course?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    posts?: PostUncheckedUpdateManyWithoutPostedByNestedInput
    QA?: QAUncheckedUpdateManyWithoutPostedByNestedInput
  }

  export type AnswerCreateManyPostedByInput = {
    id?: number
    content: string
    qaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedCreateManyUserInput = {
    id?: number
    courseId: number
    lessons?: CompletedCreatelessonsInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateManyInstructorInput = {
    id?: number
    name: string
    slug?: string | null
    description: string
    price?: number
    onSale?: boolean
    displayPrice?: number | null
    image?: string | null
    published?: boolean
    completed?: CourseCreatecompletedInput | number[]
    difficulty?: $Enums.Difficulty
    paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyPostedByInput = {
    id?: number
    title: string
    published?: boolean
    body: string
    createdAt?: Date | string
    excerpt?: string | null
    slug?: string | null
    updatedAt?: Date | string
  }

  export type QACreateManyPostedByInput = {
    id?: number
    title: string
    slug?: string | null
    description: string
    resolved?: boolean
    courseId?: number | null
    lessonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportCreateManyPostedByInput = {
    id?: number
    courseUrl?: string | null
    message: string
    resolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateWithoutPostedByInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qa?: QAUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutPostedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    qaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyWithoutPostedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    qaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedUpdateWithoutUserInput = {
    lessons?: CompletedUpdatelessonsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCompletedNestedInput
  }

  export type CompletedUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    lessons?: CompletedUpdatelessonsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    lessons?: CompletedUpdatelessonsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUpdateWithoutInstructorInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Completed?: CompletedUpdateManyWithoutCourseNestedInput
    modules?: ModuleUpdateManyWithoutCourseNestedInput
    QA?: QAUpdateManyWithoutCourseNestedInput
    ratings?: RatingUpdateManyWithoutCourseNestedInput
    categories?: CategoryUpdateManyWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Completed?: CompletedUncheckedUpdateManyWithoutCourseNestedInput
    modules?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
    QA?: QAUncheckedUpdateManyWithoutCourseNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutCourseNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutPostedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutPostedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QAUpdateWithoutPostedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUpdateManyWithoutQaNestedInput
    course?: CourseUpdateOneWithoutQANestedInput
    lesson?: LessonUpdateOneWithoutQANestedInput
  }

  export type QAUncheckedUpdateWithoutPostedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    lessonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQaNestedInput
  }

  export type QAUncheckedUpdateManyWithoutPostedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    lessonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportUpdateWithoutPostedByInput = {
    courseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportUncheckedUpdateWithoutPostedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportUncheckedUpdateManyWithoutPostedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateManyModuleInput = {
    id?: number
    title: string
    slug?: string | null
    content: string
    video?: string | null
    freePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lessonTypeId: number
  }

  export type LessonUpdateWithoutModuleInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    freePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonType?: LessonTypeUpdateOneRequiredWithoutLessonsNestedInput
    QA?: QAUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    freePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonTypeId?: IntFieldUpdateOperationsInput | number
    QA?: QAUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    freePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type CompletedCreateManyCourseInput = {
    id?: number
    userId: number
    lessons?: CompletedCreatelessonsInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleCreateManyCourseInput = {
    id?: number
    title: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QACreateManyCourseInput = {
    id?: number
    title: string
    slug?: string | null
    description: string
    resolved?: boolean
    postedById: number
    lessonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingCreateManyCourseInput = {
    id?: number
    value: number
    comment?: string | null
  }

  export type CompletedUpdateWithoutCourseInput = {
    lessons?: CompletedUpdatelessonsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompletedNestedInput
  }

  export type CompletedUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lessons?: CompletedUpdatelessonsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lessons?: CompletedUpdatelessonsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QAUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUpdateManyWithoutQaNestedInput
    lesson?: LessonUpdateOneWithoutQANestedInput
    postedBy?: UserUpdateOneRequiredWithoutQANestedInput
  }

  export type QAUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    postedById?: IntFieldUpdateOperationsInput | number
    lessonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQaNestedInput
  }

  export type QAUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    postedById?: IntFieldUpdateOperationsInput | number
    lessonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutCourseInput = {
    value?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QACreateManyLessonInput = {
    id?: number
    title: string
    slug?: string | null
    description: string
    resolved?: boolean
    postedById: number
    courseId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QAUpdateWithoutLessonInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUpdateManyWithoutQaNestedInput
    course?: CourseUpdateOneWithoutQANestedInput
    postedBy?: UserUpdateOneRequiredWithoutQANestedInput
  }

  export type QAUncheckedUpdateWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    postedById?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQaNestedInput
  }

  export type QAUncheckedUpdateManyWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    postedById?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateManyLessonTypeInput = {
    id?: number
    title: string
    slug?: string | null
    content: string
    video?: string | null
    freePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moduleId?: number | null
  }

  export type LessonUpdateWithoutLessonTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    freePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    QA?: QAUpdateManyWithoutLessonNestedInput
    module?: ModuleUpdateOneWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateWithoutLessonTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    freePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleId?: NullableIntFieldUpdateOperationsInput | number | null
    QA?: QAUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutLessonTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    video?: NullableStringFieldUpdateOperationsInput | string | null
    freePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CourseUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Completed?: CompletedUpdateManyWithoutCourseNestedInput
    instructor?: UserUpdateOneRequiredWithoutCourseNestedInput
    modules?: ModuleUpdateManyWithoutCourseNestedInput
    QA?: QAUpdateManyWithoutCourseNestedInput
    ratings?: RatingUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Completed?: CompletedUncheckedUpdateManyWithoutCourseNestedInput
    modules?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
    QA?: QAUncheckedUpdateManyWithoutCourseNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    onSale?: BoolFieldUpdateOperationsInput | boolean
    displayPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    completed?: CourseUpdatecompletedInput | number[]
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    paid?: BoolFieldUpdateOperationsInput | boolean
    instructorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedBy?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    postedById?: IntFieldUpdateOperationsInput | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    postedById?: IntFieldUpdateOperationsInput | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyQaInput = {
    id?: number
    content: string
    postedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateWithoutQaInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedBy?: UserUpdateOneRequiredWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQaInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyWithoutQaInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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