import { useQuery } from '@tanstack/react-query';
import { getUserRanking } from '@/api/user';

const ReviewerRanking = () => {
  const {
    data: userRanking,
    isLoading: isUserRankingLoading,
    error: userRankingError,
  } = useQuery({
    queryKey: ['userRanking'],
    queryFn: getUserRanking,
    staleTime: 1000 * 60 * 5, // 5분간은 fresh로 간주
  });

  if (isUserRankingLoading) {
    return <div>로딩 중...</div>;
  }
  if (userRankingError) {
    return <div>랭킹 조회 중 오류가 발생했습니다: {userRankingError.message}</div>;
  }

  const reviewers = userRanking ?? [];
  if (reviewers.length === 0) {
    return <div>아직 등록된 리뷰어가 없습니다.</div>;
  }

  return (
    <div className="py-[30px] px-[20px] pr-0">
      <p className="text-[14px] pb-5">리뷰어 랭킹</p>
      <ul className="flex flex-row gap-[15px] overflow-x-scroll w-full lg:flex-col lg:overflow-x-auto lg:gap-6">
        {userRanking?.map((user, index) => (
          <li key={user.id} className="flex items-center flex-shrink-0">
            <div className="bg-white rounded-[99px] w-9 h-9 mr-[10px]"></div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[5px] mb-[5.5px]">
                {index === 0 && (
                  <p className="text-[10px] text-pink bg-[#FF2F9F1A] py-[2px] px-[6px] rounded-[50px]">
                    1등
                  </p>
                )}
                {index === 1 && (
                  <p className="text-[10px] text-green bg-[#05D58B1A] py-[2px] px-[6px] rounded-[50px]">
                    2등
                  </p>
                )}
                {index === 2 && (
                  <p className="text-[10px] text-gray-100 bg-[#9FA6B21A] py-[2px] px-[6px] rounded-[50px]">
                    3등
                  </p>
                )}
                <p className="text-[14px] font-medium block truncate max-w-[10ch] lg:text-[16px]">
                  {user.nickname}
                </p>
              </div>
              <div className="flex items-center gap-[10px] text-[10px] text-gray-200 font-light lg:text-[12px]">
                <p>팔로워 {user.followersCount}</p>
                <p>리뷰 {user.reviewCount}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewerRanking;
