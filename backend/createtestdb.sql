drop table if exists users;

create table users (
    id Integer PRIMARY KEY AUTOINCREMENT,
    vorname TEXT NOT NULL,
    nachname TEXT NOT NULL
);

insert into users
 (vorname, nachname)
 values ("Florian", "Ingerl"),
        ("Hermann", "Ingerl"),
        ("Michael", "Ende"),
        ("Marcel", "Pagnol"),
        ("Robert", "Lewandowski"),
        ("Thomas", "Mueller");
