# MCA Semester I — Practicals & Assignments Workspace

Student workspace for **First Year M.C.A. Semester I (CBCS)**, RTMNU Nagpur
(college: Gulhane Prerna College of Engineering & Technology, Nagpur).
Work here = producing practical files and assignment answers as Word documents.

## Working rules (from the student)

1. **One task at a time.** Do only the subject/task asked for, then stop.
2. **Don't scan PDFs if it costs a lot of tokens.** Ask the student to copy-paste
   the PDF content instead. Prefer existing `.md` versions when they exist.
3. **Never modify the original PDFs.** Create new files alongside them.
4. Once a PDF's content has been pasted/converted, save it as a `.md` next to the
   PDF (same base name) so it never needs to be read again.

## Output formats

### Practical file (per subject)
**Page layout (strict):** page A = Aim + Algorithm · page B = Flowchart alone ·
page C = Program (+ Output on the same page only if it fits, else Output on
its own page). Never put the flowchart and the program on the same page.

For **each** practical, in order:
1. **Aim** — the practical statement as given.
2. **Algorithm** — numbered steps (Step 1: Start … Step n: Stop).
3. **Flowchart** — standard symbols (oval Start/Stop, parallelogram I/O,
   rectangle process, diamond decision); render as an image and embed it.
4. **Program / Code** — if an answer exists in the `*_answers` PDF, **keep it
   exactly as-is**; otherwise write a correct, simple, student-level answer.
5. **Output** — sample output.

**Correction rule:** if the college answer sheet is wrong or doesn't match the
question list, fix it and put a short *Note* right below the Algorithm saying
what was corrected + "Please test and run it yourself before writing."
Compile/run every program before putting it in (JDK 21 is installed; MySQL
server runs but root needs a password; no Oracle, no PHP).

### ADBMS practical file — step format (replaces algorithm/flowchart)
**Aim:** question from the list → (Note if corrected) → for each step:
`Step N: <short title>` with **Description** (short), **Credentials** (only if
needed, e.g. system/<password>, Prerna/prerna123), **Syntax** (generic SQL),
**Example** (actual SQL + result from the answer sheet).

### Assignment (per subject)
- Answer each question for **3–4 marks: about 1–2 pages max**. Keep it short.
- Each question starts on a new page. Include a diagram (Graphviz) where the
  topic has a mechanism/architecture, and a short tested program where asked.
- **Format (strict): short introduction → explanation in bullet points →
  conclusion.** That's it.
- Structure: short definition/intro → key points (bullets) → diagram/table/
  example only where it helps → 1-line conclusion. No padding.

Practical file layout (as done for PHP): title page (Name/Roll No blanks) →
Index table (Sr. No., Practical, Date, Sign) → one practical per page.
Built with Node `docx` package + Graphviz `dot` for flowcharts (python-docx
and pip are not installed on this machine).

Deliverables go in **`<subject>/answers/`** as both `.docx` and `.pdf`, e.g.
`php/answers/php_practical_answer.docx` + `.pdf`. PDF is made by rendering the
same content to HTML and printing with headless `google-chrome` (no LibreOffice).
For SQL (ADBMS) practicals: Program page = clean SQL statements; Output page =
the SQL*Plus transcript from the answers PDF, kept as-is.

**Do not** build a website/React project from this material (student declined).

## Folder layout

| Folder | Subject | Files present |
|---|---|---|
| `java/` | 1T1 Advanced Java Programming | practical questions, practical answers, assignment questions (PDF) |
| `dcn/` | 1T2 Data Communication & Network | **theory only, no practicals** — assignment questions, assignment answers (PDF) |
| `php/` | 1T3 Open Source Web Programming using PHP | practical questions (PDF + `.md`), assignment questions (PDF), **`php_practical_answer.docx` (done)** |
| `adbms/` | 1T4 Advanced DBMS & Administration | practical questions, practical answers, assignment questions (PDF) |
| `software_engineering/` | 1T5 Software Engineering | **theory only, no practicals** — assignment questions (PDF) |

`MCA-syllabus-original.pdf` — full syllabus (summarised below; don't re-read).

## Syllabus summary (Sem I, each paper 4 credits, 4 units)

### 1T1 — Advanced Java Programming
- **U1:** Java features, bytecode, datatypes, arrays, operators, classes,
  constructors/overloading, garbage collection, `finalize()`, static/final,
  command-line args, inheritance/`super`, packages, interfaces, wrapper classes,
  exception handling (try/catch, nested, throw/throws/finally, user-defined),
  multithreading (life cycle, Thread/Runnable, `isAlive()`, `join()`, priorities,
  synchronization, `wait/notify/notifyAll`, deadlock), String handling.
- **U2:** Applets (life cycle, APPLET tag, params), AWT (windows, controls,
  layout managers, menus), Swing, event handling.
- **U3:** JDBC (architecture, JDBC-ODBC bridge, ResultSet), Networking
  (Socket, ServerSocket, InetAddress, URL, URLConnection, Datagram), RMI
  (remote interface, server/client, callbacks, stub/skeleton).
- **U4:** Servlets (life cycle, Tomcat, GET/POST, cookies, sessions), JSP tags,
  JavaBeans (BDK, JAR, introspection).
- Books: Schildt *Complete Reference*; C. Muthu; Black Book.

### 1T2 — Data Communication and Network
- **U1:** OSI model; physical layer (media, analog/digital transmission,
  switching, ISDN); data link (error detection/correction, sliding window);
  network layer (routing, congestion control, internetworking).
- **U2:** Transport (connection mgmt), session (RPC), presentation
  (compression, cryptography), application (file transfer, virtual terminals).
- **U3:** Security fundamentals, threats, security services; conventional
  encryption (DES, IDEA, CBC), encryption device location, key distribution.
- **U4:** Message digests, MAC, hash/SHA, CRC; public key (RSA, Diffie-Hellman,
  DSS), key mgmt; intruders & IDS; authentication, certificates; email
  security; firewalls (packet filtering, access control), trusted systems.
- Books: Tanenbaum; Stallings (2); Forouzan.

### 1T3 — Open Source Web Programming using PHP
- **U1:** PHP history, installation (Windows/Linux), lexical structure, data
  types, variables, operators, flow control, include, embedding in HTML.
- **U2:** Functions (scope, params, variable/anonymous functions), strings
  (printing, cleaning, escaping, comparing, searching, regex POSIX/PCRE),
  arrays (indexed/associative, multidimensional, traversing, sorting).
- **U3:** Classes & objects, introspection, serialization; web techniques
  (HTTP, server vars, forms, headers, sessions, cookies, files, SSL);
  MySQL database access.
- **U4:** GD graphics, PDF generation, XML (generate, parse, XSLT), web
  services, security (form data, uploads, file perms, shell cmds), templating,
  output handling, error handling, performance tuning.
- Books: Bayross & Shah *PHP 5.1 for Beginners*; Lerdorf & Tatroe *Programming PHP*.

### 1T4 — Advanced DBMS and Administration
- **U1:** Functional dependencies, normalization (1NF–5NF, BCNF), lossless &
  dependency-preserving decomposition; query processing, execution plans,
  cost estimation, join methods, query optimizer.
- **U2:** Transactions (ACID, states, serializability, recoverability),
  concurrency control (locking, timestamp, multiple granularity), deadlocks,
  crash recovery (deferred/immediate update, shadow paging, checkpoints),
  client/server DB (2-tier, 3-tier).
- **U3:** Oracle architecture & administration (control/redo log files,
  tablespaces, datafiles, rollback segments, indexes, users, privileges,
  roles); backup & recovery (physical backup, export/import, standby DB).
- **U4:** Oracle tuning (shared pool, buffer cache, redo log buffer, I/O, sort,
  lock contention, SQL tuning, alert/trace files); integrity constraints,
  database security.
- Books: Elmasri & Navathe; Korth; Oracle 9i Performance Tuning; Loney DBA Handbook.

### 1T5 — Software Engineering
- **U1:** Evolving role of software, software myths; layered technology,
  process framework, CMMI, process patterns, PSP/TSP; process models
  (waterfall, incremental, evolutionary, Unified Process); functional /
  non-functional requirements, SRS.
- **U2:** RE process (feasibility, elicitation, validation, management);
  system models (context, behavioral, data, object), UML; design concepts &
  model; architectural design, styles & patterns.
- **U3:** OO design; UI design (golden rules, analysis, evaluation); testing
  strategies (black-box, white-box, validation, system testing, debugging);
  product metrics.
- **U4:** Process/project metrics; risk management (reactive vs proactive,
  identification, projection, RMMM); quality management (SQA, FTR,
  statistical SQA, reliability, ISO 9000).
- Books: Pressman; Sommerville; Jawadekar.

## Progress log
(Update as each deliverable is finished.)
- [x] Java — practical file (`java/answers/`, 15 practicals, all compiled & run on JDK 21; GUI outputs are real screenshots) — awaiting review
- [x] Java — assignment (`java/answers/java_assignment_answer.*`, 20 questions) — awaiting review
- [ ] DCN — assignment (theory only)
- [x] PHP — practical file (`php/answers/`, 15 practicals) — rebuilt in new page layout
- [x] ADBMS — practical file (`adbms/answers/`, 15 practicals, step format; corrections noted on P4/5/6/7/8/10/12/13/14) — awaiting review
- [ ] PHP — assignment
- [ ] ADBMS — assignment
- [ ] Software Engineering — assignment (theory only)
