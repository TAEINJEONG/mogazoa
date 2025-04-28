import axiosInstance from './axiosInstance';
import { GetProductListResponse } from '../types/product';

export const getProductList = async (): Promise<GetProductListResponse> => {
  const response = await axiosInstance.get<GetProductListResponse>('/products');
  return response.data;
};
