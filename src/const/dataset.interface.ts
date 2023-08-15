export interface WineData {
    Alcohol: number;
    "Malic Acid": number;
    Ash: string | number; 
    "Alcalinity of ash": number;
    Magnesium: number;
    "Total phenols": number;
    Flavanoids: number | string;
    "Nonflavanoid phenols": string | number;
    Proanthocyanins: string;
    "Color intensity": number | string;
    Hue: number;
    "OD280/OD315 of diluted wines": string | number;
    Unknown: number;
    [key: string]: number | string;
  }