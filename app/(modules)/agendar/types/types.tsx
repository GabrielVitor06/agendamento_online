export type Servico = { id: number; title: string; price: string };
export type Colaborador = { id: number; name: string };
export type Local = { id: number; name: string };
export type DataHora = { dia: string; hora: string };

export type DadosAgendamento = {
  servico: Servico | null;
  colaborador: Colaborador | null;
  local: Local | null;
  dataHora: DataHora | null;
};
