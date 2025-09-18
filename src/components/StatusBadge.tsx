import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "pending" | "live" | "completed";
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusConfig = {
    pending: { label: "Pending", className: "status-pending" },
    live: { label: "Live", className: "status-live" },
    completed: { label: "Completed", className: "status-completed" },
  };

  const config = statusConfig[status];

  return (
    <span className={cn("status-badge", config.className, className)}>
      {config.label}
    </span>
  );
}