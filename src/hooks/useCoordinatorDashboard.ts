/**
 * Custom hook for managing coordinator dashboard state and actions
 */
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface Participant {
  id: string;
  name: string;
  eventType: string;
  school: string;
  qualification: string;
  status: string;
}

export const useCoordinatorDashboard = () => {
  const { toast } = useToast();
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    const approvedRegistrations = registrations.filter((r: Participant) => r.status === 'approved');
    setParticipants(approvedRegistrations);
  }, []);

  const handleQualification = (participantId: string, isQualified: boolean) => {
    const allRegistrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    const updatedRegistrations = allRegistrations.map((p: Participant) =>
      p.id === participantId
        ? { ...p, qualification: isQualified ? "qualified" : "disqualified" }
        : p
    );

    localStorage.setItem('registrations', JSON.stringify(updatedRegistrations));
    
    const approvedRegistrations = updatedRegistrations.filter((r: Participant) => r.status === 'approved');
    setParticipants(approvedRegistrations);

    toast({
      title: `Participant ${isQualified ? "Qualified" : "Disqualified"}`,
      description: `The participant has been marked as ${
        isQualified ? "qualified" : "disqualified"
      }.`,
    });
  };

  const filteredParticipants = participants.filter((p: Participant) => {
    if (filter === "all") return true;
    return p.eventType === filter;
  });

  return {
    filteredParticipants,
    filter,
    setFilter,
    handleQualification,
  };
};