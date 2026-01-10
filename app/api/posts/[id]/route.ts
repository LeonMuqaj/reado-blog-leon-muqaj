import type { Post } from '@/types/blog';
import { NextResponse } from 'next/server';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

/**
 * GET /api/posts/[id]
 * Fetches a single blog post by ID from JSONPlaceholder API
 * 
 * TODO: Add rate limiting
 * TODO: Add caching headers (Cache-Control, ETag)

 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // TODO: Fix - params should be Promise in Next.js 15+
) {
  try {
    const { id: postId } = await params; // TODO: Await params if using Next.js 15+


    if (!postId || isNaN(Number(postId))) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid post ID',
        },
        { status: 400 }
      )
    }


    const response = await fetch(`${API_BASE_URL}/posts/${postId}`)

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          {
            success: false,
            error: 'Post not found',
          },
          { status: 404 }
        )
      }
      // TODO: Handle other status codes (403, 500, etc.)
      throw new Error(`Failed to fetch post: ${response.statusText}`)
    }

    const post: Post = await response.json()
    // TODO: Validate post structure before returning

    return NextResponse.json({
      success: true,
      data: post,
    })
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch post',
      },
      { status: 500 }
    )
  }
}

