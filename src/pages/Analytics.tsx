import React from 'react';

export default function Analytics() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary mb-4">{'>'} ANALYTICS_DASHBOARD</h1>
      <div className="terminal-card p-4">
        <iframe
          src="YOUR_LOOKER_STUDIO_EMBED_URL"  // Replace with your embed URL
          width="100%"
          height="600px"
          frameBorder="0"
          allowFullScreen
          title="Analytics Dashboard"
          className="rounded"
        />
      </div>
    </div>
  );
}