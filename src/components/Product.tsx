import Image from 'next/image';

interface ProductProps {
  width: string;
  height: string;
  name: string;
  image?: string;
  reviewCount: number;
  favoriteCount: number;
  rating: number;
}

const Product = ({
  width,
  height,
  name,
  image,
  reviewCount,
  favoriteCount,
  rating,
}: ProductProps) => {
  return (
    <div
      className="p-[10px] bg-[#252530] border border-[#353542] rounded-[8px] cursor-pointer md:pb-[20px] lg:pb-[25px]"
      style={{ width: width, height: height }}
    >
      <div className="w-full h-full flex flex-col gap-[10px] justify-between md:gap-[20px] lg:gap-[25px]">
        <div className="w-full h-full relative">
          {image ? (
            <Image src={image} alt="상품 이미지" fill className="object-contain" />
          ) : (
            <div className="w-full h-full flex justify-center items-center text-gray-200">
              해당 상품의 이미지가 없습니다
            </div>
          )}
        </div>
        <div className="flex flex-col gap-[5px] md:mx-[6px] md:gap-[10px] lg:mx-[10px]">
          <span className="font-medium text-[14px] text-[#F1F1F5] md:text-[16px] lg:text-[18px]">
            {name}
          </span>
          <div className="flex flex-col justify-between gap-[5px] md:flex-row">
            <div className="flex gap-[10px] md:gap-[15px]">
              <div className="flex gap-[5px]">
                <span className="font-thin text-[12px] text-[#6E6E82] md:text-[14px] lg:text-[16px]">
                  리뷰
                </span>
                <span className="font-thin text-[12px] text-[#6E6E82] md:text-[14px] lg:text-[16px]">
                  {reviewCount}
                </span>
              </div>
              <div className="flex gap-[5px]">
                <span className="font-thin text-[12px] text-[#6E6E82] md:text-[14px] lg:text-[16px]">
                  찜
                </span>
                <span className="font-thin text-[12px] text-[#6E6E82] md:text-[14px] lg:text-[16px]">
                  {favoriteCount}
                </span>
              </div>
            </div>
            <div className="flex gap-[2px] items-center">
              <div className="relative w-[12px] h-[12px] md:w-[14px] md:h-[14px] lg:w-[16px] lg:h-[16px]">
                <Image
                  src="/icon/icon/status=star_300.png"
                  alt="starIcon"
                  fill
                  sizes="(max-width: 767px) 12px, (min-width: 768px) 14px (min-width: 1024px) 16px"
                />
              </div>
              <span className="font-thin text-[12px] text-[#9FA6B2] md:text-[14px] lg:text-[16px]">
                {rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;