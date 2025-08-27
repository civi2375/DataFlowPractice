
export type Video = {
  id: string;
  url: string;
  channelId:string;
  title:string;
  type:"video"|"stream"|"short";
  introducion:string;
  update_time:string;
  view_count:number;
  like_count:number;
  commentId:string[]
}
export type Channel = {
  id : string;
  name : string;
  avater : string;
  subscriber_count : number;
  state : "active" | "inactive";
}
export type comment = {
  comment_id : string
  user_id : string
  video_id : string
  comment_content : string
  like_count:number
}
export type User = {
  user_id : string;
  avater : string;
  subscribe_channel : string[];
  name:string;
}