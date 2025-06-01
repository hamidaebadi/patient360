# Database Structure Overview

This document provides an overview of the database structure for the **Patient Monitoring Web Application**. It serves as a guide for new developers to understand how the system is modeled using PostgreSQL and how various components relate to each other.

---

## Entities and Relationships

### 1. Users

* **Purpose**: Represents all types of users in the system.
* **Columns**:

  * `id`: UUID, Primary Key
  * `email`: Unique, for login
  * `password_hash`: Encrypted password
  * `role`: ('healthcare\_expert', 'patient')

### 2. Healthcare Expert Profiles

* **Purpose**: Stores profile details for healthcare experts.
* **Columns**:

  * `id`: UUID, Primary Key
  * `user_id`: FK → users.id
  * `name`: Full name
  * `specialty`: Area of expertise

### 3. Patient Profiles

* **Purpose**: Stores profile details for patients.
* **Columns**:

  * `id`: UUID, Primary Key
  * `user_id`: FK → users.id
  * `full_name`: Full name of the patient
  * `birth_date`: Date of birth
  * `gender`: Gender

### 4. Monitoring

* **Purpose**: Represents the monitoring relationship between healthcare experts and patients.
* **Columns**:

  * `expert_id`: FK → healthcare\_expert\_profiles.id
  * `patient_id`: FK → patient\_profiles.id
  * `start_date`: Timestamp when monitoring started
  * `is_active`: Boolean to represent if the monitoring is ongoing

### 5. Health Metrics

Each type of health metric is stored in its own table to accommodate different structures:

#### a. Heart Rate Metrics

* **Columns**:

  * `id`: UUID, Primary Key
  * `patient_id`: FK → patient\_profiles.id
  * `timestamp`: Timestamp of the measurement
  * `bpm`: Beats per minute

#### b. Blood Pressure Metrics

* **Columns**:

  * `id`: UUID, Primary Key
  * `patient_id`: FK → patient\_profiles.id
  * `timestamp`: Timestamp of the measurement
  * `systolic`: mmHg
  * `diastolic`: mmHg

*Additional metric tables can be created in a similar manner, e.g., glucose\_levels, weight\_metrics, temperature\_metrics, etc.*

---

## ER Diagram (Textual Overview)

```
users ─────────┬──────────> healthcare_expert_profiles
               │
               └──────────> patient_profiles

healthcare_expert_profiles ────┬─────────────┐
                               │             │
                             monitoring     monitoring
                               │             │
patient_profiles <────────────┘             │

patient_profiles ─────────────> heart_rate_metrics
patient_profiles ─────────────> blood_pressure_metrics
```

---

## dbdiagram.io Representation

You can visualize this schema using [https://dbdiagram.io](https://dbdiagram.io) with the following DSL:

```dbml
Table users {
  id uuid [pk]
  email varchar [unique, not null]
  password_hash varchar
  role varchar // 'healthcare_expert' or 'patient'
}

Table healthcare_expert_profiles {
  id uuid [pk]
  user_id uuid [ref: > users.id]
  name varchar
  specialty varchar
}

Table patient_profiles {
  id uuid [pk]
  user_id uuid [ref: > users.id]
  full_name varchar
  birth_date date
  gender varchar
}

Table monitoring {
  expert_id uuid [ref: > healthcare_expert_profiles.id]
  patient_id uuid [ref: > patient_profiles.id]
  start_date timestamp
  is_active boolean
  Note: "Many-to-many between healthcare experts and patients"
}

Table heart_rate_metrics {
  id uuid [pk]
  patient_id uuid [ref: > patient_profiles.id]
  timestamp timestamp
  bpm int
}

Table blood_pressure_metrics {
  id uuid [pk]
  patient_id uuid [ref: > patient_profiles.id]
  timestamp timestamp
  systolic int
  diastolic int
}
```

---

## Notes

* Keep metric tables separate to allow future expansion (different fields per metric type).
* Monitoring relationship supports **many-to-many** mapping and allows toggling the active status.
* The `users` table provides centralized access control and authentication support.

For further enhancements, consider adding audit logs, alerts, chart data caching, and trend analysis summaries.
