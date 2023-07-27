import React from "react";
import { Box, Typography } from "@mui/material";

function PrivacyPolicy() {
  return (
    <div>
      <Box p={4}>
        <Typography variant="h4" component="h1" gutterBottom mt={5}>
          Privacy Policy of Company Name
        </Typography>
        <Typography variant="body1" mt={2}>
          Company Name operates the Website Name website, which provides the
          SERVICE.
        </Typography>
        <Typography variant="body2" mt={2}>
          This page is used to inform website visitors regarding our policies
          with the collection, use, and disclosure of Personal Information if
          anyone decided to use our Service, the Website Name website.
        </Typography>
        <Typography variant="body2" mt={2}>
          If you choose to use our Service, then you agree to the collection and
          use of information in relation with this policy. The Personal
          Information that we collect are used for providing and improving the
          Service. We will not use or share your information with anyone except
          as described in this Privacy Policy.
        </Typography>
        <Typography variant="body2" mt={2}>
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which is accessible at Website URL, unless
          otherwise defined in this Privacy Policy.
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom mt={5}>
          Information Collection and Use
        </Typography>
        <Typography variant="body2" mt={2}>
          For a better experience while using our Service, we may require you to
          provide us with certain personally identifiable information, including
          but not limited to your name, phone number, and postal address. The
          information that we collect will be used to contact or identify you.
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom mt={5}>
          Cookies
        </Typography>
        <Typography variant="body2" mt={2}>
          Cookies are files with small amount of data that is commonly used an
          anonymous unique identifier. These are sent to your browser from the
          website that you visit and are stored on your computer's hard drive.
        </Typography>
        <Typography variant="body2" mt={2}>
          Our website uses these “cookies” to collection information and to
          improve our Service. You have the option to either accept or refuse
          these cookies, and know when a cookie is being sent to your computer.
          If you choose to refuse our cookies, you may not be able to use some
          portions of our Service.
        </Typography>
      </Box>
    </div>
  );
}

export default PrivacyPolicy;
