import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Database Migrations with Flyway & Liquibase in Java",
  description: "Learn Database Migrations with Flyway and Liquibase in Java. Version control your database schema with automated migration scripts.",
  keywords: ["Flyway Java", "Liquibase", "database migration", "schema versioning", "Spring Boot migrations", "database version control"],
  alternates: { canonical: "/full-stack-java/articles/database-migrations" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/database-migrations",
    title: "Database Migrations: Flyway & Liquibase | CODiiN",
    description: "Version control your database schema with Flyway and Liquibase. Never lose track of database changes.",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Database Migrations with Flyway & Liquibase",
  "description": "Version control your database schema with automated migrations",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-27",
  "dateModified": "2024-12-27"
} as const;

export default function FullStackJavaDatabaseMigrationsPage() {
  return (
    <>
      <JsonLd data={SCHEMA_1} />
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="breadcrumb">
          <div className="container">
            <Link href="/">
              {"Home"}
            </Link>
            <span>
              {"/"}
            </span>
            <Link href="/full-stack-java">
              {"Full Stack Java"}
            </Link>
            <span>
              {"/"}
            </span>
            <span>
              {"Database Migrations"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Database Migrations"}
            </h1>
            <p className="article-subtitle">
              {"Version Control Your Database - Never Lose Track of Schema Changes"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"Why Database Migrations?"}
                </h2>
                <p>
                  {"Imagine this: your code is in Git, perfectly versioned. But your database? Someone ran a SQL script manually in production, another dev has a different schema locally, and no one knows what the \"correct\" state should be."}
                </p>
                <p>
                  {"Database migrations solve this. Every change is a versioned script that runs in order, everywhere."}
                </p>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Reproducible"}
                    </h3>
                    <p>
                      {"Same migrations run on dev, test, and prod. Identical databases everywhere."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Version Controlled"}
                    </h3>
                    <p>
                      {"Database changes tracked in Git alongside your code."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Automated"}
                    </h3>
                    <p>
                      {"Migrations run automatically on application startup or deployment."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Flyway: Simple and Straightforward"}
                </h2>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-core</artifactId>
</dependency>
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-mysql</artifactId>  <!-- or flyway-database-postgresql -->
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.properties
spring.flyway.enabled=true
spring.flyway.locations=classpath:db/migration
spring.flyway.baseline-on-migrate=true
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Flyway Migration Files"}
                </h2>
                <p>
                  {"Create SQL files in "}
                  <code>
                    {"src/main/resources/db/migration/"}
                  </code>
                  {":"}
                </p>
                <div className="code-block">
                  <pre>{`
-- V1__Create_users_table.sql
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- V2__Add_role_to_users.sql
ALTER TABLE users ADD COLUMN role VARCHAR(50) DEFAULT 'USER';

-- V3__Create_orders_table.sql
CREATE TABLE orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'PENDING',
    FOREIGN KEY (user_id) REFERENCES users(id)
);
`}</pre>
                </div>
                <h3>
                  {"Naming Convention"}
                </h3>
                <div className="code-block">
                  <pre>{`
V1__Description.sql      # Versioned migration (runs once)
V1.1__Description.sql    # Sub-version
V2__Another_change.sql   # Next version

R__Repeatable_view.sql   # Repeatable (runs when changed)
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Flyway Commands"}
                </h2>
                <div className="code-block">
                  <pre>{`
# Maven commands
mvn flyway:info      # Show migration status
mvn flyway:migrate   # Run pending migrations
mvn flyway:validate  # Check migrations match database
mvn flyway:repair    # Fix failed migration metadata
mvn flyway:clean     # DROP everything (dangerous!)

# Or configure in pom.xml
<plugin>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-maven-plugin</artifactId>
    <configuration>
        <url>jdbc:mysql://localhost:3306/mydb</url>
        <user>root</user>
        <password>password</password>
    </configuration>
</plugin>
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Liquibase: More Features, More Control"}
                </h2>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>org.liquibase</groupId>
    <artifactId>liquibase-core</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.properties
spring.liquibase.enabled=true
spring.liquibase.change-log=classpath:db/changelog/db.changelog-master.xml
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Liquibase Changelog"}
                </h2>
                <p>
                  {"Create "}
                  <code>
                    {"src/main/resources/db/changelog/db.changelog-master.xml"}
                  </code>
                  {":"}
                </p>
                <div className="code-block">
                  <pre>{`
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
    xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-4.20.xsd">

    <changeSet id="1" author="developer">
        <createTable tableName="users">
            <column name="id" type="BIGINT" autoIncrement="true">
                <constraints primaryKey="true"/>
            </column>
            <column name="name" type="VARCHAR(100)">
                <constraints nullable="false"/>
            </column>
            <column name="email" type="VARCHAR(255)">
                <constraints unique="true" nullable="false"/>
            </column>
        </createTable>
    </changeSet>

    <changeSet id="2" author="developer">
        <addColumn tableName="users">
            <column name="role" type="VARCHAR(50)" defaultValue="USER"/>
        </addColumn>
    </changeSet>

    <changeSet id="3" author="developer">
        <createIndex tableName="users" indexName="idx_users_email">
            <column name="email"/>
        </createIndex>
    </changeSet>

</databaseChangeLog>
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Liquibase with YAML (Cleaner)"}
                </h2>
                <div className="code-block">
                  <pre>{`
# db.changelog-master.yaml
databaseChangeLog:
  - changeSet:
      id: 1
      author: developer
      changes:
        - createTable:
            tableName: users
            columns:
              - column:
                  name: id
                  type: BIGINT
                  autoIncrement: true
                  constraints:
                    primaryKey: true
              - column:
                  name: name
                  type: VARCHAR(100)
                  constraints:
                    nullable: false
              - column:
                  name: email
                  type: VARCHAR(255)
                  constraints:
                    unique: true

  - changeSet:
      id: 2
      author: developer
      changes:
        - addColumn:
            tableName: users
            columns:
              - column:
                  name: created_at
                  type: TIMESTAMP
                  defaultValueComputed: CURRENT_TIMESTAMP
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Rollback Support"}
                </h2>
                <div className="code-block">
                  <pre>{`
<changeSet id="4" author="developer">
    <addColumn tableName="users">
        <column name="phone" type="VARCHAR(20)"/>
    </addColumn>

    <!-- Liquibase can auto-generate rollback for simple changes -->
    <!-- Or define custom rollback: -->
    <rollback>
        <dropColumn tableName="users" columnName="phone"/>
    </rollback>
</changeSet>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# Rollback commands
mvn liquibase:rollback -Dliquibase.rollbackCount=1
mvn liquibase:rollback -Dliquibase.rollbackTag=v1.0
mvn liquibase:rollback -Dliquibase.rollbackDate=2024-01-01
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Flyway vs Liquibase"}
                </h2>
                <div className="comparison-table">
                  <div className="table-wrap">
                    <table>
                      <tr>
                        <th>
                          {"Feature"}
                        </th>
                        <th>
                          {"Flyway"}
                        </th>
                        <th>
                          {"Liquibase"}
                        </th>
                      </tr>
                      <tr>
                        <td>
                          {"Learning Curve"}
                        </td>
                        <td>
                          {"Simple - just SQL files"}
                        </td>
                        <td>
                          {"More complex - XML/YAML/JSON"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Rollback"}
                        </td>
                        <td>
                          {"Manual (paid feature)"}
                        </td>
                        <td>
                          {"Automatic rollback generation"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Database Agnostic"}
                        </td>
                        <td>
                          {"Write SQL per database"}
                        </td>
                        <td>
                          {"Same changelog, multiple DBs"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Best For"}
                        </td>
                        <td>
                          {"Simple projects, SQL-first"}
                        </td>
                        <td>
                          {"Enterprise, multi-database"}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <div className="best-practices">
                  <ul>
                    <li>
                      <strong>
                        {"Never edit migrations:"}
                      </strong>
                      {" Once a migration runs in any environment, treat it as immutable"}
                    </li>
                    <li>
                      <strong>
                        {"Test migrations:"}
                      </strong>
                      {" Run against a copy of production data before deploying"}
                    </li>
                    <li>
                      <strong>
                        {"Keep migrations small:"}
                      </strong>
                      {" One logical change per migration file"}
                    </li>
                    <li>
                      <strong>
                        {"Use descriptive names:"}
                      </strong>
                      {" V3__Add_index_to_users_email.sql"}
                    </li>
                    <li>
                      <strong>
                        {"Include rollback:"}
                      </strong>
                      {" For critical changes, always define how to undo"}
                    </li>
                    <li>
                      <strong>
                        {"Separate DDL and DML:"}
                      </strong>
                      {" Schema changes and data changes in different migrations"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program-cta">
          <div className="container">
            <div className="cta-content">
              <h2>
                {"Master Database "}
                <span className="gradient-text">
                  {"Management"}
                </span>
              </h2>
              <p>
                {"Learn database design, migrations, and best practices."}
              </p>
              <Link href="/full-stack-java" className="btn btn-primary btn-lg">
                {"Explore Full Stack Java Course"}
              </Link>
            </div>
          </div>
        </section>
        <section className="related-articles">
          <div className="container">
            <h2>
              {"Related Articles"}
            </h2>
            <div className="articles-grid">
              <Link href="/full-stack-java/articles/hibernate-jpa" className="article-card">
                <h3>
                  {"Hibernate & JPA"}
                </h3>
                {" "}
                <p>
                  {"ORM and database operations in Java."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/docker-basics" className="article-card">
                <h3>
                  {"Docker"}
                </h3>
                {" "}
                <p>
                  {"Containerize your database for development."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Database Migrations."} />
    </>
  );
}
