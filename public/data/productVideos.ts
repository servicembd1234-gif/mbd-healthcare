// Maps equipment (by exact `name` in products.ts) to its YouTube tutorial video(s)
// from the MBD Project channel: https://www.youtube.com/@MBDProject
export type TutorialVideo = { id: string; title: string };

export const PRODUCT_VIDEOS: Record<string, TutorialVideo[]> = {
  "Fetal Monitor JPD-600P": [
    { id: "wmQDpA76RW4", title: "Jumper JPD-600P" },
  ],
  "Fetal Doppler JPD-200c+": [
    { id: "GTzWiiJkDG0", title: "Jumper JPD-200C Plus" },
  ],
  "Comen S8": [{ id: "jbrEFMPsGbg", title: "Comen S8" }],
  "Mediblu Blu12+": [
    { id: "gCJucS7ViCQ", title: "วิธีการใช้งานเครื่อง Mediblu รุ่น BLU12 และโปรแกรม Central Monitor" },
    { id: "YbGOUCkuqsw", title: "วิธีการใช้งานโปรแกรม Central Monitor สำหรับเครื่อง Mediblu BLU12" },
    { id: "HKivR-nYOxU", title: "วิธีการใช้งานเครื่อง Mediblu รุ่น BLU12" },
    { id: "F2Y98O8y_Yo", title: "Central Monitor Blue12+" },
  ],
  "Mediblu MM12": [
    { id: "B4h9YIOfsrA", title: "วิธีการใช้งานโปรแกรม Central Monitor สำหรับ Mediblu MM12" },
    { id: "k_bZYDVgqdw", title: "วิธีการใช้งานเครื่อง Mediblu รุ่น MM12" },
  ],
  "Mediblu MM3": [{ id: "ocUQ5zhrehw", title: "Mediblu MM3" }],
  "Infant Transport Incubator KT-1000": [
    { id: "-BuYy285ArI", title: "Transport Incubator KT-1000" },
  ],
  "Radiant Wammer KR-1000": [
    { id: "LBHISidol-0", title: "วิธีการใช้งาน Warmer เต็มรูปแบบ" },
  ],
  "Prototherapy Bililed Maxi+": [
    { id: "Ohv4rxDm9MQ", title: "Phototherapy Bililed Maxi Plus" },
  ],
  "Prototherapy Bilisphere 360 (LED)": [
    { id: "otZyNQBh9LM", title: "Novos Bilisphere 360 LED" },
  ],
};

// General guides not tied to one specific product
export const GENERAL_VIDEOS: TutorialVideo[] = [
  { id: "d3cZICV71KU", title: "คู่มือการใช้งานเบื้องต้นโปรแกรม Jumper Medical" },
  { id: "8XkZ2yVxlsE", title: "เตียงผ่าตัด Health TDY-Y-2" },
  { id: "29D2sPwWgTk", title: "Mesist Mevacs 50" },
  { id: "VkKEu_7lbA4", title: "Masimo Rad-G" },
];
