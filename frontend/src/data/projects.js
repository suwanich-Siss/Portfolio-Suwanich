export const featuredProject = {
    id: "income-expense",
    title: "Income & Expense Tracker",
    description: "แอปพลิเคชันบนมือถือสำหรับบันทึก จัดการ และวิเคราะห์รายรับและรายจ่ายส่วนบุคคล",
    techStack: ["React Native", "SQLite", "Node.js", "Express", "MySQL", "REST API"],
    features: [
        "Transaction Management (CRUD)",
        "OCR for Bank Slips",
        "Database (SQLite & MySQL)",
        "Data Synchronization (Local → REST API → Backend → MySQL)",
        "Export (Excel / PDF) & Analysis"
    ],
    architecture: "React Native -> SQLite/OCR -> REST API -> Node.js -> MySQL",
    challenges: {
        problem: "แอปพลิเคชันไม่สามารถซิงค์ข้อมูลผ่านเครือข่ายมือถือ (4G/5G) ได้เมื่อใช้งานนอกวงเครือข่ายท้องถิ่น (LAN)",
        investigation: "ตัวแอปพลิเคชันเรียกใช้งานผ่าน Private IP [http://xxx.xxx.x.xx] ซึ่งไม่สามารถเข้าถึงได้จากเครือข่ายสาธารณะ ประกอบกับระบบปฏิบัติการ Android บล็อกการรับส่งข้อมูลแบบ HTTP",
        cause: "เครื่องเซิร์ฟเวอร์เดิม (XAMPP) ขาดช่องทาง Public Endpoint บนอินเทอร์เน็ต และติดนโยบายความปลอดภัยด้านการสื่อสารที่ไม่เข้ารหัสของ Android",
        solution: "เชื่อมต่อเซิร์ฟเวอร์ออกสู่เครือข่ายสาธารณะอย่างปลอดภัยด้วย Ngrok Tunnel (HTTPS) ผ่าน URL",
    }
};

export const otherProjects = [
    {
        id: "medcare",
        title: "MedCare",
        description: "แอปพลิเคชันติดตามการใช้ยาสำหรับผู้สูงอายุ ที่เชื่อมต่อข้อมูลผู้ป่วย ตารางการใช้ยา และการแจ้งเตือนสำหรับครอบครัว",
        tech: ["React Native", "Backend", "Notification"]

    },

        {
        id: "web-rest-api",
        title: "Web / REST API",
        description: "โปรเจ็กต์ที่เน้นด้านหลังบ้าน ที่แสดงให้เห็นถึงทักษะการออกแบบ API และฐานข้อมูล",
        tech: ["Arduino , NodeMCU ,AI / Data"]

    },
        {
        id: "hackathon-iot",
        title: "Hackathon / IoT",
        description: "",
        tech: ["React Native", "Backend", "Notification"]

    }
]

export const experiences = [
    {
        role: 'Software Developer (Academic Project)',
        org: 'Personal Project — Income & Expense Tracker',
        period: '2024',
        desc: 'พัฒนา Mobile Application ด้วย React Native ครบ full-stack ตั้งแต่ออกแบบ Database (SQLite + MySQL), REST API ด้วย Node.js/Express, OCR สลิปธนาคาร, และแก้ปัญหา Network Connectivity ด้วย Ngrok Tunnel',
    },
    {
        role: 'Computer Science Student',
        org: 'University',
        period: '2022 – Present',
        desc: 'เรียนรู้พื้นฐานด้าน Data Structures, Algorithms, Database Systems, Software Engineering และ Web Development ทั้งฝั่ง Frontend และ Backend',
    },
];