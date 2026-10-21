# Entity Relationship Diagram (ERD)

## MVP ERD

Household
│
├── Members
│
├── Categories
│
├── FinancialItems
│       │
│       └── MonthlyValues
│
└── MonthlyReviews

---

Household (1)
    |
    |----< Member (Many)

Household (1)
    |
    |----< Category (Many)

Category (1)
    |
    |----< FinancialItem (Many)

FinancialItem (1)
    |
    |----< MonthlyValue (Many)

Household (1)
    |
    |----< MonthlyReview (Many)