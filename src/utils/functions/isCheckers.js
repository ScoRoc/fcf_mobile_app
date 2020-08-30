export const isItemLikedByUser = ({ item, user }) => item?.likedBy?.includes(user?._id);
