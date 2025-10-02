export type Badge = "bestseller" | "top-rated" | "new";

export type Partner =
  | "alpinion" | "aesculap" | "novos" | "mediblu" | "radian"
  | "jumper" | "comen" | "biolight" | "inbody" | "yesng"
  | "accessories" | "health" | "long fian" | "ynk";

export type Category =
  | "AED / Defibrilltor"
  | "Blood Pressure Monitor"
  | "Digital Electrocardiograph"
  | "Electrosurgical Unit"
  | "Operating Room"
  | "Fetal Doppler / Feal Monitors"
  | "NICU Unit"
  | "Oxygen Concentrator"
  | "Operating Table"
  | "Pulse Oximeter"
  | "Patient Monitor / Central Monitor"
  | "Suction"
  | "Ultrasound"
  | "Vital Sings Monitor";

export type Product = {
  id: string;
  name: string;
  partner: Partner;
  category: Category;
  badge?: Badge;
  desc?: string;
  image: string;
};
