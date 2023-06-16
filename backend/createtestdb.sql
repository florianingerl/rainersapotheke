drop table if exists users;
drop table if exists norms;
drop table if exists normpunkte;
drop table if exists auditreports;


create table norms (
    id TEXT PRIMARY KEY NOT NULL,
    beschreibung TEXT NOT NULL
);

insert into norms
 (id, beschreibung )
 values ("GMP-Leitfaden Teil I", "Gute Herstellungspraxis für die Herstellung von Humanarzneimitteln "),
        ("GMP-Leitfaden Teil II", "Gute Herstellungspraxis für WirkstoffeDer Pharmazeutische Unternehmer hat ein geeignetes Si herheitssystem-System");

        
create table normpunkte (
    id Integer PRIMARY KEY AUTOINCREMENT,
    norm_id Integer NOT NULL,
    kapitel Integer NOT NULL,
    unterkapitel Integer NOT NULL,
    unterunterkapitel Integer,
    beschreibung TEXT NOT NULL,
    foreign key (norm_id) references norms (id),
    unique (norm_id, kapitel, unterkapitel, unterunterkapitel)
);

insert into normpunkte 
    (norm_id, kapitel, unterkapitel, unterunterkapitel, beschreibung) values
    ("GMP-Leitfaden Teil I", 1, 1, NULL, "Der Pharmazeutische Unternehmer hat ein geeignetes Sicherheitssystem-System"),
    ("GMP-Leitfaden Teil I", 2, 1, NULL, "Hier funktioniert alles!");


create table auditreports (
    id Integer PRIMARY KEY AUTOINCREMENT,
    author TEXT NOT NULL   
);

create table users (
    id Integer PRIMARY KEY AUTOINCREMENT,
    vorname TEXT NOT NULL,
    nachname TEXT NOT NULL
);

create table behandelt (
    auditreport_id Integer NOT NULL,
    normpunkt_id Integer NOT NULL,
    bewertung INTEGER NOT NULL,
    kommentar TEXT,
    foreign key (auditreport_id) references auditreports (id),
    foreign key (normpunkt_id) references normpunkte (id),
    PRIMARY key (auditreport_id, normpunkt_id)
);

insert into users
 (vorname, nachname)
 values ("Florian", "Ingerl"),
        ("Hermann", "Ingerl"),
        ("Michael", "Ende"),
        ("Marcel", "Pagnol"),
        ("Robert", "Lewandowski"),
        ("Thomas", "Mueller");
