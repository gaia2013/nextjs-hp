import Link from "next/link";
const Post = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}><a>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bq-gray-200">
          {post.title}
        </span>{" "}</a>
      </Link>
    </div>
  );
};

export default Post;
