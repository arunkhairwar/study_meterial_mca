```text
     1) Write a java Application to implement interfaces.

:-

interface A
{
       void display();
}
public class Demo implements A
{
       int x=10;
       public void display()
       {
             System.out.println("I am in interface");
       }
       public void show()
       {
             System.out.println("x="+x);
       }

       public static void main(String[] args) {
             Demo d1=new Demo();
             d1.display();
             d1.show();

       }

}

Output:
I am in interface
x=10
2) Write a Java Application to implement final class.
:-



final class B{
       void display()
       {
             System.out.println("I am in final class");
       }
}
public class Demo2
{

         public void show()
         {
               System.out.println("I am in show Method");
         }
         public static void main(String[] args) {
         B a1 = new B();
         Demo2 d2 = new Demo2();
     a1.display();
     d2.show();


        }

}


Output :
I am in final class
I am in show Method
3) Write a java application to implement Method Overloading


class OverloadDemo {
    // Overload test with no parameters
    void test() {
        System.out.println("No parameters");
    }


    // Overload test for one integer parameter
    void test(int a) {
        System.out.println("a: " + a);
    }


    // Overload test for two integer parameters
    void test(int a, int b) {
        System.out.println("a and b: " + a + " " + b);
    }


    // Overload test for a double parameter
    double test(double a) {
        System.out.println("double a: " + a);
        return a * a;
    }
}
class Overload {
    public static void main(String args[]) {
        OverloadDemo ob = new OverloadDemo();
        double result;


        // Call all versions of test()
        ob.test();       // no-arg version
        ob.test(10);       // one int argument
        ob.test(10, 20);    // two int arguments
        result = ob.test(123.25); // double argument


        System.out.println("Result of ob.test(123.25): " + result);
    }
}


Output:-
No parameters
a: 10
a and b: 10 20
double a: 123.25
Result of ob.test(123.25): 15190.5625
4) Write a java Application To implement Multithreading.

class NewThread extends Thread
{
       public NewThread(String n) {
             super(n);
             start();
       }
       public void run() {
             for(int i=1;i<=5;i++) {
                     System.out.println(getName()+"="+i);
                     try
                     {
                           Thread.sleep(500);
                     }
                     catch(Exception e) {
                           System.out.println(e);
                     }
             }
       }
}
public class ThreadDemo {
       public static void main(String[] args)
       {
             NewThread n1 = new NewThread("one");
             NewThread n2= new NewThread("two");
             NewThread n3= new NewThread("Three");
             for (int i=1;i<=5;i++)
                           System.out.println("Main="+i);
             try {
                     Thread.sleep(500);
             }
       catch(Exception e) {
             System.out.println(e);
       }
       }
}
Output:-
Main=1
Main=2
Main=3
Main=4
Main=5
One=1
Two=1
Three=1
One=2
Two=2
Three=2
One=3
Two=3
Three=3
One=4
Two=4
Three=4
One=5
Two=5
Three=5
5) Write a java Application to Implement Single level Inheritance


class A {
    int x = 10;
    public void display() {
        System.out.println("x = " + x);
    }
}
class B extends A {
    int y = 20;
    public void display1() {
        System.out.println("y = " + y);
    }
}
public class InheritDemo {
    public static void main(String args[]) {
        B b1 = new B(); // Object of subclass B
        b1.display();    // Calls method of class A
        b1.display1();   // Calls method of class B
    }
}
Output:-
x=10
y=20
6) Write a Java application to implement passing parameters to an
Applet
:-
Applet.html
<html>
<body>
<Applet code = "ParamDemo.java" width="400" height="400">
<param name ="string" value ="Alex>
</applet>
</body>
</html>
ParamDemo.java
import java.awt.*;
import java.applet.*;

public class ParamDemo extends Applet
{
      String str;
      public void init()
      {
             str=getParameter("string");
             if(str==null)
                    str="java";
             else
                    str="Hello"+str;
      }

      public void paint(Graphics g)
      {
            g.drawString(str, 10, 100);

      }
}
Output :-
7) Write an AWT based Java Application for Textarea Control.

import java.awt.*;
import java.awt.event.*;

public class TextAreaApp extends Frame {

      TextArea t1, t2;
      Button b1;

      public TextAreaApp() {
            setTitle("my window");
            setSize(400, 400);
            setLayout(null);
            t1 = new TextArea();
            t1.setBounds(20, 50, 200, 150);
            add(t1);

            t2 = new TextArea();
            t2.setBounds(20, 245, 200, 150);
            add(t2);

            b1 = new Button("copy");
            b1.setBounds(20, 210, 70, 25);
            add(b1);

            b1.addActionListener(new ActionListener() {

                   public void actionPerformed(ActionEvent ae) {
                         t2.setText(t1.getText());
                   }
            });
            this.addWindowListener(new WindowAdapter() {
                   public void windowClosing(WindowEvent we) {
                         System.exit(0);
                   }
            });

      }
    public static void main(String[] args) {
          TextAreaApp f = new TextAreaApp();
          f.setVisible(true);
    }
}


Output:-
8) Write an AWT based Java application to implement Item Event
of Checkbox Control.

import java.awt.*;
import
java.awt.event.*;

public class MyDemo implements ItemListener
{
      Checkbox checkBox1, checkBox2;
      Label label;
      MyDemo()
      {
             Frame f=new Frame("CheckBox Example");
             label = new Label();
             label.setAlignment(Label.CENTER);
             label.setSize(400,100);
             checkBox1 = new Checkbox("C++");
             checkBox1.setBounds(100,100,50,50);
             checkBox2=new Checkbox("Java");
             checkBox2.setBounds(100,150,50,50);
             f.add(checkBox1);
             f.add(checkBox2);
             f.add(label);
             checkBox1.addItemListener(this);
             checkBox2.addItemListener(this);
             f.setSize(400,400);
             f.setLayout(null);
             f.setVisible(true);
      }
      public void itemStateChanged(ItemEvent e)
      {
             if(e.getSource()==checkBox1)
                    label.setText("C++ Checkbox:
"+(e.getStateChange()==1?"checked":"unchecked"));
             if(e.getSource()==checkBox2)
                    label.setText("Java
Checkbox:"+(e.getStateChange()==1?"checked":"unchecked"));
     }

     public static void main(String[] args) {
           new MyDemo();

     }
}

Output :-
9) Write a SWING based java application to implement click event
of Button Control.
:-
import java.awt.event.*;
import javax.swing.*;


public class ButtonExample {
     public static void main(String[] args) {


       JFrame f = new JFrame("Button Example");
       final JTextField tf = new JTextField();
       tf.setBounds(50, 50, 150, 20);


       JButton b = new JButton("Click Here");
       b.setBounds(50, 100, 120, 30);


       b.addActionListener(new ActionListener() {
          public void actionPerformed(ActionEvent e) {
              tf.setText("Welcome");
          }
       });


       f.add(b);
       f.add(tf);
       f.setSize(400, 400);
        f.setLayout(null);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        f.setVisible(true);
    }
}


Output:-
10)Write an AWT based Java Application for Menus


import java.awt.*;
import java.awt.event.*;

public class AWTMenuDemo {
  private Frame mainFrame;
  private Label headerLabel;
  private Label statusLabel;
  private Panel controlPanel;

  public AWTMenuDemo() {
    prepareGUI();
  }

  public static void main(String[] args) {
    AWTMenuDemo awtMenuDemo = new AWTMenuDemo();
    awtMenuDemo.showMenuDemo();
  }

  private void prepareGUI() {
     mainFrame = new Frame("Java AWT Example");
     mainFrame.setSize(400, 400);
     mainFrame.setLayout(new GridLayout(3, 1));

    mainFrame.addWindowListener(new WindowAdapter() {
       public void windowClosing(WindowEvent windowEvent) {
         System.exit(0);
       }
    });

    headerLabel = new Label();
    headerLabel.setAlignment(Label.CENTER);

    statusLabel = new Label();
    statusLabel.setAlignment(Label.CENTER);
    statusLabel.setSize(350, 100);
     controlPanel = new Panel();
     controlPanel.setLayout(new FlowLayout());

     mainFrame.add(headerLabel);
     mainFrame.add(controlPanel);
     mainFrame.add(statusLabel);

     mainFrame.setVisible(true);
 }

 private void showMenuDemo() {
    final MenuBar menuBar = new MenuBar();

     Menu fileMenu = new Menu("File");
     Menu editMenu = new Menu("Edit");
     final Menu aboutMenu = new Menu("About");

   MenuItem newMenuItem = new MenuItem("New", new
MenuShortcut(KeyEvent.VK_N));
   newMenuItem.setActionCommand("New");

     MenuItem openMenuItem = new MenuItem("Open");
     openMenuItem.setActionCommand("Open");

     MenuItem saveMenuItem = new MenuItem("Save");
     saveMenuItem.setActionCommand("Save");

     MenuItem exitMenuItem = new MenuItem("Exit");
     exitMenuItem.setActionCommand("Exit");

     MenuItem cutMenuItem = new MenuItem("Cut");
     cutMenuItem.setActionCommand("Cut");

     MenuItem copyMenuItem = new MenuItem("Copy");
     copyMenuItem.setActionCommand("Copy");

     MenuItem pasteMenuItem = new MenuItem("Paste");
     pasteMenuItem.setActionCommand("Paste");

     MenuItemListener menuItemListener = new MenuItemListener();
    newMenuItem.addActionListener(menuItemListener);
    openMenuItem.addActionListener(menuItemListener);
    saveMenuItem.addActionListener(menuItemListener);
    exitMenuItem.addActionListener(menuItemListener);
    cutMenuItem.addActionListener(menuItemListener);
    copyMenuItem.addActionListener(menuItemListener);
    pasteMenuItem.addActionListener(menuItemListener);

    final CheckboxMenuItem showWindowMenu = new
CheckboxMenuItem("Show About", true);
    showWindowMenu.addItemListener(new ItemListener() {
       public void itemStateChanged(ItemEvent e) {
          if (showWindowMenu.getState()) {
             menuBar.add(aboutMenu);
          } else {
             menuBar.remove(aboutMenu);
          }
       }
    });

    // add menu items to menus
    fileMenu.add(newMenuItem);
    fileMenu.add(openMenuItem);
    fileMenu.add(saveMenuItem);

    fileMenu.addSeparator();
    fileMenu.add(showWindowMenu);
    fileMenu.addSeparator();
    fileMenu.add(exitMenuItem);

    editMenu.add(cutMenuItem);
    editMenu.add(copyMenuItem);
    editMenu.add(pasteMenuItem);

    // add menu to menubar
    menuBar.add(fileMenu);
    menuBar.add(editMenu);
    menuBar.add(aboutMenu);

    // add menubar to the frame
        mainFrame.setMenuBar(menuBar);
        mainFrame.setVisible(true);
    }

    class MenuItemListener implements ActionListener {
       public void actionPerformed(ActionEvent e) {
         statusLabel.setText(e.getActionCommand() + " MenuItem clicked.");
       }
    }
}


Output:-
11 )Write a SWING based Java application to implement different
Layout Manager.


import java.awt.*;
import javax.swing.*;
public class LayoutManagerTest extends JFrame
{
   JPanel flowLayoutPanel1, flowLayoutPanel2, gridLayoutPanel1,
gridLayoutPanel2, gridLayoutPanel3;
    JButton one, two, three, four, five, six;
    JLabel bottom, lbl1, lbl2, lbl3;


    public LayoutManagerTest()
    {
        setTitle("Layout Manager Test");
        setLayout(new BorderLayout());


        flowLayoutPanel1 = new JPanel();
        one = new JButton("One");
        two = new JButton("Two");
        three = new JButton("Three");


        flowLayoutPanel1.setLayout(new FlowLayout(FlowLayout.CENTER));
        flowLayoutPanel1.add(one);
        flowLayoutPanel1.add(two);
flowLayoutPanel1.add(three);




flowLayoutPanel2 = new JPanel();
bottom = new JLabel("This is South");


flowLayoutPanel2.setLayout(new FlowLayout(FlowLayout.CENTER));
flowLayoutPanel2.add(bottom);




gridLayoutPanel1 = new JPanel();
gridLayoutPanel2 = new JPanel();
gridLayoutPanel3 = new JPanel();


lbl1 = new JLabel("One");
lbl2 = new JLabel("Two");
lbl3 = new JLabel("Three");


four = new JButton("Four");
five = new JButton("Five");
six = new JButton("Six");


gridLayoutPanel2.setLayout(new GridLayout(1, 3, 3, 5));
gridLayoutPanel2.add(lbl1);
gridLayoutPanel2.add(lbl2);
        gridLayoutPanel2.add(lbl3);


        gridLayoutPanel3.setLayout(new GridLayout(3, 1, 5, 5));
        gridLayoutPanel3.add(four);
        gridLayoutPanel3.add(five);
        gridLayoutPanel3.add(six);


        gridLayoutPanel1.setLayout(new GridLayout(2, 1));
        gridLayoutPanel1.add(gridLayoutPanel2);
        gridLayoutPanel1.add(gridLayoutPanel3);


        add(flowLayoutPanel1, BorderLayout.NORTH);
        add(flowLayoutPanel2, BorderLayout.SOUTH);
        add(gridLayoutPanel1, BorderLayout.CENTER);


        setSize(400, 325);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }
    public static void main(String[] args)
    {
        new LayoutManagerTest();
    }
}
Output :-
12) Write a java application to create server and client program
using TCP/IP protocol.

ServerSide:-
import java.net.*;
import java.io.*;
class MyServer
{
public static void main(String args[])
{
try
{
ServerSocket s1=new ServerSocket(420);
Socket s2=s1.accept();
InputStream in=s2.getInputStream();
int ch;
while((ch=in.read())!=-1)
{
System.out.print((char)ch);
}
in.close();
s2.close();
s1.close();
}
catch(Exception e)
{
System.out.println(e);
}
}
}
Output:
F:\j-pro>javac MyServer.java
F:\j-pro>java MyServer
good morning mca-msc
F:\j-pro>



ClientSide:-
import java.net.*;
import java.io.*;
class MyClient1
{
       public static void main(String args[])
       {
               try
               {
                       Socket s=new Socket("192.168.6.9",420);
                       OutputStream out=s.getOutputStream();
                       String str="good morning mca";
                       byte b[]= str.getBytes();
                       out.write(b);
                       out.close();
                       s.close();
               }
               catch (Exception e)
               {
                       System.out.println(e);
               }
       }

}


Output:-
good morning mca
13) Write a java application to create server and client program
using Datagram.
Sender.java
import java.net.*;
public class Sender {
  public static void main(String args[]) {
     try {
       DatagramSocket ds = new DatagramSocket(101);
       String str = "good morning";
       byte b[] = str.getBytes();


       DatagramPacket dp = new DatagramPacket(
             b,
             b.length,
             InetAddress.getByName("localhost"),
             102
       );
            ds.send(dp);
            ds.close();
        }
        catch (Exception e) {
            System.out.println(e);
        }
    }
}
Receiver.java
import java.net.*;


public class Receiver {
    public static void main(String args[]) {
        try {
            DatagramSocket ds = new DatagramSocket(102);
            byte b[] = new byte[100];


            DatagramPacket dp = new DatagramPacket(b, b.length);
            ds.receive(dp);
            System.out.println(new String(b).trim());


            ds.close();
        }
        catch (Exception e) {
            System.out.println(e);
        }
    }
}
Output:-
good morning




14) Write a java application to implement RMI program for
addition of two numbers.

Adder.java
import java.rmi.*;
public interface Adder extends Remote{
        public int add(int x, int y) throws RemoteException;



}

AdderRemote.java
import java.rmi.*;
import java.rmi.server.*;


public class AdderRemote extends UnicastRemoteObject implements Adder
{
        AdderRemote()throws RemoteException
        {
                super();
        }
        public int add(int x,int y)
        {
       return x+y;

       }

}

MyServer.java
import java.rmi.*;
import java.rmi.registry.*;
public class MyServer {

       public static void main(String[] args) {
               try
               {
                       Adder stub = new AdderRemote();
                       Naming.rebind("hello", stub);
               }
               catch(Exception e) {
                       System.out.println(e);
               }

       }

}


MyClient.java
import java.rmi.*;
public class MyClient {

       public static void main(String[] args) {
       try {
               Adder stub=(Adder)Naming.lookup("hello");
               System.out.println(stub.add(10, 20));
       }
       catch(Exception e) {
               System.out.println(e);
       }

       }

}
Output:-
30




15) Write a java application to insert data into database using
JDBC.



import java.awt.*;
import java.sql.*;
import javax.swing.*;
import java.awt.event.*;


class FormData1 extends JFrame implements ActionListener {
     JLabel l1, l2, l3;
     JTextField t1, t2, t3;
     JButton b1, b2;
     public FormData1() {
       l1 = new JLabel("Enter Name: ");
       l2 = new JLabel("Enter age: ");
       l3 = new JLabel("Address: ");
t1 = new JTextField(20);
t2 = new JTextField(20);
t3 = new JTextField(20);


b1 = new JButton("Save");
b2 = new JButton("Clear");


b1.addActionListener(this);
b2.addActionListener(this);


JPanel p = new JPanel(new GridLayout(4, 2));
p.add(l1);
p.add(t1);
p.add(l2);
p.add(t2);
p.add(l3);
p.add(t3);
p.add(b1);
p.add(b2);


add(p);
setSize(400, 400);
setVisible(true);
pack();


this.addWindowListener(new WindowAdapter() {
  public void windowClosing(WindowEvent we) {
     System.exit(0);
          }
        });
  }


  public static void main(String[] args) {
        new FormData1();
  }


  public void actionPerformed(ActionEvent e) {


        if (e.getSource() == b1) {
          String v1 = t1.getText();
          int v2 = Integer.parseInt(t2.getText());
          String v3 = t3.getText();


          try {
              Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
              Connection con = DriverManager.getConnection("jdbc:odbc:mydsn1");


              PreparedStatement ps = con.prepareStatement("INSERT INTO sdata VALUES(?, ?,
?)");
              ps.setString(1, v1);
              ps.setInt(2, v2);
              ps.setString(3, v3);


              ps.executeUpdate();
              JOptionPane.showMessageDialog(null, "Data inserted successfully");
          }
          catch (Exception ex) {
                System.out.println(ex);
            }
        }
    }
}




Output:-
```
