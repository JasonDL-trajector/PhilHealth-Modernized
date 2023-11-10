import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './markdown.css';
import { Box, Link } from '@mui/material';

import "./styles.css";
import Collapsible from "./Collapsible";

import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function Main(props: MainProps) {

  useEffect(()=>{
    Aos.init({duration: 1500})
    Aos.init({
      disable: function() {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      }
    });
}, [])

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
              <div className="col-md-12 offset-md-2 col-lg-12 offset-lg-3" style={{ display: 'flex', justifyContent: 'center'}}>
         
               <div className="content" style={{ width: '150rem'}}>
                 <div className="list-group list-group-flush" >
                    <Collapsible title="Forms">
                      {/* Forms ROW */}
                      <Grid container sx={{ display: 'flex', flexDirection: 'row', gap: 15, paddingBottom: '3rem'}}>

                      {/* Left Section */}
                      <Grid item md={5} xs={12} data-aos='fade-right'>

                        {/* Membership */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Membership
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/membership/pmrf_012020.pdf' target='_blank'>PMRF: PhilHealth Member Registration Form</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/membership/PMRF_ForeignNatl.pdf' target='_blank'>PMRF-FN: PhilHealth Member Registration Form for Foreign Nationals</Link>
                        </Box>

                        {/* Claims */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Claims
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/ClaimSignatureForm_2018.pdf' target='_blank'>Claim Signature Form </Link>
                          
                          <Link mt={3} href='https://www.philhealth.gov.ph/downloads/claim/ClaimForm1_092018.pdf' target='_blank'>Claim Form 1: Member and Patient Information</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/ClaimForm2_092018.pdf' target='_blank'>Claim Form 2: Provider Information</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm3.pdf' target='_blank'>Claim Form 3: Patient's Clinical Record</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm4.pdf' target='_blank'>Claim Form 4: Clinical Summary</Link>
                        
                          <Link mt={3} href='https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm1_Guidelines.pdf' target='_blank'>PhilHealth Claim Form 1 Guidelines »»</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm2_Guidelines.pdf' target='_blank'>PhilHealth Claim Form 2 Guidelines »»</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm_Reminders.pdf' target='_blank'>PhilHealth Claim Form Reminders »»</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/PhilHealthClaim4_Guidelines.pdf' target='_blank'>PhilHealth Claim Form 4 Guidelines »»</Link>
                        </Box>

                        {/* E-Claims */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          E-Claims
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/eclaims/AnnexA-SCAF.pdf' target='_blank'>Software Certification Application Form (SCAF) </Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/eclaims/AnnexB-NDA.pdf' target='_blank'>Non-Disclosure Agreement (NDA)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/eclaims/AnnexC-SCA.pdf' target='_blank'>Software Certification Agreement (SCA)</Link>
                          
                          <Link mt={3} href='https://www.philhealth.gov.ph/downloads/eclaims/eClaimsCloudStorage_Specs.pdf' target='_blank'>eClaims Cloud Storage Technical Specifications</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/eclaims/PCSS_ApplicationForm.pdf' target='_blank'>PCSS Application Form</Link>
                        
                        </Box>

                        {/* Dialysis Database */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Dialysis Database
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/PDD_RegistrationForm.pdf' target='_blank'>Registration Form </Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/claim/PDD_DiagnosisCertification.pdf' target='_blank'>Certification on Diagnosis and Management of CKD Stage 5</Link>
                        </Box>

                        {/* Payment */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Payment
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/employer/ppps_aca.pdf' target='_blank'>PPPS: PhilHealth Premium Payment Slip (for ACAs)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/employer/ppps_philhealth.pdf' target='_blank'>PPPS: PhilHealth Premium Payment Slip (for PhilHealth Use Only)</Link>
                        </Box>

                        {/* Employers */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Employers
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/employer/er1.pdf' target='_blank'>ER1: Employer Data Record</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/employer/er2.pdf' target='_blank'>ER2: Report of Employee-Members</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/employer/er3.pdf' target='_blank'>ER3: Employer Data Amendment Form</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/employer/rf1.pdf' target='_blank'>RF1: Employer's Remittance Report</Link>
                          
                          <Link mt={3} href='https://www.philhealth.gov.ph/downloads/employer/PEER-NonDisclosureAgreement.pdf' target='_blank'> PhilHealth Employers' Engagement Representative (PEER) Information Sheet Non Disclosure Agreement</Link>
                        </Box>

                        {/* Accredited Collecting Agents (ACAs) */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Accredited Collecting Agents (ACAs)
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/aca/nda_aca.pdf' target='_blank'>Non-Disclosure Agreement (NDA)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/aca/poaf.pdf' target='_blank'>PhilHealth Online Access Form (POAF)</Link>
                        </Box>

                        {/* Kasambahay */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Kasambahay
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/kasambahay/Household_Employer_Unified_Registration_Form.pdf' target='_blank'>PPS-HEUR1: Household Employer Unified Registration Form</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/kasambahay/Household_Employment_Unified_Report_Form.pdf' target='_blank'>PPS-HEUR2: Household Employment Unified Report Form</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/kasambahay/Kasambahay_Unified_Registration_Form.pdf' target='_blank'>PPS-KUR FORM: Kasambahay Unified Registration Form</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/kasambahay/Household_PPS.pdf' target='_blank'>PPS: Household PhilHealth Payment Slip</Link>
                        </Box>

                      </Grid>

                      {/* Right Section */}
                      <Grid item md={5} xs={12} data-aos='fade-left'>


                        {/*  COVID-19 Home Isolation Benefit Package */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>                          
                          COVID-19 Home Isolation Benefit Package
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/COVID-19_HomeIsolationBenefitPackageAssessmentChecklist.pdf' target='_blank'>Assessment Checklist for COVID-19 Home Isolation Benefit Package</Link>
                        </Box>

                        {/* COVID-19 Testing Package */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>                          
                          COVID-19 Testing Package
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>

                          <Typography color={'black'} fontFamily={'Poppins'}>Cartridge Based PCR</Typography>
                          <Link href='https://www.philhealth.gov.ph/downloads/COVID-19_HomeIsolationBenefitPackageAssessmentChecklist.pdf' target='_blank'>Annex C - SARS-CoV-2 claims summary form and instructions for electronic submission</Link>
                          <Link href='https://www.philhealth.gov.ph/circulars/2021/001/AnnexD_WaiverForDirectlyFiledClaimsForSARS-CoV-2.pdf' target='_blank'>Annex D - Waiver for Directly Filed Claims for SARS-CoV-2 Testing Package</Link>
                          <Link href='https://www.philhealth.gov.ph/circulars/2021/001/AnnexE_CertificateOfClassificationOfAt-riskIndividualsAndActualChargesForSARS-CoV-2%20test.pdf' target='_blank'>Annex E - Certificate of classification of at-risk individuals and actual charges for SARS-CoV-2 test</Link>
                          
                          <Typography color={'black'} mt={2} fontFamily={'Poppins'}>RT PCR Test</Typography>
                          <Link href='https://www.philhealth.gov.ph/downloads/COVID-19_HomeIsolationBenefitPackageAssessmentChecklist.pdf' target='_blank'>Annex C - SARS-CoV-2 claims summary form and instructions for electronic submission</Link>
                          <Link href='https://www.philhealth.gov.ph/circulars/2021/001/AnnexD_WaiverForDirectlyFiledClaimsForSARS-CoV-2.pdf' target='_blank'>Annex D - Waiver for Directly Filed Claims for SARS-CoV-2 Testing Package</Link>
                          <Link href='https://www.philhealth.gov.ph/circulars/2021/003/AnnexE_CertificateOfClassificationOfAt-riskIndividualsAndActualChargesForSARS-CoV-2test.pdf' target='_blank'>Annex E - Certificate of classification of at-risk individuals and actual charges for SARS-CoV-2 test</Link>
                        </Box>

                         {/* Rheumatic Fever/Rheumatic Heart Disease (RF/RHD) */}
                         <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>                          
                           Rheumatic Fever/Rheumatic Heart Disease (RF/RHD)
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>

                          <Typography color={'black'} fontFamily={'Poppins'} fontWeight={600}>I. Requirements for pre-authorization</Typography>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexA_Pre-authorization_060619.pdf' target='_blank'>A. Pre-authorization checklist (Annex A-RF/RHD)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexB_MEForm_010319.pdf' target='_blank'>B. Member empowerment form (Annex B-ME Form)</Link>
                          
                          <Typography color={'black'} fontFamily={'Poppins'} fontWeight={600}>II. Requirements for submission of claims for reimbursement</Typography>
                          <Typography color={'black'} fontFamily={'Poppins'}>A. When claiming for Tranche 1</Typography>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexH_TransmittalForm_010319.pdf' target='_blank'>1. Transmittal Form (Annex H)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexC1_MandatoryChecklist_010319.pdf' target='_blank'>2. Checklist of Mandatory Services & Other services (Annex C1 –RF/RHD)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexD_SatisfactionQuestionnaire_010319.pdf' target='_blank'>3. RF/RHD Satisfaction Questionnaire (Annex D-RF/RHD)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexE_ReimbursementChecklist_010319.pdf' target='_blank'>4. Checklist of Requirement for Reimbursement (Annex E-RF/RHD)</Link>
                          <Typography color={'black'} fontFamily={'Poppins'}>B. When claiming for Tranche 2</Typography>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexH_TransmittalForm_010319.pdf' target='_blank'>1. Transmittal Form (Annex H)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexC1_MandatoryChecklist_010319.pdf' target='_blank'>2. Checklist of Mandatory Services & Other services (Annex C2 –RF/RHD)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexD_SatisfactionQuestionnaire_010319.pdf' target='_blank'>3. RF/RHD Satisfaction Questionnaire (Annex D-RF/RHD)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexE_ReimbursementChecklist_010319.pdf' target='_blank'>4. Checklist of Requirement for Reimbursement (Annex E-RF/RHD)</Link>
                          
                          <Typography color={'black'} fontFamily={'Poppins'} fontWeight={600}>III. For patients requesting for a transfer to another RF/RHD provider</Typography>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexG_LetterOfIntentForTransferToRF-RHD-Facility_010319.pdf' target='_blank'>1. Letter of intent for transfer of RF/RHD care to a referral RF/RHD provider(Annex G-RF/RHD)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexM_ChecklistOfPatientTransfer_010319.pdf' target='_blank'>2. Checklist for Patient Transfer (Annex M-RF/RHD)</Link>
                          
                          <Typography color={'black'} fontFamily={'Poppins'} fontWeight={600}>IV. Other forms</Typography>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexN_OutpatientAssessmentForm_010319.pdf' target='_blank'>1. RF/RHD systematic clinical assessment and follow-up form (Annex N-RF/RHD)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexO_RegistryForm_010319.pdf' target='_blank'>2. National RF/RHD Registry Data Sheet (Annex O-RF/RHD)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RF-RHD_AnnexP_ClinicalPathway_010319.pdf' target='_blank'>3. Clinical Pathway (Annex P-RF/RHD)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/rf-rhd/RFRHD_BOOKLET_080318.pdf' target='_blank'>4. RF/RHD Passport</Link>
                          
                       
                        </Box>







                        </Grid>

                      </Grid>
                    </Collapsible>

                    <Collapsible title="Accreditation Documents">
                     {/* Accreditation Documents ROW */}
                      <Grid container sx={{ display: 'flex', flexDirection: 'row', gap: 15, paddingBottom: '3rem'}}>

                      {/* Left Section */}
                      <Grid item md={5} xs={12} data-aos='fade-right'>

                        {/* Health IT Partners */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Health IT Partners
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/eclaims/PhilHealth_Electronic_Claims_Implementation_Guide_v3.1_20130122.pdf' target='_blank'>e-Claims Implementation Guide »</Link>
                        </Box>

                        {/* Health Care Professionals */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Health Care Professionals
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/AnnexA_DocumentaryRequirementsforAccreditationofHealthCareProfessionals.pdf' target='_blank'>Annex A: Documentary Requirements for Accreditation of Health Care Professionals </Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/AnnexB_ProviderDataRecordforHealthCareProfessionals.pdf' target='_blank'>Annex B: Provider Data Record for Health Care Professionals </Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/AnnexC_SupportingDocumentsforUpdatingofRecordsofHealthCareProfessionals.pdf' target='_blank'>Annex C: Supporting Documents for Updating of Records of Health Care Professionals </Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/AnnexD_PerformanceCommitmentforHealthCareProfessionals(RevisedOctober2022).pdf' target='_blank'>Annex D: Performance Commitment for Health Care Professionals (Revised October 2022) </Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/AnnexE_PhilHealthRegionalOfficesCoverageAreasandContactInformation.pdf' target='_blank'>Annex E: PhilHealth Regional Offices' Coverage Areas and Contact Information </Link>
                          
                         
                        </Box>

                        {/* Health Care Facilities */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Health Care Facilities
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/AnnexA_DocumentaryRequirementsForAccreditationOfHealthFacilities.pdf' target='_blank'>Annex A: Documentary Requirement for Accreditation of Health Facilities </Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/AnnexB_ProviderDataRecordForHealthFacilities.pdf' target='_blank'>Annex B: Provider Data Record for Health Care Facilities (FILLABLE)</Link>
                          <Link href='hhttps://www.philhealth.gov.ph/downloads/accreditation/AnnexC_PerformanceCommitment(Revised062023).pdf' target='_blank'>Annex C: Performance Commitment for Health Facilities (Revised June 2023) (FILLABLE)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/AnnexD_ClassificationOfAdministrativeOffensesOfHealthCareProviders.pdf' target='_blank'>Annex D: Classification of Administrative Offenses of Health Care Providers as Provided in RA No. 10606</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/AnnexE_ClassificationOfOffensesOfHealthCareProviders.pdf' target='_blank'>Annex E: Classification of Offenses of Health Care Providers as Provided in the PROAC of RA No. 11223</Link>
                        
                        </Box>

                      </Grid>

                      {/* Right Section */}
                      <Grid item md={5} xs={12} data-aos='fade-left'>


                        {/* ACPS Forms */}
                        <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>                          
                          ACPS Forms
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/A.NoticeOfACPScompliance_privHCI.docx' target='_blank'>A. Notice of ACPS compliance for private facilities</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/B.NoticeOfACPScompliance_govt.docx' target='_blank'>B. Notice of ACPS compliance for public facilities</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/C.NoticeOfACPScompliance_lgu-owned.docx' target='_blank'>C. Notice of ACPS compliance for LGU-owned facilities</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/D.BankCertification.docx' target='_blank'>D. Bank Certification</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/E.NoticeOfChangeOfBankAccount_priv.docx' target='_blank'>E. Notice of Change of Bank account for private facilities</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/F.NoticeOfChangeOfBankAccount_govt.docx' target='_blank'>F. Notice of Change of Bank account for public facilities</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/G.NoticeOfChangeOfBankAccount_lgu-owned_p1.docx' target='_blank'>G. Notice of Change of Bank account for LGU-owned facilities (p1)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/G.NoticeOfChangeOfBankAccount_lgu-owned_p2.docx' target='_blank'>H. Notice of Change of Bank account for LGU-owned facilities (p2)</Link>
                          
                          <Link mt={2} href='https://www.philhealth.gov.ph/downloads/accreditation/PRO_email.pdf' target='_blank'>Email addresses of the Accreditation and Quality Assurance Section ot the PROs)</Link>
                        </Box>

                

                        </Grid>
                      </Grid>
                    </Collapsible>

                    <Collapsible title="Z Benefit Documents">
                      {/* Z Benefit Documents ROW */}
                      <Grid container sx={{ display: 'flex', flexDirection: 'row', gap: 15, paddingBottom: '3rem'}}>

                        {/* Left Section */}
                        <Grid item md={5} xs={12} data-aos='fade-right'>
                          <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Self-Assessment Tools</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Pre-Authorization and Claims Reimbursement</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Acute Lymphocytic Leukemia</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Breast Cancer</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Coronary Artery Bypass Graft Surgery</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Cervical Cancer</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Colon Cancer</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Kidney Transplantation</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Peritoneal Dialysis (PD) First</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Selected Orthopedic Implants</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Prostate Cancer</Link>
                            
                          </Box>
                        </Grid>

                        {/* Right Section */}
                        <Grid item md={5} xs={12} data-aos='fade-right'>
                          <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                            
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Rectal Cancer</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Tetralogy of Fallot</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Ventricular Septal Defect Surgery</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>ZMORPH</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Expanded ZMORPH</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Premature or Small Newborns</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Z Benefits for Children with Mobility Impairment</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Z Benefits for Children with Developmental Disabilities</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Z Benefits for Children with Hearing Impairment</Link>
                            <Link href='https://www.philhealth.gov.ph/downloads/' target='_blank'>Z Benefits for Visual Disabilities</Link>
                          </Box>
                        </Grid>


                      </Grid>
                    </Collapsible>

                    <Collapsible title="Konsulta">
                      {/* Konsulta ROW */}
                      <Grid container sx={{ display: 'flex', flexDirection: 'row', gap: 15, paddingBottom: '3rem'}}>

                      {/* Left Section */}
                      <Grid item md={12} xs={12} data-aos='fade-right'>

                
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/konsulta/AnnexA_StandardsForAccreditationOfPhilHealthKonsultaFacilities.pdf' target='_blank'>Annex A: Standards for Accreditation of PhilHealth Konsulta Facilities</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/konsulta/AnnexB_Self-AssessmentAccreditationSurveyToolForPhilHealthKonsultaFacility.pdf' target='_blank'>Annex B. Self-Assessment Accreditation Survey Tool for PhilHealth Konsulta Facility</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/konsulta/AnnexB.1_HealthHumanResourceSurveyToolForPhilHealthKonsultaFacility.pdf' target='_blank'>Annex B.1 Health Human Resource Survey Tool for PhilHealth Konsulta Facility</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/konsulta/AnnexB.2_ChecklistOfPhilHealthKonsultaDrugsAndItsPreparations.pdf' target='_blank'>Annex B.2 Checklist of PhilHealth Konsulta Drugs and Its Preparations</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/konsulta/AnnexB.3_ChecklistOfPhilHealthKonsultaLaboratoriesAndDiagnosticServices.pdf' target='_blank'>Annex B.3 Checklist of PhilHealth Konsulta Laboratories and Diagnostic Services</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/konsulta/AnnexC_ProceduresAndDocumentaryRequirementsForAccreditationOfPhilHealthKonsultaProviders_v1.pdf' target='_blank'>Annex C. Procedures and Documentary Requirements for Accreditation of PhilHealth Konsulta Providers</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/konsulta/AnnexD.1_CertificationOfServiceDeliverySupport(LaboratoryAndDiagnosticServices).pdf' target='_blank'>Annex D.1 Certification of Service Delivery Support (Laboratory and Diagnostic Services)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/konsulta/AnnexD.2_CertificationOfServiceDeliverySupport(Medicines).pdf' target='_blank'>Annex D.2 Certification of Service Delivery Support (Medicines)</Link>
                          <Link href='https://www.philhealth.gov.ph/downloads/accreditation/konsulta/AnnexE_Non-disclosureAgreement.pdf' target='_blank'>Annex E. Non-disclosure Agreement</Link>
                      
                        </Box>
                      
                      </Grid>
                      </Grid>
                    </Collapsible>

                    <Collapsible title="IEC Materials">
                     {/* IEC Materials ROW */}
                     {/* Infomercials */}
                     <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'} display={'flex'} justifyContent={'center'}>
                        Infomercials
                      </Typography>
                      
                      <Grid container sx={{ display: 'flex', flexDirection: 'row', gap: 15, paddingBottom: '3rem'}}>
              
                      {/* Left Section */}
                      <Grid item md={5} xs={12} data-aos='fade-right'>


                        {/* Left */}
                        {/* <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Left
                        </Typography> */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '4rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                          <Link href='https://youtu.be/bQtd1GzwIkc' target='_blank'>Universal Health Care Kalusugan at kalinga para sa lahat </Link>
                          
                          <Link href='https://youtu.be/pCVhwF4Er7Y' target='_blank'>Universal Health Care Episode 2</Link>
                          <Link href='https://youtu.be/nylpTzbLaws' target='_blank'>Universal Health Care Episode 3</Link>
                          <Link href='https://youtu.be/2Oi5_zbzw6c' target='_blank'>Universal Health Care Episode 4</Link>
                          <Link href='https://youtu.be/dlUQ97X0g9w' target='_blank'>Mag update ng record, Mag 4M na!</Link>
                        
                          <Link href='https://youtu.be/5UjRh9JaLso' target='_blank'>PhilHealth Registration, Mag-4M na!</Link>
                          <Link href='https://youtu.be/lkgWf9Awcv0' target='_blank'>Mahalaga ang PhilHealth Kontribusyon Mo....</Link>
                          <Link href='https://youtu.be/IRs0bubOdOw' target='_blank'>Mga Dapat Malaman Tungkol sa Universal Health Care</Link>
                          <Link href='https://youtu.be/lDZHAO2Sfl8' target='_blank'>Universal Health Care</Link>
                          <Link href='https://youtu.be/B3ldR7cI0dY' target='_blank'>Online Payment</Link>
                          <Link href='https://youtu.be/1xWtpXVeF2o' target='_blank'>Member Portal</Link>
                          <Link href='https://youtu.be/ouHr6s6u_zM' target='_blank'>Konsulta Overview</Link>
                          <Link href='https://youtu.be/MGz0bQcArqM' target='_blank'>PhilHealth Anti-fraud</Link>
                          <Link href='https://youtu.be/gTinCiU4_a4' target='_blank'>PhilHealth Senior Citizen </Link>
                          
                          <Link href='https://youtu.be/LVrmcqtfAwU' target='_blank'>PhilHealth Indigent NHTS</Link>
                          <Link href='https://youtu.be/bdY7diV5JV8' target='_blank'>PhilHealth Confinement Abroad</Link>
                        </Box>

                        

                      </Grid>

                        {/* Right Section */}
                        <Grid item md={5} xs={12} data-aos='fade-left'>

                        {/* Claims */}
                        {/* <Typography variant='h5' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Right
                        </Typography> */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '4rem', marginLeft: '1rem', fontFamily: 'Poppins', gap: '.5rem' }}>
                        
                          <Link href='https://youtu.be/XvpJH4BqC8A' target='_blank'>PhilHealth Monthly Payment Scheme</Link>
                          <Link href='https://youtu.be/p7hR8OjK950' target='_blank'>The PhilHealth Story</Link>
                        
                          <Link href='https://www.youtube.com/watch/SNUiJfpjFXs' target='_blank'>PhilHealth Cares, Nagmamalasakit</Link>
                          <Link href='https://www.youtube.com/watch/pZZTTxpiy38' target='_blank'>Corporate Action Center, Nagmamalasakit</Link>
                          <Link href='https://youtu.be/pgBNdMYGx5A' target='_blank'>PhilHealth Medical Detoxification Drug Rehabilitation Package</Link>
                          <Link href='https://youtu.be/MlFf2DbC3Mc' target='_blank'>Benepisyong PhilHealth para sa mga OFWs</Link>
                          <Link href='https://youtu.be/QVG1nNmxmPs' target='_blank'>Z Benefits for Premature and Small Newborns</Link>
                          <Typography fontFamily={'Poppins'} fontSize={'.8rem'}>Laking pasasalamat ni Gng. Mary Grace Calamba ng Bonbon, Lower Loboc, Bohol sa PhilHealth Z Benefits para sa premature and small babies. Alamin ang kanyang kwento.</Typography>
                          <Link href='https://youtu.be/Jzjz4miJ798' target='_blank'>Z Benefits for Premature and Small Newborns</Link>
                          <Typography fontFamily={'Poppins'}  fontSize={'.8rem'}>Nabigyan ng Gov. Celestino Gallares Memorial Hospital ang 41 premature babies ng serbisyong medikal sa ilalim ng Z Benefits para sa premature and small babies simula Disyembre 2018. Ang Gallares ang kauna-unahang hospital sa buong bansa na naging contracted para sa nasabing benepisyo.</Typography>
                          <Link href='https://youtu.be/hw0VwYNZ-Jg' target='_blank'>Z Benefits for Premature and Small Newborns</Link>
                        </Box>

                        </Grid>

                      </Grid>
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
