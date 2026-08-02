# GAPHub Database Design

## Main Tables

### Manufacturers

Stores vehicle manufacturers.

Examples:

- Toyota
- BMW
- Mercedes-Benz
- Hyundai
- Renault
- Ford
- Volkswagen
- Audi
- Skoda
- Seat
- Peugeot
- Citroën

---

### Vehicles

Contains:

- Make
- Model
- Year
- Engine
- Fuel Type
- Drive Type

---

### Parts

Contains:

- OEM Number
- Part Name
- Description
- Category
- Manufacturer
- Brand

---

### Cross References

Contains equivalent part numbers from different manufacturers.

Example:

OEM

↓

Bosch

↓

Denso

↓

MANN

↓

Mahle

↓

Valeo

---

### Tire Database

Contains:

- Tire Width
- Aspect Ratio
- Rim Size
- Diameter
- Speed Rating
- Load Index
- DOT

---

### Maintenance

Contains:

- Oil Capacity
- Oil Grade
- Coolant
- Brake Fluid
- Transmission Oil
- Spark Plug
- Filters
- Service Interval
