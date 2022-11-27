-- Create these tables and sample data from top to bottom

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "user_access" INT DEFAULT 1,
    "first_name" VARCHAR (100),
    "last_name" VARCHAR (100),
    "phone_number" varchar(20)
);

-- Sample users with different authorization levels

INSERT INTO "user" ("username", "password", "user_access")
VALUES ('admin', '123456', 3), ('manager', '123456', 2), ('employee', '123456', 1);

CREATE TABLE "facility_details" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "facility_name" VARCHAR (255),
    "street" VARCHAR (255),
    "city" VARCHAR (255),
    "state" VARCHAR (2),
    "zip" VARCHAR (11),
    "notes" VARCHAR (1000)
);

-- Sample facilities with default connection set to user with id = 1
-- This will break if you have to delete/modify the database and 
-- don't restart it from scratch

INSERT INTO "facility_details" ("user_id", "facility_name")
VALUES (1, 'XYZ Pools'), (1, 'ABC Facility');

CREATE TABLE "pool_type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (100)
);

-- Hard-coded values for pool_types
-- We will provide this to users and it will populate a dropdown menu

INSERT INTO "pool_type" ("type")
VALUES ('swimming_pool'), ('therapy_pool'), ('baby_pool'), ('hot_tub'), ('splash_pad');

CREATE TABLE "pool_details" (
    "id" SERIAL PRIMARY KEY,
    "facility_id" INT REFERENCES "facility_details",
    "name" VARCHAR (100),
    "type_id" INT REFERENCES "pool_type",
    "volume" INT
);

-- Sample pools for facilities with id = 1 and = 2

INSERT INTO "pool_details" ("facility_id", "name", "type_id", "volume")
VALUES (1, 'Swimming Pool', 1, 800), (1, 'Small Hot Tub', 4, 200), (2, 'Therapy Pool A', 2, 400), (2, 'Therapy Pool B', 2, 400);

CREATE TABLE "bather_comfort_type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (100)
);

CREATE TABLE "visible_algae_type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (100)
);

CREATE TABLE "water_clarity_type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (100)
);

CREATE TABLE "water_color_type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (100)
);

CREATE TABLE "surface_stains_type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (100)
);

CREATE TABLE "equipment_problems_type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (100)
);

-- Hard coded values that will popuate checkbox and radio options for users

INSERT INTO "bather_comfort_type" ("type")
VALUES ('eye_skin_irritation'), ('chlorine_smell');

INSERT INTO "visible_algae_type" ("type")
VALUES ('green_haze'), ('green_black_spots'), ('yellow_brown_patches'), ('pink_slime');

INSERT INTO "water_clarity_type" ("type")
VALUES ('cloudy_hazy'), ('dirty_muddy');

INSERT INTO "water_color_type" ("type")
VALUES ('green'), ('blue_green'), ('purple'), ('brown');

INSERT INTO "surface_stains_type" ("type")
VALUES ('blue_green'), ('rust_brown_yellow_brown'), ('black_brown'), ('gray');

INSERT INTO "equipment_problems_type" ("type")
VALUES ('corrosion_metal_pitting_plaster'), ('scale_forming_along_waterline'), ('dark_oily_ring_along_waterline'), ('water_foaming');

CREATE TABLE "chemical_input" (
    "id" SERIAL PRIMARY KEY,
    "pool_id" INT REFERENCES "pool_details",
    "recorded_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "ph" NUMERIC,
    "free_cl" NUMERIC,
    "combined_cl" NUMERIC,
    "total_cl" NUMERIC,
    "acid" NUMERIC,
    "base" NUMERIC,
    "alkalinity" NUMERIC,
    "hardness" NUMERIC,
    "cyanuric_acid" NUMERIC,
    "copper" NUMERIC,
    "iron" NUMERIC,
    "phosphates" NUMERIC,
    "tds" NUMERIC,
    "temperature" NUMERIC,
    "borate" NUMERIC,
    "salinity" NUMERIC,
    "bather_comfort_id" INT REFERENCES "bather_comfort_type",
    "visible_algae_id" INT REFERENCES "visible_algae_type",
    "water_clarity_id" INT REFERENCES "water_clarity_type",
    "water_color_id" INT REFERENCES "water_color_type",
    "surface_stains_id" INT REFERENCES "surface_stains_type",
    "equipment_problems_id" INT REFERENCES "equipment_problems_type",
    "notes" VARCHAR (1000)
);

-- Sample water testing records

INSERT INTO "chemical_input" ("pool_id", "ph", "water_color_id", "notes")
VALUES (1, 7.4, 2, 'Water is a little bit blue-green, will need to monitor and apply chemical');

INSERT INTO "chemical_input" ("pool_id", "ph", "temperature", "water_color_id", "notes")
VALUES (1, 7.5, 82, 1, 'Water is just green now');