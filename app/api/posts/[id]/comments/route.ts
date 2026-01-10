import type { Comment } from '@/types/blog';
import { NextResponse } from 'next/server';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

/**
 * GET /api/posts/[id]/comments
 * Fetches all comments for a specific post from JSONPlaceholder API
 * 
 * TODO: Add pagination support (page, limit query params)
 * TODO: Add sorting options (newest first, oldest first)
 * TODO: Add rate limiting
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

    const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`)

    if (!response.ok) {
      throw new Error(`Failed to fetch comments: ${response.statusText}`)
    }

    const comments: Comment[] = await response.json()
    // TODO: Validate comments array structure

    return NextResponse.json({
      success: true,
      data: comments,
      total: comments.length,
      // TODO: Add pagination metadata if pagination is implemented
    })
  } catch (error) {
    console.error('Error fetching comments:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch comments',
      },
      { status: 500 }
    )
  }
}

