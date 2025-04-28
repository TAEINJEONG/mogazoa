import axiosInstance from './axiosInstance';
import { CategoryListResponse } from '../types/category';

export const getCategoryList = async (): Promise<CategoryListResponse> => {
  const response = await axiosInstance.get<CategoryListResponse>('/categories');
  return response.data;
};
