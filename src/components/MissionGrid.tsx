import { MissionCard } from "./MissionCard";

interface Mission {
  id: string;
  name: string;
  status: "pending" | "live" | "completed";
  teams: number;
  duration: string;
  createdAt: string;
}

interface MissionGridProps {
  missions: Mission[];
  onEditMission?: (id: string) => void;
  onDeleteMission?: (id: string) => void;
  onStartMission?: (id: string) => void;
}

export function MissionGrid({ 
  missions, 
  onEditMission, 
  onDeleteMission, 
  onStartMission 
}: MissionGridProps) {
  if (missions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-card border border-border rounded-lg p-8 max-w-md mx-auto">
          <div className="text-muted-foreground mb-4">
            <svg 
              className="w-16 h-16 mx-auto mb-4 opacity-40" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No Missions Yet</h3>
          <p className="text-muted-foreground">
            Create your first mission to begin organizing team competitions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {missions.map((mission) => (
        <MissionCard
          key={mission.id}
          mission={mission}
          onEdit={onEditMission}
          onDelete={onDeleteMission}
          onStart={onStartMission}
        />
      ))}
    </div>
  );
}