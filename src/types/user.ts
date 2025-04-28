export interface MostFavoriteCategory {
  id: number;
  name: string;
}

// /{teamId}/users/me
export interface GetMeResponse {
  id: number;
  teamId: string;
  image: string;
  description: string;
  nickname: string;
  createdAt: string;
  updatedAt: string;
  mostFavoriteCategory: MostFavoriteCategory;
  averageRating: number;
  reviewCount: number;
  followeesCount: number;
  followersCount: number;
  isFollowing: boolean;
}

// /{teamId}/users/me (PATCH)
export interface PatchMeRequest {
  image: string;
  description: string;
  nickname: string;
}
// /{teamId}/users/me (PATCH)
export interface PatchMeResponse {
  id: number;
  teamId: string;
  image: string;
  nickname: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

// /{teamId}/users/ranking (GET)
export interface GetUserRankingResponse {
  id: number;
  teamId: string;
  image: string;
  nickname: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  reviewCount: number;
  followersCount: number;
}

// /{teamId}/users/{userId} (GET)
export interface GetUserIdResponse {
  id: number;
  teamId: string;
  image: string;
  nickname: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  mostFavoriteCategory: MostFavoriteCategory;
  averageRating: number;
  reviewCount: number;
  followeesCount: number;
  followersCount: number;
  isFollowing: boolean;
}

// /{teamId}/users/{userId}/created-products (GET)
// /{teamId}/users/{userId}/reviewed-products (GET)
// /{teamId}/users/{userId}/favorite-products (GET)
export interface GetUserProductsItemResponse {
  id: number;
  name: string;
  image: string;
  writerId: number;
  categoryId: number;
  favoriteCount: number;
  reviewCount: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
}
// /{teamId}/users/{userId}/created-products (GET)
// /{teamId}/users/{userId}/reviewed-products (GET)
// /{teamId}/users/{userId}/favorite-products (GET)
export interface GetUserProductsResponse {
  nextCursor: number;
  list: GetUserProductsItemResponse[];
}

// /{teamId}/users/{userId}/followees (GET)
// /{teamId}/users/{userId}/followers (GET)
export interface FollowUser {
  id: number;
  teamId: string;
  image: string;
  nickname: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
// /{teamId}/users/{userId}/followees (GET)
// /{teamId}/users/{userId}/followers (GET)
export interface FollowUserItem {
  id: number;
  followee: FollowUser;
}
// /{teamId}/users/{userId}/followees (GET)
// /{teamId}/users/{userId}/followers (GET)
export interface GetFolloweeListResponse {
  nextCursor: number;
  list: FollowUserItem[];
}
