"use client";

import "@/styles/components/PostCard.scss";
import Link from "next/link";

interface PostCardProps {
  id: number;
  image: string;
  postType: string;
  readTime: string;
  title: string;
  authorName: string;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function PostCard({
  id,
  image,
  postType,
  readTime,
  title,
  authorName,
}: PostCardProps) {
  const slug = generateSlug(title);

  return (
    <Link href={`/blog/${slug}`} className="post-card-link">
      <div className="post-card">
        <div className="post-card__header">
          <div className="post-card__traffic-lights">
            <span className="post-card__traffic-light"></span>
            <span className="post-card__traffic-light"></span>
            <span className="post-card__traffic-light"></span>
          </div>
          <div className="post-card__header-line"></div>
          <div className="post-card__number">
            [NO. {id.toString().padStart(3, "0")}]
          </div>
        </div>

        <div className="post-card__image-container">
          <img
            src={image}
            alt={title}
            className="post-card__image"
            loading="lazy"
          />
        </div>

        <div className="post-card__content">
          <div className="post-card__meta">
            <div className="post-card__tag">
              <span className="post-card__tag-text">{postType}</span>
            </div>
            <div className="post-card__info-right">
              <span className="post-card__author">by {authorName}</span>
              <span className="post-card__separator">|</span>
              <span className="post-card__time">7 min read</span>
            </div>
          </div>

          <h3 className="post-card__title">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
