```text
                                     Practical No. 1

Aim: Create a new user & grant privileges of creating session, table & view
to this new user also check connect or not.
  -- Create user

  SQL> create user Prerna identified by prerna123;

  User created.

  -- Grant privileges to user

  SQL> grant create table, create session, create view to Prerna;

  Grant succeeded

  -- Connect user

  SQL> CONNECT Prerna/prerna123;

  Connected.
                                 Practical No. 2
Aim: Connect to the new user, assign a tablespace, verify it works, create a table,
and insert data.
-- Tablespace privilege
SQL> ALTER USER Prerna
 2      DEFAULT TABLESPACE users
 3      TEMPORARY TABLESPACE temp
 4      QUOTA 10M ON users;
User altered.
-- Connect user
SQL> conn
Enter user-name: Prerna
Enter password:
Connected.
-- Create table
SQL> CREATE TABLE employees (
 2      emp_id NUMBER PRIMARY KEY,
 3      emp_name VARCHAR2(50),
 4      salary NUMBER(10,2)
 5 );
Table created.
-- Insert data in table
SQL> INSERT INTO employees VALUES (1, 'John Doe', 50000);
1 row created.
SQL> INSERT INTO employees VALUES (2, 'Jane Smith', 60000);
1 row created.
-- Show data
SQL> SELECT * FROM employees;
   EMP_ID EMP_NAME                                                SALARY
---------- -------------------------------------------------- ----------
      1 John Doe                                        50000
      2 Jane Smith                                       60000
                                 Practical No. 3
Aim: Create a new role named manager for with same privileges. Grant this role
new user. Then change the password of newly created user.
-- Create role

SQL> create role manager;

Role created.

-- Grant privileges to role

SQL> grant create table, create view to manager;

Grant succeeded.

-- Assign role to user

SQL> grant manager to Prerna;

Grant succeeded.

-- Chage password

SQL> password

    Changing password for PRERNA

    Old password:

    New password:

    Retype new password:

Password changed
                                Practical No. 4
Aim: Revoke the privileges from role manager. Revoke role from user then delete
that user.

-- Revoke privileges

SQL> Revoke create table, create view from manager;

Revoke succeeded.

-- Revoke role from user

SQL> Revoke manager from Prerna;

Revoke succeeded.

-- Delete user

SQL> drop user Prerna;

User dropped.
                                  Practical No. 5
Aim: Create a tablespace named “Std_student” with file name
“Stu_datafile.dbf” having size of 10mb.
      -- Grant privilege

      SQL> GRANT CREATE TABLESPACE TO Prerna;

      Grant succeeded.

      -- Create tablespace

      SQL> CREATE TABLESPACE Std_student

       2 DATAFILE 'Stu_datafile.dbf'

       3 SIZE 10M;

     Tablespace created.
                                    Practical No. 6
Aim: Create a tablespace named “ts_mydemo” with two datafile named
“ts_mydemo01.dbf” & “ts_mydemo02.dbf “having size of 50mb and 64mb
respectively. Make the tablespace auto extendable and limit auto extending to
size of 2048mb.In auto extending, next extend should of 32mb.
    -- Create two tablespace

SQL> CREATE TABLESPACE ts_mydemo

2 DATAFILE 'mydemo01.dbf' SIZE 50M

    AUTOEXTEND ON NEXT 32M

    MAXSIZE 2048M,

3         'mydemo02.dbf' SIZE 64M

    AUTOEXTEND ON NEXT 32M

    MAXSIZE 2048M;

    Tablespace created.
                                         Practical No. 7
Aim: Alter the last datafile “ts_mydemo01.dbf” so that its size will
automatically extend by 5mb& limit its size to 500mb.
SQL> SELECT file_id, file_name
  2 FROM dba_data_files
  3 WHERE tablespace_name = 'TS_MYDEMO';
  FILE_ID       FILE_NAME
--------------------------------------------------------------------------------
      10
C:\ORACLEXE\APP\ORACLE\PRODUCT\11.2.0\SERVER\DATABASE\MYDEMO01.
DBF
      11
C:\ORACLEXE\APP\ORACLE\PRODUCT\11.2.0\SERVER\DATABASE\MYDEMO02.
DBF
-- Alter Datafile

SQL> ALTER DATABASE

2 DATAFILE
'C:\ORACLEXE\APP\ORACLE\PRODUCT\11.2.0\SERVER\DATABASE\
MYDEMO01.DBF'

3 AUTOEXTEND ON

4 NEXT 5M

5 MAXSIZE 500M;

Database altered.
                                   Practical No. 8

Aim: Create temporary table space with size of 5mb which will be automatically
increase on demand.
 -- create tablespace

 SQL> create temporary tablespace temp_demo

 2 temp file 'temp01.dbf' size 5m auto extend on;

 Tablespace created.
                                  Practical No. 9

Aim: Add new Redo log file of size 10mb to existing database.
SQL> alter database add logfile 'c:/program files/oracle/log5.ora' size 10m;


Database altered.
                                                   Practical No. 10

   Aim: Display the list of all Redo log files and control files.

SQL> select * from v$logfile;
    GROUP# STATUS TYPE
---------- ------- -------
MEMBER
----------------------------------------------------------------------------------------------------------------------------------
IS_
---
       2       ONLINE
C:\ORACLEXE\APP\ORACLE\FLASH_RECOVERY_AREA\XE\ONLINELOG\O1_MF_2_MM8H1MLH_.LO
G
YES

    1 STALE ONLINE
C:\ORACLEXE\APP\ORACLE\FLASH_RECOVERY_AREA\XE\ONLINELOG\O1_MF_1_MM8H1MHF_.LO

SQL> select * from v$controlfile;
                                          Practical No. 11
  Aim: Display the list, datafiles, tablespace names & size in MB.
  SQL> clear breaks;
  breaks cleared
  SQL> set linesize 130
  SQL> set pagesize 60
  SQL> break on tablespace_name skip 1
  SQL> col tablespace_name format a15
  SQL> col file_name format a50
  SQL> col tablespace_kb heading 'TABLESPACE|TOTAL_KB'
  SQL> col kbytes_free heading 'TOTAL FREE|KBYTES'
  SQL> select file_name,tablespace_name, ROUND(bytes/1024000) mb
  2 from dba_data_files order by 1;

FILE_NAME                                                          TABLESPACE_NAME   MB
-------------------------------------------------- --------------- ----------
C:\ORACLEXE\ORADATA\DATAFILE.DBF                                        TESTING      10

C:\ORACLEXE\ORADATA\TS_MYDEMO01.DBF                          TS_MYDEMO               51
C:\ORACLEXE\ORADATA\TS_MYDEMO02.DBF                                                  66

C:\ORACLEXE\ORADATA\XE\DATAFILE.DBF                          DBA_TABLESPACE          10

C:\ORACLEXE\ORADATA\XE\SYSAUX.DBF                            SYSAUX                  451

C:\ORACLEXE\ORADATA\XE\SYSTEM.DBF                            SYSTEM                  348

C:\ORACLEXE\ORADATA\XE\UNDO.DBF                              UNDO                    92

C:\ORACLEXE\ORADATA\XE\USERS.DBF                             USERS                   102

  8 rows selected.
                                 Practical no. 12
Aim: Create rollback segment in separate tablespace with proper
storage option.
1 Create tablespace small_rollbacks
2 datafile 'c:program files/oracle/small_rollbacks.dbf' size 20m reuse
 3* default storage(initial 250k next 250k maxextents 20)

Tablespace created.
SQL> alter session set undo_suppress_errors=true;

Session altered.
SQL> create rollback segment small_rollbacks
2 tablespace small_rollbacks
3 storage(initial 250k next 250k maxextents 20);


Rollback segment created.
                                Practical no. 13

Aim: Create a 3 new abstract datatype as given below
1. NAME_TYPE(F_NAME,M_NAME,L_NAME)
2. POST_TYPE(MAIN,SFX)
3. ADDR_TYPE(STREET,CITY,STATE,POSTCODE)


 SQL> create type name_type as object(f_namevarchar(15),
2 m_init char(1),
 3 l_namevarchar2(20));

Type created.
SQL> create type post_type as object(main integer,sfx integer);


Type created.
SQL> create type add_type as object(
2 street varchar2(35),
3 cityvarchar(15),state char(2),postcode post_type);


Type created.
                                  Practical no. 14
Aim: Create a table studinfo having column name,rollno,phy,maths,comp,total
and percentage. Write a trigger to autometicallycalculate students total marks
and percentage of students while insertion.
  SQL> create table studinfo
  2 (name varchar2(20),
  3 rollno number(3),
  4 phy number(3),
  5 math number(3),
  6 comp number(3),
  7 total number(5),
  8 per number(3,2));
  Table created.

  SQL> create or replace trigger totper
  2 before insert on studinfo
  3 for each row
  4 begin
  5 :new.total:=:new.math+:new.phy+:new.comp;
  6 :new.per:=(:new.total/300)*100;
  7 endtotper;
  8/
  Trigger created.
    SQL>insert into studinfo(name,rollno,phy,math,comp)
  2 values('sid',1,7,7,7)/
1 row created.
SQL> select * from studinfo;

NAME               ROLLNO      PHY       MATH   COMP   TOTAL


      PER


sid               1       7    7     7     21
      7
                                  Practical no. 15

Aim: Write a SQL query to display the following data information
.1)Name of database
 2) Database startup time
 3) Database size information(database size,used space, free Space)
 SQL> select name from v$database;

 NAME


 ORCL
 SQL>select to_char(startup_time,'hh24:mi dd-mm-yy')"startup time"
2 fromv$instance;
startup time


11:10 06-10-18

1 select round(sum(used.bytes)/1024/1024/1024)|| 'gb' "database size",
 2 round(sum(used.bytes)/1024/1024) || 'mb' "used space",
3 round(free.p/1024/1024) || 'mb' "free space"
4 from(select bytes
5 fromv$datafile
6 union all
7 select bytes
8 from v$tempfile
9 union all
10 select bytes
11 fromv$log) used,
12 (select sum(bytes)as p
13 fromdba_free_space)free
14* group by free.p
SQL> /


database size     used space     free space


1gb             1104mb         186mb
```
