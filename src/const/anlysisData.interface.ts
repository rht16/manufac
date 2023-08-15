export interface anlysisData {
    mean: Record<string, string[]>;
    median: Record<string, string[]>;
    mode: Record<string, string[]>;
    headers?: Record<string, number>;
    Gamma?: number;
    [key: string]: any;
  }