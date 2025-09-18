import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CreateMissionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateMission: (mission: any) => void;
}

export function CreateMissionDialog({ 
  open, 
  onOpenChange, 
  onCreateMission 
}: CreateMissionDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: "60",
    difficulty: "medium",
    teams: "2",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newMission = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      description: formData.description,
      status: "pending" as const,
      teams: parseInt(formData.teams),
      duration: `${formData.duration} min`,
      createdAt: new Date().toLocaleDateString(),
      difficulty: formData.difficulty,
    };
    
    onCreateMission(newMission);
    onOpenChange(false);
    
    // Reset form
    setFormData({
      name: "",
      description: "",
      duration: "60",
      difficulty: "medium",
      teams: "2",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Create New Mission</DialogTitle>
          <DialogDescription>
            Design a new team competition mission. Configure the parameters and objectives.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="mission-name">Mission Name</Label>
            <Input
              id="mission-name"
              placeholder="e.g., Data Recovery Alpha"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="mission-description">Mission Brief</Label>
            <Textarea
              id="mission-description"
              placeholder="Describe the mission objectives and context..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Select value={formData.duration} onValueChange={(value) => setFormData({ ...formData, duration: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">60 minutes</SelectItem>
                  <SelectItem value="90">90 minutes</SelectItem>
                  <SelectItem value="120">120 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="teams">Number of Teams</Label>
              <Select value={formData.teams} onValueChange={(value) => setFormData({ ...formData, teams: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 Teams</SelectItem>
                  <SelectItem value="3">3 Teams</SelectItem>
                  <SelectItem value="4">4 Teams</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="difficulty">Difficulty Level</Label>
            <Select value={formData.difficulty} onValueChange={(value) => setFormData({ ...formData, difficulty: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="command">
              Create Mission
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}