
export interface LinksURL {
  links: string;
  label: string;
}

export interface LinksBanner {
  links: string;
  image: string;
}

export const getLinks = async () => {
  const links = await fetch('http://localhost:5000/links/get')
  .then(async(res)=>{
    const data: Array<LinksURL> = await res.json();
    return data;
  })
  return links;
}

export const getLinksBanner = async () => {
  const linksBanner = await fetch('http://localhost:5000/links-banner/get')
  .then(async(res)=>{
    const data: Array<LinksBanner> = await res.json();
    return data;
  })
  return linksBanner;
}

export const links: Array<LinksURL> = [
  {
    links: "https://www.philhealth.gov.ph/circulars/2023/",
    label: "Circulars"
  },
  {
    links: "https://www.philhealth.gov.ph/advisories/2023/",
    label: "Advisories"
  },
  {
    links: "https://www.philhealth.gov.ph/news/",
    label: "News"
  },
  {
    links: "https://www.philhealth.gov.ph/ofclstmnts/2023/",
    label: "Official Statements"
  },
  {
    links: "https://www.philhealth.gov.ph/suppliers/iaeb/index.htm",
    label: "ITB"
  },
  {
    links: "https://www.philhealth.gov.ph/about_us/vacancies/2023/",
    label: "Job Vacancies"
  },
  {
    links: "https://www.philhealth.gov.ph/joint_issuances/",
    label: "Joint Issuances"
  }
]


export const linksBanner: Array<LinksBanner> = [
  {
    links: "https://www.philhealth.gov.ph/konsulta/",
    image: "https://www.philhealth.gov.ph/konsulta/images/konsulta_bnnr_sml.jpg"
  },
  {
    links: "https://www.philhealth.gov.ph/about_us/map/regional.htm",
    image: "https://www.philhealth.gov.ph/images/contact_btn.jpg"
  },
  {
    links: "https://www.philhealth.gov.ph/uhc/LibreNaBa.pdf",
    image: "https://www.philhealth.gov.ph/images/uhc_btn.jpg"
  },
  {
    links: "https://www.philhealth.gov.ph/arta/",
    image: "https://www.philhealth.gov.ph/images/arta_bnnr_sml.jpg"
  },
  {
    links: "https://www.philhealth.gov.ph/unclaimedrefunds/",
    image: "https://www.philhealth.gov.ph/images/UnclaimedRefunds.jpg"
  }
]
