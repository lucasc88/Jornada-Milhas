export interface UnidadeFederativa {
  id: number;
  nome: string;
  municipio: Municipio;
}

export interface Municipio {
  id: number;
  nome: string;
  microrregiao: Microrregiao;
  'regiao-imediata': RegiaoImediata;
}

export interface Microrregiao {
  id: number;
  nome: string;
  mesorregiao: Mesorregiao;
}

export interface RegiaoImediata {
  id: number;
  nome: string;
  'regiao-intermediaria': RegiaoIntermediaria;
}

export interface Regiao {
  id: number;
  sigla: string;
  nome: string;
}

export interface UF {
  id: number;
  sigla: string;
  nome: string;
  regiao: Regiao;
}

export interface Mesorregiao {
  id: number;
  nome: string;
  UF: UF;
}


export interface RegiaoIntermediaria {
  id: number;
  nome: string;
  UF: UF;
}