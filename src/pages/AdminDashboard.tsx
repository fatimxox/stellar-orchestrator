import { useState } from "react";
import { AdminHeader } from "@/components/AdminHeader";
import { MissionGrid } from "@/components/MissionGrid";
import { CreateMissionDialog } from "@/components/CreateMissionDialog";
import { useToast } from "@/hooks/use-toast";

interface Mission {
  id: string;
  name: string;
  status: "pending" | "live" | "completed";
  teams: number;
  duration: string;
  createdAt: string;
  description?: string;
  difficulty?: string;
}

export function AdminDashboard() {
  const { toast } = useToast();
  const [missions, setMissions] = useState<Mission[]>([
    {
      id: "1",
      name: "Operation Nightfall",
      status: "live",
      teams: 2,
      duration: "60 min",
      createdAt: "2024-01-15",
      description: "Infiltrate the digital fortress and extract classified data before dawn.",
      difficulty: "hard"
    },
    {
      id: "2", 
      name: "Data Recovery Alpha",
      status: "pending",
      teams: 2,
      duration: "45 min",
      createdAt: "2024-01-14",
      description: "Recover corrupted intelligence files from the abandoned server farm.",
      difficulty: "medium"
    },
    {
      id: "3",
      name: "Cyber Defense Beta",
      status: "completed",
      teams: 3,
      duration: "90 min",
      createdAt: "2024-01-12",
      description: "Defend the network infrastructure against coordinated cyber attacks.",
      difficulty: "expert"
    }
  ]);
  
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  const handleCreateMission = (newMission: Mission) => {
    setMissions([newMission, ...missions]);
    toast({
      title: "Mission Created",
      description: `${newMission.name} has been successfully created.`,
    });
  };

  const handleStartMission = (id: string) => {
    setMissions(missions.map(mission => 
      mission.id === id 
        ? { ...mission, status: "live" as const }
        : mission
    ));
    
    const mission = missions.find(m => m.id === id);
    toast({
      title: "Mission Started",
      description: `${mission?.name} is now live and teams can begin.`,
    });
  };

  const handleEditMission = (id: string) => {
    toast({
      title: "Edit Mission",
      description: "Mission editing interface will be available soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader onCreateMission={() => setCreateDialogOpen(true)} />
      
      <main className="container max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Mission Control</h2>
          <p className="text-muted-foreground">
            Manage your team competitions and monitor active missions.
          </p>
        </div>
        
        <MissionGrid 
          missions={missions}
          onEditMission={handleEditMission}
          onStartMission={handleStartMission}
        />
      </main>
      
      <CreateMissionDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onCreateMission={handleCreateMission}
      />
    </div>
  );
}