import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function MarkdownListItem(props: any) {
  return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
}

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
        component: 'h1',
        fontFamily: 'Poppins',
        fontWeight: '600'
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6', component: 'h2', fontWeight: '600', fontFamily: 'Poppins' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1',  fontFamily: 'Poppins' },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
        fontFamily: 'Poppins'
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true,  fontFamily: 'Poppins' },
    },
    a: { component: Link },
    li: {
      component: MarkdownListItem,
      fontFamily: 'Poppins'
    },
  },
};

export default function Markdown(props: any) {
  return <ReactMarkdown options={options} {...props} fontFamily={'Poppins'}/>;
}
