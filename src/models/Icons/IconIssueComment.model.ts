export class IconIssueComment {
  author!: string;
  avatar!: string;
  created!: string;
  updated!: string;
  body!: string;
  association!: string;
  url!: string;

  constructor(data: any) {
    Object.assign(this, {
      url: data.html_url,
      author: data.user.login,
      avatar: data.user.avatar_url,
      created: data.created_at,
      updated: data.updated_at,
      body: data.body,
      association: data.author_association
    });
  }
}
