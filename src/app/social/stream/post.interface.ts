
export class post{
  full_name:string;
  img: string;
  desc: string;
}
export class newPost{
  body: string;
  user = new post();
}
