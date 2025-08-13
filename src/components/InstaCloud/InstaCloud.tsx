"use client";
import { useEffect, useState } from "react";

interface InstaPost {
  id: string;
  media_url: string;
  permalink: string;
  media_type: string;
  caption?: string;
}

export default function InstaCloud() {
  const [posts, setPosts] = useState<InstaPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const url = `https://graph.instagram.com/${process.env.USER_ID}/media?fields=id,media_url,permalink,media_type,caption&access_token=${process.env.INSTAGRAM_TOKEN}&limit=12`;
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data.data || []);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  if (loading) return <div>Chargement…</div>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
      {posts.map((post) => (
        <a href={post.permalink} key={post.id} target="_blank" rel="noopener noreferrer" title={post.caption}>
          <img
            src={post.media_url}
            alt={post.caption?.slice(0, 100) || "Instagram post"}
            style={{
              width: 140,
              height: 140,
              borderRadius: 10,
              objectFit: "cover",
              boxShadow: "0 2px 12px #0002"
            }}
          />
        </a>
      ))}
    </div>
  );
}