```text
ADVANCE DATABASE MANAGEMENT SYSTEM AND ADMINISTRATION
                          PRACTICAL LIST 2026-27

   1. Create a new user & grant privileges of creating session, table
      & view to this new user also check connect or not.
   2. Connect to the new user, assign a tablespace, verify it works, create a
      table, and insert data.
   3. Create a new role named manager for with same privileges. Grant this
      role new user. Then change the password of newly created user.
   4. Revoke the privileges from role manager. Revoke role from user then
      delete that user.
   5. Create a tablespace named “P_student” with file name
      “Stu_datafile.dbf” having size of 10mb.

   6. Create a tablespace named “ts_mydemo” with two datafile
      named “ts_mydemo01.dbf” & “ts_mydemo02.dbf “having size
      of 50mb and 64mb respectively. Make the tablespace auto
      extendable and limit auto extending to size of 2048mb.In auto
      extending, next extend should of 32mb.
   7. Alter the last datafile “ts_mydemo01.dbf” so that its size will
      automatically       extend by 5mb& limit its size to 500mb.
   8. Create temporary table space with size of 5mb which will be
      automatically increase on demand.
   9. Add new Redo log file of size 10mb to existing database.
   10. Display the list of all Redo log files and Control log file.
   11. Display the list, datafiles, tablespace names & size in MB.
   12. Create rollback segment in separate tablespace with proper
      storageoption.

   13. Create a 3 new abstract datatype as given below
            1. NAME_TYPE(F_NAME,M_NAME,L_NAME)
         2. POST_TYPE(MAIN,SFX)
         3. ADDR_TYPE(STREET,CITY,STATE,POSTCODE)

14.Create a table stud_info having column name, rollno, phy, maths,
   comp, total and percentage. Write a trigger to automatically
   calculate students total marks and percentage of students while
   insertion.

15.Write a SQL query to display the following data
   information .
      a. Name of database
      b. Database startup time
      c. Database size information(database size,used
         space, free Space)
```
