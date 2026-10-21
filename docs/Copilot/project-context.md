# Personal Finance Organizer

## Purpose

Personal Finance Organizer is a desktop-first and local-first financial organization platform designed to help individuals and households organize, understand, and manage their finances.

The application focuses on:

- Income
- Expenses
- Accounts
- Budgets
- Cash Flow
- Recurring Financial Obligations

The long-term vision is to evolve into a complete Personal Finance Operating System.

---

# Project Status

## Current Version

v1.0

## Current Phase

System Design

## Repository Status

Completed:

- Git repository initialized
- GitHub repository created
- Initial system design document created
- Repository structure established
- GitHub Copilot CLI configured

Primary design document:

docs/SystemDesign/Personal_Finance_Organizer_System_Design_v1_0_Living_Specification.docx

---

# Product Identity

Personal Finance Organizer is a:

> Personal Financial Organization Assistant

The product is NOT primarily:

- A budgeting application
- A transaction tracker
- A bank aggregator

Budgeting is a feature.

Reporting is a feature.

Financial organization is the primary goal.

---

# Product Vision

Help users organize and understand:

- Income
- Expenses
- Accounts
- Budgets
- Cash Flow

through a guided onboarding process and recurring monthly reviews.

## Long-Term Goals

Future versions may include:

- Net Worth Tracking
- Debt Reduction Planning
- Goal Planning
- Retirement Planning
- Investment Tracking
- Financial Forecasting
- AI-Assisted Financial Insights
- Optional Cloud Synchronization
- Mobile Applications

---

# Core Design Principles

## Local First

User data belongs to the user.

Data remains on the user's machine unless explicitly exported.

The user should always know:

- Where data is stored
- Where backups are stored
- How exports work

---

## Transparency First

Users should always understand:

- Why information is requested
- How information is currently used
- How information may be used in future releases

The application should avoid collecting information without explanation.

---

## Historical Preservation

Financial history is never permanently deleted.

Objects should exist in one of three states:

- Active
- Inactive
- Archived

Historical reporting must remain accurate after items are archived.

---

## Household-Centric Design

The primary organizational unit is:

Household

The application is not designed exclusively around a single user.

Supported scenarios include:

- Individual
- Couple
- Family Household
- Future Multi-Person Households

---

## Guided Financial Discovery

Users should not be forced to manually build their financial structure from scratch.

The software should:

- Suggest common categories
- Guide users through financial discovery
- Remember recurring information
- Reduce repetitive data entry

---

# Ownership Model

Financial objects may belong to:

- Household
- Individual Household Member

Supported ownership applies to:

- Income Sources
- Expenses
- Accounts
- Future Assets
- Future Liabilities

## Examples

### Household Owned

- Mortgage
- Joint Checking
- Internet Bill
- Netflix

### Individual Owned

- Salary
- Student Loan
- Personal Credit Card
- Gym Membership

---

# Monthly Review Philosophy

The Monthly Review is a core feature of the platform.

The application should remember prior information and ask users what changed.

Example:

Instead of:

Enter your electric bill.

Ask:

Last month's electric bill was $142.

Has this amount changed?

The system should:

- Reuse previous data
- Prompt for significant changes
- Minimize repetitive entry
- Preserve historical values

---

# Financial Structure

## Hierarchy

Category
→ Subcategory
→ Financial Item

Example:

Subscriptions
→ Streaming
→ Netflix

---

## Expense Types

### Fixed Recurring

- Mortgage
- Rent
- Netflix
- Spotify

### Variable Recurring

- Electricity
- Water
- Gas
- Cell Phone

### Irregular Recurring

- Property Taxes
- Home Insurance
- Vehicle Registration

### One-Time Expenses

- Vacation
- New Appliance
- Emergency Repairs

---

# Budget Philosophy

Budgets are optional.

The platform should provide value even when users choose not to create budgets.

## MVP

Budgets exist primarily at the Category level.

Future versions may support:

- Subcategory Budgets
- Financial Item Budgets

---

# Reporting Philosophy

Users should be able to answer:

- Where does my money come from?
- Where does my money go?
- What changed this month?
- How are expenses changing over time?

---

# Dashboard Philosophy

The dashboard follows a hybrid approach.

## Summary Section

Display:

- Monthly Income
- Monthly Expenses
- Net Cash Flow
- Budget Status

## Analytics Section

Display:

- Expense Breakdown
- Income Breakdown
- Trend Analysis
- Spending Trends

## Detail Section

Display:

- Categories
- Subcategories
- Financial Items

with drill-down capability.

---

# Current Technology Stack

## Desktop Framework

Tauri

## Frontend

- React
- TypeScript

## Database

SQLite

## ORM

Prisma

## State Management

Zustand

## Visualization

Apache ECharts

---

# Current Development Priorities

## Phase 1 - System Design Expansion

Current areas under design:

1. Database Schema Design
2. Entity Relationship Diagram (ERD)
3. Onboarding Workflow Design
4. Monthly Review Engine Design
5. UI Wireframes
6. Reporting Architecture

---

# Future Roadmap

## Phase 1 - Minimum Viable Product

- Households
- Income
- Expenses
- Accounts
- Budgets
- Reporting

## Phase 2 - Financial Planning

- Net Worth
- Debt Tracking
- Goal Tracking

## Phase 3 - Financial Intelligence

- Forecasting
- AI Insights
- Financial Recommendations

## Phase 4 - Platform Expansion

- Cloud Sync
- Mobile App
- Account Integrations

---

# Development Rules

1. Preserve financial history.
2. Favor simplicity over complexity.
3. Design for future expansion.
4. Prioritize user transparency.
5. Maintain local-first architecture.
6. Avoid unnecessary dependencies.
7. Update system design documentation whenever architecture changes.
8. Record significant architectural decisions through ADRs.
9. Keep the system understandable for future contributors.
10. The living system design document remains the primary source of truth for the project.