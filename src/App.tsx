import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. Explain the Mobility Landscape. Discuss the characteristics and importance of mobile computing.",
      answer: "",
      codeExample: `
============================================================
 Explain the Mobility Landscape. Discuss the Characteristics
         and Importance of Mobile Computing.
============================================================


============================================================
What is Mobility Landscape?
============================================================

The Mobility Landscape refers to the environment where mobile
devices, wireless networks, mobile applications, and cloud
services work together to provide information and services
anytime and anywhere.

It includes smartphones, tablets, laptops, wearable devices,
mobile apps, Wi-Fi, Bluetooth, 4G, and 5G networks.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Mobility Landscape is the ecosystem of mobile devices,
wireless communication, mobile applications, and cloud
technologies that enables users to access information and
services from anywhere at any time.


============================================================
Components of Mobility Landscape
============================================================

------------------------------------------------------------
1. Mobile Devices
------------------------------------------------------------

• Smartphones
• Tablets
• Laptops
• Smartwatches

------------------------------------------------------------
2. Wireless Networks
------------------------------------------------------------

• Wi-Fi
• Bluetooth
• 4G
• 5G

------------------------------------------------------------
3. Mobile Applications
------------------------------------------------------------

• Banking apps
• Shopping apps
• Social media apps
• Educational apps

------------------------------------------------------------
4. Cloud Services
------------------------------------------------------------

• Online storage
• Data backup
• Cloud computing


============================================================
Characteristics of Mobile Computing
============================================================

------------------------------------------------------------
1. Portability
------------------------------------------------------------

Mobile devices are lightweight and easy to carry anywhere.

------------------------------------------------------------
2. Mobility
------------------------------------------------------------

Users can access information while moving from one place to
another.

------------------------------------------------------------
3. Wireless Connectivity
------------------------------------------------------------

Uses Wi-Fi, Bluetooth, 4G, or 5G instead of wired connections.

------------------------------------------------------------
4. Anytime, Anywhere Access
------------------------------------------------------------

Users can access data and services at any time from any
location.

------------------------------------------------------------
5. Personalization
------------------------------------------------------------

Mobile devices store personal settings, contacts, and
preferences.

------------------------------------------------------------
6. Instant Communication
------------------------------------------------------------

Supports calls, messages, emails, and video conferencing in
real time.

------------------------------------------------------------
7. Location Awareness
------------------------------------------------------------

Uses GPS to provide location-based services like maps and
navigation.

------------------------------------------------------------
8. Synchronization
------------------------------------------------------------

Data is automatically synchronized with cloud services across
devices.


============================================================
Importance of Mobile Computing
============================================================

------------------------------------------------------------
1. Easy Communication
------------------------------------------------------------

Enables instant communication through calls, messages, and
emails.

------------------------------------------------------------
2. Business Productivity
------------------------------------------------------------

Employees can work remotely and access company data.

------------------------------------------------------------
3. Online Banking
------------------------------------------------------------

Allows users to transfer money and pay bills using mobile
apps.

------------------------------------------------------------
4. Education
------------------------------------------------------------

Students can attend online classes and access study
materials.

------------------------------------------------------------
5. Healthcare
------------------------------------------------------------

Doctors can monitor patients and provide telemedicine
services.

------------------------------------------------------------
6. Entertainment
------------------------------------------------------------

Users can watch videos, play games, and listen to music
anywhere.

------------------------------------------------------------
7. Navigation
------------------------------------------------------------

GPS helps users find locations and directions.

------------------------------------------------------------
8. E-Commerce
------------------------------------------------------------

Users can shop online using mobile applications.


============================================================
Advantages of Mobile Computing
============================================================

• Access information anytime and anywhere.
• Fast communication.
• Improves business efficiency.
• Supports remote work and online learning.
• Easy access to online services.
• Saves time and increases productivity.


============================================================
Disadvantages of Mobile Computing
============================================================

• Security and privacy risks.
• Battery life limitations.
• Depends on network availability.
• Small screen size.
• Data usage costs.


============================================================
Applications of Mobile Computing
============================================================

• Mobile Banking
• Online Shopping
• Healthcare
• Education
• Navigation (GPS)
• Social Media
• Food Delivery Apps
• Ride Booking Apps


============================================================
Exam Definition (2 Marks)
============================================================

Mobility Landscape is the combination of mobile devices,
wireless networks, mobile applications, and cloud services
that allows users to access information and services anytime
and anywhere.


============================================================
5-Mark Summary
============================================================

Mobility Landscape is the ecosystem of mobile devices,
wireless communication, mobile apps, and cloud services.

------------------------------------------------------------
Characteristics of Mobile Computing
------------------------------------------------------------

• Portability
• Mobility
• Wireless Connectivity
• Anytime, Anywhere Access
• Personalization
• Instant Communication
• Location Awareness
• Synchronization

------------------------------------------------------------
Importance of Mobile Computing
------------------------------------------------------------

• Easy communication
• Business productivity
• Online banking
• Education
• Healthcare
• Entertainment
• Navigation
• E-commerce

Mobile computing makes life faster, more convenient, and
connected, enabling users to access services from anywhere
using mobile devices.
      `
    },
    {
      id: 2,
      question: "2. Explain Mobile Platforms. Compare Android, iOS, and Windows Mobile.",
      answer: "",
      codeExample: `
============================================================
              Explain Mobile Platforms
      Compare Android, iOS, and Windows Mobile
============================================================

============================================================
What is a Mobile Platform?
============================================================

A Mobile Platform is an operating system (OS) and software
environment that allows mobile devices to run applications
and perform various tasks such as calling, messaging,
browsing, gaming, and using apps.

Examples of mobile platforms are Android, iOS, and
Windows Mobile.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Mobile Platform is an operating system and software
environment that manages the hardware of a mobile device and
provides a platform for running mobile applications.


============================================================
Types of Mobile Platforms
============================================================

============================================================
1. Android
============================================================

• Developed by Google.
• Open-source operating system.
• Based on the Linux kernel.
• Used by brands like Samsung, Xiaomi, OnePlus, Vivo,
  Oppo, Motorola, etc.
• Applications are developed mainly using Java or Kotlin.

------------------------------------------------------------
Features
------------------------------------------------------------

• Open-source.
• Supports millions of apps through the Google Play Store.
• Highly customizable.
• Supports multitasking.
• Available on many brands of smartphones.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Free and open-source.
• Large number of apps.
• Supports many devices.
• Easy customization.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Higher risk of malware compared to iOS.
• Different device manufacturers may delay software updates.


============================================================
2. iOS
============================================================

• Developed by Apple.
• Used only on iPhone and iPad.
• Closed-source operating system.
• Applications are developed using Swift or Objective-C.

------------------------------------------------------------
Features
------------------------------------------------------------

• High security.
• Smooth performance.
• Regular software updates.
• Excellent integration with Apple devices.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Very secure.
• Fast and stable.
• Excellent user experience.
• Timely updates from Apple.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Expensive devices.
• Limited customization.
• Runs only on Apple devices.


============================================================
3. Windows Mobile
============================================================

• Developed by Microsoft.
• Designed for Windows-based smartphones.
• Supported applications developed using C# and .NET.
• Now officially discontinued.

------------------------------------------------------------
Features
------------------------------------------------------------

• Familiar Windows interface.
• Integration with Microsoft Office.
• Good security.
• Easy synchronization with Windows PCs.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Easy integration with Microsoft products.
• User-friendly interface.
• Good productivity tools.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Limited number of apps.
• Small market share.
• Official support has ended.


============================================================
Comparison of Android, iOS, and Windows Mobile
============================================================

| Feature              | Android                 | iOS                 | Windows Mobile          |
| ---------------------| ----------------------- | ------------------- | ----------------------- |
| Developer            | Google                  | Apple               | Microsoft               |
| License              | Open-source             | Closed-source       | Closed-source           |
| Programming Language | Java, Kotlin            | Swift, Objective-C  | C#, .NET                |
| Devices              | Many brands             | Apple devices only  | Windows phones          |
| App Store            | Google Play Store       | Apple App Store     | Microsoft Store         |
| Customization        | High                    | Limited             | Moderate                |
| Security             | Good                    | Very High           | Good                    |
| Market Share         | Highest                 | Second Highest      | Very Low (Discontinued) |
| Updates              | Depends on manufacturer | Directly from Apple | Discontinued            |


============================================================
Advantages of Mobile Platforms
============================================================

• Easy communication.
• Supports mobile applications.
• Internet access.
• Multimedia support.
• GPS and navigation.
• Online banking and shopping.


============================================================
Applications of Mobile Platforms
============================================================

• Social media
• Mobile banking
• Online shopping
• Education
• Healthcare
• Gaming
• Business applications
• Entertainment


============================================================
Exam Definition (2 Marks)
============================================================

A Mobile Platform is an operating system that manages mobile
device hardware and software and allows users to run mobile
applications. Popular mobile platforms are Android, iOS,
and Windows Mobile.


============================================================
5-Mark Summary
============================================================

A Mobile Platform is the operating system of a mobile device.

------------------------------------------------------------
Android
------------------------------------------------------------

• Developed by Google.
• Open-source.
• Uses Java and Kotlin.
• Highly customizable.

------------------------------------------------------------
iOS
------------------------------------------------------------

• Developed by Apple.
• Closed-source.
• Uses Swift and Objective-C.
• High security and performance.

------------------------------------------------------------
Windows Mobile
------------------------------------------------------------

• Developed by Microsoft.
• Uses C# and .NET.
• Integrated with Microsoft services.
• Officially discontinued.

------------------------------------------------------------
Comparison
------------------------------------------------------------

Android offers flexibility and customization, iOS provides
strong security and smooth performance, while Windows Mobile
focused on Microsoft integration but is no longer supported.
      
      `
    },
    {
      id: 3,
      question: "3. Explain Mobile Application Development Life Cycle (Mobile App Development Process).",
      answer: "",
      codeExample: `
============================================================
      Mobile Application Development Life Cycle (MADLC)
============================================================

============================================================
What is Mobile Application Development Life Cycle (MADLC)?
============================================================

The Mobile Application Development Life Cycle (MADLC) is a
step-by-step process used to design, develop, test, deploy,
and maintain a mobile application.

It helps developers create high-quality, user-friendly, and
reliable mobile apps.


============================================================
Definition (2 Marks)
============================================================

The Mobile Application Development Life Cycle (MADLC) is the
process of planning, designing, developing, testing,
deploying, and maintaining a mobile application.


============================================================
Phases of Mobile Application Development Life Cycle
============================================================

------------------------------------------------------------
1. Requirement Analysis
------------------------------------------------------------

• Collect the client's requirements.
• Identify the purpose of the app.
• Decide the target users and platform (Android or iOS).
• Prepare project requirements.

Example

A client wants a Food Delivery App with login, online payment,
and order tracking.


------------------------------------------------------------
2. Planning
------------------------------------------------------------

• Create the project plan.
• Decide budget and timeline.
• Select programming language and development tools.
• Assign tasks to the development team.

Example

Choose:

• Android Studio
• Java/Kotlin
• Firebase Database


------------------------------------------------------------
3. UI/UX Design
------------------------------------------------------------

• Design the app screens.
• Create wireframes and prototypes.
• Focus on attractive and user-friendly interfaces.

Example

Design:

• Login Screen
• Home Screen
• Cart Screen
• Payment Screen


------------------------------------------------------------
4. Development (Coding)
------------------------------------------------------------

• Write the application code.
• Develop frontend and backend.
• Connect the app with the database and APIs.

Example

Develop features like:

• User Login
• Product List
• Add to Cart
• Online Payment


------------------------------------------------------------
5. Testing
------------------------------------------------------------

• Check the app for errors and bugs.
• Test all features and performance.
• Ensure the app works correctly on different devices.

Types of Testing

• Functional Testing
• Performance Testing
• Security Testing
• Usability Testing


------------------------------------------------------------
6. Deployment
------------------------------------------------------------

• Publish the application.
• Upload the app to the Google Play Store or Apple App Store.
• Make the app available for users.


------------------------------------------------------------
7. Maintenance
------------------------------------------------------------

• Fix bugs reported by users.
• Improve performance.
• Add new features.
• Release updates regularly.

Example

Adding Dark Mode or fixing payment-related bugs.


============================================================
Mobile App Development Process Flow
============================================================

Requirement Analysis
         │
         ▼
      Planning
         │
         ▼
    UI/UX Design
         │
         ▼
Development (Coding)
         │
         ▼
       Testing
         │
         ▼
     Deployment
         │
         ▼
     Maintenance


============================================================
Advantages of MADLC
============================================================

• Provides a systematic development process.
• Reduces development errors.
• Improves app quality.
• Saves time and cost.
• Ensures customer satisfaction.
• Makes maintenance easier.


============================================================
Disadvantages
============================================================

• Time-consuming for large applications.
• Requires proper planning.
• Changes in requirements may increase development cost.


============================================================
Applications
============================================================

The Mobile App Development Life Cycle is used for developing:

• Banking Apps
• E-commerce Apps
• Food Delivery Apps
• Healthcare Apps
• Educational Apps
• Social Media Apps
• Ride Booking Apps


============================================================
Exam Definition (2 Marks)
============================================================

The Mobile Application Development Life Cycle (MADLC) is a
structured process used to develop mobile applications. It
includes Requirement Analysis, Planning, UI/UX Design,
Development, Testing, Deployment, and Maintenance.


============================================================
5-Mark Summary
============================================================

MADLC is a step-by-step process for building mobile
applications.

Phases of MADLC:

1. Requirement Analysis

2. Planning

3. UI/UX Design

4. Development (Coding)

5. Testing

6. Deployment

7. Maintenance

Each phase ensures the application is well-designed, tested,
secure, and user-friendly.

Following MADLC helps developers build high-quality mobile
applications efficiently.
      
      `
    },
    {
      id: 4,
      question: "4. Explain the Android Platform and its Architecture with a neat diagram.",
      answer: "",
      codeExample: `
============================================================
        Explain the Android Platform and its Architecture
                 with a Neat Diagram
============================================================


============================================================
What is Android?
============================================================

Android is an open-source mobile operating system developed by
Google. It is based on the Linux Kernel and is mainly used in
smartphones, tablets, smart TVs, smartwatches, and other smart
devices.

Android allows developers to create mobile applications using
Java or Kotlin.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Android is an open-source, Linux-based mobile operating system
developed by Google for smartphones, tablets, and other smart
devices.


============================================================
Features of Android
============================================================

• Open-source operating system.
• Based on Linux Kernel.
• Supports multitasking.
• User-friendly interface.
• Supports Wi-Fi, Bluetooth, GPS, and NFC.
• Large number of applications on the Google Play Store.
• High security with app permissions.
• Supports multiple languages.


============================================================
Android Architecture
============================================================

Android architecture consists of 5 layers.


+--------------------------------------+
|          Applications                |
| (Phone, Contacts, Camera, Games,     |
|  WhatsApp, Browser, etc.)            |
+--------------------------------------+
|     Application Framework            |
| Activity Manager                     |
| Window Manager                       |
| Content Provider                     |
| Resource Manager                     |
| Notification Manager                 |
| Package Manager                      |
+--------------------------------------+
|   Android Runtime (ART) & Libraries  |
| ART (Android Runtime)                |
| Core Java Libraries                  |
| SQLite, OpenGL, SSL, Media Libraries |
+--------------------------------------+
|      Hardware Abstraction Layer      |
| (HAL - Camera, Audio, Bluetooth, USB)|
+--------------------------------------+
|            Linux Kernel              |
| Memory Management                    |
| Process Management                   |
| Device Drivers                       |
| Security                             |
| Power Management                     |
+--------------------------------------+


============================================================
Layers of Android Architecture
============================================================

------------------------------------------------------------
1. Applications Layer
------------------------------------------------------------

This is the top layer of Android architecture.

It contains all the applications used by users.

Examples

• Phone
• Camera
• Contacts
• Gmail
• Chrome
• WhatsApp
• Games


------------------------------------------------------------
2. Application Framework
------------------------------------------------------------

This layer provides services used by Android applications.

Main Components

• Activity Manager – Manages application lifecycle.
• Window Manager – Manages windows on the screen.
• Content Provider – Shares data between applications.
• Resource Manager – Manages strings, images, and layouts.
• Notification Manager – Displays notifications.
• Package Manager – Installs and manages applications.


------------------------------------------------------------
3. Android Runtime (ART) and Native Libraries
------------------------------------------------------------

Android Runtime (ART)

• Executes Android applications.
• Converts app code into machine code.
• Improves application performance.

Native Libraries

Android provides many built-in libraries, such as:

• SQLite (Database)
• OpenGL ES (Graphics)
• Media Libraries (Audio and Video)
• SSL (Security)
• WebKit (Web Browser)


------------------------------------------------------------
4. Hardware Abstraction Layer (HAL)
------------------------------------------------------------

HAL acts as a bridge between Android software and hardware.

It allows Android to communicate with hardware devices.

Examples

• Camera
• Bluetooth
• Audio
• USB
• Sensors


------------------------------------------------------------
5. Linux Kernel
------------------------------------------------------------

This is the lowest layer of Android architecture.

It provides communication between hardware and software.

Responsibilities

• Memory Management
• Process Management
• Device Drivers
• Security
• Network Management
• Power Management


============================================================
Working of Android Architecture
============================================================


User Opens App
        │
        ▼
Applications Layer
        │
        ▼
Application Framework
        │
        ▼
Android Runtime (ART)
        │
        ▼
Hardware Abstraction Layer (HAL)
        │
        ▼
Linux Kernel
        │
        ▼
Hardware (CPU, Camera, Memory, Sensors)



============================================================
Advantages of Android
============================================================

• Open-source and free.
• Supports millions of apps.
• Easy customization.
• Supports multitasking.
• Large developer community.
• Available on many smartphone brands.


============================================================
Disadvantages
============================================================

• Security risks due to open-source nature.
• Different manufacturers may delay software updates.
• Performance may vary across devices.


============================================================
Applications of Android
============================================================

• Mobile Banking
• Social Media
• Online Shopping
• Education Apps
• Healthcare Apps
• Gaming
• Navigation (GPS)
• Entertainment


============================================================
Exam Definition (2 Marks)
============================================================

Android is an open-source, Linux-based mobile operating system
developed by Google. Its architecture consists of Applications,
Application Framework, Android Runtime (ART) & Libraries,
Hardware Abstraction Layer (HAL), and Linux Kernel.


============================================================
5-Mark Summary
============================================================

• Android is an open-source mobile operating system developed by
  Google.

• It is based on the Linux Kernel.

• Android Architecture has 5 layers:

  1. Applications – User apps like Phone, Camera, WhatsApp.

  2. Application Framework – Provides services such as
     Activity Manager, Window Manager, and Notification Manager.

  3. Android Runtime (ART) & Libraries – Executes apps and
     provides built-in libraries like SQLite and OpenGL.

  4. Hardware Abstraction Layer (HAL) – Connects software with
     hardware devices.

  5. Linux Kernel – Handles memory management, security,
     device drivers, networking, and power management.

• This layered architecture makes Android efficient, secure,
  flexible, and easy to develop applications for.
      
      `
    },
    {
      id: 5,
      question: "5. Explain the 3-Tier Architecture for Mobile Computing with a neat diagram.",
      answer: "",
      codeExample: `
============================================================
       Explain the 3-Tier Architecture for Mobile Computing
                  with a Neat Diagram
============================================================

============================================================
What is 3-Tier Architecture?
============================================================

3-Tier Architecture is a software architecture used in mobile
application development. It divides the application into three
separate layers:

• Presentation Tier (User Interface)
• Business Logic Tier (Application Layer)
• Data Tier (Database Layer)

This separation makes the application easy to develop,
maintain, and secure.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

3-Tier Architecture is a software architecture that divides a
mobile application into three layers: Presentation Layer,
Business Logic Layer, and Data Layer, where each layer
performs a specific function.


============================================================
Neat Diagram of 3-Tier Architecture
============================================================

                     +----------------------------------+
                     |      Presentation Tier           |
                     | (Mobile App / User Interface)    |
                     | Login, Home, Profile, Menu       |
                     +---------------+------------------+
                                     |
                                     |
                                     ▼
                     +----------------------------------+
                     |      Business Logic Tier         |
                     | Application Logic                |
                     | Validation                       |
                     | Authentication                   |
                     | API Processing                   |
                     +---------------+------------------+
                                     |
                                     |
                                     ▼
                     +----------------------------------+
                     |           Data Tier              |
                     | Database (MySQL, SQLite,         |
                     | Firebase, Oracle, etc.)          |
                     +----------------------------------+


============================================================
Layers of 3-Tier Architecture
============================================================

------------------------------------------------------------
1. Presentation Tier (User Interface)
------------------------------------------------------------

What is Presentation Tier?

This is the top layer where users interact with the
application.

It displays information and accepts user input.

Responsibilities

• Displays screens and menus.
• Accepts user input.
• Sends user requests to the Business Logic Layer.
• Displays results received from the Business Logic Layer.

Example

• Login Screen
• Registration Screen
• Home Screen
• Product List


------------------------------------------------------------
2. Business Logic Tier (Application Layer)
------------------------------------------------------------

What is Business Logic Tier?

This is the middle layer where all the application logic and
processing are performed.

It acts as a bridge between the Presentation Layer and the
Data Layer.

Responsibilities

• Processes user requests.
• Performs calculations.
• Validates user input.
• Implements business rules.
• Communicates with the database.

Example

When a user logs in:

• Check username and password.
• Verify user credentials.
• Send request to the database.


------------------------------------------------------------
3. Data Tier (Database Layer)
------------------------------------------------------------

What is Data Tier?

This is the bottom layer where application data is stored and
managed.

Responsibilities

• Stores application data.
• Retrieves data.
• Updates records.
• Deletes records.
• Ensures data security.

Examples of Databases

• SQLite
• MySQL
• Firebase
• Oracle
• SQL Server


============================================================
Working of 3-Tier Architecture
============================================================

                   User
                    │
                    ▼
          Presentation Tier
            (Login Screen)
                    │
                    ▼
         Business Logic Tier
    (Check Username & Password)
                    │
                    ▼
               Data Tier
              (Database)
                    │
                    ▼
            Result Returned
                    │
                    ▼
     User Gets Login Success/Failure


============================================================
Advantages of 3-Tier Architecture
============================================================

• Easy to maintain.
• Better security.
• Improves performance.
• Reusable business logic.
• Easy to update individual layers.
• Supports team development.
• Scalable for large applications.


============================================================
Disadvantages
============================================================

• More complex than a single-tier architecture.
• Higher development time.
• More communication between layers.
• Slightly increased implementation cost.


============================================================
Applications of 3-Tier Architecture
============================================================

• Mobile Banking Apps
• E-Commerce Apps
• Hospital Management Apps
• Food Delivery Apps
• College Management Systems
• Online Shopping Apps
• Social Media Apps


============================================================
Difference Between the Three Tiers
============================================================

+------------------------+---------------------------------------------+--------------------------------------+
| Tier                   | Purpose                                     | Example                              |
+------------------------+---------------------------------------------+--------------------------------------+
| Presentation Tier      | Displays the user interface and accepts     | Login Screen, Home Screen            |
|                        | input.                                      |                                      |
+------------------------+---------------------------------------------+--------------------------------------+
| Business Logic Tier    | Processes data and applies business rules.  | Login validation, Payment processing |
+------------------------+---------------------------------------------+--------------------------------------+
| Data Tier              | Stores and manages application data.        | MySQL, SQLite, Firebase              |
+------------------------+---------------------------------------------+--------------------------------------+


============================================================
Exam Definition (2 Marks)
============================================================

3-Tier Architecture is a software architecture used in mobile
computing that divides an application into Presentation Tier,
Business Logic Tier, and Data Tier to improve maintainability,
security, and scalability.


============================================================
5-Mark Summary
============================================================

• 3-Tier Architecture separates a mobile application into
  three layers.

• Presentation Tier – Provides the user interface and accepts
  user input.

• Business Logic Tier – Processes requests, performs
  validation, and implements business rules.

• Data Tier – Stores and manages data using databases like
  SQLite, MySQL, or Firebase.

• Advantages: Easy maintenance, better security, improved
  scalability, code reusability, and easier development.

• This architecture is widely used in banking, e-commerce,
  healthcare, food delivery, and other mobile applications.
      `
    },
    {
      id: 6,
      question: "6. Explain the Design Considerations for Mobile Computing.",
      answer: "",
      codeExample: `
============================================================
         Explain the Design Considerations for Mobile Computing
============================================================

============================================================
What are Design Considerations for Mobile Computing?
============================================================

Design Considerations are the important factors that developers
must consider while designing and developing a mobile application
to ensure it is user-friendly, efficient, secure, and performs
well on different mobile devices.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Design Considerations for Mobile Computing are the guidelines
and factors that help developers create efficient, secure, and
user-friendly mobile applications.


============================================================
Design Considerations for Mobile Computing
============================================================

------------------------------------------------------------
1. User Interface (UI)
------------------------------------------------------------

The application should have a simple, attractive, and
easy-to-use interface.

Example

• Large buttons
• Clear icons
• Easy navigation

------------------------------------------------------------
2. Screen Size and Resolution
------------------------------------------------------------

Mobile devices have different screen sizes and resolutions.

The application should adjust automatically to different screen
sizes (Responsive Design).

Example

• Smartphone
• Tablet

------------------------------------------------------------
3. Performance
------------------------------------------------------------

The application should be fast and responsive.

Considerations

• Fast loading
• Smooth scrolling
• Quick response to user actions

------------------------------------------------------------
4. Battery Consumption
------------------------------------------------------------

The application should use minimum battery power.

Example

• Reduce background processes.
• Use GPS only when required.

------------------------------------------------------------
5. Network Connectivity
------------------------------------------------------------

Internet connection may be slow or unavailable.

The application should work efficiently under different network
conditions.

Example

• Support offline mode.
• Synchronize data when the internet is available.

------------------------------------------------------------
6. Data Storage
------------------------------------------------------------

Store data efficiently using local or cloud storage.

Example

• SQLite
• Firebase
• Cloud Database

------------------------------------------------------------
7. Security
------------------------------------------------------------

Protect user information from unauthorized access.

Considerations

• User authentication
• Data encryption
• Secure login

------------------------------------------------------------
8. Device Compatibility
------------------------------------------------------------

The application should work properly on different devices and
Android versions.

Example

• Samsung
• Xiaomi
• Vivo
• Oppo

------------------------------------------------------------
9. Memory Management
------------------------------------------------------------

The application should use memory efficiently to avoid crashes
and improve performance.

Example

• Release unused memory.
• Optimize images and resources.

------------------------------------------------------------
10. Notifications
------------------------------------------------------------

Provide useful notifications without disturbing users.

Example

• Order confirmation
• Payment success
• New message alerts

------------------------------------------------------------
11. Accessibility
------------------------------------------------------------

The app should be easy to use for all users, including people
with disabilities.

Example

• Large fonts
• Voice support
• High-contrast colors

------------------------------------------------------------
12. Maintenance and Updates
------------------------------------------------------------

The application should be easy to update and maintain.

Example

• Bug fixes
• New features
• Security updates


============================================================
Design Consideration Flow
============================================================

User Requirements
        │
        ▼
UI Design
        │
        ▼
Performance & Security
        │
        ▼
Network & Storage
        │
        ▼
Testing
        │
        ▼
Deployment & Maintenance


============================================================
Advantages of Good Design
============================================================

• Better user experience.
• Faster application performance.
• Improved security.
• Lower battery consumption.
• Easy maintenance.
• Supports multiple devices.
• Higher customer satisfaction.


============================================================
Disadvantages (If Design is Poor)
============================================================

• Slow performance.
• High battery usage.
• Security risks.
• Frequent crashes.
• Poor user experience.
• Difficult maintenance.


============================================================
Applications
============================================================

Good design considerations are important for:

• Banking Apps
• Shopping Apps
• Food Delivery Apps
• Healthcare Apps
• Educational Apps
• Social Media Apps
• Navigation Apps


============================================================
Exam Definition (2 Marks)
============================================================

Design Considerations for Mobile Computing are the important
factors such as UI, performance, security, battery usage,
network connectivity, data storage, and compatibility that
must be considered while developing a mobile application.


============================================================
5-Mark Summary
============================================================

Design Considerations help build efficient, secure, and
user-friendly mobile applications.

Important considerations include:

• User Interface (UI)
• Screen Size and Resolution
• Performance
• Battery Consumption
• Network Connectivity
• Data Storage
• Security
• Device Compatibility
• Memory Management
• Notifications
• Accessibility
• Maintenance and Updates

Considering these factors improves performance, usability,
security, and reliability of mobile applications.
      `
    },
    {
      id: 7,
      question: "7. Explain the steps for setting up the Android app development environment and emulator.",
      answer: "",
      codeExample: `
============================================================
    Explain the Steps for Setting Up the Android App
       Development Environment and Emulator
============================================================


============================================================
What is Android Development Environment?
============================================================

The Android Development Environment is the collection of
software and tools required to develop, test, and run
Android applications.

The main tools include:

• Java Development Kit (JDK) (or the JDK bundled with Android Studio)
• Android Studio
• Android SDK
• Android Emulator (AVD)


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

The Android Development Environment is a set of software
tools used to create, test, and run Android applications.


============================================================
Steps for Setting Up the Android Development Environment
============================================================

------------------------------------------------------------
Step 1: Install Java Development Kit (JDK)
------------------------------------------------------------

• Download and install the JDK (if required).
• Set the JAVA_HOME environment variable.
• Verify the installation using:

java -version

Purpose:

Provides Java support for Android development.


------------------------------------------------------------
Step 2: Download and Install Android Studio
------------------------------------------------------------

• Download Android Studio from the official Android Developers website.
• Run the installer.
• Follow the installation wizard.
• Select the required components.

Purpose:

Android Studio is the official IDE used to develop Android applications.


------------------------------------------------------------
Step 3: Install Android SDK
------------------------------------------------------------

• Open Android Studio.
• Go to SDK Manager.
• Install:

  • Android SDK
  • SDK Platform
  • SDK Build Tools
  • Platform Tools

Purpose:

SDK provides the libraries and tools needed to build Android applications.


------------------------------------------------------------
Step 4: Create a New Android Project
------------------------------------------------------------

• Open Android Studio.
• Click New Project.
• Select a template (e.g., Empty Activity).
• Enter:

  • Project Name
  • Package Name
  • Language (Java/Kotlin)
  • Minimum SDK Version

• Click Finish.


------------------------------------------------------------
Step 5: Create an Android Virtual Device (AVD)
------------------------------------------------------------

The Android Emulator runs on an Android Virtual Device (AVD).

Steps

• Open Device Manager.
• Click Create Device.
• Select a device (e.g., Pixel 6).
• Choose an Android system image.
• Download the image if needed.
• Click Finish.


------------------------------------------------------------
Step 6: Start the Emulator
------------------------------------------------------------

• Open Device Manager.
• Click the Play (▶) button beside the AVD.
• Wait for Android to boot.

The emulator is now ready for testing applications.


------------------------------------------------------------
Step 7: Run the Application
------------------------------------------------------------

• Click the Run (▶) button in Android Studio.
• Select:

  • Android Emulator, or
  • Physical Android Device.

• Android Studio builds and installs the application automatically.


============================================================
Android Emulator
============================================================

------------------------------------------------------------
What is an Android Emulator?
------------------------------------------------------------

An Android Emulator is software that simulates an Android
device on a computer. It allows developers to test
applications without using a physical smartphone.


------------------------------------------------------------
Features
------------------------------------------------------------

• Simulates Android devices.
• Tests applications on different Android versions.
• Supports GPS, camera, and network simulation.
• Easy debugging.


============================================================
Diagram of Android Development Environment
============================================================

                 Developer
                     │
                     ▼
             Android Studio
                     │
                     ▼
               Android SDK
                     │
                     ▼
        Android Emulator (AVD)
                     │
                     ▼
         Run & Test Application


============================================================
Advantages of Android Emulator
============================================================

• No need for a physical device.
• Easy application testing.
• Supports multiple Android versions.
• Easy debugging.
• Saves testing cost.


============================================================
Disadvantages
============================================================

• Slower than a physical device.
• Requires more RAM and CPU.
• Some hardware features may not be fully supported.


============================================================
Advantages of Android Development Environment
============================================================

• Official tools provided by Google.
• Easy app development.
• Built-in debugging tools.
• Supports Java and Kotlin.
• Integrated emulator.
• Easy testing and deployment.


============================================================
Exam Definition (2 Marks)
============================================================

The Android Development Environment consists of Android
Studio, Android SDK, JDK, and Android Emulator, which are
used to develop, test, and run Android applications.


============================================================
5-Mark Summary
============================================================

1. Install the JDK (if required).

2. Download and install Android Studio.

3. Install the Android SDK using SDK Manager.

4. Create a new Android project.

5. Create an Android Virtual Device (AVD) using Device Manager.

6. Start the Android Emulator.

7. Run and test the application using the emulator or a
   physical Android device.

The Android Emulator helps developers test applications
without requiring a real Android device.
      `
    },
    {
      id: 8,
      question: "8. Explain the Case Study of Mobile App Development.",
      answer: "",
      codeExample: `
============================================================
           Explain the Case Study of Mobile App Development
============================================================

============================================================
What is a Case Study in Mobile App Development?
============================================================

A Case Study of Mobile App Development explains how a mobile
application is developed from idea to deployment by following
the Mobile Application Development Life Cycle (MADLC).

It includes:

• Requirement analysis
• Design
• Development
• Testing
• Deployment
• Maintenance


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Case Study of Mobile App Development is a practical example
that explains the complete process of developing a mobile
application from planning to maintenance.


============================================================
Example Case Study: Food Delivery Mobile App
============================================================

Suppose a company wants to develop a Food Delivery App.

The app should allow users to:

• Register and log in.
• Browse restaurants and food items.
• Add food to the cart.
• Make online payments.
• Track their orders.


============================================================
Phases of Mobile App Development
============================================================

------------------------------------------------------------
1. Requirement Analysis
------------------------------------------------------------

Collect and understand the client's requirements.

Requirements

• User Registration and Login
• Restaurant List
• Food Menu
• Cart
• Online Payment
• Order Tracking
• Notifications


------------------------------------------------------------
2. Planning
------------------------------------------------------------

Prepare the project plan.

Decide:

• Budget
• Timeline
• Team Members
• Development Tools

Technologies Used

• Android Studio
• Java/Kotlin
• Firebase or MySQL


------------------------------------------------------------
3. UI/UX Design
------------------------------------------------------------

Design attractive and user-friendly screens.

Screens

• Splash Screen
• Login Screen
• Home Screen
• Restaurant List
• Food Details
• Cart
• Payment Screen
• Order History


------------------------------------------------------------
4. Development (Coding)
------------------------------------------------------------

Develop all application features.

Modules

• User Login
• Restaurant Module
• Cart Module
• Payment Module
• Order Tracking Module


------------------------------------------------------------
5. Testing
------------------------------------------------------------

Test the application before release.

Types of Testing

• Functional Testing
• Performance Testing
• Security Testing
• Usability Testing

Fix any bugs found during testing.


------------------------------------------------------------
6. Deployment
------------------------------------------------------------

Publish the application.

Platforms

• Google Play Store
• Apple App Store

Users can now download and use the app.


------------------------------------------------------------
7. Maintenance
------------------------------------------------------------

After deployment:

• Fix bugs.
• Improve performance.
• Add new features.
• Release updates regularly.

Example:

• Add Dark Mode.
• Add new payment methods.
• Improve delivery tracking.


============================================================
Case Study Flow Diagram
============================================================

Client Requirements
        │
        ▼
Requirement Analysis
        │
        ▼
Planning
        │
        ▼
UI/UX Design
        │
        ▼
Development (Coding)
        │
        ▼
Testing
        │
        ▼
Deployment
        │
        ▼
Maintenance


============================================================
Technologies Used
============================================================

| Technology       | Purpose               |
| ---------------- | --------------------- |
| Android Studio   | App Development       |
| Java/Kotlin      | Programming Language  |
| Firebase / MySQL | Database              |
| Google Maps API  | Location & Navigation |
| Payment Gateway  | Online Payments       |


============================================================
Advantages of Mobile App Development
============================================================

• Easy communication with users.
• Fast access to services.
• Better user experience.
• Secure online transactions.
• Supports business growth.
• Easy maintenance and updates.


============================================================
Challenges
============================================================

• Device compatibility.
• Security issues.
• Internet dependency.
• Battery consumption.
• Performance optimization.


============================================================
Applications of Mobile Apps
============================================================

• Food Delivery Apps
• Banking Apps
• Shopping Apps
• Healthcare Apps
• Education Apps
• Ride Booking Apps
• Social Media Apps


============================================================
Exam Definition (2 Marks)
============================================================

A Case Study of Mobile App Development explains the complete
process of developing a mobile application through Requirement
Analysis, Planning, UI/UX Design, Development, Testing,
Deployment, and Maintenance.


============================================================
5-Mark Summary
============================================================

A Case Study shows how a mobile app is developed from start to
finish.

Example:

Food Delivery App.

Development Process:

• Requirement Analysis
• Planning
• UI/UX Design
• Development (Coding)
• Testing
• Deployment
• Maintenance

Technologies commonly used include Android Studio,
Java/Kotlin, Firebase/MySQL, Google Maps API, and Payment
Gateway.

Following these steps helps create a high-quality, secure,
and user-friendly mobile application.
      `
    },
    {
      id: 11,
      question: "11. Explain App User Interface (UI) Designing in Android. Discuss Mobile UI Resources (Layout, UI Elements, Drawable, and Menu).",
      answer: "",
      codeExample: `
============================================================
      Explain App User Interface (UI) Designing in Android.
 Discuss Mobile UI Resources (Layout, UI Elements, Drawable,
                         and Menu)
============================================================

============================================================
What is App User Interface (UI) Designing?
============================================================

App User Interface (UI) Designing is the process of creating
the visual appearance and layout of an Android application.
It defines how users interact with the app through buttons,
text boxes, images, menus, and other controls.

A good UI should be simple, attractive, responsive, and easy
to use.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

App User Interface (UI) Designing is the process of designing
the screens, layouts, and controls of an Android application
to provide a user-friendly experience.


============================================================
Features of a Good UI
============================================================

• Simple and attractive design.
• Easy navigation.
• Responsive on different screen sizes.
• Fast and user-friendly.
• Consistent look and feel.
• Easy accessibility.


============================================================
Mobile UI Resources in Android
============================================================

Android UI resources are stored in the res folder.

The main UI resources are:

• Layout
• UI Elements (Widgets)
• Drawable
• Menu


============================================================
Android Resource Structure
============================================================

res
│
├── layout
├── drawable
├── menu
├── values
└── mipmap


============================================================
1. Layout
============================================================

What is Layout?

A Layout defines how UI components are arranged on the
screen.

Layout files are stored in:

res/layout/

They are written in XML.

------------------------------------------------------------
Common Layouts
------------------------------------------------------------

• LinearLayout
• RelativeLayout
• ConstraintLayout
• FrameLayout
• TableLayout

------------------------------------------------------------
Example of LinearLayout
------------------------------------------------------------

<?xml version="1.0" encoding="utf-8"?>

<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <TextView
        android:text="Welcome"/>

    <Button
        android:text="Login"/>

</LinearLayout>


------------------------------------------------------------
Advantages
------------------------------------------------------------

• Easy to design screens.
• Organizes UI elements properly.
• Supports responsive design.


============================================================
2. UI Elements (Widgets)
============================================================

What are UI Elements?

UI Elements are the controls that users interact with in an
Android application.

------------------------------------------------------------
Common UI Elements
------------------------------------------------------------

• TextView
• EditText
• Button
• ImageView
• CheckBox
• RadioButton
• Spinner
• ListView

------------------------------------------------------------
Example
------------------------------------------------------------

<TextView
    android:text="Username"/>

<EditText
    android:hint="Enter Username"/>

<Button
    android:text="Login"/>


------------------------------------------------------------
Purpose
------------------------------------------------------------

• Display text.
• Accept user input.
• Perform actions.
• Show images.


============================================================
3. Drawable
============================================================

What is Drawable?

A Drawable is a graphic resource used in Android
applications.

It can be:

• Images
• Icons
• Shapes
• Backgrounds

Drawable files are stored in:

res/drawable/

------------------------------------------------------------
Example
------------------------------------------------------------

<ImageView
    android:layout_width="100dp"
    android:layout_height="100dp"
    android:src="@drawable/logo"/>


Here, logo.png is stored inside the drawable folder.

------------------------------------------------------------
Uses
------------------------------------------------------------

• App icons
• Background images
• Buttons
• Logos


============================================================
4. Menu
============================================================

What is Menu?

A Menu provides options or commands to the user.

Menu files are stored in:

res/menu/

------------------------------------------------------------
Example (menu.xml)
------------------------------------------------------------

<menu xmlns:android="http://schemas.android.com/apk/res/android">

    <item
        android:id="@+id/home"
        android:title="Home"/>

    <item
        android:id="@+id/settings"
        android:title="Settings"/>

</menu>


------------------------------------------------------------
Uses
------------------------------------------------------------

• Navigation
• Settings
• Logout
• Search


============================================================
Working of Android UI Resources
============================================================

User Opens App
       │
       ▼
Layout
       │
       ▼
UI Elements
       │
       ▼
Drawable Resources
       │
       ▼
Menu Options
       │
       ▼
User Interaction


============================================================
Advantages of Android UI Designing
============================================================

• Attractive user interface.
• Better user experience.
• Easy navigation.
• Responsive on different devices.
• Improves application usability.


============================================================
Disadvantages
============================================================

• Complex UI may reduce performance.
• Poor design can confuse users.
• Requires testing on different screen sizes.


============================================================
Difference Between Mobile UI Resources
============================================================

+----------------+----------------------------------------------------+--------------------------+
| Resource       | Purpose                                            | Location                 |
+----------------+----------------------------------------------------+--------------------------+
| Layout         | Arranges UI components on the screen.              | res/layout               |
+----------------+----------------------------------------------------+--------------------------+
| UI Elements    | Controls like Button, TextView, EditText, etc.     | Inside layout XML files  |
+----------------+----------------------------------------------------+--------------------------+
| Drawable       | Stores images, icons, backgrounds, and shapes.     | res/drawable             |
+----------------+----------------------------------------------------+--------------------------+
| Menu           | Provides navigation and command options.           | res/menu                 |
+----------------+----------------------------------------------------+--------------------------+


============================================================
Exam Definition (2 Marks)
============================================================

App UI Designing is the process of creating the user
interface of an Android application. Mobile UI resources
include Layout, UI Elements, Drawable, and Menu, which
together build an attractive and user-friendly application.


============================================================
5-Mark Summary
============================================================

• App UI Designing creates the visual interface of an
  Android app.

• Layout arranges UI components on the screen
  (res/layout).

• UI Elements are controls like TextView, EditText,
  Button, ImageView, CheckBox, and Spinner.

• Drawable stores images, icons, shapes, and
  backgrounds (res/drawable).

• Menu provides navigation and options like Home,
  Settings, and Logout (res/menu).
      
      
      `
    },
    {
      id: 12,
      question: "12. Explain the Activity Life Cycle with a neat diagram.",
      answer: "",
      codeExample: `
============================================================
        Explain the Activity Life Cycle in Android
                 with a Neat Diagram
============================================================

============================================================
What is an Activity?
============================================================

An Activity is a single screen of an Android application.
Every Android app consists of one or more activities that
allow users to interact with the application.

Examples:

• Login Screen
• Home Screen
• Settings Screen

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

An Activity is a component of an Android application that
represents a single screen with which the user can interact.


============================================================
What is Activity Life Cycle?
============================================================

The Activity Life Cycle is the sequence of states that an
activity goes through from the time it is created until it
is destroyed.

Android manages these states using lifecycle callback
methods.


============================================================
Activity Life Cycle Diagram
============================================================

                    App Starts
                        │
                        ▼
                  onCreate()
                        │
                        ▼
                   onStart()
                        │
                        ▼
                   onResume()
                        │
                        ▼
               Activity Running
                        │
        ┌───────────────┴───────────────┐
        │                               │
        ▼                               ▼
    onPause()                     onDestroy()
        │
        ▼
     onStop()
        │
   ┌────┴────┐
   │         │
   ▼         ▼
onRestart()  End
   │
   ▼
onStart()
   │
   ▼
onResume()


============================================================
Activity Life Cycle Methods
============================================================

------------------------------------------------------------
1. onCreate()
------------------------------------------------------------

• Called when the activity is created for the first time.
• Used to initialize the activity.
• Loads the user interface using setContentView().

Example

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
}

------------------------------------------------------------
2. onStart()
------------------------------------------------------------

• Called when the activity becomes visible to the user.
• The activity is not yet ready for user interaction.

------------------------------------------------------------
3. onResume()
------------------------------------------------------------

• Called when the activity comes to the foreground.
• The user can now interact with the application.
• This is the active/running state.

------------------------------------------------------------
4. onPause()
------------------------------------------------------------

• Called when another activity partially covers the current
  activity.
• The activity is still visible but loses focus.

Example

A phone call arrives while using the app.

------------------------------------------------------------
5. onStop()
------------------------------------------------------------

• Called when the activity is completely hidden.
• The activity is no longer visible to the user.

Example

User opens another application.

------------------------------------------------------------
6. onRestart()
------------------------------------------------------------

• Called when a stopped activity is about to start again.
• After this, onStart() and onResume() are called.

Example

User returns to the app after switching to another app.

------------------------------------------------------------
7. onDestroy()
------------------------------------------------------------

• Called before the activity is destroyed.
• Used to release resources and perform cleanup.

Example

User closes the application.


============================================================
Working of Activity Life Cycle
============================================================

App Launch
     │
     ▼
onCreate()
     │
     ▼
onStart()
     │
     ▼
onResume()
     │
     ▼
User Uses App
     │
     ▼
onPause()
     │
     ▼
onStop()
     │
     ▼
onRestart() (if user returns)
     │
     ▼
onStart()
     │
     ▼
onResume()
     │
     ▼
onDestroy() (when app closes)


============================================================
Importance of Activity Life Cycle
============================================================

• Manages application resources efficiently.
• Saves and restores activity state.
• Improves application performance.
• Prevents memory leaks.
• Provides a smooth user experience.


============================================================
Advantages
============================================================

• Efficient memory management.
• Better performance.
• Proper handling of app interruptions.
• Easy state restoration.
• Improved battery usage.


============================================================
Disadvantages
============================================================

• Beginners may find it difficult to understand.
• Incorrect handling may cause crashes or data loss.


============================================================
Summary of Lifecycle Methods
============================================================

| Method      | Purpose                                                             |
| ------------| ------------------------------------------------------------------- |
| onCreate()  | Initializes the activity and loads the UI.                          |
| onStart()   | Makes the activity visible.                                         |
| onResume()  | Activity comes to the foreground and is ready for user interaction. |
| onPause()   | Activity loses focus temporarily.                                   |
| onStop()    | Activity becomes completely hidden.                                 |
| onRestart() | Restarts a stopped activity.                                        |
| onDestroy() | Cleans up resources before the activity is destroyed.               |


============================================================
Exam Definition (2 Marks)
============================================================

The Activity Life Cycle is the sequence of callback methods
that an Android activity passes through from its creation to
its destruction. The main methods are onCreate(), onStart(),
onResume(), onPause(), onStop(), onRestart(), and
onDestroy().


============================================================
5-Mark Summary
============================================================

• An Activity represents a single screen in an Android
  application.

• The Activity Life Cycle manages the activity from creation
  to destruction.

• Lifecycle methods:

  - onCreate() – Initializes the activity.
  - onStart() – Makes the activity visible.
  - onResume() – Activity becomes active and ready for user
    interaction.
  - onPause() – Activity temporarily loses focus.
  - onStop() – Activity becomes invisible.
  - onRestart() – Restarts a stopped activity.
  - onDestroy() – Cleans up resources before closing.

• Proper use of the Activity Life Cycle improves performance,
  memory management, and user experience.
      
      `
    },
    {
      id: 13,
      question: "13. Explain the interaction among Activities using Intents. Discuss startActivity(), putExtra(), and startActivityForResult().",
      answer: "",
      codeExample: `
======================================================================
Explain the Interaction among Activities using Intents.
Discuss startActivity(), putExtra(), and startActivityForResult().
======================================================================


======================================================================
What is an Intent?
======================================================================

An Intent is a messaging object in Android that is used to start
another Activity, Service, or Broadcast Receiver. It also allows
data to be passed from one Activity to another.

----------------------------------------------------------------------
Definition (2 Marks)
----------------------------------------------------------------------

An Intent is an Android object used to communicate between
application components, especially to start one activity from
another and transfer data.


======================================================================
Interaction Among Activities Using Intents
======================================================================

Suppose an app has two activities:

• MainActivity
• SecondActivity

When the user clicks a button in MainActivity, Android uses an
Intent to open SecondActivity. Data such as a username or ID can
also be sent through the Intent.


======================================================================
Diagram of Activity Interaction
======================================================================

        MainActivity
             │
             │  Intent
             ▼
       SecondActivity
             │
             │ (Optional Result)
             ▼
        MainActivity


======================================================================
Types of Intents
======================================================================

----------------------------------------------------------------------
1. Explicit Intent
----------------------------------------------------------------------

Used to open a specific Activity.

Commonly used within the same application.

----------------------------------------------------------------------
2. Implicit Intent
----------------------------------------------------------------------

Used to perform an action without specifying the target Activity.

Example: Open a web browser or camera.


======================================================================
1. startActivity()
======================================================================

----------------------------------------------------------------------
What is startActivity()?
----------------------------------------------------------------------

The startActivity() method is used to start a new activity.

----------------------------------------------------------------------
Syntax
----------------------------------------------------------------------

Intent intent = new Intent(MainActivity.this, SecondActivity.class);
startActivity(intent);

----------------------------------------------------------------------
Example
----------------------------------------------------------------------

MainActivity.java

Intent intent = new Intent(MainActivity.this, SecondActivity.class);
startActivity(intent);

----------------------------------------------------------------------
Explanation
----------------------------------------------------------------------

• Creates an Intent.
• Specifies SecondActivity as the destination.
• Opens the new activity.


======================================================================
2. putExtra()
======================================================================

----------------------------------------------------------------------
What is putExtra()?
----------------------------------------------------------------------

The putExtra() method is used to send data from one activity to
another.

----------------------------------------------------------------------
Syntax
----------------------------------------------------------------------

Intent intent = new Intent(MainActivity.this, SecondActivity.class);
intent.putExtra("name", "Raj");
startActivity(intent);

----------------------------------------------------------------------
Receiving the Data
----------------------------------------------------------------------

SecondActivity.java

String name = getIntent().getStringExtra("name");

----------------------------------------------------------------------
Explanation
----------------------------------------------------------------------

• "name" is the key.
• "Raj" is the value.
• getStringExtra() retrieves the value in the second activity.


======================================================================
3. startActivityForResult()
======================================================================

----------------------------------------------------------------------
What is startActivityForResult()?
----------------------------------------------------------------------

The startActivityForResult() method is used when one activity
starts another activity and expects a result back.

----------------------------------------------------------------------
Syntax
----------------------------------------------------------------------

Intent intent = new Intent(MainActivity.this, SecondActivity.class);
startActivityForResult(intent, 1);

----------------------------------------------------------------------
Example
----------------------------------------------------------------------

MainActivity.java

Intent intent = new Intent(MainActivity.this, SecondActivity.class);
startActivityForResult(intent, 1);

SecondActivity.java

Intent result = new Intent();
result.putExtra("message", "Success");
setResult(RESULT_OK, result);
finish();

----------------------------------------------------------------------
Explanation
----------------------------------------------------------------------

• startActivityForResult() starts the second activity.
• The second activity sends a result using setResult().
• finish() closes the second activity and returns to the first.

----------------------------------------------------------------------
Note
----------------------------------------------------------------------

In newer Android versions, startActivityForResult() is deprecated
and replaced by the Activity Result API. However, many exams still
ask about startActivityForResult(), so it is important to know it.


======================================================================
Working of Intents
======================================================================

User Clicks Button
        │
        ▼
MainActivity
        │
        ▼
Intent Created
        │
        ▼
startActivity()
        │
        ▼
SecondActivity Opens
        │
        ▼
(Optional)
putExtra() Sends Data
        │
        ▼
startActivityForResult()
        │
        ▼
Result Returned to MainActivity


======================================================================
Advantages of Intents
======================================================================

• Easy communication between activities.
• Allows data sharing.
• Supports navigation between screens.
• Can start services and broadcast receivers.
• Improves modular application design.


======================================================================
Disadvantages
======================================================================

• Incorrect Intent data may cause errors.
• Passing large amounts of data is not recommended.
• Managing many activities can become complex.


======================================================================
Difference Between startActivity(), putExtra(), and
startActivityForResult()
======================================================================

+--------------------------------------+--------------------------------------+
| Method                               | Purpose                              |
+--------------------------------------+--------------------------------------+
| startActivity()                      | Starts a new activity.               |
+--------------------------------------+--------------------------------------+
| putExtra()                           | Sends data to another activity.      |
+--------------------------------------+--------------------------------------+
| startActivityForResult()             | Starts an activity and receives a    |
|                                      | result back.                         |
+--------------------------------------+--------------------------------------+


======================================================================
Exam Definition (2 Marks)
======================================================================

An Intent is an Android object used to communicate between
activities. startActivity() opens a new activity, putExtra()
sends data between activities, and startActivityForResult()
starts an activity and receives a result from it.


======================================================================
5-Mark Summary
======================================================================

• Intent is used for communication between Android activities.

• Types of Intents:
  - Explicit Intent
  - Implicit Intent

• startActivity() opens a new activity.

• putExtra() passes data such as text, numbers, or objects
  between activities.

• startActivityForResult() starts another activity and receives
  a result back (used in older Android versions; newer apps use
  the Activity Result API).

• Intents make Android applications interactive, modular, and
  easy to navigate.
      
      `
    },
    {
      id: 14,
      question: "14. Explain Threads, AsyncTask, and Services in Android. Discuss the Service Life Cycle.",
      answer: "",
      codeExample: `
============================================================
     Explain Threads, AsyncTask, and Services in Android.
            Discuss the Service Life Cycle.
============================================================


============================================================
1. Thread in Android
============================================================

------------------------------------------------------------
What is a Thread?
------------------------------------------------------------

A Thread is a separate path of execution that allows a task to
run in the background without stopping the main application.

Android has:

• Main Thread (UI Thread) – Handles the user interface.
• Background Thread – Performs time-consuming tasks.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Thread is a lightweight process used to execute tasks in the
background without blocking the user interface.

------------------------------------------------------------
Example
------------------------------------------------------------

Thread thread = new Thread(new Runnable() {
    @Override
    public void run() {
        // Background task
        System.out.println("Downloading File...");
    }
});

thread.start();


------------------------------------------------------------
Advantages
------------------------------------------------------------

• Keeps the UI responsive.
• Performs multiple tasks simultaneously.
• Improves application performance.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Difficult to manage.
• Synchronization issues may occur.


============================================================
2. AsyncTask
============================================================

------------------------------------------------------------
What is AsyncTask?
------------------------------------------------------------

AsyncTask is an Android class used to perform background
operations and update the UI thread after completion.

Note:

AsyncTask is deprecated in recent Android versions, but it is
still commonly asked in exams.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

AsyncTask is a class used to perform background tasks and
update the user interface without blocking the main thread.

------------------------------------------------------------
AsyncTask Methods
------------------------------------------------------------

• onPreExecute() → Runs before the background task starts.

• doInBackground() → Performs the background operation.

• onProgressUpdate() → Updates progress (optional).

• onPostExecute() → Runs after the background task finishes.

------------------------------------------------------------
Example
------------------------------------------------------------

java
class MyTask extends AsyncTask<Void, Void, String> {

    protected String doInBackground(Void... params) {
        return "Download Complete";
    }

    protected void onPostExecute(String result) {
        System.out.println(result);
    }
}


------------------------------------------------------------
Advantages
------------------------------------------------------------

• Easy background processing.
• Automatically updates the UI.
• Simple to implement.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Deprecated in newer Android versions.
• Not suitable for long-running tasks.


============================================================
3. Service in Android
============================================================

------------------------------------------------------------
What is a Service?
------------------------------------------------------------

A Service is an Android component that runs in the background
without a user interface.

It performs long-running operations even when the application
is not open.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Service is an Android component that performs long-running
operations in the background without interacting directly with
the user.

------------------------------------------------------------
Examples
------------------------------------------------------------

• Music Player
• File Download
• Location Tracking
• Data Synchronization


============================================================
Types of Services
============================================================

------------------------------------------------------------
1. Started Service
------------------------------------------------------------

• Started using startService().
• Runs until it is stopped.

------------------------------------------------------------
2. Bound Service
------------------------------------------------------------

• Started using bindService().
• Runs while another component is connected.

------------------------------------------------------------
3. Foreground Service
------------------------------------------------------------

• Runs with a visible notification.

Example:

Music Player, GPS Navigation.


============================================================
Service Life Cycle
============================================================

A Service goes through different stages from creation to
destruction.

------------------------------------------------------------
Service Life Cycle Diagram
------------------------------------------------------------

text
startService()
      │
      ▼
  onCreate()
      │
      ▼
onStartCommand()
      │
      ▼
Service Running
      │
      ▼
 stopService()
      │
      ▼
  onDestroy()



============================================================
Service Life Cycle Methods
============================================================

------------------------------------------------------------
1. onCreate()
------------------------------------------------------------

• Called when the service is created.
• Initializes the service.

------------------------------------------------------------
2. onStartCommand()
------------------------------------------------------------

• Called every time the service is started using startService().
• Executes the background task.

------------------------------------------------------------
3. onBind()
------------------------------------------------------------

• Called when another component binds to the service.
• Used for bound services.

------------------------------------------------------------
4. onUnbind()
------------------------------------------------------------

• Called when all clients disconnect from the service.

------------------------------------------------------------
5. onDestroy()
------------------------------------------------------------

• Called before the service is destroyed.
• Releases resources and performs cleanup.


============================================================
Working of a Service
============================================================

text
Application Starts
        │
        ▼
startService()
        │
        ▼
onCreate()
        │
        ▼
onStartCommand()
        │
        ▼
Background Task Running
        │
        ▼
stopService()
        │
        ▼
onDestroy()



============================================================
Difference Between Thread, AsyncTask, and Service
============================================================

+----------------+-------------------------+-------------------------------+-------------------------------+
| Feature        | Thread                  | AsyncTask                     | Service                       |
+----------------+-------------------------+-------------------------------+-------------------------------+
| Purpose        | Runs background tasks   | Background task with UI       | Long-running background tasks |
|                |                         | update                        |                               |
+----------------+-------------------------+-------------------------------+-------------------------------+
| User Interface | Cannot update UI        | Can update UI                 | No UI                         |
|                | directly                |                               |                               |
+----------------+-------------------------+-------------------------------+-------------------------------+
| Execution Time | Short/Long              | Short tasks                   | Long-running tasks            |
+----------------+-------------------------+-------------------------------+-------------------------------+
| Status         | Supported               | Deprecated                    | Supported                     |
+----------------+-------------------------+-------------------------------+-------------------------------+


============================================================
Advantages of Services
============================================================

• Performs tasks in the background.
• Keeps the UI responsive.
• Suitable for long-running operations.
• Can continue even when the app is minimized.


============================================================
Disadvantages
============================================================

• Uses system resources.
• Incorrect implementation may drain the battery.
• Requires proper lifecycle management.


============================================================
Exam Definition (2 Marks)
============================================================

Thread:

A lightweight process used for background execution.

------------------------------------------------------------

AsyncTask:

A class used to perform background tasks and update the UI
(deprecated in newer Android versions).

------------------------------------------------------------

Service:

An Android component that performs long-running background
operations without a user interface.


============================================================
5-Mark Summary
============================================================

• Thread executes tasks in the background without blocking the
  UI.

• AsyncTask performs background operations and updates the UI
  after completion (deprecated but important for exams).

• Service runs long-running background tasks without a user
  interface.

• Types of Services:
  - Started Service
  - Bound Service
  - Foreground Service

• Service Life Cycle:
  onCreate() → onStartCommand() → Service Running →
  onDestroy() (with onBind()/onUnbind() for bound services).

These components improve performance, responsiveness, and
multitasking in Android applications.
      
      `
    },
    {
      id: 15,
      question: "15. Explain Notifications and Broadcast Receivers with suitable examples.",
      answer: "",
      codeExample: `
============================================================
        Explain Notifications and Broadcast Receivers
               with Suitable Examples
============================================================


############################################################
1. Notifications in Android
############################################################

============================================================
What is a Notification?
============================================================

A Notification is a message displayed outside the application
to inform the user about an event or update. Notifications
appear in the notification bar (status bar).

Examples include new messages, emails, reminders, and app
updates.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Notification is a message that alerts the user about
important events or updates, even when the application is
not open.


============================================================
Features of Notifications
============================================================

• Alerts users about important events.
• Appears in the notification bar.
• Can open an app when tapped.
• Works even if the app is running in the background.


============================================================
Example of Notification
============================================================

java
NotificationCompat.Builder builder =
    new NotificationCompat.Builder(this, "channel_id")
        .setSmallIcon(R.drawable.ic_launcher)
        .setContentTitle("New Message")
        .setContentText("You have a new notification")
        .setPriority(NotificationCompat.PRIORITY_DEFAULT);

NotificationManagerCompat notificationManager =
    NotificationManagerCompat.from(this);

notificationManager.notify(1, builder.build());


------------------------------------------------------------
Explanation
------------------------------------------------------------

• setSmallIcon() → Sets the notification icon.
• setContentTitle() → Sets the notification title.
• setContentText() → Sets the notification message.
• notify() → Displays the notification.


============================================================
Uses of Notifications
============================================================

• New message alerts
• Email notifications
• App update notifications
• Payment confirmation
• Calendar reminders
• Order status updates


============================================================
Advantages of Notifications
============================================================

• Keeps users informed.
• Improves user engagement.
• Works even when the app is closed.
• Easy to implement.


============================================================
Disadvantages
============================================================

• Too many notifications may annoy users.
• Improper use can reduce user experience.



############################################################
2. Broadcast Receiver
############################################################

============================================================
What is a Broadcast Receiver?
============================================================

A Broadcast Receiver is an Android component that receives
and responds to broadcast messages (events) sent by the
Android system or other applications.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Broadcast Receiver is an Android component that listens for
and responds to system-wide or application broadcast events.


============================================================
Examples of Broadcast Events
============================================================

• Battery Low
• Device Boot Completed
• Airplane Mode Changed
• Network Connectivity Changed
• SMS Received


============================================================
Creating a Broadcast Receiver
============================================================

java
public class MyReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {

        Toast.makeText(context,
                "Broadcast Received!",
                Toast.LENGTH_SHORT).show();
    }
}



============================================================
Registering Broadcast Receiver (AndroidManifest.xml)
============================================================

xml
<receiver android:name=".MyReceiver">
    <intent-filter>
        <action android:name="android.intent.action.BOOT_COMPLETED"/>
    </intent-filter>
</receiver>


------------------------------------------------------------
Explanation
------------------------------------------------------------

• <receiver> registers the Broadcast Receiver.
• <intent-filter> specifies which broadcast event to receive.
• BOOT_COMPLETED runs the receiver after the device finishes booting.


============================================================
Working of Broadcast Receiver
============================================================

System Event
(Battery Low / SMS / Boot Completed)
          │
          ▼
Broadcast Sent
          │
          ▼
Broadcast Receiver
          │
          ▼
onReceive() Method
          │
          ▼
Required Action Performed


============================================================
Advantages of Broadcast Receiver
============================================================

• Responds automatically to system events.
• Saves resources by running only when needed.
• Useful for background event handling.


============================================================
Disadvantages
============================================================

• Limited execution time.
• Incorrect implementation may affect performance.
• Some broadcasts require special permissions.


============================================================
Difference Between Notification and Broadcast Receiver
============================================================

+-----------------------------------------------+-----------------------------------------------+
| Notification                                  | Broadcast Receiver                            |
+-----------------------------------------------+-----------------------------------------------+
| Displays alerts to the user.                  | Receives and handles broadcast events.        |
+-----------------------------------------------+-----------------------------------------------+
| Visible in the notification bar.              | Runs in the background.                       |
+-----------------------------------------------+-----------------------------------------------+
| Used to inform users.                         | Used to respond to system or app events.      |
+-----------------------------------------------+-----------------------------------------------+
| Example: New message alert.                   | Example: Battery low event.                   |
+-----------------------------------------------+-----------------------------------------------+


============================================================
Real-Life Example
============================================================

------------------------------------------------------------
Notification
------------------------------------------------------------

A user receives a WhatsApp message. A notification appears:

New Message

Hi Raj, are you available?

------------------------------------------------------------
Broadcast Receiver
------------------------------------------------------------

When the phone battery becomes low, Android sends a Battery
Low broadcast. The Broadcast Receiver receives it and can
display a warning or start battery-saving actions.


============================================================
Exam Definition (2 Marks)
============================================================

Notification:

A message displayed in the notification bar to inform users
about important events or updates.

------------------------------------------------------------

Broadcast Receiver:

An Android component that receives and responds to
system-wide or application broadcast events.


============================================================
5-Mark Summary
============================================================

• Notifications inform users about important events such as
  messages, reminders, and updates.

• Notifications are created using
  NotificationCompat.Builder and displayed using
  NotificationManagerCompat.

• A Broadcast Receiver listens for system or application
  broadcast events.

• Common broadcasts include Battery Low, Boot Completed,
  SMS Received, and Network Changes.

• The main callback method is onReceive(), which executes
  when a broadcast is received.

• Notifications improve user engagement, while Broadcast
  Receivers enable applications to respond automatically to
  system events.
      
      `
    },
    {
      id: 16,
      question: "16. Explain Telephony and SMS APIs with the required permissions and applications.",
      answer: "",
      codeExample: `
============================================================
 Explain Telephony and SMS APIs with the Required Permissions
                 and Applications
============================================================


============================================================
1. Telephony API
============================================================

------------------------------------------------------------
What is Telephony API?
------------------------------------------------------------

The Telephony API in Android allows applications to access
phone-related information such as the network, SIM card, and
call state.

It is provided through the TelephonyManager class.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Telephony API is an Android API that allows applications to
access telephony services such as network information, SIM
details, and phone call status.


------------------------------------------------------------
Features of Telephony API
------------------------------------------------------------

• Access SIM information.
• Check network operator.
• Detect call state.
• Get phone/network details.
• Monitor signal and network status.


------------------------------------------------------------
Example of Telephony API
------------------------------------------------------------

java
TelephonyManager tm =
(TelephonyManager) getSystemService(TELEPHONY_SERVICE);

String network = tm.getNetworkOperatorName();

System.out.println(network);


------------------------------------------------------------
Explanation
------------------------------------------------------------

• TelephonyManager → Accesses telephony services.
• getNetworkOperatorName() → Returns the mobile network name
  (e.g., Jio, Airtel).


------------------------------------------------------------
Required Permission
------------------------------------------------------------

Add the permission in AndroidManifest.xml:

xml
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>


Note:

On Android 6.0 (API 23) and above, this permission must also
be requested at runtime.


------------------------------------------------------------
Applications of Telephony API
------------------------------------------------------------

• Display network operator.
• Detect incoming or outgoing calls.
• Check SIM card status.
• Network monitoring.
• Call management applications.


============================================================
2. SMS API
============================================================

------------------------------------------------------------
What is SMS API?
------------------------------------------------------------

The SMS API allows Android applications to send and receive
SMS (text messages).

It uses the SmsManager class.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

SMS API is an Android API used to send and receive text
messages programmatically.


------------------------------------------------------------
Sending an SMS Example
------------------------------------------------------------

java
SmsManager sms = SmsManager.getDefault();

sms.sendTextMessage(
    "9876543210",
    null,
    "Hello!",
    null,
    null
);


------------------------------------------------------------
Explanation
------------------------------------------------------------

• SmsManager.getDefault() → Gets the default SMS manager.
• sendTextMessage() → Sends the SMS.
• "9876543210" → Receiver's phone number.
• "Hello!" → SMS message.


------------------------------------------------------------
Receiving an SMS
------------------------------------------------------------

To receive SMS messages, create a BroadcastReceiver and
register it in AndroidManifest.xml.


------------------------------------------------------------
Required Permissions
------------------------------------------------------------

Add these permissions in AndroidManifest.xml:

xml
<uses-permission android:name="android.permission.SEND_SMS"/>

<uses-permission android:name="android.permission.RECEIVE_SMS"/>

<uses-permission android:name="android.permission.READ_SMS"/>


Note:

These are dangerous permissions, so on Android 6.0+ they must
also be requested from the user at runtime.


============================================================
Working of SMS API
============================================================

Application
      │
      ▼
SmsManager
      │
      ▼
Mobile Network
      │
      ▼
Receiver Gets SMS


============================================================
Advantages of Telephony API
============================================================

• Access phone and network information.
• Easy integration with mobile services.
• Supports call and SIM management.


============================================================
Advantages of SMS API
============================================================

• Easy SMS communication.
• Supports automatic alerts.
• Useful for OTP and notifications.


============================================================
Disadvantages
============================================================

------------------------------------------------------------
Telephony API
------------------------------------------------------------

• Requires user permission.
• Access to some information is restricted on newer Android
  versions.

------------------------------------------------------------
SMS API
------------------------------------------------------------

• SMS charges may apply.
• Sensitive permissions are required.
• Can be misused if proper security is not followed.


============================================================
Difference Between Telephony API and SMS API
============================================================

+--------------------------------------------------+--------------------------------------------------+
| Telephony API                                    | SMS API                                          |
+--------------------------------------------------+--------------------------------------------------+
| Accesses phone and network information.          | Sends and receives SMS messages.                 |
+--------------------------------------------------+--------------------------------------------------+
| Uses TelephonyManager.                           | Uses SmsManager.                                 |
+--------------------------------------------------+--------------------------------------------------+
| Requires READ_PHONE_STATE permission.            | Requires SEND_SMS, RECEIVE_SMS,                  |
|                                                  | and READ_SMS permissions.                        |
+--------------------------------------------------+--------------------------------------------------+
| Used for call and network management.            | Used for messaging and OTP services.             |
+--------------------------------------------------+--------------------------------------------------+


============================================================
Applications
============================================================

------------------------------------------------------------
Telephony API
------------------------------------------------------------

• Call management apps.
• Network monitoring apps.
• SIM information apps.
• Mobile operator detection.

------------------------------------------------------------
SMS API
------------------------------------------------------------

• OTP verification.
• Banking alerts.
• Appointment reminders.
• Emergency alert systems.
• Marketing messages.


============================================================
Exam Definition (2 Marks)
============================================================

Telephony API provides access to phone-related services such
as network, SIM, and call information using the
TelephonyManager class.

SMS API allows Android applications to send and receive text
messages using the SmsManager class.


============================================================
5-Mark Summary
============================================================

Telephony API is used to access network, SIM, and call
information using the TelephonyManager class.

SMS API is used to send and receive SMS using the
SmsManager class.

Required Permissions:

• Telephony API: READ_PHONE_STATE

• SMS API: SEND_SMS, RECEIVE_SMS, READ_SMS

Both APIs require runtime permission on Android 6.0 and
above.

These APIs are widely used in banking, OTP verification,
emergency services, call management, and network monitoring
applications.
      
      `
    },
    {
      id: 17,
      question: "17. Explain Native Data Handling in Android. Discuss File I/O, SharedPreferences, SQLite, and Enterprise Data Access.",
      answer: "",
      codeExample: `
============================================================
     Explain Native Data Handling in Android
============================================================

============================================================
What is Native Data Handling?
============================================================

Native Data Handling in Android is the process of storing,
retrieving, and managing data within an Android application.
Android provides different storage options based on the type
and amount of data.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Native Data Handling is the process of storing, accessing,
updating, and managing data in Android applications using
storage methods like File I/O, SharedPreferences, SQLite,
and Enterprise Data Access.

============================================================
Types of Native Data Handling
============================================================

Android provides four main methods:

1. File I/O
2. SharedPreferences
3. SQLite Database
4. Enterprise Data Access


============================================================
1. File I/O
============================================================

------------------------------------------------------------
What is File I/O?
------------------------------------------------------------

File I/O (Input/Output) is used to store and read data from
files in the device's internal or external storage.

------------------------------------------------------------
Uses
------------------------------------------------------------

• Save text files.
• Store reports or documents.
• Read configuration files.

------------------------------------------------------------
Example
------------------------------------------------------------

String data = "Hello Android";

FileOutputStream fos = openFileOutput("sample.txt", MODE_PRIVATE);

fos.write(data.getBytes());

fos.close();

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Easy to use.
• Suitable for text and document storage.
• Supports internal and external storage.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Not suitable for large structured data.
• Searching data is difficult.


============================================================
2. SharedPreferences
============================================================

------------------------------------------------------------
What is SharedPreferences?
------------------------------------------------------------

SharedPreferences stores small amounts of data as key-value
pairs.

It is commonly used for:

• Login status
• Username
• App settings
• Theme (Light/Dark Mode)

------------------------------------------------------------
Example
------------------------------------------------------------

Store Data

SharedPreferences sp = getSharedPreferences("MyData", MODE_PRIVATE);

SharedPreferences.Editor editor = sp.edit();

editor.putString("username", "Raj");

editor.apply();

------------------------------------------------------------

Read Data

SharedPreferences sp = getSharedPreferences("MyData", MODE_PRIVATE);

String user = sp.getString("username", "");

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Simple and fast.
• Good for small data.
• Easy implementation.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Cannot store large amounts of data.
• Not suitable for relational data.


============================================================
3. SQLite Database
============================================================

------------------------------------------------------------
What is SQLite?
------------------------------------------------------------

SQLite is a lightweight relational database built into Android.

It stores data in tables with rows and columns.

------------------------------------------------------------
Uses
------------------------------------------------------------

• Student Records
• Banking Apps
• Shopping Apps
• Hospital Management

------------------------------------------------------------
Example
------------------------------------------------------------

Create Table

CREATE TABLE Student(
id INTEGER PRIMARY KEY,
name TEXT,
course TEXT
);

------------------------------------------------------------

Insert Data

INSERT INTO Student(name, course)
VALUES('Raj','MCA');

------------------------------------------------------------

Retrieve Data

SELECT * FROM Student;

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Fast and efficient.
• Supports SQL queries.
• Suitable for structured data.
• No separate database server required.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Less suitable for very large databases.
• Database design is required.


============================================================
4. Enterprise Data Access
============================================================

------------------------------------------------------------
What is Enterprise Data Access?
------------------------------------------------------------

Enterprise Data Access means accessing data stored on remote
servers or cloud databases through APIs or web services.

Instead of storing all data on the mobile device, the
application communicates with a server.

------------------------------------------------------------
Examples
------------------------------------------------------------

• Firebase
• REST APIs
• MySQL Server
• Oracle Database
• SQL Server

------------------------------------------------------------
Working
------------------------------------------------------------

Android App
      │
      ▼
REST API / Web Service
      │
      ▼
Cloud/Enterprise Database

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Centralized data storage.
• Real-time synchronization.
• Easy backup and recovery.
• Suitable for large applications.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Requires an internet connection.
• Server maintenance is needed.
• Network delays may affect performance.


============================================================
Comparison of Data Handling Methods
============================================================

+------------------------+---------------------------+-------------------------------------------+
| Method                 | Stores                    | Best Used For                             |
+------------------------+---------------------------+-------------------------------------------+
| File I/O               | Files                     | Documents, text files, logs               |
+------------------------+---------------------------+-------------------------------------------+
| SharedPreferences      | Key-value pairs           | Login status, settings, preferences       |
+------------------------+---------------------------+-------------------------------------------+
| SQLite                 | Tables (Database)         | Structured data like students, products,  |
|                        |                           | orders                                    |
+------------------------+---------------------------+-------------------------------------------+
| Enterprise Data Access | Remote server/cloud       | Online apps, banking, e-commerce,         |
|                        |                           | cloud storage                             |
+------------------------+---------------------------+-------------------------------------------+


============================================================
Working of Native Data Handling
============================================================

User
   │
   ▼
Android Application
   │
   ├── File I/O
   ├── SharedPreferences
   ├── SQLite Database
   └── Enterprise Data Access
           │
           ▼
     Store / Retrieve Data


============================================================
Advantages of Native Data Handling
============================================================

• Secure data storage.
• Fast access to information.
• Supports offline storage (File I/O,
  SharedPreferences, SQLite).
• Supports online/cloud storage.
• Improves application performance.


============================================================
Disadvantages
============================================================

• File I/O is not suitable for complex data.
• SharedPreferences stores only small data.
• SQLite requires database management.
• Enterprise Data Access depends on network
  availability.


============================================================
Applications
============================================================

• Banking Apps
• E-commerce Apps
• Student Management Systems
• Healthcare Apps
• Social Media Apps
• Food Delivery Apps
• Attendance Systems


============================================================
Exam Definition (2 Marks)
============================================================

Native Data Handling in Android is the process of storing and
managing application data using File I/O,
SharedPreferences, SQLite, and Enterprise Data Access.


============================================================
5-Mark Summary
============================================================

Native Data Handling is used to store and manage data in
Android applications.

• File I/O stores and reads data from files.

• SharedPreferences stores small data as key-value pairs
  (e.g., login status and app settings).

• SQLite is a built-in relational database used for storing
  structured data.

• Enterprise Data Access accesses remote databases using
  REST APIs, Firebase, or cloud servers.

Choosing the appropriate storage method depends on the
application's data size, structure, and online/offline
requirements.
      
      `
    },
    {
      id: 18,
      question: "18. Explain Enterprise Data Access using REST APIs in Android.",
      answer: "",
      codeExample: `
============================================================
      Explain Enterprise Data Access using REST APIs in Android
============================================================

============================================================
What is Enterprise Data Access?
============================================================

Enterprise Data Access is the process of accessing and managing
data stored on a remote server or cloud database from an Android
application.

Instead of storing all data on the mobile device, the app sends
requests to a server through REST APIs and receives the required
data.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Enterprise Data Access is the method of accessing, storing, and
managing data from a remote server or cloud database using REST
APIs in Android applications.


============================================================
What is a REST API?
============================================================

REST (Representational State Transfer) API is a web service that
allows communication between an Android application and a server
using the HTTP protocol.

REST APIs exchange data in JSON (JavaScript Object Notation)
format.


------------------------------------------------------------
Example
------------------------------------------------------------

A Shopping App sends a request to the server to get the product
list.

Server returns the product information in JSON.


============================================================
Architecture of Enterprise Data Access
============================================================

+--------------------+
|   Android App      |
+--------------------+
          │
     HTTP Request
          │
          ▼
+--------------------+
|     REST API       |
+--------------------+
          │
          ▼
+--------------------+
|  Server / Backend  |
| (Java, PHP, Node,  |
|  Python, etc.)     |
+--------------------+
          │
          ▼
+--------------------+
| Database           |
| (MySQL/Firebase/   |
| Oracle/SQL Server) |
+--------------------+


============================================================
Working of REST API
============================================================

------------------------------------------------------------
Step 1: User Requests Data
------------------------------------------------------------

The user opens the Android app.

------------------------------------------------------------
Step 2: Android Sends HTTP Request
------------------------------------------------------------

The app sends a request to the REST API.

------------------------------------------------------------
Step 3: Server Processes Request
------------------------------------------------------------

The server checks the request and communicates with the database.

------------------------------------------------------------
Step 4: Database Returns Data
------------------------------------------------------------

The server retrieves the required data.

------------------------------------------------------------
Step 5: Server Sends JSON Response
------------------------------------------------------------

The server sends the data in JSON format.

------------------------------------------------------------
Step 6: Android Displays Data
------------------------------------------------------------

The Android app reads the JSON data and displays it to the user.


============================================================
HTTP Methods Used in REST API
============================================================

+-------------+---------------------------------------------+
| Method      | Purpose                                     |
+-------------+---------------------------------------------+
| GET         | Retrieve data from the server.              |
+-------------+---------------------------------------------+
| POST        | Add new data to the server.                 |
+-------------+---------------------------------------------+
| PUT         | Update existing data.                       |
+-------------+---------------------------------------------+
| DELETE      | Delete data from the server.                |
+-------------+---------------------------------------------+


============================================================
Example of REST API URLs
============================================================

GET    https://example.com/api/products

POST   https://example.com/api/products

PUT    https://example.com/api/products/1

DELETE https://example.com/api/products/1


============================================================
Example JSON Response
============================================================

{
   "id": 1,
   "name": "Laptop",
   "price": 50000
}


============================================================
Android Example Using Retrofit
============================================================

------------------------------------------------------------
Step 1: API Interface
------------------------------------------------------------

@GET("products")
Call<List<Product>> getProducts();


------------------------------------------------------------
Step 2: Call the API
------------------------------------------------------------

Call<List<Product>> call = api.getProducts();

call.enqueue(new Callback<List<Product>>() {

    @Override
    public void onResponse(Call<List<Product>> call,
                           Response<List<Product>> response) {

        List<Product> products = response.body();
    }

    @Override
    public void onFailure(Call<List<Product>> call,
                          Throwable t) {

        t.printStackTrace();
    }
});


============================================================
Explanation
============================================================

• @GET → Retrieves data from the server.

• enqueue() → Sends the request asynchronously.

• onResponse() → Called when data is received successfully.

• onFailure() → Called if an error occurs.


============================================================
Advantages of REST APIs
============================================================

• Fast communication.

• Lightweight and efficient.

• Uses JSON, which is easy to read.

• Platform-independent.

• Easy integration with Android.

• Supports cloud databases.


============================================================
Disadvantages
============================================================

• Requires an internet connection.

• Server downtime affects the app.

• Data transfer may be slower on poor networks.

• Security measures like authentication are required.


============================================================
Applications
============================================================

• Banking Apps

• E-commerce Apps

• Social Media Apps

• Food Delivery Apps

• Hospital Management Systems

• Student Management Systems

• Weather Applications


============================================================
Difference Between Local Database and REST API
============================================================

+-----------------------------------------------+-----------------------------------------------+
| Local Database (SQLite)                       | REST API                                      |
+-----------------------------------------------+-----------------------------------------------+
| Stores data on the device.                    | Stores data on a remote server.               |
+-----------------------------------------------+-----------------------------------------------+
| Works offline.                                | Usually requires an internet connection.      |
+-----------------------------------------------+-----------------------------------------------+
| Faster for local access.                      | Enables real-time data sharing across devices.|
+-----------------------------------------------+-----------------------------------------------+
| Best for offline apps.                        | Best for cloud-based applications.            |
+-----------------------------------------------+-----------------------------------------------+


============================================================
Exam Definition (2 Marks)
============================================================

Enterprise Data Access using REST APIs allows Android
applications to communicate with remote servers using HTTP
methods (GET, POST, PUT, DELETE) and exchange data in JSON
format.


============================================================
5-Mark Summary
============================================================

Enterprise Data Access allows Android apps to access remote
databases through REST APIs.

REST APIs use HTTP methods such as GET, POST, PUT, and DELETE.

Data is usually exchanged in JSON format.

Android applications commonly use libraries like Retrofit or
Volley to communicate with REST APIs.

REST APIs are widely used in banking, e-commerce, healthcare,
food delivery, and social media applications because they
provide real-time, centralized, and scalable data access.
      `
    },
    {
      id: 21,
      question: "21. What is a Custom View in Android? Explain how Canvas and onDraw() are used to draw on the screen.",
      answer: "",
      codeExample: `
============================================================
             What is a Custom View in Android?
============================================================

What is a Custom View?

A Custom View is a user-defined Android View that allows
developers to create their own UI components and graphics
instead of using only standard controls such as Button,
TextView, or ImageView.

Custom Views are useful for:

• Drawing shapes
• Creating graphs and charts
• Creating custom buttons
• Drawing games
• Creating special UI effects

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Custom View is a user-created Android View that provides
custom drawing and behavior by extending the View class.


============================================================
What is Canvas?
============================================================

Canvas is an Android class that provides methods for drawing
graphics on the screen.

Using Canvas, we can draw:

• Lines
• Circles
• Rectangles
• Text
• Images
• Other shapes

The drawing is normally performed inside the onDraw() method.


============================================================
What is onDraw()?
============================================================

onDraw() is a method of the Android View class.

It is called when Android needs to draw or redraw the View on
the screen.

------------------------------------------------------------
Basic Syntax
------------------------------------------------------------

@Override
protected void onDraw(Canvas canvas) {
    super.onDraw(canvas);

    // Drawing code
}

Here:

Canvas → Provides the drawing area.
canvas → Object used to draw on the screen.
onDraw() → Contains the drawing instructions.


============================================================
How Canvas and onDraw() Work
============================================================

The basic process is:

Custom View
     │
     ▼
onDraw()
     │
     ▼
Canvas
     │
     ├── Draw Line
     ├── Draw Circle
     ├── Draw Rectangle
     └── Draw Text
     │
     ▼
Screen


============================================================
Creating a Custom View
============================================================

We can create a Custom View by extending the View class.

------------------------------------------------------------
Example
------------------------------------------------------------

public class MyView extends View {

    Paint paint = new Paint();

    public MyView(Context context) {
        super(context);
        paint.setColor(Color.BLUE);
        paint.setStrokeWidth(5);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);

        canvas.drawCircle(200, 200, 100, paint);
    }
}


============================================================
Explanation
============================================================

1. Extend View

public class MyView extends View

This creates our own custom View.

------------------------------------------------------------

2. Create Paint

Paint paint = new Paint();

Paint defines properties such as color, size, style, and text size.

------------------------------------------------------------

3. Override onDraw()

@Override
protected void onDraw(Canvas canvas)

This method contains our drawing instructions.

------------------------------------------------------------

4. Draw a Circle

canvas.drawCircle(200, 200, 100, paint);

It draws a circle where:

200 → X-coordinate
200 → Y-coordinate
100 → Radius
paint → Drawing properties


============================================================
Common Canvas Drawing Methods
============================================================

+------------------+--------------------------+
| Method           | Purpose                  |
+------------------+--------------------------+
| drawLine()       | Draws a line             |
+------------------+--------------------------+
| drawCircle()     | Draws a circle           |
+------------------+--------------------------+
| drawRect()       | Draws a rectangle        |
+------------------+--------------------------+
| drawText()       | Draws text               |
+------------------+--------------------------+
| drawBitmap()     | Draws an image           |
+------------------+--------------------------+
| drawOval()       | Draws an oval            |
+------------------+--------------------------+


============================================================
Example: Drawing Multiple Shapes
============================================================

@Override
protected void onDraw(Canvas canvas) {
    super.onDraw(canvas);

    Paint paint = new Paint();

    paint.setColor(Color.RED);
    canvas.drawCircle(150, 150, 80, paint);

    paint.setColor(Color.BLUE);
    canvas.drawRect(300, 100, 500, 250, paint);

    paint.setColor(Color.BLACK);
    paint.setTextSize(40);
    canvas.drawText("Android", 150, 350, paint);
}

This draws:

      ●          ┌─────────┐
                 │         │
                 │         │
                 └─────────┘

             Android


============================================================
Using Custom View in an Activity
============================================================

The Custom View can be added to an Activity.

MyView myView = new MyView(this);
setContentView(myView);

Now Android displays the custom drawing created in onDraw().


============================================================
Important Classes
============================================================

1. View

Provides the basic UI component.

2. Canvas

Provides the area and methods for drawing.

3. Paint

Defines the appearance of the drawing.

------------------------------------------------------------

View
 │
 ├── onDraw()
 │      │
 │      ▼
 │    Canvas
 │      │
 │      ▼
 │    Paint
 │      │
 │      ▼
 └── Drawing on Screen


============================================================
Advantages of Custom View
============================================================

Allows completely custom designs.
Useful for graphics and games.
Can create charts and graphs.
Provides control over drawing.
Can combine drawing and user interaction.


============================================================
Applications of Custom Views
============================================================

Games
Graphs and charts
Drawing applications
Custom progress bars
Digital clocks
Signature pads
Custom buttons
Data visualization


============================================================
Exam Definition (2 Marks)
============================================================

A Custom View is a user-defined Android View created by
extending the View class. The Canvas provides drawing methods,
while the onDraw() method contains the code used to draw shapes,
text, images, and other graphics on the screen.


============================================================
5-Mark Summary
============================================================

A Custom View allows developers to create their own UI components.
It is usually created by extending the View class.
onDraw() is overridden to define what should be drawn.
Canvas provides methods such as drawCircle(), drawLine(),
drawRect(), and drawText().
Paint defines the color, size, style, and other drawing properties.
Custom Views are useful for games, charts, graphs, drawing apps,
and custom UI components.
      
      `
    },
    {
      id: 22,
      question: "22. Explain Animation APIs in Android. Differentiate between Property Animation and View Animation.",
      answer: "",
      codeExample: `
============================================================
              Explain Animation APIs in Android
============================================================

What is Animation in Android?

Animation in Android is used to create movement and visual
effects in an application. It can make a view move, rotate,
resize, fade, or change its appearance.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Animation APIs in Android are classes and tools used to create
visual effects and movement for UI elements such as buttons,
images, text, and layouts.


============================================================
Animation APIs in Android
============================================================

Android mainly provides two important animation systems:

• View Animation (Tween Animation)
• Property Animation

Android also provides Drawable/Frame Animation for displaying
a sequence of images.


============================================================
1. View Animation
============================================================

What is View Animation?

View Animation is the older Android animation system. It changes
the visual appearance of a View without changing its actual
properties.

It supports:

• Alpha
• Scale
• Rotate
• Translate

------------------------------------------------------------
Example
------------------------------------------------------------

Animation animation =
    AnimationUtils.loadAnimation(this, R.anim.fade_in);

imageView.startAnimation(animation);

------------------------------------------------------------
XML Example
------------------------------------------------------------

<alpha
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromAlpha="0.0"
    android:toAlpha="1.0"
    android:duration="1000"/>

This creates a fade-in effect.

------------------------------------------------------------
Advantages
------------------------------------------------------------

Simple to use.
Good for basic visual effects.
Easy to define animations in XML.

------------------------------------------------------------
Limitation
------------------------------------------------------------

The animation mainly changes how the View looks, not its actual
property values.


============================================================
2. Property Animation
============================================================

What is Property Animation?

Property Animation is a more powerful animation system that
changes the actual property value of an object over time.

It was introduced in Android 3.0 (API level 11).

It can animate properties such as:

• alpha
• rotation
• translationX
• translationY
• scaleX
• scaleY

------------------------------------------------------------
Example
------------------------------------------------------------

ObjectAnimator animator =
    ObjectAnimator.ofFloat(
        imageView,
        "translationX",
        0f,
        300f
    );

animator.setDuration(1000);
animator.start();

This moves the ImageView horizontally.

------------------------------------------------------------
Advantages
------------------------------------------------------------

More powerful and flexible.
Changes actual object properties.
Can animate almost any property.
Supports complex animations.
Supports animation sets.


============================================================
Difference Between Property Animation and View Animation
============================================================

| Feature                  | View Animation                  | Property Animation            |
| -------------------------| ------------------------------- | ------------------------------|
| Introduced               | Older Android API               | Android 3.0 (API 11)          |
| Also called              | Tween Animation                 | Property Animation            |
| Changes actual property? | Generally no                    | Yes                           |
| Flexibility              | Limited                         | High                          |
| Supported properties     | Alpha, Scale, Rotate, Translate | Almost any property           |
| Performance/Control      | Basic                           | Better control                |
| Usage                    | Simple visual effects           | Complex animations            |
| Main Classes             | Animation, AnimationUtils       | ObjectAnimator, ValueAnimator |

============================================================
Example Comparison
============================================================

View Animation

ImageView
    │
    ▼
Visual movement
    │
    ▼
Actual position may remain unchanged

------------------------------------------------------------

Property Animation

ImageView
    │
    ▼
translationX changes
    │
    ▼
Actual property changes


============================================================
Animation API Classes
============================================================

View Animation

Important classes:

• Animation
• AlphaAnimation
• ScaleAnimation
• RotateAnimation
• TranslateAnimation
• AnimationSet

------------------------------------------------------------

Property Animation

Important classes:

• ObjectAnimator
• ValueAnimator
• AnimatorSet


============================================================
AnimatorSet Example
============================================================

Multiple animations can be combined using AnimatorSet.

ObjectAnimator move =
    ObjectAnimator.ofFloat(imageView, "translationX", 0f, 300f);

ObjectAnimator rotate =
    ObjectAnimator.ofFloat(imageView, "rotation", 0f, 360f);

AnimatorSet set = new AnimatorSet();

set.playTogether(move, rotate);
set.setDuration(1000);
set.start();

Here, the image moves and rotates at the same time.


============================================================
Applications of Animation
============================================================

• Splash screens
• Button effects
• Image transitions
• Loading animations
• Game animations
• Screen transitions
• Interactive UI elements


============================================================
Advantages of Animation
============================================================

• Makes the UI attractive.
• Improves user experience.
• Provides visual feedback.
• Makes transitions smoother.
• Helps users understand changes in the interface.


============================================================
Exam Definition (2 Marks)
============================================================

Animation APIs in Android are used to create movement and visual
effects in UI elements. The two major types are View Animation,
which provides basic visual transformations, and Property
Animation, which changes the actual properties of objects.


============================================================
5-Mark Summary
============================================================

Android provides APIs for creating movement and visual effects.

View Animation is the older system and supports alpha, scale,
rotation, and translation effects.

Property Animation is more powerful and changes the actual
property values of an object.

Important Property Animation classes are ObjectAnimator,
ValueAnimator, and AnimatorSet.

Important View Animation classes include Animation,
AlphaAnimation, ScaleAnimation, RotateAnimation, and
TranslateAnimation.

Property Animation is preferred for modern, complex animations,
while View Animation is useful for simple visual effects.
      
      `
    },
    {
      id: 23,
      question: "23. Explain Multimedia in Android. How can you play audio/video using MediaPlayer/VideoView?",
      answer: "",
      codeExample: `
============================================================
             Explain Multimedia in Android
============================================================

How can you play audio/video using MediaPlayer/VideoView?


============================================================
What is Multimedia in Android?
============================================================

Multimedia in Android refers to the use of audio, video,
images, and other media content in Android applications.

Android provides built-in APIs and classes to play and manage
multimedia files.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Multimedia in Android is the use of audio, video, images, and
other media resources in Android applications using classes
such as MediaPlayer and VideoView.


============================================================
Types of Multimedia
============================================================

Audio – Music, sounds, voice recordings.
Video – Movies, tutorials, advertisements.
Images – Photos, icons, graphics.
Streaming Media – Audio/video played from the internet.


============================================================
MediaPlayer
============================================================

What is MediaPlayer?

MediaPlayer is an Android class used to play audio and video
media files.

It can play media from:

• Local resources
• Device storage
• URLs/streaming sources


============================================================
Basic MediaPlayer Life Cycle
============================================================

create()
   │
   ▼
prepare()
   │
   ▼
start()
   │
   ▼
pause()
   │
   ▼
start()
   │
   ▼
stop()
   │
   ▼
release()


============================================================
Playing Audio Using MediaPlayer
============================================================

Suppose an audio file named music.mp3 is stored in:

app/src/main/res/raw/music.mp3

------------------------------------------------------------
Java Example
------------------------------------------------------------

MediaPlayer mediaPlayer =
    MediaPlayer.create(this, R.raw.music);

mediaPlayer.start();

------------------------------------------------------------
Stop Audio
------------------------------------------------------------

mediaPlayer.stop();
mediaPlayer.release();

------------------------------------------------------------
Pause Audio
------------------------------------------------------------

mediaPlayer.pause();


============================================================
MediaPlayer Methods
============================================================

+----------------+---------------------------------------------+
| Method         | Purpose                                     |
+----------------+---------------------------------------------+
| create()       | Creates a MediaPlayer                       |
+----------------+---------------------------------------------+
| start()        | Starts playback                             |
+----------------+---------------------------------------------+
| pause()        | Pauses playback                             |
+----------------+---------------------------------------------+
| stop()         | Stops playback                              |
+----------------+---------------------------------------------+
| seekTo()       | Moves to a specific position                |
+----------------+---------------------------------------------+
| release()      | Releases resources                          |
+----------------+---------------------------------------------+


============================================================
VideoView
============================================================

What is VideoView?

VideoView is an Android UI component that makes it easy to
display and play video inside an Activity.

It works together with MediaPlayer internally.


============================================================
Playing Video Using VideoView
============================================================

Step 1: Add VideoView to XML

<VideoView
    android:id="@+id/videoView"
    android:layout_width="match_parent"
    android:layout_height="300dp"/>

------------------------------------------------------------
Step 2: Play Video
------------------------------------------------------------

VideoView videoView = findViewById(R.id.videoView);

Uri videoUri =
    Uri.parse("android.resource://" +
              getPackageName() +
              "/" + R.raw.sample_video);

videoView.setVideoURI(videoUri);

videoView.start();


============================================================
VideoView Controls
============================================================

A MediaController can provide standard playback controls.

MediaController controller =
    new MediaController(this);

controller.setAnchorView(videoView);

videoView.setMediaController(controller);

videoView.start();

This provides controls such as:

▶ Play    ⏸ Pause    ◀ Seek ▶


============================================================
MediaPlayer vs VideoView
============================================================

| Feature     | MediaPlayer                          | VideoView                       |
| ------------| ------------------------------------ | ------------------------------- |
| Purpose     | Plays audio/video                    | Mainly displays and plays video |
| Type        | Media playback class                 | UI component                    |
| Audio       | Yes                                  | Primarily video                 |
| Video       | Yes, with a suitable display surface | Yes                             |
| Controls    | Developer manages controls           | Can easily use MediaController  |
| Flexibility | More control                         | Easier to implement             |
| Usage       | Custom media applications            | Simple video playback           |


============================================================
Multimedia Working
============================================================

              Android Multimedia
                     │
          ┌──────────┴──────────┐
          │                     │
        Audio                  Video
          │                     │
          ▼                     ▼
     MediaPlayer             VideoView
          │                     │
          └──────────┬──────────┘
                     ▼
                Media Output


============================================================
Applications of Multimedia
============================================================

• Music Player Apps
• Video Player Apps
• Online Education
• Video Streaming
• Games
• Video Calling
• Entertainment Apps
• E-learning Apps


============================================================
Advantages
============================================================

• Provides rich user experience.
• Supports audio and video playback.
• Supports local and streaming media.
• Easy integration into applications.


============================================================
Important Note
============================================================

For modern Android applications, MediaPlayer and VideoView
are still useful for basic playback, but newer media
applications commonly use Jetpack Media3/ExoPlayer because it
provides more advanced playback features.


============================================================
Exam Definition (2 Marks)
============================================================

Multimedia in Android refers to handling audio, video, and
images in Android applications. MediaPlayer is used for media
playback, while VideoView provides a simple way to display and
play video inside an Activity.


============================================================
5-Mark Summary
============================================================

Android supports audio, video, images, and streaming media.

MediaPlayer is used to play audio and video files.

Important methods are start(), pause(), stop(), seekTo(), and
release().

VideoView is a UI component used mainly for simple video
playback.

MediaController can provide Play, Pause, and Seek controls.

Multimedia is widely used in music players, video apps, games,
education, and entertainment applications.
      
      `
    },
    {
      id: 24,
      question: "24. Explain the steps to record audio using the MediaRecorder API.",
      answer: "",
      codeExample: `
============================================================
      Explain the Steps to Record Audio Using the
                 MediaRecorder API
============================================================

What is MediaRecorder?

MediaRecorder is an Android API used to record audio and video
from device hardware such as the microphone or camera.

For audio recording, MediaRecorder captures sound through the
microphone and saves it into an audio file.


============================================================
Definition (2 Marks)
============================================================

MediaRecorder is an Android API used to capture and save audio
from the device microphone into an audio file.


============================================================
Steps to Record Audio
============================================================

The basic steps are:

1. Add microphone permission.
2. Request permission at runtime.
3. Create a MediaRecorder object.
4. Set the audio source.
5. Set the output format.
6. Set the audio encoder.
7. Set the output file.
8. Prepare the recorder.
9. Start recording.
10. Stop and release the recorder.


============================================================
Step 1: Add Permission
============================================================

Add the following permission to AndroidManifest.xml:

<uses-permission android:name="android.permission.RECORD_AUDIO"/>

RECORD_AUDIO allows the application to access the device
microphone.

On Android 6.0 and above, microphone permission must also be
requested at runtime.


============================================================
Step 2: Create MediaRecorder
============================================================

MediaRecorder recorder = new MediaRecorder();

This creates a MediaRecorder object.


============================================================
Step 3: Set Audio Source
============================================================

recorder.setAudioSource(
    MediaRecorder.AudioSource.MIC
);

This tells Android to use the microphone as the audio source.


============================================================
Step 4: Set Output Format
============================================================

recorder.setOutputFormat(
    MediaRecorder.OutputFormat.THREE_GPP
);

This specifies the format in which the recorded audio will be
stored.


============================================================
Step 5: Set Audio Encoder
============================================================

recorder.setAudioEncoder(
    MediaRecorder.AudioEncoder.AMR_NB
);

The encoder converts the captured audio into the required
encoded format.


============================================================
Step 6: Set Output File
============================================================

recorder.setOutputFile(
    getExternalFilesDir(null) + "/recording.3gp"
);

This specifies where the recorded audio file will be saved.


============================================================
Step 7: Prepare the Recorder
============================================================

recorder.prepare();

This prepares the MediaRecorder for recording.


============================================================
Step 8: Start Recording
============================================================

recorder.start();

The microphone starts recording audio.


============================================================
Step 9: Stop Recording
============================================================

When the user presses the Stop button:

recorder.stop();

The recording is stopped and the audio file is saved.


============================================================
Step 10: Release Resources
============================================================

recorder.release();
recorder = null;

This releases the resources used by the recorder.


============================================================
Complete Example
============================================================

MediaRecorder recorder;

void startRecording() throws IOException {

    recorder = new MediaRecorder();

    recorder.setAudioSource(
        MediaRecorder.AudioSource.MIC
    );

    recorder.setOutputFormat(
        MediaRecorder.OutputFormat.THREE_GPP
    );

    recorder.setAudioEncoder(
        MediaRecorder.AudioEncoder.AMR_NB
    );

    recorder.setOutputFile(
        getExternalFilesDir(null) +
        "/recording.3gp"
    );

    recorder.prepare();
    recorder.start();
}

void stopRecording() {

    if (recorder != null) {
        recorder.stop();
        recorder.release();
        recorder = null;
    }
}


============================================================
Recording Process Diagram
============================================================

User Presses Record
        │
        ▼
Create MediaRecorder
        │
        ▼
Set Audio Source (MIC)
        │
        ▼
Set Output Format
        │
        ▼
Set Audio Encoder
        │
        ▼
Set Output File
        │
        ▼
prepare()
        │
        ▼
start()
        │
        ▼
Audio Recording
        │
        ▼
stop()
        │
        ▼
release()
        │
        ▼
Audio File Saved


============================================================
Important MediaRecorder Methods
============================================================

+----------------------+-----------------------------------------+
| Method               | Purpose                                 |
+----------------------+-----------------------------------------+
| setAudioSource()     | Selects the microphone as audio source  |
+----------------------+-----------------------------------------+
| setOutputFormat()    | Sets recording format                   |
+----------------------+-----------------------------------------+
| setAudioEncoder()    | Sets audio encoding method              |
+----------------------+-----------------------------------------+
| setOutputFile()      | Specifies output file                   |
+----------------------+-----------------------------------------+
| prepare()            | Prepares recorder                       |
+----------------------+-----------------------------------------+
| start()              | Starts recording                        |
+----------------------+-----------------------------------------+
| stop()               | Stops recording                         |
+----------------------+-----------------------------------------+
| release()            | Releases resources                      |
+----------------------+-----------------------------------------+


============================================================
Applications of Audio Recording
============================================================

• Voice Recorder Apps
• Audio Notes
• Podcast Apps
• Educational Apps
• Interview Recording
• Voice Messaging
• Music Recording


============================================================
Advantages
============================================================

• Simple API for basic audio recording.
• Uses the device microphone.
• Can save recordings as files.
• Easy to integrate into Android applications.


============================================================
Limitations
============================================================

• Requires microphone permission.
• Improper resource handling can cause errors.
• For advanced audio recording, newer APIs may be more
  appropriate.


============================================================
Exam Definition (2 Marks)
============================================================

MediaRecorder is an Android API used to record audio through
the device microphone. The main steps are setting permission,
creating MediaRecorder, setting audio source, output format,
encoder, and file, preparing, starting, stopping, and
releasing the recorder.


============================================================
5-Mark Answer Summary
============================================================

Permission
   ↓
Create MediaRecorder
   ↓
Set Audio Source
   ↓
Set Output Format
   ↓
Set Audio Encoder
   ↓
Set Output File
   ↓
prepare()
   ↓
start()
   ↓
stop()
   ↓
release()

This process records audio from the microphone and saves it
as an audio file.
      
      `
    },
    {
      id: 25,
      question: "25. What is Fused Location Provider API? How is it better than LocationManager?",
      answer: "",
      codeExample: `
============================================================
        What is Fused Location Provider API?
        How is it better than LocationManager?
============================================================

What is Fused Location Provider API?

The Fused Location Provider API is an Android location API that
provides the device's current or updated location by intelligently
combining information from different location sources such as:

• GPS
• Wi-Fi
• Mobile networks
• Device sensors

It is provided through Google Play services and is commonly
accessed using FusedLocationProviderClient.


============================================================
Definition (2 Marks)
============================================================

The Fused Location Provider API is a location service that combines
multiple location sources to provide accurate and power-efficient
location information to Android applications.


============================================================
How Does It Work?
============================================================

        Location Sources
              │
     ┌────────┼────────┐
     ▼        ▼        ▼
    GPS     Wi-Fi   Mobile Network
     │        │        │
     └────────┼────────┘
              ▼
   Fused Location Provider
              │
              ▼
       Android Application
              │
              ▼
      Current Location

The API automatically decides which available sources are most
appropriate for the requested location accuracy and update frequency.


============================================================
Basic Example
============================================================

First, an application needs the appropriate location permission.

<uses-permission
    android:name="android.permission.ACCESS_FINE_LOCATION" />

<uses-permission
    android:name="android.permission.ACCESS_COARSE_LOCATION" />

Then a FusedLocationProviderClient can be obtained:

FusedLocationProviderClient client =
    LocationServices.getFusedLocationProviderClient(this);

For a last-known location:

client.getLastLocation()
    .addOnSuccessListener(location -> {

        if (location != null) {
            double latitude = location.getLatitude();
            double longitude = location.getLongitude();

            System.out.println(latitude);
            System.out.println(longitude);
        }
    });

On modern Android, location permissions must be requested from
the user at runtime. Background location also has additional
restrictions.


============================================================
What is LocationManager?
============================================================

LocationManager is Android's traditional location API. It allows
applications to request location updates from individual location
providers, such as:

• GPS provider
• Network provider

Example:

LocationManager manager =
    (LocationManager) getSystemService(
        LOCATION_SERVICE
    );

The developer generally has more direct control over the selected
provider.


============================================================
Fused Location Provider vs LocationManager
============================================================

| Feature               | Fused Location Provider                       | LocationManager                              |
| ----------------------| --------------------------------------------- | -------------------------------------------- |
| Provider selection    | Automatically combines sources                | Developer selects providers                  |
| Accuracy              | Generally provides a good balance of accuracy | Depends on selected provider                 |
| Battery usage         | Optimized for power efficiency                | Can consume more power depending on requests |
| GPS + Wi-Fi + Network | Can intelligently combine sources             | Handles providers separately                 |
| Ease of use           | Easier for common location tasks              | More low-level control                       |
| API                   | FusedLocationProviderClient                   | LocationManager                              |
| Google Play services  | Required                                      | Not required                                 |
| Best suited for       | Most modern location-based apps               | Low-level/provider-specific control          |


============================================================
Why is Fused Location Provider Better?
============================================================

1. Better Power Efficiency

It can choose an appropriate combination of location sources
instead of relying continuously on GPS.

2. Good Accuracy

It can combine different sources to provide a useful balance
between accuracy and battery consumption.

3. Easy to Use

Developers usually don't need to manually decide whether GPS or
network location should be used.

4. Intelligent Location Updates

The application can specify requirements such as desired accuracy
and update interval, and the fused provider handles the underlying
sources.

5. Better for Modern Apps

For common use cases such as maps, delivery tracking, fitness,
and nearby-place features, the fused API is generally more
convenient.


============================================================
Applications
============================================================

The Fused Location Provider API is commonly used in:

• Google Maps-like applications
• Food delivery apps
• Ride-sharing applications
• Fitness and tracking apps
• Weather applications
• Location-based services
• Nearby-place applications


============================================================
Exam Definition (2 Marks)
============================================================

The Fused Location Provider API is an Android location API that
combines information from GPS, Wi-Fi, mobile networks, and other
sources to provide accurate and power-efficient location
information. It is accessed through FusedLocationProviderClient.


============================================================
5-Mark Summary
============================================================

Fused Location Provider API provides location using multiple
sources.

It can combine GPS, Wi-Fi, mobile networks, and sensors.

It is generally easier to use and more power-efficient than
directly managing individual providers.

LocationManager provides lower-level access to individual
location providers.

Therefore, the Fused Location Provider is usually preferred for
modern applications requiring normal location services, while
LocationManager is useful when direct provider-level control is
needed.
      
      `
    },
    {
      id: 26,
      question: "26. Explain how to access the Accelerometer sensor and display its values.",
      answer: "",
      codeExample: `
============================================================
Explain How to Access the Accelerometer Sensor and Display Its Values
============================================================

What is an Accelerometer?

An accelerometer is a sensor in Android devices that measures
acceleration or movement along the X, Y, and Z axes.

It can be used to detect:

• Device movement
• Tilting
• Shaking
• Screen orientation changes
• Motion in games

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

An accelerometer is an Android sensor that measures acceleration
along the X, Y, and Z axes and provides these values to an
application.


============================================================
X, Y, and Z Axes
============================================================

             Y
             ↑
             │
             │
             │
             ●────────────→ X
            /
           /
          ↓
          Z

The sensor provides three values:

X → Left / Right movement
Y → Up / Down movement
Z → Forward / Backward movement

The values are generally measured in m/s².


============================================================
Classes Used
============================================================

Android provides the following classes:

------------------------------------------------------------
1. SensorManager
------------------------------------------------------------

Used to access and manage device sensors.

------------------------------------------------------------
2. Sensor
------------------------------------------------------------

Represents a particular sensor such as the accelerometer.

------------------------------------------------------------
3. SensorEventListener
------------------------------------------------------------

Receives sensor value changes.


============================================================
Steps to Access Accelerometer
============================================================

------------------------------------------------------------
Step 1: Get SensorManager
------------------------------------------------------------

SensorManager sensorManager =
    (SensorManager) getSystemService(
        SENSOR_SERVICE
    );

------------------------------------------------------------
Step 2: Get the Accelerometer
------------------------------------------------------------

Sensor accelerometer =
    sensorManager.getDefaultSensor(
        Sensor.TYPE_ACCELEROMETER
    );

This obtains the device's accelerometer sensor.

------------------------------------------------------------
Step 3: Implement SensorEventListener
------------------------------------------------------------

public class MainActivity extends AppCompatActivity
        implements SensorEventListener {

The listener receives updated sensor values.

------------------------------------------------------------
Step 4: Register the Sensor
------------------------------------------------------------

sensorManager.registerListener(
    this,
    accelerometer,
    SensorManager.SENSOR_DELAY_NORMAL
);

This starts receiving accelerometer data.

------------------------------------------------------------
Step 5: Read Sensor Values
------------------------------------------------------------

The onSensorChanged() method is called whenever the sensor
values change.

@Override
public void onSensorChanged(SensorEvent event) {

    float x = event.values[0];
    float y = event.values[1];
    float z = event.values[2];

    System.out.println(
        "X: " + x +
        " Y: " + y +
        " Z: " + z
    );
}

Here:

event.values[0] → X-axis
event.values[1] → Y-axis
event.values[2] → Z-axis


============================================================
Displaying Values in TextView
============================================================

XML

<TextView
    android:id="@+id/sensorText"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Accelerometer Values"/>

Java

TextView sensorText;

@Override
public void onSensorChanged(SensorEvent event) {

    float x = event.values[0];
    float y = event.values[1];
    float z = event.values[2];

    sensorText.setText(
        "X: " + x +
        "\nY: " + y +
        "\nZ: " + z
    );
}

The screen may display:

Accelerometer Values

X: 0.52
Y: 9.61
Z: 0.84

The exact values change as the device moves.


============================================================
Step 6: Handle Sensor Accuracy
============================================================

@Override
public void onAccuracyChanged(
        Sensor sensor, int accuracy) {
    // Handle accuracy changes
}

This method is called when the accuracy of the sensor changes.


============================================================
Step 7: Unregister the Sensor
============================================================

When the Activity is no longer active, unregister the listener
to avoid unnecessary battery usage.

@Override
protected void onPause() {
    super.onPause();

    sensorManager.unregisterListener(this);
}


============================================================
Complete Example
============================================================

public class MainActivity extends AppCompatActivity
        implements SensorEventListener {

    SensorManager sensorManager;
    Sensor accelerometer;
    TextView sensorText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        sensorText = findViewById(R.id.sensorText);

        sensorManager =
            (SensorManager) getSystemService(
                SENSOR_SERVICE
            );

        accelerometer =
            sensorManager.getDefaultSensor(
                Sensor.TYPE_ACCELEROMETER
            );
    }

    @Override
    protected void onResume() {
        super.onResume();

        sensorManager.registerListener(
            this,
            accelerometer,
            SensorManager.SENSOR_DELAY_NORMAL
        );
    }

    @Override
    public void onSensorChanged(SensorEvent event) {

        float x = event.values[0];
        float y = event.values[1];
        float z = event.values[2];

        sensorText.setText(
            "X: " + x +
            "\nY: " + y +
            "\nZ: " + z
        );
    }

    @Override
    public void onAccuracyChanged(
            Sensor sensor,
            int accuracy) {
    }

    @Override
    protected void onPause() {
        super.onPause();

        sensorManager.unregisterListener(this);
    }
}


============================================================
Working Diagram
============================================================

Android Device
      │
      ▼
Accelerometer Sensor
      │
      ▼
SensorManager
      │
      ▼
SensorEventListener
      │
      ▼
onSensorChanged()
      │
      ▼
X, Y, Z Values
      │
      ▼
TextView
      │
      ▼
Values Displayed


============================================================
Applications of Accelerometer
============================================================

Motion detection
Mobile games
Shake detection
Step/movement tracking
Screen orientation
Fitness applications
Vehicle movement detection


============================================================
Important Methods
============================================================

+--------------------------------+--------------------------------+
| Method                         | Purpose                        |
+--------------------------------+--------------------------------+
| getDefaultSensor()             | Gets the required sensor      |
+--------------------------------+--------------------------------+
| registerListener()             | Starts receiving sensor data  |
+--------------------------------+--------------------------------+
| onSensorChanged()              | Receives changed sensor values|
+--------------------------------+--------------------------------+
| onAccuracyChanged()            | Handles sensor accuracy       |
|                                | changes                       |
+--------------------------------+--------------------------------+
| unregisterListener()           | Stops receiving sensor data   |
+--------------------------------+--------------------------------+


============================================================
Exam Definition (2 Marks)
============================================================

An accelerometer is a hardware sensor that measures acceleration
along the X, Y, and Z axes. Android applications access it using
SensorManager, Sensor, and SensorEventListener, and the values
are received through the onSensorChanged() method.


============================================================
5-Mark Summary
============================================================

Get SensorManager.

Get the accelerometer using getDefaultSensor().

Implement SensorEventListener.

Register the sensor using registerListener().

Read X, Y, and Z values from event.values[].

Display the values using a TextView.

Unregister the listener when it is no longer needed.
      
      `
    },
    {
      id: 27,
      question: "27. Differentiate between Accelerometer and Gyroscope with real-life applications.",
      answer: "",
      codeExample: `
============================================================
   Difference Between Accelerometer and Gyroscope with
                  Real-Life Applications
============================================================

Both Accelerometer and Gyroscope are motion sensors used in
smartphones and other mobile devices, but they measure
different types of movement.


============================================================
1. Accelerometer
============================================================

An Accelerometer measures linear acceleration or changes in
movement along the X, Y, and Z axes.

It can detect whether the device is:

• Moving
• Tilting
• Shaking
• Changing orientation due to gravity

------------------------------------------------------------
Example
------------------------------------------------------------

When you tilt your phone, the accelerometer detects the
change and can help rotate the screen.


============================================================
2. Gyroscope
============================================================

A Gyroscope measures the angular velocity (rotation) of the
device around its axes.

It detects how quickly and in which direction the device is
rotating.

------------------------------------------------------------
Example
------------------------------------------------------------

When you rotate your phone while playing a racing or
motion-controlled game, the gyroscope detects the rotation.


============================================================
Accelerometer vs Gyroscope
============================================================

| Feature              | Accelerometer           | Gyroscope                     |
| -------------------- | ----------------------- | ----------------------------- |
| Measures             | Linear acceleration     | Angular rotation              |
| Detects              | Movement, tilt, shaking | Rotation and angular movement |
| Axes                 | X, Y, Z                 | X, Y, Z                       |
| Unit                 | m/s²                    | rad/s                         |
| Gravity detection    | Yes                     | No, not directly              |
| Rotation measurement | Limited                 | Very accurate                 |
| Main use             | Detect movement/tilt    | Detect rotation/orientation   |
| Power usage          | Generally lower         | Generally higher              |
| Example              | Screen rotation         | Motion-controlled gaming      |


============================================================
Simple Example
============================================================

Imagine holding a smartphone:

       Accelerometer
            │
            ▼
    "Is the phone moving
       or tilting?"
            
       Gyroscope
            │
            ▼
    "Is the phone rotating,
      and how fast?"


============================================================
Real-Life Applications
============================================================

Applications of Accelerometer

------------------------------------------------------------
1. Automatic Screen Rotation
------------------------------------------------------------

Detects the phone's orientation and helps switch between
portrait and landscape modes.

------------------------------------------------------------
2. Step/Movement Detection
------------------------------------------------------------

Can detect movement patterns used by fitness applications.

------------------------------------------------------------
3. Shake Detection
------------------------------------------------------------

Apps can detect when the phone is shaken.

------------------------------------------------------------
4. Mobile Games
------------------------------------------------------------

Used for basic motion-based controls.

------------------------------------------------------------
5. Fall/Motion Detection
------------------------------------------------------------

Can be used to detect sudden changes in movement.


============================================================
Applications of Gyroscope
============================================================

------------------------------------------------------------
1. Gaming
------------------------------------------------------------

Used for steering and motion controls in racing and other
games.

------------------------------------------------------------
2. Camera Applications
------------------------------------------------------------

Helps detect device rotation and movement for stabilization
and orientation.

------------------------------------------------------------
3. Virtual Reality (VR)
------------------------------------------------------------

Tracks rotational head/device movement.

------------------------------------------------------------
4. Augmented Reality (AR)
------------------------------------------------------------

Helps determine how the device is rotating and oriented.

------------------------------------------------------------
5. Image/Video Stabilization
------------------------------------------------------------

Can help detect rotational movement for stabilization
systems.


============================================================
Using Both Sensors Together
============================================================

Many smartphones combine accelerometer and gyroscope data to
get better motion information.

       Accelerometer
             │
             │ Linear movement
             ▼
       ┌─────────────┐
       │ Sensor      │
       │ Fusion      │
       └─────────────┘
             ▲
             │ Rotation
             │
        Gyroscope
             │
             ▼
      Better Motion
       Information

For example, a VR application can use both sensors to
understand how the device is moving and rotating.


============================================================
Exam Definition (2 Marks)
============================================================

Accelerometer: Measures linear acceleration along the X, Y,
and Z axes and is used for detecting movement, tilt, and
shaking.

Gyroscope: Measures angular velocity and is used for detecting
rotation and orientation changes.


============================================================
5-Mark Summary
============================================================

The accelerometer detects linear movement and tilt, while the
gyroscope detects rotation. Accelerometers are commonly used
for screen rotation, step detection, and shake detection,
whereas gyroscopes are used in gaming, VR, AR, camera
stabilization, and motion tracking.
      
      `
    },
    {
      id: 28,
      question: "28. Explain the permissions required for Camera, Microphone, and Location access in Android.",
      answer: "",
      codeExample: `
============================================================
Permissions Required for Camera, Microphone, and Location Access in Android
============================================================

What are Permissions in Android?

Permissions are rules that protect sensitive device features and
user data. An Android application must request permission before
accessing features such as the camera, microphone, or location.

For modern Android versions, sensitive permissions are generally:

• Declared in AndroidManifest.xml.
• Requested from the user at runtime when required.
• Checked before using the protected feature.


============================================================
1. Camera Permission
============================================================

To access the device camera, use:

<uses-permission android:name="android.permission.CAMERA"/>

Runtime Permission

if (ActivityCompat.checkSelfPermission(
        this,
        Manifest.permission.CAMERA)
        != PackageManager.PERMISSION_GRANTED) {

    ActivityCompat.requestPermissions(
        this,
        new String[]{Manifest.permission.CAMERA},
        100);
}

Applications

• Camera applications
• QR code scanners
• Video calling
• Document scanning


============================================================
2. Microphone Permission
============================================================

To record audio using the microphone:

<uses-permission android:name="android.permission.RECORD_AUDIO"/>

Runtime Permission

if (ActivityCompat.checkSelfPermission(
        this,
        Manifest.permission.RECORD_AUDIO)
        != PackageManager.PERMISSION_GRANTED) {

    ActivityCompat.requestPermissions(
        this,
        new String[]{Manifest.permission.RECORD_AUDIO},
        101);
}

Applications

• Voice recorder
• Audio/video calling
• Voice search
• Audio recording


============================================================
3. Location Permission
============================================================

Android provides two main location permissions.

------------------------------------------------------------
Approximate Location
------------------------------------------------------------

<uses-permission
    android:name="android.permission.ACCESS_COARSE_LOCATION"/>

Provides approximate location.

------------------------------------------------------------
Precise Location
------------------------------------------------------------

<uses-permission
    android:name="android.permission.ACCESS_FINE_LOCATION"/>

Provides more precise location when the user grants precise access.

------------------------------------------------------------
Runtime Permission
------------------------------------------------------------

ActivityCompat.requestPermissions(
    this,
    new String[]{
        Manifest.permission.ACCESS_FINE_LOCATION,
        Manifest.permission.ACCESS_COARSE_LOCATION
    },
    102);

Applications

• Maps
• Navigation
• Weather applications
• Food delivery
• Ride-sharing applications


============================================================
Permission Flow
============================================================

        Android Application
                │
                ▼
       Declare Permission
       in Manifest File
                │
                ▼
       Check Permission
                │
                ▼
      Request at Runtime
                │
                ▼
        ┌───────┴───────┐
        │               │
      Allow            Deny
        │               │
        ▼               ▼
 Access Feature     No Access


============================================================
Comparison
============================================================

+--------------------------+--------------------------------+
| Feature                  | Permission                     |
+--------------------------+--------------------------------+
| Camera                   | CAMERA                         |
+--------------------------+--------------------------------+
| Microphone               | RECORD_AUDIO                   |
+--------------------------+--------------------------------+
| Approximate Location     | ACCESS_COARSE_LOCATION        |
+--------------------------+--------------------------------+
| Precise Location         | ACCESS_FINE_LOCATION           |
+--------------------------+--------------------------------+


============================================================
Important Points
============================================================

1. Manifest Declaration

Permissions are declared in:

AndroidManifest.xml

------------------------------------------------------------

2. Runtime Permission

For dangerous/sensitive permissions, Android requires the
application to ask the user while the app is running.

------------------------------------------------------------

3. User Control

The user can allow or deny access.

------------------------------------------------------------

4. Ask Only When Needed

An application should request a permission when it actually
needs the corresponding feature.

------------------------------------------------------------

5. Location Background Access

If an application needs to access location while it is not
actively being used, additional background-location rules and
permissions apply. It should not simply request background
access without a legitimate need.


============================================================
Real-Life Example
============================================================

Suppose a food delivery application wants to:

Take a profile photo → Camera permission

Record a voice message → Microphone permission

Find the delivery address → Location permission


Food Delivery App
      │
      ├── Camera
      │     └── CAMERA
      │
      ├── Voice
      │     └── RECORD_AUDIO
      │
      └── Location
            ├── ACCESS_COARSE_LOCATION
            └── ACCESS_FINE_LOCATION


============================================================
Exam Definition (2 Marks)
============================================================

Android permissions control access to sensitive device features.
The Camera requires CAMERA, the Microphone requires
RECORD_AUDIO, and Location uses ACCESS_COARSE_LOCATION and/or
ACCESS_FINE_LOCATION. These permissions are declared in the
manifest and, where required, requested from the user at runtime.


============================================================
5-Mark Summary
============================================================

Camera: android.permission.CAMERA

Microphone: android.permission.RECORD_AUDIO

Location: ACCESS_COARSE_LOCATION and ACCESS_FINE_LOCATION

Sensitive permissions must be declared in the manifest and
requested at runtime when required.

The user can allow or deny access.

Proper permission handling improves security and user privacy.
      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },

  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>MAD Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
