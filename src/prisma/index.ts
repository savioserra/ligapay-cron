import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    leagues: <T = Array<League | null>>(args: { where?: LeagueWhereInput | null, orderBy?: LeagueOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    leagueTypes: <T = Array<LeagueType | null>>(args: { where?: LeagueTypeWhereInput | null, orderBy?: LeagueTypeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    scores: <T = Array<Score | null>>(args: { where?: ScoreWhereInput | null, orderBy?: ScoreOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    seasons: <T = Array<Season | null>>(args: { where?: SeasonWhereInput | null, orderBy?: SeasonOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    teamEnrollments: <T = Array<TeamEnrollment | null>>(args: { where?: TeamEnrollmentWhereInput | null, orderBy?: TeamEnrollmentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    teams: <T = Array<Team | null>>(args: { where?: TeamWhereInput | null, orderBy?: TeamOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    transactions: <T = Array<Transaction | null>>(args: { where?: TransactionWhereInput | null, orderBy?: TransactionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    wallets: <T = Array<Wallet | null>>(args: { where?: WalletWhereInput | null, orderBy?: WalletOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cards: <T = Array<Card | null>>(args: { where?: CardWhereInput | null, orderBy?: CardOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    leagueEnrollments: <T = Array<LeagueEnrollment | null>>(args: { where?: LeagueEnrollmentWhereInput | null, orderBy?: LeagueEnrollmentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    league: <T = League | null>(args: { where: LeagueWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    leagueType: <T = LeagueType | null>(args: { where: LeagueTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    score: <T = Score | null>(args: { where: ScoreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    season: <T = Season | null>(args: { where: SeasonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    teamEnrollment: <T = TeamEnrollment | null>(args: { where: TeamEnrollmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    team: <T = Team | null>(args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    transaction: <T = Transaction | null>(args: { where: TransactionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    wallet: <T = Wallet | null>(args: { where: WalletWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    card: <T = Card | null>(args: { where: CardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    leagueEnrollment: <T = LeagueEnrollment | null>(args: { where: LeagueEnrollmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    leaguesConnection: <T = LeagueConnection>(args: { where?: LeagueWhereInput | null, orderBy?: LeagueOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    leagueTypesConnection: <T = LeagueTypeConnection>(args: { where?: LeagueTypeWhereInput | null, orderBy?: LeagueTypeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    scoresConnection: <T = ScoreConnection>(args: { where?: ScoreWhereInput | null, orderBy?: ScoreOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    seasonsConnection: <T = SeasonConnection>(args: { where?: SeasonWhereInput | null, orderBy?: SeasonOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    teamEnrollmentsConnection: <T = TeamEnrollmentConnection>(args: { where?: TeamEnrollmentWhereInput | null, orderBy?: TeamEnrollmentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    teamsConnection: <T = TeamConnection>(args: { where?: TeamWhereInput | null, orderBy?: TeamOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    transactionsConnection: <T = TransactionConnection>(args: { where?: TransactionWhereInput | null, orderBy?: TransactionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    walletsConnection: <T = WalletConnection>(args: { where?: WalletWhereInput | null, orderBy?: WalletOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cardsConnection: <T = CardConnection>(args: { where?: CardWhereInput | null, orderBy?: CardOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    leagueEnrollmentsConnection: <T = LeagueEnrollmentConnection>(args: { where?: LeagueEnrollmentWhereInput | null, orderBy?: LeagueEnrollmentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLeague: <T = League>(args: { data: LeagueCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLeagueType: <T = LeagueType>(args: { data: LeagueTypeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createScore: <T = Score>(args: { data: ScoreCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSeason: <T = Season>(args: { data: SeasonCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTeamEnrollment: <T = TeamEnrollment>(args: { data: TeamEnrollmentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTeam: <T = Team>(args: { data: TeamCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTransaction: <T = Transaction>(args: { data: TransactionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWallet: <T = Wallet>(args: { data: WalletCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCard: <T = Card>(args: { data: CardCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLeagueEnrollment: <T = LeagueEnrollment>(args: { data: LeagueEnrollmentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLeague: <T = League | null>(args: { data: LeagueUpdateInput, where: LeagueWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLeagueType: <T = LeagueType | null>(args: { data: LeagueTypeUpdateInput, where: LeagueTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateScore: <T = Score | null>(args: { data: ScoreUpdateInput, where: ScoreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateSeason: <T = Season | null>(args: { data: SeasonUpdateInput, where: SeasonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateTeamEnrollment: <T = TeamEnrollment | null>(args: { data: TeamEnrollmentUpdateInput, where: TeamEnrollmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateTeam: <T = Team | null>(args: { data: TeamUpdateInput, where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateTransaction: <T = Transaction | null>(args: { data: TransactionUpdateInput, where: TransactionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateWallet: <T = Wallet | null>(args: { data: WalletUpdateInput, where: WalletWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCard: <T = Card | null>(args: { data: CardUpdateInput, where: CardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLeagueEnrollment: <T = LeagueEnrollment | null>(args: { data: LeagueEnrollmentUpdateInput, where: LeagueEnrollmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLeague: <T = League | null>(args: { where: LeagueWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLeagueType: <T = LeagueType | null>(args: { where: LeagueTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteScore: <T = Score | null>(args: { where: ScoreWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteSeason: <T = Season | null>(args: { where: SeasonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteTeamEnrollment: <T = TeamEnrollment | null>(args: { where: TeamEnrollmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteTeam: <T = Team | null>(args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteTransaction: <T = Transaction | null>(args: { where: TransactionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteWallet: <T = Wallet | null>(args: { where: WalletWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCard: <T = Card | null>(args: { where: CardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLeagueEnrollment: <T = LeagueEnrollment | null>(args: { where: LeagueEnrollmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLeague: <T = League>(args: { where: LeagueWhereUniqueInput, create: LeagueCreateInput, update: LeagueUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLeagueType: <T = LeagueType>(args: { where: LeagueTypeWhereUniqueInput, create: LeagueTypeCreateInput, update: LeagueTypeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertScore: <T = Score>(args: { where: ScoreWhereUniqueInput, create: ScoreCreateInput, update: ScoreUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSeason: <T = Season>(args: { where: SeasonWhereUniqueInput, create: SeasonCreateInput, update: SeasonUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTeamEnrollment: <T = TeamEnrollment>(args: { where: TeamEnrollmentWhereUniqueInput, create: TeamEnrollmentCreateInput, update: TeamEnrollmentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTeam: <T = Team>(args: { where: TeamWhereUniqueInput, create: TeamCreateInput, update: TeamUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTransaction: <T = Transaction>(args: { where: TransactionWhereUniqueInput, create: TransactionCreateInput, update: TransactionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWallet: <T = Wallet>(args: { where: WalletWhereUniqueInput, create: WalletCreateInput, update: WalletUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCard: <T = Card>(args: { where: CardWhereUniqueInput, create: CardCreateInput, update: CardUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLeagueEnrollment: <T = LeagueEnrollment>(args: { where: LeagueEnrollmentWhereUniqueInput, create: LeagueEnrollmentCreateInput, update: LeagueEnrollmentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLeagues: <T = BatchPayload>(args: { data: LeagueUpdateManyMutationInput, where?: LeagueWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLeagueTypes: <T = BatchPayload>(args: { data: LeagueTypeUpdateManyMutationInput, where?: LeagueTypeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyScores: <T = BatchPayload>(args: { data: ScoreUpdateManyMutationInput, where?: ScoreWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySeasons: <T = BatchPayload>(args: { data: SeasonUpdateManyMutationInput, where?: SeasonWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTeamEnrollments: <T = BatchPayload>(args: { data: TeamEnrollmentUpdateManyMutationInput, where?: TeamEnrollmentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTeams: <T = BatchPayload>(args: { data: TeamUpdateManyMutationInput, where?: TeamWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTransactions: <T = BatchPayload>(args: { data: TransactionUpdateManyMutationInput, where?: TransactionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWallets: <T = BatchPayload>(args: { data: WalletUpdateManyMutationInput, where?: WalletWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCards: <T = BatchPayload>(args: { data: CardUpdateManyMutationInput, where?: CardWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLeagues: <T = BatchPayload>(args: { where?: LeagueWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLeagueTypes: <T = BatchPayload>(args: { where?: LeagueTypeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyScores: <T = BatchPayload>(args: { where?: ScoreWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySeasons: <T = BatchPayload>(args: { where?: SeasonWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTeamEnrollments: <T = BatchPayload>(args: { where?: TeamEnrollmentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTeams: <T = BatchPayload>(args: { where?: TeamWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTransactions: <T = BatchPayload>(args: { where?: TransactionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWallets: <T = BatchPayload>(args: { where?: WalletWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCards: <T = BatchPayload>(args: { where?: CardWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLeagueEnrollments: <T = BatchPayload>(args: { where?: LeagueEnrollmentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    executeRaw: <T = Json>(args: { database?: PrismaDatabase | null, query: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    league: <T = LeagueSubscriptionPayload | null>(args: { where?: LeagueSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    leagueType: <T = LeagueTypeSubscriptionPayload | null>(args: { where?: LeagueTypeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    score: <T = ScoreSubscriptionPayload | null>(args: { where?: ScoreSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    season: <T = SeasonSubscriptionPayload | null>(args: { where?: SeasonSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    teamEnrollment: <T = TeamEnrollmentSubscriptionPayload | null>(args: { where?: TeamEnrollmentSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    team: <T = TeamSubscriptionPayload | null>(args: { where?: TeamSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    transaction: <T = TransactionSubscriptionPayload | null>(args: { where?: TransactionSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    wallet: <T = WalletSubscriptionPayload | null>(args: { where?: WalletSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    card: <T = CardSubscriptionPayload | null>(args: { where?: CardSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    leagueEnrollment: <T = LeagueEnrollmentSubscriptionPayload | null>(args: { where?: LeagueEnrollmentSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  League: (where?: LeagueWhereInput) => Promise<boolean>
  LeagueType: (where?: LeagueTypeWhereInput) => Promise<boolean>
  Score: (where?: ScoreWhereInput) => Promise<boolean>
  Season: (where?: SeasonWhereInput) => Promise<boolean>
  TeamEnrollment: (where?: TeamEnrollmentWhereInput) => Promise<boolean>
  Team: (where?: TeamWhereInput) => Promise<boolean>
  Transaction: (where?: TransactionWhereInput) => Promise<boolean>
  Wallet: (where?: WalletWhereInput) => Promise<boolean>
  Card: (where?: CardWhereInput) => Promise<boolean>
  LeagueEnrollment: (where?: LeagueEnrollmentWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateCard {
  count: Int!
}

type AggregateLeague {
  count: Int!
}

type AggregateLeagueEnrollment {
  count: Int!
}

type AggregateLeagueType {
  count: Int!
}

type AggregateScore {
  count: Int!
}

type AggregateSeason {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateTeamEnrollment {
  count: Int!
}

type AggregateTransaction {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWallet {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Card {
  id: UUID!
  pagarmeId: String!
  brand: String!
  holderName: String!
  firstDigits: String!
  lastDigits: String!
  fingerprint: String!
  valid: Boolean!
  expirationDate: String!
  user: User!
}

"""A connection to a list of items."""
type CardConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CardEdge]!
  aggregate: AggregateCard!
}

input CardCreateInput {
  id: UUID
  pagarmeId: String!
  brand: String!
  holderName: String!
  firstDigits: String!
  lastDigits: String!
  fingerprint: String!
  valid: Boolean!
  expirationDate: String!
  user: UserCreateOneWithoutCardsInput!
}

input CardCreateManyWithoutUserInput {
  create: [CardCreateWithoutUserInput!]
  connect: [CardWhereUniqueInput!]
}

input CardCreateWithoutUserInput {
  id: UUID
  pagarmeId: String!
  brand: String!
  holderName: String!
  firstDigits: String!
  lastDigits: String!
  fingerprint: String!
  valid: Boolean!
  expirationDate: String!
}

"""An edge in a connection."""
type CardEdge {
  """The item at the end of the edge."""
  node: Card!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CardOrderByInput {
  id_ASC
  id_DESC
  pagarmeId_ASC
  pagarmeId_DESC
  brand_ASC
  brand_DESC
  holderName_ASC
  holderName_DESC
  firstDigits_ASC
  firstDigits_DESC
  lastDigits_ASC
  lastDigits_DESC
  fingerprint_ASC
  fingerprint_DESC
  valid_ASC
  valid_DESC
  expirationDate_ASC
  expirationDate_DESC
}

type CardPreviousValues {
  id: UUID!
  pagarmeId: String!
  brand: String!
  holderName: String!
  firstDigits: String!
  lastDigits: String!
  fingerprint: String!
  valid: Boolean!
  expirationDate: String!
}

input CardScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [CardScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardScalarWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  pagarmeId: String

  """All values that are not equal to given value."""
  pagarmeId_not: String

  """All values that are contained in given list."""
  pagarmeId_in: [String!]

  """All values that are not contained in given list."""
  pagarmeId_not_in: [String!]

  """All values less than the given value."""
  pagarmeId_lt: String

  """All values less than or equal the given value."""
  pagarmeId_lte: String

  """All values greater than the given value."""
  pagarmeId_gt: String

  """All values greater than or equal the given value."""
  pagarmeId_gte: String

  """All values containing the given string."""
  pagarmeId_contains: String

  """All values not containing the given string."""
  pagarmeId_not_contains: String

  """All values starting with the given string."""
  pagarmeId_starts_with: String

  """All values not starting with the given string."""
  pagarmeId_not_starts_with: String

  """All values ending with the given string."""
  pagarmeId_ends_with: String

  """All values not ending with the given string."""
  pagarmeId_not_ends_with: String
  brand: String

  """All values that are not equal to given value."""
  brand_not: String

  """All values that are contained in given list."""
  brand_in: [String!]

  """All values that are not contained in given list."""
  brand_not_in: [String!]

  """All values less than the given value."""
  brand_lt: String

  """All values less than or equal the given value."""
  brand_lte: String

  """All values greater than the given value."""
  brand_gt: String

  """All values greater than or equal the given value."""
  brand_gte: String

  """All values containing the given string."""
  brand_contains: String

  """All values not containing the given string."""
  brand_not_contains: String

  """All values starting with the given string."""
  brand_starts_with: String

  """All values not starting with the given string."""
  brand_not_starts_with: String

  """All values ending with the given string."""
  brand_ends_with: String

  """All values not ending with the given string."""
  brand_not_ends_with: String
  holderName: String

  """All values that are not equal to given value."""
  holderName_not: String

  """All values that are contained in given list."""
  holderName_in: [String!]

  """All values that are not contained in given list."""
  holderName_not_in: [String!]

  """All values less than the given value."""
  holderName_lt: String

  """All values less than or equal the given value."""
  holderName_lte: String

  """All values greater than the given value."""
  holderName_gt: String

  """All values greater than or equal the given value."""
  holderName_gte: String

  """All values containing the given string."""
  holderName_contains: String

  """All values not containing the given string."""
  holderName_not_contains: String

  """All values starting with the given string."""
  holderName_starts_with: String

  """All values not starting with the given string."""
  holderName_not_starts_with: String

  """All values ending with the given string."""
  holderName_ends_with: String

  """All values not ending with the given string."""
  holderName_not_ends_with: String
  firstDigits: String

  """All values that are not equal to given value."""
  firstDigits_not: String

  """All values that are contained in given list."""
  firstDigits_in: [String!]

  """All values that are not contained in given list."""
  firstDigits_not_in: [String!]

  """All values less than the given value."""
  firstDigits_lt: String

  """All values less than or equal the given value."""
  firstDigits_lte: String

  """All values greater than the given value."""
  firstDigits_gt: String

  """All values greater than or equal the given value."""
  firstDigits_gte: String

  """All values containing the given string."""
  firstDigits_contains: String

  """All values not containing the given string."""
  firstDigits_not_contains: String

  """All values starting with the given string."""
  firstDigits_starts_with: String

  """All values not starting with the given string."""
  firstDigits_not_starts_with: String

  """All values ending with the given string."""
  firstDigits_ends_with: String

  """All values not ending with the given string."""
  firstDigits_not_ends_with: String
  lastDigits: String

  """All values that are not equal to given value."""
  lastDigits_not: String

  """All values that are contained in given list."""
  lastDigits_in: [String!]

  """All values that are not contained in given list."""
  lastDigits_not_in: [String!]

  """All values less than the given value."""
  lastDigits_lt: String

  """All values less than or equal the given value."""
  lastDigits_lte: String

  """All values greater than the given value."""
  lastDigits_gt: String

  """All values greater than or equal the given value."""
  lastDigits_gte: String

  """All values containing the given string."""
  lastDigits_contains: String

  """All values not containing the given string."""
  lastDigits_not_contains: String

  """All values starting with the given string."""
  lastDigits_starts_with: String

  """All values not starting with the given string."""
  lastDigits_not_starts_with: String

  """All values ending with the given string."""
  lastDigits_ends_with: String

  """All values not ending with the given string."""
  lastDigits_not_ends_with: String
  fingerprint: String

  """All values that are not equal to given value."""
  fingerprint_not: String

  """All values that are contained in given list."""
  fingerprint_in: [String!]

  """All values that are not contained in given list."""
  fingerprint_not_in: [String!]

  """All values less than the given value."""
  fingerprint_lt: String

  """All values less than or equal the given value."""
  fingerprint_lte: String

  """All values greater than the given value."""
  fingerprint_gt: String

  """All values greater than or equal the given value."""
  fingerprint_gte: String

  """All values containing the given string."""
  fingerprint_contains: String

  """All values not containing the given string."""
  fingerprint_not_contains: String

  """All values starting with the given string."""
  fingerprint_starts_with: String

  """All values not starting with the given string."""
  fingerprint_not_starts_with: String

  """All values ending with the given string."""
  fingerprint_ends_with: String

  """All values not ending with the given string."""
  fingerprint_not_ends_with: String
  valid: Boolean

  """All values that are not equal to given value."""
  valid_not: Boolean
  expirationDate: String

  """All values that are not equal to given value."""
  expirationDate_not: String

  """All values that are contained in given list."""
  expirationDate_in: [String!]

  """All values that are not contained in given list."""
  expirationDate_not_in: [String!]

  """All values less than the given value."""
  expirationDate_lt: String

  """All values less than or equal the given value."""
  expirationDate_lte: String

  """All values greater than the given value."""
  expirationDate_gt: String

  """All values greater than or equal the given value."""
  expirationDate_gte: String

  """All values containing the given string."""
  expirationDate_contains: String

  """All values not containing the given string."""
  expirationDate_not_contains: String

  """All values starting with the given string."""
  expirationDate_starts_with: String

  """All values not starting with the given string."""
  expirationDate_not_starts_with: String

  """All values ending with the given string."""
  expirationDate_ends_with: String

  """All values not ending with the given string."""
  expirationDate_not_ends_with: String
}

type CardSubscriptionPayload {
  mutation: MutationType!
  node: Card
  updatedFields: [String!]
  previousValues: CardPreviousValues
}

input CardSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CardSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CardWhereInput
}

input CardUpdateInput {
  pagarmeId: String
  brand: String
  holderName: String
  firstDigits: String
  lastDigits: String
  fingerprint: String
  valid: Boolean
  expirationDate: String
  user: UserUpdateOneRequiredWithoutCardsInput
}

input CardUpdateManyDataInput {
  pagarmeId: String
  brand: String
  holderName: String
  firstDigits: String
  lastDigits: String
  fingerprint: String
  valid: Boolean
  expirationDate: String
}

input CardUpdateManyMutationInput {
  pagarmeId: String
  brand: String
  holderName: String
  firstDigits: String
  lastDigits: String
  fingerprint: String
  valid: Boolean
  expirationDate: String
}

input CardUpdateManyWithoutUserInput {
  create: [CardCreateWithoutUserInput!]
  connect: [CardWhereUniqueInput!]
  set: [CardWhereUniqueInput!]
  disconnect: [CardWhereUniqueInput!]
  delete: [CardWhereUniqueInput!]
  update: [CardUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [CardUpdateManyWithWhereNestedInput!]
  deleteMany: [CardScalarWhereInput!]
  upsert: [CardUpsertWithWhereUniqueWithoutUserInput!]
}

input CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput!
  data: CardUpdateManyDataInput!
}

input CardUpdateWithoutUserDataInput {
  pagarmeId: String
  brand: String
  holderName: String
  firstDigits: String
  lastDigits: String
  fingerprint: String
  valid: Boolean
  expirationDate: String
}

input CardUpdateWithWhereUniqueWithoutUserInput {
  where: CardWhereUniqueInput!
  data: CardUpdateWithoutUserDataInput!
}

input CardUpsertWithWhereUniqueWithoutUserInput {
  where: CardWhereUniqueInput!
  update: CardUpdateWithoutUserDataInput!
  create: CardCreateWithoutUserInput!
}

input CardWhereInput {
  """Logical AND on all given filters."""
  AND: [CardWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  pagarmeId: String

  """All values that are not equal to given value."""
  pagarmeId_not: String

  """All values that are contained in given list."""
  pagarmeId_in: [String!]

  """All values that are not contained in given list."""
  pagarmeId_not_in: [String!]

  """All values less than the given value."""
  pagarmeId_lt: String

  """All values less than or equal the given value."""
  pagarmeId_lte: String

  """All values greater than the given value."""
  pagarmeId_gt: String

  """All values greater than or equal the given value."""
  pagarmeId_gte: String

  """All values containing the given string."""
  pagarmeId_contains: String

  """All values not containing the given string."""
  pagarmeId_not_contains: String

  """All values starting with the given string."""
  pagarmeId_starts_with: String

  """All values not starting with the given string."""
  pagarmeId_not_starts_with: String

  """All values ending with the given string."""
  pagarmeId_ends_with: String

  """All values not ending with the given string."""
  pagarmeId_not_ends_with: String
  brand: String

  """All values that are not equal to given value."""
  brand_not: String

  """All values that are contained in given list."""
  brand_in: [String!]

  """All values that are not contained in given list."""
  brand_not_in: [String!]

  """All values less than the given value."""
  brand_lt: String

  """All values less than or equal the given value."""
  brand_lte: String

  """All values greater than the given value."""
  brand_gt: String

  """All values greater than or equal the given value."""
  brand_gte: String

  """All values containing the given string."""
  brand_contains: String

  """All values not containing the given string."""
  brand_not_contains: String

  """All values starting with the given string."""
  brand_starts_with: String

  """All values not starting with the given string."""
  brand_not_starts_with: String

  """All values ending with the given string."""
  brand_ends_with: String

  """All values not ending with the given string."""
  brand_not_ends_with: String
  holderName: String

  """All values that are not equal to given value."""
  holderName_not: String

  """All values that are contained in given list."""
  holderName_in: [String!]

  """All values that are not contained in given list."""
  holderName_not_in: [String!]

  """All values less than the given value."""
  holderName_lt: String

  """All values less than or equal the given value."""
  holderName_lte: String

  """All values greater than the given value."""
  holderName_gt: String

  """All values greater than or equal the given value."""
  holderName_gte: String

  """All values containing the given string."""
  holderName_contains: String

  """All values not containing the given string."""
  holderName_not_contains: String

  """All values starting with the given string."""
  holderName_starts_with: String

  """All values not starting with the given string."""
  holderName_not_starts_with: String

  """All values ending with the given string."""
  holderName_ends_with: String

  """All values not ending with the given string."""
  holderName_not_ends_with: String
  firstDigits: String

  """All values that are not equal to given value."""
  firstDigits_not: String

  """All values that are contained in given list."""
  firstDigits_in: [String!]

  """All values that are not contained in given list."""
  firstDigits_not_in: [String!]

  """All values less than the given value."""
  firstDigits_lt: String

  """All values less than or equal the given value."""
  firstDigits_lte: String

  """All values greater than the given value."""
  firstDigits_gt: String

  """All values greater than or equal the given value."""
  firstDigits_gte: String

  """All values containing the given string."""
  firstDigits_contains: String

  """All values not containing the given string."""
  firstDigits_not_contains: String

  """All values starting with the given string."""
  firstDigits_starts_with: String

  """All values not starting with the given string."""
  firstDigits_not_starts_with: String

  """All values ending with the given string."""
  firstDigits_ends_with: String

  """All values not ending with the given string."""
  firstDigits_not_ends_with: String
  lastDigits: String

  """All values that are not equal to given value."""
  lastDigits_not: String

  """All values that are contained in given list."""
  lastDigits_in: [String!]

  """All values that are not contained in given list."""
  lastDigits_not_in: [String!]

  """All values less than the given value."""
  lastDigits_lt: String

  """All values less than or equal the given value."""
  lastDigits_lte: String

  """All values greater than the given value."""
  lastDigits_gt: String

  """All values greater than or equal the given value."""
  lastDigits_gte: String

  """All values containing the given string."""
  lastDigits_contains: String

  """All values not containing the given string."""
  lastDigits_not_contains: String

  """All values starting with the given string."""
  lastDigits_starts_with: String

  """All values not starting with the given string."""
  lastDigits_not_starts_with: String

  """All values ending with the given string."""
  lastDigits_ends_with: String

  """All values not ending with the given string."""
  lastDigits_not_ends_with: String
  fingerprint: String

  """All values that are not equal to given value."""
  fingerprint_not: String

  """All values that are contained in given list."""
  fingerprint_in: [String!]

  """All values that are not contained in given list."""
  fingerprint_not_in: [String!]

  """All values less than the given value."""
  fingerprint_lt: String

  """All values less than or equal the given value."""
  fingerprint_lte: String

  """All values greater than the given value."""
  fingerprint_gt: String

  """All values greater than or equal the given value."""
  fingerprint_gte: String

  """All values containing the given string."""
  fingerprint_contains: String

  """All values not containing the given string."""
  fingerprint_not_contains: String

  """All values starting with the given string."""
  fingerprint_starts_with: String

  """All values not starting with the given string."""
  fingerprint_not_starts_with: String

  """All values ending with the given string."""
  fingerprint_ends_with: String

  """All values not ending with the given string."""
  fingerprint_not_ends_with: String
  valid: Boolean

  """All values that are not equal to given value."""
  valid_not: Boolean
  expirationDate: String

  """All values that are not equal to given value."""
  expirationDate_not: String

  """All values that are contained in given list."""
  expirationDate_in: [String!]

  """All values that are not contained in given list."""
  expirationDate_not_in: [String!]

  """All values less than the given value."""
  expirationDate_lt: String

  """All values less than or equal the given value."""
  expirationDate_lte: String

  """All values greater than the given value."""
  expirationDate_gt: String

  """All values greater than or equal the given value."""
  expirationDate_gte: String

  """All values containing the given string."""
  expirationDate_contains: String

  """All values not containing the given string."""
  expirationDate_not_contains: String

  """All values starting with the given string."""
  expirationDate_starts_with: String

  """All values not starting with the given string."""
  expirationDate_not_starts_with: String

  """All values ending with the given string."""
  expirationDate_ends_with: String

  """All values not ending with the given string."""
  expirationDate_not_ends_with: String
  user: UserWhereInput
}

input CardWhereUniqueInput {
  id: UUID
}

scalar DateTime

"""Raw JSON value"""
scalar Json

type League {
  id: UUID!
  name: String!
  adminTax: Int!
  avatar: String
  description: String
  fee: Int!
  limit: Int!
  wallet: Wallet!
  leagueType: LeagueType!
  enrollments(where: LeagueEnrollmentWhereInput, orderBy: LeagueEnrollmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LeagueEnrollment!]
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

"""A connection to a list of items."""
type LeagueConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LeagueEdge]!
  aggregate: AggregateLeague!
}

input LeagueCreateInput {
  id: UUID
  name: String!
  adminTax: Int
  avatar: String
  description: String
  fee: Int
  limit: Int
  deleted: Boolean
  wallet: WalletCreateOneWithoutLeagueInput!
  leagueType: LeagueTypeCreateOneWithoutLeaguesInput!
  enrollments: LeagueEnrollmentCreateManyWithoutLeagueInput
}

input LeagueCreateManyWithoutLeagueTypeInput {
  create: [LeagueCreateWithoutLeagueTypeInput!]
  connect: [LeagueWhereUniqueInput!]
}

input LeagueCreateOneWithoutEnrollmentsInput {
  create: LeagueCreateWithoutEnrollmentsInput
  connect: LeagueWhereUniqueInput
}

input LeagueCreateOneWithoutWalletInput {
  create: LeagueCreateWithoutWalletInput
  connect: LeagueWhereUniqueInput
}

input LeagueCreateWithoutEnrollmentsInput {
  id: UUID
  name: String!
  adminTax: Int
  avatar: String
  description: String
  fee: Int
  limit: Int
  deleted: Boolean
  wallet: WalletCreateOneWithoutLeagueInput!
  leagueType: LeagueTypeCreateOneWithoutLeaguesInput!
}

input LeagueCreateWithoutLeagueTypeInput {
  id: UUID
  name: String!
  adminTax: Int
  avatar: String
  description: String
  fee: Int
  limit: Int
  deleted: Boolean
  wallet: WalletCreateOneWithoutLeagueInput!
  enrollments: LeagueEnrollmentCreateManyWithoutLeagueInput
}

input LeagueCreateWithoutWalletInput {
  id: UUID
  name: String!
  adminTax: Int
  avatar: String
  description: String
  fee: Int
  limit: Int
  deleted: Boolean
  leagueType: LeagueTypeCreateOneWithoutLeaguesInput!
  enrollments: LeagueEnrollmentCreateManyWithoutLeagueInput
}

"""An edge in a connection."""
type LeagueEdge {
  """The item at the end of the edge."""
  node: League!

  """A cursor for use in pagination."""
  cursor: String!
}

type LeagueEnrollment {
  id: UUID!
  league: League!
  season: Season!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type LeagueEnrollmentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LeagueEnrollmentEdge]!
  aggregate: AggregateLeagueEnrollment!
}

input LeagueEnrollmentCreateInput {
  id: UUID
  league: LeagueCreateOneWithoutEnrollmentsInput!
  season: SeasonCreateOneWithoutLeaguesEnrollmentsInput!
}

input LeagueEnrollmentCreateManyWithoutLeagueInput {
  create: [LeagueEnrollmentCreateWithoutLeagueInput!]
  connect: [LeagueEnrollmentWhereUniqueInput!]
}

input LeagueEnrollmentCreateManyWithoutSeasonInput {
  create: [LeagueEnrollmentCreateWithoutSeasonInput!]
  connect: [LeagueEnrollmentWhereUniqueInput!]
}

input LeagueEnrollmentCreateOneInput {
  create: LeagueEnrollmentCreateInput
  connect: LeagueEnrollmentWhereUniqueInput
}

input LeagueEnrollmentCreateWithoutLeagueInput {
  id: UUID
  season: SeasonCreateOneWithoutLeaguesEnrollmentsInput!
}

input LeagueEnrollmentCreateWithoutSeasonInput {
  id: UUID
  league: LeagueCreateOneWithoutEnrollmentsInput!
}

"""An edge in a connection."""
type LeagueEnrollmentEdge {
  """The item at the end of the edge."""
  node: LeagueEnrollment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LeagueEnrollmentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LeagueEnrollmentPreviousValues {
  id: UUID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input LeagueEnrollmentScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [LeagueEnrollmentScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [LeagueEnrollmentScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LeagueEnrollmentScalarWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type LeagueEnrollmentSubscriptionPayload {
  mutation: MutationType!
  node: LeagueEnrollment
  updatedFields: [String!]
  previousValues: LeagueEnrollmentPreviousValues
}

input LeagueEnrollmentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LeagueEnrollmentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LeagueEnrollmentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LeagueEnrollmentSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LeagueEnrollmentWhereInput
}

input LeagueEnrollmentUpdateDataInput {
  league: LeagueUpdateOneRequiredWithoutEnrollmentsInput
  season: SeasonUpdateOneRequiredWithoutLeaguesEnrollmentsInput
}

input LeagueEnrollmentUpdateInput {
  league: LeagueUpdateOneRequiredWithoutEnrollmentsInput
  season: SeasonUpdateOneRequiredWithoutLeaguesEnrollmentsInput
}

input LeagueEnrollmentUpdateManyWithoutLeagueInput {
  create: [LeagueEnrollmentCreateWithoutLeagueInput!]
  connect: [LeagueEnrollmentWhereUniqueInput!]
  set: [LeagueEnrollmentWhereUniqueInput!]
  disconnect: [LeagueEnrollmentWhereUniqueInput!]
  delete: [LeagueEnrollmentWhereUniqueInput!]
  update: [LeagueEnrollmentUpdateWithWhereUniqueWithoutLeagueInput!]
  deleteMany: [LeagueEnrollmentScalarWhereInput!]
  upsert: [LeagueEnrollmentUpsertWithWhereUniqueWithoutLeagueInput!]
}

input LeagueEnrollmentUpdateManyWithoutSeasonInput {
  create: [LeagueEnrollmentCreateWithoutSeasonInput!]
  connect: [LeagueEnrollmentWhereUniqueInput!]
  set: [LeagueEnrollmentWhereUniqueInput!]
  disconnect: [LeagueEnrollmentWhereUniqueInput!]
  delete: [LeagueEnrollmentWhereUniqueInput!]
  update: [LeagueEnrollmentUpdateWithWhereUniqueWithoutSeasonInput!]
  deleteMany: [LeagueEnrollmentScalarWhereInput!]
  upsert: [LeagueEnrollmentUpsertWithWhereUniqueWithoutSeasonInput!]
}

input LeagueEnrollmentUpdateOneRequiredInput {
  create: LeagueEnrollmentCreateInput
  connect: LeagueEnrollmentWhereUniqueInput
  update: LeagueEnrollmentUpdateDataInput
  upsert: LeagueEnrollmentUpsertNestedInput
}

input LeagueEnrollmentUpdateWithoutLeagueDataInput {
  season: SeasonUpdateOneRequiredWithoutLeaguesEnrollmentsInput
}

input LeagueEnrollmentUpdateWithoutSeasonDataInput {
  league: LeagueUpdateOneRequiredWithoutEnrollmentsInput
}

input LeagueEnrollmentUpdateWithWhereUniqueWithoutLeagueInput {
  where: LeagueEnrollmentWhereUniqueInput!
  data: LeagueEnrollmentUpdateWithoutLeagueDataInput!
}

input LeagueEnrollmentUpdateWithWhereUniqueWithoutSeasonInput {
  where: LeagueEnrollmentWhereUniqueInput!
  data: LeagueEnrollmentUpdateWithoutSeasonDataInput!
}

input LeagueEnrollmentUpsertNestedInput {
  update: LeagueEnrollmentUpdateDataInput!
  create: LeagueEnrollmentCreateInput!
}

input LeagueEnrollmentUpsertWithWhereUniqueWithoutLeagueInput {
  where: LeagueEnrollmentWhereUniqueInput!
  update: LeagueEnrollmentUpdateWithoutLeagueDataInput!
  create: LeagueEnrollmentCreateWithoutLeagueInput!
}

input LeagueEnrollmentUpsertWithWhereUniqueWithoutSeasonInput {
  where: LeagueEnrollmentWhereUniqueInput!
  update: LeagueEnrollmentUpdateWithoutSeasonDataInput!
  create: LeagueEnrollmentCreateWithoutSeasonInput!
}

input LeagueEnrollmentWhereInput {
  """Logical AND on all given filters."""
  AND: [LeagueEnrollmentWhereInput!]

  """Logical OR on all given filters."""
  OR: [LeagueEnrollmentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LeagueEnrollmentWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  league: LeagueWhereInput
  season: SeasonWhereInput
}

input LeagueEnrollmentWhereUniqueInput {
  id: UUID
}

enum LeagueOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  adminTax_ASC
  adminTax_DESC
  avatar_ASC
  avatar_DESC
  description_ASC
  description_DESC
  fee_ASC
  fee_DESC
  limit_ASC
  limit_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type LeaguePreviousValues {
  id: UUID!
  name: String!
  adminTax: Int!
  avatar: String
  description: String
  fee: Int!
  limit: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

input LeagueScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [LeagueScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [LeagueScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LeagueScalarWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  adminTax: Int

  """All values that are not equal to given value."""
  adminTax_not: Int

  """All values that are contained in given list."""
  adminTax_in: [Int!]

  """All values that are not contained in given list."""
  adminTax_not_in: [Int!]

  """All values less than the given value."""
  adminTax_lt: Int

  """All values less than or equal the given value."""
  adminTax_lte: Int

  """All values greater than the given value."""
  adminTax_gt: Int

  """All values greater than or equal the given value."""
  adminTax_gte: Int
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  fee: Int

  """All values that are not equal to given value."""
  fee_not: Int

  """All values that are contained in given list."""
  fee_in: [Int!]

  """All values that are not contained in given list."""
  fee_not_in: [Int!]

  """All values less than the given value."""
  fee_lt: Int

  """All values less than or equal the given value."""
  fee_lte: Int

  """All values greater than the given value."""
  fee_gt: Int

  """All values greater than or equal the given value."""
  fee_gte: Int
  limit: Int

  """All values that are not equal to given value."""
  limit_not: Int

  """All values that are contained in given list."""
  limit_in: [Int!]

  """All values that are not contained in given list."""
  limit_not_in: [Int!]

  """All values less than the given value."""
  limit_lt: Int

  """All values less than or equal the given value."""
  limit_lte: Int

  """All values greater than the given value."""
  limit_gt: Int

  """All values greater than or equal the given value."""
  limit_gte: Int
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
}

type LeagueSubscriptionPayload {
  mutation: MutationType!
  node: League
  updatedFields: [String!]
  previousValues: LeaguePreviousValues
}

input LeagueSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LeagueSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LeagueSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LeagueSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LeagueWhereInput
}

type LeagueType {
  id: UUID!
  name: String!
  description: String
  leagues(where: LeagueWhereInput, orderBy: LeagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [League!]
  createdAt: DateTime
  updatedAt: DateTime!
  deleted: Boolean!
}

"""A connection to a list of items."""
type LeagueTypeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LeagueTypeEdge]!
  aggregate: AggregateLeagueType!
}

input LeagueTypeCreateInput {
  id: UUID
  name: String!
  description: String
  deleted: Boolean
  leagues: LeagueCreateManyWithoutLeagueTypeInput
}

input LeagueTypeCreateOneWithoutLeaguesInput {
  create: LeagueTypeCreateWithoutLeaguesInput
  connect: LeagueTypeWhereUniqueInput
}

input LeagueTypeCreateWithoutLeaguesInput {
  id: UUID
  name: String!
  description: String
  deleted: Boolean
}

"""An edge in a connection."""
type LeagueTypeEdge {
  """The item at the end of the edge."""
  node: LeagueType!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LeagueTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type LeagueTypePreviousValues {
  id: UUID!
  name: String!
  description: String
  createdAt: DateTime
  updatedAt: DateTime!
  deleted: Boolean!
}

type LeagueTypeSubscriptionPayload {
  mutation: MutationType!
  node: LeagueType
  updatedFields: [String!]
  previousValues: LeagueTypePreviousValues
}

input LeagueTypeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LeagueTypeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LeagueTypeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LeagueTypeSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LeagueTypeWhereInput
}

input LeagueTypeUpdateInput {
  name: String
  description: String
  deleted: Boolean
  leagues: LeagueUpdateManyWithoutLeagueTypeInput
}

input LeagueTypeUpdateManyMutationInput {
  name: String
  description: String
  deleted: Boolean
}

input LeagueTypeUpdateOneRequiredWithoutLeaguesInput {
  create: LeagueTypeCreateWithoutLeaguesInput
  connect: LeagueTypeWhereUniqueInput
  update: LeagueTypeUpdateWithoutLeaguesDataInput
  upsert: LeagueTypeUpsertWithoutLeaguesInput
}

input LeagueTypeUpdateWithoutLeaguesDataInput {
  name: String
  description: String
  deleted: Boolean
}

input LeagueTypeUpsertWithoutLeaguesInput {
  update: LeagueTypeUpdateWithoutLeaguesDataInput!
  create: LeagueTypeCreateWithoutLeaguesInput!
}

input LeagueTypeWhereInput {
  """Logical AND on all given filters."""
  AND: [LeagueTypeWhereInput!]

  """Logical OR on all given filters."""
  OR: [LeagueTypeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LeagueTypeWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
  leagues_every: LeagueWhereInput
  leagues_some: LeagueWhereInput
  leagues_none: LeagueWhereInput
}

input LeagueTypeWhereUniqueInput {
  id: UUID
  name: String
}

input LeagueUpdateInput {
  name: String
  adminTax: Int
  avatar: String
  description: String
  fee: Int
  limit: Int
  deleted: Boolean
  wallet: WalletUpdateOneRequiredWithoutLeagueInput
  leagueType: LeagueTypeUpdateOneRequiredWithoutLeaguesInput
  enrollments: LeagueEnrollmentUpdateManyWithoutLeagueInput
}

input LeagueUpdateManyDataInput {
  name: String
  adminTax: Int
  avatar: String
  description: String
  fee: Int
  limit: Int
  deleted: Boolean
}

input LeagueUpdateManyMutationInput {
  name: String
  adminTax: Int
  avatar: String
  description: String
  fee: Int
  limit: Int
  deleted: Boolean
}

input LeagueUpdateManyWithoutLeagueTypeInput {
  create: [LeagueCreateWithoutLeagueTypeInput!]
  connect: [LeagueWhereUniqueInput!]
  set: [LeagueWhereUniqueInput!]
  disconnect: [LeagueWhereUniqueInput!]
  delete: [LeagueWhereUniqueInput!]
  update: [LeagueUpdateWithWhereUniqueWithoutLeagueTypeInput!]
  updateMany: [LeagueUpdateManyWithWhereNestedInput!]
  deleteMany: [LeagueScalarWhereInput!]
  upsert: [LeagueUpsertWithWhereUniqueWithoutLeagueTypeInput!]
}

input LeagueUpdateManyWithWhereNestedInput {
  where: LeagueScalarWhereInput!
  data: LeagueUpdateManyDataInput!
}

input LeagueUpdateOneRequiredWithoutEnrollmentsInput {
  create: LeagueCreateWithoutEnrollmentsInput
  connect: LeagueWhereUniqueInput
  update: LeagueUpdateWithoutEnrollmentsDataInput
  upsert: LeagueUpsertWithoutEnrollmentsInput
}

input LeagueUpdateOneWithoutWalletInput {
  create: LeagueCreateWithoutWalletInput
  connect: LeagueWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LeagueUpdateWithoutWalletDataInput
  upsert: LeagueUpsertWithoutWalletInput
}

input LeagueUpdateWithoutEnrollmentsDataInput {
  name: String
  adminTax: Int
  avatar: String
  description: String
  fee: Int
  limit: Int
  deleted: Boolean
  wallet: WalletUpdateOneRequiredWithoutLeagueInput
  leagueType: LeagueTypeUpdateOneRequiredWithoutLeaguesInput
}

input LeagueUpdateWithoutLeagueTypeDataInput {
  name: String
  adminTax: Int
  avatar: String
  description: String
  fee: Int
  limit: Int
  deleted: Boolean
  wallet: WalletUpdateOneRequiredWithoutLeagueInput
  enrollments: LeagueEnrollmentUpdateManyWithoutLeagueInput
}

input LeagueUpdateWithoutWalletDataInput {
  name: String
  adminTax: Int
  avatar: String
  description: String
  fee: Int
  limit: Int
  deleted: Boolean
  leagueType: LeagueTypeUpdateOneRequiredWithoutLeaguesInput
  enrollments: LeagueEnrollmentUpdateManyWithoutLeagueInput
}

input LeagueUpdateWithWhereUniqueWithoutLeagueTypeInput {
  where: LeagueWhereUniqueInput!
  data: LeagueUpdateWithoutLeagueTypeDataInput!
}

input LeagueUpsertWithoutEnrollmentsInput {
  update: LeagueUpdateWithoutEnrollmentsDataInput!
  create: LeagueCreateWithoutEnrollmentsInput!
}

input LeagueUpsertWithoutWalletInput {
  update: LeagueUpdateWithoutWalletDataInput!
  create: LeagueCreateWithoutWalletInput!
}

input LeagueUpsertWithWhereUniqueWithoutLeagueTypeInput {
  where: LeagueWhereUniqueInput!
  update: LeagueUpdateWithoutLeagueTypeDataInput!
  create: LeagueCreateWithoutLeagueTypeInput!
}

input LeagueWhereInput {
  """Logical AND on all given filters."""
  AND: [LeagueWhereInput!]

  """Logical OR on all given filters."""
  OR: [LeagueWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LeagueWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  adminTax: Int

  """All values that are not equal to given value."""
  adminTax_not: Int

  """All values that are contained in given list."""
  adminTax_in: [Int!]

  """All values that are not contained in given list."""
  adminTax_not_in: [Int!]

  """All values less than the given value."""
  adminTax_lt: Int

  """All values less than or equal the given value."""
  adminTax_lte: Int

  """All values greater than the given value."""
  adminTax_gt: Int

  """All values greater than or equal the given value."""
  adminTax_gte: Int
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  fee: Int

  """All values that are not equal to given value."""
  fee_not: Int

  """All values that are contained in given list."""
  fee_in: [Int!]

  """All values that are not contained in given list."""
  fee_not_in: [Int!]

  """All values less than the given value."""
  fee_lt: Int

  """All values less than or equal the given value."""
  fee_lte: Int

  """All values greater than the given value."""
  fee_gt: Int

  """All values greater than or equal the given value."""
  fee_gte: Int
  limit: Int

  """All values that are not equal to given value."""
  limit_not: Int

  """All values that are contained in given list."""
  limit_in: [Int!]

  """All values that are not contained in given list."""
  limit_not_in: [Int!]

  """All values less than the given value."""
  limit_lt: Int

  """All values less than or equal the given value."""
  limit_lte: Int

  """All values greater than the given value."""
  limit_gt: Int

  """All values greater than or equal the given value."""
  limit_gte: Int
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
  wallet: WalletWhereInput
  leagueType: LeagueTypeWhereInput
  enrollments_every: LeagueEnrollmentWhereInput
  enrollments_some: LeagueEnrollmentWhereInput
  enrollments_none: LeagueEnrollmentWhereInput
}

input LeagueWhereUniqueInput {
  id: UUID
  name: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createLeague(data: LeagueCreateInput!): League!
  createLeagueType(data: LeagueTypeCreateInput!): LeagueType!
  createScore(data: ScoreCreateInput!): Score!
  createSeason(data: SeasonCreateInput!): Season!
  createTeamEnrollment(data: TeamEnrollmentCreateInput!): TeamEnrollment!
  createTeam(data: TeamCreateInput!): Team!
  createTransaction(data: TransactionCreateInput!): Transaction!
  createWallet(data: WalletCreateInput!): Wallet!
  createCard(data: CardCreateInput!): Card!
  createLeagueEnrollment(data: LeagueEnrollmentCreateInput!): LeagueEnrollment!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateLeague(data: LeagueUpdateInput!, where: LeagueWhereUniqueInput!): League
  updateLeagueType(data: LeagueTypeUpdateInput!, where: LeagueTypeWhereUniqueInput!): LeagueType
  updateScore(data: ScoreUpdateInput!, where: ScoreWhereUniqueInput!): Score
  updateSeason(data: SeasonUpdateInput!, where: SeasonWhereUniqueInput!): Season
  updateTeamEnrollment(data: TeamEnrollmentUpdateInput!, where: TeamEnrollmentWhereUniqueInput!): TeamEnrollment
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateTransaction(data: TransactionUpdateInput!, where: TransactionWhereUniqueInput!): Transaction
  updateWallet(data: WalletUpdateInput!, where: WalletWhereUniqueInput!): Wallet
  updateCard(data: CardUpdateInput!, where: CardWhereUniqueInput!): Card
  updateLeagueEnrollment(data: LeagueEnrollmentUpdateInput!, where: LeagueEnrollmentWhereUniqueInput!): LeagueEnrollment
  deleteUser(where: UserWhereUniqueInput!): User
  deleteLeague(where: LeagueWhereUniqueInput!): League
  deleteLeagueType(where: LeagueTypeWhereUniqueInput!): LeagueType
  deleteScore(where: ScoreWhereUniqueInput!): Score
  deleteSeason(where: SeasonWhereUniqueInput!): Season
  deleteTeamEnrollment(where: TeamEnrollmentWhereUniqueInput!): TeamEnrollment
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteTransaction(where: TransactionWhereUniqueInput!): Transaction
  deleteWallet(where: WalletWhereUniqueInput!): Wallet
  deleteCard(where: CardWhereUniqueInput!): Card
  deleteLeagueEnrollment(where: LeagueEnrollmentWhereUniqueInput!): LeagueEnrollment
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertLeague(where: LeagueWhereUniqueInput!, create: LeagueCreateInput!, update: LeagueUpdateInput!): League!
  upsertLeagueType(where: LeagueTypeWhereUniqueInput!, create: LeagueTypeCreateInput!, update: LeagueTypeUpdateInput!): LeagueType!
  upsertScore(where: ScoreWhereUniqueInput!, create: ScoreCreateInput!, update: ScoreUpdateInput!): Score!
  upsertSeason(where: SeasonWhereUniqueInput!, create: SeasonCreateInput!, update: SeasonUpdateInput!): Season!
  upsertTeamEnrollment(where: TeamEnrollmentWhereUniqueInput!, create: TeamEnrollmentCreateInput!, update: TeamEnrollmentUpdateInput!): TeamEnrollment!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  upsertTransaction(where: TransactionWhereUniqueInput!, create: TransactionCreateInput!, update: TransactionUpdateInput!): Transaction!
  upsertWallet(where: WalletWhereUniqueInput!, create: WalletCreateInput!, update: WalletUpdateInput!): Wallet!
  upsertCard(where: CardWhereUniqueInput!, create: CardCreateInput!, update: CardUpdateInput!): Card!
  upsertLeagueEnrollment(where: LeagueEnrollmentWhereUniqueInput!, create: LeagueEnrollmentCreateInput!, update: LeagueEnrollmentUpdateInput!): LeagueEnrollment!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyLeagues(data: LeagueUpdateManyMutationInput!, where: LeagueWhereInput): BatchPayload!
  updateManyLeagueTypes(data: LeagueTypeUpdateManyMutationInput!, where: LeagueTypeWhereInput): BatchPayload!
  updateManyScores(data: ScoreUpdateManyMutationInput!, where: ScoreWhereInput): BatchPayload!
  updateManySeasons(data: SeasonUpdateManyMutationInput!, where: SeasonWhereInput): BatchPayload!
  updateManyTeamEnrollments(data: TeamEnrollmentUpdateManyMutationInput!, where: TeamEnrollmentWhereInput): BatchPayload!
  updateManyTeams(data: TeamUpdateManyMutationInput!, where: TeamWhereInput): BatchPayload!
  updateManyTransactions(data: TransactionUpdateManyMutationInput!, where: TransactionWhereInput): BatchPayload!
  updateManyWallets(data: WalletUpdateManyMutationInput!, where: WalletWhereInput): BatchPayload!
  updateManyCards(data: CardUpdateManyMutationInput!, where: CardWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyLeagues(where: LeagueWhereInput): BatchPayload!
  deleteManyLeagueTypes(where: LeagueTypeWhereInput): BatchPayload!
  deleteManyScores(where: ScoreWhereInput): BatchPayload!
  deleteManySeasons(where: SeasonWhereInput): BatchPayload!
  deleteManyTeamEnrollments(where: TeamEnrollmentWhereInput): BatchPayload!
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  deleteManyTransactions(where: TransactionWhereInput): BatchPayload!
  deleteManyWallets(where: WalletWhereInput): BatchPayload!
  deleteManyCards(where: CardWhereInput): BatchPayload!
  deleteManyLeagueEnrollments(where: LeagueEnrollmentWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PrismaDatabase {
  default
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  leagues(where: LeagueWhereInput, orderBy: LeagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [League]!
  leagueTypes(where: LeagueTypeWhereInput, orderBy: LeagueTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LeagueType]!
  scores(where: ScoreWhereInput, orderBy: ScoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Score]!
  seasons(where: SeasonWhereInput, orderBy: SeasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Season]!
  teamEnrollments(where: TeamEnrollmentWhereInput, orderBy: TeamEnrollmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TeamEnrollment]!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  transactions(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Transaction]!
  wallets(where: WalletWhereInput, orderBy: WalletOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Wallet]!
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card]!
  leagueEnrollments(where: LeagueEnrollmentWhereInput, orderBy: LeagueEnrollmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LeagueEnrollment]!
  user(where: UserWhereUniqueInput!): User
  league(where: LeagueWhereUniqueInput!): League
  leagueType(where: LeagueTypeWhereUniqueInput!): LeagueType
  score(where: ScoreWhereUniqueInput!): Score
  season(where: SeasonWhereUniqueInput!): Season
  teamEnrollment(where: TeamEnrollmentWhereUniqueInput!): TeamEnrollment
  team(where: TeamWhereUniqueInput!): Team
  transaction(where: TransactionWhereUniqueInput!): Transaction
  wallet(where: WalletWhereUniqueInput!): Wallet
  card(where: CardWhereUniqueInput!): Card
  leagueEnrollment(where: LeagueEnrollmentWhereUniqueInput!): LeagueEnrollment
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  leaguesConnection(where: LeagueWhereInput, orderBy: LeagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LeagueConnection!
  leagueTypesConnection(where: LeagueTypeWhereInput, orderBy: LeagueTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LeagueTypeConnection!
  scoresConnection(where: ScoreWhereInput, orderBy: ScoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ScoreConnection!
  seasonsConnection(where: SeasonWhereInput, orderBy: SeasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SeasonConnection!
  teamEnrollmentsConnection(where: TeamEnrollmentWhereInput, orderBy: TeamEnrollmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamEnrollmentConnection!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  transactionsConnection(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TransactionConnection!
  walletsConnection(where: WalletWhereInput, orderBy: WalletOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WalletConnection!
  cardsConnection(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardConnection!
  leagueEnrollmentsConnection(where: LeagueEnrollmentWhereInput, orderBy: LeagueEnrollmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LeagueEnrollmentConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Score {
  id: UUID!
  score: Float!
  season: Season!
  team: Team!
  round: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type ScoreConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ScoreEdge]!
  aggregate: AggregateScore!
}

input ScoreCreateInput {
  id: UUID
  score: Float!
  round: Int!
  season: SeasonCreateOneWithoutScoresInput!
  team: TeamCreateOneWithoutScoresInput!
}

input ScoreCreateManyWithoutSeasonInput {
  create: [ScoreCreateWithoutSeasonInput!]
  connect: [ScoreWhereUniqueInput!]
}

input ScoreCreateManyWithoutTeamInput {
  create: [ScoreCreateWithoutTeamInput!]
  connect: [ScoreWhereUniqueInput!]
}

input ScoreCreateWithoutSeasonInput {
  id: UUID
  score: Float!
  round: Int!
  team: TeamCreateOneWithoutScoresInput!
}

input ScoreCreateWithoutTeamInput {
  id: UUID
  score: Float!
  round: Int!
  season: SeasonCreateOneWithoutScoresInput!
}

"""An edge in a connection."""
type ScoreEdge {
  """The item at the end of the edge."""
  node: Score!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ScoreOrderByInput {
  id_ASC
  id_DESC
  score_ASC
  score_DESC
  round_ASC
  round_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ScorePreviousValues {
  id: UUID!
  score: Float!
  round: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ScoreScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ScoreScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ScoreScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ScoreScalarWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  score: Float

  """All values that are not equal to given value."""
  score_not: Float

  """All values that are contained in given list."""
  score_in: [Float!]

  """All values that are not contained in given list."""
  score_not_in: [Float!]

  """All values less than the given value."""
  score_lt: Float

  """All values less than or equal the given value."""
  score_lte: Float

  """All values greater than the given value."""
  score_gt: Float

  """All values greater than or equal the given value."""
  score_gte: Float
  round: Int

  """All values that are not equal to given value."""
  round_not: Int

  """All values that are contained in given list."""
  round_in: [Int!]

  """All values that are not contained in given list."""
  round_not_in: [Int!]

  """All values less than the given value."""
  round_lt: Int

  """All values less than or equal the given value."""
  round_lte: Int

  """All values greater than the given value."""
  round_gt: Int

  """All values greater than or equal the given value."""
  round_gte: Int
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type ScoreSubscriptionPayload {
  mutation: MutationType!
  node: Score
  updatedFields: [String!]
  previousValues: ScorePreviousValues
}

input ScoreSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ScoreSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ScoreSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ScoreSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ScoreWhereInput
}

input ScoreUpdateInput {
  score: Float
  round: Int
  season: SeasonUpdateOneRequiredWithoutScoresInput
  team: TeamUpdateOneRequiredWithoutScoresInput
}

input ScoreUpdateManyDataInput {
  score: Float
  round: Int
}

input ScoreUpdateManyMutationInput {
  score: Float
  round: Int
}

input ScoreUpdateManyWithoutSeasonInput {
  create: [ScoreCreateWithoutSeasonInput!]
  connect: [ScoreWhereUniqueInput!]
  set: [ScoreWhereUniqueInput!]
  disconnect: [ScoreWhereUniqueInput!]
  delete: [ScoreWhereUniqueInput!]
  update: [ScoreUpdateWithWhereUniqueWithoutSeasonInput!]
  updateMany: [ScoreUpdateManyWithWhereNestedInput!]
  deleteMany: [ScoreScalarWhereInput!]
  upsert: [ScoreUpsertWithWhereUniqueWithoutSeasonInput!]
}

input ScoreUpdateManyWithoutTeamInput {
  create: [ScoreCreateWithoutTeamInput!]
  connect: [ScoreWhereUniqueInput!]
  set: [ScoreWhereUniqueInput!]
  disconnect: [ScoreWhereUniqueInput!]
  delete: [ScoreWhereUniqueInput!]
  update: [ScoreUpdateWithWhereUniqueWithoutTeamInput!]
  updateMany: [ScoreUpdateManyWithWhereNestedInput!]
  deleteMany: [ScoreScalarWhereInput!]
  upsert: [ScoreUpsertWithWhereUniqueWithoutTeamInput!]
}

input ScoreUpdateManyWithWhereNestedInput {
  where: ScoreScalarWhereInput!
  data: ScoreUpdateManyDataInput!
}

input ScoreUpdateWithoutSeasonDataInput {
  score: Float
  round: Int
  team: TeamUpdateOneRequiredWithoutScoresInput
}

input ScoreUpdateWithoutTeamDataInput {
  score: Float
  round: Int
  season: SeasonUpdateOneRequiredWithoutScoresInput
}

input ScoreUpdateWithWhereUniqueWithoutSeasonInput {
  where: ScoreWhereUniqueInput!
  data: ScoreUpdateWithoutSeasonDataInput!
}

input ScoreUpdateWithWhereUniqueWithoutTeamInput {
  where: ScoreWhereUniqueInput!
  data: ScoreUpdateWithoutTeamDataInput!
}

input ScoreUpsertWithWhereUniqueWithoutSeasonInput {
  where: ScoreWhereUniqueInput!
  update: ScoreUpdateWithoutSeasonDataInput!
  create: ScoreCreateWithoutSeasonInput!
}

input ScoreUpsertWithWhereUniqueWithoutTeamInput {
  where: ScoreWhereUniqueInput!
  update: ScoreUpdateWithoutTeamDataInput!
  create: ScoreCreateWithoutTeamInput!
}

input ScoreWhereInput {
  """Logical AND on all given filters."""
  AND: [ScoreWhereInput!]

  """Logical OR on all given filters."""
  OR: [ScoreWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ScoreWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  score: Float

  """All values that are not equal to given value."""
  score_not: Float

  """All values that are contained in given list."""
  score_in: [Float!]

  """All values that are not contained in given list."""
  score_not_in: [Float!]

  """All values less than the given value."""
  score_lt: Float

  """All values less than or equal the given value."""
  score_lte: Float

  """All values greater than the given value."""
  score_gt: Float

  """All values greater than or equal the given value."""
  score_gte: Float
  round: Int

  """All values that are not equal to given value."""
  round_not: Int

  """All values that are contained in given list."""
  round_in: [Int!]

  """All values that are not contained in given list."""
  round_not_in: [Int!]

  """All values less than the given value."""
  round_lt: Int

  """All values less than or equal the given value."""
  round_lte: Int

  """All values greater than the given value."""
  round_gt: Int

  """All values greater than or equal the given value."""
  round_gte: Int
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  season: SeasonWhereInput
  team: TeamWhereInput
}

input ScoreWhereUniqueInput {
  id: UUID
}

type Season {
  id: UUID!
  name: String!
  description: String
  current: Boolean!
  currentRound: Int!
  scores(where: ScoreWhereInput, orderBy: ScoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Score!]
  leaguesEnrollments(where: LeagueEnrollmentWhereInput, orderBy: LeagueEnrollmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LeagueEnrollment!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type SeasonConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SeasonEdge]!
  aggregate: AggregateSeason!
}

input SeasonCreateInput {
  id: UUID
  name: String!
  description: String
  current: Boolean
  currentRound: Int!
  scores: ScoreCreateManyWithoutSeasonInput
  leaguesEnrollments: LeagueEnrollmentCreateManyWithoutSeasonInput
}

input SeasonCreateOneWithoutLeaguesEnrollmentsInput {
  create: SeasonCreateWithoutLeaguesEnrollmentsInput
  connect: SeasonWhereUniqueInput
}

input SeasonCreateOneWithoutScoresInput {
  create: SeasonCreateWithoutScoresInput
  connect: SeasonWhereUniqueInput
}

input SeasonCreateWithoutLeaguesEnrollmentsInput {
  id: UUID
  name: String!
  description: String
  current: Boolean
  currentRound: Int!
  scores: ScoreCreateManyWithoutSeasonInput
}

input SeasonCreateWithoutScoresInput {
  id: UUID
  name: String!
  description: String
  current: Boolean
  currentRound: Int!
  leaguesEnrollments: LeagueEnrollmentCreateManyWithoutSeasonInput
}

"""An edge in a connection."""
type SeasonEdge {
  """The item at the end of the edge."""
  node: Season!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SeasonOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  current_ASC
  current_DESC
  currentRound_ASC
  currentRound_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SeasonPreviousValues {
  id: UUID!
  name: String!
  description: String
  current: Boolean!
  currentRound: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SeasonSubscriptionPayload {
  mutation: MutationType!
  node: Season
  updatedFields: [String!]
  previousValues: SeasonPreviousValues
}

input SeasonSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SeasonSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SeasonSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SeasonSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SeasonWhereInput
}

input SeasonUpdateInput {
  name: String
  description: String
  current: Boolean
  currentRound: Int
  scores: ScoreUpdateManyWithoutSeasonInput
  leaguesEnrollments: LeagueEnrollmentUpdateManyWithoutSeasonInput
}

input SeasonUpdateManyMutationInput {
  name: String
  description: String
  current: Boolean
  currentRound: Int
}

input SeasonUpdateOneRequiredWithoutLeaguesEnrollmentsInput {
  create: SeasonCreateWithoutLeaguesEnrollmentsInput
  connect: SeasonWhereUniqueInput
  update: SeasonUpdateWithoutLeaguesEnrollmentsDataInput
  upsert: SeasonUpsertWithoutLeaguesEnrollmentsInput
}

input SeasonUpdateOneRequiredWithoutScoresInput {
  create: SeasonCreateWithoutScoresInput
  connect: SeasonWhereUniqueInput
  update: SeasonUpdateWithoutScoresDataInput
  upsert: SeasonUpsertWithoutScoresInput
}

input SeasonUpdateWithoutLeaguesEnrollmentsDataInput {
  name: String
  description: String
  current: Boolean
  currentRound: Int
  scores: ScoreUpdateManyWithoutSeasonInput
}

input SeasonUpdateWithoutScoresDataInput {
  name: String
  description: String
  current: Boolean
  currentRound: Int
  leaguesEnrollments: LeagueEnrollmentUpdateManyWithoutSeasonInput
}

input SeasonUpsertWithoutLeaguesEnrollmentsInput {
  update: SeasonUpdateWithoutLeaguesEnrollmentsDataInput!
  create: SeasonCreateWithoutLeaguesEnrollmentsInput!
}

input SeasonUpsertWithoutScoresInput {
  update: SeasonUpdateWithoutScoresDataInput!
  create: SeasonCreateWithoutScoresInput!
}

input SeasonWhereInput {
  """Logical AND on all given filters."""
  AND: [SeasonWhereInput!]

  """Logical OR on all given filters."""
  OR: [SeasonWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SeasonWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  current: Boolean

  """All values that are not equal to given value."""
  current_not: Boolean
  currentRound: Int

  """All values that are not equal to given value."""
  currentRound_not: Int

  """All values that are contained in given list."""
  currentRound_in: [Int!]

  """All values that are not contained in given list."""
  currentRound_not_in: [Int!]

  """All values less than the given value."""
  currentRound_lt: Int

  """All values less than or equal the given value."""
  currentRound_lte: Int

  """All values greater than the given value."""
  currentRound_gt: Int

  """All values greater than or equal the given value."""
  currentRound_gte: Int
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  scores_every: ScoreWhereInput
  scores_some: ScoreWhereInput
  scores_none: ScoreWhereInput
  leaguesEnrollments_every: LeagueEnrollmentWhereInput
  leaguesEnrollments_some: LeagueEnrollmentWhereInput
  leaguesEnrollments_none: LeagueEnrollmentWhereInput
}

input SeasonWhereUniqueInput {
  id: UUID
  name: String
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  league(where: LeagueSubscriptionWhereInput): LeagueSubscriptionPayload
  leagueType(where: LeagueTypeSubscriptionWhereInput): LeagueTypeSubscriptionPayload
  score(where: ScoreSubscriptionWhereInput): ScoreSubscriptionPayload
  season(where: SeasonSubscriptionWhereInput): SeasonSubscriptionPayload
  teamEnrollment(where: TeamEnrollmentSubscriptionWhereInput): TeamEnrollmentSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  transaction(where: TransactionSubscriptionWhereInput): TransactionSubscriptionPayload
  wallet(where: WalletSubscriptionWhereInput): WalletSubscriptionPayload
  card(where: CardSubscriptionWhereInput): CardSubscriptionPayload
  leagueEnrollment(where: LeagueEnrollmentSubscriptionWhereInput): LeagueEnrollmentSubscriptionPayload
}

type Team {
  id: UUID!
  name: String!
  cartolaId: String!
  cartolaName: String!
  cartolaSlug: String!
  avatar: String
  scores(where: ScoreWhereInput, orderBy: ScoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Score!]
  owner: User!
  enrollments(where: TeamEnrollmentWhereInput, orderBy: TeamEnrollmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TeamEnrollment!]
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean!
}

"""A connection to a list of items."""
type TeamConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  id: UUID
  name: String!
  cartolaId: String!
  cartolaName: String!
  cartolaSlug: String!
  avatar: String
  deleted: Boolean
  scores: ScoreCreateManyWithoutTeamInput
  owner: UserCreateOneWithoutTeamInput!
  enrollments: TeamEnrollmentCreateManyWithoutTeamInput
}

input TeamCreateOneWithoutEnrollmentsInput {
  create: TeamCreateWithoutEnrollmentsInput
  connect: TeamWhereUniqueInput
}

input TeamCreateOneWithoutOwnerInput {
  create: TeamCreateWithoutOwnerInput
  connect: TeamWhereUniqueInput
}

input TeamCreateOneWithoutScoresInput {
  create: TeamCreateWithoutScoresInput
  connect: TeamWhereUniqueInput
}

input TeamCreateWithoutEnrollmentsInput {
  id: UUID
  name: String!
  cartolaId: String!
  cartolaName: String!
  cartolaSlug: String!
  avatar: String
  deleted: Boolean
  scores: ScoreCreateManyWithoutTeamInput
  owner: UserCreateOneWithoutTeamInput!
}

input TeamCreateWithoutOwnerInput {
  id: UUID
  name: String!
  cartolaId: String!
  cartolaName: String!
  cartolaSlug: String!
  avatar: String
  deleted: Boolean
  scores: ScoreCreateManyWithoutTeamInput
  enrollments: TeamEnrollmentCreateManyWithoutTeamInput
}

input TeamCreateWithoutScoresInput {
  id: UUID
  name: String!
  cartolaId: String!
  cartolaName: String!
  cartolaSlug: String!
  avatar: String
  deleted: Boolean
  owner: UserCreateOneWithoutTeamInput!
  enrollments: TeamEnrollmentCreateManyWithoutTeamInput
}

"""An edge in a connection."""
type TeamEdge {
  """The item at the end of the edge."""
  node: Team!

  """A cursor for use in pagination."""
  cursor: String!
}

type TeamEnrollment {
  id: UUID!
  fee: Int!
  leagueEnrollment: LeagueEnrollment!
  team: Team!
  updatedAt: DateTime
  createdAt: DateTime
}

"""A connection to a list of items."""
type TeamEnrollmentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TeamEnrollmentEdge]!
  aggregate: AggregateTeamEnrollment!
}

input TeamEnrollmentCreateInput {
  id: UUID
  fee: Int
  leagueEnrollment: LeagueEnrollmentCreateOneInput!
  team: TeamCreateOneWithoutEnrollmentsInput!
}

input TeamEnrollmentCreateManyWithoutTeamInput {
  create: [TeamEnrollmentCreateWithoutTeamInput!]
  connect: [TeamEnrollmentWhereUniqueInput!]
}

input TeamEnrollmentCreateWithoutTeamInput {
  id: UUID
  fee: Int
  leagueEnrollment: LeagueEnrollmentCreateOneInput!
}

"""An edge in a connection."""
type TeamEnrollmentEdge {
  """The item at the end of the edge."""
  node: TeamEnrollment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TeamEnrollmentOrderByInput {
  id_ASC
  id_DESC
  fee_ASC
  fee_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TeamEnrollmentPreviousValues {
  id: UUID!
  fee: Int!
  updatedAt: DateTime
  createdAt: DateTime
}

input TeamEnrollmentScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [TeamEnrollmentScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [TeamEnrollmentScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TeamEnrollmentScalarWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  fee: Int

  """All values that are not equal to given value."""
  fee_not: Int

  """All values that are contained in given list."""
  fee_in: [Int!]

  """All values that are not contained in given list."""
  fee_not_in: [Int!]

  """All values less than the given value."""
  fee_lt: Int

  """All values less than or equal the given value."""
  fee_lte: Int

  """All values greater than the given value."""
  fee_gt: Int

  """All values greater than or equal the given value."""
  fee_gte: Int
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
}

type TeamEnrollmentSubscriptionPayload {
  mutation: MutationType!
  node: TeamEnrollment
  updatedFields: [String!]
  previousValues: TeamEnrollmentPreviousValues
}

input TeamEnrollmentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TeamEnrollmentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TeamEnrollmentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TeamEnrollmentSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TeamEnrollmentWhereInput
}

input TeamEnrollmentUpdateInput {
  fee: Int
  leagueEnrollment: LeagueEnrollmentUpdateOneRequiredInput
  team: TeamUpdateOneRequiredWithoutEnrollmentsInput
}

input TeamEnrollmentUpdateManyDataInput {
  fee: Int
}

input TeamEnrollmentUpdateManyMutationInput {
  fee: Int
}

input TeamEnrollmentUpdateManyWithoutTeamInput {
  create: [TeamEnrollmentCreateWithoutTeamInput!]
  connect: [TeamEnrollmentWhereUniqueInput!]
  set: [TeamEnrollmentWhereUniqueInput!]
  disconnect: [TeamEnrollmentWhereUniqueInput!]
  delete: [TeamEnrollmentWhereUniqueInput!]
  update: [TeamEnrollmentUpdateWithWhereUniqueWithoutTeamInput!]
  updateMany: [TeamEnrollmentUpdateManyWithWhereNestedInput!]
  deleteMany: [TeamEnrollmentScalarWhereInput!]
  upsert: [TeamEnrollmentUpsertWithWhereUniqueWithoutTeamInput!]
}

input TeamEnrollmentUpdateManyWithWhereNestedInput {
  where: TeamEnrollmentScalarWhereInput!
  data: TeamEnrollmentUpdateManyDataInput!
}

input TeamEnrollmentUpdateWithoutTeamDataInput {
  fee: Int
  leagueEnrollment: LeagueEnrollmentUpdateOneRequiredInput
}

input TeamEnrollmentUpdateWithWhereUniqueWithoutTeamInput {
  where: TeamEnrollmentWhereUniqueInput!
  data: TeamEnrollmentUpdateWithoutTeamDataInput!
}

input TeamEnrollmentUpsertWithWhereUniqueWithoutTeamInput {
  where: TeamEnrollmentWhereUniqueInput!
  update: TeamEnrollmentUpdateWithoutTeamDataInput!
  create: TeamEnrollmentCreateWithoutTeamInput!
}

input TeamEnrollmentWhereInput {
  """Logical AND on all given filters."""
  AND: [TeamEnrollmentWhereInput!]

  """Logical OR on all given filters."""
  OR: [TeamEnrollmentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TeamEnrollmentWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  fee: Int

  """All values that are not equal to given value."""
  fee_not: Int

  """All values that are contained in given list."""
  fee_in: [Int!]

  """All values that are not contained in given list."""
  fee_not_in: [Int!]

  """All values less than the given value."""
  fee_lt: Int

  """All values less than or equal the given value."""
  fee_lte: Int

  """All values greater than the given value."""
  fee_gt: Int

  """All values greater than or equal the given value."""
  fee_gte: Int
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  leagueEnrollment: LeagueEnrollmentWhereInput
  team: TeamWhereInput
}

input TeamEnrollmentWhereUniqueInput {
  id: UUID
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  cartolaId_ASC
  cartolaId_DESC
  cartolaName_ASC
  cartolaName_DESC
  cartolaSlug_ASC
  cartolaSlug_DESC
  avatar_ASC
  avatar_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type TeamPreviousValues {
  id: UUID!
  name: String!
  cartolaId: String!
  cartolaName: String!
  cartolaSlug: String!
  avatar: String
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean!
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TeamSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TeamSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TeamSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
}

input TeamUpdateInput {
  name: String
  cartolaId: String
  cartolaName: String
  cartolaSlug: String
  avatar: String
  deleted: Boolean
  scores: ScoreUpdateManyWithoutTeamInput
  owner: UserUpdateOneRequiredWithoutTeamInput
  enrollments: TeamEnrollmentUpdateManyWithoutTeamInput
}

input TeamUpdateManyMutationInput {
  name: String
  cartolaId: String
  cartolaName: String
  cartolaSlug: String
  avatar: String
  deleted: Boolean
}

input TeamUpdateOneRequiredWithoutEnrollmentsInput {
  create: TeamCreateWithoutEnrollmentsInput
  connect: TeamWhereUniqueInput
  update: TeamUpdateWithoutEnrollmentsDataInput
  upsert: TeamUpsertWithoutEnrollmentsInput
}

input TeamUpdateOneRequiredWithoutOwnerInput {
  create: TeamCreateWithoutOwnerInput
  connect: TeamWhereUniqueInput
  update: TeamUpdateWithoutOwnerDataInput
  upsert: TeamUpsertWithoutOwnerInput
}

input TeamUpdateOneRequiredWithoutScoresInput {
  create: TeamCreateWithoutScoresInput
  connect: TeamWhereUniqueInput
  update: TeamUpdateWithoutScoresDataInput
  upsert: TeamUpsertWithoutScoresInput
}

input TeamUpdateWithoutEnrollmentsDataInput {
  name: String
  cartolaId: String
  cartolaName: String
  cartolaSlug: String
  avatar: String
  deleted: Boolean
  scores: ScoreUpdateManyWithoutTeamInput
  owner: UserUpdateOneRequiredWithoutTeamInput
}

input TeamUpdateWithoutOwnerDataInput {
  name: String
  cartolaId: String
  cartolaName: String
  cartolaSlug: String
  avatar: String
  deleted: Boolean
  scores: ScoreUpdateManyWithoutTeamInput
  enrollments: TeamEnrollmentUpdateManyWithoutTeamInput
}

input TeamUpdateWithoutScoresDataInput {
  name: String
  cartolaId: String
  cartolaName: String
  cartolaSlug: String
  avatar: String
  deleted: Boolean
  owner: UserUpdateOneRequiredWithoutTeamInput
  enrollments: TeamEnrollmentUpdateManyWithoutTeamInput
}

input TeamUpsertWithoutEnrollmentsInput {
  update: TeamUpdateWithoutEnrollmentsDataInput!
  create: TeamCreateWithoutEnrollmentsInput!
}

input TeamUpsertWithoutOwnerInput {
  update: TeamUpdateWithoutOwnerDataInput!
  create: TeamCreateWithoutOwnerInput!
}

input TeamUpsertWithoutScoresInput {
  update: TeamUpdateWithoutScoresDataInput!
  create: TeamCreateWithoutScoresInput!
}

input TeamWhereInput {
  """Logical AND on all given filters."""
  AND: [TeamWhereInput!]

  """Logical OR on all given filters."""
  OR: [TeamWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TeamWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  cartolaId: String

  """All values that are not equal to given value."""
  cartolaId_not: String

  """All values that are contained in given list."""
  cartolaId_in: [String!]

  """All values that are not contained in given list."""
  cartolaId_not_in: [String!]

  """All values less than the given value."""
  cartolaId_lt: String

  """All values less than or equal the given value."""
  cartolaId_lte: String

  """All values greater than the given value."""
  cartolaId_gt: String

  """All values greater than or equal the given value."""
  cartolaId_gte: String

  """All values containing the given string."""
  cartolaId_contains: String

  """All values not containing the given string."""
  cartolaId_not_contains: String

  """All values starting with the given string."""
  cartolaId_starts_with: String

  """All values not starting with the given string."""
  cartolaId_not_starts_with: String

  """All values ending with the given string."""
  cartolaId_ends_with: String

  """All values not ending with the given string."""
  cartolaId_not_ends_with: String
  cartolaName: String

  """All values that are not equal to given value."""
  cartolaName_not: String

  """All values that are contained in given list."""
  cartolaName_in: [String!]

  """All values that are not contained in given list."""
  cartolaName_not_in: [String!]

  """All values less than the given value."""
  cartolaName_lt: String

  """All values less than or equal the given value."""
  cartolaName_lte: String

  """All values greater than the given value."""
  cartolaName_gt: String

  """All values greater than or equal the given value."""
  cartolaName_gte: String

  """All values containing the given string."""
  cartolaName_contains: String

  """All values not containing the given string."""
  cartolaName_not_contains: String

  """All values starting with the given string."""
  cartolaName_starts_with: String

  """All values not starting with the given string."""
  cartolaName_not_starts_with: String

  """All values ending with the given string."""
  cartolaName_ends_with: String

  """All values not ending with the given string."""
  cartolaName_not_ends_with: String
  cartolaSlug: String

  """All values that are not equal to given value."""
  cartolaSlug_not: String

  """All values that are contained in given list."""
  cartolaSlug_in: [String!]

  """All values that are not contained in given list."""
  cartolaSlug_not_in: [String!]

  """All values less than the given value."""
  cartolaSlug_lt: String

  """All values less than or equal the given value."""
  cartolaSlug_lte: String

  """All values greater than the given value."""
  cartolaSlug_gt: String

  """All values greater than or equal the given value."""
  cartolaSlug_gte: String

  """All values containing the given string."""
  cartolaSlug_contains: String

  """All values not containing the given string."""
  cartolaSlug_not_contains: String

  """All values starting with the given string."""
  cartolaSlug_starts_with: String

  """All values not starting with the given string."""
  cartolaSlug_not_starts_with: String

  """All values ending with the given string."""
  cartolaSlug_ends_with: String

  """All values not ending with the given string."""
  cartolaSlug_not_ends_with: String
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
  scores_every: ScoreWhereInput
  scores_some: ScoreWhereInput
  scores_none: ScoreWhereInput
  owner: UserWhereInput
  enrollments_every: TeamEnrollmentWhereInput
  enrollments_some: TeamEnrollmentWhereInput
  enrollments_none: TeamEnrollmentWhereInput
}

input TeamWhereUniqueInput {
  id: UUID
  name: String
}

type Transaction {
  id: UUID!
  amount: Int!
  destination: Wallet!
  origin: Wallet!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type TransactionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TransactionEdge]!
  aggregate: AggregateTransaction!
}

input TransactionCreateInput {
  id: UUID
  amount: Int!
  destination: WalletCreateOneWithoutIncomingTransactionsInput!
  origin: WalletCreateOneWithoutOutgoingTransactionsInput!
}

input TransactionCreateManyWithoutDestinationInput {
  create: [TransactionCreateWithoutDestinationInput!]
  connect: [TransactionWhereUniqueInput!]
}

input TransactionCreateManyWithoutOriginInput {
  create: [TransactionCreateWithoutOriginInput!]
  connect: [TransactionWhereUniqueInput!]
}

input TransactionCreateWithoutDestinationInput {
  id: UUID
  amount: Int!
  origin: WalletCreateOneWithoutOutgoingTransactionsInput!
}

input TransactionCreateWithoutOriginInput {
  id: UUID
  amount: Int!
  destination: WalletCreateOneWithoutIncomingTransactionsInput!
}

"""An edge in a connection."""
type TransactionEdge {
  """The item at the end of the edge."""
  node: Transaction!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TransactionOrderByInput {
  id_ASC
  id_DESC
  amount_ASC
  amount_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TransactionPreviousValues {
  id: UUID!
  amount: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input TransactionScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [TransactionScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [TransactionScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TransactionScalarWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  amount: Int

  """All values that are not equal to given value."""
  amount_not: Int

  """All values that are contained in given list."""
  amount_in: [Int!]

  """All values that are not contained in given list."""
  amount_not_in: [Int!]

  """All values less than the given value."""
  amount_lt: Int

  """All values less than or equal the given value."""
  amount_lte: Int

  """All values greater than the given value."""
  amount_gt: Int

  """All values greater than or equal the given value."""
  amount_gte: Int
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type TransactionSubscriptionPayload {
  mutation: MutationType!
  node: Transaction
  updatedFields: [String!]
  previousValues: TransactionPreviousValues
}

input TransactionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TransactionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TransactionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TransactionSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TransactionWhereInput
}

input TransactionUpdateInput {
  amount: Int
  destination: WalletUpdateOneRequiredWithoutIncomingTransactionsInput
  origin: WalletUpdateOneRequiredWithoutOutgoingTransactionsInput
}

input TransactionUpdateManyDataInput {
  amount: Int
}

input TransactionUpdateManyMutationInput {
  amount: Int
}

input TransactionUpdateManyWithoutDestinationInput {
  create: [TransactionCreateWithoutDestinationInput!]
  connect: [TransactionWhereUniqueInput!]
  set: [TransactionWhereUniqueInput!]
  disconnect: [TransactionWhereUniqueInput!]
  delete: [TransactionWhereUniqueInput!]
  update: [TransactionUpdateWithWhereUniqueWithoutDestinationInput!]
  updateMany: [TransactionUpdateManyWithWhereNestedInput!]
  deleteMany: [TransactionScalarWhereInput!]
  upsert: [TransactionUpsertWithWhereUniqueWithoutDestinationInput!]
}

input TransactionUpdateManyWithoutOriginInput {
  create: [TransactionCreateWithoutOriginInput!]
  connect: [TransactionWhereUniqueInput!]
  set: [TransactionWhereUniqueInput!]
  disconnect: [TransactionWhereUniqueInput!]
  delete: [TransactionWhereUniqueInput!]
  update: [TransactionUpdateWithWhereUniqueWithoutOriginInput!]
  updateMany: [TransactionUpdateManyWithWhereNestedInput!]
  deleteMany: [TransactionScalarWhereInput!]
  upsert: [TransactionUpsertWithWhereUniqueWithoutOriginInput!]
}

input TransactionUpdateManyWithWhereNestedInput {
  where: TransactionScalarWhereInput!
  data: TransactionUpdateManyDataInput!
}

input TransactionUpdateWithoutDestinationDataInput {
  amount: Int
  origin: WalletUpdateOneRequiredWithoutOutgoingTransactionsInput
}

input TransactionUpdateWithoutOriginDataInput {
  amount: Int
  destination: WalletUpdateOneRequiredWithoutIncomingTransactionsInput
}

input TransactionUpdateWithWhereUniqueWithoutDestinationInput {
  where: TransactionWhereUniqueInput!
  data: TransactionUpdateWithoutDestinationDataInput!
}

input TransactionUpdateWithWhereUniqueWithoutOriginInput {
  where: TransactionWhereUniqueInput!
  data: TransactionUpdateWithoutOriginDataInput!
}

input TransactionUpsertWithWhereUniqueWithoutDestinationInput {
  where: TransactionWhereUniqueInput!
  update: TransactionUpdateWithoutDestinationDataInput!
  create: TransactionCreateWithoutDestinationInput!
}

input TransactionUpsertWithWhereUniqueWithoutOriginInput {
  where: TransactionWhereUniqueInput!
  update: TransactionUpdateWithoutOriginDataInput!
  create: TransactionCreateWithoutOriginInput!
}

input TransactionWhereInput {
  """Logical AND on all given filters."""
  AND: [TransactionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TransactionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TransactionWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  amount: Int

  """All values that are not equal to given value."""
  amount_not: Int

  """All values that are contained in given list."""
  amount_in: [Int!]

  """All values that are not contained in given list."""
  amount_not_in: [Int!]

  """All values less than the given value."""
  amount_lt: Int

  """All values less than or equal the given value."""
  amount_lte: Int

  """All values greater than the given value."""
  amount_gt: Int

  """All values greater than or equal the given value."""
  amount_gte: Int
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  destination: WalletWhereInput
  origin: WalletWhereInput
}

input TransactionWhereUniqueInput {
  id: UUID
}

type User {
  id: UUID!
  email: String!
  globoToken: String
  password: String!
  team: Team!
  wallet: Wallet!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: UUID
  email: String!
  globoToken: String
  password: String!
  deleted: Boolean
  team: TeamCreateOneWithoutOwnerInput!
  wallet: WalletCreateOneWithoutUserInput!
  cards: CardCreateManyWithoutUserInput
}

input UserCreateOneWithoutCardsInput {
  create: UserCreateWithoutCardsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTeamInput {
  create: UserCreateWithoutTeamInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutWalletInput {
  create: UserCreateWithoutWalletInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCardsInput {
  id: UUID
  email: String!
  globoToken: String
  password: String!
  deleted: Boolean
  team: TeamCreateOneWithoutOwnerInput!
  wallet: WalletCreateOneWithoutUserInput!
}

input UserCreateWithoutTeamInput {
  id: UUID
  email: String!
  globoToken: String
  password: String!
  deleted: Boolean
  wallet: WalletCreateOneWithoutUserInput!
  cards: CardCreateManyWithoutUserInput
}

input UserCreateWithoutWalletInput {
  id: UUID
  email: String!
  globoToken: String
  password: String!
  deleted: Boolean
  team: TeamCreateOneWithoutOwnerInput!
  cards: CardCreateManyWithoutUserInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  globoToken_ASC
  globoToken_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type UserPreviousValues {
  id: UUID!
  email: String!
  globoToken: String
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  globoToken: String
  password: String
  deleted: Boolean
  team: TeamUpdateOneRequiredWithoutOwnerInput
  wallet: WalletUpdateOneRequiredWithoutUserInput
  cards: CardUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  globoToken: String
  password: String
  deleted: Boolean
}

input UserUpdateOneRequiredWithoutCardsInput {
  create: UserCreateWithoutCardsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutCardsDataInput
  upsert: UserUpsertWithoutCardsInput
}

input UserUpdateOneRequiredWithoutTeamInput {
  create: UserCreateWithoutTeamInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutTeamDataInput
  upsert: UserUpsertWithoutTeamInput
}

input UserUpdateOneWithoutWalletInput {
  create: UserCreateWithoutWalletInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutWalletDataInput
  upsert: UserUpsertWithoutWalletInput
}

input UserUpdateWithoutCardsDataInput {
  email: String
  globoToken: String
  password: String
  deleted: Boolean
  team: TeamUpdateOneRequiredWithoutOwnerInput
  wallet: WalletUpdateOneRequiredWithoutUserInput
}

input UserUpdateWithoutTeamDataInput {
  email: String
  globoToken: String
  password: String
  deleted: Boolean
  wallet: WalletUpdateOneRequiredWithoutUserInput
  cards: CardUpdateManyWithoutUserInput
}

input UserUpdateWithoutWalletDataInput {
  email: String
  globoToken: String
  password: String
  deleted: Boolean
  team: TeamUpdateOneRequiredWithoutOwnerInput
  cards: CardUpdateManyWithoutUserInput
}

input UserUpsertWithoutCardsInput {
  update: UserUpdateWithoutCardsDataInput!
  create: UserCreateWithoutCardsInput!
}

input UserUpsertWithoutTeamInput {
  update: UserUpdateWithoutTeamDataInput!
  create: UserCreateWithoutTeamInput!
}

input UserUpsertWithoutWalletInput {
  update: UserUpdateWithoutWalletDataInput!
  create: UserCreateWithoutWalletInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  globoToken: String

  """All values that are not equal to given value."""
  globoToken_not: String

  """All values that are contained in given list."""
  globoToken_in: [String!]

  """All values that are not contained in given list."""
  globoToken_not_in: [String!]

  """All values less than the given value."""
  globoToken_lt: String

  """All values less than or equal the given value."""
  globoToken_lte: String

  """All values greater than the given value."""
  globoToken_gt: String

  """All values greater than or equal the given value."""
  globoToken_gte: String

  """All values containing the given string."""
  globoToken_contains: String

  """All values not containing the given string."""
  globoToken_not_contains: String

  """All values starting with the given string."""
  globoToken_starts_with: String

  """All values not starting with the given string."""
  globoToken_not_starts_with: String

  """All values ending with the given string."""
  globoToken_ends_with: String

  """All values not ending with the given string."""
  globoToken_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
  team: TeamWhereInput
  wallet: WalletWhereInput
  cards_every: CardWhereInput
  cards_some: CardWhereInput
  cards_none: CardWhereInput
}

input UserWhereUniqueInput {
  id: UUID
  email: String
}

"""A type 4 UUID according to IETF RFC 4122."""
scalar UUID

type Wallet {
  id: UUID!
  amount: Int!
  user: User
  league: League
  incomingTransactions(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Transaction!]
  outgoingTransactions(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Transaction!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type WalletConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [WalletEdge]!
  aggregate: AggregateWallet!
}

input WalletCreateInput {
  id: UUID
  amount: Int
  user: UserCreateOneWithoutWalletInput
  league: LeagueCreateOneWithoutWalletInput
  incomingTransactions: TransactionCreateManyWithoutDestinationInput
  outgoingTransactions: TransactionCreateManyWithoutOriginInput
}

input WalletCreateOneWithoutIncomingTransactionsInput {
  create: WalletCreateWithoutIncomingTransactionsInput
  connect: WalletWhereUniqueInput
}

input WalletCreateOneWithoutLeagueInput {
  create: WalletCreateWithoutLeagueInput
  connect: WalletWhereUniqueInput
}

input WalletCreateOneWithoutOutgoingTransactionsInput {
  create: WalletCreateWithoutOutgoingTransactionsInput
  connect: WalletWhereUniqueInput
}

input WalletCreateOneWithoutUserInput {
  create: WalletCreateWithoutUserInput
  connect: WalletWhereUniqueInput
}

input WalletCreateWithoutIncomingTransactionsInput {
  id: UUID
  amount: Int
  user: UserCreateOneWithoutWalletInput
  league: LeagueCreateOneWithoutWalletInput
  outgoingTransactions: TransactionCreateManyWithoutOriginInput
}

input WalletCreateWithoutLeagueInput {
  id: UUID
  amount: Int
  user: UserCreateOneWithoutWalletInput
  incomingTransactions: TransactionCreateManyWithoutDestinationInput
  outgoingTransactions: TransactionCreateManyWithoutOriginInput
}

input WalletCreateWithoutOutgoingTransactionsInput {
  id: UUID
  amount: Int
  user: UserCreateOneWithoutWalletInput
  league: LeagueCreateOneWithoutWalletInput
  incomingTransactions: TransactionCreateManyWithoutDestinationInput
}

input WalletCreateWithoutUserInput {
  id: UUID
  amount: Int
  league: LeagueCreateOneWithoutWalletInput
  incomingTransactions: TransactionCreateManyWithoutDestinationInput
  outgoingTransactions: TransactionCreateManyWithoutOriginInput
}

"""An edge in a connection."""
type WalletEdge {
  """The item at the end of the edge."""
  node: Wallet!

  """A cursor for use in pagination."""
  cursor: String!
}

enum WalletOrderByInput {
  id_ASC
  id_DESC
  amount_ASC
  amount_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WalletPreviousValues {
  id: UUID!
  amount: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type WalletSubscriptionPayload {
  mutation: MutationType!
  node: Wallet
  updatedFields: [String!]
  previousValues: WalletPreviousValues
}

input WalletSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [WalletSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [WalletSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WalletSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: WalletWhereInput
}

input WalletUpdateInput {
  amount: Int
  user: UserUpdateOneWithoutWalletInput
  league: LeagueUpdateOneWithoutWalletInput
  incomingTransactions: TransactionUpdateManyWithoutDestinationInput
  outgoingTransactions: TransactionUpdateManyWithoutOriginInput
}

input WalletUpdateManyMutationInput {
  amount: Int
}

input WalletUpdateOneRequiredWithoutIncomingTransactionsInput {
  create: WalletCreateWithoutIncomingTransactionsInput
  connect: WalletWhereUniqueInput
  update: WalletUpdateWithoutIncomingTransactionsDataInput
  upsert: WalletUpsertWithoutIncomingTransactionsInput
}

input WalletUpdateOneRequiredWithoutLeagueInput {
  create: WalletCreateWithoutLeagueInput
  connect: WalletWhereUniqueInput
  update: WalletUpdateWithoutLeagueDataInput
  upsert: WalletUpsertWithoutLeagueInput
}

input WalletUpdateOneRequiredWithoutOutgoingTransactionsInput {
  create: WalletCreateWithoutOutgoingTransactionsInput
  connect: WalletWhereUniqueInput
  update: WalletUpdateWithoutOutgoingTransactionsDataInput
  upsert: WalletUpsertWithoutOutgoingTransactionsInput
}

input WalletUpdateOneRequiredWithoutUserInput {
  create: WalletCreateWithoutUserInput
  connect: WalletWhereUniqueInput
  update: WalletUpdateWithoutUserDataInput
  upsert: WalletUpsertWithoutUserInput
}

input WalletUpdateWithoutIncomingTransactionsDataInput {
  amount: Int
  user: UserUpdateOneWithoutWalletInput
  league: LeagueUpdateOneWithoutWalletInput
  outgoingTransactions: TransactionUpdateManyWithoutOriginInput
}

input WalletUpdateWithoutLeagueDataInput {
  amount: Int
  user: UserUpdateOneWithoutWalletInput
  incomingTransactions: TransactionUpdateManyWithoutDestinationInput
  outgoingTransactions: TransactionUpdateManyWithoutOriginInput
}

input WalletUpdateWithoutOutgoingTransactionsDataInput {
  amount: Int
  user: UserUpdateOneWithoutWalletInput
  league: LeagueUpdateOneWithoutWalletInput
  incomingTransactions: TransactionUpdateManyWithoutDestinationInput
}

input WalletUpdateWithoutUserDataInput {
  amount: Int
  league: LeagueUpdateOneWithoutWalletInput
  incomingTransactions: TransactionUpdateManyWithoutDestinationInput
  outgoingTransactions: TransactionUpdateManyWithoutOriginInput
}

input WalletUpsertWithoutIncomingTransactionsInput {
  update: WalletUpdateWithoutIncomingTransactionsDataInput!
  create: WalletCreateWithoutIncomingTransactionsInput!
}

input WalletUpsertWithoutLeagueInput {
  update: WalletUpdateWithoutLeagueDataInput!
  create: WalletCreateWithoutLeagueInput!
}

input WalletUpsertWithoutOutgoingTransactionsInput {
  update: WalletUpdateWithoutOutgoingTransactionsDataInput!
  create: WalletCreateWithoutOutgoingTransactionsInput!
}

input WalletUpsertWithoutUserInput {
  update: WalletUpdateWithoutUserDataInput!
  create: WalletCreateWithoutUserInput!
}

input WalletWhereInput {
  """Logical AND on all given filters."""
  AND: [WalletWhereInput!]

  """Logical OR on all given filters."""
  OR: [WalletWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WalletWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  amount: Int

  """All values that are not equal to given value."""
  amount_not: Int

  """All values that are contained in given list."""
  amount_in: [Int!]

  """All values that are not contained in given list."""
  amount_not_in: [Int!]

  """All values less than the given value."""
  amount_lt: Int

  """All values less than or equal the given value."""
  amount_lte: Int

  """All values greater than the given value."""
  amount_gt: Int

  """All values greater than or equal the given value."""
  amount_gte: Int
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  user: UserWhereInput
  league: LeagueWhereInput
  incomingTransactions_every: TransactionWhereInput
  incomingTransactions_some: TransactionWhereInput
  incomingTransactions_none: TransactionWhereInput
  outgoingTransactions_every: TransactionWhereInput
  outgoingTransactions_some: TransactionWhereInput
  outgoingTransactions_none: TransactionWhereInput
}

input WalletWhereUniqueInput {
  id: UUID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type CardOrderByInput =   'id_ASC' |
  'id_DESC' |
  'pagarmeId_ASC' |
  'pagarmeId_DESC' |
  'brand_ASC' |
  'brand_DESC' |
  'holderName_ASC' |
  'holderName_DESC' |
  'firstDigits_ASC' |
  'firstDigits_DESC' |
  'lastDigits_ASC' |
  'lastDigits_DESC' |
  'fingerprint_ASC' |
  'fingerprint_DESC' |
  'valid_ASC' |
  'valid_DESC' |
  'expirationDate_ASC' |
  'expirationDate_DESC'

export type LeagueEnrollmentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type LeagueOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'adminTax_ASC' |
  'adminTax_DESC' |
  'avatar_ASC' |
  'avatar_DESC' |
  'description_ASC' |
  'description_DESC' |
  'fee_ASC' |
  'fee_DESC' |
  'limit_ASC' |
  'limit_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deleted_ASC' |
  'deleted_DESC'

export type LeagueTypeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deleted_ASC' |
  'deleted_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PrismaDatabase =   'default'

export type ScoreOrderByInput =   'id_ASC' |
  'id_DESC' |
  'score_ASC' |
  'score_DESC' |
  'round_ASC' |
  'round_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type SeasonOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'current_ASC' |
  'current_DESC' |
  'currentRound_ASC' |
  'currentRound_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type TeamEnrollmentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'fee_ASC' |
  'fee_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TeamOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'cartolaId_ASC' |
  'cartolaId_DESC' |
  'cartolaName_ASC' |
  'cartolaName_DESC' |
  'cartolaSlug_ASC' |
  'cartolaSlug_DESC' |
  'avatar_ASC' |
  'avatar_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deleted_ASC' |
  'deleted_DESC'

export type TransactionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'globoToken_ASC' |
  'globoToken_DESC' |
  'password_ASC' |
  'password_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deleted_ASC' |
  'deleted_DESC'

export type WalletOrderByInput =   'id_ASC' |
  'id_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export interface CardCreateInput {
  id?: UUID | null
  pagarmeId: String
  brand: String
  holderName: String
  firstDigits: String
  lastDigits: String
  fingerprint: String
  valid: Boolean
  expirationDate: String
  user: UserCreateOneWithoutCardsInput
}

export interface CardCreateManyWithoutUserInput {
  create?: CardCreateWithoutUserInput[] | CardCreateWithoutUserInput | null
  connect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
}

export interface CardCreateWithoutUserInput {
  id?: UUID | null
  pagarmeId: String
  brand: String
  holderName: String
  firstDigits: String
  lastDigits: String
  fingerprint: String
  valid: Boolean
  expirationDate: String
}

export interface CardScalarWhereInput {
  AND?: CardScalarWhereInput[] | CardScalarWhereInput | null
  OR?: CardScalarWhereInput[] | CardScalarWhereInput | null
  NOT?: CardScalarWhereInput[] | CardScalarWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  pagarmeId?: String | null
  pagarmeId_not?: String | null
  pagarmeId_in?: String[] | String | null
  pagarmeId_not_in?: String[] | String | null
  pagarmeId_lt?: String | null
  pagarmeId_lte?: String | null
  pagarmeId_gt?: String | null
  pagarmeId_gte?: String | null
  pagarmeId_contains?: String | null
  pagarmeId_not_contains?: String | null
  pagarmeId_starts_with?: String | null
  pagarmeId_not_starts_with?: String | null
  pagarmeId_ends_with?: String | null
  pagarmeId_not_ends_with?: String | null
  brand?: String | null
  brand_not?: String | null
  brand_in?: String[] | String | null
  brand_not_in?: String[] | String | null
  brand_lt?: String | null
  brand_lte?: String | null
  brand_gt?: String | null
  brand_gte?: String | null
  brand_contains?: String | null
  brand_not_contains?: String | null
  brand_starts_with?: String | null
  brand_not_starts_with?: String | null
  brand_ends_with?: String | null
  brand_not_ends_with?: String | null
  holderName?: String | null
  holderName_not?: String | null
  holderName_in?: String[] | String | null
  holderName_not_in?: String[] | String | null
  holderName_lt?: String | null
  holderName_lte?: String | null
  holderName_gt?: String | null
  holderName_gte?: String | null
  holderName_contains?: String | null
  holderName_not_contains?: String | null
  holderName_starts_with?: String | null
  holderName_not_starts_with?: String | null
  holderName_ends_with?: String | null
  holderName_not_ends_with?: String | null
  firstDigits?: String | null
  firstDigits_not?: String | null
  firstDigits_in?: String[] | String | null
  firstDigits_not_in?: String[] | String | null
  firstDigits_lt?: String | null
  firstDigits_lte?: String | null
  firstDigits_gt?: String | null
  firstDigits_gte?: String | null
  firstDigits_contains?: String | null
  firstDigits_not_contains?: String | null
  firstDigits_starts_with?: String | null
  firstDigits_not_starts_with?: String | null
  firstDigits_ends_with?: String | null
  firstDigits_not_ends_with?: String | null
  lastDigits?: String | null
  lastDigits_not?: String | null
  lastDigits_in?: String[] | String | null
  lastDigits_not_in?: String[] | String | null
  lastDigits_lt?: String | null
  lastDigits_lte?: String | null
  lastDigits_gt?: String | null
  lastDigits_gte?: String | null
  lastDigits_contains?: String | null
  lastDigits_not_contains?: String | null
  lastDigits_starts_with?: String | null
  lastDigits_not_starts_with?: String | null
  lastDigits_ends_with?: String | null
  lastDigits_not_ends_with?: String | null
  fingerprint?: String | null
  fingerprint_not?: String | null
  fingerprint_in?: String[] | String | null
  fingerprint_not_in?: String[] | String | null
  fingerprint_lt?: String | null
  fingerprint_lte?: String | null
  fingerprint_gt?: String | null
  fingerprint_gte?: String | null
  fingerprint_contains?: String | null
  fingerprint_not_contains?: String | null
  fingerprint_starts_with?: String | null
  fingerprint_not_starts_with?: String | null
  fingerprint_ends_with?: String | null
  fingerprint_not_ends_with?: String | null
  valid?: Boolean | null
  valid_not?: Boolean | null
  expirationDate?: String | null
  expirationDate_not?: String | null
  expirationDate_in?: String[] | String | null
  expirationDate_not_in?: String[] | String | null
  expirationDate_lt?: String | null
  expirationDate_lte?: String | null
  expirationDate_gt?: String | null
  expirationDate_gte?: String | null
  expirationDate_contains?: String | null
  expirationDate_not_contains?: String | null
  expirationDate_starts_with?: String | null
  expirationDate_not_starts_with?: String | null
  expirationDate_ends_with?: String | null
  expirationDate_not_ends_with?: String | null
}

export interface CardSubscriptionWhereInput {
  AND?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput | null
  OR?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput | null
  NOT?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CardWhereInput | null
}

export interface CardUpdateInput {
  pagarmeId?: String | null
  brand?: String | null
  holderName?: String | null
  firstDigits?: String | null
  lastDigits?: String | null
  fingerprint?: String | null
  valid?: Boolean | null
  expirationDate?: String | null
  user?: UserUpdateOneRequiredWithoutCardsInput | null
}

export interface CardUpdateManyDataInput {
  pagarmeId?: String | null
  brand?: String | null
  holderName?: String | null
  firstDigits?: String | null
  lastDigits?: String | null
  fingerprint?: String | null
  valid?: Boolean | null
  expirationDate?: String | null
}

export interface CardUpdateManyMutationInput {
  pagarmeId?: String | null
  brand?: String | null
  holderName?: String | null
  firstDigits?: String | null
  lastDigits?: String | null
  fingerprint?: String | null
  valid?: Boolean | null
  expirationDate?: String | null
}

export interface CardUpdateManyWithoutUserInput {
  create?: CardCreateWithoutUserInput[] | CardCreateWithoutUserInput | null
  connect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  set?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  disconnect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  delete?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  update?: CardUpdateWithWhereUniqueWithoutUserInput[] | CardUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: CardUpdateManyWithWhereNestedInput[] | CardUpdateManyWithWhereNestedInput | null
  deleteMany?: CardScalarWhereInput[] | CardScalarWhereInput | null
  upsert?: CardUpsertWithWhereUniqueWithoutUserInput[] | CardUpsertWithWhereUniqueWithoutUserInput | null
}

export interface CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput
  data: CardUpdateManyDataInput
}

export interface CardUpdateWithoutUserDataInput {
  pagarmeId?: String | null
  brand?: String | null
  holderName?: String | null
  firstDigits?: String | null
  lastDigits?: String | null
  fingerprint?: String | null
  valid?: Boolean | null
  expirationDate?: String | null
}

export interface CardUpdateWithWhereUniqueWithoutUserInput {
  where: CardWhereUniqueInput
  data: CardUpdateWithoutUserDataInput
}

export interface CardUpsertWithWhereUniqueWithoutUserInput {
  where: CardWhereUniqueInput
  update: CardUpdateWithoutUserDataInput
  create: CardCreateWithoutUserInput
}

export interface CardWhereInput {
  AND?: CardWhereInput[] | CardWhereInput | null
  OR?: CardWhereInput[] | CardWhereInput | null
  NOT?: CardWhereInput[] | CardWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  pagarmeId?: String | null
  pagarmeId_not?: String | null
  pagarmeId_in?: String[] | String | null
  pagarmeId_not_in?: String[] | String | null
  pagarmeId_lt?: String | null
  pagarmeId_lte?: String | null
  pagarmeId_gt?: String | null
  pagarmeId_gte?: String | null
  pagarmeId_contains?: String | null
  pagarmeId_not_contains?: String | null
  pagarmeId_starts_with?: String | null
  pagarmeId_not_starts_with?: String | null
  pagarmeId_ends_with?: String | null
  pagarmeId_not_ends_with?: String | null
  brand?: String | null
  brand_not?: String | null
  brand_in?: String[] | String | null
  brand_not_in?: String[] | String | null
  brand_lt?: String | null
  brand_lte?: String | null
  brand_gt?: String | null
  brand_gte?: String | null
  brand_contains?: String | null
  brand_not_contains?: String | null
  brand_starts_with?: String | null
  brand_not_starts_with?: String | null
  brand_ends_with?: String | null
  brand_not_ends_with?: String | null
  holderName?: String | null
  holderName_not?: String | null
  holderName_in?: String[] | String | null
  holderName_not_in?: String[] | String | null
  holderName_lt?: String | null
  holderName_lte?: String | null
  holderName_gt?: String | null
  holderName_gte?: String | null
  holderName_contains?: String | null
  holderName_not_contains?: String | null
  holderName_starts_with?: String | null
  holderName_not_starts_with?: String | null
  holderName_ends_with?: String | null
  holderName_not_ends_with?: String | null
  firstDigits?: String | null
  firstDigits_not?: String | null
  firstDigits_in?: String[] | String | null
  firstDigits_not_in?: String[] | String | null
  firstDigits_lt?: String | null
  firstDigits_lte?: String | null
  firstDigits_gt?: String | null
  firstDigits_gte?: String | null
  firstDigits_contains?: String | null
  firstDigits_not_contains?: String | null
  firstDigits_starts_with?: String | null
  firstDigits_not_starts_with?: String | null
  firstDigits_ends_with?: String | null
  firstDigits_not_ends_with?: String | null
  lastDigits?: String | null
  lastDigits_not?: String | null
  lastDigits_in?: String[] | String | null
  lastDigits_not_in?: String[] | String | null
  lastDigits_lt?: String | null
  lastDigits_lte?: String | null
  lastDigits_gt?: String | null
  lastDigits_gte?: String | null
  lastDigits_contains?: String | null
  lastDigits_not_contains?: String | null
  lastDigits_starts_with?: String | null
  lastDigits_not_starts_with?: String | null
  lastDigits_ends_with?: String | null
  lastDigits_not_ends_with?: String | null
  fingerprint?: String | null
  fingerprint_not?: String | null
  fingerprint_in?: String[] | String | null
  fingerprint_not_in?: String[] | String | null
  fingerprint_lt?: String | null
  fingerprint_lte?: String | null
  fingerprint_gt?: String | null
  fingerprint_gte?: String | null
  fingerprint_contains?: String | null
  fingerprint_not_contains?: String | null
  fingerprint_starts_with?: String | null
  fingerprint_not_starts_with?: String | null
  fingerprint_ends_with?: String | null
  fingerprint_not_ends_with?: String | null
  valid?: Boolean | null
  valid_not?: Boolean | null
  expirationDate?: String | null
  expirationDate_not?: String | null
  expirationDate_in?: String[] | String | null
  expirationDate_not_in?: String[] | String | null
  expirationDate_lt?: String | null
  expirationDate_lte?: String | null
  expirationDate_gt?: String | null
  expirationDate_gte?: String | null
  expirationDate_contains?: String | null
  expirationDate_not_contains?: String | null
  expirationDate_starts_with?: String | null
  expirationDate_not_starts_with?: String | null
  expirationDate_ends_with?: String | null
  expirationDate_not_ends_with?: String | null
  user?: UserWhereInput | null
}

export interface CardWhereUniqueInput {
  id?: UUID | null
}

export interface LeagueCreateInput {
  id?: UUID | null
  name: String
  adminTax?: Int | null
  avatar?: String | null
  description?: String | null
  fee?: Int | null
  limit?: Int | null
  deleted?: Boolean | null
  wallet: WalletCreateOneWithoutLeagueInput
  leagueType: LeagueTypeCreateOneWithoutLeaguesInput
  enrollments?: LeagueEnrollmentCreateManyWithoutLeagueInput | null
}

export interface LeagueCreateManyWithoutLeagueTypeInput {
  create?: LeagueCreateWithoutLeagueTypeInput[] | LeagueCreateWithoutLeagueTypeInput | null
  connect?: LeagueWhereUniqueInput[] | LeagueWhereUniqueInput | null
}

export interface LeagueCreateOneWithoutEnrollmentsInput {
  create?: LeagueCreateWithoutEnrollmentsInput | null
  connect?: LeagueWhereUniqueInput | null
}

export interface LeagueCreateOneWithoutWalletInput {
  create?: LeagueCreateWithoutWalletInput | null
  connect?: LeagueWhereUniqueInput | null
}

export interface LeagueCreateWithoutEnrollmentsInput {
  id?: UUID | null
  name: String
  adminTax?: Int | null
  avatar?: String | null
  description?: String | null
  fee?: Int | null
  limit?: Int | null
  deleted?: Boolean | null
  wallet: WalletCreateOneWithoutLeagueInput
  leagueType: LeagueTypeCreateOneWithoutLeaguesInput
}

export interface LeagueCreateWithoutLeagueTypeInput {
  id?: UUID | null
  name: String
  adminTax?: Int | null
  avatar?: String | null
  description?: String | null
  fee?: Int | null
  limit?: Int | null
  deleted?: Boolean | null
  wallet: WalletCreateOneWithoutLeagueInput
  enrollments?: LeagueEnrollmentCreateManyWithoutLeagueInput | null
}

export interface LeagueCreateWithoutWalletInput {
  id?: UUID | null
  name: String
  adminTax?: Int | null
  avatar?: String | null
  description?: String | null
  fee?: Int | null
  limit?: Int | null
  deleted?: Boolean | null
  leagueType: LeagueTypeCreateOneWithoutLeaguesInput
  enrollments?: LeagueEnrollmentCreateManyWithoutLeagueInput | null
}

export interface LeagueEnrollmentCreateInput {
  id?: UUID | null
  league: LeagueCreateOneWithoutEnrollmentsInput
  season: SeasonCreateOneWithoutLeaguesEnrollmentsInput
}

export interface LeagueEnrollmentCreateManyWithoutLeagueInput {
  create?: LeagueEnrollmentCreateWithoutLeagueInput[] | LeagueEnrollmentCreateWithoutLeagueInput | null
  connect?: LeagueEnrollmentWhereUniqueInput[] | LeagueEnrollmentWhereUniqueInput | null
}

export interface LeagueEnrollmentCreateManyWithoutSeasonInput {
  create?: LeagueEnrollmentCreateWithoutSeasonInput[] | LeagueEnrollmentCreateWithoutSeasonInput | null
  connect?: LeagueEnrollmentWhereUniqueInput[] | LeagueEnrollmentWhereUniqueInput | null
}

export interface LeagueEnrollmentCreateOneInput {
  create?: LeagueEnrollmentCreateInput | null
  connect?: LeagueEnrollmentWhereUniqueInput | null
}

export interface LeagueEnrollmentCreateWithoutLeagueInput {
  id?: UUID | null
  season: SeasonCreateOneWithoutLeaguesEnrollmentsInput
}

export interface LeagueEnrollmentCreateWithoutSeasonInput {
  id?: UUID | null
  league: LeagueCreateOneWithoutEnrollmentsInput
}

export interface LeagueEnrollmentScalarWhereInput {
  AND?: LeagueEnrollmentScalarWhereInput[] | LeagueEnrollmentScalarWhereInput | null
  OR?: LeagueEnrollmentScalarWhereInput[] | LeagueEnrollmentScalarWhereInput | null
  NOT?: LeagueEnrollmentScalarWhereInput[] | LeagueEnrollmentScalarWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface LeagueEnrollmentSubscriptionWhereInput {
  AND?: LeagueEnrollmentSubscriptionWhereInput[] | LeagueEnrollmentSubscriptionWhereInput | null
  OR?: LeagueEnrollmentSubscriptionWhereInput[] | LeagueEnrollmentSubscriptionWhereInput | null
  NOT?: LeagueEnrollmentSubscriptionWhereInput[] | LeagueEnrollmentSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LeagueEnrollmentWhereInput | null
}

export interface LeagueEnrollmentUpdateDataInput {
  league?: LeagueUpdateOneRequiredWithoutEnrollmentsInput | null
  season?: SeasonUpdateOneRequiredWithoutLeaguesEnrollmentsInput | null
}

export interface LeagueEnrollmentUpdateInput {
  league?: LeagueUpdateOneRequiredWithoutEnrollmentsInput | null
  season?: SeasonUpdateOneRequiredWithoutLeaguesEnrollmentsInput | null
}

export interface LeagueEnrollmentUpdateManyWithoutLeagueInput {
  create?: LeagueEnrollmentCreateWithoutLeagueInput[] | LeagueEnrollmentCreateWithoutLeagueInput | null
  connect?: LeagueEnrollmentWhereUniqueInput[] | LeagueEnrollmentWhereUniqueInput | null
  set?: LeagueEnrollmentWhereUniqueInput[] | LeagueEnrollmentWhereUniqueInput | null
  disconnect?: LeagueEnrollmentWhereUniqueInput[] | LeagueEnrollmentWhereUniqueInput | null
  delete?: LeagueEnrollmentWhereUniqueInput[] | LeagueEnrollmentWhereUniqueInput | null
  update?: LeagueEnrollmentUpdateWithWhereUniqueWithoutLeagueInput[] | LeagueEnrollmentUpdateWithWhereUniqueWithoutLeagueInput | null
  deleteMany?: LeagueEnrollmentScalarWhereInput[] | LeagueEnrollmentScalarWhereInput | null
  upsert?: LeagueEnrollmentUpsertWithWhereUniqueWithoutLeagueInput[] | LeagueEnrollmentUpsertWithWhereUniqueWithoutLeagueInput | null
}

export interface LeagueEnrollmentUpdateManyWithoutSeasonInput {
  create?: LeagueEnrollmentCreateWithoutSeasonInput[] | LeagueEnrollmentCreateWithoutSeasonInput | null
  connect?: LeagueEnrollmentWhereUniqueInput[] | LeagueEnrollmentWhereUniqueInput | null
  set?: LeagueEnrollmentWhereUniqueInput[] | LeagueEnrollmentWhereUniqueInput | null
  disconnect?: LeagueEnrollmentWhereUniqueInput[] | LeagueEnrollmentWhereUniqueInput | null
  delete?: LeagueEnrollmentWhereUniqueInput[] | LeagueEnrollmentWhereUniqueInput | null
  update?: LeagueEnrollmentUpdateWithWhereUniqueWithoutSeasonInput[] | LeagueEnrollmentUpdateWithWhereUniqueWithoutSeasonInput | null
  deleteMany?: LeagueEnrollmentScalarWhereInput[] | LeagueEnrollmentScalarWhereInput | null
  upsert?: LeagueEnrollmentUpsertWithWhereUniqueWithoutSeasonInput[] | LeagueEnrollmentUpsertWithWhereUniqueWithoutSeasonInput | null
}

export interface LeagueEnrollmentUpdateOneRequiredInput {
  create?: LeagueEnrollmentCreateInput | null
  connect?: LeagueEnrollmentWhereUniqueInput | null
  update?: LeagueEnrollmentUpdateDataInput | null
  upsert?: LeagueEnrollmentUpsertNestedInput | null
}

export interface LeagueEnrollmentUpdateWithoutLeagueDataInput {
  season?: SeasonUpdateOneRequiredWithoutLeaguesEnrollmentsInput | null
}

export interface LeagueEnrollmentUpdateWithoutSeasonDataInput {
  league?: LeagueUpdateOneRequiredWithoutEnrollmentsInput | null
}

export interface LeagueEnrollmentUpdateWithWhereUniqueWithoutLeagueInput {
  where: LeagueEnrollmentWhereUniqueInput
  data: LeagueEnrollmentUpdateWithoutLeagueDataInput
}

export interface LeagueEnrollmentUpdateWithWhereUniqueWithoutSeasonInput {
  where: LeagueEnrollmentWhereUniqueInput
  data: LeagueEnrollmentUpdateWithoutSeasonDataInput
}

export interface LeagueEnrollmentUpsertNestedInput {
  update: LeagueEnrollmentUpdateDataInput
  create: LeagueEnrollmentCreateInput
}

export interface LeagueEnrollmentUpsertWithWhereUniqueWithoutLeagueInput {
  where: LeagueEnrollmentWhereUniqueInput
  update: LeagueEnrollmentUpdateWithoutLeagueDataInput
  create: LeagueEnrollmentCreateWithoutLeagueInput
}

export interface LeagueEnrollmentUpsertWithWhereUniqueWithoutSeasonInput {
  where: LeagueEnrollmentWhereUniqueInput
  update: LeagueEnrollmentUpdateWithoutSeasonDataInput
  create: LeagueEnrollmentCreateWithoutSeasonInput
}

export interface LeagueEnrollmentWhereInput {
  AND?: LeagueEnrollmentWhereInput[] | LeagueEnrollmentWhereInput | null
  OR?: LeagueEnrollmentWhereInput[] | LeagueEnrollmentWhereInput | null
  NOT?: LeagueEnrollmentWhereInput[] | LeagueEnrollmentWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  league?: LeagueWhereInput | null
  season?: SeasonWhereInput | null
}

export interface LeagueEnrollmentWhereUniqueInput {
  id?: UUID | null
}

export interface LeagueScalarWhereInput {
  AND?: LeagueScalarWhereInput[] | LeagueScalarWhereInput | null
  OR?: LeagueScalarWhereInput[] | LeagueScalarWhereInput | null
  NOT?: LeagueScalarWhereInput[] | LeagueScalarWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  adminTax?: Int | null
  adminTax_not?: Int | null
  adminTax_in?: Int[] | Int | null
  adminTax_not_in?: Int[] | Int | null
  adminTax_lt?: Int | null
  adminTax_lte?: Int | null
  adminTax_gt?: Int | null
  adminTax_gte?: Int | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  fee?: Int | null
  fee_not?: Int | null
  fee_in?: Int[] | Int | null
  fee_not_in?: Int[] | Int | null
  fee_lt?: Int | null
  fee_lte?: Int | null
  fee_gt?: Int | null
  fee_gte?: Int | null
  limit?: Int | null
  limit_not?: Int | null
  limit_in?: Int[] | Int | null
  limit_not_in?: Int[] | Int | null
  limit_lt?: Int | null
  limit_lte?: Int | null
  limit_gt?: Int | null
  limit_gte?: Int | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  deleted?: Boolean | null
  deleted_not?: Boolean | null
}

export interface LeagueSubscriptionWhereInput {
  AND?: LeagueSubscriptionWhereInput[] | LeagueSubscriptionWhereInput | null
  OR?: LeagueSubscriptionWhereInput[] | LeagueSubscriptionWhereInput | null
  NOT?: LeagueSubscriptionWhereInput[] | LeagueSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LeagueWhereInput | null
}

export interface LeagueTypeCreateInput {
  id?: UUID | null
  name: String
  description?: String | null
  deleted?: Boolean | null
  leagues?: LeagueCreateManyWithoutLeagueTypeInput | null
}

export interface LeagueTypeCreateOneWithoutLeaguesInput {
  create?: LeagueTypeCreateWithoutLeaguesInput | null
  connect?: LeagueTypeWhereUniqueInput | null
}

export interface LeagueTypeCreateWithoutLeaguesInput {
  id?: UUID | null
  name: String
  description?: String | null
  deleted?: Boolean | null
}

export interface LeagueTypeSubscriptionWhereInput {
  AND?: LeagueTypeSubscriptionWhereInput[] | LeagueTypeSubscriptionWhereInput | null
  OR?: LeagueTypeSubscriptionWhereInput[] | LeagueTypeSubscriptionWhereInput | null
  NOT?: LeagueTypeSubscriptionWhereInput[] | LeagueTypeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LeagueTypeWhereInput | null
}

export interface LeagueTypeUpdateInput {
  name?: String | null
  description?: String | null
  deleted?: Boolean | null
  leagues?: LeagueUpdateManyWithoutLeagueTypeInput | null
}

export interface LeagueTypeUpdateManyMutationInput {
  name?: String | null
  description?: String | null
  deleted?: Boolean | null
}

export interface LeagueTypeUpdateOneRequiredWithoutLeaguesInput {
  create?: LeagueTypeCreateWithoutLeaguesInput | null
  connect?: LeagueTypeWhereUniqueInput | null
  update?: LeagueTypeUpdateWithoutLeaguesDataInput | null
  upsert?: LeagueTypeUpsertWithoutLeaguesInput | null
}

export interface LeagueTypeUpdateWithoutLeaguesDataInput {
  name?: String | null
  description?: String | null
  deleted?: Boolean | null
}

export interface LeagueTypeUpsertWithoutLeaguesInput {
  update: LeagueTypeUpdateWithoutLeaguesDataInput
  create: LeagueTypeCreateWithoutLeaguesInput
}

export interface LeagueTypeWhereInput {
  AND?: LeagueTypeWhereInput[] | LeagueTypeWhereInput | null
  OR?: LeagueTypeWhereInput[] | LeagueTypeWhereInput | null
  NOT?: LeagueTypeWhereInput[] | LeagueTypeWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  deleted?: Boolean | null
  deleted_not?: Boolean | null
  leagues_every?: LeagueWhereInput | null
  leagues_some?: LeagueWhereInput | null
  leagues_none?: LeagueWhereInput | null
}

export interface LeagueTypeWhereUniqueInput {
  id?: UUID | null
  name?: String | null
}

export interface LeagueUpdateInput {
  name?: String | null
  adminTax?: Int | null
  avatar?: String | null
  description?: String | null
  fee?: Int | null
  limit?: Int | null
  deleted?: Boolean | null
  wallet?: WalletUpdateOneRequiredWithoutLeagueInput | null
  leagueType?: LeagueTypeUpdateOneRequiredWithoutLeaguesInput | null
  enrollments?: LeagueEnrollmentUpdateManyWithoutLeagueInput | null
}

export interface LeagueUpdateManyDataInput {
  name?: String | null
  adminTax?: Int | null
  avatar?: String | null
  description?: String | null
  fee?: Int | null
  limit?: Int | null
  deleted?: Boolean | null
}

export interface LeagueUpdateManyMutationInput {
  name?: String | null
  adminTax?: Int | null
  avatar?: String | null
  description?: String | null
  fee?: Int | null
  limit?: Int | null
  deleted?: Boolean | null
}

export interface LeagueUpdateManyWithoutLeagueTypeInput {
  create?: LeagueCreateWithoutLeagueTypeInput[] | LeagueCreateWithoutLeagueTypeInput | null
  connect?: LeagueWhereUniqueInput[] | LeagueWhereUniqueInput | null
  set?: LeagueWhereUniqueInput[] | LeagueWhereUniqueInput | null
  disconnect?: LeagueWhereUniqueInput[] | LeagueWhereUniqueInput | null
  delete?: LeagueWhereUniqueInput[] | LeagueWhereUniqueInput | null
  update?: LeagueUpdateWithWhereUniqueWithoutLeagueTypeInput[] | LeagueUpdateWithWhereUniqueWithoutLeagueTypeInput | null
  updateMany?: LeagueUpdateManyWithWhereNestedInput[] | LeagueUpdateManyWithWhereNestedInput | null
  deleteMany?: LeagueScalarWhereInput[] | LeagueScalarWhereInput | null
  upsert?: LeagueUpsertWithWhereUniqueWithoutLeagueTypeInput[] | LeagueUpsertWithWhereUniqueWithoutLeagueTypeInput | null
}

export interface LeagueUpdateManyWithWhereNestedInput {
  where: LeagueScalarWhereInput
  data: LeagueUpdateManyDataInput
}

export interface LeagueUpdateOneRequiredWithoutEnrollmentsInput {
  create?: LeagueCreateWithoutEnrollmentsInput | null
  connect?: LeagueWhereUniqueInput | null
  update?: LeagueUpdateWithoutEnrollmentsDataInput | null
  upsert?: LeagueUpsertWithoutEnrollmentsInput | null
}

export interface LeagueUpdateOneWithoutWalletInput {
  create?: LeagueCreateWithoutWalletInput | null
  connect?: LeagueWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: LeagueUpdateWithoutWalletDataInput | null
  upsert?: LeagueUpsertWithoutWalletInput | null
}

export interface LeagueUpdateWithoutEnrollmentsDataInput {
  name?: String | null
  adminTax?: Int | null
  avatar?: String | null
  description?: String | null
  fee?: Int | null
  limit?: Int | null
  deleted?: Boolean | null
  wallet?: WalletUpdateOneRequiredWithoutLeagueInput | null
  leagueType?: LeagueTypeUpdateOneRequiredWithoutLeaguesInput | null
}

export interface LeagueUpdateWithoutLeagueTypeDataInput {
  name?: String | null
  adminTax?: Int | null
  avatar?: String | null
  description?: String | null
  fee?: Int | null
  limit?: Int | null
  deleted?: Boolean | null
  wallet?: WalletUpdateOneRequiredWithoutLeagueInput | null
  enrollments?: LeagueEnrollmentUpdateManyWithoutLeagueInput | null
}

export interface LeagueUpdateWithoutWalletDataInput {
  name?: String | null
  adminTax?: Int | null
  avatar?: String | null
  description?: String | null
  fee?: Int | null
  limit?: Int | null
  deleted?: Boolean | null
  leagueType?: LeagueTypeUpdateOneRequiredWithoutLeaguesInput | null
  enrollments?: LeagueEnrollmentUpdateManyWithoutLeagueInput | null
}

export interface LeagueUpdateWithWhereUniqueWithoutLeagueTypeInput {
  where: LeagueWhereUniqueInput
  data: LeagueUpdateWithoutLeagueTypeDataInput
}

export interface LeagueUpsertWithoutEnrollmentsInput {
  update: LeagueUpdateWithoutEnrollmentsDataInput
  create: LeagueCreateWithoutEnrollmentsInput
}

export interface LeagueUpsertWithoutWalletInput {
  update: LeagueUpdateWithoutWalletDataInput
  create: LeagueCreateWithoutWalletInput
}

export interface LeagueUpsertWithWhereUniqueWithoutLeagueTypeInput {
  where: LeagueWhereUniqueInput
  update: LeagueUpdateWithoutLeagueTypeDataInput
  create: LeagueCreateWithoutLeagueTypeInput
}

export interface LeagueWhereInput {
  AND?: LeagueWhereInput[] | LeagueWhereInput | null
  OR?: LeagueWhereInput[] | LeagueWhereInput | null
  NOT?: LeagueWhereInput[] | LeagueWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  adminTax?: Int | null
  adminTax_not?: Int | null
  adminTax_in?: Int[] | Int | null
  adminTax_not_in?: Int[] | Int | null
  adminTax_lt?: Int | null
  adminTax_lte?: Int | null
  adminTax_gt?: Int | null
  adminTax_gte?: Int | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  fee?: Int | null
  fee_not?: Int | null
  fee_in?: Int[] | Int | null
  fee_not_in?: Int[] | Int | null
  fee_lt?: Int | null
  fee_lte?: Int | null
  fee_gt?: Int | null
  fee_gte?: Int | null
  limit?: Int | null
  limit_not?: Int | null
  limit_in?: Int[] | Int | null
  limit_not_in?: Int[] | Int | null
  limit_lt?: Int | null
  limit_lte?: Int | null
  limit_gt?: Int | null
  limit_gte?: Int | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  deleted?: Boolean | null
  deleted_not?: Boolean | null
  wallet?: WalletWhereInput | null
  leagueType?: LeagueTypeWhereInput | null
  enrollments_every?: LeagueEnrollmentWhereInput | null
  enrollments_some?: LeagueEnrollmentWhereInput | null
  enrollments_none?: LeagueEnrollmentWhereInput | null
}

export interface LeagueWhereUniqueInput {
  id?: UUID | null
  name?: String | null
}

export interface ScoreCreateInput {
  id?: UUID | null
  score: Float
  round: Int
  season: SeasonCreateOneWithoutScoresInput
  team: TeamCreateOneWithoutScoresInput
}

export interface ScoreCreateManyWithoutSeasonInput {
  create?: ScoreCreateWithoutSeasonInput[] | ScoreCreateWithoutSeasonInput | null
  connect?: ScoreWhereUniqueInput[] | ScoreWhereUniqueInput | null
}

export interface ScoreCreateManyWithoutTeamInput {
  create?: ScoreCreateWithoutTeamInput[] | ScoreCreateWithoutTeamInput | null
  connect?: ScoreWhereUniqueInput[] | ScoreWhereUniqueInput | null
}

export interface ScoreCreateWithoutSeasonInput {
  id?: UUID | null
  score: Float
  round: Int
  team: TeamCreateOneWithoutScoresInput
}

export interface ScoreCreateWithoutTeamInput {
  id?: UUID | null
  score: Float
  round: Int
  season: SeasonCreateOneWithoutScoresInput
}

export interface ScoreScalarWhereInput {
  AND?: ScoreScalarWhereInput[] | ScoreScalarWhereInput | null
  OR?: ScoreScalarWhereInput[] | ScoreScalarWhereInput | null
  NOT?: ScoreScalarWhereInput[] | ScoreScalarWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  score?: Float | null
  score_not?: Float | null
  score_in?: Float[] | Float | null
  score_not_in?: Float[] | Float | null
  score_lt?: Float | null
  score_lte?: Float | null
  score_gt?: Float | null
  score_gte?: Float | null
  round?: Int | null
  round_not?: Int | null
  round_in?: Int[] | Int | null
  round_not_in?: Int[] | Int | null
  round_lt?: Int | null
  round_lte?: Int | null
  round_gt?: Int | null
  round_gte?: Int | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface ScoreSubscriptionWhereInput {
  AND?: ScoreSubscriptionWhereInput[] | ScoreSubscriptionWhereInput | null
  OR?: ScoreSubscriptionWhereInput[] | ScoreSubscriptionWhereInput | null
  NOT?: ScoreSubscriptionWhereInput[] | ScoreSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ScoreWhereInput | null
}

export interface ScoreUpdateInput {
  score?: Float | null
  round?: Int | null
  season?: SeasonUpdateOneRequiredWithoutScoresInput | null
  team?: TeamUpdateOneRequiredWithoutScoresInput | null
}

export interface ScoreUpdateManyDataInput {
  score?: Float | null
  round?: Int | null
}

export interface ScoreUpdateManyMutationInput {
  score?: Float | null
  round?: Int | null
}

export interface ScoreUpdateManyWithoutSeasonInput {
  create?: ScoreCreateWithoutSeasonInput[] | ScoreCreateWithoutSeasonInput | null
  connect?: ScoreWhereUniqueInput[] | ScoreWhereUniqueInput | null
  set?: ScoreWhereUniqueInput[] | ScoreWhereUniqueInput | null
  disconnect?: ScoreWhereUniqueInput[] | ScoreWhereUniqueInput | null
  delete?: ScoreWhereUniqueInput[] | ScoreWhereUniqueInput | null
  update?: ScoreUpdateWithWhereUniqueWithoutSeasonInput[] | ScoreUpdateWithWhereUniqueWithoutSeasonInput | null
  updateMany?: ScoreUpdateManyWithWhereNestedInput[] | ScoreUpdateManyWithWhereNestedInput | null
  deleteMany?: ScoreScalarWhereInput[] | ScoreScalarWhereInput | null
  upsert?: ScoreUpsertWithWhereUniqueWithoutSeasonInput[] | ScoreUpsertWithWhereUniqueWithoutSeasonInput | null
}

export interface ScoreUpdateManyWithoutTeamInput {
  create?: ScoreCreateWithoutTeamInput[] | ScoreCreateWithoutTeamInput | null
  connect?: ScoreWhereUniqueInput[] | ScoreWhereUniqueInput | null
  set?: ScoreWhereUniqueInput[] | ScoreWhereUniqueInput | null
  disconnect?: ScoreWhereUniqueInput[] | ScoreWhereUniqueInput | null
  delete?: ScoreWhereUniqueInput[] | ScoreWhereUniqueInput | null
  update?: ScoreUpdateWithWhereUniqueWithoutTeamInput[] | ScoreUpdateWithWhereUniqueWithoutTeamInput | null
  updateMany?: ScoreUpdateManyWithWhereNestedInput[] | ScoreUpdateManyWithWhereNestedInput | null
  deleteMany?: ScoreScalarWhereInput[] | ScoreScalarWhereInput | null
  upsert?: ScoreUpsertWithWhereUniqueWithoutTeamInput[] | ScoreUpsertWithWhereUniqueWithoutTeamInput | null
}

export interface ScoreUpdateManyWithWhereNestedInput {
  where: ScoreScalarWhereInput
  data: ScoreUpdateManyDataInput
}

export interface ScoreUpdateWithoutSeasonDataInput {
  score?: Float | null
  round?: Int | null
  team?: TeamUpdateOneRequiredWithoutScoresInput | null
}

export interface ScoreUpdateWithoutTeamDataInput {
  score?: Float | null
  round?: Int | null
  season?: SeasonUpdateOneRequiredWithoutScoresInput | null
}

export interface ScoreUpdateWithWhereUniqueWithoutSeasonInput {
  where: ScoreWhereUniqueInput
  data: ScoreUpdateWithoutSeasonDataInput
}

export interface ScoreUpdateWithWhereUniqueWithoutTeamInput {
  where: ScoreWhereUniqueInput
  data: ScoreUpdateWithoutTeamDataInput
}

export interface ScoreUpsertWithWhereUniqueWithoutSeasonInput {
  where: ScoreWhereUniqueInput
  update: ScoreUpdateWithoutSeasonDataInput
  create: ScoreCreateWithoutSeasonInput
}

export interface ScoreUpsertWithWhereUniqueWithoutTeamInput {
  where: ScoreWhereUniqueInput
  update: ScoreUpdateWithoutTeamDataInput
  create: ScoreCreateWithoutTeamInput
}

export interface ScoreWhereInput {
  AND?: ScoreWhereInput[] | ScoreWhereInput | null
  OR?: ScoreWhereInput[] | ScoreWhereInput | null
  NOT?: ScoreWhereInput[] | ScoreWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  score?: Float | null
  score_not?: Float | null
  score_in?: Float[] | Float | null
  score_not_in?: Float[] | Float | null
  score_lt?: Float | null
  score_lte?: Float | null
  score_gt?: Float | null
  score_gte?: Float | null
  round?: Int | null
  round_not?: Int | null
  round_in?: Int[] | Int | null
  round_not_in?: Int[] | Int | null
  round_lt?: Int | null
  round_lte?: Int | null
  round_gt?: Int | null
  round_gte?: Int | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  season?: SeasonWhereInput | null
  team?: TeamWhereInput | null
}

export interface ScoreWhereUniqueInput {
  id?: UUID | null
}

export interface SeasonCreateInput {
  id?: UUID | null
  name: String
  description?: String | null
  current?: Boolean | null
  currentRound: Int
  scores?: ScoreCreateManyWithoutSeasonInput | null
  leaguesEnrollments?: LeagueEnrollmentCreateManyWithoutSeasonInput | null
}

export interface SeasonCreateOneWithoutLeaguesEnrollmentsInput {
  create?: SeasonCreateWithoutLeaguesEnrollmentsInput | null
  connect?: SeasonWhereUniqueInput | null
}

export interface SeasonCreateOneWithoutScoresInput {
  create?: SeasonCreateWithoutScoresInput | null
  connect?: SeasonWhereUniqueInput | null
}

export interface SeasonCreateWithoutLeaguesEnrollmentsInput {
  id?: UUID | null
  name: String
  description?: String | null
  current?: Boolean | null
  currentRound: Int
  scores?: ScoreCreateManyWithoutSeasonInput | null
}

export interface SeasonCreateWithoutScoresInput {
  id?: UUID | null
  name: String
  description?: String | null
  current?: Boolean | null
  currentRound: Int
  leaguesEnrollments?: LeagueEnrollmentCreateManyWithoutSeasonInput | null
}

export interface SeasonSubscriptionWhereInput {
  AND?: SeasonSubscriptionWhereInput[] | SeasonSubscriptionWhereInput | null
  OR?: SeasonSubscriptionWhereInput[] | SeasonSubscriptionWhereInput | null
  NOT?: SeasonSubscriptionWhereInput[] | SeasonSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SeasonWhereInput | null
}

export interface SeasonUpdateInput {
  name?: String | null
  description?: String | null
  current?: Boolean | null
  currentRound?: Int | null
  scores?: ScoreUpdateManyWithoutSeasonInput | null
  leaguesEnrollments?: LeagueEnrollmentUpdateManyWithoutSeasonInput | null
}

export interface SeasonUpdateManyMutationInput {
  name?: String | null
  description?: String | null
  current?: Boolean | null
  currentRound?: Int | null
}

export interface SeasonUpdateOneRequiredWithoutLeaguesEnrollmentsInput {
  create?: SeasonCreateWithoutLeaguesEnrollmentsInput | null
  connect?: SeasonWhereUniqueInput | null
  update?: SeasonUpdateWithoutLeaguesEnrollmentsDataInput | null
  upsert?: SeasonUpsertWithoutLeaguesEnrollmentsInput | null
}

export interface SeasonUpdateOneRequiredWithoutScoresInput {
  create?: SeasonCreateWithoutScoresInput | null
  connect?: SeasonWhereUniqueInput | null
  update?: SeasonUpdateWithoutScoresDataInput | null
  upsert?: SeasonUpsertWithoutScoresInput | null
}

export interface SeasonUpdateWithoutLeaguesEnrollmentsDataInput {
  name?: String | null
  description?: String | null
  current?: Boolean | null
  currentRound?: Int | null
  scores?: ScoreUpdateManyWithoutSeasonInput | null
}

export interface SeasonUpdateWithoutScoresDataInput {
  name?: String | null
  description?: String | null
  current?: Boolean | null
  currentRound?: Int | null
  leaguesEnrollments?: LeagueEnrollmentUpdateManyWithoutSeasonInput | null
}

export interface SeasonUpsertWithoutLeaguesEnrollmentsInput {
  update: SeasonUpdateWithoutLeaguesEnrollmentsDataInput
  create: SeasonCreateWithoutLeaguesEnrollmentsInput
}

export interface SeasonUpsertWithoutScoresInput {
  update: SeasonUpdateWithoutScoresDataInput
  create: SeasonCreateWithoutScoresInput
}

export interface SeasonWhereInput {
  AND?: SeasonWhereInput[] | SeasonWhereInput | null
  OR?: SeasonWhereInput[] | SeasonWhereInput | null
  NOT?: SeasonWhereInput[] | SeasonWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  current?: Boolean | null
  current_not?: Boolean | null
  currentRound?: Int | null
  currentRound_not?: Int | null
  currentRound_in?: Int[] | Int | null
  currentRound_not_in?: Int[] | Int | null
  currentRound_lt?: Int | null
  currentRound_lte?: Int | null
  currentRound_gt?: Int | null
  currentRound_gte?: Int | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  scores_every?: ScoreWhereInput | null
  scores_some?: ScoreWhereInput | null
  scores_none?: ScoreWhereInput | null
  leaguesEnrollments_every?: LeagueEnrollmentWhereInput | null
  leaguesEnrollments_some?: LeagueEnrollmentWhereInput | null
  leaguesEnrollments_none?: LeagueEnrollmentWhereInput | null
}

export interface SeasonWhereUniqueInput {
  id?: UUID | null
  name?: String | null
}

export interface TeamCreateInput {
  id?: UUID | null
  name: String
  cartolaId: String
  cartolaName: String
  cartolaSlug: String
  avatar?: String | null
  deleted?: Boolean | null
  scores?: ScoreCreateManyWithoutTeamInput | null
  owner: UserCreateOneWithoutTeamInput
  enrollments?: TeamEnrollmentCreateManyWithoutTeamInput | null
}

export interface TeamCreateOneWithoutEnrollmentsInput {
  create?: TeamCreateWithoutEnrollmentsInput | null
  connect?: TeamWhereUniqueInput | null
}

export interface TeamCreateOneWithoutOwnerInput {
  create?: TeamCreateWithoutOwnerInput | null
  connect?: TeamWhereUniqueInput | null
}

export interface TeamCreateOneWithoutScoresInput {
  create?: TeamCreateWithoutScoresInput | null
  connect?: TeamWhereUniqueInput | null
}

export interface TeamCreateWithoutEnrollmentsInput {
  id?: UUID | null
  name: String
  cartolaId: String
  cartolaName: String
  cartolaSlug: String
  avatar?: String | null
  deleted?: Boolean | null
  scores?: ScoreCreateManyWithoutTeamInput | null
  owner: UserCreateOneWithoutTeamInput
}

export interface TeamCreateWithoutOwnerInput {
  id?: UUID | null
  name: String
  cartolaId: String
  cartolaName: String
  cartolaSlug: String
  avatar?: String | null
  deleted?: Boolean | null
  scores?: ScoreCreateManyWithoutTeamInput | null
  enrollments?: TeamEnrollmentCreateManyWithoutTeamInput | null
}

export interface TeamCreateWithoutScoresInput {
  id?: UUID | null
  name: String
  cartolaId: String
  cartolaName: String
  cartolaSlug: String
  avatar?: String | null
  deleted?: Boolean | null
  owner: UserCreateOneWithoutTeamInput
  enrollments?: TeamEnrollmentCreateManyWithoutTeamInput | null
}

export interface TeamEnrollmentCreateInput {
  id?: UUID | null
  fee?: Int | null
  leagueEnrollment: LeagueEnrollmentCreateOneInput
  team: TeamCreateOneWithoutEnrollmentsInput
}

export interface TeamEnrollmentCreateManyWithoutTeamInput {
  create?: TeamEnrollmentCreateWithoutTeamInput[] | TeamEnrollmentCreateWithoutTeamInput | null
  connect?: TeamEnrollmentWhereUniqueInput[] | TeamEnrollmentWhereUniqueInput | null
}

export interface TeamEnrollmentCreateWithoutTeamInput {
  id?: UUID | null
  fee?: Int | null
  leagueEnrollment: LeagueEnrollmentCreateOneInput
}

export interface TeamEnrollmentScalarWhereInput {
  AND?: TeamEnrollmentScalarWhereInput[] | TeamEnrollmentScalarWhereInput | null
  OR?: TeamEnrollmentScalarWhereInput[] | TeamEnrollmentScalarWhereInput | null
  NOT?: TeamEnrollmentScalarWhereInput[] | TeamEnrollmentScalarWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  fee?: Int | null
  fee_not?: Int | null
  fee_in?: Int[] | Int | null
  fee_not_in?: Int[] | Int | null
  fee_lt?: Int | null
  fee_lte?: Int | null
  fee_gt?: Int | null
  fee_gte?: Int | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
}

export interface TeamEnrollmentSubscriptionWhereInput {
  AND?: TeamEnrollmentSubscriptionWhereInput[] | TeamEnrollmentSubscriptionWhereInput | null
  OR?: TeamEnrollmentSubscriptionWhereInput[] | TeamEnrollmentSubscriptionWhereInput | null
  NOT?: TeamEnrollmentSubscriptionWhereInput[] | TeamEnrollmentSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: TeamEnrollmentWhereInput | null
}

export interface TeamEnrollmentUpdateInput {
  fee?: Int | null
  leagueEnrollment?: LeagueEnrollmentUpdateOneRequiredInput | null
  team?: TeamUpdateOneRequiredWithoutEnrollmentsInput | null
}

export interface TeamEnrollmentUpdateManyDataInput {
  fee?: Int | null
}

export interface TeamEnrollmentUpdateManyMutationInput {
  fee?: Int | null
}

export interface TeamEnrollmentUpdateManyWithoutTeamInput {
  create?: TeamEnrollmentCreateWithoutTeamInput[] | TeamEnrollmentCreateWithoutTeamInput | null
  connect?: TeamEnrollmentWhereUniqueInput[] | TeamEnrollmentWhereUniqueInput | null
  set?: TeamEnrollmentWhereUniqueInput[] | TeamEnrollmentWhereUniqueInput | null
  disconnect?: TeamEnrollmentWhereUniqueInput[] | TeamEnrollmentWhereUniqueInput | null
  delete?: TeamEnrollmentWhereUniqueInput[] | TeamEnrollmentWhereUniqueInput | null
  update?: TeamEnrollmentUpdateWithWhereUniqueWithoutTeamInput[] | TeamEnrollmentUpdateWithWhereUniqueWithoutTeamInput | null
  updateMany?: TeamEnrollmentUpdateManyWithWhereNestedInput[] | TeamEnrollmentUpdateManyWithWhereNestedInput | null
  deleteMany?: TeamEnrollmentScalarWhereInput[] | TeamEnrollmentScalarWhereInput | null
  upsert?: TeamEnrollmentUpsertWithWhereUniqueWithoutTeamInput[] | TeamEnrollmentUpsertWithWhereUniqueWithoutTeamInput | null
}

export interface TeamEnrollmentUpdateManyWithWhereNestedInput {
  where: TeamEnrollmentScalarWhereInput
  data: TeamEnrollmentUpdateManyDataInput
}

export interface TeamEnrollmentUpdateWithoutTeamDataInput {
  fee?: Int | null
  leagueEnrollment?: LeagueEnrollmentUpdateOneRequiredInput | null
}

export interface TeamEnrollmentUpdateWithWhereUniqueWithoutTeamInput {
  where: TeamEnrollmentWhereUniqueInput
  data: TeamEnrollmentUpdateWithoutTeamDataInput
}

export interface TeamEnrollmentUpsertWithWhereUniqueWithoutTeamInput {
  where: TeamEnrollmentWhereUniqueInput
  update: TeamEnrollmentUpdateWithoutTeamDataInput
  create: TeamEnrollmentCreateWithoutTeamInput
}

export interface TeamEnrollmentWhereInput {
  AND?: TeamEnrollmentWhereInput[] | TeamEnrollmentWhereInput | null
  OR?: TeamEnrollmentWhereInput[] | TeamEnrollmentWhereInput | null
  NOT?: TeamEnrollmentWhereInput[] | TeamEnrollmentWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  fee?: Int | null
  fee_not?: Int | null
  fee_in?: Int[] | Int | null
  fee_not_in?: Int[] | Int | null
  fee_lt?: Int | null
  fee_lte?: Int | null
  fee_gt?: Int | null
  fee_gte?: Int | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  leagueEnrollment?: LeagueEnrollmentWhereInput | null
  team?: TeamWhereInput | null
}

export interface TeamEnrollmentWhereUniqueInput {
  id?: UUID | null
}

export interface TeamSubscriptionWhereInput {
  AND?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput | null
  OR?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput | null
  NOT?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: TeamWhereInput | null
}

export interface TeamUpdateInput {
  name?: String | null
  cartolaId?: String | null
  cartolaName?: String | null
  cartolaSlug?: String | null
  avatar?: String | null
  deleted?: Boolean | null
  scores?: ScoreUpdateManyWithoutTeamInput | null
  owner?: UserUpdateOneRequiredWithoutTeamInput | null
  enrollments?: TeamEnrollmentUpdateManyWithoutTeamInput | null
}

export interface TeamUpdateManyMutationInput {
  name?: String | null
  cartolaId?: String | null
  cartolaName?: String | null
  cartolaSlug?: String | null
  avatar?: String | null
  deleted?: Boolean | null
}

export interface TeamUpdateOneRequiredWithoutEnrollmentsInput {
  create?: TeamCreateWithoutEnrollmentsInput | null
  connect?: TeamWhereUniqueInput | null
  update?: TeamUpdateWithoutEnrollmentsDataInput | null
  upsert?: TeamUpsertWithoutEnrollmentsInput | null
}

export interface TeamUpdateOneRequiredWithoutOwnerInput {
  create?: TeamCreateWithoutOwnerInput | null
  connect?: TeamWhereUniqueInput | null
  update?: TeamUpdateWithoutOwnerDataInput | null
  upsert?: TeamUpsertWithoutOwnerInput | null
}

export interface TeamUpdateOneRequiredWithoutScoresInput {
  create?: TeamCreateWithoutScoresInput | null
  connect?: TeamWhereUniqueInput | null
  update?: TeamUpdateWithoutScoresDataInput | null
  upsert?: TeamUpsertWithoutScoresInput | null
}

export interface TeamUpdateWithoutEnrollmentsDataInput {
  name?: String | null
  cartolaId?: String | null
  cartolaName?: String | null
  cartolaSlug?: String | null
  avatar?: String | null
  deleted?: Boolean | null
  scores?: ScoreUpdateManyWithoutTeamInput | null
  owner?: UserUpdateOneRequiredWithoutTeamInput | null
}

export interface TeamUpdateWithoutOwnerDataInput {
  name?: String | null
  cartolaId?: String | null
  cartolaName?: String | null
  cartolaSlug?: String | null
  avatar?: String | null
  deleted?: Boolean | null
  scores?: ScoreUpdateManyWithoutTeamInput | null
  enrollments?: TeamEnrollmentUpdateManyWithoutTeamInput | null
}

export interface TeamUpdateWithoutScoresDataInput {
  name?: String | null
  cartolaId?: String | null
  cartolaName?: String | null
  cartolaSlug?: String | null
  avatar?: String | null
  deleted?: Boolean | null
  owner?: UserUpdateOneRequiredWithoutTeamInput | null
  enrollments?: TeamEnrollmentUpdateManyWithoutTeamInput | null
}

export interface TeamUpsertWithoutEnrollmentsInput {
  update: TeamUpdateWithoutEnrollmentsDataInput
  create: TeamCreateWithoutEnrollmentsInput
}

export interface TeamUpsertWithoutOwnerInput {
  update: TeamUpdateWithoutOwnerDataInput
  create: TeamCreateWithoutOwnerInput
}

export interface TeamUpsertWithoutScoresInput {
  update: TeamUpdateWithoutScoresDataInput
  create: TeamCreateWithoutScoresInput
}

export interface TeamWhereInput {
  AND?: TeamWhereInput[] | TeamWhereInput | null
  OR?: TeamWhereInput[] | TeamWhereInput | null
  NOT?: TeamWhereInput[] | TeamWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  cartolaId?: String | null
  cartolaId_not?: String | null
  cartolaId_in?: String[] | String | null
  cartolaId_not_in?: String[] | String | null
  cartolaId_lt?: String | null
  cartolaId_lte?: String | null
  cartolaId_gt?: String | null
  cartolaId_gte?: String | null
  cartolaId_contains?: String | null
  cartolaId_not_contains?: String | null
  cartolaId_starts_with?: String | null
  cartolaId_not_starts_with?: String | null
  cartolaId_ends_with?: String | null
  cartolaId_not_ends_with?: String | null
  cartolaName?: String | null
  cartolaName_not?: String | null
  cartolaName_in?: String[] | String | null
  cartolaName_not_in?: String[] | String | null
  cartolaName_lt?: String | null
  cartolaName_lte?: String | null
  cartolaName_gt?: String | null
  cartolaName_gte?: String | null
  cartolaName_contains?: String | null
  cartolaName_not_contains?: String | null
  cartolaName_starts_with?: String | null
  cartolaName_not_starts_with?: String | null
  cartolaName_ends_with?: String | null
  cartolaName_not_ends_with?: String | null
  cartolaSlug?: String | null
  cartolaSlug_not?: String | null
  cartolaSlug_in?: String[] | String | null
  cartolaSlug_not_in?: String[] | String | null
  cartolaSlug_lt?: String | null
  cartolaSlug_lte?: String | null
  cartolaSlug_gt?: String | null
  cartolaSlug_gte?: String | null
  cartolaSlug_contains?: String | null
  cartolaSlug_not_contains?: String | null
  cartolaSlug_starts_with?: String | null
  cartolaSlug_not_starts_with?: String | null
  cartolaSlug_ends_with?: String | null
  cartolaSlug_not_ends_with?: String | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  deleted?: Boolean | null
  deleted_not?: Boolean | null
  scores_every?: ScoreWhereInput | null
  scores_some?: ScoreWhereInput | null
  scores_none?: ScoreWhereInput | null
  owner?: UserWhereInput | null
  enrollments_every?: TeamEnrollmentWhereInput | null
  enrollments_some?: TeamEnrollmentWhereInput | null
  enrollments_none?: TeamEnrollmentWhereInput | null
}

export interface TeamWhereUniqueInput {
  id?: UUID | null
  name?: String | null
}

export interface TransactionCreateInput {
  id?: UUID | null
  amount: Int
  destination: WalletCreateOneWithoutIncomingTransactionsInput
  origin: WalletCreateOneWithoutOutgoingTransactionsInput
}

export interface TransactionCreateManyWithoutDestinationInput {
  create?: TransactionCreateWithoutDestinationInput[] | TransactionCreateWithoutDestinationInput | null
  connect?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
}

export interface TransactionCreateManyWithoutOriginInput {
  create?: TransactionCreateWithoutOriginInput[] | TransactionCreateWithoutOriginInput | null
  connect?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
}

export interface TransactionCreateWithoutDestinationInput {
  id?: UUID | null
  amount: Int
  origin: WalletCreateOneWithoutOutgoingTransactionsInput
}

export interface TransactionCreateWithoutOriginInput {
  id?: UUID | null
  amount: Int
  destination: WalletCreateOneWithoutIncomingTransactionsInput
}

export interface TransactionScalarWhereInput {
  AND?: TransactionScalarWhereInput[] | TransactionScalarWhereInput | null
  OR?: TransactionScalarWhereInput[] | TransactionScalarWhereInput | null
  NOT?: TransactionScalarWhereInput[] | TransactionScalarWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  amount?: Int | null
  amount_not?: Int | null
  amount_in?: Int[] | Int | null
  amount_not_in?: Int[] | Int | null
  amount_lt?: Int | null
  amount_lte?: Int | null
  amount_gt?: Int | null
  amount_gte?: Int | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface TransactionSubscriptionWhereInput {
  AND?: TransactionSubscriptionWhereInput[] | TransactionSubscriptionWhereInput | null
  OR?: TransactionSubscriptionWhereInput[] | TransactionSubscriptionWhereInput | null
  NOT?: TransactionSubscriptionWhereInput[] | TransactionSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: TransactionWhereInput | null
}

export interface TransactionUpdateInput {
  amount?: Int | null
  destination?: WalletUpdateOneRequiredWithoutIncomingTransactionsInput | null
  origin?: WalletUpdateOneRequiredWithoutOutgoingTransactionsInput | null
}

export interface TransactionUpdateManyDataInput {
  amount?: Int | null
}

export interface TransactionUpdateManyMutationInput {
  amount?: Int | null
}

export interface TransactionUpdateManyWithoutDestinationInput {
  create?: TransactionCreateWithoutDestinationInput[] | TransactionCreateWithoutDestinationInput | null
  connect?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
  set?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
  disconnect?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
  delete?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
  update?: TransactionUpdateWithWhereUniqueWithoutDestinationInput[] | TransactionUpdateWithWhereUniqueWithoutDestinationInput | null
  updateMany?: TransactionUpdateManyWithWhereNestedInput[] | TransactionUpdateManyWithWhereNestedInput | null
  deleteMany?: TransactionScalarWhereInput[] | TransactionScalarWhereInput | null
  upsert?: TransactionUpsertWithWhereUniqueWithoutDestinationInput[] | TransactionUpsertWithWhereUniqueWithoutDestinationInput | null
}

export interface TransactionUpdateManyWithoutOriginInput {
  create?: TransactionCreateWithoutOriginInput[] | TransactionCreateWithoutOriginInput | null
  connect?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
  set?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
  disconnect?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
  delete?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput | null
  update?: TransactionUpdateWithWhereUniqueWithoutOriginInput[] | TransactionUpdateWithWhereUniqueWithoutOriginInput | null
  updateMany?: TransactionUpdateManyWithWhereNestedInput[] | TransactionUpdateManyWithWhereNestedInput | null
  deleteMany?: TransactionScalarWhereInput[] | TransactionScalarWhereInput | null
  upsert?: TransactionUpsertWithWhereUniqueWithoutOriginInput[] | TransactionUpsertWithWhereUniqueWithoutOriginInput | null
}

export interface TransactionUpdateManyWithWhereNestedInput {
  where: TransactionScalarWhereInput
  data: TransactionUpdateManyDataInput
}

export interface TransactionUpdateWithoutDestinationDataInput {
  amount?: Int | null
  origin?: WalletUpdateOneRequiredWithoutOutgoingTransactionsInput | null
}

export interface TransactionUpdateWithoutOriginDataInput {
  amount?: Int | null
  destination?: WalletUpdateOneRequiredWithoutIncomingTransactionsInput | null
}

export interface TransactionUpdateWithWhereUniqueWithoutDestinationInput {
  where: TransactionWhereUniqueInput
  data: TransactionUpdateWithoutDestinationDataInput
}

export interface TransactionUpdateWithWhereUniqueWithoutOriginInput {
  where: TransactionWhereUniqueInput
  data: TransactionUpdateWithoutOriginDataInput
}

export interface TransactionUpsertWithWhereUniqueWithoutDestinationInput {
  where: TransactionWhereUniqueInput
  update: TransactionUpdateWithoutDestinationDataInput
  create: TransactionCreateWithoutDestinationInput
}

export interface TransactionUpsertWithWhereUniqueWithoutOriginInput {
  where: TransactionWhereUniqueInput
  update: TransactionUpdateWithoutOriginDataInput
  create: TransactionCreateWithoutOriginInput
}

export interface TransactionWhereInput {
  AND?: TransactionWhereInput[] | TransactionWhereInput | null
  OR?: TransactionWhereInput[] | TransactionWhereInput | null
  NOT?: TransactionWhereInput[] | TransactionWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  amount?: Int | null
  amount_not?: Int | null
  amount_in?: Int[] | Int | null
  amount_not_in?: Int[] | Int | null
  amount_lt?: Int | null
  amount_lte?: Int | null
  amount_gt?: Int | null
  amount_gte?: Int | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  destination?: WalletWhereInput | null
  origin?: WalletWhereInput | null
}

export interface TransactionWhereUniqueInput {
  id?: UUID | null
}

export interface UserCreateInput {
  id?: UUID | null
  email: String
  globoToken?: String | null
  password: String
  deleted?: Boolean | null
  team: TeamCreateOneWithoutOwnerInput
  wallet: WalletCreateOneWithoutUserInput
  cards?: CardCreateManyWithoutUserInput | null
}

export interface UserCreateOneWithoutCardsInput {
  create?: UserCreateWithoutCardsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutTeamInput {
  create?: UserCreateWithoutTeamInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutWalletInput {
  create?: UserCreateWithoutWalletInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutCardsInput {
  id?: UUID | null
  email: String
  globoToken?: String | null
  password: String
  deleted?: Boolean | null
  team: TeamCreateOneWithoutOwnerInput
  wallet: WalletCreateOneWithoutUserInput
}

export interface UserCreateWithoutTeamInput {
  id?: UUID | null
  email: String
  globoToken?: String | null
  password: String
  deleted?: Boolean | null
  wallet: WalletCreateOneWithoutUserInput
  cards?: CardCreateManyWithoutUserInput | null
}

export interface UserCreateWithoutWalletInput {
  id?: UUID | null
  email: String
  globoToken?: String | null
  password: String
  deleted?: Boolean | null
  team: TeamCreateOneWithoutOwnerInput
  cards?: CardCreateManyWithoutUserInput | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  email?: String | null
  globoToken?: String | null
  password?: String | null
  deleted?: Boolean | null
  team?: TeamUpdateOneRequiredWithoutOwnerInput | null
  wallet?: WalletUpdateOneRequiredWithoutUserInput | null
  cards?: CardUpdateManyWithoutUserInput | null
}

export interface UserUpdateManyMutationInput {
  email?: String | null
  globoToken?: String | null
  password?: String | null
  deleted?: Boolean | null
}

export interface UserUpdateOneRequiredWithoutCardsInput {
  create?: UserCreateWithoutCardsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutCardsDataInput | null
  upsert?: UserUpsertWithoutCardsInput | null
}

export interface UserUpdateOneRequiredWithoutTeamInput {
  create?: UserCreateWithoutTeamInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutTeamDataInput | null
  upsert?: UserUpsertWithoutTeamInput | null
}

export interface UserUpdateOneWithoutWalletInput {
  create?: UserCreateWithoutWalletInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutWalletDataInput | null
  upsert?: UserUpsertWithoutWalletInput | null
}

export interface UserUpdateWithoutCardsDataInput {
  email?: String | null
  globoToken?: String | null
  password?: String | null
  deleted?: Boolean | null
  team?: TeamUpdateOneRequiredWithoutOwnerInput | null
  wallet?: WalletUpdateOneRequiredWithoutUserInput | null
}

export interface UserUpdateWithoutTeamDataInput {
  email?: String | null
  globoToken?: String | null
  password?: String | null
  deleted?: Boolean | null
  wallet?: WalletUpdateOneRequiredWithoutUserInput | null
  cards?: CardUpdateManyWithoutUserInput | null
}

export interface UserUpdateWithoutWalletDataInput {
  email?: String | null
  globoToken?: String | null
  password?: String | null
  deleted?: Boolean | null
  team?: TeamUpdateOneRequiredWithoutOwnerInput | null
  cards?: CardUpdateManyWithoutUserInput | null
}

export interface UserUpsertWithoutCardsInput {
  update: UserUpdateWithoutCardsDataInput
  create: UserCreateWithoutCardsInput
}

export interface UserUpsertWithoutTeamInput {
  update: UserUpdateWithoutTeamDataInput
  create: UserCreateWithoutTeamInput
}

export interface UserUpsertWithoutWalletInput {
  update: UserUpdateWithoutWalletDataInput
  create: UserCreateWithoutWalletInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  globoToken?: String | null
  globoToken_not?: String | null
  globoToken_in?: String[] | String | null
  globoToken_not_in?: String[] | String | null
  globoToken_lt?: String | null
  globoToken_lte?: String | null
  globoToken_gt?: String | null
  globoToken_gte?: String | null
  globoToken_contains?: String | null
  globoToken_not_contains?: String | null
  globoToken_starts_with?: String | null
  globoToken_not_starts_with?: String | null
  globoToken_ends_with?: String | null
  globoToken_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  deleted?: Boolean | null
  deleted_not?: Boolean | null
  team?: TeamWhereInput | null
  wallet?: WalletWhereInput | null
  cards_every?: CardWhereInput | null
  cards_some?: CardWhereInput | null
  cards_none?: CardWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: UUID | null
  email?: String | null
}

export interface WalletCreateInput {
  id?: UUID | null
  amount?: Int | null
  user?: UserCreateOneWithoutWalletInput | null
  league?: LeagueCreateOneWithoutWalletInput | null
  incomingTransactions?: TransactionCreateManyWithoutDestinationInput | null
  outgoingTransactions?: TransactionCreateManyWithoutOriginInput | null
}

export interface WalletCreateOneWithoutIncomingTransactionsInput {
  create?: WalletCreateWithoutIncomingTransactionsInput | null
  connect?: WalletWhereUniqueInput | null
}

export interface WalletCreateOneWithoutLeagueInput {
  create?: WalletCreateWithoutLeagueInput | null
  connect?: WalletWhereUniqueInput | null
}

export interface WalletCreateOneWithoutOutgoingTransactionsInput {
  create?: WalletCreateWithoutOutgoingTransactionsInput | null
  connect?: WalletWhereUniqueInput | null
}

export interface WalletCreateOneWithoutUserInput {
  create?: WalletCreateWithoutUserInput | null
  connect?: WalletWhereUniqueInput | null
}

export interface WalletCreateWithoutIncomingTransactionsInput {
  id?: UUID | null
  amount?: Int | null
  user?: UserCreateOneWithoutWalletInput | null
  league?: LeagueCreateOneWithoutWalletInput | null
  outgoingTransactions?: TransactionCreateManyWithoutOriginInput | null
}

export interface WalletCreateWithoutLeagueInput {
  id?: UUID | null
  amount?: Int | null
  user?: UserCreateOneWithoutWalletInput | null
  incomingTransactions?: TransactionCreateManyWithoutDestinationInput | null
  outgoingTransactions?: TransactionCreateManyWithoutOriginInput | null
}

export interface WalletCreateWithoutOutgoingTransactionsInput {
  id?: UUID | null
  amount?: Int | null
  user?: UserCreateOneWithoutWalletInput | null
  league?: LeagueCreateOneWithoutWalletInput | null
  incomingTransactions?: TransactionCreateManyWithoutDestinationInput | null
}

export interface WalletCreateWithoutUserInput {
  id?: UUID | null
  amount?: Int | null
  league?: LeagueCreateOneWithoutWalletInput | null
  incomingTransactions?: TransactionCreateManyWithoutDestinationInput | null
  outgoingTransactions?: TransactionCreateManyWithoutOriginInput | null
}

export interface WalletSubscriptionWhereInput {
  AND?: WalletSubscriptionWhereInput[] | WalletSubscriptionWhereInput | null
  OR?: WalletSubscriptionWhereInput[] | WalletSubscriptionWhereInput | null
  NOT?: WalletSubscriptionWhereInput[] | WalletSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: WalletWhereInput | null
}

export interface WalletUpdateInput {
  amount?: Int | null
  user?: UserUpdateOneWithoutWalletInput | null
  league?: LeagueUpdateOneWithoutWalletInput | null
  incomingTransactions?: TransactionUpdateManyWithoutDestinationInput | null
  outgoingTransactions?: TransactionUpdateManyWithoutOriginInput | null
}

export interface WalletUpdateManyMutationInput {
  amount?: Int | null
}

export interface WalletUpdateOneRequiredWithoutIncomingTransactionsInput {
  create?: WalletCreateWithoutIncomingTransactionsInput | null
  connect?: WalletWhereUniqueInput | null
  update?: WalletUpdateWithoutIncomingTransactionsDataInput | null
  upsert?: WalletUpsertWithoutIncomingTransactionsInput | null
}

export interface WalletUpdateOneRequiredWithoutLeagueInput {
  create?: WalletCreateWithoutLeagueInput | null
  connect?: WalletWhereUniqueInput | null
  update?: WalletUpdateWithoutLeagueDataInput | null
  upsert?: WalletUpsertWithoutLeagueInput | null
}

export interface WalletUpdateOneRequiredWithoutOutgoingTransactionsInput {
  create?: WalletCreateWithoutOutgoingTransactionsInput | null
  connect?: WalletWhereUniqueInput | null
  update?: WalletUpdateWithoutOutgoingTransactionsDataInput | null
  upsert?: WalletUpsertWithoutOutgoingTransactionsInput | null
}

export interface WalletUpdateOneRequiredWithoutUserInput {
  create?: WalletCreateWithoutUserInput | null
  connect?: WalletWhereUniqueInput | null
  update?: WalletUpdateWithoutUserDataInput | null
  upsert?: WalletUpsertWithoutUserInput | null
}

export interface WalletUpdateWithoutIncomingTransactionsDataInput {
  amount?: Int | null
  user?: UserUpdateOneWithoutWalletInput | null
  league?: LeagueUpdateOneWithoutWalletInput | null
  outgoingTransactions?: TransactionUpdateManyWithoutOriginInput | null
}

export interface WalletUpdateWithoutLeagueDataInput {
  amount?: Int | null
  user?: UserUpdateOneWithoutWalletInput | null
  incomingTransactions?: TransactionUpdateManyWithoutDestinationInput | null
  outgoingTransactions?: TransactionUpdateManyWithoutOriginInput | null
}

export interface WalletUpdateWithoutOutgoingTransactionsDataInput {
  amount?: Int | null
  user?: UserUpdateOneWithoutWalletInput | null
  league?: LeagueUpdateOneWithoutWalletInput | null
  incomingTransactions?: TransactionUpdateManyWithoutDestinationInput | null
}

export interface WalletUpdateWithoutUserDataInput {
  amount?: Int | null
  league?: LeagueUpdateOneWithoutWalletInput | null
  incomingTransactions?: TransactionUpdateManyWithoutDestinationInput | null
  outgoingTransactions?: TransactionUpdateManyWithoutOriginInput | null
}

export interface WalletUpsertWithoutIncomingTransactionsInput {
  update: WalletUpdateWithoutIncomingTransactionsDataInput
  create: WalletCreateWithoutIncomingTransactionsInput
}

export interface WalletUpsertWithoutLeagueInput {
  update: WalletUpdateWithoutLeagueDataInput
  create: WalletCreateWithoutLeagueInput
}

export interface WalletUpsertWithoutOutgoingTransactionsInput {
  update: WalletUpdateWithoutOutgoingTransactionsDataInput
  create: WalletCreateWithoutOutgoingTransactionsInput
}

export interface WalletUpsertWithoutUserInput {
  update: WalletUpdateWithoutUserDataInput
  create: WalletCreateWithoutUserInput
}

export interface WalletWhereInput {
  AND?: WalletWhereInput[] | WalletWhereInput | null
  OR?: WalletWhereInput[] | WalletWhereInput | null
  NOT?: WalletWhereInput[] | WalletWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  amount?: Int | null
  amount_not?: Int | null
  amount_in?: Int[] | Int | null
  amount_not_in?: Int[] | Int | null
  amount_lt?: Int | null
  amount_lte?: Int | null
  amount_gt?: Int | null
  amount_gte?: Int | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  user?: UserWhereInput | null
  league?: LeagueWhereInput | null
  incomingTransactions_every?: TransactionWhereInput | null
  incomingTransactions_some?: TransactionWhereInput | null
  incomingTransactions_none?: TransactionWhereInput | null
  outgoingTransactions_every?: TransactionWhereInput | null
  outgoingTransactions_some?: TransactionWhereInput | null
  outgoingTransactions_none?: TransactionWhereInput | null
}

export interface WalletWhereUniqueInput {
  id?: UUID | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateCard {
  count: Int
}

export interface AggregateLeague {
  count: Int
}

export interface AggregateLeagueEnrollment {
  count: Int
}

export interface AggregateLeagueType {
  count: Int
}

export interface AggregateScore {
  count: Int
}

export interface AggregateSeason {
  count: Int
}

export interface AggregateTeam {
  count: Int
}

export interface AggregateTeamEnrollment {
  count: Int
}

export interface AggregateTransaction {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface AggregateWallet {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Card {
  id: UUID
  pagarmeId: String
  brand: String
  holderName: String
  firstDigits: String
  lastDigits: String
  fingerprint: String
  valid: Boolean
  expirationDate: String
  user: User
}

/*
 * A connection to a list of items.

 */
export interface CardConnection {
  pageInfo: PageInfo
  edges: Array<CardEdge | null>
  aggregate: AggregateCard
}

/*
 * An edge in a connection.

 */
export interface CardEdge {
  node: Card
  cursor: String
}

export interface CardPreviousValues {
  id: UUID
  pagarmeId: String
  brand: String
  holderName: String
  firstDigits: String
  lastDigits: String
  fingerprint: String
  valid: Boolean
  expirationDate: String
}

export interface CardSubscriptionPayload {
  mutation: MutationType
  node?: Card | null
  updatedFields?: Array<String> | null
  previousValues?: CardPreviousValues | null
}

export interface League {
  id: UUID
  name: String
  adminTax: Int
  avatar?: String | null
  description?: String | null
  fee: Int
  limit: Int
  wallet: Wallet
  leagueType: LeagueType
  enrollments?: Array<LeagueEnrollment> | null
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

/*
 * A connection to a list of items.

 */
export interface LeagueConnection {
  pageInfo: PageInfo
  edges: Array<LeagueEdge | null>
  aggregate: AggregateLeague
}

/*
 * An edge in a connection.

 */
export interface LeagueEdge {
  node: League
  cursor: String
}

export interface LeagueEnrollment {
  id: UUID
  league: League
  season: Season
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface LeagueEnrollmentConnection {
  pageInfo: PageInfo
  edges: Array<LeagueEnrollmentEdge | null>
  aggregate: AggregateLeagueEnrollment
}

/*
 * An edge in a connection.

 */
export interface LeagueEnrollmentEdge {
  node: LeagueEnrollment
  cursor: String
}

export interface LeagueEnrollmentPreviousValues {
  id: UUID
  createdAt: DateTime
  updatedAt: DateTime
}

export interface LeagueEnrollmentSubscriptionPayload {
  mutation: MutationType
  node?: LeagueEnrollment | null
  updatedFields?: Array<String> | null
  previousValues?: LeagueEnrollmentPreviousValues | null
}

export interface LeaguePreviousValues {
  id: UUID
  name: String
  adminTax: Int
  avatar?: String | null
  description?: String | null
  fee: Int
  limit: Int
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

export interface LeagueSubscriptionPayload {
  mutation: MutationType
  node?: League | null
  updatedFields?: Array<String> | null
  previousValues?: LeaguePreviousValues | null
}

export interface LeagueType {
  id: UUID
  name: String
  description?: String | null
  leagues?: Array<League> | null
  createdAt?: DateTime | null
  updatedAt: DateTime
  deleted: Boolean
}

/*
 * A connection to a list of items.

 */
export interface LeagueTypeConnection {
  pageInfo: PageInfo
  edges: Array<LeagueTypeEdge | null>
  aggregate: AggregateLeagueType
}

/*
 * An edge in a connection.

 */
export interface LeagueTypeEdge {
  node: LeagueType
  cursor: String
}

export interface LeagueTypePreviousValues {
  id: UUID
  name: String
  description?: String | null
  createdAt?: DateTime | null
  updatedAt: DateTime
  deleted: Boolean
}

export interface LeagueTypeSubscriptionPayload {
  mutation: MutationType
  node?: LeagueType | null
  updatedFields?: Array<String> | null
  previousValues?: LeagueTypePreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Score {
  id: UUID
  score: Float
  season: Season
  team: Team
  round: Int
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ScoreConnection {
  pageInfo: PageInfo
  edges: Array<ScoreEdge | null>
  aggregate: AggregateScore
}

/*
 * An edge in a connection.

 */
export interface ScoreEdge {
  node: Score
  cursor: String
}

export interface ScorePreviousValues {
  id: UUID
  score: Float
  round: Int
  createdAt: DateTime
  updatedAt: DateTime
}

export interface ScoreSubscriptionPayload {
  mutation: MutationType
  node?: Score | null
  updatedFields?: Array<String> | null
  previousValues?: ScorePreviousValues | null
}

export interface Season {
  id: UUID
  name: String
  description?: String | null
  current: Boolean
  currentRound: Int
  scores?: Array<Score> | null
  leaguesEnrollments?: Array<LeagueEnrollment> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface SeasonConnection {
  pageInfo: PageInfo
  edges: Array<SeasonEdge | null>
  aggregate: AggregateSeason
}

/*
 * An edge in a connection.

 */
export interface SeasonEdge {
  node: Season
  cursor: String
}

export interface SeasonPreviousValues {
  id: UUID
  name: String
  description?: String | null
  current: Boolean
  currentRound: Int
  createdAt: DateTime
  updatedAt: DateTime
}

export interface SeasonSubscriptionPayload {
  mutation: MutationType
  node?: Season | null
  updatedFields?: Array<String> | null
  previousValues?: SeasonPreviousValues | null
}

export interface Team {
  id: UUID
  name: String
  cartolaId: String
  cartolaName: String
  cartolaSlug: String
  avatar?: String | null
  scores?: Array<Score> | null
  owner: User
  enrollments?: Array<TeamEnrollment> | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  deleted: Boolean
}

/*
 * A connection to a list of items.

 */
export interface TeamConnection {
  pageInfo: PageInfo
  edges: Array<TeamEdge | null>
  aggregate: AggregateTeam
}

/*
 * An edge in a connection.

 */
export interface TeamEdge {
  node: Team
  cursor: String
}

export interface TeamEnrollment {
  id: UUID
  fee: Int
  leagueEnrollment: LeagueEnrollment
  team: Team
  updatedAt?: DateTime | null
  createdAt?: DateTime | null
}

/*
 * A connection to a list of items.

 */
export interface TeamEnrollmentConnection {
  pageInfo: PageInfo
  edges: Array<TeamEnrollmentEdge | null>
  aggregate: AggregateTeamEnrollment
}

/*
 * An edge in a connection.

 */
export interface TeamEnrollmentEdge {
  node: TeamEnrollment
  cursor: String
}

export interface TeamEnrollmentPreviousValues {
  id: UUID
  fee: Int
  updatedAt?: DateTime | null
  createdAt?: DateTime | null
}

export interface TeamEnrollmentSubscriptionPayload {
  mutation: MutationType
  node?: TeamEnrollment | null
  updatedFields?: Array<String> | null
  previousValues?: TeamEnrollmentPreviousValues | null
}

export interface TeamPreviousValues {
  id: UUID
  name: String
  cartolaId: String
  cartolaName: String
  cartolaSlug: String
  avatar?: String | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  deleted: Boolean
}

export interface TeamSubscriptionPayload {
  mutation: MutationType
  node?: Team | null
  updatedFields?: Array<String> | null
  previousValues?: TeamPreviousValues | null
}

export interface Transaction {
  id: UUID
  amount: Int
  destination: Wallet
  origin: Wallet
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface TransactionConnection {
  pageInfo: PageInfo
  edges: Array<TransactionEdge | null>
  aggregate: AggregateTransaction
}

/*
 * An edge in a connection.

 */
export interface TransactionEdge {
  node: Transaction
  cursor: String
}

export interface TransactionPreviousValues {
  id: UUID
  amount: Int
  createdAt: DateTime
  updatedAt: DateTime
}

export interface TransactionSubscriptionPayload {
  mutation: MutationType
  node?: Transaction | null
  updatedFields?: Array<String> | null
  previousValues?: TransactionPreviousValues | null
}

export interface User {
  id: UUID
  email: String
  globoToken?: String | null
  password: String
  team: Team
  wallet: Wallet
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
  cards?: Array<Card> | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: UUID
  email: String
  globoToken?: String | null
  password: String
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

export interface Wallet {
  id: UUID
  amount: Int
  user?: User | null
  league?: League | null
  incomingTransactions?: Array<Transaction> | null
  outgoingTransactions?: Array<Transaction> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface WalletConnection {
  pageInfo: PageInfo
  edges: Array<WalletEdge | null>
  aggregate: AggregateWallet
}

/*
 * An edge in a connection.

 */
export interface WalletEdge {
  node: Wallet
  cursor: String
}

export interface WalletPreviousValues {
  id: UUID
  amount: Int
  createdAt: DateTime
  updatedAt: DateTime
}

export interface WalletSubscriptionPayload {
  mutation: MutationType
  node?: Wallet | null
  updatedFields?: Array<String> | null
  previousValues?: WalletPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
Raw JSON value
*/
export type Json = any

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
A type 4 UUID according to IETF RFC 4122.
*/
export type UUID = string