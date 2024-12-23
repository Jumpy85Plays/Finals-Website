/**
 * Main gallery page for displaying qualified participants
 */
import { GalleryHeader } from "@/components/gallery/GalleryHeader";
import { GalleryFilters } from "@/components/gallery/GalleryFilters";
import { ParticipantCard } from "@/components/gallery/ParticipantCard";
import { generatePrintableContent } from "@/components/gallery/PrintableGallery";
import { useParticipants } from "@/hooks/useParticipants";

const OfficialGallery = () => {
  const {
    participants,
    schools,
    setEventTypeFilter,
    setSchoolFilter,
  } = useParticipants();

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(generatePrintableContent({ participants }));
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.print();
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto p-6 space-y-6">
        <GalleryHeader onPrint={handlePrint} />

        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 tracking-wide text-center mb-8">
            Official Participant Gallery
          </h1>
          
          <GalleryFilters
            schools={schools}
            onEventTypeChange={setEventTypeFilter}
            onSchoolChange={setSchoolFilter}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participants.map((participant) => (
              <ParticipantCard
                key={participant.id}
                name={participant.name}
                school={participant.school}
                eventType={participant.eventType}
                course={participant.course}
                year={participant.year}
              />
            ))}
          </div>

          {participants.length === 0 && (
            <div className="text-center py-12">
              <p className="text-cyan-300 text-lg">
                No qualified participants found matching the selected filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfficialGallery;