import { publicRequest } from "../Request/RequestMethod";

export const FriendsApi = async (id) => {
  try {
    const friends = await publicRequest.get(`users/${id}`);
    return friends.data;
  } catch (err) {
    console.log("err in friends api", err);
  }
};
export const AddFriendApi = async (userId, newFriendId) => {
  try {
    const newFriend = await publicRequest.post(
      `users/addfriend/${userId}`,
      newFriendId
    );
    console.log("new friend added");
  } catch (err) {
    console.log("err in addfriends api", err);
  }
};