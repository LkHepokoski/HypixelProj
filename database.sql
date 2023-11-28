CREATE TABLE items(
    item_name VARCHAR (50),
    buy_price VARCHAR (50),
    sell_price VARCHAR (50)
);

CREATE TABLE S_Chance(
    floor_chest VARCHAR (50),
    profit_chance VARCHAR (50),
    prof_per_run VARCHAR (50) 
);

CREATE TABLE NonS_Chance(
    floor_chest VARCHAR (50),
    profit_chance VARCHAR (50),
    prof_per_run VARCHAR (50)
);

CREATE TABLE NonS (
    floor_chest VARCHAR(50),
    floor_item VARCHAR(50),
    item_drop_chance VARCHAR (50),
    item_cost VARCHAR(50),
    market_val VARCHAR(50),
    profit VARCHAR(50)
);

CREATE TABLE S (
    floor_chest VARCHAR(50),
    floor_item VARCHAR(50),
    item_drop_chance VARCHAR (50),
    item_cost VARCHAR(50),
    market_val VARCHAR(50),
    profit VARCHAR(50)
);

CREATE TABLE floorDiff (
    floor_chest VARCHAR(50),
    floor_item VARCHAR(50),
    item_drop_chance VARCHAR(50),
    item_cost VARCHAR(50),
    market_val VARCHAR(50),
    profit VARCHAR(50)
);