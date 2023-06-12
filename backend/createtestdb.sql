drop table if exists users;
drop table if exists norms;
drop table if exists normpunkte;

create table norms (
    id TEXT PRIMARY KEY NOT NULL,
    beschreibung TEXT NOT NULL
);

insert into norms
 (id, beschreibung )
 values ("GMP-Leitfaden Teil I", "Gute Herstellungspraxis für die Herstellung von Humanarzneimitteln "),
        ("GMP-Leitfaden Teil II", "Gute Herstellungspraxis für WirkstoffeDer Pharmazeutische Unternehmer hat ein geeignetes Si herheitssystem-System");

        
create table normpunkte (
    norm_id Integer NOT NULL,
    kapitel Integer NOT NULL,
    unterkapitel Integer NOT NULL,
    unterunterkapitel Integer,
    beschreibung TEXT NOT NULL,
    foreign key (norm_id) references norms (id),
    PRIMARY key (norm_id, kapitel, unterkapitel, unterunterkapitel)
);

insert into normpunkte 
    (norm_id, kapitel, unterkapitel, unterunterkapitel, beschreibung) values
    ("GMP-Leitfaden Teil I", 1, 1, NULL, "Der Pharmazeutische Unternehmer hat ein geeignetes Sicherheitssystem-System"),
    ("GMP-Leitfaden Teil I", 2, 1, NULL, "Hier funktioniert alles!");

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
