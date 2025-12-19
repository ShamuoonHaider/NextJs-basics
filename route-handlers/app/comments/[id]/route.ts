import { comments } from "../data";

interface Props {
  params: Promise<{ id: string }>;
}

export const GET = async (_request: Request, { params }: Props) => {
  const { id } = await params;
  const comment = comments.find((c) => c.id === parseInt(id));
  return Response.json(comment);
};

export const PATCH = async (request: Request, { params }: Props) => {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex((c) => c.id === parseInt(id));
  comments[index].text = text;

  return Response.json(comments[index]);
};
