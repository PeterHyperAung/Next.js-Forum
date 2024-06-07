import { fetchPostsBySearchTerm } from "@/db/queries/posts";
import PostList from "@/components/posts/post-list";
import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;
  if (!term) {
    redirect("/");
  }

  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
}
