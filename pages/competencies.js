import Competencies from "../src/pages/Competencies/Competencies.jsx";
import App from "../src/components/App/App.jsx";
import appData from "../src/components/App/appData.json";

function CompetenciesPage() {
  const { dataCompetencies } = appData;
  return (
    <App>
      <Competencies dataCompetencies={dataCompetencies} />
    </App>
  );
}
export default CompetenciesPage;
