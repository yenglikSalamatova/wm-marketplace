import { HelmetProvider, Helmet } from "react-helmet-async";

const AccountSettingsPage: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Account Settings - WM Marketplace</title>
        </Helmet>
      </HelmetProvider>

      <h1>Account Settings</h1>
    </>
  );
};

export default AccountSettingsPage;
