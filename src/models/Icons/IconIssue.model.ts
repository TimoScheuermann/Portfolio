import { IconIssueLabel } from "./IconIssueLabel.model";

export class IconIssue {
  id!: number;
  number!: number;
  title!: string;
  url!: string;
  user_name!: string;
  user_avatar!: string;
  labels!: IconIssueLabel[];
  state!: string;
  comments!: number;

  constructor(data: any) {
    Object.assign(this, {
      id: data.id,
      number: data.number,
      title: data.title,
      url: data.html_url,
      user_name: data.user.login,
      user_avatar: data.user.avatar_url,
      state: data.state,
      comments: data.comments,
      labels: data.labels.map((l: any) => {
        return {
          name: l.name,
          color: l.color
        } as IconIssueLabel;
      })
    });
  }
}
