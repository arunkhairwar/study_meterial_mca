// Build consolidated INDEX pdf for all practicals and assignments.
// Mirrors the index page design used in the subject answer PDFs.
// Renders HTML -> PDF via headless google-chrome (no extra npm deps).

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const outDir = __dirname;
const htmlPath = path.join(outDir, 'index.html');
const pdfPath = path.join(outDir, 'index.pdf');

const sections = [
  {
    subject: 'Advanced Java Programming (Paper 1T1)',
    kind: 'Practical',
    items: [
      'Write a java application to implement interfaces.',
      'Write a java application to implement final class.',
      'Write a java application to implement Method Overloading.',
      'Write a java application to implement multithreading.',
      'Write a java application to implement Single level inheritance.',
      'Write a java application to implement passing parameter to Applet.',
      'Write an AWT based java application for Text Area control.',
      'Write an AWT based java application to implement Item Event of Check Box control.',
      'Write a SWING based java application to implement Click event of Button control.',
      'Write an AWT based java application for Menus.',
      'Write a SWING based java application to implement different Layout Manager.',
      'Write a java application to create server and client program using TCP/IP protocol.',
      'Write a java application to create server and client program using Datagram.',
      'Write a java application to implement RMI program for addition of two numbers.',
      'Write a java application to insert data into database using JDBC.',
    ],
  },
  {
    subject: 'Advanced Java Programming (Paper 1T1)',
    kind: 'Assignment',
    items: [
      'What is Constructor in Java? Explain constructor overloading with suitable program.',
      'How many types of inheritance does Java support without interfaces? Explain with sample program.',
      'What is Multithreading in Java? Explain Life cycle of thread in detail.',
      'What is Exception handling? Explain try-catch-finally block with suitable program.',
      "Explain the AWT component's working with windows.",
      'Explain passing parameter to Applet in detail.',
      'What is Layout Manager? Explain it in detail.',
      'Explain and Write a program to demonstrate the addition of a list to scroll pane.',
      'Discuss the basic architecture of JDBC-ODBC with various drivers.',
      'Why are domain names required? What is the relationship between domain names and IP address.',
      'Describe RMI architecture in detail.',
      'Write a short note on: 1) TCP/IP client socket  2) TCP/IP server socket.',
      'What is Networking? Explain Datagram in detail.',
      'What is Servlet? Explain Life cycle of servlet with block diagram.',
      'What is Introspection? Explain developing beans using BDK.',
      'Explain cookies and session tracking with suitable example.',
      'What is the difference between Javabeans and EJB?',
      'Explain types of JSP tags? Write a program in Java which demonstrate use of JSP and Servlet.',
      'Differentiate between doGet() and doPost() methods.',
      'Explain in detail: 1) JAR File  2) Advantages of Java beans.',
    ],
  },
  {
    subject: 'Data Communication and Network (Paper 1T2)',
    kind: 'Assignment',
    items: [
      'Explain Transmission media in detail.',
      'Explain Network architecture with the help of diagram.',
      'Explain Routing algorithm in detail.',
      'Explain congestion control algorithm.',
      'Explain data compression techniques in detail.',
      'Explain session layer design layer issues in detail.',
      'Explain concept of file transfer access and management in application layer.',
      'Explain Feistel cipher structure with diagram.',
      'Write steps of SHA-1 Secure Hash Function and also explain single 512 bit block.',
      'Explain Diffie-Hellman Key Exchange algorithm in detail.',
      'Explain public key cryptography RSA algorithm in detail.',
      'Explain X.509 Authentication Service in detail.',
      'What is pretty good privacy? Explain principle services provided by it.',
      'Define Intruders? Explain types of Intruders and explain Intrusion technique.',
      'Define Firewall design principle? and Explain types of Firewall.',
    ],
  },
  {
    subject: 'Open Source Web Programming using PHP (Paper 1T3)',
    kind: 'Practical',
    items: [
      'Write a PHP program that Process a Form.',
      'Write a PHP script to create, retrieve and deleting the Cookies data.',
      'Write a PHP script to create, retrieve and deleting the Session data.',
      'Write a PHP Script to define the Class and instantiate the Object of that class.',
      'Write a PHP program to create a table, select data and show into table format in MySQL.',
      'Write a PHP program to update table using MySQL.',
      'Write a PHP program to insert XML file in PHP.',
      'Write a program in PHP that include another file into current file using include and require function.',
      'Write a program in PHP to demonstrate the Types of Arrays.',
      'Write a program in PHP to search an element in an array.',
      'Write a program in PHP to create and print the elements of an array using different Array Printing functions.',
      'Write a program in PHP that Sorts the given Array using different array sorting functions.',
      'Write a program in PHP that Chunkify the given string.',
      'Write a PHP script to check that email id is valid or not.',
      'Write a PHP function calculateGST($amount) that returns the GST (18%) of the given amount. Call the function with a sample value and display the result.',
    ],
  },
  {
    subject: 'Open Source Web Programming using PHP (Paper 1T3)',
    kind: 'Assignment',
    items: [
      'How to install and configure PHP in windows? Explain.',
      'Explain different types of operators used in PHP with example.',
      'List and explain different loops used in PHP with its syntax and example.',
      'Write a code for embedding PHP in web pages.',
      'Define variable, write a note on scope of variables in PHP with example.',
      'Write a PHP program to display the given pattern output (Q6).',
      'Write a PHP program to display the given pattern output (Q7).',
      'Write a PHP program to display the given pattern output (Q8).',
      'Write a PHP program to display the given pattern output (Q9).',
      'Explain in detail flow control statements used in PHP programming language.',
      'Explain Different datatypes used in PHP.',
      'Write a PHP program, to find out factorial using function.',
      'Explain the terms: a) POSIX-Style Regular Expressions  b) Perl-Compatible Regular Expressions.',
      'What is session? Where you will use it in web programming? Explain use of session start.',
      'What are cookies? Explain how cookies are set, viewed and deleted?',
      'Write a program to connect PHP with MySQL.',
      'Explain Basic drawing functions with example.',
      'Write note on dynamically generated buttons.',
      'Explain procedure to create PDF in PHP and write example.',
      'Explain Introspection method in brief.',
    ],
  },
  {
    subject: 'Advanced DBMS and Administration (Paper 1T4)',
    kind: 'Practical',
    items: [
      'Create a new user & grant privileges of creating session, table & view to this new user also check connect or not.',
      'Connect to the new user, assign a tablespace, verify it works, create a table, and insert data.',
      'Create a new role named manager with same privileges. Grant this role to new user. Then change the password of newly created user.',
      'Revoke the privileges from role manager. Revoke role from user then delete that user.',
      'Create a tablespace named "P_student" with file name "Stu_datafile.dbf" having size of 10mb.',
      'Create a tablespace named "ts_mydemo" with two datafiles "ts_mydemo01.dbf" & "ts_mydemo02.dbf" having size of 50mb and 64mb respectively. Make the tablespace auto extendable and limit auto extending to 2048mb; next extend should be 32mb.',
      'Alter the last datafile "ts_mydemo01.dbf" so that its size will automatically extend by 5mb & limit its size to 500mb.',
      'Create temporary tablespace with size of 5mb which will be automatically increased on demand.',
      'Add new Redo log file of size 10mb to existing database.',
      'Display the list of all Redo log files and Control log file.',
      'Display the list of datafiles, tablespace names & size in MB.',
      'Create rollback segment in separate tablespace with proper storage option.',
      'Create 3 new abstract datatypes: NAME_TYPE(F_NAME, M_NAME, L_NAME); POST_TYPE(MAIN, SFX); ADDR_TYPE(STREET, CITY, STATE, POSTCODE).',
      'Create a table stud_info having columns name, rollno, phy, maths, comp, total and percentage. Write a trigger to automatically calculate total marks and percentage of students on insertion.',
      'Write a SQL query to display: a) Name of database  b) Database startup time  c) Database size information (database size, used space, free space).',
    ],
  },
  {
    subject: 'Advanced DBMS and Administration (Paper 1T4)',
    kind: 'Assignment',
    items: [
      'Explain Functional dependency in details.',
      'What is normalization? Explain different forms with example.',
      'Explain different type of keys.',
      'What is query processing? Explain query processing stages in details.',
      'Explain method for joining tables.',
      'What is Serializability? Explain types of serializability.',
      'Explain state of transaction with diagram.',
      'Explain schedules and types.',
      'Describe deadlock in details.',
      'What is Application Partitioning? Explain its types.',
      'Explain DBMS architecture.',
      'Explain the concept of buffer management.',
      'Write about tablespace in crash recovery.',
      'What is backup in oracle? Explain recovery strategies.',
      'Explain control file and redo log files.',
      'Explain buffer cache and redo logs buffer.',
      'Explain database integrity.',
      'Database configuration and I/O issues.',
    ],
  },
  {
    subject: 'Software Engineering (Paper 1T5)',
    kind: 'Assignment',
    items: [
      'Explain different Myths in Software Engineering.',
      'Write a short note on: i) CMMI  ii) Process Pattern  iii) Process Assessment.',
      'What is Software Engineering? Explain the waterfall model in detail.',
      'Explain Incremental Process model and Evolutionary process model.',
      'What is Unified Process? Explain Functional and Non-Functional requirements in detail.',
      'What is Feasibility Study? Explain it in detail.',
      'Write a note on: i) Requirement Elicitation and Analysis  ii) Requirement Validation  iii) Requirement Management.',
      'Explain Context model and Behavioural Model in detail.',
      'Explain White box Testing and Black box testing in detail.',
      'What is Object Oriented design Process? Explain different Golden rules in User interface design.',
      'What is Software Quality? Explain different Product metrics in detail.',
      'What is Risk management? Explain risk management with RMMM and RMMM plan.',
      'Explain Reactive Vs Proactive Risk Strategies.',
      'What is difference between testing and debugging? Explain the debugging process.',
      'What is Software Quality Assurance? Explain ISO 9000 Quality standard in detail.',
    ],
  },
];

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const titlePage = `
<section class="page title-page">
  <div class="title-inner">
    <h1 class="main-title">INDEX</h1>
    <h2 class="sub-title">Practicals &amp; Assignments</h2>
    <p class="course">First Year M.C.A. &mdash; Semester I (CBCS)</p>
    <p class="course">RTM Nagpur University</p>
    <p class="course small">Gulhane Prerna College of Engineering &amp; Technology, Nagpur</p>
    <div class="namebox">
      <p>Name: ____________________________</p>
      <p>Roll No: _________________________</p>
    </div>
  </div>
</section>`;

const renderSection = (sec) => {
  const rows = sec.items
    .map(
      (t, i) =>
        `<tr><td class="sn">${i + 1}</td><td class="q">${esc(t)}</td><td class="dt"></td><td class="sg"></td></tr>`
    )
    .join('\n');
  return `
<section class="page">
  <h2 class="idx-heading">INDEX</h2>
  <p class="sub-line"><span class="subject">${esc(sec.subject)}</span> &mdash; <span class="kind">${esc(sec.kind)}</span></p>
  <table class="idx-table">
    <thead>
      <tr><th class="sn">Sr. No.</th><th class="q">${sec.kind === 'Practical' ? 'Practical' : 'Question'}</th><th class="dt">Date</th><th class="sg">Sign</th></tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
</section>`;
};

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Index</title>
<style>
  @page { size: A4; margin: 18mm 16mm 18mm 16mm; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body { font-family: "Times New Roman", Times, serif; color: #000; font-size: 12pt; line-height: 1.35; }
  .page { page-break-after: always; }
  .page:last-child { page-break-after: auto; }

  .title-page { text-align: center; padding-top: 40mm; }
  .title-page .main-title { font-size: 36pt; letter-spacing: 6px; margin: 0 0 10mm 0; }
  .title-page .sub-title { font-size: 20pt; margin: 0 0 20mm 0; font-weight: normal; }
  .title-page .course { font-size: 14pt; margin: 2mm 0; }
  .title-page .course.small { font-size: 12pt; font-style: italic; }
  .title-page .namebox { margin-top: 30mm; font-size: 13pt; }
  .title-page .namebox p { margin: 6mm 0; }

  .idx-heading { text-align: center; font-size: 22pt; letter-spacing: 3px; margin: 0 0 3mm 0; }
  .sub-line { text-align: center; margin: 0 0 7mm 0; font-size: 13pt; }
  .sub-line .subject { font-weight: bold; }
  .sub-line .kind { font-style: italic; }

  table.idx-table { width: 100%; border-collapse: collapse; }
  table.idx-table th, table.idx-table td {
    border: 1px solid #000;
    padding: 4pt 6pt;
    vertical-align: top;
  }
  table.idx-table thead th { background: #eeeeee; text-align: center; font-weight: bold; }
  table.idx-table td.sn, table.idx-table th.sn { width: 10%; text-align: center; }
  table.idx-table td.q,  table.idx-table th.q  { width: 60%; }
  table.idx-table td.dt, table.idx-table th.dt { width: 15%; }
  table.idx-table td.sg, table.idx-table th.sg { width: 15%; }
</style>
</head>
<body>
${titlePage}
${sections.map(renderSection).join('\n')}
</body>
</html>`;

fs.writeFileSync(htmlPath, html);

execFileSync(
  'google-chrome',
  [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--no-pdf-header-footer',
    '--print-to-pdf=' + pdfPath,
    'file://' + htmlPath,
  ],
  { stdio: 'inherit' }
);

console.log('Written:', pdfPath);
