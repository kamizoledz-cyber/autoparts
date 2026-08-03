
# PartMatrix Database Schema

## Main Tables

1. Manufacturers
2. Models
3. Generations
4. Engines
5. Transmissions
6. Markets
7. VehicleVersions
8. Categories
9. SubCategories
10. Parts
11. OEMNumbers
12. AftermarketBrands
13. Compatibility
14. Images
15. Specifications
16. MaintenanceSchedules
17. Recalls
18. Suppliers
19. Users
20. APIKeys
21. 
# Manufacturers

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Unique manufacturer ID |
| name | String | Manufacturer name |
| country | String | Country of origin |
| founded_year | Integer | Company foundation year |
| official_website | String | Official website |
| logo | String | Logo filename or URL |
| status | String | Active / Inactive |

---

# Models

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Unique model ID |
| manufacturer_id | Integer | Linked manufacturer |
| name | String | Model name |
| first_year | Integer | Production start |
| last_year | Integer | Production end |
| segment | String | Vehicle segment |

# Generations

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Generation ID |
| model_id | Integer | Linked model |
| generation_code | String | Example: E210 |
| production_from | Integer | Start year |
| production_to | Integer | End year |

---

# Engines

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Engine ID |
| code | String | Engine code |
| displacement | Decimal | Engine size |
| cylinders | Integer | Number of cylinders |
| fuel_type | String | Petrol / Diesel / Hybrid / EV |
| horsepower | Integer | HP |
| torque | Integer | Nm |

---

# Transmissions

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Transmission ID |
| name | String | CVT / AT / MT / DSG |
| gears | Integer | Number of gears |
| manufacturer | String | Aisin / ZF / Getrag |
