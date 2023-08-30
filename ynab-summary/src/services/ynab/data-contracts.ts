/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ErrorResponse {
  error: ErrorDetail;
}

export interface ErrorDetail {
  id: string;
  name: string;
  detail: string;
}

export interface UserResponse {
  data: {
    user: User;
  };
}

export interface User {
  /** @format uuid */
  id: string;
}

/** The date format setting for the budget.  In some cases the format will not be available and will be specified as null. */
export type DateFormat = {
  format: string;
} | null;

/** The currency format setting for the budget.  In some cases the format will not be available and will be specified as null. */
export type CurrencyFormat = {
  iso_code: string;
  example_format: string;
  /** @format int32 */
  decimal_digits: number;
  decimal_separator: string;
  symbol_first: boolean;
  group_separator: string;
  currency_symbol: string;
  display_symbol: boolean;
} | null;

export interface BudgetSummaryResponse {
  data: {
    budgets: BudgetSummary[];
    default_budget?: BudgetSummary;
  };
}

export interface BudgetSummary {
  /** @format uuid */
  id: string;
  name: string;
  /**
   * The last time any changes were made to the budget from either a web or mobile client
   * @format date-time
   */
  last_modified_on?: string;
  /**
   * The earliest budget month
   * @format date
   */
  first_month?: string;
  /**
   * The latest budget month
   * @format date
   */
  last_month?: string;
  /** The date format setting for the budget.  In some cases the format will not be available and will be specified as null. */
  date_format?: DateFormat;
  /** The currency format setting for the budget.  In some cases the format will not be available and will be specified as null. */
  currency_format?: CurrencyFormat;
  /** The budget accounts (only included if `include_accounts=true` specified as query parameter) */
  accounts?: Account[];
}

export interface BudgetDetailResponse {
  data: {
    budget: BudgetDetail;
    /**
     * The knowledge of the server
     * @format int64
     */
    server_knowledge: number;
  };
}

export type BudgetDetail = BudgetSummary & {
  accounts?: Account[];
  payees?: Payee[];
  payee_locations?: PayeeLocation[];
  category_groups?: CategoryGroup[];
  categories?: Category[];
  months?: MonthDetail[];
  transactions?: TransactionSummary[];
  subtransactions?: SubTransaction[];
  scheduled_transactions?: ScheduledTransactionSummary[];
  scheduled_subtransactions?: ScheduledSubTransaction[];
};

export interface BudgetSettingsResponse {
  data: {
    settings: BudgetSettings;
  };
}

export interface BudgetSettings {
  /** The date format setting for the budget.  In some cases the format will not be available and will be specified as null. */
  date_format: DateFormat;
  /** The currency format setting for the budget.  In some cases the format will not be available and will be specified as null. */
  currency_format: CurrencyFormat;
}

export interface AccountsResponse {
  data: {
    accounts: Account[];
    /**
     * The knowledge of the server
     * @format int64
     */
    server_knowledge: number;
  };
}

export interface AccountResponse {
  data: {
    account: Account;
  };
}

export interface Account {
  /** @format uuid */
  id: string;
  name: string;
  /** The type of account */
  type: AccountType;
  /** Whether this account is on budget or not */
  on_budget: boolean;
  /** Whether this account is closed or not */
  closed: boolean;
  note?: string | null;
  /**
   * The current balance of the account in milliunits format
   * @format int64
   */
  balance: number;
  /**
   * The current cleared balance of the account in milliunits format
   * @format int64
   */
  cleared_balance: number;
  /**
   * The current uncleared balance of the account in milliunits format
   * @format int64
   */
  uncleared_balance: number;
  /**
   * The payee id which should be used when transferring to this account
   * @format uuid
   */
  transfer_payee_id: string | null;
  /** Whether or not the account is linked to a financial institution for automatic transaction import. */
  direct_import_linked?: boolean;
  /** If an account linked to a financial institution (direct_import_linked=true) and the linked connection is not in a healthy state, this will be true. */
  direct_import_in_error?: boolean;
  /**
   * A date/time specifying when the account was last reconciled.
   * @format date-time
   */
  last_reconciled_at?: string | null;
  /**
   * The original debt/loan account balance, specified in milliunits format.
   * @format int64
   */
  debt_original_balance?: number | null;
  debt_interest_rates?: LoanAccountPeriodicValue;
  debt_minimum_payments?: LoanAccountPeriodicValue;
  debt_escrow_amounts?: LoanAccountPeriodicValue;
  /** Whether or not the account has been deleted.  Deleted accounts will only be included in delta requests. */
  deleted: boolean;
}

export interface PostAccountWrapper {
  account: SaveAccount;
}

export interface SaveAccount {
  /** The name of the account */
  name: string;
  /** The type of account */
  type: AccountType;
  /**
   * The current balance of the account in milliunits format
   * @format int64
   */
  balance: number;
}

export type LoanAccountPeriodicValue = Record<string, number>;

/** The type of account */
export enum AccountType {
  Checking = "checking",
  Savings = "savings",
  Cash = "cash",
  CreditCard = "creditCard",
  LineOfCredit = "lineOfCredit",
  OtherAsset = "otherAsset",
  OtherLiability = "otherLiability",
  Mortgage = "mortgage",
  AutoLoan = "autoLoan",
  StudentLoan = "studentLoan",
  PersonalLoan = "personalLoan",
  MedicalDebt = "medicalDebt",
  OtherDebt = "otherDebt",
}

export interface CategoriesResponse {
  data: {
    category_groups: CategoryGroupWithCategories[];
    /**
     * The knowledge of the server
     * @format int64
     */
    server_knowledge: number;
  };
}

export interface CategoryResponse {
  data: {
    category: Category;
  };
}

export type CategoryGroupWithCategories = CategoryGroup & {
  /** Category group categories.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC). */
  categories: Category[];
};

export interface CategoryGroup {
  /** @format uuid */
  id: string;
  name: string;
  /** Whether or not the category group is hidden */
  hidden: boolean;
  /** Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests. */
  deleted: boolean;
}

export interface Category {
  /** @format uuid */
  id: string;
  /** @format uuid */
  category_group_id: string;
  category_group_name?: string;
  name: string;
  /** Whether or not the category is hidden */
  hidden: boolean;
  /**
   * DEPRECATED: No longer used.  Value will always be null.
   * @format uuid
   */
  original_category_group_id?: string | null;
  note?: string | null;
  /**
   * Budgeted amount in milliunits format
   * @format int64
   */
  budgeted: number;
  /**
   * Activity amount in milliunits format
   * @format int64
   */
  activity: number;
  /**
   * Balance in milliunits format
   * @format int64
   */
  balance: number;
  /** The type of goal, if the category has a goal (TB='Target Category Balance', TBD='Target Category Balance by Date', MF='Monthly Funding', NEED='Plan Your Spending') */
  goal_type?: "TB" | "TBD" | "MF" | "NEED" | "DEBT" | null;
  /**
   * A day offset modifier for the goal's due date. When goal_cadence is 2 (Weekly), this value specifies which day of the week the goal is due (0 = Sunday, 6 = Saturday). Otherwise, this value specifies which day of the month the goal is due (1 = 1st, 31 = 31st, null = Last day of Month).
   * @format int32
   */
  goal_day?: number | null;
  /**
   * The goal cadence. Value in range 0-14. There are two subsets of these values which behave differently. For values 0, 1, 2, and 13, the goal's due date repeats every goal_cadence * goal_cadence_frequency, where 0 = None, 1 = Monthly, 2 = Weekly, and 13 = Yearly. For example, goal_cadence 1 with goal_cadence_frequency 2 means the goal is due every other month. For values 3-12 and 14, goal_cadence_frequency is ignored and the goal's due date repeats every goal_cadence, where 3 = Every 2 Months, 4 = Every 3 Months, ..., 12 = Every 11 Months, and 14 = Every 2 Years.
   * @format int32
   */
  goal_cadence?: number | null;
  /**
   * The goal cadence frequency. When goal_cadence is 0, 1, 2, or 13, a goal's due date repeats every goal_cadence * goal_cadence_frequency. For example, goal_cadence 1 with goal_cadence_frequency 2 means the goal is due every other month.  When goal_cadence is 3-12 or 14, goal_cadence_frequency is ignored.
   * @format int32
   */
  goal_cadence_frequency?: number | null;
  /**
   * The month a goal was created
   * @format date
   */
  goal_creation_month?: string | null;
  /**
   * The goal target amount in milliunits
   * @format int64
   */
  goal_target?: number | null;
  /**
   * The original target month for the goal to be completed.  Only some goal types specify this date.
   * @format date
   */
  goal_target_month?: string | null;
  /**
   * The percentage completion of the goal
   * @format int32
   */
  goal_percentage_complete?: number | null;
  /**
   * The number of months, including the current month, left in the current goal period.
   * @format int32
   */
  goal_months_to_budget?: number | null;
  /**
   * The amount of funding still needed in the current month to stay on track towards completing the goal within the current goal period. This amount will generally correspond to the 'Underfunded' amount in the web and mobile clients except when viewing a category with a Needed for Spending Goal in a future month.  The web and mobile clients will ignore any funding from a prior goal period when viewing category with a Needed for Spending Goal in a future month.
   * @format int64
   */
  goal_under_funded?: number | null;
  /**
   * The total amount funded towards the goal within the current goal period.
   * @format int64
   */
  goal_overall_funded?: number | null;
  /**
   * The amount of funding still needed to complete the goal within the current goal period.
   * @format int64
   */
  goal_overall_left?: number | null;
  /** Whether or not the category has been deleted.  Deleted categories will only be included in delta requests. */
  deleted: boolean;
}

export interface SaveCategoryResponse {
  data: {
    category: Category;
    /**
     * The knowledge of the server
     * @format int64
     */
    server_knowledge: number;
  };
}

export interface PayeesResponse {
  data: {
    payees: Payee[];
    /**
     * The knowledge of the server
     * @format int64
     */
    server_knowledge: number;
  };
}

export interface PayeeResponse {
  data: {
    payee: Payee;
  };
}

export interface Payee {
  /** @format uuid */
  id: string;
  name: string;
  /** If a transfer payee, the `account_id` to which this payee transfers to */
  transfer_account_id?: string | null;
  /** Whether or not the payee has been deleted.  Deleted payees will only be included in delta requests. */
  deleted: boolean;
}

export interface PayeeLocationsResponse {
  data: {
    payee_locations: PayeeLocation[];
  };
}

export interface PayeeLocationResponse {
  data: {
    payee_location: PayeeLocation;
  };
}

export interface PayeeLocation {
  /** @format uuid */
  id: string;
  /** @format uuid */
  payee_id: string;
  latitude: string;
  longitude: string;
  /** Whether or not the payee location has been deleted.  Deleted payee locations will only be included in delta requests. */
  deleted: boolean;
}

export interface TransactionsResponse {
  data: {
    transactions: TransactionDetail[];
    /**
     * The knowledge of the server
     * @format int64
     */
    server_knowledge: number;
  };
}

export interface HybridTransactionsResponse {
  data: {
    transactions: HybridTransaction[];
    /**
     * The knowledge of the server
     * @format int64
     */
    server_knowledge?: number;
  };
}

export interface PutTransactionWrapper {
  transaction: SaveTransaction;
}

export interface PostTransactionsWrapper {
  transaction?: SaveTransaction;
  transactions?: SaveTransaction[];
}

export type SaveTransaction = object & SaveTransactionWithOptionalFields;

export interface PatchTransactionsWrapper {
  transactions: SaveTransactionWithId[];
}

export type SaveTransactionWithId = {
  id?: string;
} & SaveTransactionWithOptionalFields;

export interface SaveTransactionWithOptionalFields {
  /** @format uuid */
  account_id?: string;
  /**
   * The transaction date in ISO format (e.g. 2016-12-01).  Future dates (scheduled transactions) are not permitted.  Split transaction dates cannot be changed and if a different date is supplied it will be ignored.
   * @format date
   */
  date?: string;
  /**
   * The transaction amount in milliunits format.  Split transaction amounts cannot be changed and if a different amount is supplied it will be ignored.
   * @format int64
   */
  amount?: number;
  /**
   * The payee for the transaction.  To create a transfer between two accounts, use the account transfer payee pointing to the target account.  Account transfer payees are specified as `tranfer_payee_id` on the account resource.
   * @format uuid
   */
  payee_id?: string | null;
  /**
   * The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if `import_id` is also specified) or (2) a payee with the same name or (3) creation of a new payee.
   * @maxLength 50
   */
  payee_name?: string | null;
  /**
   * The category for the transaction.  To configure a split transaction, you can specify null for `category_id` and provide a `subtransactions` array as part of the transaction object.  If an existing transaction is a split, the `category_id` cannot be changed.  Credit Card Payment categories are not permitted and will be ignored if supplied.
   * @format uuid
   */
  category_id?: string | null;
  /** @maxLength 200 */
  memo?: string | null;
  /** The cleared status of the transaction */
  cleared?: "cleared" | "uncleared" | "reconciled";
  /** Whether or not the transaction is approved.  If not supplied, transaction will be unapproved by default. */
  approved?: boolean;
  /** The transaction flag */
  flag_color?: "red" | "orange" | "yellow" | "green" | "blue" | "purple";
  /**
   * If specified, the new transaction will be assigned this `import_id` and considered "imported".  We will also attempt to match this imported transaction to an existing "user-entered" transation on the same account, with the same amount, and with a date +/-10 days from the imported transaction date.<br><br>Transactions imported through File Based Import or Direct Import (not through the API) are assigned an import_id in the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'. For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.  Using a consistent format will prevent duplicates through Direct Import and File Based Import.<br><br>If import_id is omitted or specified as null, the transaction will be treated as a "user-entered" transaction. As such, it will be eligible to be matched against transactions later being imported (via DI, FBI, or API).
   * @maxLength 36
   */
  import_id?: string | null;
  /** An array of subtransactions to configure a transaction as a split. Updating `subtransactions` on an existing split transaction is not supported. */
  subtransactions?: SaveSubTransaction[];
}

export interface SaveSubTransaction {
  /**
   * The subtransaction amount in milliunits format.
   * @format int64
   */
  amount: number;
  /**
   * The payee for the subtransaction.
   * @format uuid
   */
  payee_id?: string | null;
  /**
   * The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if import_id is also specified on parent transaction) or (2) a payee with the same name or (3) creation of a new payee.
   * @maxLength 50
   */
  payee_name?: string | null;
  /**
   * The category for the subtransaction.  Credit Card Payment categories are not permitted and will be ignored if supplied.
   * @format uuid
   */
  category_id?: string | null;
  /** @maxLength 200 */
  memo?: string | null;
}

export interface SaveTransactionsResponse {
  data: {
    /** The transaction ids that were saved */
    transaction_ids: string[];
    transaction?: TransactionDetail;
    /** If multiple transactions were specified, the transactions that were saved */
    transactions?: TransactionDetail[];
    /** If multiple transactions were specified, a list of import_ids that were not created because of an existing `import_id` found on the same account */
    duplicate_import_ids?: string[];
    /**
     * The knowledge of the server
     * @format int64
     */
    server_knowledge: number;
  };
}

export interface TransactionResponse {
  data: {
    transaction: TransactionDetail;
  };
}

export interface TransactionSummary {
  id: string;
  /**
   * The transaction date in ISO format (e.g. 2016-12-01)
   * @format date
   */
  date: string;
  /**
   * The transaction amount in milliunits format
   * @format int64
   */
  amount: number;
  memo?: string | null;
  /** The cleared status of the transaction */
  cleared: "cleared" | "uncleared" | "reconciled";
  /** Whether or not the transaction is approved */
  approved: boolean;
  /** The transaction flag */
  flag_color?: "red" | "orange" | "yellow" | "green" | "blue" | "purple" | null;
  /** @format uuid */
  account_id: string;
  /** @format uuid */
  payee_id?: string | null;
  /** @format uuid */
  category_id?: string | null;
  /**
   * If a transfer transaction, the account to which it transfers
   * @format uuid
   */
  transfer_account_id?: string | null;
  /** If a transfer transaction, the id of transaction on the other side of the transfer */
  transfer_transaction_id?: string | null;
  /** If transaction is matched, the id of the matched transaction */
  matched_transaction_id?: string | null;
  /** If the transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'. */
  import_id?: string | null;
  /** If the transaction was imported, the payee name that was used when importing and before applying any payee rename rules */
  import_payee_name?: string | null;
  /** If the transaction was imported, the original payee name as it appeared on the statement */
  import_payee_name_original?: string | null;
  /** If the transaction is a debt/loan account transaction, the type of transaction */
  debt_transaction_type?:
    | "payment"
    | "refund"
    | "fee"
    | "interest"
    | "escrow"
    | "balancedAdjustment"
    | "credit"
    | "charge"
    | null;
  /** Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests. */
  deleted: boolean;
}

export type TransactionDetail = TransactionSummary & {
  account_name: string;
  payee_name?: string | null;
  /** The name of the category.  If a split transaction, this will be 'Split'. */
  category_name?: string | null;
  /** If a split transaction, the subtransactions. */
  subtransactions: SubTransaction[];
};

export type HybridTransaction = TransactionSummary & {
  /** Whether the hybrid transaction represents a regular transaction or a subtransaction */
  type: "transaction" | "subtransaction";
  /** For subtransaction types, this is the id of the parent transaction.  For transaction types, this id will be always be null. */
  parent_transaction_id?: string | null;
  account_name: string;
  payee_name?: string | null;
  /** The name of the category.  If a split transaction, this will be 'Split'. */
  category_name?: string;
};

export interface PatchMonthCategoryWrapper {
  category: SaveMonthCategory;
}

export interface SaveMonthCategory {
  /**
   * Budgeted amount in milliunits format
   * @format int64
   */
  budgeted: number;
}

export interface TransactionsImportResponse {
  data: {
    /** The list of transaction ids that were imported. */
    transaction_ids: string[];
  };
}

export interface BulkResponse {
  data: {
    bulk: {
      /** The list of Transaction ids that were created. */
      transaction_ids: string[];
      /** If any Transactions were not created because they had an `import_id` matching a transaction already on the same account, the specified import_id(s) will be included in this list. */
      duplicate_import_ids: string[];
    };
  };
}

export interface BulkTransactions {
  transactions: SaveTransaction[];
}

export interface SubTransaction {
  id: string;
  transaction_id: string;
  /**
   * The subtransaction amount in milliunits format
   * @format int64
   */
  amount: number;
  memo?: string | null;
  /** @format uuid */
  payee_id?: string | null;
  payee_name?: string | null;
  /** @format uuid */
  category_id?: string | null;
  category_name?: string | null;
  /**
   * If a transfer, the account_id which the subtransaction transfers to
   * @format uuid
   */
  transfer_account_id?: string | null;
  /** If a transfer, the id of transaction on the other side of the transfer */
  transfer_transaction_id?: string | null;
  /** Whether or not the subtransaction has been deleted.  Deleted subtransactions will only be included in delta requests. */
  deleted: boolean;
}

export interface ScheduledTransactionsResponse {
  data: {
    scheduled_transactions: ScheduledTransactionDetail[];
    /**
     * The knowledge of the server
     * @format int64
     */
    server_knowledge: number;
  };
}

export interface ScheduledTransactionResponse {
  data: {
    scheduled_transaction: ScheduledTransactionDetail;
  };
}

export interface ScheduledTransactionSummary {
  /** @format uuid */
  id: string;
  /**
   * The first date for which the Scheduled Transaction was scheduled.
   * @format date
   */
  date_first: string;
  /**
   * The next date for which the Scheduled Transaction is scheduled.
   * @format date
   */
  date_next: string;
  frequency:
    | "never"
    | "daily"
    | "weekly"
    | "everyOtherWeek"
    | "twiceAMonth"
    | "every4Weeks"
    | "monthly"
    | "everyOtherMonth"
    | "every3Months"
    | "every4Months"
    | "twiceAYear"
    | "yearly"
    | "everyOtherYear";
  /**
   * The scheduled transaction amount in milliunits format
   * @format int64
   */
  amount: number;
  memo?: string | null;
  /** The scheduled transaction flag */
  flag_color?: "red" | "orange" | "yellow" | "green" | "blue" | "purple" | null;
  /** @format uuid */
  account_id: string;
  /** @format uuid */
  payee_id?: string | null;
  /** @format uuid */
  category_id?: string | null;
  /**
   * If a transfer, the account_id which the scheduled transaction transfers to
   * @format uuid
   */
  transfer_account_id?: string | null;
  /** Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests. */
  deleted: boolean;
}

export type ScheduledTransactionDetail = ScheduledTransactionSummary & {
  account_name: string;
  payee_name?: string | null;
  /** The name of the category.  If a split scheduled transaction, this will be 'Split'. */
  category_name?: string | null;
  /** If a split scheduled transaction, the subtransactions. */
  subtransactions: ScheduledSubTransaction[];
};

export interface ScheduledSubTransaction {
  /** @format uuid */
  id: string;
  /** @format uuid */
  scheduled_transaction_id: string;
  /**
   * The scheduled subtransaction amount in milliunits format
   * @format int64
   */
  amount: number;
  memo?: string | null;
  /** @format uuid */
  payee_id?: string | null;
  /** @format uuid */
  category_id?: string | null;
  /**
   * If a transfer, the account_id which the scheduled subtransaction transfers to
   * @format uuid
   */
  transfer_account_id?: string | null;
  /** Whether or not the scheduled subtransaction has been deleted. Deleted scheduled subtransactions will only be included in delta requests. */
  deleted: boolean;
}

export interface MonthSummariesResponse {
  data: {
    months: MonthSummary[];
    /**
     * The knowledge of the server
     * @format int64
     */
    server_knowledge: number;
  };
}

export interface MonthDetailResponse {
  data: {
    month: MonthDetail;
  };
}

export interface MonthSummary {
  /** @format date */
  month: string;
  note?: string | null;
  /**
   * The total amount of transactions categorized to 'Inflow: Ready to Assign' in the month
   * @format int64
   */
  income: number;
  /**
   * The total amount budgeted in the month
   * @format int64
   */
  budgeted: number;
  /**
   * The total amount of transactions in the month, excluding those categorized to 'Inflow: Ready to Assign'
   * @format int64
   */
  activity: number;
  /**
   * The available amount for 'Ready to Assign'
   * @format int64
   */
  to_be_budgeted: number;
  /**
   * The Age of Money as of the month
   * @format int32
   */
  age_of_money?: number | null;
  /** Whether or not the month has been deleted.  Deleted months will only be included in delta requests. */
  deleted: boolean;
}

export type MonthDetail = MonthSummary & {
  /** The budget month categories.  Amounts (budgeted, activity, balance, etc.) are specific to the {month} parameter specified. */
  categories: Category[];
};
