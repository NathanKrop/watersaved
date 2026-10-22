export const newsletterStatuses = ["not_requested", "pending", "not_configured", "failed"] as const;

export type NewsletterStatus = (typeof newsletterStatuses)[number];

export function isNewsletterStatus(value: unknown): value is NewsletterStatus {
  return newsletterStatuses.some((status) => status === value);
}
