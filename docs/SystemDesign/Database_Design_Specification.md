# Database Design Specification

## Purpose

This document defines the database design for the Personal Finance Organizer project.

The goal of this document is to establish:

- Core data entities
- Relationships between entities
- Ownership rules
- Lifecycle management
- Historical preservation strategy

This document serves as the foundation for:

- SQLite schema design
- Prisma schema design
- Entity Relationship Diagrams (ERD)
- Future reporting architecture
- Future application development

---

# Design Philosophy

The database should prioritize:

1. Simplicity
2. Extensibility
3. Data Integrity
4. Historical Preservation

The database should support future functionality without prematurely implementing unnecessary complexity.

Examples of future functionality include:

- Net worth tracking
- Debt reduction planning
- Investment tracking
- Financial forecasting
- AI-assisted financial insights

---

# Data Ownership Model

The database is designed for a single household.

MVP Constraint:

- One database contains exactly one household.

A household may contain one or more members.

Examples:

- Individual
- Couple
- Family Household

A member belongs to exactly one household.

Multi-household membership is out of scope for MVP.

---

# MVP Database Scope

The MVP database will initially focus on the minimum entities required to support:

- Household Creation
- Member Management
- Income Tracking
- Expense Tracking
- Monthly Reviews
- Reporting

The following entities are required for MVP:

- Household
- Member
- Category
- FinancialItem
- MonthlyValue
- MonthlyReview

The following entities are deferred:

- Account
- Budget
- AuditHistory
- Assets
- Liabilities
- Goals

---

# Core Design Principles

## Historical Preservation

Financial history must never be permanently deleted.

Objects should transition through states:

- Active
- Inactive
- Archived

Historical reports must remain accurate after archiving.

---

## Household-Centric Design

The Household is the root entity of the system.

All major objects are owned directly or indirectly by a Household.

Examples:

- Members
- Accounts
- Income Sources
- Expenses
- Budgets
- Reviews

---

## Ownership Flexibility

Financial objects may belong to:

- Household
- Individual Member

Examples:

Household-Owned:

- Mortgage
- Joint Checking
- Internet Bill

Member-Owned:

- Salary
- Student Loan
- Personal Credit Card

---

# Ownership Rules

## Financial Item Ownership

Every Financial Item has exactly one owner.

Valid owner types:

- Household
- Member

A financial item may not belong to multiple owners.

---

## Household-Owned Financial Items

Examples:

- Mortgage
- Rent
- Internet
- Netflix
- Electricity
- Joint Insurance Policy

Household-owned items are counted exactly once in household-level reporting.

Household-owned items must never be duplicated across members.

---

## Member-Owned Financial Items

Examples:

- Gym Membership
- Student Loan
- Personal Credit Card
- Individual Insurance Policy

Member-owned items belong exclusively to a specific household member.

---

## Reporting Rules

Household reports include:

- Household-owned items
- Member-owned items

Member reports include only:

- Items owned by that member

Example:

Mortgage = $3,000

Sergio Gym = $50

Partner Gym = $45

---

# Core Entities

The MVP includes the following primary entities:

- Household
- Member
- Account
- IncomeSource
- Category
- Subcategory
- FinancialItem
- Budget
- MonthlyReview
- MonthlyValue
- AuditHistory

These entities will be defined in detail in subsequent sections.

---

# Entity Specifications

The following sections define the detailed design of each core entity.

For each entity the following information will be documented:

- Purpose
- Required Fields
- Optional Fields
- Relationships
- Lifecycle
- Ownership Rules
- Reporting Impact
- Future Expansion Considerations

The order of specification is:

1. Household
2. Member
3. Account
4. IncomeSource
5. Category
6. Subcategory
7. FinancialItem
8. Budget
9. MonthlyReview
10. MonthlyValue
11. AuditHistory

---

# Entity 1 - Household

## Purpose

The Household entity represents the root financial container within the system.

Every database contains exactly one Household.

All financial data ultimately belongs to a Household.

Examples:

- Individual Household
- Couple Household
- Family Household

---

## Required Fields

Id
UUID
Primary Key

Name
String
Household Name

Status
Enum

Values:
- Active
- Inactive
- Archived

CreatedDate
DateTime

UpdatedDate
DateTime

---

## Optional Fields

Description
String

Notes
String

DefaultCurrency
String

ArchivedDate
DateTime

---

## Relationships

Household

- Members
- Categories
- FinancialItems
- MonthlyValues
- MonthlyReviews

---

## Rules

A database contains exactly one Household.

Deleting a Household is not supported.

Households may be archived.

All reporting originates from the Household level.

---

# Entity 2 - Member

## Purpose

Represents an individual participating in the household.

Members enable ownership of income and expenses.

Examples:

- Sergio
- Partner
- Child (future)

---

## Required Fields

Id
UUID

HouseholdId
UUID

Name
String

Status
Enum

Values:
- Active
- Inactive
- Archived

CreatedDate
DateTime

UpdatedDate
DateTime

---

## Optional Fields

Notes
String

ArchivedDate
DateTime

---

## Relationships

Member

- Household
- FinancialItems

---

## Rules

A Member belongs to exactly one Household.

A Member may own FinancialItems.

A Member may own Income sources.

Member-owned FinancialItems are included in Household reports.

Member-owned FinancialItems appear only in the owning Member's reports.

---

# Entity 3 - Category

## Purpose

Represents a high-level grouping of financial items.

Examples:

- Housing
- Food
- Transportation
- Healthcare
- Subscriptions

---

## Required Fields

Id
UUID

Name
String

Status
Enum

CreatedDate
DateTime

UpdatedDate
DateTime

---

## Optional Fields

Description
String

Notes
String

ArchivedDate
DateTime

---

## Relationships

Category

- FinancialItems

---

## Rules

Categories may be system-defined or user-defined.

Categories can be archived.

Financial history must remain intact when categories are archived.

---

# Entity 4 - FinancialItem

## Purpose

Represents an actual income source or expense.

Examples:

- Mortgage
- Netflix
- Salary
- Dividends
- Gym Membership

---

## Required Fields

Id
UUID

CategoryId
UUID

Name
String

Type
Enum

Values:
- Income
- Expense

OwnerType
Enum

Values:
- Household
- Member

OwnerId
UUID

Status
Enum

CreatedDate
DateTime

UpdatedDate
DateTime

---

## Optional Fields

Description
String

Notes
String

ArchivedDate
DateTime

---

## Relationships

FinancialItem

- Category
- MonthlyValues

---

## Rules

Every FinancialItem has exactly one owner.

A FinancialItem may represent:

- Recurring Income
- One-Time Income
- Recurring Expense
- One-Time Expense

Household-owned items must never be duplicated across household members.

---

# Entity 5 - MonthlyValue

## Purpose

Stores monthly financial values for a FinancialItem.

This entity preserves historical financial information.

Examples:

Mortgage

Jan 2027 = 3000

Feb 2027 = 3000

Mar 2027 = 3000

Electric Bill

Jan 2027 = 120

Feb 2027 = 180

Mar 2027 = 145

---

## Required Fields

Id
UUID

FinancialItemId
UUID

Month
Date

Amount
Decimal

CreatedDate
DateTime

---

## Optional Fields

Notes
String

Examples:

- Hosted family dinner
- New streaming subscription
- Winter heating costs

---

## Relationships

MonthlyValue

- FinancialItem
- MonthlyReview

---

## Rules

Historical values are never modified or deleted.

Corrections should be tracked through updates.

MonthlyValues are the foundation for reporting and future forecasting.

---

# Entity 6 - MonthlyReview

## Purpose

Represents a completed monthly financial review.

Examples:

January 2027 Review

February 2027 Review

March 2027 Review

---

## Required Fields

Id
UUID

HouseholdId
UUID

ReviewMonth
Date

Status
Enum

Values:
- InProgress
- Completed

CreatedDate
DateTime

CompletedDate
DateTime

---

## Optional Fields

Notes
String

Examples:

- Large holiday spending
- Annual bonus received
- Vehicle repairs this month

---

## Relationships

MonthlyReview

- Household
- MonthlyValues

---

## Rules

Reviews occur monthly.

Users may revisit completed reviews.

Reviews should preserve historical context.

Monthly Reviews drive the primary workflow of the application.