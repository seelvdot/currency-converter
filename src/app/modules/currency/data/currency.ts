export enum eCurrency {
  CAD = 'CAD-BRL',
  ARS = 'ARS-BRL',
  GBP = 'GBP-BRL',
}

export interface ICurrency {
  varBid: string, 
  code: string,
  codein: string,
  name: string,
  high:  number,
  low: number,
  pctChange: number,
  bid: number,
  ask: number,
  timestamp: string,
  create_date: string, 
} 