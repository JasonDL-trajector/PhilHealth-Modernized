import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './markdown.css';
import { Box, Link } from '@mui/material';

import "./styles.css";
import Collapsible from "./Collapsible";

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function Main(props: MainProps) {
  const { title } = props;

  return (
    <Grid
      item
      xs={12}
      md={12}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom fontFamily={'Poppins'} data-aos="fade-up" textAlign="center">
        {title}
      </Typography>
      <Divider />

      <Box className="markdown" data-aos="fade-right" mb={10} px={10}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant={'h4'} component={'h1'} fontFamily={'Poppins'} fontWeight={'600'} display={'flex'} justifyContent={'center'} color={'rgb(20,59,10)'}>
            Downloads
          </Typography>

          <div className="container" style={{ marginTop: '3rem'}}>
            <div className="row">
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
         
               <div className="content">
                 <div className="list-group list-group-flush">
                    <Collapsible title="Forms">
                      {/* Forms ROW */}
                      <Grid container sx={{ display: 'flex', flexDirection: 'row', gap: 5, paddingBottom: '3rem'}}>

                      {/* Left Section */}
                      <Grid item md={5} xs={12}>

                        {/* Membership */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Membership
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/membership/pmrf_012020.pdf' target='_blank'>- PMRF: PhilHealth Member Registration Form</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/membership/PMRF_ForeignNatl.pdf' target='_blank'>- PMRF-FN: PhilHealth Member Registration Form for Foreign Nationals</Link>
                        </Box>

                        {/* Claims */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Claims
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/ClaimSignatureForm_2018.pdf' target='_blank'>- Claim Signature Form </Link>
                          
                          <Link mt={3} href='https://www.philhealth.gov.ph/downloads/claim/ClaimForm1_092018.pdf' target='_blank'>- Claim Form 1: Member and Patient Information</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/ClaimForm2_092018.pdf' target='_blank'>- Claim Form 2: Provider Information</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf' target='_blank'>- Claim Form 3: Patient's Clinical Record</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm4.pdf' target='_blank'>- Claim Form 4: Clinical Summary</Link>
                        
                          <Link mt={3} href='https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm1_Guidelines.pdf' target='_blank'>- PhilHealth Claim Form 1 Guidelines »»</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm2_Guidelines.pdf' target='_blank'>- PhilHealth Claim Form 2 Guidelines »»</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm_Reminders.pdf' target='_blank'>- PhilHealth Claim Form Reminders »»</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/PhilHealthClaim4_Guidelines.pdf' target='_blank'>- PhilHealth Claim Form 4 Guidelines »»</Link>
                        </Box>

                        {/* E-Claims */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          E-Claims
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/eclaims/AnnexA-SCAF.pdf' target='_blank'>- Software Certification Application Form (SCAF) </Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/eclaims/AnnexB-NDA.pdf' target='_blank'>- Non-Disclosure Agreement (NDA)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/eclaims/AnnexC-SCA.pdf' target='_blank'>- Software Certification Agreement (SCA)</Link>
                          
                          <Link mt={3} href='https://www.philhealth.gov.ph/downloads/eclaims/eClaimsCloudStorage_Specs.pdf' target='_blank'>- eClaims Cloud Storage Technical Specifications</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/eclaims/PCSS_ApplicationForm.pdf' target='_blank'>- PCSS Application Form</Link>
                        
                        </Box>

                        {/* Dialysis Database */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Dialysis Database
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/PDD_RegistrationForm.pdf' target='_blank'>- Registration Form </Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/PDD_DiagnosisCertification.pdf' target='_blank'>- Certification on Diagnosis and Management of CKD Stage 5</Link>
                        </Box>

                        {/* Payment */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Payment
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/employer/ppps_aca.pdf' target='_blank'>- PPPS: PhilHealth Premium Payment Slip (for ACAs)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/employer/ppps_philhealth.pdf' target='_blank'>- PPPS: PhilHealth Premium Payment Slip (for PhilHealth Use Only)</Link>
                        </Box>

                        {/* Employers */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Employers
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/employer/er1.pdf' target='_blank'>- ER1: Employer Data Record</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/employer/er2.pdf' target='_blank'>- ER2: Report of Employee-Members</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/employer/er3.pdf' target='_blank'>- ER3: Employer Data Amendment Form</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/employer/rf1.pdf' target='_blank'>- RF1: Employer's Remittance Report</Link>
                          
                          <Link mt={3} href='https://www.philhealth.gov.ph/downloads/employer/PEER-NonDisclosureAgreement.pdf' target='_blank'>-  PhilHealth Employers' Engagement Representative (PEER) Information Sheet Non Disclosure Agreement</Link>
                        </Box>

                      </Grid>

                      {/* Left Section */}
                      <Grid item md={5} xs={12}>

                        {/* Accredited Collecting Agents (ACAs) */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Accredited Collecting Agents (ACAs)
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='PhilHealth Online Access Form (POAF)' target='_blank'>- Non-Disclosure Agreement (NDA)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/aca/poaf.pdf' target='_blank'>- PhilHealth Online Access Form (POAF)</Link>
                        </Box>

                        </Grid>


                      </Grid>
                    </Collapsible>
                    <Collapsible title="Accreditation Documents">
                      <p>
                        Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit.
                        Tempore atque amet aliquam esse
                        labore odit ipsum totam
                        architecto suscipit cumque!
                      </p>
                    </Collapsible>
                    <Collapsible title="Z Benefit Documents">
                      <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Veritatis explicabo soluta hic
                        deserunt reiciendis! Nihil iste
                        nobis odit praesentium officiis
                        optio tempora, soluta dolore
                        facere sint deserunt adipisci
                        pariatur, voluptatum incidunt!
                        Unde soluta eaque tenetur
                        architecto rem possimus, alias
                        qui ratione. Fugiat sed cumque
                        nemo harum? Nesciunt magnam at
                        velit animi! Hic perferendis
                        nostrum doloribus, ratione
                        voluptate totam atque corrupti
                        eveniet praesentium
                        exercitationem modi adipisci
                        itaque possimus, quam ad
                        accusantium at et quas, error
                        iste soluta aut assumenda
                        delectus? Eveniet iure nihil
                        vitae nobis tempore totam
                        quibusdam doloremque itaque
                        minima error officia, ab commodi
                        a rerum aspernatur consequatur
                        tempora consectetur.
                      </p>
                    </Collapsible>
                    <Collapsible title="Konsulta">
                      <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Veritatis explicabo soluta hic
                        deserunt reiciendis! Nihil iste
                        nobis odit praesentium officiis
                        optio tempora, soluta dolore
                        facere sint deserunt adipisci
                        pariatur, voluptatum incidunt!
                        Unde soluta eaque tenetur
                        architecto rem possimus, alias
                        qui ratione. Fugiat sed cumque
                        nemo harum? Nesciunt magnam at
                        velit animi! Hic perferendis
                        nostrum doloribus, ratione
                        voluptate totam atque corrupti
                        eveniet praesentium
                        exercitationem modi adipisci
                        itaque possimus, quam ad
                        accusantium at et quas, error
                        iste soluta aut assumenda
                        delectus? Eveniet iure nihil
                        vitae nobis tempore totam
                        quibusdam doloremque itaque
                        minima error officia, ab commodi
                        a rerum aspernatur consequatur
                        tempora consectetur.
                      </p>
                    </Collapsible>
                    <Collapsible title="IEC Materials">
                      <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Veritatis explicabo soluta hic
                        deserunt reiciendis! Nihil iste
                        nobis odit praesentium officiis
                        optio tempora, soluta dolore
                        facere sint deserunt adipisci
                        pariatur, voluptatum incidunt!
                        Unde soluta eaque tenetur
                        architecto rem possimus, alias
                        qui ratione. Fugiat sed cumque
                        nemo harum? Nesciunt magnam at
                        velit animi! Hic perferendis
                        nostrum doloribus, ratione
                        voluptate totam atque corrupti
                        eveniet praesentium
                        exercitationem modi adipisci
                        itaque possimus, quam ad
                        accusantium at et quas, error
                        iste soluta aut assumenda
                        delectus? Eveniet iure nihil
                        vitae nobis tempore totam
                        quibusdam doloremque itaque
                        minima error officia, ab commodi
                        a rerum aspernatur consequatur
                        tempora consectetur.
                      </p>
                    </Collapsible>
                  </div>
                </div>
              </div>
            </div>
          </div>

      

        </Box>
      </Box>
    </Grid>
  );
}
