import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import BugReportIcon from '@mui/icons-material/BugReport';
import DevicesIcon from '@mui/icons-material/Devices';
import CloudIcon from '@mui/icons-material/Cloud';
import ShieldIcon from '@mui/icons-material/Shield';

const skills = [
  { name: 'Splunk', description: 'SIEM & log analysis', icon: <SecurityIcon /> },
  { name: 'Microsoft Sentinel', description: 'Cloud monitoring & security', icon: <CloudIcon /> },
  { name: 'QRadar', description: 'SIEM platform', icon: <SecurityIcon /> },
  
  { name: 'Tines', description: 'SOAR & automation', icon: <EmojiObjectsIcon /> },
  { name: 'Limacharlie', description: 'EDR & threat detection', icon: <SecurityIcon /> },
  { name: 'CrowdStrike Falcon', description: 'EDR & threat detection', icon: <SecurityIcon /> },
  { name: 'Nessus', description: 'Vulnerability scanning', icon: <BugReportIcon /> },
  
  { name: 'Wireshark', description: 'Network protocol analyzer', icon: <NetworkCheckIcon /> },
  { name: 'Snort', description: 'Network intrusion detection', icon: <NetworkCheckIcon /> },
  { name: 'Suricata', description: 'Intrusion detection and prevention', icon: <ShieldIcon /> },
  { name: 'Metasploit', description: 'Penetration testing framework', icon: <BugReportIcon /> },
  { name: 'Burp Suite', description: 'Web vulnerability scanner', icon: <WebIcon /> },
  { name: 'Zeek', description: 'Network monitoring framework', icon: <NetworkCheckIcon /> },
  { name: 'VirusTotal', description: 'Malware analysis & threat intelligence', icon: <ShieldIcon /> },
  
  { name: 'Python', description: 'Scripting & automation', icon: <CodeIcon /> },
  { name: 'Kali Linux', description: 'Penetration testing OS', icon: <DevicesIcon /> },
  { name: 'Brim', description: 'Data exploration for security logs', icon: <NetworkCheckIcon /> },
  { name: 'Autopsy', description: 'Digital forensics toolkit', icon: <BugReportIcon /> },
  { name: 'FTK (Forensic Toolkit)', description: 'Incident response & forensics', icon: <BugReportIcon /> },
  { name: 'Amazon GuardDuty', description: 'Cloud activity monitoring', icon: <CloudIcon /> },
  
];

const SkillsSection = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#121212', mt: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography 
          variant="h1" 
          component="h1" 
          sx={{ 
            mb: 2, 
            fontSize: '2rem', 
            color: '#00bcd4', 
            position: 'relative',
            display: 'inline-block'
          }}
        >
          Skills
          <Box 
            sx={{ 
              position: 'absolute',
              bottom: '-5px', // Adjust as needed to position the dash correctly
              left: '50%', 
              transform: 'translateX(-50%)',
              width: '110%', // Adjust the width of the dash as needed
              height: '2px', // Thickness of the dash
              bgcolor: '#00bcd4' // Color of the dash
            }} 
          />
        </Typography>
      </Box>
     
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                minWidth: 275,
                margin: 2,
                textAlign: 'center',
                backgroundColor: 'transparent',
                border: '1px solid #333',
                borderRadius: 8,
                color: '#f5f5f5',
                boxShadow: 4,
                transition: 'box-shadow 0.3s, transform 0.3s',
                '&:hover': {
                  boxShadow: 8,
                  transform: 'translateY(-5px)',
                },
                // Responsive card size adjustments
                '@media (max-width: 600px)': {
                  minWidth: 'auto',
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    fontSize: { xs: 36, sm: 40, md: 48 }, // Responsive icon size
                    color: '#00bcd4',
                    marginBottom: 2,
                  }}
                >
                  {skill.icon}
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: 16, sm: 18, md: 20 }, // Responsive text size
                    fontWeight: 'bold',
                    marginBottom: 1,
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  {skill.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 16 }, // Responsive text size
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  {skill.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
