import { PesquisaModel } from "../pesquisar/pesquisar.model";

export interface HistoricoModel {
    id?: string,
    numero: string,
    perfil: string,
    dados: PesquisaModel[]
}