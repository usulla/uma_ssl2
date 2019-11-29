import Licenses from "../src/pages/Licenses/Licenses.jsx";
import App from "../src/components/App/App.jsx";
import appData from "../src/components/App/appData.json";

function LicensesPage() {
  const { dataLicenses } = appData;
  return (
    <App>
      <Licenses dataLicenses={dataLicenses} />
    </App>
  );
}
export default LicensesPage;
