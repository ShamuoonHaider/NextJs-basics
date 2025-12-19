import { comments } from "../data";

interface Props {
  params: Promise<{ id: string }>;
}

export const GET = async (request: Request, { params }: Props) => {
  const { id } = await params;
  const comment = comments.find((c) => c.id === parseInt(id));
  return Response.json(comment);
};
