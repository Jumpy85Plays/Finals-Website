/**
 * Custom hook for managing participant data and filtering
 */
import { useState, useEffect } from "react";

interface Participant {
  id: string;
  name: string;
  school: string;
  eventType: string;
  course: string;
  year: string;
  status: string;
  qualification: string;
}

export const useParticipants = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [schools, setSchools] = useState<string[]>([]);
  const [eventTypeFilter, setEventTypeFilter] = useState<string>("all");
  const [schoolFilter, setSchoolFilter] = useState<string>("all");

  useEffect(() => {
    // Load and filter qualified participants
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]') as Participant[];
    const qualifiedParticipants = registrations.filter(
      (r) => r.status === 'approved' && r.qualification === 'qualified'
    );
    setParticipants(qualifiedParticipants);

    // Extract unique schools
    const uniqueSchools = Array.from(new Set(qualifiedParticipants.map(p => p.school)));
    setSchools(uniqueSchools);
  }, []);

  const filteredParticipants = participants.filter((participant) => {
    return (
      (eventTypeFilter === "all" || participant.eventType === eventTypeFilter) &&
      (schoolFilter === "all" || participant.school === schoolFilter)
    );
  });

  return {
    participants: filteredParticipants,
    schools,
    eventTypeFilter,
    schoolFilter,
    setEventTypeFilter,
    setSchoolFilter,
  };
};