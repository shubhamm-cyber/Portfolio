import React from 'react';
import { Grid, Card, CardContent, Typography, Box, CardMedia, Link } from '@mui/material';

const projects = [
  {
    title: 'SOAR EDR Project: Integrating LimaCharlie, Tines, Slack, and Email for Enhanced Cybersecurity',
    description: 'This project leverages LimaCharlie, Tines, Slack, and Email to automatically detect Suspicious Utility, notify relevant personnel, and manage machine isolation decisions, streamlining incident response and enhancing threat mitigation.',
    image: 'https://via.placeholder.com/300x200?text=Vulnerability+Assessment+Tool',
    url: 'https://shubhamahirrao.notion.site/SOAR-EDR-Project-Integrating-LimaCharlie-Tines-Slack-and-Email-for-Enhanced-Cybersecurity-e50e45293739466d8f4cc45bfb837827',
  },
  {
    title: 'Conti Ransomware Incident Analysis Using Splunk',
    description: 'This project utilized Splunk to analyze security logs, detect indicators of Conti ransomware activity, and track network anomalies. By correlating data from various sources, it streamlined the identification and mitigation of the threat, enhancing overall cybersecurity defenses.',
    image: 'https://via.placeholder.com/300x200?text=Phishing+Detection+System',
    url: 'https://shubhamahirrao.notion.site/Conti-Ransomware-Incident-Analysis-Using-Splunk-66331583f134432f8512fc3cc38f68b8',
  },
  {
    title: 'Malware Analysis using Wireshark',
    description: 'Used Wireshark to capture and analyze network traffic, identify malicious activity, and trace malware behavior for effective threat mitigation.',
    image: 'https://via.placeholder.com/300x200?text=Firewall+Configuration+Manager',
    url: 'https://shubhamahirrao.notion.site/Malware-Analysis-using-Wireshark-5eaa7b64c38e4cac980db13a887563ea',
  },
  {
    title: 'Incident Response Plan (IRP) for TechGuard Solutions',
    description: 'TechGuard Solutions IRP details steps for managing cybersecurity incidents, including team roles, classification, and response phases to ensure quick recovery and continuous improvement.',
    image: 'https://via.placeholder.com/300x200?text=Penetration+Testing+Suite',
    url: 'https://shubhamahirrao.notion.site/Incident-Response-Plan-IRP-for-TechGuard-Solutions-3979771afbf444c19b09cb5afe16d87f?pvs=25',
  },
  // Add more projects as needed
];

const CybersecurityPortfolioSection = () => {
  return (
    <Box sx={{ padding: 4, background: 'linear-gradient(135deg, #000000, #434343)', mt: 4, marginBottom:'4rem' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography 
          variant="h1" 
          component="h1" 
          sx={{ 
            mb: 5, 
            fontSize: '2rem', 
            color: '#00bcd4', 
            position: 'relative',
            display: 'inline-block'
          }}
        >
          Portfolio
          <Box 
            sx={{ 
              position: 'absolute',
              bottom: '-5px',
              left: '50%', 
              transform: 'translateX(-50%)',
              width: '110%', 
              height: '2px',
              bgcolor: '#00bcd4'
            }} 
          />
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Link href={project.url} underline="none" target="_blank" rel="noopener">
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: '#1e1e1e',
                  color: '#f5f5f5',
                  borderRadius: 12,
                  boxShadow: 6,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: 12,
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ borderRadius: '12px 12px 0 0' }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      marginBottom: 1,
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: '1.2rem',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CybersecurityPortfolioSection;
