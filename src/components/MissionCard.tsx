import { Button } from "@/components/ui/button";
import { StatusBadge } from "./StatusBadge";
import { MoreHorizontal, Users, Clock } from "lucide-react";

interface Mission {
  id: string;
  name: string;
  status: "pending" | "live" | "completed";
  teams: number;
  duration: string;
  createdAt: string;
}

interface MissionCardProps {
  mission: Mission;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onStart?: (id: string) => void;
}

export function MissionCard({ mission, onEdit, onDelete, onStart }: MissionCardProps) {
  return (
    <div className="mission-card">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">{mission.name}</h3>
          <p className="text-sm text-muted-foreground">Created {mission.createdAt}</p>
        </div>
        <StatusBadge status={mission.status} />
      </div>
      
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <Users size={16} />
          <span>{mission.teams} teams</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{mission.duration}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onEdit?.(mission.id)}
          className="h-8 w-8"
        >
          <MoreHorizontal size={16} />
        </Button>
        
        <div className="flex gap-2">
          {mission.status === "pending" && (
            <Button 
              variant="command" 
              size="sm"
              onClick={() => onStart?.(mission.id)}
            >
              Start Mission
            </Button>
          )}
          {mission.status === "live" && (
            <Button 
              variant="outline" 
              size="sm"
            >
              Monitor
            </Button>
          )}
          {mission.status === "completed" && (
            <Button 
              variant="outline" 
              size="sm"
            >
              View Results
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}