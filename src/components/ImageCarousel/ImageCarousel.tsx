import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import './ImageCarousel.css'; 

const handleDragStart = (e:any) => e.preventDefault();

const items = [
    <img src={`https://www.philhealth.gov.ph/images/thankyou_bnnr01.jpg`} onDragStart={handleDragStart} alt="presentation" />,
    <img src={`https://www.philhealth.gov.ph/images/membership_bnnr02.jpg`} onDragStart={handleDragStart} alt="presentation" />,
    <img src={`https://www.philhealth.gov.ph/images/konpckg_bnnr03.jpg`} onDragStart={handleDragStart} alt="presentation" />,
    <img src={`https://www.philhealth.gov.ph/images/bagongpilipinas_bnnr_v1.jpg`} onDragStart={handleDragStart} alt="presentation" />,
    <img src={`https://www.philhealth.gov.ph/images/ims-advisory_bnnr.jpg`} onDragStart={handleDragStart} alt="presentation" />,
    <img src={`https://www.philhealth.gov.ph/images/28th_bnnr.jpg`} onDragStart={handleDragStart} alt="presentation" />,
    <img src={`https://www.philhealth.gov.ph/images/netsatisfaction_bnnr.jpg`} onDragStart={handleDragStart} alt="presentation" />,
    <img src={`https://www.philhealth.gov.ph/images/hotline_bnnr_v1.jpg`} onDragStart={handleDragStart} alt="presentation" />,
    <img src={`https://www.philhealth.gov.ph/images/konsulta_tbnnr07.jpg`} onDragStart={handleDragStart} alt="presentation" />,
    <img src={`https://www.philhealth.gov.ph/images/callback_33.jpg`} onDragStart={handleDragStart} alt="presentation" />,
    <img src={`https://www.philhealth.gov.ph/irm/images/irm_bnnr16.jpg`} onDragStart={handleDragStart} alt="presentation" />,
    <img src={`https://www.philhealth.gov.ph/images/studies_bnnr1.jpg`} onDragStart={handleDragStart} alt="presentation" />,
    <img src={`https://www.philhealth.gov.ph/images/studies_bnnr1.jpg`} onDragStart={handleDragStart} alt="presentation" />,
    <img src={`https://www.philhealth.gov.ph/covid/images/covid_bnnr.jpg`} onDragStart={handleDragStart} alt="presentation" />,
    <img src={`https://www.philhealth.gov.ph/images/unicef_zben_v1.jpg`} onDragStart={handleDragStart} alt="presentation" />
  ];
  

const ImageCarousel = () => {

  return (
    <AliceCarousel 
        mouseTracking items={items} 
        autoPlay={true} 
        autoPlayInterval={2400} 
        infinite={true} 
        disableButtonsControls={true}
    />
  )
}

export default ImageCarousel