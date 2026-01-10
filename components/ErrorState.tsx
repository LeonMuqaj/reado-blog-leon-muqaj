"use client";

import Link from "next/link";
import "@/styles/components/ErrorState.scss";

export type ErrorType =
  | "404"
  | "search-not-found"
  | "bad-request"
  | "server-error"
  | "network-error"
  | "unauthorized"
  | "forbidden"
  | "timeout"
  | "generic";

interface ErrorStateProps {
  type: ErrorType;
  title?: string;
  message?: string;
  showHomeButton?: boolean;
  showRetryButton?: boolean;
  onRetry?: () => void;
}

const errorConfig: Record<
  ErrorType,
  { icon: string; defaultTitle: string; defaultMessage: string }
> = {
  "404": {
    icon: "🔍",
    defaultTitle: "Error 404 - Page Not Found",
    defaultMessage: "We couldn't find the page that you wanted!",
  },
  "search-not-found": {
    icon: "📭",
    defaultTitle: "No Results Found",
    defaultMessage:
      "We couldn't find any posts matching your search. Try different keywords.",
  },
  "bad-request": {
    icon: "⚠️",
    defaultTitle: "Bad Request",
    defaultMessage:
      "Something went wrong with your request. Please check and try again.",
  },
  "server-error": {
    icon: "🔧",
    defaultTitle: "Server Error",
    defaultMessage:
      "Our servers are having trouble. Please try again in a few moments.",
  },
  "network-error": {
    icon: "📡",
    defaultTitle: "Connection Lost",
    defaultMessage:
      "Unable to connect to the server. Please check your internet connection.",
  },
  unauthorized: {
    icon: "🔒",
    defaultTitle: "Access Denied",
    defaultMessage: "You need to be logged in to view this content.",
  },
  forbidden: {
    icon: "🚫",
    defaultTitle: "Forbidden",
    defaultMessage: "You don't have permission to access this resource.",
  },
  timeout: {
    icon: "⏱️",
    defaultTitle: "Request Timeout",
    defaultMessage: "The request took too long to complete. Please try again.",
  },
  generic: {
    icon: "❌",
    defaultTitle: "Something Went Wrong",
    defaultMessage: "An unexpected error occurred. Please try again later.",
  },
};

function ErrorState({
  type,
  title,
  message,
  showHomeButton = true,
  showRetryButton = false,
  onRetry,
}: ErrorStateProps) {
  const config = errorConfig[type];

  const displayTitle = title || config.defaultTitle;
  const displayMessage = message || config.defaultMessage;

  return (
    <div className="error-state">
      <div className="error-state__container">
        <div className="error-state__icon">{config.icon}</div>

        <h1 className="error-state__title">{displayTitle}</h1>

        <p className="error-state__message">{displayMessage}</p>

        <div className="error-state__actions">
          {showRetryButton && onRetry && (
            <button
              onClick={onRetry}
              className="error-state__button error-state__button--retry"
              aria-label="Retry action"
            >
              Try Again
            </button>
          )}

          {showHomeButton && (
            <Link
              href="/"
              className="error-state__button error-state__button--home"
            >
              Go to Homepage
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ErrorState;
