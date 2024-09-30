import React from 'react';
import {
  AppBar, Toolbar, Tabs, Tab, Grid, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Button, IconButton, useMediaQuery, Typography,
  Avatar,
  Box,
  Badge,
  MenuItem,
  TextField,
  InputAdornment
} from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Phone, Message, MoreVert } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ShareIcon from '@mui/icons-material/Share';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ContactsIcon from '@mui/icons-material/Contacts';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const leads = [
  { company: "Try jobs private limited", location: "Coimbatore, Tamilnadu", project: "CRM", contact: "Ramcharan", status: "New", followUp: "20 Jan 2022", statusColor: '#3499ba' },
  { company: "Aagnia Technology private limited", location: "Coimbatore, Tamilnadu", project: "Ecommerce", contact: "Karthikeyan", status: "Hot", followUp: "25 Jan 2022", statusColor: '#c72c3e' },
  { company: "Try jobs private limited", location: "Coimbatore, Tamilnadu", project: "CRM", contact: "Karthikeyan", status: "LOST", followUp: "25 Jan 2022", statusColor: '#606b75' },
  { company: "Aagnia Technology private limited", location: "Coimbatore, Tamilnadu", project: "Ecommerce", contact: "Ramcharan", status: "NEW", followUp: "25 Jan 2022", statusColor: '#69cf88' },
  { company: "Try jobs private limited", location: "Coimbatore, Tamilnadu", project: "CRM", contact: "Karthikeyan", status: "WIN", followUp: "25 Jan 2022", statusColor: '#7bbec7' },
  // { company: "Aagnia Technology private limited", location: "Coimbatore, Tamilnadu", project: "Ecommerce", contact: "Karthikeyan", status: "Hot", followUp: "25 Jan 2022", statusColor: '#3499ba' },
  // { company: "Try jobs private limited", location: "Coimbatore, Tamilnadu", project: "CRM", contact: "Karthikeyan", status: "NEW", followUp: "25 Jan 2022", statusColor: '#c72c3e' },

];

function App() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <AppBar sx={{ backgroundColor: 'white', boxShadow: 'none' }} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
            <Avatar
              sx={{
                bgcolor: "#3499ba",
                width: 40,
                height: 40,
                boxShadow: 3,
                marginLeft: 3
                // border: '1px solid white'
              }}
            >
              <LocalFireDepartmentIcon fontSize="small" />
            </Avatar>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: "15px" }}>
            <IconButton>
              <Badge color="secondary" variant="dot">

                {/* <MailIcon /> */}
                <NotificationsIcon sx={{ fontSize: "28px" }} />

              </Badge>
            </IconButton>
            <Avatar
              src='https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-91373.jpg?size=626&ext=jpg&ga=GA1.1.1083383706.1725611414&semt=ais_hybrid'
            >
            </Avatar>
            <Box color={'black'} sx={{ cursor: 'pointer' }} display="flex" flexDirection="column" textAlign={'left'}>
              <Typography sx={{ fontWeight: 900, fontSize: 14 }}>
                Nithin Josh
              </Typography>
              <Typography sx={{ fontSize: 9 }}>
                Welcome
              </Typography>
            </Box>

            <IconButton>
              <SettingsIcon sx={{ fontSize: "28px" }} />
            </IconButton>
          </Box>
        </Toolbar>


      </AppBar>
      <Box sx={{ backgroundColor: '#F5F5F5', mx: 2, }}>

        <Box sx={{ backgroundColor: '#375770', height: "70px", paddingTop: '10px' }}>
          <Tabs value={0} centered>
            <Tab
              sx={{ minHeight: "60px", padding: "0 16px", backgroundColor: '#3499ba', borderRadius: '15px 15px 0 0', }}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    color: 'white'
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "transparent",
                      width: 40,
                      height: 40,
                      boxShadow: 3,
                      border: '1px solid white'
                    }}
                  >
                    <LeaderboardIcon fontSize="small" />
                  </Avatar>

                  <Box display="flex" flexDirection="column" textAlign={'left'}>
                    <Typography sx={{ fontWeight: 900, fontSize: 14 }}>
                      Leads
                    </Typography>
                    <Typography sx={{ fontSize: 9 }}>
                      17 leads are pending
                    </Typography>
                  </Box>
                </Box>
              }
            />
            <Tab
              sx={{ minHeight: "60px", padding: "0 16px" }}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    color: 'white'
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "transparent",
                      width: 40,
                      height: 40,
                      boxShadow: 3,
                      border: '1px solid white'
                    }}
                  >
                    <AccountBalanceIcon fontSize="small" />
                  </Avatar>

                  <Box display="flex" flexDirection="column" textAlign={'left'}>
                    <Typography sx={{ fontWeight: 900, fontSize: 14 }}>
                      Accounts
                    </Typography>
                    <Typography sx={{ fontSize: 9 }}>
                      20 active account
                    </Typography>
                  </Box>
                </Box>
              }
            />
            <Tab
              sx={{ minHeight: "60px", padding: "0 16px" }}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    color: 'white'
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "transparent",
                      width: 40,
                      height: 40,
                      boxShadow: 3,
                      border: '1px solid white'
                    }}
                  >
                    <ContactsIcon fontSize="small" />
                  </Avatar>

                  <Box display="flex" flexDirection="column" textAlign={'left'}>
                    <Typography sx={{ fontWeight: 900, fontSize: 14 }}>
                      contact
                    </Typography>
                    <Typography sx={{ fontSize: 9 }}>
                      10 active users
                    </Typography>
                  </Box>
                </Box>
              }
            />
            <Tab
              sx={{ minHeight: "60px", padding: "0 16px" }}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    color: 'white'
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "transparent",
                      width: 40,
                      height: 40,
                      boxShadow: 3,
                      border: '1px solid white'
                    }}
                  >
                    <WatchLaterIcon fontSize="small" />
                  </Avatar>

                  <Box display="flex" flexDirection="column" textAlign={'left'}>
                    <Typography sx={{ fontWeight: 900, fontSize: 14 }}>
                      Tasks
                    </Typography>
                    <Typography sx={{ fontSize: 9 }}>
                      25 tasks are pending
                    </Typography>
                  </Box>
                </Box>
              }
            />
          </Tabs>
        </Box>

        <Box sx={{ marginTop: 4, marginLeft: 2.2, marginBottom: '-8px' }}>
          <Tabs
            //  variant="scrollable"
            //  scrollButtons="auto"
            //  aria-label="Closable Tabs"
            sx={{
              borderBottom: 'none',
            }}
          >

            <Tab

              label={
                <Box display="flex" alignItems="center" fontSize={13}>
                  All leads
                  <IconButton
                    size="small"
                  // onClick={(e) => {
                  // }}
                  // sx={{ marginLeft: 1 }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              }

              sx={{
                backgroundColor: 'white',
                borderRadius: '0 25px 0 0',
                // marginRight: '8px',
                padding: '0 20px',
                minHeight: '40px',
              }}
            />
            <Tab

              label={
                <Box display="flex" alignItems="center" fontSize={13}>
                  Add new lead
                  <IconButton
                    size="small"
                    sx={{ padding: 1 }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              }
              sx={{
                backgroundColor: '#E0E0E0',
                borderRadius: '25px 25px 0 0',
                // marginRight: '8px',
                padding: '0 20px',
                minHeight: '35px',
              }}
            />
            <Tab

              label={
                <Box display="flex" alignItems="center" fontSize={13}>
                  Edit lead - Aag
                  <IconButton
                    size="small"
                  // sx={{ marginLeft: 1 }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              }
              sx={{
                backgroundColor: '#E0E0E0',
                borderRadius: '25px 25px 0 0',
                // marginRight: '8px',
                padding: '0 20px',
                minHeight: '35px',
              }}
            />

          </Tabs>
        </Box>
        <Box
          sx={{
            backgroundColor: '#fff',
            padding: isMobile ? '16px 8px' : '16px 24px',
            marginLeft: '17px',
            marginRight: "17px",
            marginBottom: '-17px'
          }}
        >
          <Grid container spacing={isMobile ? 2 : 3} alignItems="center">

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant={isMobile ? 'h6' : 'h5'} color="primary" fontWeight="bold">
                All Leads
              </Typography>
              <Typography variant="body2" color="textSecondary">
                From 20 September to 20 December 2021
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={8}>
              <Box display="flex" alignItems={'center'} justifyContent={isMobile ? 'center' : 'flex-end'} flexWrap="wrap" gap={isMobile ? 1 : 3} sx={{ paddingTop: "20px", marginBottom: '10px' }}>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Search a lead ..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    sx: {
                      borderRadius: '30px',
                      backgroundColor: '#f5f5f5',
                    },
                  }}
                  sx={{
                    minWidth: isMobile ? '100%' : '200px',
                    width: isMobile ? '100%' : 'auto',
                  }}
                />

                <TextField
                  select
                  size="small"
                  // value="All leads"
                  label="All leads"
                  variant="standard"
                  sx={{
                    minWidth: isMobile ? '100%' : '150px',
                  }}
                >
                  <MenuItem value="All leads">All leads</MenuItem>
                  <MenuItem value="New leads">New leads</MenuItem>
                  <MenuItem value="Won leads">Won leads</MenuItem>
                  <MenuItem value="Lost leads">Lost leads</MenuItem>
                </TextField>
                <IconButton>
                  <FilterListIcon />
                </IconButton>
                <IconButton>
                  <ShareIcon />
                </IconButton>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<SearchIcon />}
                  sx={{
                    borderRadius: '20px',
                    backgroundColor: '#4CAF50',
                    textTransform: 'none',
                    minWidth: isMobile ? '100%' : 'auto',
                  }}
                >
                  Add new
                </Button>
              </Box>
            </Grid>


          </Grid>
        </Box>


        <Grid spacing={2} padding={2}>

          <Grid item xs={12}>
            <TableContainer sx={{ backgroundColor: 'white' }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#F6F6F8' }}>
                    <TableCell>Company Details</TableCell>
                    <TableCell>Project Tag</TableCell>
                    <TableCell>Contact Person</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Follow-up Date</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leads.map((lead, index) => (
                    <TableRow key={index} color={'white'}>
                      <TableCell sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Avatar></Avatar>
                        <Box >
                          <Box sx={{ fontSize: "15px", fontWeight: '600' }}>
                            {lead.company}
                          </Box>
                          <br />
                          <Box sx={{ fontSize: "12px", marginTop: '-15px' }}>
                            Location : Coimbatore, Tamilnadu Creadted : 20 Dec 2021
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ fontSize: "14.5px", fontWeight: '600' }}>{lead.project}</TableCell>
                      <TableCell sx={{ fontSize: "14.5px", fontWeight: '600' }}>{lead.contact}
                        <Box sx={{ fontSize: "12px", fontWeight: '100' }}>
                          Contact : 9876543210
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                          <Box
                            sx={{
                              width: isMobile ? 8 : 12,
                              height: isMobile ? 8 : 12,
                              borderRadius: '50%',
                              backgroundColor: lead?.statusColor,
                            }}
                          />
                          <span style={{ fontSize: "14.5px", fontWeight: '600' }}>
                            {lead.status}
                          </span>
                        </Box>
                        <Box sx={{ fontSize: "12px", fontWeight: '100' }}>
                          Status key word
                        </Box>

                      </TableCell>
                      <TableCell sx={{ fontSize: "14.5px", fontWeight: '600' }}>{lead.followUp} <Box sx={{ fontSize: "12px", fontWeight: '100' }}>
                        4 dats left
                      </Box></TableCell>
                      <TableCell>
                        <IconButton aria-label="call">
                          <Phone />
                        </IconButton>
                        <IconButton aria-label="message">
                          <Message />
                        </IconButton>
                        <IconButton aria-label="more">
                          <MoreVert />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: 'center', marginBottom: 5 }}>
          <Button variant="outlined"> Load more</Button>
        </Box>
        <Box sx={{ backgroundColor: '#375770', height: "20px", }}>

        </Box>
      </Box>
    </div>
  );
}

export default App;
