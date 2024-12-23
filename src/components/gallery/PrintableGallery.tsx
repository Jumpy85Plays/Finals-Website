/**
 * Component that generates a printable version of the gallery
 */
interface PrintableGalleryProps {
  participants: any[];
}

export const generatePrintableContent = ({ participants }: PrintableGalleryProps): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Official Participant Gallery</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            color: #333;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .card {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 8px;
          }
          .name {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          @media print {
            .card {
              break-inside: avoid;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Official Participant Gallery</h1>
          <p>Total Participants: ${participants.length}</p>
        </div>
        <div class="grid">
          ${participants.map(p => `
            <div class="card">
              <div class="name">${p.name}</div>
              <p><strong>School:</strong> ${p.school}</p>
              <p><strong>Event Type:</strong> ${p.eventType}</p>
              <p><strong>Course:</strong> ${p.course}</p>
              <p><strong>Year Level:</strong> ${p.year}</p>
            </div>
          `).join('')}
        </div>
      </body>
    </html>
  `;
};