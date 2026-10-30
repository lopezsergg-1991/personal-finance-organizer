# Onboarding Tests

## Test 1 - Create Household

Given:
- No existing household data

When:
- User launches application
- User enters a household name
- User clicks Continue

Then:
- Household is created
- Getting Started screen appears
- Household name is displayed

Status:
- PASS

---

## Test 2 - Continue Setup

Given:
- Household exists

When:
- User clicks Continue Setup

Then:
- Add Members screen appears

Status:
- PASS

---

## Test 3 - Add Member

Given:
- User is on Add Members screen

When:
- User enters member name
- User clicks Add Member

Then:
- Member appears in member list

Status:
- PASS

---

## Test 4 - Navigate To Income Setup

Given:
- User is on Add Members screen

When:
- User clicks Continue

Then:
- Income Setup screen appears

Status:
- PASS