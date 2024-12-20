import React, { useEffect } from 'react';

const CompTIASection = () => {
  useEffect(() => {
    // Dynamically load the Credly embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div
      style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#121212',
        color: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2 style={{ color: '#00bcd4', marginBottom: '1rem' }}>My Certifications</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap', // This ensures badges wrap on smaller screens
          justifyContent: 'center',
        }}
      >
        {/* First Badge */}
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="1a2c55c5-33d1-4287-8f8b-24464fb5241d"
          data-share-badge-host="https://www.credly.com"
        ></div>

        {/* Second Badge */}
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="0d9fac48-34d2-46ec-a2f4-ff560928f574"
          data-share-badge-host="https://www.credly.com"
        ></div>
      </div>
    </div>
  );
};

export default CompTIASection;
