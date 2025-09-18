import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Settings, LogOut } from "lucide-react";

interface AdminHeaderProps {
  onCreateMission?: () => void;
}

export function AdminHeader({ onCreateMission }: AdminHeaderProps) {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-sm text-muted-foreground">Mission Control Center</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="command" 
            onClick={onCreateMission}
            className="gap-2"
          >
            <Plus size={16} />
            Create New Mission
          </Button>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Settings size={16} />
            </Button>
            
            <div className="flex items-center gap-3 pl-3 border-l border-border">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">Admin</p>
                <p className="text-xs text-muted-foreground">Mission Architect</p>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/admin-avatar.png" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  A
                </AvatarFallback>
              </Avatar>
            </div>
            
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground">
              <LogOut size={16} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}