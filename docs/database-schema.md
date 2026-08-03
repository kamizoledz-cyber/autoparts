
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

# Parts

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Internal PartMatrix ID |
| category_id | Integer | Linked category |
| manufacturer_id | Integer | OEM manufacturer |
| name | String | Part name |
| description | Text | Description |
| oem_number | String | Original OEM number |
| superseded_oem | String | Replaced OEM number |
| aftermarket_number | String | Aftermarket reference |
| weight | Decimal | Weight in kg |
| length | Decimal | Length |
| width | Decimal | Width |
| height | Decimal | Height |
| material | String | Main material |
| warranty | String | Warranty |
| origin_country | String | Country of origin |
| barcode | String | Barcode |
| image | String | Image path |
| datasheet | String | Technical document |
| installation_time | Integer | Minutes |
| difficulty | String | Easy / Medium / Hard |
| status | String | Active / Discontinued |

---

# Compatibility

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Compatibility ID |
| vehicle_version_id | Integer | Linked vehicle version |
| part_id | Integer | Linked part |
| quantity | Integer | Quantity required |
| notes | Text | Notes |
# OEM Numbers

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | OEM ID |
| part_id | Integer | Linked Part |
| oem_number | String | OEM Number |
| manufacturer | String | OEM Manufacturer |
| market | String | Market |
| status | String | Active / Superseded |

---

# Aftermarket Brands

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Brand ID |
| name | String | Brand Name |
| country | String | Country |
| website | String | Website |

---

# Aftermarket Parts

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Record ID |
| part_id | Integer | Original Part |
| brand_id | Integer | Aftermarket Brand |
| reference_number | String | Brand Reference |
| quality | String | OEM / OEM Equivalent / Economy |
