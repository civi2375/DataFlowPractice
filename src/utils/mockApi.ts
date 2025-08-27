import type { Channel, comment, User, Video } from "../type";

// 假資料
let fakeVideos: Video[] = [
  {
    id: "v1",
    url: "https://www.youtube.com/embed/m34DPnRUfMU",
    type: "video",
    channelId:"ch1",
    title : "Mrs. GREEN APPLE - 青と夏",
    introducion: "2018年8月1日発売のMrs. GREEN APPLE 7th Single「青と夏」ミュージックビデオを公開!! iTunes、レコチョク他主要配信サイトにて好評配信中！iTunesではシングル「青と夏」（バンドル）を購入した方限定ダウンロード曲として「REVERSE（MGA 野外フリーライブ on 17th April, 2018 より）」のライブ音源とライブ映像が付いて来ます！！",
    update_time: "2025-08-25T10:00:00Z",
    view_count: 1234,
    like_count: 200,
    commentId: ["c1", "c2"],
  },
  {
    id: "v2",
    url: "https://www.youtube.com/embed/HqxhfRuTs8E",
    type: "video",
    channelId:"ch2",
    title : "cat meme",
    introducion: "mm yes meme.",
    update_time: "2025-08-26T20:00:00Z",
    view_count: 1647855,
    like_count: 34000,
    commentId: ["c3"],
  },
];

let fakeChannels: Channel[] = [
  {
    id: "ch1",
    name: "小明的頻道",
    avater: "https://yt3.ggpht.com/g_gd-kGxjIDM0ZxYL68C28EvmKyws7eL9PZp_NCKl11kmiTR4jACXiQ4ATKvwZEyPL3Ah4lHwA=s48-c-k-c0x00ffffff-no-rj",
    subscriber_count: 5000,
    state: "active",
  },
  {
    id: "ch2",
    name: "catmeme",
    avater: "data:image/jpeg;base64,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",
    subscriber_count: 200,
    state: "inactive",
  },
];

let fakeComments: comment[] = [
  {
    comment_id: "c1",
    user_id: "u1",
    video_id: "v1",
    comment_content: "超讚的影片！",
    like_count: 20,
  },
  {
    comment_id: "c2",
    user_id: "u2",
    video_id: "v1",
    comment_content: "不錯喔 👍",
    like_count: 15,
  },
];

let fakeUsers: User[] = [
  {
    user_id: "u1",
    avater: "data:image/jpeg;base64,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",
    subscribe_channel: ["ch1"],
    name:"小名"
  },
  {
    user_id: "u2",
    avater: "https://pbs.twimg.com/profile_images/1936628602143141888/J0o0n0va_400x400.jpg",
    subscribe_channel: ["ch1", "ch2"],
    name:"小美"
  },
];

// 模擬假的 API
export const FakeAPI = {
  getVideos: async (): Promise<Video[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(fakeVideos), 300); // 模擬延遲 300ms
    });
  },

  getVideoById: async (id: string): Promise<Video | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(fakeVideos.find((v) => v.id === id)), 300);
    });
  },

  getChannelById: async (id: string): Promise<Channel | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(fakeChannels.find((c) => c.id === id)), 300);
    });
  },

  getCommentsByVideoId: async (videoId: string): Promise<comment[]> => {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(fakeComments.filter((c) => c.video_id === videoId)),
        300
      );
    });
  },

  addComment: async (
    videoId: string,
    userId: string,
    content: string
  ): Promise<comment> => {
    return new Promise((resolve) => {
      const newComment: comment = {
        comment_id: "c" + (fakeComments.length + 1),
        user_id: userId,
        video_id: videoId,
        comment_content: content,
        like_count: 0,
      };
      fakeComments.push(newComment);
      setTimeout(() => resolve(newComment), 300);
    });
  },

  getUserById: async (id: string): Promise<User | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(fakeUsers.find((u) => u.user_id === id)), 300);
    });
  },
};
