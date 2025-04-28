import { useQuery } from '@tanstack/react-query';
import { getProductList } from '@/api/products';
import star from '../../../public/icon/icon/status=star_300.png';
import Image from 'next/image';

const Product = () => {
  const {
    data: productList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['productList'],
    queryFn: getProductList,
    staleTime: 1000 * 60 * 5, // 5분간은 fresh로 간주
    gcTime: 1000 * 60 * 10, // 10분간 캐시에 보관
    refetchOnMount: false, // 마운트 시 재요청 방지
    refetchOnWindowFocus: false, // 포커스 복귀 시 재요청 방지
  });
  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다: {error.message}</div>;
  if (!productList) return <div>데이터가 없습니다.</div>;

  return (
    <ul className="flex gap-[15px]">
      {productList?.list?.map((product) => (
        <li
          key={product.id}
          className="p-[10px] border border-black-300 bg-black-400 rounded-[8px]"
        >
          <div>
            <Image src={product.image} alt={product.name} width={100} height={100} />
            <div>
              <p>{product.name}</p>
              <div>
                <p>후기 {product.reviewCount}</p>
                <p>찜 {product.favoriteCount}</p>
              </div>
              <div>
                <Image src={star} alt="star" width={12} height={12} />
                <p>{product.rating}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Product;
