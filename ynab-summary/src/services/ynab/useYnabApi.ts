import axios, { AxiosResponse } from "axios";
import { AccountsResponse, BudgetDetailResponse, BudgetSummaryResponse } from "./data-contracts";

const BudgetsPath = "/budgets";
const AccountsPath = "/budgets/{id}/accounts";

const { setupCache } = require("axios-cache-adapter");
const cache = setupCache({
  maxAge: 30 * 1000, // 30 seconds
});

const token = localStorage.getItem("token");

export function useYnabApi() {
  const axiosBase = axios.create({
    baseURL: process.env.REACT_APP_YNAB_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    adapter: cache.adapter,
  });

  const makeGet = async <T>(
    path: string,
    queryParams?: Record<string, any>
  ): Promise<T> => {
    const response: AxiosResponse<T> = await axiosBase.get<T>(path, {
      params: queryParams,
    });
    return response.data;
  };

  // const makePost = async <T>(path: string, body?: BodyInit) => {
  //   const response: AxiosResponse<T> = await axiosBase.post<T>(path, body);
  //   return response.data;
  // };

  // const makePut = async <T>(path: string, body?: BodyInit) => {
  //   const response: AxiosResponse<T> = await axiosBase.put<T>(path, body);
  //   return response.data;
  // };

  // const makeDelete = async <T>(path: string) => {
  //   const response: AxiosResponse<T> = await axiosBase.delete<T>(path);
  //   return response.data;
  // };

  const getAllBudgets = async (
    includeAccounts: boolean = false
  ): Promise<BudgetSummaryResponse> =>
    makeGet<BudgetSummaryResponse>(BudgetsPath, {
      include_accounts: includeAccounts,
    });

  const getBudgetById = async (
    budgetId: string,
    lastKnowledgeOfServer?: number
  ): Promise<BudgetDetailResponse> =>
    makeGet<BudgetDetailResponse>(`${BudgetsPath}/${budgetId}`, {
      last_knowledge_of_server: lastKnowledgeOfServer,
    });

  const getBudgetAccounts = async (
    budgetId: string,
    lastKnowledgeOfServer?: number
  ): Promise<AccountsResponse> =>
    makeGet<AccountsResponse>(`${AccountsPath.replace("{id}", budgetId)}`, {
      last_knowledge_of_server: lastKnowledgeOfServer,
    });

  return {
    getAllBudgets,
    getBudgetById,
    getBudgetAccounts,
  };
}
